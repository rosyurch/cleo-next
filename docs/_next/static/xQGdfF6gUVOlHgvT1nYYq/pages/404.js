(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"97Is":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n("uNx/")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),s=n("Nsbk"),a=n("7W2i"),c=n("TqRt"),f=n("284h");t.__esModule=!0,t.default=void 0;var u,l=f(n("q1tI")),p=n("QmWs"),h=n("g/15"),v=c(n("nOHt"));function d(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var g=new Map,m=window.IntersectionObserver,w={};function y(){return u||(m?u=new m((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){function t(e){var n;return r(this,t),(n=i(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var s=e(o,i);return t=o,n=i,r=s,s}}((function(e,t){return{href:d(e),as:t?d(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,a=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,p.resolve)(c,s),a=a?(0,p.resolve)(c,a):s,e.preventDefault();var f=n.props.scroll;null==f&&(f=a.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](s,a,{shallow:n.props.shallow}).then((function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return a(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,p.resolve)(e,n);return[o,r?(0,p.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=y();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=l.default.createElement("a",null,t));var i=l.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),l.default.cloneElement(i,s)}}]),t}(l.Component);t.default=k},nDka:function(e,t,n){"use strict";var r=n("vOnD"),o=n("za5s"),i=r.c.a.withConfig({displayName:"A",componentId:"cff2c3-0"})(["cursor:pointer;color:",";text-decoration:none;padding-bottom:5px;font-size:1.2em;"," ",""],(function(e){return e.theme.colors.link}),o.f,o.b);t.a=i},"uNx/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("q1tI"),o=n.n(r),i=n("YFqc"),s=n.n(i),a=n("nDka"),c=n("89ed"),f=o.a.createElement;function u(){return f(c.a,{textAlign:"center",pt:"20%"},f("h1",null,"404 - Page Not Found"),f(s.a,{href:"/"},f(a.a,{fontSize:"2em",fontWeight:500,color:"lightgreen"},"\u2192Go back Home, this place is scary")))}}},[["97Is",0,1,2,4]]]);