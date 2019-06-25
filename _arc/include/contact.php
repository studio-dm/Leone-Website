<?php

$first_name=$_REQUEST['first_name'];
$last_name=$_REQUEST['last_name'];
$email=$_REQUEST['email'];
$message=$_REQUEST['message'];
$phone=$_REQUEST['phone'];

// Multiple recipients
$to = 'bobtbb@gmail.com'; // note tde comma

// Subject
$subject = 'Website Signup [Get Started]';

// Message
$message = '
<html>
<head>
  <title>Get Started Signup</title>
</head>
<body>
  <p>This is a new sign-up from Get Started</p>
  <table>
    <tr>
	<td><strong>First Name</strong></td><td><strong>Last Name</strong></td><td><strong>Email</strong></td>
    </tr>
    <tr>
      <td>'.$first_name.'</td><td>'.$last_name.'</td><td>'.$email.'</td>
    </tr>
    <tr>
      <td><p>&nbsp;</td>
    </tr>
	<tr>
	<td><strong>Phone</strong></td></td>
	</tr>
	<tr>
      <td>'.$phone.'</td>
    </tr>
	 <tr>
      <td><p>&nbsp;</td>
    </tr>
	<td><strong>Message<s/trong></td>
	</tr>
	<tr>
      <td>'.$message.'</td>
    </tr>
  </table>
</body>
</html>
';

// To send HTML mail, tde Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
//$headers[] = 'To: Mary <mary@example.com>, Kelly <kelly@example.com>';
$headers[] = 'From: '.$email;
//$headers[] = 'Cc: birtddayarchive@example.com';
//$headers[] = 'Bcc: birtddaycheck@example.com';

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));
?>
