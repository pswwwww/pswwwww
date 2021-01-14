<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = "SELECT *FROM `users` WHERE `username`='$username' AND `password`='$password'";

$link = mysqli_connect('127.0.0.1','root','root','xiangmu');
$res = mysqli_query($link,$sql);
$date = mysqli_fetch_all($res,MYSQLI_ASSOC);
mysqli_close($link);
if(count($date)){
    $arr = array(
        'message'=>'登陆成功',
        'code'=>1,
        'nickname'=>$date[0]['nickname']
    );
}else{
    $arr = array(
        'message' => '登陆失败',
        'code' => 0
    );
}
echo json_encode($arr);

?>