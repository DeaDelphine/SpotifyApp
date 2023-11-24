const express = require("express");
const app = express();
const port = process.env.PORT || 5678;
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/spotify_db");
  console.log(`[DATABASE] MongoDb is connected`);
}
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenue sur Spotify API");
});

app.use("/playlists", require("../routes/playlistRoutes"));
app.use("/users", require("../routes/userRoutes"));

app.listen(port, () => console.log(`Application is running on port : ${port}`));
