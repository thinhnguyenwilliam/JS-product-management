const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/database');
const routeAdmin = require('./routes/admin/index.route');
const routeClient = require('./routes/client/index.route');
const cookieParser = require('cookie-parser');


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //typically used in HTML form submissions
app.use(cookieParser());

//app.use(cors()); // Enable CORS for all routes
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = ["http://localhost:3000", "http://example.com"];
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);



// Connect to MongoDB
connectDB();

// Routes
routeAdmin.index(app);
routeClient.index(app);


// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
