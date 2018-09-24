(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{211:function(e,t,n){"use strict";n.r(t),n(66);var a=n(1),r=n.n(a),o=n(264),i=n(400),l=n(273),s=n(268),c=function(e){var t=Object.assign({},e);return r.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer"},t))};t.default=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"MainLayout"},r.a.createElement(o.a,null),r.a.createElement("main",{className:"MainLayout-main"},r.a.createElement("div",{className:"MainLayout-content"},r.a.createElement("section",{className:"Container"},r.a.createElement("div",{className:"Content"},r.a.createElement("h1",null,"Introduction"),r.a.createElement("p",null,"Evergreen is a pragmatic UI kit for building evolving products on the web.",r.a.createElement("br",null)," It is build and maintained open-source by"," ",r.a.createElement(c,{href:"https://segment.com/"},"Segment"),"."),r.a.createElement("h2",null,"Core beliefs of Evergreen"),r.a.createElement("p",null,r.a.createElement("strong",null,"Evergreen is built on the belief that you can never predict all future requirements, only prepare for it.")," ","Instead of creating fixed configurations that work today, Evergreen promotes building systems that anticipate new and changing design requirements."),r.a.createElement("p",null,r.a.createElement("strong",null,"Evergreen is built on the belief that things should work out of the box with smart defaults and offer full control when needed.")," ","For example, Evergreen implements most components on top of a"," ",r.a.createElement(c,{href:"https://github.com/segmentio/ui-box"},"Box primitive")," ","which allows for a lot of customization."),r.a.createElement("p",null,r.a.createElement("strong",null,"Evergreen is built on the belief that using Evergreen and contributing to Evergreen should be a pleasant experience.")," ","We prioritize documentation and all the tools for a solid developer experience. We advocate respect and inclusivity in our writings and interactions."),r.a.createElement("h2",null,"Install and use components"),r.a.createElement("p",null,"Evergreen is made up of multiple components and tools which you can import one by one. All you need to do is install the"," ",r.a.createElement("code",null,"evergreen-ui")," package:"),r.a.createElement("pre",null,r.a.createElement("code",null,"\n$ yarn add evergreen-ui\n# or\n$ npm install --save evergreen-ui\n                ".trim())),r.a.createElement("p",null,"A working version, assuming you are using something like"," ",r.a.createElement(c,{href:"https://github.com/facebookincubator/create-react-app"},"Create React App"),", might look like this:"),r.a.createElement(l.a,null,"\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Button } from 'evergreen-ui'\n\nReactDOM.render(\n  <Button>I am using 🌲 Evergreen!</Button>,\n  document.getElementById('root')\n)\n                ".trim())))),r.a.createElement(i.a,null))))}},273:function(e,t,n){"use strict";n.d(t,"a",function(){return E}),n(66);var a=n(219),r=n.n(a),o=n(34),i=n.n(o),l=n(1),s=n.n(l),c=n(20),u=n.n(c),m=n(333),p=n.n(m),d=n(334),g=n.n(d),h=n(335),f=n.n(h);Object(m.registerLanguage)("jsx",g.a);var E=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=r()(e,["children"]);return s.a.createElement(p.a,Object.assign({language:"javascript",style:f.a},n),t)},t}(s.a.Component);E.propTypes={children:u.a.string}},274:function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n(66);var a=n(219),r=n.n(a),o=n(34),i=n.n(o),l=n(1),s=n.n(l),c=n(20),u=n.n(c),m=n(245),p=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=(e.children,e.groups),n=r()(e,["children","groups"]);return s.a.createElement("aside",Object.assign({className:"MainLayout-sidebar Sidebar"},n),s.a.createElement("div",{className:"Sidebar-inner"},t.map(function(e){return s.a.createElement("div",{key:e.title||e.links[0].label,className:"NavGroup"},e.title&&s.a.createElement("h3",{className:"NavGroup-title"},e.title),s.a.createElement("nav",{className:"NavGroup-nav"},e.links.map(function(e){var t=e.label,n=e.to,a=e.exact;return s.a.createElement(m.a,{key:n,activeClassName:"is-active",to:n,exact:a},t)})))})))},t}(l.PureComponent);p.propTypes={children:u.a.node,groups:u.a.arrayOf(u.a.shape({title:u.a.string,exact:u.a.bool,links:u.a.arrayOf(u.a.shape({to:u.a.string,label:u.a.string}))}))},p.defaultProps={groups:[]}},400:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n(66);var a=n(34),r=n.n(a),o=n(1),i=n.n(o),l=n(274),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(l.a,this.props)},t}(o.PureComponent);s.propTypes=Object.assign({},l.a.propTypes),s.defaultProps={groups:[{title:"Get Started",links:[{to:"/get-started/introduction",label:"Introduction"},{to:"/get-started/theming",label:"Theming"}]}]}}}]);
//# sourceMappingURL=component---src-pages-get-started-introduction-js-700e981c8f54c1567da3.js.map