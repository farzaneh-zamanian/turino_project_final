"use client";

function setCookie(name, value, days = 30) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/ `;
}

function getCookie(name) {

  // if (typeof window === 'undefined') {
  //   console.log("not")
  //   return null; // Return null if not in a browser environment
  // }


  const value = `; ${document?.cookie}`;
  const parts = value?.split(`; ${name}=`);
  // if (parts.length === 2) {
  //   return parts.pop().split(";").shift();
  // }
  // return null; // Return null if the cookie is not found
  if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
}

export { setCookie, getCookie };

// function setCookie(name, value, days = 30) {
//   const maxAge = days * 24 * 60 * 60; // Calculate max age in seconds
//   document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/;`;
// }

// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) {
//     return decodeURIComponent(parts.pop().split(";").shift());
//   }
//   return null; // Return null if the cookie is not found
// }

// export { setCookie, getCookie };