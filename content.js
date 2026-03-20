(function () {
  const url = window.location.href;

  // Only run on PR pages
  if (!url.includes("/pull-requests/")) return;

  // Prevent infinite loop
  if (url.includes("switcher_done=true")) return;

  console.log("Redirecting via Atlassian account selector...");

  const redirectUrl =
    "https://id.atlassian.com/login?" +
    "application=bitbucket" +
    "&prompt=select_account" +
    "&continue=" + encodeURIComponent(url + (url.includes("?") ? "&" : "?") + "switcher_done=true");

  window.location.href = redirectUrl;
})();