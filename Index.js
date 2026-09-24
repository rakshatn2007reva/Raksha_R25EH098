const axios = require("axios");

async function getGitHubUser() {
  try {
    const response = await axios.get(
      "https://api.github.com/users/octocat"
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error fetching GitHub user:", error.message);
  }
}

getGitHubUser();
