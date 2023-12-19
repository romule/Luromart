<?
echo "connected!"
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) $name = htmlspecialchars($_POST['name']);
    if (isset($_POST['email'])) $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    if (isset($_POST['message'])) $message = htmlspecialchars($_POST['message']);
    if (isset($_POST['subject'])) $subject = htmlspecialchars($_POST['subject']);

    // Basic input validation
    if (empty($name) || empty($email) || empty($message) || empty($subject)) {
        die("Error: All fields are required.");
    }

    $content = "From: $name \n Email: $email \n Message: $message";
    // $recipient = "luda.bogoslov.1968@gmail.com";

    $recipient = "romashbis@gmail.com"; // for testing purpose

    $mailheader = "From: $email \r\n";

    // Try sending the email and handle errors
    if (mail($recipient, $subject, $content, $mailheader)) {
        echo "Email sent!";
        // Example success message
        echo '<script>showMessage("Email sent!", false);</script>';
    } else {
        echo "Error: Unable to send email.";
        echo '<script>showMessage("Error: Unable to send email.", true);</script>';

    }
}?>