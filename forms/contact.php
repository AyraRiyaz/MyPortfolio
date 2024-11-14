<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

// Retrieve form data
$name = $_POST['name'];
$mailFrom = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Disable verbose debug output
    $mail->isSMTP();                           // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';      // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                  // Enable SMTP authentication
    $mail->Username   = '21gcs22@meaec.edu.in';  // Your Gmail address
    $mail->Password   = 'gbzobahglpexfykt';        // Your Gmail password or App password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption
    $mail->Port       = 587;                   // TCP port to connect to

    //Recipients
    $mail->setFrom('21gcs22@meaec.edu.in', $name);  // Use your Gmail as sender
    $mail->addAddress('riyazayra@gmail.com');  // Your recipient email address

    // Content
    $mail->isHTML(true);                       // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $message;

    $mail->send();
    echo 'Message has been sent successfully!';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
