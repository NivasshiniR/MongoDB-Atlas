# MongoDB-Atlas
# Registration Form with MongoDB Integration

This is a simple user registration form built using Node.js, Express, and MongoDB (with Atlas). The form collects a username, email, and password and sends the data to a backend API for storage in a MongoDB database.

## Features
- User registration with validation
- Data stored in MongoDB Atlas
- Responsive form design using basic CSS
  
## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**
- **MongoDB Atlas account and cluster** (or MongoDB installed locally)

## Getting Started

1. **Clone the repository**

        git clone https://github.com/your-username/your-repo-name.git
        cd your-repo-name

2. **Install Dependencies**
- Navigate to the root of the project and install the required dependencies:

       npm install
This will install:

- express for server routing
- mongoose for MongoDB integration
- body-parser for handling form data

3. **MongoDB Setup**
- Create a MongoDB cluster on MongoDB Atlas (or use a local instance of MongoDB).
- Replace the connection string in app.js with your MongoDB URI:

    mongoose.connect('mongodb+srv://your-username:<password>@cluster0.mongodb.net/login-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
4. **Running the Application**
- After setting up the MongoDB connection, start the Node.js server

       node app.js
- The server will run on http://localhost:3000/

5. **Access the Registration Page**
- Open your browser and go to:

      http://localhost:3000/register.html


## Project Structure

```bash
├── public
│   ├── styles.css        # Contains styles for the form
│   ├── scripts.js        # JavaScript for form submission
│   └── register.html     # The registration form
├── routes
│   └── auth.js           # API routes for authentication
├── app.js                # Main application entry point
├── package.json          # Project dependencies
└── README.md             # Project documentation
