/*!
 * HC Off-canvas Nav
 * ===================
 * Version: 3.0.0
 * Author: Some Web Media
 * Author URL: http://somewebmedia.com
 * Plugin URL: https://github.com/somewebmedia/hc-offcanvas-nav
 * Description: jQuery plugin for creating off-canvas multi-level navigations
 * License: MIT
 */
!(function (O, e) {
  "use strict";
  var a,
    l,
    B = e.document,
    S =
      (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (!!navigator.platform &&
          /iPad|iPhone|iPod/.test(navigator.platform))) &&
      !e.MSStream,
    N =
      "ontouchstart" in e ||
      navigator.maxTouchPoints ||
      (e.DocumentTouch && B instanceof DocumentTouch),
    P = function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    M = function (e) {
      return e.stopPropagation();
    },
    A = function (n, a, l) {
      return function (e) {
        n && e.preventDefault(),
          a && e.stopPropagation(),
          "function" == typeof l && l();
      };
    },
    D = function e(n) {
      return "string" == typeof n
        ? n
        : n.attr("id")
        ? "#" + n.attr("id")
        : n.attr("class")
        ? n.prop("tagName").toLowerCase() +
          "." +
          n.attr("class").replace(/\s+/g, ".")
        : e(n.parent()) + " " + n.prop("tagName").toLowerCase();
    },
    E =
      ((a = O("head")),
      (l = "hc-offcanvas-nav-style"),
      function (e) {
        var n = a.find("style#" + l);
        n.length
          ? n.html(n.html() + e)
          : O('<style id="' + l + '">' + e + "</style>").appendTo(a);
      }),
    H = function (e, n, a) {
      var l = a.children("li"),
        t = l.length,
        o =
          -1 < n
            ? Math.max(0, Math.min(n - 1, t))
            : Math.max(0, Math.min(t + n + 1, t));
      0 === o ? a.prepend(e) : l.eq(o - 1).after(e);
    },
    W = 0;
  O.fn.extend({
    hcOffcanvasNav: function (e) {
      if (!this.length) return this;
      var l,
        y = O.extend(
          {},
          {
            maxWidth: 1024,
            pushContent: !1,
            side: "left",
            levelOpen: "overlap",
            levelSpacing: 40,
            levelTitles: !1,
            navTitle: null,
            navClass: "",
            disableBody: !0,
            closeOnClick: !0,
            customToggle: null,
            insertClose: !0,
            insertBack: !0,
            labelClose: "Close",
            labelBack: "Back",
          },
          e
        ),
        x = O(B.getElementsByTagName("html")[0]),
        T = (O(B), O(B.body)),
        w =
          ((l = (function (e) {
            var n = ["Webkit", "Moz", "Ms", "O"],
              a = (B.body || B.documentElement).style,
              l = e.charAt(0).toUpperCase() + e.slice(1);
            if (void 0 !== a[e]) return e;
            for (var t = 0; t < n.length; t++)
              if (void 0 !== a[n[t] + l]) return n[t] + l;
            return !1;
          })("transform")),
          function (e, n) {
            if (l) {
              var a = "left" === y.side ? n : -n;
              e.css(l, "translate3d(" + a + "px,0,0)");
            } else e.css(y.side, n);
          });
      return this.each(function () {
        var e = O(this),
          n = void 0;
        if (e.is("ul")) n = e.clone().wrap("<nav>").parent();
        else if (e.is("nav")) n = e.clone();
        else if (!(n = e.find("nav, ul").first().clone()).length)
          return void console.log(
            "%c! HC Offcanvas Nav:%c There is no <nav> or <ul> elements in your menu.",
            "color: red",
            "color: black"
          );
        var a = n.find("ul");
        if (a.length) {
          var p = "hc-nav-" + ++W,
            v = {},
            l = !1,
            t = 0,
            s = 0,
            o = void 0,
            i = null,
            r = void 0,
            c = void 0;
          e.addClass("hc-nav " + p),
            y.customToggle
              ? (r = O(y.customToggle).addClass(p).on("click", C))
              : ((r = O(
                  '<a class="hc-nav-trigger ' + p + '"><span></span></a>'
                ).on("click", C)),
                e.after(r));
          var d = n
              .children("ul")
              .wrapAll('<div class="nav-wrapper nav-wrapper-1">')
              .parent()
              .on("click", M)
              .wrap('<div class="nav-container">')
              .parent(),
            f =
              "\n          .hc-offcanvas-nav." +
              p +
              " {\n            display: block;\n          }\n          .hc-nav-trigger." +
              p +
              ",\n          " +
              D(y.customToggle) +
              " {\n            display: " +
              (r.css("display") || "block") +
              "\n          }\n          .hc-nav." +
              p +
              " {\n            display: none;\n          }\n          ";
          if (
            (y.maxWidth &&
              (f =
                "@media screen and (max-width: " +
                (y.maxWidth - 1) +
                "px) {\n            " +
                f +
                "\n          }"),
            y.navTitle && d.children().prepend("<h2>" + y.navTitle + "</h2>"),
            E(f),
            n
              .on("click", M)
              .removeAttr("id")
              .removeClass()
              .addClass(
                "\n            hc-offcanvas-nav\n            " +
                  p +
                  "\n            " +
                  (y.navClass || "") +
                  "\n            nav-levels-" +
                  (y.levelOpen || "none") +
                  "\n            side-" +
                  y.side +
                  "\n            " +
                  (y.disableBody ? "disable-body" : "") +
                  "\n            " +
                  (S ? "is-ios" : "") +
                  "\n            " +
                  (N ? "touch-device" : "") +
                  "\n          "
              )
              .find("[id]")
              .removeAttr("id"),
            setTimeout(function () {
              var e;
              (s = d.width()),
                (e = d.css("transition-duration")),
                (o = parseFloat(e) * (/\ds$/.test(e) ? 1e3 : 1)),
                "boolean" != typeof y.pushContent &&
                  (c = O(y.pushContent)).length &&
                  E(
                    D(y.pushContent) +
                      " {\n                transition: " +
                      d.css("transition-property") +
                      " " +
                      d.css("transition-duration") +
                      " " +
                      d.css("transition-timing-function") +
                      ";\n              }"
                  );
            }, 1),
            y.disableBody && n.on("click", k),
            y.closeOnClick && a.find("li").children("a").on("click", k),
            !1 !== y.insertClose)
          ) {
            var h = O(
              '<li class="nav-close"><a href="#">' +
                (y.labelClose || "") +
                "<span></span></a></li>"
            );
            h.children("a").on("click", A(!0, !0, k)),
              !0 === y.insertClose
                ? a.first().prepend(h)
                : P(y.insertClose) &&
                  H(h, y.insertClose, a.first().add(a.siblings("ul")));
          }
          a.each(function () {
            var e = O(this),
              n = e.parents("li").length;
            if (0 !== n) {
              var a = e.parent().addClass("nav-parent"),
                l = a.children("a");
              v[n] || (v[n] = []), v[n].push({ nav: e });
              var t = v[n].length - 1;
              v[n][t].wrapper = e.closest(".nav-wrapper");
              var o = e
                .wrap('<div class="nav-wrapper nav-wrapper-' + (n + 1) + '">')
                .parent()
                .on("click", M);
              if (
                (!y.levelSpacing ||
                  ("expand" !== y.levelOpen &&
                    !1 !== y.levelOpen &&
                    "none" !== y.levelOpen) ||
                  e.css("text-indent", y.levelSpacing * n + "px"),
                !1 === y.levelOpen || "none" === y.levelOpen)
              )
                return;
              !0 === y.levelTitles && o.prepend("<h2>" + l.text() + "</h2>");
              var i = O('<span class="nav-next">').appendTo(l),
                s = O('<label for="' + p + "-" + n + "-" + t + '">').on(
                  "click",
                  M
                ),
                r = O(
                  '<input type="checkbox" id="' + p + "-" + n + "-" + t + '">'
                )
                  .attr("data-level", n)
                  .attr("data-index", t)
                  .on("click", M)
                  .on("change", g);
              if (
                ((v[n][t].checkbox = r),
                a.prepend(r),
                l.attr("href") && "#" !== l.attr("href")
                  ? i.append(s)
                  : l.on("click", A(!0, !0)).prepend(s),
                !1 !== y.insertBack && "overlap" === y.levelOpen)
              ) {
                var c = O(
                  '<li class="nav-back"><a href="#">' +
                    (y.labelBack || "") +
                    "<span></span></a></li>"
                );
                c.children("a").on(
                  "click",
                  A(!0, !0, function () {
                    return b(n, t);
                  })
                ),
                  !0 === y.insertBack
                    ? e.prepend(c)
                    : P(y.insertBack) && H(c, y.insertBack, e);
              }
            }
          }),
            T.append(n);
          var u = function (e, n) {
            if (v[e] && v[e][n]) {
              var a = v[e][n].checkbox,
                l = a.parent("li"),
                t = v[e][n].wrapper;
              a.prop("checked", !1),
                t.removeClass("sub-level-open"),
                l.removeClass("level-open");
            }
          };
        } else console.log("%c! HC Offcanvas Nav:%c Menu must contain <ul> element.", "color: red", "color: black");
        function g() {
          var e,
            n,
            a,
            l,
            t = O(this),
            o = Number(t.attr("data-level")),
            i = Number(t.attr("data-index"));
          t.prop("checked")
            ? ((n = i),
              (a = v[(e = o)][n].checkbox.parent("li")),
              (l = v[e][n].wrapper).addClass("sub-level-open"),
              a.addClass("level-open"),
              "overlap" === y.levelOpen &&
                (l.on("click", function () {
                  return b(e, n);
                }),
                w(d, e * y.levelSpacing),
                c && c.length && w(c, s + e * y.levelSpacing)))
            : b(o, i);
        }
        function m() {
          (l = !0),
            n.addClass("nav-open"),
            r.addClass("toggle-open"),
            "expand" === y.levelOpen && i && clearTimeout(i),
            y.disableBody &&
              ((t = x.scrollTop() || T.scrollTop()),
              B.documentElement.scrollHeight > B.documentElement.offsetHeight &&
                x.addClass("hc-nav-yscroll"),
              T.addClass("hc-nav-open"),
              t && T.css("top", -t)),
            c && c.length && w(c, s);
        }
        function k() {
          (l = !1),
            c && c.length && w(c, 0),
            n.removeClass("nav-open"),
            d.removeAttr("style"),
            r.removeClass("toggle-open"),
            !1 !== y.levelOpen &&
              "none" !== y.levelOpen &&
              (i = setTimeout(
                function () {
                  b(0);
                },
                "expand" === y.levelOpen ? o : 0
              )),
            y.disableBody &&
              (T.removeClass("hc-nav-open"),
              x.removeClass("hc-nav-yscroll"),
              t && (T.css("top", "").scrollTop(t), x.scrollTop(t), (t = 0)));
        }
        function C(e) {
          e.preventDefault(), e.stopPropagation(), l ? k() : m();
        }
        function b(e, n) {
          for (var a = e; a <= Object.keys(v).length; a++) {
            if (0 !== a)
              if (a == e && void 0 !== n) {
                if ((u(a, n), "overlap" === y.levelOpen))
                  v[a][n].wrapper.off("click").on("click", M),
                    w(d, (a - 1) * y.levelSpacing),
                    c && c.length && w(c, s + (a - 1) * y.levelSpacing);
              } else
                for (var l in v[a]) {
                  if ((u(a, l), "overlap" === y.levelOpen))
                    v[a][l].wrapper.off("click").on("click", M),
                      a == e &&
                        (w(d, (a - 1) * y.levelSpacing),
                        c && c.length && w(c, s + (a - 1) * y.levelSpacing));
                }
          }
        }
      });
    },
  });
})(jQuery, "undefined" != typeof window ? window : this);
