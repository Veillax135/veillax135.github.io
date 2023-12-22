<?php
// Base URL of the HTTP API
$httpApiBaseUrl = "http://172.172.79.84:5000";

// Validate and sanitize user input
$requestedEndpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : '';
$videoId = isset($_GET['v']) ? $_GET['v'] : '';

// Check if required parameters are provided
if (empty($requestedEndpoint) || empty($videoId)) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Missing required parameters']);
    exit;
}

// Construct the API URL
$httpApiUrl = $httpApiBaseUrl . "/" . $requestedEndpoint . "?id=" . $videoId;

// Initialize cURL session
$ch = curl_init($httpApiUrl);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10); // Set timeout to 10 seconds

// Execute the cURL request and get the response
$responseData = curl_exec($ch);

// Check for cURL errors
if ($responseData === false) {
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'cURL error: ' . curl_error($ch)]);
    curl_close($ch);
    exit;
}

// Check HTTP status code
$httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if ($httpStatus !== 200) {
    http_response_code($httpStatus);
    echo json_encode(['error' => 'HTTP error: ' . $httpStatus]);
    curl_close($ch);
    exit;
}

// Close cURL session
curl_close($ch);

// Send the fetched data as a JSON response
header('Content-Type: application/json');
echo json_encode($responseData);
?>
