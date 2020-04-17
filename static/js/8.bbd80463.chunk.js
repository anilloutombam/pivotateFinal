(this["webpackJsonpno-stack-base"]=this["webpackJsonpno-stack-base"]||[]).push([[8],{569:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dialog__backdrop",onClick:e.onClose}),r.a.createElement("div",{className:"dialog text-center\n         ".concat(e.progress?" dialog__bordered":"","\n         ").concat(e.fullScreen?" dialog__fullscreen":"","\n      ")},r.a.createElement("div",{className:"dialog__close"},r.a.createElement("button",{onClick:e.onClose,type:"button","aria-label":"Close Account Info Modal Box"},"\xd7")),e.progress&&r.a.createElement("div",{className:"dialog__progress",style:{width:e.progress}}),e.children))}},606:function(e,t,a){"use strict";a.r(t);var n=a(562),r=a(563),l=a(565),c=a(564),o=a(566),i=a(0),s=a.n(i),m=a(43),u=a(568),d=a(61),b=a(570),p=a.n(b),E=a(567),h=a(75),f=a(572),v=a(36);function g(){var e=Object(f.a)(["\n  \n  }\n"]);return g=function(){return e},e}function N(){var e=Object(f.a)(["\n  font-size: 0.75rem;\n  color: tomato;\n"]);return N=function(){return e},e}function y(){var e=Object(f.a)(["\n  width: 250px;\n\n  padding: 1em 0;\n\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 10px 10px 8px -1px rgba(0, 0, 0, 0.6);\n"]);return y=function(){return e},e}v.a.div(y());var w=v.a.div(N()),S=v.a.div(g()),x=a(577),O=a(91),C=function(e){e.fieldLabel;var t=e.type,a=e.name,n=e.as,r=e.placeholder,l=e.options,c=void 0===l?[]:l;e.value;return s.a.createElement(S,null,"checkbox"!==t&&s.a.createElement("label",{style:{width:"100%"}},!n&&s.a.createElement(O.b,{className:"form__input",type:t,name:a,placeholder:r}),n&&s.a.createElement(O.b,{name:a,as:n,placeholder:r},0!==c.length&&c.map((function(e,t){return s.a.createElement("option",{key:t,value:e.value},e.label)})))),"checkbox"===t&&s.a.createElement(O.b,{name:a},(function(e){var t=e.field;e.form;return s.a.createElement("label",null,s.a.createElement("input",Object.assign({},t,{type:"checkbox"})),"I agree to our",s.a.createElement("b",null,s.a.createElement("a",{href:"/terms-and-conditions",target:"_blank"},"\xa0 Terms of Use \xa0")),"and",s.a.createElement("b",null,s.a.createElement("a",{href:"/privacy-policy",target:"_blank"},"\xa0 Privacy Policy \xa0")),"by signing up")})),s.a.createElement(w,null,s.a.createElement(O.a,{name:a})))},j=function(e){var t=e.initialValues,a=e.validationSchema,n=e.onSubmit,r=e.formError,l=Object(x.a)(e,["initialValues","validationSchema","onSubmit","formError"]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(O.d,{initialValues:t,validationSchema:a,onSubmit:n},(function(e){var t=e.isSubmitting,a=e.isValid,n=e.dirty,c=e.isValidating;return s.a.createElement(O.c,{className:"form"},s.a.createElement("div",{className:"form__input"},s.a.createElement(C,{placeholder:"First Name",type:"text",name:"firstName"})),s.a.createElement("div",{className:"form__input"},s.a.createElement(C,{placeholder:"Last Name",type:"text",name:"lastName"})),s.a.createElement("div",{className:"form__input"},s.a.createElement(C,{placeholder:"Email",type:"email",name:"email"})),s.a.createElement("br",null),s.a.createElement("div",{className:""},s.a.createElement(C,{name:"terms",type:"checkbox",fieldLabel:"I agree to our Terms of Use and Privacy Policy by signing up"})),s.a.createElement("div",{className:"form__input"},s.a.createElement("button",{className:"button button--yellow",type:"submit",disabled:t||!a||c||!n},"SIGN UP"),r&&s.a.createElement(w,null,r)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("small",null,"Already have an account?",s.a.createElement("a",{href:"javascript:void(0);",className:"teal--text",onClick:l.onSwitch},"\xa0Log In")))})))},k=function(e){var t=e.initialValues,a=e.validationSchema,n=e.onSubmit,r=e.formError;return s.a.createElement(s.a.Fragment,null,s.a.createElement(O.d,{initialValues:t,validationSchema:a,onSubmit:n},(function(e){var t=e.isSubmitting,a=e.isValid,n=e.dirty,l=e.isValidating;return s.a.createElement(O.c,{className:"form"},s.a.createElement("div",{className:"form__input"},s.a.createElement(C,{placeholder:"App Name:",type:"text",name:"app"})),s.a.createElement("div",{className:"form__input"},s.a.createElement(C,{placeholder:"Description:",as:"textarea",name:"description"})),s.a.createElement("br",null),s.a.createElement("div",{className:""},s.a.createElement(C,{name:"terms",type:"checkbox",fieldLabel:"I agree to our Terms of Use and Privacy Policy by signing up"})),s.a.createElement("div",{className:"form__input"},s.a.createElement("button",{className:"button button--yellow",type:"submit",disabled:t||!a||l||!n},"MAKE MY APP NOW"),r&&s.a.createElement(w,null,r)))})))},_=a(45),P=a(578),I=a.n(P),L=a(591),H=a.n(L),R=_.b().shape({firstName:_.d().label("firstName").required("Please enter your first name."),lastName:_.d().label("lastName").required("Please enter your last name."),email:_.d().label("email").email("Enter a valid email.").required("Please enter your email."),terms:_.a().label("terms").oneOf([!0],"Must Accept Terms and Conditions").required("Please click agree on terms before you can proceed")}),T=_.b().shape({app:_.d().label("app").required("Please enter desired app name."),description:_.d().label("description").required("Please enter app description."),terms:_.a().label("terms").oneOf([!0],"Must Accept Terms and Conditions").required("Please click agree on terms before you can proceed")}),A=_.b().shape({cardNumber:_.d().label("Card number").max(16).test("test-number","Credit Card number is invalid",(function(e){return I.a.number(e).isValid})).required(),cardName:_.d().label("Name on card").required(),cvc:_.d().label("CVC").min(3).max(4).required(),expiryMonth:_.d().label("Expiry month").min(2).max(2).required(),expiryYear:_.d().label("Expiry year").min(4).max(4).required()}),V=function(){for(var e=[],t=H()(),a=H()().add(10,"y");a.diff(t,"years")>=0;){var n=t.format("YYYY");e.push({value:n,label:n}),t.add(1,"year")}return e},M=function(){for(var e=[],t=H()(),a=H()().add(11,"month");a.diff(t,"months")>=0;){var n=t.format("MM"),r=t.format("MMMM");e.push({value:n,label:r}),t.add(1,"month")}return e},D=function(e){var t=e.initialValues,a=e.validationSchema,n=e.onSubmit,r=e.formError;return s.a.createElement(O.d,{initialValues:t,validationSchema:a,onSubmit:n},(function(e){var t=e.isSubmitting,a=e.isValid,n=e.dirty,l=e.isValidating;return s.a.createElement(O.c,{className:"form"},s.a.createElement("div",{className:"form__input"},s.a.createElement(C,{placeholder:"Name on Card:",type:"text",name:"cardName"})),s.a.createElement("div",{className:"form__input flex-row"},s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"form__input",style:{width:"300px"}},s.a.createElement(C,{placeholder:"Card Number:",type:"text",name:"cardNumber"})),s.a.createElement("div",{className:"",style:{width:"100px",marginLeft:"8px"}},s.a.createElement(C,{placeholder:"CVC:",type:"text",name:"cvc"})))),s.a.createElement("div",{className:"form__input flex-row"},s.a.createElement("div",{className:"flex items-center"},s.a.createElement("div",null,"Expiration Date"),s.a.createElement("div",{className:"",style:{marginLeft:"8px"}},s.a.createElement(C,{placeholder:"Month",as:"select",name:"expiryMonth",options:M()})),s.a.createElement("div",{className:"",style:{marginLeft:"8px"}},s.a.createElement(C,{placeholder:"Year",as:"select",name:"expiryYear",options:V()})))),s.a.createElement("div",{className:"form__input"},s.a.createElement("button",{type:"submit",className:"button button--yellow",disabled:t||!a||l||!n},"Sign Up!")),r&&s.a.createElement(w,null,r))}))},Y=a(569),U=new Date,F={name:"",username:"",firstName:"",lastName:"",email:"",password:"",passwordConfirmation:"",app:"",description:"",cardName:"",cardNumber:"",cvc:"",expiryMonth:(U.getMonth()+1).toString().padStart(2,"0"),expiryYear:U.getFullYear()},W=function(e,t){t.userClassId;var a=t.onSuccess,n=Object(h.a)(d.d),r=Object(E.a)(n,1)[0],l=Object(i.useState)(!1),c=Object(E.a)(l,2),o=c[0],m=c[1],b=Object(i.useState)(""),f=Object(E.a)(b,2),v=f[0],g=f[1],N=Object(i.useState)(1),y=Object(E.a)(N,2),w=y[0],S=y[1],x=Object(i.useState)(""),O=Object(E.a)(x,2),C=O[0],_=O[1],P=Object(i.useState)(""),I=Object(E.a)(P,2),L=(I[0],I[1]),H=Object(i.useState)(""),V=Object(E.a)(H,2),M=(V[0],V[1]),U=Object(i.useState)(""),W=Object(E.a)(U,2),q=(W[0],W[1]),G=Object(i.useState)(""),B=Object(E.a)(G,2),K=B[0],Q=B[1],J=Object(i.useState)(""),z=Object(E.a)(J,2),X=z[0],Z=z[1],$=Object(i.useState)(""),ee=Object(E.a)($,2),te=ee[0],ae=ee[1],ne=function(t,n){var l;return p.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return l=n.setSubmitting,g(""),L(t.firstName),M(t.lastName),q(t.email),{app:X,description:te,creditCardNumber:t.cardNumber,creditCardName:t.cardName,expirationDate:"".concat(t.expiryMonth,"/").concat(t.expiryYear),csv:t.cvc},c.prev=6,c.next=9,p.a.awrap(r({variables:{userClassId:e.userClassId,name:C,firstName:t.firstName,lastName:t.lastName,email:t.email,password:K,formValues:JSON.stringify({})}}));case 9:m(!0),a&&(re(),a()),c.next=18;break;case 13:c.prev=13,c.t0=c.catch(6),console.log(c.t0),console.log(c.t0.graphQLErrors),g("Something went wrong. Please try again.");case 18:l(!1);case 19:case"end":return c.stop()}}),null,null,[[6,13]])};if(o)return window.history.pushState({registered:"success"},"Registration Complete","?registered=success"),s.a.createElement(Y.a,{onClose:e.onClose},s.a.createElement("div",{className:"dialog__title"},s.a.createElement("h3",null,"Awesome, You're In")),s.a.createElement("p",{className:"text-center"},s.a.createElement("div",null,s.a.createElement(u.HashLink,{onClick:e.onClose,style:{marginBottom:"2em"},className:"button button--rounded button--yellow",to:"/schedule"},"Schedule a Meeting")),s.a.createElement("div",null,s.a.createElement(u.HashLink,{onClick:e.onClose,className:"button button--rounded button--yellow",to:"/contact?s=ny"},"Not Yet"))));var re=function(){S(w+1)},le=function(e,t){t.setSubmitting;console.log(e),g(""),e.password===e.passwordConfirmation&&(_(e.username),L(e.firstName),M(e.lastName),q(e.email),Q(e.password))},ce=function(e,t){var a=t.setSubmitting;g(""),Z(e.app),ae(e.description),a(!1),re()},oe=function(){switch(w){case 1:return{enterText:"ENTER DETAILS",buttonText:"SIGN UP",progressWidth:"33%"};case 2:return{enterText:"ENTER APP DESCRIPTION",buttonText:"MAKE MY APP NOW",progressWidth:"66%"};case 3:return{enterText:"CREDIT CARD DETAILS",buttonText:"MAKE MY APP NOW",progressWidth:"100%"}}};return s.a.createElement(s.a.Fragment,null,s.a.createElement(Y.a,{progress:oe().progressWidth,onClose:e.onClose},s.a.createElement("div",{className:"dialog__title"},s.a.createElement("h3",null,oe().enterText)),3==w&&s.a.createElement("p",{className:"dialog__text"},"You won\u2019t be charged a thing until you commit to it explicitly. In fact, the initial consultation is"," ",s.a.createElement("strong",{className:"teal--text"},"FREE"),".",s.a.createElement("br",null),s.a.createElement("br",null),"We just need your credit card in advance to cover ourselves."),function(){switch(w){case 1:return s.a.createElement(j,{onSwitch:e.onSwitch,initialValues:F,validationSchema:R,onSubmit:ne,formError:v});case 2:return s.a.createElement(k,{initialValues:F,validationSchema:T,onSubmit:ce,formError:v});case 3:return s.a.createElement(D,{initialValues:F,validationSchema:A,onSubmit:ne,formError:v});default:return s.a.createElement(j,{initialValues:F,validationSchema:R,onSubmit:le,formError:v})}}()))},q=a(593),G=a(592),B=a.n(G),K=function(e){var t=e.onSubmit,a=e.onCancel,n=e.error,r=e.disabled,l=Object(i.useState)(""),c=Object(E.a)(l,2),o=c[0],m=c[1];return s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(o)}},s.a.createElement("h3",null,"Reset Password"),s.a.createElement("div",null,"Your Username/Email:",s.a.createElement("input",{type:"text",onChange:function(e){e.preventDefault(),m(e.target.value)},disabled:r})),s.a.createElement("div",null,s.a.createElement("button",{type:"submit",disabled:r||!o},"Send Code"),s.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),a()},disabled:r},"Cancel")),n&&s.a.createElement("div",null,n))},Q=function(e){var t=e.onSubmit,a=e.onCancel,n=e.disabled,r=e.error,l=Object(i.useState)(""),c=Object(E.a)(l,2),o=c[0],m=c[1],u=Object(i.useState)(""),d=Object(E.a)(u,2),b=d[0],p=d[1],h=Object(i.useState)(""),f=Object(E.a)(h,2),v=f[0],g=f[1],N=Object(i.useState)(""),y=Object(E.a)(N,2),w=y[0],S=y[1],x=!o||!b||!v;return s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),S(""),o===b?t(o,v):S("New password and confirmation must match.")}},s.a.createElement("h3",null,"Reset Password"),s.a.createElement("p",null,"A password reset code has been sent to your email. Enter the code below."),s.a.createElement("div",null,"New Password:",s.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),m(e.target.value)},disabled:n})),s.a.createElement("div",null,"Confirm Password:",s.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),p(e.target.value)},disabled:n})),s.a.createElement("div",null,"Password Reset Code:",s.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),g(e.target.value)},disabled:n})),s.a.createElement("div",null,s.a.createElement("button",{type:"submit",disabled:n||x},"Change Password"),s.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),a()},disabled:n},"Cancel")),r&&s.a.createElement("div",null,r),w&&s.a.createElement("div",null,w))};function J(){var e=Object(f.a)(["\n  border: none;\n  text-decoration: underline;\n  background: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: none;\n  }\n"]);return J=function(){return e},e}var z=v.a.button(J()),X=(B()(Object(q.a)(d.a,{name:"getPasswordResetCode"}),Object(q.a)(d.e,{name:"resetPassword"}),d.h)((function(e){var t=e.getPasswordResetCode,a=e.resetPassword,n=e.platformId,r=Object(i.useState)(!1),l=Object(E.a)(r,2),c=l[0],o=l[1],m=Object(i.useState)(""),u=Object(E.a)(m,2),d=u[0],b=u[1],h=Object(i.useState)(!1),f=Object(E.a)(h,2),v=f[0],g=f[1],N=Object(i.useState)(""),y=Object(E.a)(N,2),w=y[0],S=y[1],x=Object(i.useState)(!1),O=Object(E.a)(x,2),C=O[0],j=O[1],k=function(){S(""),j(!1),g(!1),o(!1),b("")};return c?d?d&&!v?s.a.createElement(Q,{onSubmit:function(e,t){return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return S(""),j(!0),r.prev=2,r.next=5,p.a.awrap(a({variables:{userNameOrEmail:d,password:e,code:t,stackId:n}}));case 5:g(!0),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),S("Something went wrong. Please try again.");case 11:j(!1);case 12:case"end":return r.stop()}}),null,null,[[2,8]])},onCancel:k,disabled:C,error:w}):s.a.createElement("p",null,"Your password has been reset. You may now login.",s.a.createElement(z,{type:"button",onClick:k},"Ok.")):s.a.createElement(K,{onSubmit:function(e){return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return S(""),j(!0),a.prev=2,a.next=5,p.a.awrap(t({variables:{userNameOrEmail:e,stackId:n}}));case 5:b(e),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),S("Something went wrong. Please try again.");case 11:j(!1);case 12:case"end":return a.stop()}}),null,null,[[2,8]])},onCancel:k,disabled:C,error:w}):s.a.createElement(z,{type:"button",onClick:function(){return o(!0)}},"Forgot Password?")})),Object(d.h)((function(e,t){var a=t.loading,n=t.currentUser,r=t.login,l=Object(i.useState)(""),c=Object(E.a)(l,2),o=c[0],m=c[1],u=Object(i.useState)(""),d=Object(E.a)(u,2),b=d[0],h=d[1],f=Object(i.useState)(!1),v=Object(E.a)(f,2),g=v[0],N=v[1],y=Object(i.useState)(""),w=Object(E.a)(y,2),S=w[0],x=w[1];if(a||n)return null;return s.a.createElement(Y.a,{onClose:e.onClose},s.a.createElement("div",{className:"dialog__title"},s.a.createElement("img",{src:"http://pivotatestaticassets.com/images/Pivotate Logo.svg",width:"170"}),s.a.createElement("h3",null,"LOGIN")),s.a.createElement("form",{onSubmit:function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),N(!0),t.prev=2,t.next=5,p.a.awrap(r({username:o,password:b}));case 5:t.next=11;break;case 7:t.prev=7,t.t0=t.catch(2),x(t.t0.message||t.t0.graphQLErrors&&t.t0.graphQLErrors.length&&t.t0.graphQLErrors[0]||t.t0),N(!1);case 11:case"end":return t.stop()}}),null,null,[[2,7]])},className:"form"},s.a.createElement("div",{className:"form__input"},s.a.createElement("label",{htmlFor:"nostack-username"},s.a.createElement("input",{id:"nostack-username",type:"text",name:"username",placeholder:"Username",disabled:g,value:o,onChange:function(e){return m(e.target.value)}}))),s.a.createElement("div",{className:"form__input"},s.a.createElement("label",{htmlFor:"nostack-password"},s.a.createElement("input",{id:"nostack-password",type:"password",placeholder:"Password",name:"password",disabled:g,value:b,onChange:function(e){return h(e.target.value)}}))),s.a.createElement("div",{className:"form__input"},s.a.createElement("button",{className:"button button--yellow",type:"submit",disabled:g||!o||!b},"Log In")),S&&s.a.createElement("div",{className:"form__input"},S),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("small",null,"Dont have an account?",s.a.createElement("a",{href:"javascript:void(0);",className:"teal--text",onClick:e.onSwitch},"\xa0 Sign Up"))))}))),Z=a(92),$=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={modalRegistration:a.props.modalRegistration,modalLogin:!1,checkbox:!1},a.howItWorks=function(){var e=document.getElementById("how-it-works");return setTimeout((function(){e.scrollIntoView()}),100),s.a.createElement(m.c,{to:"/",push:!0})},a.about=function(){var e=document.getElementById("about");return setTimeout((function(){e.scrollIntoView()}),100),s.a.createElement(m.c,{to:"/",push:!0})},a.modalHandlerRegistration=function(){a.setState({modalRegistration:!a.state.modalRegistration})},a.modalHandlerLogin=function(){a.setState({modalLogin:!a.state.modalLogin})},a.modalHandlerSwitchForm=function(){a.modalHandlerRegistration(),a.modalHandlerLogin()},a.checkboxHandler=function(){a.setState({checkbox:!a.state.checkbox})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("header",{className:"container header flex items-center"},s.a.createElement("div",{className:"header__logo"},s.a.createElement("a",{href:"/"},s.a.createElement("img",{src:"https://pivotatestaticassets.com/images/Pivotate Logo.svg",alt:"Pivotate Logo",width:"170"}))),this.state.modalRegistration&&s.a.createElement(W,{platformId:Z.a,userClassId:Z.b,onSwitch:this.modalHandlerSwitchForm,onClose:this.modalHandlerRegistration}),this.state.modalLogin&&s.a.createElement(X,{onSwitch:this.modalHandlerSwitchForm,onClose:this.modalHandlerLogin}),s.a.createElement("nav",{className:"hide-tablet"},s.a.createElement("ul",{className:"flex header__nav"},s.a.createElement("li",null,s.a.createElement(u.HashLink,{to:"/pricing?=initial"}," \xa0 PRICING ")),s.a.createElement("li",null,s.a.createElement(u.HashLink,{to:"/#how-it-works"}," HOW IT WORKS ")),s.a.createElement("li",null,s.a.createElement(u.HashLink,{to:"/#about-us"}," ABOUT US ")))),!this.props.noAction&&s.a.createElement("div",{className:"grow-12 text-right hide-tablet"},s.a.createElement("a",{onClick:this.modalHandlerLogin}," LOGIN "),s.a.createElement(d.b,null),s.a.createElement("a",{onClick:this.modalHandlerRegistration,className:"button button--yellow button__sign-up"},"SIGN UP")),s.a.createElement("div",{className:"show-tablet"},s.a.createElement("div",{id:"amp-burger",onClick:this.checkboxHandler},s.a.createElement("div",{className:"lines"},s.a.createElement("input",{type:"checkbox",checked:this.state.checkbox,id:"checkbox",className:"checkbox"}),s.a.createElement("div",{className:"lines-icon","data-menu":""},s.a.createElement("div",{className:"icon-left"}),s.a.createElement("div",{className:"icon-right"})),s.a.createElement("div",{className:"mobile-menu__wrapper"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(u.HashLink,{to:"/pricing?inital"},"PRICING")),s.a.createElement("li",null,s.a.createElement(u.HashLink,{onClick:this.checkboxHandler,to:"/#how-it-works"},"HOW IT WORKS"," ")),s.a.createElement("li",null,s.a.createElement(u.HashLink,{onClick:this.checkboxHandler,to:"/#about-us"},"ABOUT US"," ")),!this.props.noAction&&s.a.createElement("li",null,s.a.createElement("a",{href:"javascript:void(0);",onClick:this.modalHandlerLogin}," ","LOGIN"," ")),!this.props.noAction&&s.a.createElement("li",null,s.a.createElement("a",{href:"javascript:void(0);",onClick:this.modalHandlerRegistration,className:"button button--yellow button__sign-up"},"FREE CONSULTATION"))))))))}}]),t}(i.Component);t.default=$}}]);
//# sourceMappingURL=8.bbd80463.chunk.js.map