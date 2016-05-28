<?php
//Table GkUpdates
//            id,text,langCode
//Table GkAppMapping
//          id,GkId,AppId

//      http://xercesblue.in/onlinexamserver/liquid_data/CurrentGKCenter/getLatestGkUpdates.php?pageno=1&langCode=hi&AppId=1

//      Link with complete date based
//      http://xercesblue.in/onlinexamserver/liquid_data/CurrentGKCenter/test.php?pageno=1&langCode=hi&AppId=1&date=00&month=01&year=2014

include("../database_connection.php");

$pageNum =  $_REQUEST['pageno'];
$LangCode = $_REQUEST['langCode'];
$AppId = $_REQUEST['AppId'];

$totalLimit = 6;
$pageNumLimit = ( $pageNum - 1 ) * $totalLimit;

if( !isset( $_REQUEST['date'] ) and !isset( $_REQUEST['month'] ) and  !isset( $_REQUEST['year'] ) )
{
    $selectQuery = "select * from GkUpdates where id in ( select GkId from GkAppMapping where AppId = ".$AppId." ) and langCode = '".$LangCode."' order by id desc limit ".$pageNumLimit.",".$totalLimit;                           
    //echo "query:     " . $selectQuery."<br>";
}
else if( $_REQUEST['date'] != "00" )
{
    $selectQuery = "select * from GkUpdates where id in ( select GkId from GkAppMapping where AppId = ".$AppId." ) and langCode = '".$LangCode."' and date = '".$_REQUEST['year']."-".$_REQUEST['month']."-".$_REQUEST['date']."' order by id desc limit ".$pageNumLimit.",".$totalLimit;                           
    //echo "query:     " . $selectQuery."<br>";    
}
else if( $_REQUEST['month'] != "00" )
{
    $selectQuery = "select * from GkUpdates where id in ( select GkId from GkAppMapping where AppId = ".$AppId." ) and langCode = '".$LangCode."' and date like '".$_REQUEST['year']."-".$_REQUEST['month']."-%' order by id desc limit ".$pageNumLimit.",".$totalLimit;                           
    //echo "query:     " . $selectQuery."<br>";    
}
else if( $_REQUEST['year'] != "00" )
{
    $selectQuery = "select * from GkUpdates where id in ( select GkId from GkAppMapping where AppId = ".$AppId." ) and langCode = '".$LangCode."' and date like '".$_REQUEST['year']."-%' order by id desc limit ".$pageNumLimit.",".$totalLimit;                           
    //echo "query:     " . $selectQuery."<br>";    
}
$jsonArray = array();
//$queryResult = mysql_query($selectQuery);
$queryResult = $db->query($selectQuery);
$rowCount = mysqli_num_rows($queryResult) ;
if($rowCount <= 0)
{
    $jsonArray['errorNoMorePages'] = "Please go back to previous page! No more content.";
}
else if($rowCount > 0)
{
    $rowCount = 1;
    while($row = mysqli_fetch_array( $queryResult ) ) 
    {
        //array_push($jsonArray,$row['GkContent']);
        $jsonArray[ $rowCount ] = $row['GkContent'];
        
        $rowCount++;
    }
}
echo json_encode($jsonArray);

?>