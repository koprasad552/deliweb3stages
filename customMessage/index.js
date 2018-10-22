let cb;
try {
  exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event));
   if(event.triggerSource === "CustomMessage_SignUp") {
            // Ensure that your message contains event.request.codeParameter. This is the placeholder for code that will be sent
            event.response.emailSubject = "Verification mail";
            event.response.emailMessage = "<p>Hi,</p><p>Thanks for signing up with Deliforce. We welcome you to our platform. Click on the link below to verify your email address and get started.</p>"+ event.request.linkParameter +"<p>If you face any trouble verifying the email and signing in, click on our support link given below. We would love to hear from you for assistance.</p><p>Your’s</p><p padding-top:-5px>Team Deliforce</p>";
        } else if(event.triggerSource === "CustomMessage_ForgotPassword") {
            // Ensure that your message contains event.request.codeParameter. This is the placeholder for code that will be sent
             event.response.emailSubject = "Forgot password";
            event.response.emailMessage = "<p>Hi,</p><p>It seems like you have forgotten your password for your Deliforce account. No, worries. Click on the link below to reset your password.Reset your password to enjoy seamless operations with Deliforce.</p>"+ event.request.codeParameter+"<p>Your’s</p><p>Team Deliforce</p>";
             
        }
    callback(null, event);
  };

}catch (err) {
  console.error('error +++', err);
  cb(err, event);
}