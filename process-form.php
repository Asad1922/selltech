<?php
// process-form.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Email configuration
$to_email = "info@selltech.pro";
$from_email = "noreply@selltech.pro";
$from_name = "SellTech Website";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Get form data
        $form_type = $_POST['form_type'] ?? '';
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $phone = $_POST['phone'] ?? '';
        $message = $_POST['message'] ?? '';
        
        // Validate required fields
        if (empty($name) || empty($email) || empty($phone)) {
            throw new Exception('Please fill all required fields.');
        }
        
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Please enter a valid email address.');
        }
        
        // Prepare email content based on form type
        if ($form_type === 'quote') {
            $business = $_POST['business'] ?? '';
            $website = $_POST['website'] ?? '';
            $service = $_POST['service'] ?? '';
            $budget = $_POST['budget'] ?? '';
            
            $subject = "New Quote Request from " . $name;
            $email_body = "
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .header { background: #dc2824; color: white; padding: 20px; text-align: center; }
                    .content { padding: 20px; }
                    .field { margin: 10px 0; }
                    .label { font-weight: bold; color: #dc2824; }
                    .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class='header'>
                    <h2>New Quote Request - SellTech</h2>
                </div>
                <div class='content'>
                    <div class='field'><span class='label'>Name:</span> {$name}</div>
                    <div class='field'><span class='label'>Email:</span> {$email}</div>
                    <div class='field'><span class='label'>Phone:</span> {$phone}</div>
                    <div class='field'><span class='label'>Business Name:</span> {$business}</div>
                    <div class='field'><span class='label'>Website:</span> {$website}</div>
                    <div class='field'><span class='label'>Service Required:</span> {$service}</div>
                    <div class='field'><span class='label'>Budget Range:</span> {$budget}</div>
                    <div class='field'><span class='label'>Project Details:</span><br>{$message}</div>
                </div>
                <div class='footer'>
                    <p>This email was sent from SellTech website quote form.</p>
                    <p>Received on: " . date('Y-m-d H:i:s') . "</p>
                </div>
            </body>
            </html>";
            
        } else if ($form_type === 'contact') {
            $subject = "New Contact Message from " . $name;
            $email_body = "
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .header { background: #dc2824; color: white; padding: 20px; text-align: center; }
                    .content { padding: 20px; }
                    .field { margin: 10px 0; }
                    .label { font-weight: bold; color: #dc2824; }
                    .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class='header'>
                    <h2>New Contact Message - SellTech</h2>
                </div>
                <div class='content'>
                    <div class='field'><span class='label'>Name:</span> {$name}</div>
                    <div class='field'><span class='label'>Email:</span> {$email}</div>
                    <div class='field'><span class='label'>Phone:</span> {$phone}</div>
                    <div class='field'><span class='label'>Message:</span><br>{$message}</div>
                </div>
                <div class='footer'>
                    <p>This email was sent from SellTech website contact form.</p>
                    <p>Received on: " . date('Y-m-d H:i:s') . "</p>
                </div>
            </body>
            </html>";
        }
        
        // Email headers
        $headers = array(
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            'From: ' . $from_name . ' <' . $from_email . '>',
            'Reply-To: ' . $email,
            'X-Mailer: PHP/' . phpversion()
        );
        
        // Send email
        $mail_sent = mail($to_email, $subject, $email_body, implode("\r\n", $headers));
        
        if ($mail_sent) {
            // Send auto-reply to user
            $auto_reply_subject = "Thank you for contacting SellTech";
            $auto_reply_body = "
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .header { background: #dc2824; color: white; padding: 20px; text-align: center; }
                    .content { padding: 20px; }
                    .footer { background: #f8f9fa; padding: 15px; text-align: center; }
                </style>
            </head>
            <body>
                <div class='header'>
                    <h2>Thank You - SellTech</h2>
                </div>
                <div class='content'>
                    <p>Dear {$name},</p>
                    <p>Thank you for reaching out to SellTech! We have received your " . ($form_type === 'quote' ? 'quote request' : 'message') . " and our team will review it carefully.</p>
                    <p>We typically respond within 24 hours during business days. If your inquiry is urgent, please call us directly.</p>
                    <p>Best regards,<br>SellTech Team</p>
                </div>
                <div class='footer'>
                    <p>SellTech - Your Partner in Digital Transformation</p>
                    <p>This is an automated response. Please do not reply to this email.</p>
                </div>
            </body>
            </html>";
            
            $auto_reply_headers = array(
                'MIME-Version: 1.0',
                'Content-type: text/html; charset=UTF-8',
                'From: ' . $from_name . ' <' . $from_email . '>',
                'X-Mailer: PHP/' . phpversion()
            );
            
            mail($email, $auto_reply_subject, $auto_reply_body, implode("\r\n", $auto_reply_headers));
            
            echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
        } else {
            throw new Exception('Failed to send email. Please try again.');
        }
        
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>