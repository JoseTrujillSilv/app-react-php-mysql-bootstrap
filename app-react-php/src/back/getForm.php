<?php

header('Access-Control-Allow-Origin: *'); // Not recommended for production
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

require_once './database.php';

$result = bbdd()->query("SELECT * FROM personas");

$arrayJson = [];

// Check if query succeeded
if ($result) {
  // Fetch all rows as associative arrays
  while ($row = $result->fetch_assoc()) {
    // Add each row to the array
    $arrayJson[] = $row;
  }
} else {
  // Handle query error (consider logging or returning error message)
  echo "Error fetching data: " . bbdd()->error;
}

// Encode the array to JSON
$jsonString = json_encode($arrayJson);

// Output the JSON string
echo $jsonString;
