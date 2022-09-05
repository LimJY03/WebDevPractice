<?php

// Receive Email Contents
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Create Email Details
$email_from = 'info@universitywebdesign.com'
$email_subject = 'New Form Submission';
$email_body = "User Name: $name.\n" . "User Email: $visitor_email.\n" . "Subject: $subject.\n" . "User Message: $message.\n";
$email_to = 'limjunyi03@gmail.com';

// Construct Email Header
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

// Send Mail
mail($email_to, $email_subject, $email_body, $headers);
header("Location: ../contact.html");
?>