const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4567;

const userRoute = require("./routes/userRoute");
const playlistRoute = require("./routes/playlistRoute");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/spotify_db");
  console.log(`[DATABASE] MongoDB is connected !!!`);
}

app.use(express.json());

app.use("api/v1/users", userRoute);
app.use("api/v1/playlist", playlistRoute);

app.listen(port, () => {
  console.log(`SERVER is running on port ${port}`);
});
