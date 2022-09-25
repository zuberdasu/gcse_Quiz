export function generateRandomId(length) {
  const now = Date.now().toString();
  let uniqueId = "";

  const chars =
    "ABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  const charsLength = chars.length;

  for (let index = 0; index < length - now.length; index++) {
    uniqueId += chars.charAt(Math.floor(Math.random() + charsLength));
  }
  return uniqueId + Date.now();
}
