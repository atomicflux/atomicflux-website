(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  if (reduceMotion) return;

  var visual = document.querySelector(".hero-visual");
  if (!visual) return;
  var floaters = visual.querySelectorAll(".float-card, .app-icon-float");

  visual.addEventListener("mousemove", function (e) {
    var rect = visual.getBoundingClientRect();
    var relX = (e.clientX - rect.left) / rect.width - 0.5;
    var relY = (e.clientY - rect.top) / rect.height - 0.5;
    floaters.forEach(function (el, i) {
      var depth = (i % 3) + 1;
      var moveX = relX * depth * 8;
      var moveY = relY * depth * 8;
      var baseRotate = el.dataset.baseRotate;
      if (baseRotate === undefined) {
        var m = el.style.transform.match(/rotate\((-?\d+)deg\)/);
        baseRotate = m ? m[1] : "0";
        el.dataset.baseRotate = baseRotate;
      }
      var extra = el.classList.contains("app-icon-float") ? " translateX(-50%)" : "";
      el.style.transform =
        (el.classList.contains("app-icon-float") ? "" : "") +
        "translate(" + moveX + "px," + moveY + "px)" +
        extra +
        " rotate(" + baseRotate + "deg)";
    });
  });

  visual.addEventListener("mouseleave", function () {
    floaters.forEach(function (el) {
      var baseRotate = el.dataset.baseRotate || "0";
      var extra = el.classList.contains("app-icon-float") ? " translateX(-50%)" : "";
      el.style.transform = extra + " rotate(" + baseRotate + "deg)";
    });
  });
})();
