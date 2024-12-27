"use client";


// set cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// get cookie
function getCookie(name) {
  const value = `; ${document?.cookie}`;
  const parts = value?.split(`; ${name}=`);
  if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
}
function clearAccessToken() {
  // Set the accessToken cookie with an expiration date in the past
  document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}



export { setCookie, getCookie,clearAccessToken };

