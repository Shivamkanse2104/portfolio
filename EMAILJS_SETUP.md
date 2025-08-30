# EmailJS Setup Guide for Portfolio Contact Form

## 🚀 Complete Email Production System

Your portfolio now has a complete email production system using EmailJS that will send contact form messages directly to your email address!

## 📋 Setup Steps:

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

### 2. Create Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Connect your email account
- Note down the **Service ID**

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```html
Subject: New Portfolio Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

You can reply directly to: {{reply_to}}

Best regards,
EmailJS
```

- Save the template and note down the **Template ID**

### 4. Get Your Public Key
- Go to "Account" → "API Keys"
- Copy your **Public Key**

### 5. Update Your Code
Replace these placeholders in `script.js`:

```javascript
// Replace YOUR_PUBLIC_KEY with your actual EmailJS public key
emailjs.init("YOUR_PUBLIC_KEY");

// Replace YOUR_SERVICE_ID with your EmailJS service ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)

// Replace YOUR_TEMPLATE_ID with your EmailJS template ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

## 🔧 Configuration Example:

```javascript
// Initialize EmailJS
(function() {
    emailjs.init("user_abc123def456"); // Your actual public key
})();

// Send email using EmailJS
emailjs.send('service_xyz789', 'template_abc123', templateParams)
    .then(function(response) {
        // Success handling
    }, function(error) {
        // Error handling
    });
```

## ✨ Features:

### **Real Email Sending:**
- Messages sent directly to your email
- No redirection or email client opening
- Professional email formatting

### **User Experience:**
- Loading states with spinner
- Success/error messages
- Form validation
- Auto-reset after submission

### **Security:**
- Client-side validation
- Rate limiting (EmailJS handles this)
- Professional error handling

## 📧 Email Template Variables:

- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - Visitor's message
- `{{to_name}}` - Your name
- `{{reply_to}}` - Reply-to email address

## 🎯 What Happens When Someone Submits:

1. **Form Validation** - Checks all fields and email format
2. **Loading State** - Shows spinner and "Sending..." text
3. **EmailJS Processing** - Sends email to your address
4. **Success Message** - Confirms message was sent
5. **Form Reset** - Clears form for next use

## 🔒 Free Tier Limits:

- **EmailJS Free**: 200 emails/month
- **Gmail**: 500 emails/day
- **Outlook**: 300 emails/day

## 🚨 Important Notes:

- **Never expose** your private keys in client-side code
- **Public key only** is safe to use in frontend
- **Test thoroughly** before going live
- **Monitor usage** to stay within limits

## 🎉 Result:

Once configured, visitors can fill out your contact form and messages will be sent directly to your email address without any redirection or email client opening!

---

**Need Help?** EmailJS has excellent documentation and support at [docs.emailjs.com](https://docs.emailjs.com/)
