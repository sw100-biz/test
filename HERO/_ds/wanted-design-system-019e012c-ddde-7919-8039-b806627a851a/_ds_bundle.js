/* @ds-bundle: {"format":3,"namespace":"WantedDesignSystem_019e01","components":[],"sourceHashes":{"ui_kits/wanted-web/FilterRail.jsx":"60f9395a9e0b","ui_kits/wanted-web/Header.jsx":"21fb0337c5bc","ui_kits/wanted-web/HeroSearch.jsx":"785ec04cfe5f","ui_kits/wanted-web/JobCard.jsx":"e4435e2b05f6","ui_kits/wanted-web/JobDetailDrawer.jsx":"5d9bc1693d2b","ui_kits/wanted-web/Primitives.jsx":"8af1d001b54b","ui_kits/wanted-web/data.js":"7252ed74f1f4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WantedDesignSystem_019e01 = window.WantedDesignSystem_019e01 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/wanted-web/FilterRail.jsx
try { (() => {
// Sticky filter rail with category chips + sort
function FilterRail({
  cats,
  active,
  onSelect,
  sort,
  onSort
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 64,
      zIndex: 20,
      background: '#fff',
      borderBottom: '1px solid var(--color-line-normal-normal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flex: 1,
      overflowX: 'auto'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c.id,
    active: active === c.id,
    onClick: () => onSelect(c.id)
  }, c.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '8px 12px',
      border: '1px solid var(--color-line-solid-normal)',
      borderRadius: 8,
      background: '#fff',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-label-normal)'
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "filter",
    size: 16
  }), " \uD544\uD130"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSort(sort === 'recent' ? 'reward' : 'recent'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '8px 12px',
      border: '1px solid var(--color-line-solid-normal)',
      borderRadius: 8,
      background: '#fff',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-label-normal)'
    }
  }, sort === 'recent' ? '최신순' : '보상금순', " ", /*#__PURE__*/React.createElement(I, {
    n: "chevronDown",
    size: 14
  })))));
}
Object.assign(window, {
  FilterRail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-web/FilterRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-web/Header.jsx
try { (() => {
// Header — global navigation for Wanted web
const {
  useState: useStateH
} = React;
function Header({
  onLogin
}) {
  const [hovered, setHovered] = useStateH(null);
  const navItems = [{
    id: 'recruit',
    label: '채용',
    sub: 'Recruit',
    active: true
  }, {
    id: 'event',
    label: '이벤트'
  }, {
    id: 'salary',
    label: '직군별 연봉'
  }, {
    id: 'resume',
    label: '이력서'
  }, {
    id: 'community',
    label: '커뮤니티'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'saturate(180%) blur(8px)',
      borderBottom: '1px solid var(--color-line-normal-normal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      height: 64,
      padding: '0 32px',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    "aria-label": "Wanted"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 3213 730",
    width: "96",
    height: "22"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2964 730 C 3027 730 3080 703 3109 661 L 3109 720 L 3213 720 L 3213 0 L 3109 0 L 3109 274 C 3080 235 3026 210 2963 210 C 2818 210 2707 327 2707 470 C 2707 613 2819 730 2964 730 Z M 2964 630 C 2879 630 2809 557 2809 470 C 2809 383 2879 310 2964 310 C 3049 310 3119 383 3119 470 C 3119 557 3049 630 2964 630 Z M 2269 428 C 2273 364 2336 303 2414 303 C 2492 303 2551 364 2555 428 L 2269 428 Z M 2423 730 C 2524 730 2612 672 2648 592 L 2565 564 C 2541 607 2485 637 2424 637 C 2336 637 2273 583 2269 510 L 2654 510 C 2674 342 2573 210 2423 210 C 2273 210 2167 317 2167 470 C 2167 623 2272 730 2423 730 Z M 2050 729 C 2081 729 2112 722 2132 711 L 2132 620 C 2108 632 2087 637 2073 637 C 2033 637 2013 613 2013 564 L 2013 302 L 2132 302 L 2132 220 L 2013 220 L 2013 120 L 1909 120 L 1909 220 L 1829 220 L 1829 302 L 1909 302 L 1909 568 C 1909 669 1961 729 2050 729 Z M 1337 720 L 1441 720 L 1441 436 C 1441 349 1490 300 1561 300 C 1632 300 1680 349 1680 436 L 1680 720 L 1784 720 L 1784 430 C 1784 289 1719 210 1593 210 C 1526 210 1466 237 1441 284 L 1441 220 L 1337 220 L 1337 720 Z M 998 630 C 913 630 843 557 843 470 C 843 383 913 310 998 310 C 1083 310 1153 383 1153 470 C 1153 557 1083 630 998 630 Z M 998 730 C 1061 730 1114 703 1143 661 L 1143 720 L 1247 720 L 1247 220 L 1143 220 L 1143 274 C 1114 235 1060 210 997 210 C 852 210 741 327 741 470 C 741 613 853 730 998 730 Z M 176 720 L 275 720 L 368 440 L 461 720 L 560 720 L 736 220 L 627 220 L 512 572 L 407 220 L 329 220 L 224 572 L 109 220 L 0 220 L 176 720 Z",
    fill: "#171719"
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 8,
      flex: 1
    }
  }, navItems.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    onMouseEnter: () => setHovered(n.id),
    onMouseLeave: () => setHovered(null),
    style: {
      position: 'relative',
      padding: '8px 12px',
      borderRadius: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '0.014em',
      color: n.active ? 'var(--color-label-normal)' : 'var(--color-label-neutral)',
      background: hovered === n.id ? 'var(--color-background-neutral)' : 'transparent',
      textDecoration: 'none',
      transition: 'background 140ms'
    }
  }, n.label, n.active && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: -22,
      height: 2,
      background: 'var(--color-label-normal)',
      borderRadius: 2
    }
  })))), /*#__PURE__*/React.createElement("button", {
    "aria-label": "\uC54C\uB9BC",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(I, {
    n: "bell",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "\uBD81\uB9C8\uD06C",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(I, {
    n: "bookmark",
    size: 20
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    size: "sm",
    onClick: onLogin
  }, "\uB85C\uADF8\uC778 / \uD68C\uC6D0\uAC00\uC785")));
}
const iconBtn = {
  width: 36,
  height: 36,
  borderRadius: 8,
  border: 0,
  background: 'transparent',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-label-neutral)',
  cursor: 'pointer'
};
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-web/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-web/HeroSearch.jsx
try { (() => {
// Hero search band
const {
  useState: useStateHS
} = React;
function HeroSearch({
  onSearch
}) {
  const [q, setQ] = useStateHS('');
  const [chip, setChip] = useStateHS('all');
  const chips = [{
    id: 'all',
    label: '전체 직무'
  }, {
    id: 'dev',
    label: '개발'
  }, {
    id: 'design',
    label: '디자인'
  }, {
    id: 'pm',
    label: '기획·PM'
  }, {
    id: 'mkt',
    label: '마케팅'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-background-normal-alternative)',
      borderBottom: '1px solid var(--color-line-normal-normal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '64px 32px 48px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: '-0.024em',
      lineHeight: 1.32,
      color: 'var(--color-label-normal)',
      margin: '0 0 8px',
      maxWidth: 720
    }
  }, "\uB0B4 \uCEE4\uB9AC\uC5B4\uB97C \uBC14\uAFC0 \uB2E4\uC74C \uD55C \uAC78\uC74C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.014em',
      lineHeight: 1.5,
      color: 'var(--color-label-alternative)',
      margin: '0 0 32px'
    }
  }, "1,200\uAC1C \uC774\uC0C1\uC758 \uAE30\uC5C5\uC774 \uC6D0\uD2F0\uB4DC\uC5D0\uC11C \uC778\uC7AC\uB97C \uCC3E\uACE0 \uC788\uC5B4\uC694."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSearch && onSearch(q);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: 8,
      background: '#fff',
      border: '1px solid var(--color-line-normal-normal)',
      borderRadius: 16,
      boxShadow: 'var(--shadow-emphasize)'
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "search",
    size: 22,
    color: "var(--color-label-neutral)",
    style: {
      marginLeft: 12
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "\uD68C\uC0AC\uBA85, \uC9C1\uBB34, \uAE30\uC220 \uC2A4\uD0DD",
    style: {
      flex: 1,
      height: 48,
      border: 0,
      outline: 'none',
      fontSize: 16,
      fontWeight: 500,
      fontFamily: 'var(--font-sans)',
      letterSpacing: '0.014em',
      color: 'var(--color-label-normal)',
      background: 'transparent'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    onClick: () => onSearch && onSearch(q)
  }, "\uAC80\uC0C9")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16,
      flexWrap: 'wrap'
    }
  }, chips.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c.id,
    active: chip === c.id,
    onClick: () => setChip(c.id)
  }, c.label)))));
}
Object.assign(window, {
  HeroSearch
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-web/HeroSearch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-web/JobCard.jsx
try { (() => {
// JobCard — image, company, title, meta, reward
const {
  useState: useStateJC
} = React;
function JobCard({
  job,
  onOpen
}) {
  const co = COMPANIES[job.co];
  const [hover, setHover] = useStateJC(false);
  const [bookmarked, setBookmarked] = useStateJC(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: () => onOpen(job),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: '#fff',
      border: '1px solid var(--color-line-normal-normal)',
      borderRadius: 16,
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 200ms cubic-bezier(.4,0,.2,1), box-shadow 200ms',
      transform: hover ? 'translateY(-2px)' : 'none',
      boxShadow: hover ? 'var(--shadow-emphasize)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: `linear-gradient(135deg, ${co.tone}1A 0%, ${co.tone}33 100%)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '-0.024em',
      color: co.tone,
      opacity: 0.7
    }
  }, co.sub), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setBookmarked(b => !b);
    },
    "aria-label": "\uBD81\uB9C8\uD06C",
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      width: 36,
      height: 36,
      borderRadius: 9999,
      border: 0,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(4px)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: bookmarked ? 'var(--color-primary-normal)' : 'var(--color-label-neutral)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: bookmarked ? 'currentColor' : 'none',
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.018em',
      color: 'var(--color-label-alternative)',
      marginBottom: 4
    }
  }, co.name, " \xB7 ", co.sub), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: '-0.011em',
      lineHeight: 1.4,
      color: 'var(--color-label-normal)',
      margin: '0 0 8px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, job.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--color-label-alternative)',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, job.loc), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, job.exp)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      paddingTop: 10,
      borderTop: '1px solid var(--color-line-normal-normal)'
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "gift",
    size: 14,
    color: "var(--color-primary-normal)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-primary-normal)',
      letterSpacing: '0.014em'
    }
  }, "\uD569\uACA9\uCD95\uD558\uAE08 ", job.reward, "\uB9CC\uC6D0"))));
}
Object.assign(window, {
  JobCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-web/JobCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-web/JobDetailDrawer.jsx
try { (() => {
// JobDetailDrawer — slides in from the right
function JobDetailDrawer({
  job,
  onClose
}) {
  if (!job) return null;
  const co = COMPANIES[job.co];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(23,23,25,0.4)',
      zIndex: 40,
      animation: 'fade 200ms ease-out'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(640px, 92vw)',
      background: '#fff',
      zIndex: 41,
      overflowY: 'auto',
      animation: 'slideIn 280ms cubic-bezier(.4,0,.2,1)',
      borderLeft: '1px solid var(--color-line-normal-normal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 24px',
      borderBottom: '1px solid var(--color-line-normal-normal)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\uB2EB\uAE30",
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-label-neutral)'
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "x",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "\uACF5\uC720",
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--color-label-neutral)'
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "share",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 32px 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 9',
      borderRadius: 16,
      background: `linear-gradient(135deg, ${co.tone}1A 0%, ${co.tone}33 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 56,
      fontWeight: 700,
      letterSpacing: '-0.024em',
      color: co.tone,
      opacity: 0.85,
      marginBottom: 24
    }
  }, co.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "\uCC44\uC6A9\uC911"), /*#__PURE__*/React.createElement(Badge, {
    tone: "violet"
  }, "\uD569\uACA9\uCD95\uD558\uAE08 ", job.reward, "\uB9CC\uC6D0")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--color-label-alternative)',
      marginBottom: 6
    }
  }, co.name, " \xB7 ", co.sub), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-0.024em',
      lineHeight: 1.32,
      color: 'var(--color-label-normal)',
      margin: '0 0 12px'
    }
  }, job.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--color-label-neutral)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 4,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "mapPin",
    size: 16
  }), " ", job.loc), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 4,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "briefcase",
    size: 16
  }), " ", job.exp)), /*#__PURE__*/React.createElement(Section, {
    title: "\uC8FC\uC694 \uC5C5\uBB34"
  }, /*#__PURE__*/React.createElement("ul", {
    style: listStyle
  }, /*#__PURE__*/React.createElement("li", null, "\uC81C\uD488 \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC744 \uC6B4\uC601\uD558\uACE0 \uBC1C\uC804\uC2DC\uCF1C\uC694."), /*#__PURE__*/React.createElement("li", null, "\uC5EC\uB7EC \uD300\uACFC \uD611\uC5C5\uD558\uBA70 \uC77C\uAD00\uB41C \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uB9CC\uB4E4\uC5B4\uC694."), /*#__PURE__*/React.createElement("li", null, "\uC0C8\uB85C\uC6B4 \uD328\uD134\uACFC \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC124\uACC4\uD558\uACE0 \uBB38\uC11C\uD654\uD574\uC694."))), /*#__PURE__*/React.createElement(Section, {
    title: "\uC790\uACA9\uC694\uAC74"
  }, /*#__PURE__*/React.createElement("ul", {
    style: listStyle
  }, /*#__PURE__*/React.createElement("li", null, job.exp, " \uB514\uC790\uC774\uB108\uBD84\uC744 \uCC3E\uACE0 \uC788\uC5B4\uC694."), /*#__PURE__*/React.createElement("li", null, "Figma\uB97C \uB2A5\uC219\uD558\uAC8C \uB2E4\uB8F0 \uC218 \uC788\uC5B4\uC694."), /*#__PURE__*/React.createElement("li", null, "\uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC744 \uAD6C\uCD95\uD55C \uACBD\uD5D8\uC774 \uC788\uC5B4\uC694."))), /*#__PURE__*/React.createElement(Section, {
    title: "\uAE30\uC220 \uC2A4\uD0DD"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, job.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "neutral"
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      gap: 12,
      padding: '16px 24px',
      borderTop: '1px solid var(--color-line-normal-normal)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    size: "lg",
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "bookmark",
    size: 18
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      flex: 1
    }
  }, "\uC9C0\uC6D0\uD558\uAE30"))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes slideIn { from { transform: translateX(20px); opacity: 0 } to { transform: translateX(0); opacity: 1 } }
        @keyframes fade    { from { opacity: 0 } to { opacity: 1 } }
      `));
}
const listStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  fontWeight: 500,
  lineHeight: 1.6,
  color: 'var(--color-label-neutral)',
  letterSpacing: '0.014em',
  margin: 0,
  paddingLeft: 20
};
function Section({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-0.011em',
      color: 'var(--color-label-normal)',
      margin: '0 0 12px'
    }
  }, title), children);
}
Object.assign(window, {
  JobDetailDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-web/JobDetailDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-web/Primitives.jsx
try { (() => {
// Shared primitives: Button, Badge, Chip, Icon
const {
  useState
} = React;

// Lucide icon — load the SVG sprite from CDN once, reference by name
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.6,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    dangerouslySetInnerHTML: {
      __html: `<use href="https://cdn.jsdelivr.net/npm/lucide-static@0.475.0/icons/${name}.svg#${name}"/>`
    }
  });
}

// Inline Lucide paths (avoids cross-origin <use> issues)
const ICONS = {
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
  })),
  bookmark: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
  })),
  bookmarkFill: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
    fill: "currentColor"
  })),
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  })),
  x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })),
  chevronDown: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  chevronRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  })),
  mapPin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  briefcase: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "7",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  })),
  gift: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"
  })),
  filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
  })),
  share: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16 6 12 2 8 6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "15"
  }))
};
function I({
  n,
  size = 20,
  sw = 1.6,
  color = 'currentColor',
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, ICONS[n]);
}
const buttonStyles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    border: 0,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    letterSpacing: '0.014em',
    transition: 'background 160ms cubic-bezier(0.4,0,0.2,1), transform 100ms',
    borderRadius: 8
  },
  size: {
    sm: {
      height: 32,
      padding: '0 12px',
      fontSize: 13,
      borderRadius: 6
    },
    md: {
      height: 40,
      padding: '0 16px',
      fontSize: 14,
      borderRadius: 8
    },
    lg: {
      height: 48,
      padding: '0 20px',
      fontSize: 16,
      borderRadius: 10
    }
  }
};
function Button({
  variant = 'filled',
  size = 'md',
  children,
  onClick,
  leftIcon,
  rightIcon,
  style,
  disabled
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const palette = {
    filled: {
      bg: 'var(--color-primary-normal)',
      bgH: 'var(--color-primary-strong)',
      bgP: 'var(--color-primary-heavy)',
      fg: '#fff'
    },
    outlined: {
      bg: '#fff',
      bgH: 'var(--color-background-neutral)',
      bgP: 'var(--color-background-alternative)',
      fg: 'var(--color-label-normal)',
      border: '1px solid var(--color-line-solid-normal)'
    },
    tinted: {
      bg: 'var(--color-accent-bg-blue)',
      bgH: '#dde9fd',
      bgP: '#cdddfb',
      fg: 'var(--color-primary-normal)'
    },
    text: {
      bg: 'transparent',
      bgH: 'var(--color-background-neutral)',
      bgP: 'var(--color-background-alternative)',
      fg: 'var(--color-primary-normal)'
    }
  }[variant];
  const bg = disabled ? 'var(--color-interaction-disable)' : press ? palette.bgP : hover ? palette.bgH : palette.bg;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    disabled: disabled,
    style: {
      ...buttonStyles.base,
      ...buttonStyles.size[size],
      background: bg,
      color: disabled ? 'var(--color-label-disable)' : palette.fg,
      border: palette.border || 0,
      transform: press ? 'scale(0.98)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, leftIcon, " ", children, " ", rightIcon);
}
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  const palette = {
    blue: {
      bg: 'var(--color-accent-bg-blue)',
      fg: 'var(--color-accent-fg-blue)'
    },
    green: {
      bg: 'var(--color-accent-bg-green)',
      fg: 'var(--color-accent-fg-green)'
    },
    red: {
      bg: 'var(--color-accent-bg-red)',
      fg: 'var(--color-accent-fg-red)'
    },
    orange: {
      bg: '#fff3e0',
      fg: '#d96e00'
    },
    violet: {
      bg: 'var(--color-accent-bg-violet)',
      fg: 'var(--color-accent-fg-violet)'
    },
    neutral: {
      bg: 'var(--color-accent-bg-neutral)',
      fg: 'var(--color-label-neutral)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '4px 8px',
      borderRadius: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '0.018em',
      background: palette.bg,
      color: palette.fg,
      ...style
    }
  }, children);
}
function Chip({
  active,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 14px',
      borderRadius: 9999,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.018em',
      border: '1px solid ' + (active ? 'var(--color-label-normal)' : 'var(--color-line-solid-normal)'),
      background: active ? 'var(--color-label-normal)' : hover ? 'var(--color-background-neutral)' : '#fff',
      color: active ? '#fff' : 'var(--color-label-neutral)',
      cursor: 'pointer',
      transition: 'all 140ms ease-out',
      ...style
    }
  }, children);
}
Object.assign(window, {
  I,
  Button,
  Badge,
  Chip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-web/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-web/data.js
try { (() => {
// Mock job listings for the Wanted web UI kit.
// Companies, titles and rewards are illustrative.

const COMPANIES = {
  toss: {
    name: '토스',
    sub: 'Toss',
    tone: '#0064FF'
  },
  kakao: {
    name: '카카오',
    sub: 'Kakao',
    tone: '#FFCD00'
  },
  naver: {
    name: '네이버',
    sub: 'NAVER',
    tone: '#03C75A'
  },
  coupang: {
    name: '쿠팡',
    sub: 'Coupang',
    tone: '#FF4242'
  },
  baemin: {
    name: '우아한형제들',
    sub: 'Woowa Brothers',
    tone: '#2AC1BC'
  },
  daangn: {
    name: '당근',
    sub: 'Daangn',
    tone: '#FF6F0F'
  },
  riot: {
    name: '라이엇 게임즈',
    sub: 'Riot Games',
    tone: '#D13639'
  },
  banksalad: {
    name: '뱅크샐러드',
    sub: 'Banksalad',
    tone: '#3478F5'
  }
};
const JOBS = [{
  id: 'j1',
  co: 'toss',
  title: 'Senior Product Designer',
  loc: '서울 강남구',
  exp: '경력 5년+',
  reward: 200,
  tags: ['Design System', 'Figma'],
  cat: 'design'
}, {
  id: 'j2',
  co: 'kakao',
  title: 'Frontend Engineer (React)',
  loc: '경기 판교',
  exp: '경력 3년+',
  reward: 150,
  tags: ['React', 'Next.js'],
  cat: 'dev'
}, {
  id: 'j3',
  co: 'naver',
  title: '백엔드 엔지니어 (Java/Kotlin)',
  loc: '경기 분당',
  exp: '경력 무관',
  reward: 100,
  tags: ['Kotlin', 'MSA'],
  cat: 'dev'
}, {
  id: 'j4',
  co: 'coupang',
  title: 'Product Manager — Logistics',
  loc: '서울 송파구',
  exp: '경력 7년+',
  reward: 300,
  tags: ['B2B', 'Logistics'],
  cat: 'pm'
}, {
  id: 'j5',
  co: 'baemin',
  title: 'Brand Designer',
  loc: '서울 송파구',
  exp: '경력 3년+',
  reward: 100,
  tags: ['Brand', 'Motion'],
  cat: 'design'
}, {
  id: 'j6',
  co: 'daangn',
  title: 'Android Developer',
  loc: '서울 강남구',
  exp: '경력 2년+',
  reward: 100,
  tags: ['Kotlin', 'Compose'],
  cat: 'dev'
}, {
  id: 'j7',
  co: 'riot',
  title: 'Live Service Producer',
  loc: '서울 종로구',
  exp: '경력 5년+',
  reward: 250,
  tags: ['Games', 'LiveOps'],
  cat: 'pm'
}, {
  id: 'j8',
  co: 'banksalad',
  title: 'Data Scientist',
  loc: '서울 강남구',
  exp: '경력 4년+',
  reward: 150,
  tags: ['Python', 'ML'],
  cat: 'data'
}, {
  id: 'j9',
  co: 'toss',
  title: 'iOS Developer',
  loc: '서울 강남구',
  exp: '경력 3년+',
  reward: 200,
  tags: ['Swift', 'TCA'],
  cat: 'dev'
}];
const CATS = [{
  id: 'all',
  label: '전체'
}, {
  id: 'dev',
  label: '개발'
}, {
  id: 'design',
  label: '디자인'
}, {
  id: 'pm',
  label: '기획·PM'
}, {
  id: 'data',
  label: '데이터'
}, {
  id: 'mkt',
  label: '마케팅'
}, {
  id: 'biz',
  label: '경영·비즈니스'
}, {
  id: 'sales',
  label: '영업'
}, {
  id: 'ops',
  label: '운영'
}];
Object.assign(window, {
  COMPANIES,
  JOBS,
  CATS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-web/data.js", error: String((e && e.message) || e) }); }

})();
