(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{11:function(e,t,n){"use strict";var a=n(2),i=n.n(a),r=n(0),o=n.n(r),c=n(1);t.a=function(e){var t=e.children,n=e.center,a=e.margin,r=e.color,l=void 0===r?c.e.lightColor:r,s=e.id,m=void 0===s?"":s,p=e.style,u=void 0===p?"":p,d=e.mStyle,f=void 0===d?"":d,h=e.sStyle,g=void 0===h?"":h;return o.a.createElement("h3",{id:m,className:i.a.dynamic([["1380750410",[l,a?"margin: ".concat(a,";"):"margin: 0;",n?"text-align: center;":"",u,f,g]]])},t,o.a.createElement(i.a,{styleId:"1380750410",css:["h3.__jsx-style-dynamic-selector{font-size:20px;font-weight:600;line-height:1.25;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;color:".concat(l,";").concat(a?"margin: ".concat(a,";"):"margin: 0;"," ").concat(n?"text-align: center;":""," ").concat(u,";}"),"@media only screen and (max-width:1024px){h3.__jsx-style-dynamic-selector{text-align:center;".concat(f,";}}"),"@media only screen and (max-width:554px){h3.__jsx-style-dynamic-selector{text-align:center;".concat(g,";}}")],dynamic:[l,a?"margin: ".concat(a,";"):"margin: 0;",n?"text-align: center;":"",u,f,g]}))}},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=function(e,t,n){for(var a=!0;a;){var i=e,r=t,o=n;a=!1,null===i&&(i=Function.prototype);var c=Object.getOwnPropertyDescriptor(i,r);if(void 0!==c){if("value"in c)return c.value;var l=c.get;if(void 0===l)return;return l.call(o)}var s=Object.getPrototypeOf(i);if(null===s)return;e=s,t=r,n=o,a=!0,c=s=void 0}};function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),c=r(o),l=r(n(52)),s=r(n(53)),m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"==typeof window,this.listener=(0,l.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var n=this;this.delayedAnimationTimeout=setTimeout(function(){n.animating=!0,n.setState({classes:"animated "+e,style:{animationDuration:n.props.duration+"s"}}),n.callbackTimeout=setTimeout(t,1e3*n.props.duration)},this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var n=t.getVisibility();e&&e(n)})}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var n=t.getVisibility();n.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(n)})}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return c.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}();t.default=m,m.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},m.propTypes={animateIn:s.default.string,animateOut:s.default.string,offset:s.default.number,duration:s.default.number,delay:s.default.number,initiallyVisible:s.default.bool,animateOnce:s.default.bool,style:s.default.object,scrollableParentSelector:s.default.string,className:s.default.string,animatePreScroll:s.default.bool},e.exports=t.default},125:function(e,t,n){"use strict";var a=n(2),i=n.n(a),r=n(0),o=n.n(r);t.a=function(e){var t=e.title,n=void 0===t?"Read More":t,a=e.uri;return o.a.createElement("div",{className:"jsx-3413352466"},o.a.createElement("a",{href:a,className:"jsx-3413352466"},n," →"),o.a.createElement(i.a,{styleId:"3413352466",css:["a.jsx-3413352466{font-size:18px;font-weight:600;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;color:#90cfbe;-webkit-text-decoration:none;text-decoration:none;}"]}))}},24:function(e,t,n){"use strict";var a=n(2),i=n.n(a),r=n(0),o=n.n(r),c=n(1);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.a=function(e){var t=e.uri,n=e.title,a=e.width,r=e.margin,m=e.style,p=void 0===m?"":m,u=e.mStyle,d=void 0===u?"":u,f=e.sStyle,h=void 0===f?"":f,g=s(e,["uri","title","width","margin","style","mStyle","sStyle"]);return o.a.createElement("a",l({href:t},g,{className:i.a.dynamic([["359948810",[a||"100%",p,r?"margin: ".concat(r,";"):"",c.e.primaryColor,c.e.darkLight,d,h]]])+" "+(null!=g.className&&g.className||"")}),n,o.a.createElement(i.a,{styleId:"359948810",css:["a.__jsx-style-dynamic-selector{width:".concat(a||"100%",";text-align:center;border-radius:28px;border:solid 1px #90cfbe;padding:17px 20px 15px;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-weight:600;line-height:1.5;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;text-align:center;color:#90cfbe;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;").concat(p," ").concat(r?"margin: ".concat(r,";"):"",";}"),"a.__jsx-style-dynamic-selector:hover{background-color:".concat(c.e.primaryColor,";color:").concat(c.e.darkLight,";}"),"@media only screen and (max-width:1024px){a.__jsx-style-dynamic-selector{".concat(d,";}}"),"@media only screen and (max-width:554px){a.__jsx-style-dynamic-selector{".concat(h,";}}")],dynamic:[a||"100%",p,r?"margin: ".concat(r,";"):"",c.e.primaryColor,c.e.darkLight,d,h]}))}},34:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(4),o=n(8),c=n.n(o),l=n(2),s=n.n(l),m=n(3);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,a,i,r,o){try{var c=e[r](o),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(a,i)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(){var e,n,a,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return a=this,i=(e=f(t)).call.apply(e,[this].concat(o)),n=!i||"object"!==p(i)&&"function"!=typeof i?g(a):i,x(g(g(n)),"state",{email:"",isFailed:!1,isSucceed:!1}),x(g(g(n)),"handleChangeInput",function(e){var t=e.target,a=t.name,i=t.value;n.setState(x({},a,i))}),x(g(g(n)),"handleSubmit",function(){var e,t=(e=c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("email",n.state.email),n.setState({isFailed:!1,isSucceed:!1}),e.prev=4,e.next=7,fetch("https://script.google.com/macros/s/AKfycbwVfb9acsqEuPnYZlgRBOUng74nnNd6a4NGmJPCRXtp5HOBTMeJ/exec",{body:a,method:"POST"});case 7:n.setState({email:"",isSucceed:!0}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0),n.setState({isFailed:!0});case 14:case"end":return e.stop()}},e,this,[[4,10]])}),function(){var t=this,n=arguments;return new Promise(function(a,i){var r=e.apply(t,n);function o(e){u(r,a,i,o,c,"next",e)}function c(e){u(r,a,i,o,c,"throw",e)}o(void 0)})});return function(e){return t.apply(this,arguments)}}()),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,i.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props.t;return i.a.createElement("form",{onSubmit:this.handleSubmit,className:"jsx-238096003"},this.state.isSucceed&&i.a.createElement("p",{className:"jsx-238096003 msg success"},"Subscribed successfully!"),this.state.isFailed&&i.a.createElement("p",{className:"jsx-238096003 msg error"},"Something went wrong, please try again later."),i.a.createElement("div",{className:"jsx-238096003 input-field"},i.a.createElement("input",{id:"email",type:"email",name:"email",placeholder:e("footer.stayinfo.email"),value:this.state.email,onChange:this.handleChangeInput,className:"jsx-238096003"}),i.a.createElement("input",{type:"submit",value:e("footer.stayinfo.subscribe"),className:"jsx-238096003 submit"}),i.a.createElement("input",{type:"submit",value:"→",className:"jsx-238096003 submit sm-submit"})),i.a.createElement(s.a,{styleId:"238096003",css:["form.jsx-238096003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".input-field.jsx-238096003{width:555px;height:60px;border-radius:30.5px;background-color:#d7f2ee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","input.jsx-238096003{width:405px;height:60px;border-radius:30.5px;background-color:#d7f2ee;font-size:16px;padding:21px 30px;border:0;color:#222633;font-weight:normal;font-family:Montserrat;}","input.jsx-238096003:focus,textarea.jsx-238096003:focus{outline:none;}","textarea.jsx-238096003{height:80px;}",".submit.jsx-238096003{cursor:pointer;width:145px;height:50px;border-radius:30.5px;background-color:#90cfbe;font-size:16px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;text-align:center;color:#222633;padding:14px 30px;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;}",".submit.jsx-238096003:hover{opacity:0.4;}",".msg.jsx-238096003{font-size:13px;font-weight:600;margin-top:3px;position:absolute;}",".success.jsx-238096003{color:#90cfbe;}",".error.jsx-238096003{color:#ef5757;}",".sm-submit.jsx-238096003{display:none;}","@media only screen and (max-width:1024px){.input-field.jsx-238096003{width:100%;}input.jsx-238096003{width:78%;}}","@media only screen and (max-width:554px){.input-field.jsx-238096003{width:315px;}input.jsx-238096003{width:220px;}.submit.jsx-238096003{display:none;}.sm-submit.jsx-238096003{display:block;margin-right:5px;}}"]}))}}])&&d(n.prototype,a),r&&d(n,r),t}(),b=Object(m.c)("footer")(y),v=n(1),w=n(11);t.a=Object(m.c)("footer")(function(e){var t=e.t;return i.a.createElement(r.a,{padding:"100px 0 50px",bgColor:"#1d202b",color:v.e.primaryColor},i.a.createElement(w.a,{center:!0,margin:"0 0 27px;",mStyle:"text-align: left;",sStyle:"text-align: left;"},t("footer.stayinfo")),i.a.createElement(b,null))})},52:function(e,t,n){(function(t){var n="Expected a function",a=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,u=m||p||Function("return this")(),d=Object.prototype.toString,f=Math.max,h=Math.min,g=function(){return u.Date.now()};function x(e,t,a){var i,r,o,c,l,s,m=0,p=!1,u=!1,d=!0;if("function"!=typeof e)throw new TypeError(n);function x(t){var n=i,a=r;return i=r=void 0,m=t,c=e.apply(a,n)}function v(e){var n=e-s;return void 0===s||n>=t||n<0||u&&e-m>=o}function w(){var e=g();if(v(e))return E(e);l=setTimeout(w,function(e){var n=t-(e-s);return u?h(n,o-(e-m)):n}(e))}function E(e){return l=void 0,d&&i?x(e):(i=r=void 0,c)}function j(){var e=g(),n=v(e);if(i=arguments,r=this,s=e,n){if(void 0===l)return function(e){return m=e,l=setTimeout(w,t),p?x(e):c}(s);if(u)return l=setTimeout(w,t),x(s)}return void 0===l&&(l=setTimeout(w,t)),c}return t=b(t)||0,y(a)&&(p=!!a.leading,o=(u="maxWait"in a)?f(b(a.maxWait)||0,t):o,d="trailing"in a?!!a.trailing:d),j.cancel=function(){void 0!==l&&clearTimeout(l),m=0,i=s=r=l=void 0},j.flush=function(){return void 0===l?c:E(g())},j}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==i}(e))return a;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=c.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):o.test(e)?a:+e}e.exports=function(e,t,a){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return y(a)&&(i="leading"in a?!!a.leading:i,r="trailing"in a?!!a.trailing:r),x(e,t,{leading:i,maxWait:t,trailing:r})}}).call(this,n(32))},53:function(e,t,n){e.exports=n(54)()},54:function(e,t,n){"use strict";var a=n(55);function i(){}function r(){}r.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,r,o){if(o!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:i};return n.PropTypes=n,n}},55:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},609:function(e,t,n){__NEXT_REGISTER_PAGE("/technology",function(){return e.exports=n(622),{page:e.exports.default}})},622:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n.n(a),r=n(0),o=n.n(r),c=n(21),l=n(34),s=n(2),m=n.n(s),p=n(12),u=n.n(p),d=n(4),f=n(5),h=n(9),g=n(7),x=n(10),y=n(3),b=n(1),v=Object(y.c)("technology")(function(e){var t=e.t;return o.a.createElement(d.a,{bgColor:b.e.darkLight,color:b.e.primaryColor,padding:"110px 0"},o.a.createElement(f.a,{direction:"row"},o.a.createElement(x.a,{flex:!0},o.a.createElement("img",{src:"/static/img-sharingplatform.svg",className:"jsx-2101418624"})),o.a.createElement(x.a,null,o.a.createElement(u.a,{animateOnce:!0,animateIn:"fadeInUp"},o.a.createElement(h.a,{margin:"0 0 10px"},t("tech.title"))),o.a.createElement(u.a,{animateOnce:!0,animateIn:"fadeInUp",delay:400},o.a.createElement(g.a,null,t("tech.description"))))),o.a.createElement(m.a,{styleId:"2101418624",css:["img.jsx-2101418624{width:100%;max-wdith:500px;min-width:300px;object-fit:contain;}","@media only screen and (max-width:1024px){img.jsx-2101418624{width:100%;margin-bottom:160px;}}","@media only screen and (max-width:554px){img.jsx-2101418624{width:100%;}}"]}))}),w=Object(y.c)("technology")(function(e){var t=e.t;return o.a.createElement(d.a,{bgColor:b.e.dark,color:b.e.primaryColor,padding:"120px 0"},o.a.createElement(f.a,{direction:"row"},o.a.createElement(x.a,{style:"margin-right: 30px",mStyle:"margin-right: 0;"},o.a.createElement(u.a,{animateOnce:!0,animateIn:"fadeInUp"},o.a.createElement(h.a,{margin:"0 0 15px"},t("tech.dapps.scenario"))),o.a.createElement(u.a,{animateOnce:!0,animateIn:"fadeInUp",delay:400},o.a.createElement(g.a,{mStyle:"margin-bottom: 60px;"},t("tech.dapps.scenario.description")))),o.a.createElement(x.a,null,o.a.createElement("img",{src:"/static/img-layer-1@2x.png",className:"jsx-3162327209"}),o.a.createElement("img",{src:"/static/img-layer-2@2x.png",className:"jsx-3162327209"}),o.a.createElement("img",{src:"/static/img-layer-3@2x.png",className:"jsx-3162327209"}))),o.a.createElement(m.a,{styleId:"3162327209",css:["img.jsx-3162327209{width:100%;}"]}))}),E=Object(y.c)("technology")(function(e){var t=e.t;return o.a.createElement(d.a,{bgColor:b.e.dark,color:b.e.primaryColor,padding:"8px 0 116px"},o.a.createElement(f.a,{direction:"row",mStyle:"align-items: center;"},o.a.createElement(x.a,null,o.a.createElement(h.a,{style:"line-height: 1.63; width: 154px;",mStyle:"width:100%;"},t("tech.smartcontract"))),o.a.createElement(x.a,{style:"flex: 2;"},o.a.createElement("div",{className:"jsx-4117690172 feature"},o.a.createElement("img",{src:"/static/icon-node.svg",className:"jsx-4117690172"}),o.a.createElement(g.a,null,t("tech.smartcontract1"))),o.a.createElement("div",{className:"jsx-4117690172 feature"},o.a.createElement("img",{src:"/static/icon-prediction.svg",className:"jsx-4117690172"}),o.a.createElement(g.a,null,t("tech.smartcontract2"))),o.a.createElement("div",{className:"jsx-4117690172 feature"},o.a.createElement("img",{src:"/static/icon-pricing.svg",className:"jsx-4117690172"}),o.a.createElement(g.a,null,t("tech.smartcontract3"))),o.a.createElement("div",{className:"jsx-4117690172 feature"},o.a.createElement("img",{src:"/static/icon-contrract.svg",className:"jsx-4117690172"}),o.a.createElement(g.a,null,t("tech.smartcontract4"))),o.a.createElement("div",{className:"jsx-4117690172 feature"},o.a.createElement("img",{src:"/static/icon-lockup.svg",className:"jsx-4117690172"}),o.a.createElement(g.a,null,t("tech.smartcontract5"))))),o.a.createElement(m.a,{styleId:"4117690172",css:[".feature.jsx-4117690172{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","img.jsx-4117690172{margin-right:26px;}"]}))}),j=n(11),k=Object(y.c)("technology")(function(e){var t=e.t;return o.a.createElement(d.a,{bgColor:b.e.darkLight,color:b.e.primaryColor,padding:"120px"},o.a.createElement(h.a,{center:!0,margin:"0 0 60px"},t("tech.dapps.title")),o.a.createElement(f.a,{direction:"row",style:"display: grid; grid-template-columns: auto auto auto; grid-gap: 30px 31px; justify-content: space-between;",mStyle:"grid-template-columns: auto;"},o.a.createElement("div",{className:"jsx-2687996937 block"},o.a.createElement("img",{src:"/static/img-harddisk-green.svg",className:"jsx-2687996937"}),o.a.createElement(j.a,{color:b.e.lightColor,margin:"0 0 16px",center:!0},t("tech.dapps.qcdn")),o.a.createElement(g.a,{mStyle:"text-align: left;"},t("tech.dapps.qcdn.description"))),o.a.createElement("div",{className:"jsx-2687996937 block"},o.a.createElement("img",{src:"/static/img-harddisk-yellow.svg",className:"jsx-2687996937"}),o.a.createElement(j.a,{color:b.e.lightColor,margin:"0 0 16px",center:!0},t("tech.dapps.dsn")),o.a.createElement(g.a,{mStyle:"text-align: left;"},t("tech.dapps.dsn.description"))),o.a.createElement("div",{className:"jsx-2687996937 block"},o.a.createElement("img",{src:"/static/img-harddisk-blue.svg",className:"jsx-2687996937"}),o.a.createElement(j.a,{color:b.e.lightColor,margin:"0 0 16px",center:!0},t("tech.dapps.blockchain")),o.a.createElement(g.a,{mStyle:"text-align: left;"},t("tech.dapps.blockchain.description")))),o.a.createElement(m.a,{styleId:"2687996937",css:[".block.jsx-2687996937{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:300px;min-height:525px;max-width:360px;background-color:#1d202b;padding:60px 30px 30px;}","img.jsx-2687996937{margin-bottom:35px;}","@media only screen and (max-width:1024px){.block.jsx-2687996937{max-width:100%;}}"]}))}),O=Object(y.c)("technology")(function(e){var t=e.t;return o.a.createElement(d.a,{bgColor:b.e.darkLight,color:b.e.primaryColor,padding:"120px"},o.a.createElement(h.a,{center:!0,margin:"0 0 60px"},t("tech.pod")),o.a.createElement(f.a,{direction:"row"},o.a.createElement(x.a,{style:"margin-right: 31px;",mStyle:"margin-right: 0;"},o.a.createElement("img",{src:"/static/img-proof-a@2x.png",className:"jsx-3268989254"}),o.a.createElement(j.a,{center:!0,margin:"0 0 15px;"},t("tech.pod.a")),o.a.createElement(g.a,{mStyle:"text-align: left;"},t("tech.pod.a.description"))),o.a.createElement(x.a,null,o.a.createElement("img",{src:"/static/img-proof-b@2x.png",className:"jsx-3268989254"}),o.a.createElement(j.a,{center:!0,margin:"0 0 15px;"},t("tech.pod.b")),o.a.createElement(g.a,{mStyle:"text-align: left;"},t("tech.pod.b.description")))),o.a.createElement(m.a,{styleId:"3268989254",css:["img.jsx-3268989254{width:100%;object-fit:contain;margin-bottom:30px;}"]}))}),S=n(24),P=Object(y.c)("technology")(function(e){var t=e.t;return o.a.createElement(d.a,{bgColor:b.e.dark,color:b.e.primaryColor,padding:"120px"},o.a.createElement(f.a,null,o.a.createElement(u.a,{animateOnce:!0,animateIn:"fadeInUp"},o.a.createElement(h.a,{center:!0},t("tech.demo"))),o.a.createElement(u.a,{animateOnce:!0,animateIn:"fadeInUp",delay:400},o.a.createElement(g.a,{center:!0,margin:"0 0 30px;"},t("tech.demo.description"))),o.a.createElement(S.a,{margin:"0 auto;",width:"40%;",title:"See Demo",uri:"/demo"})))}),N=Object(y.c)("technology")(function(e){var t=e.t;return o.a.createElement(d.a,{bgColor:b.e.darkLight,color:b.e.primaryColor,padding:"120px"},o.a.createElement(f.a,{direction:"row"},o.a.createElement(x.a,{flex:!0,style:"algin-items: center;"},o.a.createElement("img",{src:"/static/tech-miner.svg",className:"jsx-3011741578"})),o.a.createElement(x.a,{flex:!0,style:"justify-content: center;"},o.a.createElement(h.a,null,t("tech.miner")),o.a.createElement(g.a,{mStyle:"text-align: left;"},t("tech.miner.description")))),o.a.createElement(m.a,{styleId:"3011741578",css:["h2.jsx-3011741578{height:80px;font-family:Montserrat;font-size:60px;font-weight:600;line-height:1.33;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#d7f2ee;margin-bottom:60px;}","@media only screen and (max-width:1024px){img.jsx-3011741578{width:100%;}}"]}))}),_=n(125),T=Object(y.c)("technology")(function(e){var t=e.t;return o.a.createElement(d.a,{bgColor:b.e.darkLight,color:b.e.primaryColor,padding:"0 0 120px"},o.a.createElement(f.a,null,o.a.createElement(u.a,{animateOnce:!0,animateIn:"fadeInUp"},o.a.createElement(h.a,null,t("tech.documentation"))),o.a.createElement(u.a,{animateOnce:!0,animateIn:"fadeInUp",delay:400},o.a.createElement(g.a,{mStyle:"text-align: left;",margin:"0 0 90px"},t("tech.documentation.description"))),o.a.createElement(f.a,{direction:"row",style:"justify-content: space-between;"},o.a.createElement("div",{className:"jsx-3729051365 doc-block"},o.a.createElement("div",{className:"jsx-3729051365 doc-content whitepaper"},o.a.createElement("strong",{className:"jsx-3729051365"},t("tech.whitepaper")),o.a.createElement("p",{className:"jsx-3729051365"},t("tech.whitepaper"))),o.a.createElement(_.a,{title:t("tech.readmore"),uri:"http://ipfs.poseidon.network/ipfs/QmUzzcKXhturgVu8BgFhf7bmnf2ittC7d9T9bXwuX5NEXB"})),o.a.createElement("div",{className:"jsx-3729051365 doc-block"},o.a.createElement("div",{className:"jsx-3729051365 doc-content sdk"},o.a.createElement("strong",{className:"jsx-3729051365"},t("tech.sdk")),o.a.createElement("p",{className:"jsx-3729051365"},t("tech.sdk")))),o.a.createElement("div",{className:"jsx-3729051365 doc-block"},o.a.createElement("div",{className:"jsx-3729051365 doc-content github"},o.a.createElement("strong",{className:"jsx-3729051365"},t("tech.github")),o.a.createElement("p",{className:"jsx-3729051365"},t("tech.github")))))),o.a.createElement(m.a,{styleId:"3729051365",css:[".doc-block.jsx-3729051365{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:360px;height:390px;padding:23px 46px;border:solid 1px #ffffff;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}",".doc-content.jsx-3729051365{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:360px;height:358px;position:absolute;-webkit-transform:translate(-33px,-38px);-ms-transform:translate(-33px,-38px);transform:translate(-33px,-38px);padding:23px 32px;}",".whitepaper.jsx-3729051365{background-image:conic-gradient( #a1d7c8 0%, #8fcebd 25%, #d6f1ed 25%, #bce4db, #a9dace );}",".sdk.jsx-3729051365{background-image:conic-gradient(#fff,#ffe180 90%,#ffe180 85%);}",".github.jsx-3729051365{background-image:conic-gradient( #659eaf, #216c8a 50%, #d7f2ee 50%, #92bfc7 90% );}","strong.jsx-3729051365{font-size:24px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;color:#1d202b;}","p.jsx-3729051365{font-size:16px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;color:#1d202b;}","@media only screen and (max-width:1024px){.doc-block.jsx-3729051365{width:100%;margin-bottom:60px;}.doc-content.jsx-3729051365{width:92%;}}","@media only screen and (max-width:554px){.doc-content.jsx-3729051365{width:83%;}}"]}))});function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t,n,a,i,r,o){try{var c=e[r](o),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(a,i)}function V(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function z(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,A(t).apply(this,arguments))}var n,a,r,s,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,o.a.Component),n=t,a=[{key:"render",value:function(){return o.a.createElement(c.b,{title:"Poseidon Network | ".concat(this.props.t("technology.html.title"))},o.a.createElement(v,null),o.a.createElement(w,null),o.a.createElement(E,null),o.a.createElement(k,null),o.a.createElement(O,null),o.a.createElement(P,null),o.a.createElement(N,null),o.a.createElement(T,null),o.a.createElement(l.a,null))}}],r=[{key:"getInitialProps",value:(s=i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["common","nav","footer","technology"]});case 1:case"end":return e.stop()}},e,this)}),m=function(){var e=this,t=arguments;return new Promise(function(n,a){var i=s.apply(e,t);function r(e){C(i,n,a,r,o,"next",e)}function o(e){C(i,n,a,r,o,"throw",e)}r(void 0)})},function(){return m.apply(this,arguments)})}],a&&V(n.prototype,a),r&&V(n,r),t}();t.default=Object(y.c)("technology")(D)}},[[609,1,0]]]);