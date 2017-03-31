var userId
var Password

// Password.length>= 6 && Password.includes ("#") || Password.includes ("$") || Password.includes ("!")
// userId.length>= 6 && !userId.includes ("#") && !userId.includes ("$") && !userId.includes ("!")

function isPasswordvalid(password) {
  return password.length>= 6 && password.includes("1") && (password.includes("#") || password.includes("$") || password.includes("!"))
}

function isuserIdvalid(userId) {
  return userId.length>= 6 && !userId.includes("#") && !userId.includes("$") && !userId.includes("!")
}

function checkcred(userId, password) {
  return isuserIdvalid(userId) && isPasswordvalid(password)
}

function signin() {
  prompt("Input a User Name: ")
  var userId = prompt("Input a User Name: ")
  var password = prompt("Input a Password: ")
  alert("Your credentials are awesome: " + checkcred(userId, password))
}
