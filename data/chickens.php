<?php
  $servername = "localhost";
  $username = "www";
  $password = "Lemmings42";
  $database = "chickens";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);

  // Check connection
  if ($conn->connect_error)
  {
      die("Connection failed: " . $conn->connect_error);
  }

  if($result = $conn->query("SELECT * FROM chickens"))
  {
    $encode = array();

    while($row = mysqli_fetch_assoc($result))
    {
      $encode[] = $row;
    }

    echo json_encode($encode);
  }
  else
  {
    print "I'unno!!";
  }
