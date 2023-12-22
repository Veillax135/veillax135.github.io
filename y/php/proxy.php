<?php
$httpApiBaseUrl = "http://172.172.79.84:5000"; // Base URL of the HTTP API

$requestedEndpoint = $_GET['endpoint'];
$videoId = $_GET['v'];

$httpApiUrl = $httpApiBaseUrl . "/" . $requestedEndpoint . "?id=" . $videoId;

// Fetch data from the HTTP API using cURL
$ch = curl_init($httpApiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$responseData = curl_exec($ch);
curl_close($ch);

// Send the fetched data as a JSON response
header('Content-Type: application/json');
echo $responseData;
?>
