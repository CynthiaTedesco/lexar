<?php
$output_dir = "../uploads/";

$uploads = scandir($output_dir);
foreach ($uploads as &$filename) {
	if ($filename != '.' && $filename != '..'){
		$filename=str_replace("..",".",$filename); //required. if somebody is trying parent folder files
		$filePath = $output_dir. $filename;
		if (file_exists($filePath)) {
	        unlink($filePath);
	    }
	}
}
?>