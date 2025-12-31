import fetch from "node-fetch";
import "dotenv/config";

const params = new URLSearchParams({
  code: "4/0ATX87lMt_Tm1OCt-cQp7fW4jETk7gApkkF0boN-DwEugk_DQFkRwUaPyzuwxxTh0knTuRA",
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  redirect_uri: "http://localhost:5000/auth/google/callback",
  grant_type: "authorization_code",
});

const res = await fetch("https://oauth2.googleapis.com/token", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: params,
});

console.log(await res.json());

// https://accounts.google.com/o/oauth2/v2/auth?client_id=PASTE_CLIENT_ID_HERE&redirect_uri=http://localhost:5000/auth/google/callback&response_type=code&scope=https://www.googleapis.com/auth/gmail.send&access_type=offline&prompt=consent
