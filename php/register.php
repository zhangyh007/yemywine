<?php
	header("content-type:text/html;charset=utf-8");
	$username=$_GET["uname"];
	$userpwd=$_GET["upwd"];
	$userstatus=$_GET["ustatus"];
	//echo $username;
	//连接数据库
	$db=mysql_connect("localhost","root","root");
	
	//打开数据源
	mysql_select_db("db1705",$db);
	
	//设置字符编码
	mysql_query("set names utf8");
	
	//编写sql语句
	if($userstatus=="register"){
		$sql="INSERT INTO `students`(`uname`, `upwd`) VALUES ('$username','$userpwd')";
		//执行sql语句
		$res=mysql_query($sql);
		if($res){
			echo "1";//用户名不重复
			
		}else{
			echo "0";//用户名重复了
		}
	}else if($userstatus=="check"){
		//$sql = "select * from users where uname='$uname'";
		$sql="select * from `students` where uname='$username'";
		$res=mysql_query($sql);
		$arr = mysql_fetch_array( $res );
		if($arr){
				echo "1";//用户名重复了
		}else{
			echo "0";//用户名不重复
			//echo "<script>alert('注册成功');</script>";
		}
	}else if($userstatus=="login"){
		$sql="SELECT * FROM `students` WHERE uname='$username'";
	
		//执行sql语句
		$res=mysql_query($sql);
		$arr=mysql_fetch_array($res);
		if($arr){
			if($userpwd==$arr["upwd"]){
				echo "1" ;//登陆成功了
			}else{
				echo "0" ;//密码错了
			}
		}else{
			echo "2" ;//用户名不存在
		}
	}
?>