<?php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check if all fields are filled
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Set recipient email address
        $to = "pruthvirajpatil132@gmail.com"; // my email addres

        // Set email subject
        $subject = "New Contact Form Submission from $name";

        // Build email content
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // Set email headers
        $headers = "From: $name <$email>";

        // Attempt to send email
        if (mail($to, $subject, $email_content, $headers)) {
            // Email sent successfully
            echo json_encode(array('status' => 'success', 'message' => 'Your message has been sent successfully.'));
            exit;
        } else {
            // Email not sent
            echo json_encode(array('status' => 'error', 'message' => 'Oops! Something went wrong. Please try again later.'));
            exit;
        }
    } else {
        // Required fields are empty
        echo json_encode(array('status' => 'error', 'message' => 'Please fill out all the fields.'));
        exit;
    }
} else {
    // Redirect back to the form if accessed directly
    header("Location: index.html");
    exit;
}

?>
