(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{255:function(e,t,n){"use strict";n.r(t),n(327),n(294);var a=n(0),r=n.n(a),o=n(404),i=n.n(o),l=n(406),c=n(450),s=n(446),u=n(405),m=function(e){var t=Object.assign({},e);return r.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer"},t))};t.default=function(){return r.a.createElement(u.a,null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Introduction · Evergreen")),r.a.createElement("div",{className:"MainLayout"},r.a.createElement(l.a,null),r.a.createElement("main",{className:"MainLayout-main"},r.a.createElement("div",{className:"MainLayout-content"},r.a.createElement("section",{className:"MainLayout-contentRight"},r.a.createElement("div",{className:"Container-nextToSidebar",style:{marginBottom:160}},r.a.createElement("div",{className:"Content"},r.a.createElement("h1",null,"Introduction"),r.a.createElement("p",{className:"p"},"Evergreen is a pragmatic UI kit for building evolving products on the web.",r.a.createElement("br",null)," It is build and maintained open-source by"," ",r.a.createElement(m,{href:"https://segment.com/"},"Segment"),"."),r.a.createElement("h2",null,"Core beliefs of Evergreen"),r.a.createElement("p",null,r.a.createElement("strong",null,"Evergreen is build on the belief that you can never predict all future requirements, only prepare for it.")," ","Instead of creating fixed configurations that work today, Evergreen promotes building systems that anticipate new and changing design requirements."),r.a.createElement("p",null,r.a.createElement("strong",null,"Evergreen is build on the belief that things should work out of the box with smart defaults and offer full control when needed.")," ","For example, Evergreen implements most components on top of a"," ",r.a.createElement(m,{href:"https://github.com/segmentio/ui-box"},"Box primitive")," ","which allows for a lot of customization."),r.a.createElement("p",null,r.a.createElement("strong",null,"Evergreen is built on the belief that using Evergreen and contributing to Evergreen should be a pleasant experience.")," ","We prioritize documentation and all the tools for a solid developer experience. We advocate respect and inclusivity in our writings and interactions."),r.a.createElement("h2",null,"Install and use components"),r.a.createElement("p",null,"Evergreen is made up of multiple components and tools which you can import one by one. All you need to do is install the"," ",r.a.createElement("code",null,"evergreen-ui")," package:")),r.a.createElement(s.a,null,"\n$ yarn add evergreen-ui\n# or\n$ npm install --save evergreen-ui\n                ".trim()),r.a.createElement("div",{className:"Content"},r.a.createElement("p",null,"A working version, assuming you are using something like"," ",r.a.createElement(m,{href:"https://github.com/facebookincubator/create-react-app"},"Create React App"),", might look like this:")),r.a.createElement(s.a,null,"\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Button } from 'evergreen-ui'\n\nReactDOM.render(\n  <Button>I am using 🌲 Evergreen!</Button>,\n  document.getElementById('root')\n)")))),r.a.createElement(c.a,null))))}},327:function(e,t,n){"use strict";n(428)("trim",function(e){return function(){return e(this,3)}})},428:function(e,t,n){var a=n(47),r=n(72),o=n(55),i=n(431),l="["+i+"]",c=RegExp("^"+l+l+"*"),s=RegExp(l+l+"*$"),u=function(e,t,n){var r={},l=o(function(){return!!i[e]()||"​"!="​"[e]()}),c=r[e]=l?t(m):i[e];n&&(r[n]=c),a(a.P+a.F*l,"String",r)},m=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(s,"")),e};e.exports=u},431:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},446:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n(294),n(4),n(327);var a=n(1),r=n.n(a),o=n(0),i=n.n(o),l=n(2),c=n.n(l),s=n(465),u=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidCatch=function(){},n.render=function(){return i.a.createElement(s.a,Object.assign({},s.b,{code:this.props.children.trim(),language:"jsx",theme:void 0}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return i.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return i.a.createElement("div",r({line:e,key:t}),e.map(function(e,t){return i.a.createElement("span",o({token:e,key:t}))}))}))})},t}(i.a.PureComponent);u.propTypes={children:c.a.string}},450:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(1),i=n.n(o),l=n(0),c=n.n(l),s=(n(294),n(4),n(296)),u=n.n(s),m=n(2),p=n.n(m),d=n(349),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=(e.children,e.groups),n=u()(e,["children","groups"]);return c.a.createElement("aside",Object.assign({className:"MainLayout-sidebar Sidebar"},n),c.a.createElement("div",{className:"Sidebar-inner"},t.map(function(e){return c.a.createElement("div",{key:e.title||e.links[0].label,className:"NavGroup"},e.title&&c.a.createElement("h3",{className:"NavGroup-title"},e.title),c.a.createElement("nav",{className:"NavGroup-nav"},e.links.map(function(e){var t=e.label,n=e.to,a=e.exact;return c.a.createElement(d.Link,{key:n,activeClassName:"is-active",to:n,exact:a},t)})))})))},t}(l.PureComponent);g.propTypes={children:p.a.node,groups:p.a.arrayOf(p.a.shape({title:p.a.string,exact:p.a.bool,links:p.a.arrayOf(p.a.shape({to:p.a.string,label:p.a.string}))}))},g.defaultProps={groups:[]},n.d(t,"a",function(){return f});var f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return c.a.createElement(g,this.props)},t}(l.PureComponent);f.propTypes=r()({},g.propTypes),f.defaultProps={groups:[{links:[{to:"/get-started/introduction",label:"Introduction"},{to:"/get-started/theming",label:"Theming"}]}]}}}]);
//# sourceMappingURL=component---src-pages-get-started-introduction-js-7abac6fb88e2837476ae.js.map