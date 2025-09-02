# Portfolio Backend Server

This is the backend server for the portfolio website contact form functionality.

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Environment Variables
Create a `.env` file in the server directory with the following variables:

```env
EMAIL_USER=smarttutor253@gmail.com
EMAIL_PASS=pggl mteg guur hcjd
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

### 3. Start the Server

For development (with auto-restart):
```bash
npm run dev
```

For production:
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### POST /api/contact
Sends an email from the contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in working with you."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Email Configuration

The server uses Gmail SMTP with the provided credentials. Make sure:
1. The Gmail account has 2-factor authentication enabled
2. An app-specific password is generated and used in `EMAIL_PASS`
3. The email account is properly configured for sending emails

## Dependencies

- **express**: Web framework
- **nodemailer**: Email sending library
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
