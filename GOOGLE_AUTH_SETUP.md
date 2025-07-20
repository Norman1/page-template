# Google Authentication Setup Instructions

To enable Google Sign-In functionality, follow these steps:

## 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. The Google Identity Services API is enabled by default (no need to enable Google+ API)

## 2. Configure OAuth 2.0 Credentials

1. In the Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select "Web application" as the application type
4. Add authorized JavaScript origins:
   - For local development: `http://localhost:8080` (or your local port)
   - For production: Your domain (e.g., `https://yourdomain.com`)
   - For GitHub Pages: `https://yourusername.github.io`
5. You don't need to add redirect URIs for the new Google Identity Services
6. Click "Create"

## 3. Update the Configuration

1. Copy your OAuth 2.0 Client ID
2. Open `config/google-auth.js`
3. Replace `YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com` with your actual Client ID

```javascript
export const GOOGLE_CLIENT_ID = 'your-actual-client-id.apps.googleusercontent.com';
```

## 4. Test the Implementation

1. Start a local web server (e.g., `python -m http.server 8080`)
2. Navigate to your site
3. Click the "Sign in with Google" button
4. Complete the authentication flow
5. Verify that your name and profile picture appear
6. Test the sign-out functionality

## Features Implemented

- **Sign In Button**: Displays Google's official sign-in button when user is not authenticated
- **One-Tap Sign In**: Automatically prompts returning users for quick sign-in
- **User Profile Display**: Shows user's name and profile picture when signed in
- **Session Persistence**: User remains signed in across browser sessions
- **Sign Out**: Allows users to sign out and clear their session
- **JWT-based Authentication**: Uses the new Google Identity Services with secure JWT tokens

## Security Notes

- Never commit your actual Client ID to a public repository
- Consider using environment variables for sensitive configuration
- The authentication state is stored in localStorage for persistence
- Authentication uses JWT tokens from Google Identity Services
- No personal data is stored on your server - authentication is handled entirely by Google

## Troubleshooting

If the authentication doesn't work:

1. Check the browser console for errors
2. Verify your Client ID is correct
3. Ensure your domain is properly authorized in Google Cloud Console
4. Make sure you're accessing the site via the authorized origin (not file://)