exports.id=904,exports.ids=[904],exports.modules={6987:(e,t,i)=>{let{createProxy:r}=i(6843);e.exports=r("C:\\Extra Stuff\\tim\\swimmingtim.github.io\\node_modules\\next\\dist\\client\\image-component.js")},4470:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),i(6031);let r=i(6184),n=i(4180);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var i;let a,l,u,{src:d,sizes:c,unoptimized:f=!1,priority:g=!1,loading:m,className:p,quality:h,width:b,height:w,fill:v=!1,style:y,onLoad:_,onLoadingComplete:x,placeholder:S="empty",blurDataURL:j,fetchPriority:C,layout:P,objectFit:O,objectPosition:z,lazyBoundary:E,lazyRoot:I,...M}=e,{imgConf:R,showAltText:k,blurComplete:D,defaultLoader:A}=t,G=R||n.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}let N=M.loader||A;delete M.loader,delete M.srcSet;let B="__next_img_default"in N;if(B){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:i,...r}=t;return e(r)}}if(P){"fill"===P&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!c&&(c=t)}let F="",L=s(b),W=s(w);if("object"==typeof(i=d)&&(o(i)||void 0!==i.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,j=j||e.blurDataURL,F=e.src,!v){if(L||W){if(L&&!W){let t=L/e.width;W=Math.round(e.height*t)}else if(!L&&W){let t=W/e.height;L=Math.round(e.width*t)}}else L=e.width,W=e.height}}let U=!g&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:F)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,U=!1),a.unoptimized&&(f=!0),B&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),g&&(C="high");let V=s(h),q=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:z}:{},k?{}:{color:"transparent"},y),T=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:L,heightInt:W,blurWidth:l,blurHeight:u,blurDataURL:j||"",objectFit:q.objectFit})+'")':'url("'+S+'")',J=T?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:T}:{},Y=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:o,sizes:s,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),d=l.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:l.map((e,r)=>a({config:t,src:i,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:a({config:t,src:i,quality:o,width:l[d]})}}({config:a,src:d,unoptimized:f,width:L,quality:V,sizes:c,loader:N});return{props:{...M,loading:U?"lazy":m,fetchPriority:C,width:L,height:W,decoding:"async",className:p,style:{...q,...J},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},meta:{unoptimized:f,priority:g,placeholder:S,fill:v}}}},6184:(e,t)=>{"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:o,objectFit:s}=e,a=r?40*r:t,l=n?40*n:i,u=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},4180:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return r}});let i=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7751:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{unstable_getImgProps:function(){return l},default:function(){return u}});let r=i(6783),n=i(4470),o=i(6031),s=i(6987),a=r._(i(4534)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},u=s.Image},4534:(e,t)=>{"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},6031:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},5904:(e,t,i)=>{e.exports=i(7751)},6783:(e,t,i)=>{"use strict";function r(e){return e&&e.__esModule?e:{default:e}}i.r(t),i.d(t,{_:()=>r,_interop_require_default:()=>r})}};