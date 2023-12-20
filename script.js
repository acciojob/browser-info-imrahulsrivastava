// Write your script here

document.addEventListener("DOMContentLoaded", function () {
  const div = document.createElement("div");
  div.id = "browser-info";
  div.innerText = `You are using ${navigator.appName} version ${navigator.appVersion}`;
  document.body.insertBefore(div, document.body.firstChild);
});
