"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[13557],{813557:function(Rn,j,t){t.r(j),t.d(j,{scopes:function(){return F}});var u=t(667294),i=t(605071),P=t(664095),a=t(883458),V=t(75529),F={"components-anchor-demo-basic":{React:u,Anchor:i.Z,Row:P.Z,Col:a.Z},"components-anchor-demo-horizontal":{React:u,Anchor:i.Z},"components-anchor-demo-static":{React:u,Anchor:i.Z},"components-anchor-demo-onclick":{React:u,Anchor:i.Z},"components-anchor-demo-customizehighlight":{React:u,Anchor:i.Z},"components-anchor-demo-targetoffset":{React:u,useEffect:u.useEffect,useState:u.useState,Anchor:i.Z,Row:P.Z,Col:a.Z},"components-anchor-demo-onchange":{React:u,Anchor:i.Z},"components-anchor-demo-replace":{React:u,Anchor:i.Z,Col:a.Z,Row:P.Z},"components-anchor-demo-legacy-anchor":{React:u,Anchor:i.Z},"components-anchor-demo-component-token":{React:u,Anchor:i.Z,Col:a.Z,ConfigProvider:V.ZP,Row:P.Z}}},605071:function(Rn,j,t){t.d(j,{Z:function(){return Kn}});var u=t(97857),i=t.n(u),P=t(9783),a=t.n(P),V=t(719632),F=t.n(V),En=t(805574),G=t.n(En),l=t(667294),Tn=t(294184),Z=t.n(Tn),J=t(656790),Pn=t(517423),Bn=t(982673),In=t(658192),Zn=t(252901),ln=t(73287),Nn=t(670544),Dn=l.createContext(void 0),sn=Dn,A=t(785893),On=function(n){var e=n.href,r=n.title,c=n.prefixCls,v=n.children,R=n.className,E=n.target,h=n.replace,B=l.useContext(sn),g=B||{},y=g.registerLink,N=g.unregisterLink,D=g.scrollTo,O=g.onClick,X=g.activeLink,x=g.direction;l.useEffect(function(){return y==null||y(e),function(){N==null||N(e)}},[e]);var Q=function(M){h&&(M.preventDefault(),window.location.replace(e)),O==null||O(M,{title:r,href:e}),D==null||D(e)};if(!1)var T;var b=l.useContext(ln.E_),z=b.getPrefixCls,k=z("anchor",c),p=X===e,q=Z()("".concat(k,"-link"),R,a()({},"".concat(k,"-link-active"),p)),gn=Z()("".concat(k,"-link-title"),a()({},"".concat(k,"-link-title-active"),p));return(0,A.jsxs)("div",{className:q,children:[(0,A.jsx)("a",{className:gn,href:e,title:typeof r=="string"?r:"",target:E,onClick:Q,children:r}),x!=="horizontal"?v:null]})},dn=On,Y=t(900210),un=t(548073),zn=t(286665),Mn=t(986943),$n=function(n){var e,r,c=n.componentCls,v=n.holderOffsetBlock,R=n.motionDurationSlow,E=n.lineWidthBold,h=n.colorPrimary,B=n.lineType,g=n.colorSplit,y=n.calc;return a()({},"".concat(c,"-wrapper"),(r={marginBlockStart:y(v).mul(-1).equal(),paddingBlockStart:v},a()(r,c,i()(i()({},(0,un.Wf)(n)),{},a()({position:"relative",paddingInlineStart:E},"".concat(c,"-link"),(e={paddingBlock:n.linkPaddingBlock,paddingInline:"".concat((0,Y.unit)(n.linkPaddingInlineStart)," 0"),"&-title":i()(i()({},un.vS),{},{position:"relative",display:"block",marginBlockEnd:n.anchorTitleBlock,color:n.colorText,transition:"all ".concat(n.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},a()(e,"&-active > ".concat(c,"-link-title"),{color:n.colorPrimary}),a()(e,"".concat(c,"-link"),{paddingBlock:n.anchorPaddingBlockSecondary}),e)))),a()(r,"&:not(".concat(c,"-wrapper-horizontal)"),a()({},c,a()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat((0,Y.unit)(E)," ").concat(B," ").concat(g),content:'" "'}},"".concat(c,"-ink"),a()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(R," ease-in-out"),width:E,backgroundColor:h},"&".concat(c,"-ink-visible"),{display:"inline-block"})))),a()(r,"".concat(c,"-fixed ").concat(c,"-ink ").concat(c,"-ink"),{display:"none"}),r))},wn=function(n){var e,r=n.componentCls,c=n.motionDurationSlow,v=n.lineWidthBold,R=n.colorPrimary;return a()({},"".concat(r,"-wrapper-horizontal"),a()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"".concat((0,Y.unit)(n.lineWidth)," ").concat(n.lineType," ").concat(n.colorSplit),content:'" "'}},r,(e={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},a()(e,"".concat(r,"-link:first-of-type"),{paddingInline:0}),a()(e,"".concat(r,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(c," ease-in-out, width ").concat(c," ease-in-out"),height:v,backgroundColor:R}),e)))},Wn=function(n){return{linkPaddingBlock:n.paddingXXS,linkPaddingInlineStart:n.padding}},jn=(0,zn.I$)("Anchor",function(f){var n=f.fontSize,e=f.fontSizeLG,r=f.paddingXXS,c=f.calc,v=(0,Mn.TS)(f,{holderOffsetBlock:r,anchorPaddingBlockSecondary:c(r).div(2).equal(),anchorTitleBlock:c(n).div(14).mul(3).equal(),anchorBallSize:c(e).div(2).equal()});return[$n(v),wn(v)]},Wn);function Xn(){return window}function fn(f,n){if(!f.getClientRects().length)return 0;var e=f.getBoundingClientRect();return e.width||e.height?n===window?(n=f.ownerDocument.documentElement,e.top-n.clientTop):e.top-n.getBoundingClientRect().top:e.top}var vn=/#([\S ]+)$/,bn=function(n){var e,r,c=n.rootClassName,v=n.prefixCls,R=n.className,E=n.style,h=n.offsetTop,B=n.affix,g=B===void 0?!0:B,y=n.showInkInFixed,N=y===void 0?!1:y,D=n.children,O=n.items,X=n.direction,x=X===void 0?"vertical":X,Q=n.bounds,T=n.targetOffset,b=n.onClick,z=n.onChange,k=n.getContainer,p=n.getCurrentAnchor,q=n.replace;if(!1)var gn;var mn=l.useState([]),M=G()(mn,2),H=M[0],Cn=M[1],Un=l.useState(null),pn=G()(Un,2),$=pn[0],Vn=pn[1],_=l.useRef($),Sn=l.useRef(null),nn=l.useRef(null),tn=l.useRef(!1),K=l.useContext(ln.E_),Fn=K.direction,I=K.anchor,Gn=K.getTargetContainer,Jn=K.getPrefixCls,C=Jn("anchor",v),yn=(0,Nn.Z)(C),Yn=jn(C,yn),en=G()(Yn,3),Qn=en[0],qn=en[1],_n=en[2],w=(e=k!=null?k:Gn)!==null&&e!==void 0?e:Xn,on=JSON.stringify(H),nt=(0,J.zX)(function(o){H.includes(o)||Cn(function(s){return[].concat(F()(s),[o])})}),tt=(0,J.zX)(function(o){H.includes(o)&&Cn(function(s){return s.filter(function(d){return d!==o})})}),et=function(){var s,d=(s=Sn.current)===null||s===void 0?void 0:s.querySelector(".".concat(C,"-link-title-active"));if(d&&nn.current){var S=nn.current.style,m=x==="horizontal";S.top=m?"":"".concat(d.offsetTop+d.clientHeight/2,"px"),S.height=m?"":"".concat(d.clientHeight,"px"),S.left=m?"".concat(d.offsetLeft,"px"):"",S.width=m?"".concat(d.clientWidth,"px"):"",m&&(0,Pn.Z)(d,{scrollMode:"if-needed",block:"nearest"})}},ot=function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,m=[],cn=w();if(s.forEach(function(L){var W=vn.exec(L==null?void 0:L.toString());if(W){var Ln=document.getElementById(W[1]);if(Ln){var An=fn(Ln,cn);An<d+S&&m.push({link:L,top:An})}}}),m.length){var U=m.reduce(function(L,W){return W.top>L.top?W:L});return U.link}return""},an=(0,J.zX)(function(o){if(_.current!==o){var s=typeof p=="function"?p(o):o;Vn(s),_.current=s,z==null||z(o)}}),rn=l.useCallback(function(){if(!tn.current){var o=ot(H,T!==void 0?T:h||0,Q);an(o)}},[on,T,h]),xn=l.useCallback(function(o){an(o);var s=vn.exec(o);if(s){var d=document.getElementById(s[1]);if(d){var S=w(),m=(0,Bn.Z)(S,!0),cn=fn(d,S),U=m+cn;U-=T!==void 0?T:h||0,tn.current=!0,(0,In.Z)(U,{getContainer:w,callback:function(){tn.current=!1}})}}},[T,h]),at=Z()(qn,_n,yn,c,"".concat(C,"-wrapper"),(r={},a()(r,"".concat(C,"-wrapper-horizontal"),x==="horizontal"),a()(r,"".concat(C,"-rtl"),Fn==="rtl"),r),R,I==null?void 0:I.className),rt=Z()(C,a()({},"".concat(C,"-fixed"),!g&&!N)),ct=Z()("".concat(C,"-ink"),a()({},"".concat(C,"-ink-visible"),$)),it=i()(i()({maxHeight:h?"calc(100vh - ".concat(h,"px)"):"100vh"},I==null?void 0:I.style),E),lt=function o(s){return Array.isArray(s)?s.map(function(d){return(0,l.createElement)(dn,i()(i()({replace:q},d),{},{key:d.key}),x==="vertical"&&o(d.children))}):null},kn=(0,A.jsx)("div",{ref:Sn,className:at,style:it,children:(0,A.jsxs)("div",{className:rt,children:[(0,A.jsx)("span",{className:ct,ref:nn}),"items"in n?lt(O):D]})});l.useEffect(function(){var o=w();return rn(),o==null||o.addEventListener("scroll",rn),function(){o==null||o.removeEventListener("scroll",rn)}},[on]),l.useEffect(function(){typeof p=="function"&&an(p(_.current||""))},[p]),l.useEffect(function(){et()},[x,p,on,$]);var st=l.useMemo(function(){return{registerLink:nt,unregisterLink:tt,scrollTo:xn,activeLink:$,onClick:b,direction:x}},[$,b,xn,x]);return Qn((0,A.jsx)(sn.Provider,{value:st,children:g?(0,A.jsx)(Zn.Z,{offsetTop:h,target:w,children:kn}):kn}))},Hn=bn,hn=Hn;hn.Link=dn;var Kn=hn}}]);
