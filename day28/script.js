const APIURL = "https://api.github.com/users/";
getUser("msedkiewicz");
function getUser(username) {
  axios(APIURL + username)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
