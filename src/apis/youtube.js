import axios from "axios";

// const KEY = process.env.YOUTUBE_KEY;
const KEY = "AIzaSyBoSFfB3pPi6g1fUqwS3Xd1UxbjORCyNPs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
