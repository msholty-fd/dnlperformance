<?php
  $file = './wp-content/themes/dnlperformance/dist/index.html';

  if (file_exists($file)) {
      readfile($file);
      exit;
  } else {
      echo 'Didnt exist!!';
  }
?>
