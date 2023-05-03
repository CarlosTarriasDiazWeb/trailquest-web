function setCookie(key, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = d.toUTCString();
    document.cookie = `${key}=${value}; Path=/; Expires=${expires}; Secure`;
  }
  
  function getValue(key) {
    // let name = key + "=";
    // let decodedCookie = decodeURIComponent(document.cookie);
    // let ca = decodedCookie.split(";");
    // for (let i = 0; i < ca.length; i++) {
    //   let c = ca[i];
    //   while (c.charAt(0) == " ") {
    //     c = c.substring(1);
    //   }
    //   if (c.indexOf(name) == 0) {
    //     return c.substring(name.length, c.length);
    //   }
    // }
    // return "";
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${key}=`))
      ?.split("=")[1];
  }
  
  function deleteCookie(key) {
    document.cookie = key + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
  
  function checkCookie(key) {
    if (getValue(key) !== "") console.log("Cookie existe!");
    else console.log("Cookie no existe");
  }