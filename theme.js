// HollerPro — shared theme toggle. Persists across pages via localStorage.
(function () {
  var KEY = "hollerpro-theme";
  function apply(t) {
    document.documentElement.setAttribute("data-theme", t);
  }
  // Run ASAP (script is in <head>) to avoid a flash.
  var saved = localStorage.getItem(KEY);
  if (!saved) {
    saved = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  apply(saved);

  window.HollerTheme = {
    toggle: function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var next = cur === "dark" ? "light" : "dark";
      apply(next);
      localStorage.setItem(KEY, next);
    }
  };

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-theme-toggle]");
    if (t) window.HollerTheme.toggle();
  });
})();
