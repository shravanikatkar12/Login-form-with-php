<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:access");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json; charset:UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Athourization, X-Requested-With");
$data=json_decode(file_get_contents("php://input"));
$email=$data->email;
$password=$data->password;
$con= mysqli_connect("localhost", "test", "test", "user", "3306");
  
$sql="insert into login(
email,
password
)
values(
'$email',
'$password'
)";
$result=mysqli_query($con,$sql);
if($result){
$response['data']=array(
'status'=>'valid'
);
echo json_encode($response);
}
else{
$response['data']=array(
'status'=>'ivalid'
);
echo json_encode($response);
}
?>