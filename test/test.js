const axios = require("axios");

axios
  .get("http://localhost:4000")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
