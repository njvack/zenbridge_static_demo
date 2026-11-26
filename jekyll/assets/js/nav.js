// Progressive enhancement for the main menu.
// Without JavaScript every link is visible; this script adds the
// mobile "Menu" toggle and the collapsible "About Us" submenu.
(function () {
  "use strict";

  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (!nav || !toggle) return;

  var list = document.getElementById(toggle.getAttribute("aria-controls"));
  var parents = nav.querySelectorAll(".site-nav__parent");
  var mobile = window.matchMedia("(max-width: 47.99em)");

  function setExpanded(button, open) {
    button.setAttribute("aria-expanded", String(open));
    var target = document.getElementById(button.getAttribute("aria-controls"));
    if (target) target.hidden = !open;
  }

  function closeSubmenus(except) {
    parents.forEach(function (p) {
      if (p !== except) setExpanded(p, false);
    });
  }

  // Mobile menu toggle.
  toggle.hidden = false;
  function syncToggle() {
    if (mobile.matches) {
      setExpanded(toggle, toggle.getAttribute("aria-expanded") === "true");
    } else {
      list.hidden = false;
    }
  }
  toggle.addEventListener("click", function () {
    setExpanded(toggle, toggle.getAttribute("aria-expanded") !== "true");
  });
  mobile.addEventListener("change", syncToggle);
  syncToggle();

  // Submenus.
  parents.forEach(function (button) {
    setExpanded(button, false);
    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") !== "true";
      closeSubmenus(button);
      setExpanded(button, open);
    });
  });

  // Escape closes an open submenu (or the mobile menu) and returns focus.
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    var open = nav.querySelector('.site-nav__parent[aria-expanded="true"]');
    if (open) {
      setExpanded(open, false);
      open.focus();
    } else if (mobile.matches && toggle.getAttribute("aria-expanded") === "true") {
      setExpanded(toggle, false);
      toggle.focus();
    }
  });

  // Clicking or tabbing outside a submenu closes it.
  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target)) closeSubmenus();
  });
  nav.addEventListener("focusout", function (event) {
    var item = event.target.closest(".site-nav__item--has-children");
    if (item && !item.contains(event.relatedTarget)) {
      closeSubmenus();
    }
  });
})();
