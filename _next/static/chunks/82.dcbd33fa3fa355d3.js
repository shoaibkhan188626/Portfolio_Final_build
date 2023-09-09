(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82],{3082:function(e,r,n){"use strict";n.r(r),n.d(r,{Model:function(){return M}});var t=n(7568),u=n(1799),i=n(9396),a=n(9534),c=n(828),o=n(9815),s=n(7582),v=n(5893),f=n(3302),l=n(7378),d=n(2064),m=n(4529),p=n(7294),h=n(9477);const y={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:"\n      varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }\n  ",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform float h;\n\n    varying vec2 vUv;\n\n    void main() {\n\n    \tvec4 sum = vec4( 0.0 );\n\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n    \tgl_FragColor = sum;\n\n    }\n  "},g={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:"\n    varying vec2 vUv;\n\n    void main() {\n\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    }\n  ",fragmentShader:"\n\n  uniform sampler2D tDiffuse;\n  uniform float v;\n\n  varying vec2 vUv;\n\n  void main() {\n\n    vec4 sum = vec4( 0.0 );\n\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n    gl_FragColor = sum;\n\n  }\n  "};var x=n(5622),w=n(2362),D=n(3142),U=n(4209),_=n.n(U),R=n(6521),b="Frame",S="Screen",Z={stiffness:40,damping:20,mass:1.4,restSpeed:.001},M=function(e){var r=e.models,n=e.show,t=void 0===n||n,c=e.showDelay,o=void 0===c?0:c,s=e.cameraPosition,d=void 0===s?{x:0,y:0,z:8}:s,x=e.style,U=e.className,R=e.alt,b=(0,a.Z)(e,["models","show","showDelay","cameraPosition","style","className","alt"]),S=(0,p.useState)(!1),M=S[0],j=S[1],E=(0,p.useRef)(),k=(0,p.useRef)(),C=(0,p.useRef)(),z=(0,p.useRef)(),L=(0,p.useRef)(),A=(0,p.useRef)(),F=(0,p.useRef)(),T=(0,p.useRef)(),N=(0,p.useRef)(),I=(0,p.useRef)(),B=(0,p.useRef)(),J=(0,p.useRef)(),O=(0,p.useRef)(),K=(0,p.useRef)(),G=(0,p.useRef)(),W=(0,p.useRef)(),X=(0,p.useRef)(),H=(0,m.NM)(E,!1,{threshold:.2}),V=(0,f.J)(),q=(0,l.q)(0,Z),Y=(0,l.q)(0,Z);(0,p.useEffect)((function(){var e=E.current,r=e.clientWidth,n=e.clientHeight;A.current=new h.CP7({canvas:k.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),A.current.setPixelRatio(2),A.current.setSize(r,n),A.current.outputEncoding=h.knz,A.current.physicallyCorrectLights=!0,C.current=new h.cPb(36,r/n,.1,100),C.current.position.set(d.x,d.y,d.z),L.current=new h.xsS,z.current=new h.ZAu,L.current.add(z.current);var t=new h.Mig(16777215,1.2),u=new h.Ox3(16777215,1.1),i=new h.Ox3(16777215,.8);i.position.set(-6,2,2),u.position.set(.5,0,.866),G.current=[t,u,i],G.current.forEach((function(e){return L.current.add(e)})),F.current=new h.ZAu,L.current.add(F.current),F.current.position.set(0,0,-.8),F.current.rotateX(Math.PI/2);var a=512;T.current=new h.dd2(a,a),T.current.texture.generateMipmaps=!1,N.current=new h.dd2(a,a),N.current.texture.generateMipmaps=!1;var c=new h.BKK(8,8).rotateX(Math.PI/2),o=new h.vBJ({map:T.current.texture,opacity:.8,transparent:!0});K.current=new h.Kj0(c,o),K.current.scale.y=-1,F.current.add(K.current),W.current=new h.Kj0(c),W.current.visible=!1,F.current.add(W.current);var s=new h.vBJ({color:16777215,opacity:0,transparent:!0});X.current=new h.Kj0(c,s),X.current.rotateX(Math.PI),X.current.position.y-=1e-5,F.current.add(X.current),I.current=new h.iKG(-4,4,4,-4,0,1.5),I.current.rotation.x=Math.PI/2,F.current.add(I.current),B.current=new h.lRF,B.current.userData.darkness={value:3},B.current.onBeforeCompile=function(e){e.uniforms.darkness=B.current.userData.darkness,e.fragmentShader="\n        uniform float darkness;\n        ".concat(e.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );"),"\n      ")},B.current.depthTest=!1,B.current.depthWrite=!1,J.current=new h.jyz(y),J.current.depthTest=!1,O.current=new h.jyz(g),O.current.depthTest=!1;var v=q.onChange($),f=Y.onChange($);return function(){T.current.dispose(),N.current.dispose(),(0,D.Ji)(G.current),(0,D.in)(L.current),(0,D.e8)(A.current),v(),f()}}),[]);var Q=(0,p.useCallback)((function(e){W.current.visible=!0,W.current.material=J.current,W.current.material.uniforms.tDiffuse.value=T.current.texture,J.current.uniforms.h.value=e*(1/256),A.current.setRenderTarget(N.current),A.current.render(W.current,I.current),W.current.material=O.current,W.current.material.uniforms.tDiffuse.value=N.current.texture,O.current.uniforms.v.value=e*(1/256),A.current.setRenderTarget(T.current),A.current.render(W.current,I.current),W.current.visible=!1}),[]),$=(0,p.useCallback)((function(){var e=L.current.background;L.current.background=null,L.current.overrideMaterial=B.current,A.current.setRenderTarget(T.current),A.current.render(L.current,I.current),L.current.overrideMaterial=null,Q(5),Q(2),A.current.setRenderTarget(null),L.current.background=e,z.current.rotation.x=q.get(),z.current.rotation.y=Y.get(),A.current.render(L.current,C.current)}),[Q,q,Y]);return(0,p.useEffect)((function(){var e=function(e){var r=window.innerWidth,n=window.innerHeight,t=(e.clientX-r/2)/r,u=(e.clientY-n/2)/n;Y.set(t/2),q.set(u/2)};return H&&!V&&window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[H,V,q,Y]),(0,p.useEffect)((function(){var e=function(){if(E.current){var e=E.current,r=e.clientWidth,n=e.clientHeight;A.current.setSize(r,n),C.current.aspect=r/n,C.current.updateProjectionMatrix(),$()}};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[$]),(0,v.jsxs)("div",(0,i.Z)((0,u.Z)({className:(0,w.Sh)(_().model,U),"data-loaded":M,style:(0,w.Fh)({delay:(0,w.aU)(o)},x),ref:E,role:"img","aria-label":R},b),{children:[(0,v.jsx)("canvas",{className:_().canvas,ref:k}),r.map((function(e,r){return(0,v.jsx)(P,{renderer:A,modelGroup:z,show:t,showDelay:o,renderFrame:$,index:r,setLoaded:j,model:e},JSON.stringify(e.position))}))]}))},P=function(e){var r=e.renderer,n=e.model,u=(e.modelGroup,e.renderFrame),i=e.index,a=e.showDelay,v=e.setLoaded,l=e.show,m=(0,p.useState)(),y=m[0],g=(m[1],(0,f.J)()),w=(0,p.createRef)();(0,p.useEffect)((function(){var e=function(){var e=(0,t.Z)((function(e,n){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return e.encoding=h.knz,e.flipY=!1,e.anisotropy=r.current.capabilities.getMaxAnisotropy(),e.generateMipmaps=!1,[4,r.current.initTexture(e)];case 1:return t.sent(),n.material.color=new h.Ilk(16777215),n.material.transparent=!0,n.material.map=e,[2]}}))}));return function(r,n){return e.apply(this,arguments)}}();!function(){var r=(0,t.Z)((function(){var r,v,f,l,m,p,y,U,_,Z,M;return(0,s.__generator)(this,(function(P){switch(P.label){case 0:return r=n.texture,v=n.position,f=n.url,_=Promise.all,[4,D.Zf.loadAsync(f)];case 1:return[4,_.apply(Promise,[[P.sent()]])];case 2:return p=c.Z.apply(void 0,[P.sent(),2]),y=p[0],(U=p[1]).scene.traverse(function(){var n=(0,t.Z)((function(n){return(0,s.__generator)(this,(function(i){return n.material&&(n.material.color=new h.Ilk(2039845),n.material.color.convertSRGBToLinear()),n.name===S&&(w.current=n.clone(),w.current.material=n.material.clone(),n.parent.add(w.current),w.current.material.opacity=1,w.current.position.z+=.001,e(y,w.current),l=(0,t.Z)((function(){var t,i;return(0,s.__generator)(this,(function(a){switch(a.label){case 0:return[4,(0,x.Ro)(r)];case 1:return t=a.sent(),[4,D.Et.loadAsync(t)];case 2:return i=a.sent(),[4,e(i,n)];case 3:return a.sent(),(0,d.j)(1,0,{onUpdate:function(e){w.current.material.opacity=e,u()}}),[2]}}))}))),[2]}))}));return function(e){return n.apply(this,arguments)}}()),Z=new h.Pa4(v.x,v.y,v.z),g&&(M=U.scene.position).set.apply(M,(0,o.Z)(Z.toArray())),n.animation===R.u.SpringUp&&(m=function(){var e,r=new h.Pa4(Z.x,Z.y-1,Z.z);(e=U.scene.position).set.apply(e,(0,o.Z)(r.toArray())),(0,d.j)(r.y,Z.y,{type:"spring",delay:(300*i+a)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:function(e){U.scene.position.y=e,u()}})}),n.animation===R.u.LaptopOpen&&(m=function(){var e,r,n=U.scene.children.find((function(e){return e.name===b})),t=new h.Pa4(h.M8C.degToRad(90),0,0),c=new h.Pa4(0,0,0);return(e=U.scene.position).set.apply(e,(0,o.Z)(Z.toArray())),(r=n.rotation).set.apply(r,(0,o.Z)(t.toArray())),(0,d.j)(t.x,c.x,{type:"spring",delay:(300*i+a+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:function(e){n.rotation.x=e,u()}})}),[2,{loadFullResTexture:l,playAnimation:m}]}}))}))}()}),[]),(0,p.useEffect)((function(){if(y&&l){var e,r=function(){var r=(0,t.Z)((function(){var r,n,t;return(0,s.__generator)(this,(function(i){switch(i.label){case 0:return[4,y.start()];case 1:return r=i.sent(),n=r.loadFullResTexture,t=r.playAnimation,v(!0),g||(e=t()),[4,n()];case 2:return i.sent(),g&&u(),[2]}}))}));return function(){return r.apply(this,arguments)}}();return(0,p.startTransition)((function(){r()})),function(){null===e||void 0===e||e.stop()}}}),[y,l])}},5622:function(e,r,n){"use strict";n.d(r,{A2:function(){return o},Ro:function(){return f}});var t=n(7568),u=n(828),i=n(7582);function a(e){return c.apply(this,arguments)}function c(){return(c=(0,t.Z)((function(e){var r,n,t;return(0,i.__generator)(this,(function(u){return r=e.src,n=e.srcSet,t=e.sizes,[2,new Promise((function(e,u){var i=o(n);try{if(!r&&!n)throw new Error("No image src or srcSet provided");var a=new Image;r&&(a.src=r),i&&(a.srcset=i),t&&(a.sizes=t);var c=function(){a.removeEventListener("load",c);var r=a.currentSrc;a=null,e(r)};a.addEventListener("load",c)}catch(s){u("Error loading ".concat(i,": ").concat(s))}}))]}))}))).apply(this,arguments)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return"string"===typeof e?e:e.map((function(e){return"".concat(e.src," ").concat(e.width,"w")})).join(", ")}function s(){return v.apply(this,arguments)}function v(){return v=(0,t.Z)((function(){var e,r,n=arguments;return(0,i.__generator)(this,(function(u){return e=n.length>0&&void 0!==n[0]?n[0]:1,r=n.length>1&&void 0!==n[1]?n[1]:1,[2,new Promise((function(n){var u=document.createElement("canvas"),a=u.getContext("2d");u.width=e,u.height=r,a.fillStyle="rgba(0, 0, 0, 0)",a.fillRect(0,0,e,r),u.toBlob(function(){var e=(0,t.Z)((function(e){var r;return(0,i.__generator)(this,(function(t){if(!e)throw new Error("Video thumbnail failed to load");return r=URL.createObjectURL(e),u.remove(),n(r),[2]}))}));return function(r){return e.apply(this,arguments)}}())}))]}))})),v.apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return l=(0,t.Z)((function(e){var r,n,c,v,f,l;return(0,i.__generator)(this,(function(d){switch(d.label){case 0:return r=e.srcSet,n=e.sizes,c=o(r),[4,Promise.all(c.split(", ").map(function(){var e=(0,t.Z)((function(e){var r,n,t,a;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return r=(0,u.Z)(e.split(" "),2),n=r[0],t=r[1],[4,s(Number(t.replace("w","")))];case 1:return a=i.sent(),[2,{src:n,image:a,width:t}]}}))}));return function(r){return e.apply(this,arguments)}}()))];case 1:return v=d.sent(),f=v.map((function(e){var r=e.image,n=e.width;return"".concat(r," ").concat(n)})).join(", "),[4,a({srcSet:f,sizes:n})];case 2:return l=d.sent(),[2,v.find((function(e){return e.image===l})).src]}}))})),l.apply(this,arguments)}},3142:function(e,r,n){"use strict";n.d(r,{Et:function(){return s},Ji:function(){return d},Zf:function(){return o},e8:function(){return l},in:function(){return v},x2:function(){return m}});var t=n(9477),u=n(4976),i=n(1265);t.CtF.enabled=!0;var a=new u._,c=new i.E;a.setDecoderPath("/draco/"),c.setDRACOLoader(a);var o=c,s=new t.dpR,v=function(e){null===e||void 0===e||e.traverse((function(e){if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)f(e.material);else{var r=!0,n=!1,t=void 0;try{for(var u,i=e.material[Symbol.iterator]();!(r=(u=i.next()).done);r=!0){var a=u.value;f(a)}}catch(c){n=!0,t=c}finally{try{r||null==i.return||i.return()}finally{if(n)throw t}}}}))},f=function(e){e.dispose();var r=!0,n=!1,t=void 0;try{for(var u,i=Object.keys(e)[Symbol.iterator]();!(r=(u=i.next()).done);r=!0){var a,c,o,s=e[u.value];if(s&&"object"===typeof s&&"minFilter"in s)s.dispose(),null===(a=s.source)||void 0===a||null===(c=a.data)||void 0===c||null===(o=c.close)||void 0===o||o.call(c)}}catch(v){n=!0,t=v}finally{try{r||null==i.return||i.return()}finally{if(n)throw t}}},l=function(e){e.dispose(),e=null},d=function(e){var r=!0,n=!1,t=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done);r=!0){var a=u.value;a.parent.remove(a)}}catch(c){n=!0,t=c}finally{try{r||null==i.return||i.return()}finally{if(n)throw t}}},m=function(e,r){var n;return r.traverse((function(r){r.name===e&&(n=r)})),n}},4209:function(e){e.exports={model:"Model_model__228ej",canvas:"Model_canvas__kaLjL"}},2064:function(e,r,n){"use strict";n.d(r,{j:function(){return a}});var t=n(5524),u=n(3234),i=n(406);function a(e,r,n={}){const a=(0,i.i)(e)?e:(0,u.B)(e);return a.start((0,t.Z)("",a,r,n)),{stop:()=>a.stop(),isAnimating:()=>a.isAnimating()}}}}]);