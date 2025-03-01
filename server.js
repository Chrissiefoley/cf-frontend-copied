// server.js
const express = require('express');
const path = require("path");
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY; 

console.log("SUPABASE_URL:", SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", SUPABASE_ANON_KEY);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('test-public')); // Serve static files from 'public' directory

// New POST endpoint
app.post("/api/new_book", async (req, res) => {
  try {
    // Call the Supabase Edge Function for books
    const response = await fetch(`${SUPABASE_URL}/functions/v1/books`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      throw new Error(
        `Supabase returned ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("GET request error:", error);
    res.status(500).json({ error: error.message });
  }
});

// New GET endpoint
app.get("/api/books", async (req, res) => {
  try {
    // Call the Supabase Edge Function for books
    const response = await fetch(`${SUPABASE_URL}/functions/v1/books`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Supabase returned ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("GET request error:", error);
    res.status(500).json({ error: error.message });
  }
});

//New DELETE endpoint
app.get("/api/delete_books", async (req, res) => {
  try {
    // Call the Supabase Edge Function for books
    const response = await fetch(`${SUPABASE_URL}/functions/v1/books`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Supabase returned ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("GET request error:", error);
    res.status(500).json({ error: error.message });
  }
});


// New PUT(Update) endpoint




// New POST endpoint
app.post("/api/new_favourites", async (req, res) => {
  try {
    // Call the Supabase Edge Function for favourites
    const response = await fetch(`${SUPABASE_URL}/functions/v1/favourites`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      throw new Error(
        `Supabase returned ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("GET request error:", error);
    res.status(500).json({ error: error.message });
  }
});

// New GET endpoint
app.get("/api/favourite_books", async (req, res) => {
  try {
    // Call the Supabase Edge Function for favourites
    const response = await fetch(`${SUPABASE_URL}/functions/v1/favourites`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Supabase returned ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("GET request error:", error);
    res.status(500).json({ error: error.message });
  }
});

//New DELETE endpoint
app.get("/api/delete_favourites", async (req, res) => {
  try {
    // Call the Supabase Edge Function for favourites
    const response = await fetch(`${SUPABASE_URL}/functions/v1/favourites`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Supabase returned ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("GET request error:", error);
    res.status(500).json({ error: error.message });
  }
});


// New PUT(Update) endpoint







// New POST endpoint
app.post("/api/new_ratings", async (req, res) => {
  try {
    // Call the Supabase Edge Function for ratings
    const response = await fetch(`${SUPABASE_URL}/functions/v1/ratings`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      throw new Error(
        `Supabase returned ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("GET request error:", error);
    res.status(500).json({ error: error.message });
  }
});

// New GET endpoint
app.get("/api/ratings", async (req, res) => {
  try {
    // Call the Supabase Edge Function for ratings
    const response = await fetch(`${SUPABASE_URL}/functions/v1/ratings`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Supabase returned ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("GET request error:", error);
    res.status(500).json({ error: error.message });
  }
});

//New DELETE endpoint
app.get("/api/delete_ratings", async (req, res) => {
  try {
    // Call the Supabase Edge Function for ratings
    const response = await fetch(`${SUPABASE_URL}/functions/v1/ratings`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Supabase returned ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("GET request error:", error);
    res.status(500).json({ error: error.message });
  }
});


// New PUT(Update) endpoint







// Start server
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});