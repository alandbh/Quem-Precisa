export function getLang() {
  if (typeof navigator === `undefined`) {
    return "pt"
  }

  const lang =
    navigator && navigator.language && navigator.language.split("-")[0]
  if (!lang) return "pt"

  switch (lang) {
    case "en":
      return "en"
    default:
      return "pt"
  }
}

export function getCookie(cname) {
  var name = cname + "="
  var decodedCookie =
    typeof document !== "undefined" ? decodeURIComponent(document.cookie) : ""

  var ca = decodedCookie.split(";")
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === " ") {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

function t(stringPt, stringEn) {
  let langCookie =
    getCookie("langCookie") !== "" ? getCookie("langCookie") : getLang()

  return langCookie === "pt" ? stringPt : stringEn
}

export default t
