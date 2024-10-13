(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qs="169",Ko=0,ha=1,$o=2,oo=1,Jo=2,on=3,Rn=0,Ct=1,ln=2,bn=0,oi=1,fa=2,da=3,pa=4,jo=5,On=100,Qo=101,el=102,tl=103,nl=104,il=200,rl=201,sl=202,al=203,hs=204,fs=205,ol=206,ll=207,cl=208,ul=209,hl=210,fl=211,dl=212,pl=213,ml=214,ds=0,ps=1,ms=2,ui=3,_s=4,gs=5,vs=6,xs=7,lo=0,_l=1,gl=2,wn=0,vl=1,xl=2,Sl=3,Ml=4,El=5,yl=6,Tl=7,co=300,hi=301,fi=302,Ss=303,Ms=304,wr=306,Es=1e3,hn=1001,ys=1002,Rt=1003,Al=1004,qi=1005,yt=1006,Ur=1007,An=1008,pn=1009,uo=1010,ho=1011,Pi=1012,ea=1013,Hn=1014,Nt=1015,fn=1016,ta=1017,na=1018,di=1020,fo=35902,po=1021,mo=1022,Ft=1023,_o=1024,go=1025,li=1026,pi=1027,ia=1028,ra=1029,vo=1030,sa=1031,aa=1033,mr=33776,_r=33777,gr=33778,vr=33779,Ts=35840,As=35841,bs=35842,ws=35843,Rs=36196,Cs=37492,Ps=37496,Ls=37808,Us=37809,Ds=37810,Is=37811,Ns=37812,Fs=37813,Os=37814,Bs=37815,zs=37816,Hs=37817,Gs=37818,ks=37819,Vs=37820,Ws=37821,xr=36492,Xs=36494,qs=36495,xo=36283,Ys=36284,Zs=36285,Ks=36286,bl=3200,wl=3201,Rl=0,Cl=1,cn="",Yt="srgb",Jt="srgb-linear",oa="display-p3",Rr="display-p3-linear",Er="linear",at="srgb",yr="rec709",Tr="p3",Xn=7680,ma=519,Pl=512,Ll=513,Ul=514,So=515,Dl=516,Il=517,Nl=518,Fl=519,_a=35044,ga="300 es",dn=2e3,Ar=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dr=Math.PI/180,$s=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function Ol(i,e){return(i%e+e)%e}function Ir(i,e,t){return(1-t)*i+t*e}function Ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,r,s,a,l,c,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,c,u)}set(e,t,n,r,s,a,l,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],c=n[6],u=n[1],h=n[4],f=n[7],m=n[2],g=n[5],y=n[8],A=r[0],_=r[3],p=r[6],C=r[1],b=r[4],R=r[7],W=r[2],F=r[5],L=r[8];return s[0]=a*A+l*C+c*W,s[3]=a*_+l*b+c*F,s[6]=a*p+l*R+c*L,s[1]=u*A+h*C+f*W,s[4]=u*_+h*b+f*F,s[7]=u*p+h*R+f*L,s[2]=m*A+g*C+y*W,s[5]=m*_+g*b+y*F,s[8]=m*p+g*R+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*l*u-n*s*h+n*l*c+r*s*u-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=h*a-l*u,m=l*c-h*s,g=u*s-a*c,y=t*f+n*m+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/y;return e[0]=f*A,e[1]=(r*u-h*n)*A,e[2]=(l*n-r*a)*A,e[3]=m*A,e[4]=(h*t-r*c)*A,e[5]=(r*s-l*t)*A,e[6]=g*A,e[7]=(n*c-u*t)*A,e[8]=(a*t-n*s)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Nr.makeScale(e,t)),this}rotate(e){return this.premultiply(Nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new ke;function Mo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Li(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bl(){const i=Li("canvas");return i.style.display="block",i}const va={};function Sr(i){i in va||(va[i]=!0,console.warn(i))}function zl(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Hl(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gl(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xa=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sa=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yi={[Jt]:{transfer:Er,primaries:yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Yt]:{transfer:at,primaries:yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Rr]:{transfer:Er,primaries:Tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Sa),fromReference:i=>i.applyMatrix3(xa)},[oa]:{transfer:at,primaries:Tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Sa),fromReference:i=>i.applyMatrix3(xa).convertLinearToSRGB()}},kl=new Set([Jt,Rr]),nt={enabled:!0,_workingColorSpace:Jt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!kl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=yi[e].toReference,r=yi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return yi[i].primaries},getTransfer:function(i){return i===cn?Er:yi[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(yi[e].luminanceCoefficients)}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qn;class Vl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qn===void 0&&(qn=Li("canvas")),qn.width=e.width,qn.height=e.height;const n=qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Li("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wl=0;class Eo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Or(r[a].image)):s.push(Or(r[a]))}else s=Or(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xl=0;class Tt extends gi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=hn,r=hn,s=yt,a=An,l=Ft,c=pn,u=Tt.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Ui(),this.name="",this.source=new Eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==co)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=co;Tt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],h=c[4],f=c[8],m=c[1],g=c[5],y=c[9],A=c[2],_=c[6],p=c[10];if(Math.abs(h-m)<.01&&Math.abs(f-A)<.01&&Math.abs(y-_)<.01){if(Math.abs(h+m)<.1&&Math.abs(f+A)<.1&&Math.abs(y+_)<.1&&Math.abs(u+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,R=(g+1)/2,W=(p+1)/2,F=(h+m)/4,L=(f+A)/4,k=(y+_)/4;return b>R&&b>W?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=F/n,s=L/n):R>W?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=F/r,s=k/r):W<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(W),n=L/s,r=k/s),this.set(n,r,s,t),this}let C=Math.sqrt((_-y)*(_-y)+(f-A)*(f-A)+(m-h)*(m-h));return Math.abs(C)<.001&&(C=1),this.x=(_-y)/C,this.y=(f-A)/C,this.z=(m-h)/C,this.w=Math.acos((u+g+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ql extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Tt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yo extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yl extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let c=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3];const m=s[a+0],g=s[a+1],y=s[a+2],A=s[a+3];if(l===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(l===1){e[t+0]=m,e[t+1]=g,e[t+2]=y,e[t+3]=A;return}if(f!==A||c!==m||u!==g||h!==y){let _=1-l;const p=c*m+u*g+h*y+f*A,C=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const W=Math.sqrt(b),F=Math.atan2(W,p*C);_=Math.sin(_*F)/W,l=Math.sin(l*F)/W}const R=l*C;if(c=c*_+m*R,u=u*_+g*R,h=h*_+y*R,f=f*_+A*R,_===1-l){const W=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=W,u*=W,h*=W,f*=W}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const l=n[r],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a],m=s[a+1],g=s[a+2],y=s[a+3];return e[t]=l*y+h*f+c*g-u*m,e[t+1]=c*y+h*m+u*f-l*g,e[t+2]=u*y+h*g+l*m-c*f,e[t+3]=h*y-l*f-c*m-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(n/2),h=l(r/2),f=l(s/2),m=c(n/2),g=c(r/2),y=c(s/2);switch(a){case"XYZ":this._x=m*h*f+u*g*y,this._y=u*g*f-m*h*y,this._z=u*h*y+m*g*f,this._w=u*h*f-m*g*y;break;case"YXZ":this._x=m*h*f+u*g*y,this._y=u*g*f-m*h*y,this._z=u*h*y-m*g*f,this._w=u*h*f+m*g*y;break;case"ZXY":this._x=m*h*f-u*g*y,this._y=u*g*f+m*h*y,this._z=u*h*y+m*g*f,this._w=u*h*f-m*g*y;break;case"ZYX":this._x=m*h*f-u*g*y,this._y=u*g*f+m*h*y,this._z=u*h*y-m*g*f,this._w=u*h*f+m*g*y;break;case"YZX":this._x=m*h*f+u*g*y,this._y=u*g*f+m*h*y,this._z=u*h*y-m*g*f,this._w=u*h*f-m*g*y;break;case"XZY":this._x=m*h*f-u*g*y,this._y=u*g*f-m*h*y,this._z=u*h*y+m*g*f,this._w=u*h*f+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],c=t[9],u=t[2],h=t[6],f=t[10],m=n+l+f;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(n>l&&n>f){const g=2*Math.sqrt(1+n-l-f);this._w=(h-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(l>f){const g=2*Math.sqrt(1+l-n-f);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-n-l);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*l+r*u-s*c,this._y=r*h+a*c+s*l-n*u,this._z=s*h+a*u+n*c-r*l,this._w=a*h-n*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let l=a*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,l),f=Math.sin((1-t)*h)/u,m=Math.sin(t*h)/u;return this._w=a*f+this._w*m,this._x=n*f+this._x*m,this._y=r*f+this._y*m,this._z=s*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ma.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ma.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*n),h=2*(l*t-s*r),f=2*(s*n-a*t);return this.x=t+c*u+a*f-l*h,this.y=n+c*h+l*u-s*f,this.z=r+c*f+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*a-n*c,this.z=n*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new X,Ma=new Di;class Ii{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,zt):zt.fromBufferAttribute(s,a),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yi.copy(n.boundingBox)),Yi.applyMatrix4(e.matrixWorld),this.union(Yi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),Zi.subVectors(this.max,Ti),Yn.subVectors(e.a,Ti),Zn.subVectors(e.b,Ti),Kn.subVectors(e.c,Ti),vn.subVectors(Zn,Yn),xn.subVectors(Kn,Zn),Cn.subVectors(Yn,Kn);let t=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-Cn.z,Cn.y,vn.z,0,-vn.x,xn.z,0,-xn.x,Cn.z,0,-Cn.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-Cn.y,Cn.x,0];return!zr(t,Yn,Zn,Kn,Zi)||(t=[1,0,0,0,1,0,0,0,1],!zr(t,Yn,Zn,Kn,Zi))?!1:(Ki.crossVectors(vn,xn),t=[Ki.x,Ki.y,Ki.z],zr(t,Yn,Zn,Kn,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new X,new X,new X,new X,new X,new X,new X,new X],zt=new X,Yi=new Ii,Yn=new X,Zn=new X,Kn=new X,vn=new X,xn=new X,Cn=new X,Ti=new X,Zi=new X,Ki=new X,Pn=new X;function zr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Pn.fromArray(i,s);const l=r.x*Math.abs(Pn.x)+r.y*Math.abs(Pn.y)+r.z*Math.abs(Pn.z),c=e.dot(Pn),u=t.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const Zl=new Ii,Ai=new X,Hr=new X;class la{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zl.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ai,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(Hr)),this.expandByPoint(Ai.copy(e.center).sub(Hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new X,Gr=new X,$i=new X,Sn=new X,kr=new X,Ji=new X,Vr=new X;class Kl{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.origin).addScaledVector(this.direction,t),tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gr.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(Gr);const s=e.distanceTo(t)*.5,a=-this.direction.dot($i),l=Sn.dot(this.direction),c=-Sn.dot($i),u=Sn.lengthSq(),h=Math.abs(1-a*a);let f,m,g,y;if(h>0)if(f=a*c-l,m=a*l-c,y=s*h,f>=0)if(m>=-y)if(m<=y){const A=1/h;f*=A,m*=A,g=f*(f+a*m+2*l)+m*(a*f+m+2*c)+u}else m=s,f=Math.max(0,-(a*m+l)),g=-f*f+m*(m+2*c)+u;else m=-s,f=Math.max(0,-(a*m+l)),g=-f*f+m*(m+2*c)+u;else m<=-y?(f=Math.max(0,-(-a*s+l)),m=f>0?-s:Math.min(Math.max(-s,-c),s),g=-f*f+m*(m+2*c)+u):m<=y?(f=0,m=Math.min(Math.max(-s,-c),s),g=m*(m+2*c)+u):(f=Math.max(0,-(a*s+l)),m=f>0?s:Math.min(Math.max(-s,-c),s),g=-f*f+m*(m+2*c)+u);else m=a>0?-s:s,f=Math.max(0,-(a*m+l)),g=-f*f+m*(m+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Gr).addScaledVector($i,m),g}intersectSphere(e,t){tn.subVectors(e.center,this.origin);const n=tn.dot(this.direction),r=tn.dot(tn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),h>=0?(s=(e.min.y-m.y)*h,a=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,a=(e.min.y-m.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(l=(e.min.z-m.z)*f,c=(e.max.z-m.z)*f):(l=(e.max.z-m.z)*f,c=(e.min.z-m.z)*f),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,n,r,s){kr.subVectors(t,e),Ji.subVectors(n,e),Vr.crossVectors(kr,Ji);let a=this.direction.dot(Vr),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Sn.subVectors(this.origin,e);const c=l*this.direction.dot(Ji.crossVectors(Sn,Ji));if(c<0)return null;const u=l*this.direction.dot(kr.cross(Sn));if(u<0||c+u>a)return null;const h=-l*Sn.dot(Vr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,r,s,a,l,c,u,h,f,m,g,y,A,_){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,c,u,h,f,m,g,y,A,_)}set(e,t,n,r,s,a,l,c,u,h,f,m,g,y,A,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=l,p[13]=c,p[2]=u,p[6]=h,p[10]=f,p[14]=m,p[3]=g,p[7]=y,p[11]=A,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$n.setFromMatrixColumn(e,0).length(),s=1/$n.setFromMatrixColumn(e,1).length(),a=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const m=a*h,g=a*f,y=l*h,A=l*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=g+y*u,t[5]=m-A*u,t[9]=-l*c,t[2]=A-m*u,t[6]=y+g*u,t[10]=a*c}else if(e.order==="YXZ"){const m=c*h,g=c*f,y=u*h,A=u*f;t[0]=m+A*l,t[4]=y*l-g,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-l,t[2]=g*l-y,t[6]=A+m*l,t[10]=a*c}else if(e.order==="ZXY"){const m=c*h,g=c*f,y=u*h,A=u*f;t[0]=m-A*l,t[4]=-a*f,t[8]=y+g*l,t[1]=g+y*l,t[5]=a*h,t[9]=A-m*l,t[2]=-a*u,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const m=a*h,g=a*f,y=l*h,A=l*f;t[0]=c*h,t[4]=y*u-g,t[8]=m*u+A,t[1]=c*f,t[5]=A*u+m,t[9]=g*u-y,t[2]=-u,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const m=a*c,g=a*u,y=l*c,A=l*u;t[0]=c*h,t[4]=A-m*f,t[8]=y*f+g,t[1]=f,t[5]=a*h,t[9]=-l*h,t[2]=-u*h,t[6]=g*f+y,t[10]=m-A*f}else if(e.order==="XZY"){const m=a*c,g=a*u,y=l*c,A=l*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=m*f+A,t[5]=a*h,t[9]=g*f-y,t[2]=y*f-g,t[6]=l*h,t[10]=A*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($l,e,Jl)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Mn.crossVectors(n,Pt),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Mn.crossVectors(n,Pt)),Mn.normalize(),ji.crossVectors(Pt,Mn),r[0]=Mn.x,r[4]=ji.x,r[8]=Pt.x,r[1]=Mn.y,r[5]=ji.y,r[9]=Pt.y,r[2]=Mn.z,r[6]=ji.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],c=n[8],u=n[12],h=n[1],f=n[5],m=n[9],g=n[13],y=n[2],A=n[6],_=n[10],p=n[14],C=n[3],b=n[7],R=n[11],W=n[15],F=r[0],L=r[4],k=r[8],he=r[12],x=r[1],T=r[5],Z=r[9],q=r[13],Q=r[2],re=r[6],Y=r[10],ne=r[14],K=r[3],pe=r[7],me=r[11],Ae=r[15];return s[0]=a*F+l*x+c*Q+u*K,s[4]=a*L+l*T+c*re+u*pe,s[8]=a*k+l*Z+c*Y+u*me,s[12]=a*he+l*q+c*ne+u*Ae,s[1]=h*F+f*x+m*Q+g*K,s[5]=h*L+f*T+m*re+g*pe,s[9]=h*k+f*Z+m*Y+g*me,s[13]=h*he+f*q+m*ne+g*Ae,s[2]=y*F+A*x+_*Q+p*K,s[6]=y*L+A*T+_*re+p*pe,s[10]=y*k+A*Z+_*Y+p*me,s[14]=y*he+A*q+_*ne+p*Ae,s[3]=C*F+b*x+R*Q+W*K,s[7]=C*L+b*T+R*re+W*pe,s[11]=C*k+b*Z+R*Y+W*me,s[15]=C*he+b*q+R*ne+W*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],h=e[2],f=e[6],m=e[10],g=e[14],y=e[3],A=e[7],_=e[11],p=e[15];return y*(+s*c*f-r*u*f-s*l*m+n*u*m+r*l*g-n*c*g)+A*(+t*c*g-t*u*m+s*a*m-r*a*g+r*u*h-s*c*h)+_*(+t*u*f-t*l*g-s*a*f+n*a*g+s*l*h-n*u*h)+p*(-r*l*h-t*c*f+t*l*m+r*a*f-n*a*m+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],f=e[9],m=e[10],g=e[11],y=e[12],A=e[13],_=e[14],p=e[15],C=f*_*u-A*m*u+A*c*g-l*_*g-f*c*p+l*m*p,b=y*m*u-h*_*u-y*c*g+a*_*g+h*c*p-a*m*p,R=h*A*u-y*f*u+y*l*g-a*A*g-h*l*p+a*f*p,W=y*f*c-h*A*c-y*l*m+a*A*m+h*l*_-a*f*_,F=t*C+n*b+r*R+s*W;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/F;return e[0]=C*L,e[1]=(A*m*s-f*_*s-A*r*g+n*_*g+f*r*p-n*m*p)*L,e[2]=(l*_*s-A*c*s+A*r*u-n*_*u-l*r*p+n*c*p)*L,e[3]=(f*c*s-l*m*s-f*r*u+n*m*u+l*r*g-n*c*g)*L,e[4]=b*L,e[5]=(h*_*s-y*m*s+y*r*g-t*_*g-h*r*p+t*m*p)*L,e[6]=(y*c*s-a*_*s-y*r*u+t*_*u+a*r*p-t*c*p)*L,e[7]=(a*m*s-h*c*s+h*r*u-t*m*u-a*r*g+t*c*g)*L,e[8]=R*L,e[9]=(y*f*s-h*A*s-y*n*g+t*A*g+h*n*p-t*f*p)*L,e[10]=(a*A*s-y*l*s+y*n*u-t*A*u-a*n*p+t*l*p)*L,e[11]=(h*l*s-a*f*s-h*n*u+t*f*u+a*n*g-t*l*g)*L,e[12]=W*L,e[13]=(h*A*r-y*f*r+y*n*m-t*A*m-h*n*_+t*f*_)*L,e[14]=(y*l*r-a*A*r-y*n*c+t*A*c+a*n*_-t*l*_)*L,e[15]=(a*f*r-h*l*r+h*n*c-t*f*c-a*n*m+t*l*m)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,c=e.z,u=s*a,h=s*l;return this.set(u*a+n,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+n,h*c-r*a,0,u*c-r*l,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,l=t._z,c=t._w,u=s+s,h=a+a,f=l+l,m=s*u,g=s*h,y=s*f,A=a*h,_=a*f,p=l*f,C=c*u,b=c*h,R=c*f,W=n.x,F=n.y,L=n.z;return r[0]=(1-(A+p))*W,r[1]=(g+R)*W,r[2]=(y-b)*W,r[3]=0,r[4]=(g-R)*F,r[5]=(1-(m+p))*F,r[6]=(_+C)*F,r[7]=0,r[8]=(y+b)*L,r[9]=(_-C)*L,r[10]=(1-(m+A))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=$n.set(r[0],r[1],r[2]).length();const a=$n.set(r[4],r[5],r[6]).length(),l=$n.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);const u=1/s,h=1/a,f=1/l;return Ht.elements[0]*=u,Ht.elements[1]*=u,Ht.elements[2]*=u,Ht.elements[4]*=h,Ht.elements[5]*=h,Ht.elements[6]*=h,Ht.elements[8]*=f,Ht.elements[9]*=f,Ht.elements[10]*=f,t.setFromRotationMatrix(Ht),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,a,l=dn){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r);let g,y;if(l===dn)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(l===Ar)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=dn){const c=this.elements,u=1/(t-e),h=1/(n-r),f=1/(a-s),m=(t+e)*u,g=(n+r)*h;let y,A;if(l===dn)y=(a+s)*f,A=-2*f;else if(l===Ar)y=s*f,A=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=A,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new X,Ht=new pt,$l=new X(0,0,0),Jl=new X(1,1,1),Mn=new X,ji=new X,Pt=new X,Ea=new pt,ya=new Di;class mn{constructor(e=0,t=0,n=0,r=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],h=r[9],f=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ea.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ea,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ya.setFromEuler(this),this.setFromQuaternion(ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class To{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jl=0;const Ta=new X,Jn=new Di,nn=new pt,Qi=new X,bi=new X,Ql=new X,ec=new Di,Aa=new X(1,0,0),ba=new X(0,1,0),wa=new X(0,0,1),Ra={type:"added"},tc={type:"removed"},jn={type:"childadded",child:null},Wr={type:"childremoved",child:null};class Ut extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new X,t=new mn,n=new Di,r=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new ke}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(Aa,e)}rotateY(e){return this.rotateOnAxis(ba,e)}rotateZ(e){return this.rotateOnAxis(wa,e)}translateOnAxis(e,t){return Ta.copy(e).applyQuaternion(this.quaternion),this.position.add(Ta.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Aa,e)}translateY(e){return this.translateOnAxis(ba,e)}translateZ(e){return this.translateOnAxis(wa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qi.copy(e):Qi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(bi,Qi,this.up):nn.lookAt(Qi,bi,this.up),this.quaternion.setFromRotationMatrix(nn),r&&(nn.extractRotation(r.matrixWorld),Jn.setFromRotationMatrix(nn),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ra),jn.child=e,this.dispatchEvent(jn),jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tc),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ra),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,Ql),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,ec,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),m=a(e.skeletons),g=a(e.animations),y=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=r,n;function a(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new X(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new X,rn=new X,Xr=new X,sn=new X,Qn=new X,ei=new X,Ca=new X,qr=new X,Yr=new X,Zr=new X,Kr=new ht,$r=new ht,Jr=new ht;class Xt{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Gt.subVectors(r,t),rn.subVectors(n,t),Xr.subVectors(e,t);const a=Gt.dot(Gt),l=Gt.dot(rn),c=Gt.dot(Xr),u=rn.dot(rn),h=rn.dot(Xr),f=a*u-l*l;if(f===0)return s.set(0,0,0),null;const m=1/f,g=(u*c-l*h)*m,y=(a*h-l*c)*m;return s.set(1-g-y,y,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,n,r,s,a,l,c){return this.getBarycoord(e,t,n,r,sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,sn.x),c.addScaledVector(a,sn.y),c.addScaledVector(l,sn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Kr.setScalar(0),$r.setScalar(0),Jr.setScalar(0),Kr.fromBufferAttribute(e,t),$r.fromBufferAttribute(e,n),Jr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kr,s.x),a.addScaledVector($r,s.y),a.addScaledVector(Jr,s.z),a}static isFrontFacing(e,t,n,r){return Gt.subVectors(n,t),rn.subVectors(e,t),Gt.cross(rn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Gt.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,l;Qn.subVectors(r,n),ei.subVectors(s,n),qr.subVectors(e,n);const c=Qn.dot(qr),u=ei.dot(qr);if(c<=0&&u<=0)return t.copy(n);Yr.subVectors(e,r);const h=Qn.dot(Yr),f=ei.dot(Yr);if(h>=0&&f<=h)return t.copy(r);const m=c*f-h*u;if(m<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Qn,a);Zr.subVectors(e,s);const g=Qn.dot(Zr),y=ei.dot(Zr);if(y>=0&&g<=y)return t.copy(s);const A=g*u-c*y;if(A<=0&&u>=0&&y<=0)return l=u/(u-y),t.copy(n).addScaledVector(ei,l);const _=h*y-g*f;if(_<=0&&f-h>=0&&g-y>=0)return Ca.subVectors(s,r),l=(f-h)/(f-h+(g-y)),t.copy(r).addScaledVector(Ca,l);const p=1/(_+A+m);return a=A*p,l=m*p,t.copy(n).addScaledVector(Qn,a).addScaledVector(ei,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},er={h:0,s:0,l:0};function jr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=nt.workingColorSpace){if(e=Ol(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=jr(a,s,e+1/3),this.g=jr(a,s,e),this.b=jr(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Ao[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return nt.fromWorkingColorSpace(Et.copy(this),e),Math.round(bt(Et.r*255,0,255))*65536+Math.round(bt(Et.g*255,0,255))*256+Math.round(bt(Et.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let c,u;const h=(l+a)/2;if(l===a)c=0,u=0;else{const f=a-l;switch(u=h<=.5?f/(a+l):f/(2-a-l),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Yt){nt.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(er);const n=Ir(En.h,er.h,t),r=Ir(En.s,er.s,t),s=Ir(En.l,er.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new it;it.NAMES=Ao;let nc=0;class Cr extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=oi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hs,this.blendDst=fs,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hs&&(n.blendSrc=this.blendSrc),this.blendDst!==fs&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bo extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=ic();function ic(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const u=c-127;u<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;!(u&8388608);)u<<=1,h-=8388608;u&=-8388609,h+=947912704,s[c]=u|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:l}}function rc(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=bt(i,-65504,65504),un.floatView[0]=i;const e=un.uint32View[0],t=e>>23&511;return un.baseTable[t]+((e&8388607)>>un.shiftTable[t])}function sc(i){const e=i>>10;return un.uint32View[0]=un.mantissaTable[un.offsetTable[e]+(i&1023)]+un.exponentTable[e],un.floatView[0]}const Pa={toHalfFloat:rc,fromHalfFloat:sc},dt=new X,tr=new st;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_a,this.updateRanges=[],this.gpuType=Nt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_a&&(e.usage=this.usage),e}}class wo extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ro extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zn extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ac=0;const Dt=new pt,Qr=new Ut,ti=new X,Lt=new Ii,wi=new Ii,gt=new X;class kn extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mo(e)?Ro:wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new la);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];wi.setFromBufferAttribute(l),this.morphTargetsRelative?(gt.addVectors(Lt.min,wi.min),Lt.expandByPoint(gt),gt.addVectors(Lt.max,wi.max),Lt.expandByPoint(gt)):(Lt.expandByPoint(wi.min),Lt.expandByPoint(wi.max))}Lt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)gt.fromBufferAttribute(l,u),c&&(ti.fromBufferAttribute(e,u),gt.add(ti)),r=Math.max(r,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let k=0;k<n.count;k++)l[k]=new X,c[k]=new X;const u=new X,h=new X,f=new X,m=new st,g=new st,y=new st,A=new X,_=new X;function p(k,he,x){u.fromBufferAttribute(n,k),h.fromBufferAttribute(n,he),f.fromBufferAttribute(n,x),m.fromBufferAttribute(s,k),g.fromBufferAttribute(s,he),y.fromBufferAttribute(s,x),h.sub(u),f.sub(u),g.sub(m),y.sub(m);const T=1/(g.x*y.y-y.x*g.y);isFinite(T)&&(A.copy(h).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(T),_.copy(f).multiplyScalar(g.x).addScaledVector(h,-y.x).multiplyScalar(T),l[k].add(A),l[he].add(A),l[x].add(A),c[k].add(_),c[he].add(_),c[x].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let k=0,he=C.length;k<he;++k){const x=C[k],T=x.start,Z=x.count;for(let q=T,Q=T+Z;q<Q;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new X,R=new X,W=new X,F=new X;function L(k){W.fromBufferAttribute(r,k),F.copy(W);const he=l[k];b.copy(he),b.sub(W.multiplyScalar(W.dot(he))).normalize(),R.crossVectors(F,he);const T=R.dot(c[k])<0?-1:1;a.setXYZW(k,b.x,b.y,b.z,T)}for(let k=0,he=C.length;k<he;++k){const x=C[k],T=x.start,Z=x.count;for(let q=T,Q=T+Z;q<Q;q+=3)L(e.getX(q+0)),L(e.getX(q+1)),L(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const r=new X,s=new X,a=new X,l=new X,c=new X,u=new X,h=new X,f=new X;if(e)for(let m=0,g=e.count;m<g;m+=3){const y=e.getX(m+0),A=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,A),a.fromBufferAttribute(t,_),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,_),l.add(h),c.add(h),u.add(h),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,f=l.normalized,m=new u.constructor(c.length*h);let g=0,y=0;for(let A=0,_=c.length;A<_;A++){l.isInterleavedBufferAttribute?g=c[A]*l.data.stride+l.offset:g=c[A]*h;for(let p=0;p<h;p++)m[y++]=u[g++]}return new $t(m,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,n);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,f=u.length;h<f;h++){const m=u[h],g=e(m,n);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,m=u.length;f<m;f++){const g=u[f];h.push(g.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let m=0,g=f.length;m<g;m++)h.push(f[m].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const La=new pt,Ln=new Kl,nr=new la,Ua=new X,ir=new X,rr=new X,sr=new X,es=new X,ar=new X,Da=new X,or=new X;class Kt extends Ut{constructor(e=new kn,t=new bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){ar.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],f=s[c];h!==0&&(es.fromBufferAttribute(f,e),a?ar.addScaledVector(es,h):ar.addScaledVector(es.sub(t),h))}t.add(ar)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),Ln.copy(e.ray).recast(e.near),!(nr.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(nr,Ua)===null||Ln.origin.distanceToSquared(Ua)>(e.far-e.near)**2))&&(La.copy(s).invert(),Ln.copy(e.ray).applyMatrix4(La),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ln)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,m=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(a))for(let y=0,A=m.length;y<A;y++){const _=m[y],p=a[_.materialIndex],C=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let R=C,W=b;R<W;R+=3){const F=l.getX(R),L=l.getX(R+1),k=l.getX(R+2);r=lr(this,p,e,n,u,h,f,F,L,k),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let _=y,p=A;_<p;_+=3){const C=l.getX(_),b=l.getX(_+1),R=l.getX(_+2);r=lr(this,a,e,n,u,h,f,C,b,R),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,A=m.length;y<A;y++){const _=m[y],p=a[_.materialIndex],C=Math.max(_.start,g.start),b=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let R=C,W=b;R<W;R+=3){const F=R,L=R+1,k=R+2;r=lr(this,p,e,n,u,h,f,F,L,k),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,g.start),A=Math.min(c.count,g.start+g.count);for(let _=y,p=A;_<p;_+=3){const C=_,b=_+1,R=_+2;r=lr(this,a,e,n,u,h,f,C,b,R),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function oc(i,e,t,n,r,s,a,l){let c;if(e.side===Ct?c=n.intersectTriangle(a,s,r,!0,l):c=n.intersectTriangle(r,s,a,e.side===Rn,l),c===null)return null;or.copy(l),or.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(or);return u<t.near||u>t.far?null:{distance:u,point:or.clone(),object:i}}function lr(i,e,t,n,r,s,a,l,c,u){i.getVertexPosition(l,ir),i.getVertexPosition(c,rr),i.getVertexPosition(u,sr);const h=oc(i,e,t,n,ir,rr,sr,Da);if(h){const f=new X;Xt.getBarycoord(Da,ir,rr,sr,f),r&&(h.uv=Xt.getInterpolatedAttribute(r,l,c,u,f,new st)),s&&(h.uv1=Xt.getInterpolatedAttribute(s,l,c,u,f,new st)),a&&(h.normal=Xt.getInterpolatedAttribute(a,l,c,u,f,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const m={a:l,b:c,c:u,normal:new X,materialIndex:0};Xt.getNormal(ir,rr,sr,m.normal),h.face=m,h.barycoord=f}return h}class Ni extends kn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],f=[];let m=0,g=0;y("z","y","x",-1,-1,n,t,e,a,s,0),y("z","y","x",1,-1,n,t,-e,a,s,1),y("x","z","y",1,1,e,n,t,r,a,2),y("x","z","y",1,-1,e,n,-t,r,a,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new zn(u,3)),this.setAttribute("normal",new zn(h,3)),this.setAttribute("uv",new zn(f,2));function y(A,_,p,C,b,R,W,F,L,k,he){const x=R/L,T=W/k,Z=R/2,q=W/2,Q=F/2,re=L+1,Y=k+1;let ne=0,K=0;const pe=new X;for(let me=0;me<Y;me++){const Ae=me*T-q;for(let Fe=0;Fe<re;Fe++){const ze=Fe*x-Z;pe[A]=ze*C,pe[_]=Ae*b,pe[p]=Q,u.push(pe.x,pe.y,pe.z),pe[A]=0,pe[_]=0,pe[p]=F>0?1:-1,h.push(pe.x,pe.y,pe.z),f.push(Fe/L),f.push(1-me/k),ne+=1}}for(let me=0;me<k;me++)for(let Ae=0;Ae<L;Ae++){const Fe=m+Ae+re*me,ze=m+Ae+re*(me+1),$=m+(Ae+1)+re*(me+1),ae=m+(Ae+1)+re*me;c.push(Fe,ze,ae),c.push(ze,$,ae),K+=6}l.addGroup(g,K,he),g+=K,m+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=mi(i[t]);for(const r in n)e[r]=n[r]}return e}function lc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Co(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const cc={clone:mi,merge:At};var uc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uc,this.fragmentShader=hc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=lc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Po extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yn=new X,Ia=new st,Na=new st;class Wt extends Po{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yn.x,yn.y).multiplyScalar(-e/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yn.x,yn.y).multiplyScalar(-e/yn.z)}getViewSize(e,t){return this.getViewBounds(e,Ia,Na),t.subVectors(Na,Ia)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class fc extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(ni,ii,e,t);r.layers=this.layers,this.add(r);const s=new Wt(ni,ii,e,t);s.layers=this.layers,this.add(s);const a=new Wt(ni,ii,e,t);a.layers=this.layers,this.add(a);const l=new Wt(ni,ii,e,t);l.layers=this.layers,this.add(l);const c=new Wt(ni,ii,e,t);c.layers=this.layers,this.add(c);const u=new Wt(ni,ii,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,c]=t;for(const u of t)this.remove(u);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,h]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,m,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Lo extends Tt{constructor(e,t,n,r,s,a,l,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:hi,super(e,t,n,r,s,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dc extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Lo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ni(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:bn});s.uniforms.tEquirect.value=t;const a=new Kt(r,s),l=t.minFilter;return t.minFilter===An&&(t.minFilter=yt),new fc(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ts=new X,pc=new X,mc=new ke;class Nn{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ts.subVectors(n,t).cross(pc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ts),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mc.getNormalMatrix(e),r=this.coplanarPoint(ts).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new la,cr=new X;class Uo{constructor(e=new Nn,t=new Nn,n=new Nn,r=new Nn,s=new Nn,a=new Nn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn){const n=this.planes,r=e.elements,s=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],m=r[7],g=r[8],y=r[9],A=r[10],_=r[11],p=r[12],C=r[13],b=r[14],R=r[15];if(n[0].setComponents(c-s,m-u,_-g,R-p).normalize(),n[1].setComponents(c+s,m+u,_+g,R+p).normalize(),n[2].setComponents(c+a,m+h,_+y,R+C).normalize(),n[3].setComponents(c-a,m-h,_-y,R-C).normalize(),n[4].setComponents(c-l,m-f,_-A,R-b).normalize(),t===dn)n[5].setComponents(c+l,m+f,_+A,R+b).normalize();else if(t===Ar)n[5].setComponents(l,f,A,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(cr.x=r.normal.x>0?e.max.x:e.min.x,cr.y=r.normal.y>0?e.max.y:e.min.y,cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Do(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function _c(i){const e=new WeakMap;function t(l,c){const u=l.array,h=l.usage,f=u.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,u,h),l.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function n(l,c,u){const h=c.array,f=c.updateRanges;if(i.bindBuffer(u,l),f.length===0)i.bufferSubData(u,0,h);else{f.sort((g,y)=>g.start-y.start);let m=0;for(let g=1;g<f.length;g++){const y=f[m],A=f[g];A.start<=y.start+y.count+1?y.count=Math.max(y.count,A.start+A.count-y.start):(++m,f[m]=A)}f.length=m+1;for(let g=0,y=f.length;g<y;g++){const A=f[g];i.bufferSubData(u,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}class Fi extends kn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(n),c=Math.floor(r),u=l+1,h=c+1,f=e/l,m=t/c,g=[],y=[],A=[],_=[];for(let p=0;p<h;p++){const C=p*m-a;for(let b=0;b<u;b++){const R=b*f-s;y.push(R,-C,0),A.push(0,0,1),_.push(b/l),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let C=0;C<l;C++){const b=C+u*p,R=C+u*(p+1),W=C+1+u*(p+1),F=C+1+u*p;g.push(b,R,F),g.push(R,W,F)}this.setIndex(g),this.setAttribute("position",new zn(y,3)),this.setAttribute("normal",new zn(A,3)),this.setAttribute("uv",new zn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var gc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ec=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ac=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$c=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ru=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ou=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_u=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Su=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Du=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ku=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ku=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,th=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ih=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ah=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ch=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Th=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ah=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ch=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ph=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ih=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Oh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:gc,alphahash_pars_fragment:vc,alphamap_fragment:xc,alphamap_pars_fragment:Sc,alphatest_fragment:Mc,alphatest_pars_fragment:Ec,aomap_fragment:yc,aomap_pars_fragment:Tc,batching_pars_vertex:Ac,batching_vertex:bc,begin_vertex:wc,beginnormal_vertex:Rc,bsdfs:Cc,iridescence_fragment:Pc,bumpmap_pars_fragment:Lc,clipping_planes_fragment:Uc,clipping_planes_pars_fragment:Dc,clipping_planes_pars_vertex:Ic,clipping_planes_vertex:Nc,color_fragment:Fc,color_pars_fragment:Oc,color_pars_vertex:Bc,color_vertex:zc,common:Hc,cube_uv_reflection_fragment:Gc,defaultnormal_vertex:kc,displacementmap_pars_vertex:Vc,displacementmap_vertex:Wc,emissivemap_fragment:Xc,emissivemap_pars_fragment:qc,colorspace_fragment:Yc,colorspace_pars_fragment:Zc,envmap_fragment:Kc,envmap_common_pars_fragment:$c,envmap_pars_fragment:Jc,envmap_pars_vertex:jc,envmap_physical_pars_fragment:cu,envmap_vertex:Qc,fog_vertex:eu,fog_pars_vertex:tu,fog_fragment:nu,fog_pars_fragment:iu,gradientmap_pars_fragment:ru,lightmap_pars_fragment:su,lights_lambert_fragment:au,lights_lambert_pars_fragment:ou,lights_pars_begin:lu,lights_toon_fragment:uu,lights_toon_pars_fragment:hu,lights_phong_fragment:fu,lights_phong_pars_fragment:du,lights_physical_fragment:pu,lights_physical_pars_fragment:mu,lights_fragment_begin:_u,lights_fragment_maps:gu,lights_fragment_end:vu,logdepthbuf_fragment:xu,logdepthbuf_pars_fragment:Su,logdepthbuf_pars_vertex:Mu,logdepthbuf_vertex:Eu,map_fragment:yu,map_pars_fragment:Tu,map_particle_fragment:Au,map_particle_pars_fragment:bu,metalnessmap_fragment:wu,metalnessmap_pars_fragment:Ru,morphinstance_vertex:Cu,morphcolor_vertex:Pu,morphnormal_vertex:Lu,morphtarget_pars_vertex:Uu,morphtarget_vertex:Du,normal_fragment_begin:Iu,normal_fragment_maps:Nu,normal_pars_fragment:Fu,normal_pars_vertex:Ou,normal_vertex:Bu,normalmap_pars_fragment:zu,clearcoat_normal_fragment_begin:Hu,clearcoat_normal_fragment_maps:Gu,clearcoat_pars_fragment:ku,iridescence_pars_fragment:Vu,opaque_fragment:Wu,packing:Xu,premultiplied_alpha_fragment:qu,project_vertex:Yu,dithering_fragment:Zu,dithering_pars_fragment:Ku,roughnessmap_fragment:$u,roughnessmap_pars_fragment:Ju,shadowmap_pars_fragment:ju,shadowmap_pars_vertex:Qu,shadowmap_vertex:eh,shadowmask_pars_fragment:th,skinbase_vertex:nh,skinning_pars_vertex:ih,skinning_vertex:rh,skinnormal_vertex:sh,specularmap_fragment:ah,specularmap_pars_fragment:oh,tonemapping_fragment:lh,tonemapping_pars_fragment:ch,transmission_fragment:uh,transmission_pars_fragment:hh,uv_pars_fragment:fh,uv_pars_vertex:dh,uv_vertex:ph,worldpos_vertex:mh,background_vert:_h,background_frag:gh,backgroundCube_vert:vh,backgroundCube_frag:xh,cube_vert:Sh,cube_frag:Mh,depth_vert:Eh,depth_frag:yh,distanceRGBA_vert:Th,distanceRGBA_frag:Ah,equirect_vert:bh,equirect_frag:wh,linedashed_vert:Rh,linedashed_frag:Ch,meshbasic_vert:Ph,meshbasic_frag:Lh,meshlambert_vert:Uh,meshlambert_frag:Dh,meshmatcap_vert:Ih,meshmatcap_frag:Nh,meshnormal_vert:Fh,meshnormal_frag:Oh,meshphong_vert:Bh,meshphong_frag:zh,meshphysical_vert:Hh,meshphysical_frag:Gh,meshtoon_vert:kh,meshtoon_frag:Vh,points_vert:Wh,points_frag:Xh,shadow_vert:qh,shadow_frag:Yh,sprite_vert:Zh,sprite_frag:Kh},ge={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Zt={basic:{uniforms:At([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:At([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:At([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:At([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:At([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new it(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:At([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:At([ge.points,ge.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:At([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:At([ge.common,ge.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:At([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:At([ge.sprite,ge.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:At([ge.common,ge.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:At([ge.lights,ge.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Zt.physical={uniforms:At([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ur={r:0,b:0,g:0},Dn=new mn,$h=new pt;function Jh(i,e,t,n,r,s,a){const l=new it(0);let c=s===!0?0:1,u,h,f=null,m=0,g=null;function y(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function A(C){let b=!1;const R=y(C);R===null?p(l,c):R&&R.isColor&&(p(R,1),b=!0);const W=i.xr.getEnvironmentBlendMode();W==="additive"?n.buffers.color.setClear(0,0,0,1,a):W==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(C,b){const R=y(b);R&&(R.isCubeTexture||R.mapping===wr)?(h===void 0&&(h=new Kt(new Ni(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:mi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(W,F,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Dn.copy(b.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($h.makeRotationFromEuler(Dn)),h.material.toneMapped=nt.getTransfer(R.colorSpace)!==at,(f!==R||m!==R.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,f=R,m=R.version,g=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new Kt(new Fi(2,2),new _n({name:"BackgroundMaterial",uniforms:mi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=nt.getTransfer(R.colorSpace)!==at,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||m!==R.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,f=R,m=R.version,g=i.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null))}function p(C,b){C.getRGB(ur,Co(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,b,a)}return{getClearColor:function(){return l},setClearColor:function(C,b=1){l.set(C),c=b,p(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,p(l,c)},render:A,addToRenderList:_}}function jh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,a=!1;function l(x,T,Z,q,Q){let re=!1;const Y=f(q,Z,T);s!==Y&&(s=Y,u(s.object)),re=g(x,q,Z,Q),re&&y(x,q,Z,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,R(x,T,Z,q),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return i.createVertexArray()}function u(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function f(x,T,Z){const q=Z.wireframe===!0;let Q=n[x.id];Q===void 0&&(Q={},n[x.id]=Q);let re=Q[T.id];re===void 0&&(re={},Q[T.id]=re);let Y=re[q];return Y===void 0&&(Y=m(c()),re[q]=Y),Y}function m(x){const T=[],Z=[],q=[];for(let Q=0;Q<t;Q++)T[Q]=0,Z[Q]=0,q[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:Z,attributeDivisors:q,object:x,attributes:{},index:null}}function g(x,T,Z,q){const Q=s.attributes,re=T.attributes;let Y=0;const ne=Z.getAttributes();for(const K in ne)if(ne[K].location>=0){const me=Q[K];let Ae=re[K];if(Ae===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(Ae=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(Ae=x.instanceColor)),me===void 0||me.attribute!==Ae||Ae&&me.data!==Ae.data)return!0;Y++}return s.attributesNum!==Y||s.index!==q}function y(x,T,Z,q){const Q={},re=T.attributes;let Y=0;const ne=Z.getAttributes();for(const K in ne)if(ne[K].location>=0){let me=re[K];me===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(me=x.instanceColor));const Ae={};Ae.attribute=me,me&&me.data&&(Ae.data=me.data),Q[K]=Ae,Y++}s.attributes=Q,s.attributesNum=Y,s.index=q}function A(){const x=s.newAttributes;for(let T=0,Z=x.length;T<Z;T++)x[T]=0}function _(x){p(x,0)}function p(x,T){const Z=s.newAttributes,q=s.enabledAttributes,Q=s.attributeDivisors;Z[x]=1,q[x]===0&&(i.enableVertexAttribArray(x),q[x]=1),Q[x]!==T&&(i.vertexAttribDivisor(x,T),Q[x]=T)}function C(){const x=s.newAttributes,T=s.enabledAttributes;for(let Z=0,q=T.length;Z<q;Z++)T[Z]!==x[Z]&&(i.disableVertexAttribArray(Z),T[Z]=0)}function b(x,T,Z,q,Q,re,Y){Y===!0?i.vertexAttribIPointer(x,T,Z,Q,re):i.vertexAttribPointer(x,T,Z,q,Q,re)}function R(x,T,Z,q){A();const Q=q.attributes,re=Z.getAttributes(),Y=T.defaultAttributeValues;for(const ne in re){const K=re[ne];if(K.location>=0){let pe=Q[ne];if(pe===void 0&&(ne==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),ne==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),pe!==void 0){const me=pe.normalized,Ae=pe.itemSize,Fe=e.get(pe);if(Fe===void 0)continue;const ze=Fe.buffer,$=Fe.type,ae=Fe.bytesPerElement,ue=$===i.INT||$===i.UNSIGNED_INT||pe.gpuType===ea;if(pe.isInterleavedBufferAttribute){const _e=pe.data,Pe=_e.stride,Le=pe.offset;if(_e.isInstancedInterleavedBuffer){for(let Xe=0;Xe<K.locationSize;Xe++)p(K.location+Xe,_e.meshPerAttribute);x.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Xe=0;Xe<K.locationSize;Xe++)_(K.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Xe=0;Xe<K.locationSize;Xe++)b(K.location+Xe,Ae/K.locationSize,$,me,Pe*ae,(Le+Ae/K.locationSize*Xe)*ae,ue)}else{if(pe.isInstancedBufferAttribute){for(let _e=0;_e<K.locationSize;_e++)p(K.location+_e,pe.meshPerAttribute);x.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let _e=0;_e<K.locationSize;_e++)_(K.location+_e);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let _e=0;_e<K.locationSize;_e++)b(K.location+_e,Ae/K.locationSize,$,me,Ae*ae,Ae/K.locationSize*_e*ae,ue)}}else if(Y!==void 0){const me=Y[ne];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(K.location,me);break;case 3:i.vertexAttrib3fv(K.location,me);break;case 4:i.vertexAttrib4fv(K.location,me);break;default:i.vertexAttrib1fv(K.location,me)}}}}C()}function W(){k();for(const x in n){const T=n[x];for(const Z in T){const q=T[Z];for(const Q in q)h(q[Q].object),delete q[Q];delete T[Z]}delete n[x]}}function F(x){if(n[x.id]===void 0)return;const T=n[x.id];for(const Z in T){const q=T[Z];for(const Q in q)h(q[Q].object),delete q[Q];delete T[Z]}delete n[x.id]}function L(x){for(const T in n){const Z=n[T];if(Z[x.id]===void 0)continue;const q=Z[x.id];for(const Q in q)h(q[Q].object),delete q[Q];delete Z[x.id]}}function k(){he(),a=!0,s!==r&&(s=r,u(s.object))}function he(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:k,resetDefaultState:he,dispose:W,releaseStatesOfGeometry:F,releaseStatesOfProgram:L,initAttributes:A,enableAttribute:_,disableUnusedAttributes:C}}function Qh(i,e,t){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),t.update(h,n,1)}function a(u,h,f){f!==0&&(i.drawArraysInstanced(n,u,h,f),t.update(h,n,f))}function l(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,f);let g=0;for(let y=0;y<f;y++)g+=h[y];t.update(g,n,1)}function c(u,h,f,m){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<u.length;y++)a(u[y],h[y],m[y]);else{g.multiDrawArraysInstancedWEBGL(n,u,0,h,0,m,0,f);let y=0;for(let A=0;A<f;A++)y+=h[A];for(let A=0;A<m.length;A++)t.update(y,n,m[A])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function ef(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Ft&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(L){const k=L===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==pn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Nt&&!k)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(m===!0){const L=e.get("EXT_clip_control");L.clipControlEXT(L.LOWER_LEFT_EXT,L.ZERO_TO_ONE_EXT)}const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),W=y>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:y,maxTextureSize:A,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:C,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:W,maxSamples:F}}function tf(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Nn,l=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const g=f.length!==0||m||n!==0||r;return r=m,n=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,m){t=h(f,m,0)},this.setState=function(f,m,g){const y=f.clippingPlanes,A=f.clipIntersection,_=f.clipShadows,p=i.get(f);if(!r||y===null||y.length===0||s&&!_)s?h(null):u();else{const C=s?0:n,b=C*4;let R=p.clippingState||null;c.value=R,R=h(y,m,b,g);for(let W=0;W!==b;++W)R[W]=t[W];p.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,m,g,y){const A=f!==null?f.length:0;let _=null;if(A!==0){if(_=c.value,y!==!0||_===null){const p=g+A*4,C=m.matrixWorldInverse;l.getNormalMatrix(C),(_===null||_.length<p)&&(_=new Float32Array(p));for(let b=0,R=g;b!==A;++b,R+=4)a.copy(f[b]).applyMatrix4(C,l),a.normal.toArray(_,R),_[R+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,_}}function nf(i){let e=new WeakMap;function t(a,l){return l===Ss?a.mapping=hi:l===Ms&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===Ss||l===Ms)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new dc(c.height);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Io extends Po{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=4,Fa=[.125,.215,.35,.446,.526,.582],Bn=20,ns=new Io,Oa=new it;let is=null,rs=0,ss=0,as=!1;const Fn=(1+Math.sqrt(5))/2,ri=1/Fn,Ba=[new X(-Fn,ri,0),new X(Fn,ri,0),new X(-ri,0,Fn),new X(ri,0,Fn),new X(0,Fn,-ri),new X(0,Fn,ri),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){is=this._renderer.getRenderTarget(),rs=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),as=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ga(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(is,rs,ss),this._renderer.xr.enabled=as,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),is=this._renderer.getRenderTarget(),rs=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),as=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:fn,format:Ft,colorSpace:Jt,depthBuffer:!1},r=Ha(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ha(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rf(s)),this._blurMaterial=sf(s,e,t)}return r}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,ns)}_sceneToCubeUV(e,t,n,r){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(Oa),h.toneMapping=wn,h.autoClear=!1;const g=new bo({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),y=new Kt(new Ni,g);let A=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,A=!0):(g.color.copy(Oa),A=!0);for(let p=0;p<6;p++){const C=p%3;C===0?(l.up.set(0,c[p],0),l.lookAt(u[p],0,0)):C===1?(l.up.set(0,0,c[p]),l.lookAt(0,u[p],0)):(l.up.set(0,c[p],0),l.lookAt(0,0,u[p]));const b=this._cubeSize;hr(r,C*b,p>2?b:0,b,b),h.setRenderTarget(r),A&&h.render(y,l),h.render(e,l)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===hi||e.mapping===fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ga());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;hr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Ba[(r-s-1)%Ba.length];this._blur(e,s-1,s,a,l)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Kt(this._lodPlanes[r],u),m=u.uniforms,g=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Bn-1),A=s/y,_=isFinite(s)?1+Math.floor(h*A):Bn;_>Bn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Bn}`);const p=[];let C=0;for(let L=0;L<Bn;++L){const k=L/A,he=Math.exp(-k*k/2);p.push(he),L===0?C+=he:L<_&&(C+=2*he)}for(let L=0;L<p.length;L++)p[L]=p[L]/C;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=p,m.latitudinal.value=a==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:b}=this;m.dTheta.value=y,m.mipInt.value=b-n;const R=this._sizeLods[r],W=3*R*(r>b-si?r-b+si:0),F=4*(this._cubeSize-R);hr(t,W,F,3*R,2*R),c.setRenderTarget(t),c.render(f,ns)}}function rf(i){const e=[],t=[],n=[];let r=i;const s=i-si+1+Fa.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);t.push(l);let c=1/l;a>i-si?c=Fa[a-i+si-1]:a===0&&(c=0),n.push(c);const u=1/(l-2),h=-u,f=1+u,m=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,y=6,A=3,_=2,p=1,C=new Float32Array(A*y*g),b=new Float32Array(_*y*g),R=new Float32Array(p*y*g);for(let F=0;F<g;F++){const L=F%3*2/3-1,k=F>2?0:-1,he=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];C.set(he,A*y*F),b.set(m,_*y*F);const x=[F,F,F,F,F,F];R.set(x,p*y*F)}const W=new kn;W.setAttribute("position",new $t(C,A)),W.setAttribute("uv",new $t(b,_)),W.setAttribute("faceIndex",new $t(R,p)),e.push(W),r>si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ha(i,e,t){const n=new Gn(i,e,t);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function sf(i,e,t){const n=new Float32Array(Bn),r=new X(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ga(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ka(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function af(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===Ss||c===Ms,h=c===hi||c===fi;if(u||h){let f=e.get(l);const m=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return t===null&&(t=new za(i)),f=u?t.fromEquirectangular(l,f):t.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),f.texture;if(f!==void 0)return f.texture;{const g=l.image;return u&&g&&g.height>0||h&&g&&r(g)?(t===null&&(t=new za(i)),f=u?t.fromEquirectangular(l):t.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),l.addEventListener("dispose",s),f.texture):null}}}return l}function r(l){let c=0;const u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function of(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Sr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function lf(i,e,t,n){const r={},s=new WeakMap;function a(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const A=m.morphAttributes[y];for(let _=0,p=A.length;_<p;_++)e.remove(A[_])}m.removeEventListener("dispose",a),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(f,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function c(f){const m=f.attributes;for(const y in m)e.update(m[y],i.ARRAY_BUFFER);const g=f.morphAttributes;for(const y in g){const A=g[y];for(let _=0,p=A.length;_<p;_++)e.update(A[_],i.ARRAY_BUFFER)}}function u(f){const m=[],g=f.index,y=f.attributes.position;let A=0;if(g!==null){const C=g.array;A=g.version;for(let b=0,R=C.length;b<R;b+=3){const W=C[b+0],F=C[b+1],L=C[b+2];m.push(W,F,F,L,L,W)}}else if(y!==void 0){const C=y.array;A=y.version;for(let b=0,R=C.length/3-1;b<R;b+=3){const W=b+0,F=b+1,L=b+2;m.push(W,F,F,L,L,W)}}else return;const _=new(Mo(m)?Ro:wo)(m,1);_.version=A;const p=s.get(f);p&&e.remove(p),s.set(f,_)}function h(f){const m=s.get(f);if(m){const g=f.index;g!==null&&m.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function cf(i,e,t){let n;function r(m){n=m}let s,a;function l(m){s=m.type,a=m.bytesPerElement}function c(m,g){i.drawElements(n,g,s,m*a),t.update(g,n,1)}function u(m,g,y){y!==0&&(i.drawElementsInstanced(n,g,s,m*a,y),t.update(g,n,y))}function h(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,y);let _=0;for(let p=0;p<y;p++)_+=g[p];t.update(_,n,1)}function f(m,g,y,A){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<m.length;p++)u(m[p]/a,g[p],A[p]);else{_.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,A,0,y);let p=0;for(let C=0;C<y;C++)p+=g[C];for(let C=0;C<A.length;C++)t.update(p,n,A[C])}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function uf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function hf(i,e,t){const n=new WeakMap,r=new ht;function s(a,l,c){const u=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0;let m=n.get(l);if(m===void 0||m.count!==f){let x=function(){k.dispose(),n.delete(l),l.removeEventListener("dispose",x)};var g=x;m!==void 0&&m.texture.dispose();const y=l.morphAttributes.position!==void 0,A=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],C=l.morphAttributes.normal||[],b=l.morphAttributes.color||[];let R=0;y===!0&&(R=1),A===!0&&(R=2),_===!0&&(R=3);let W=l.attributes.position.count*R,F=1;W>e.maxTextureSize&&(F=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const L=new Float32Array(W*F*4*f),k=new yo(L,W,F,f);k.type=Nt,k.needsUpdate=!0;const he=R*4;for(let T=0;T<f;T++){const Z=p[T],q=C[T],Q=b[T],re=W*F*4*T;for(let Y=0;Y<Z.count;Y++){const ne=Y*he;y===!0&&(r.fromBufferAttribute(Z,Y),L[re+ne+0]=r.x,L[re+ne+1]=r.y,L[re+ne+2]=r.z,L[re+ne+3]=0),A===!0&&(r.fromBufferAttribute(q,Y),L[re+ne+4]=r.x,L[re+ne+5]=r.y,L[re+ne+6]=r.z,L[re+ne+7]=0),_===!0&&(r.fromBufferAttribute(Q,Y),L[re+ne+8]=r.x,L[re+ne+9]=r.y,L[re+ne+10]=r.z,L[re+ne+11]=Q.itemSize===4?r.w:1)}}m={count:f,texture:k,size:new st(W,F)},n.set(l,m),l.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let y=0;for(let _=0;_<u.length;_++)y+=u[_];const A=l.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",A),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function ff(i,e,t,n){let r=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return f}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class No extends Tt{constructor(e,t,n,r,s,a,l,c,u,h=li){if(h!==li&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===li&&(n=Hn),n===void 0&&h===pi&&(n=di),super(null,r,s,a,l,c,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Rt,this.minFilter=c!==void 0?c:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fo=new Tt,Va=new No(1,1),Oo=new yo,Bo=new Yl,zo=new Lo,Wa=[],Xa=[],qa=new Float32Array(16),Ya=new Float32Array(9),Za=new Float32Array(4);function vi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Wa[r];if(s===void 0&&(s=new Float32Array(r),Wa[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pr(i,e){let t=Xa[e];t===void 0&&(t=new Int32Array(e),Xa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function df(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function gf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;Za.set(n),i.uniformMatrix2fv(this.addr,!1,Za),_t(t,n)}}function vf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;Ya.set(n),i.uniformMatrix3fv(this.addr,!1,Ya),_t(t,n)}}function xf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;qa.set(n),i.uniformMatrix4fv(this.addr,!1,qa),_t(t,n)}}function Sf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function Tf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function Rf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Va.compareFunction=So,s=Va):s=Fo,t.setTexture2D(e||s,r)}function Cf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Bo,r)}function Pf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||zo,r)}function Lf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Oo,r)}function Uf(i){switch(i){case 5126:return df;case 35664:return pf;case 35665:return mf;case 35666:return _f;case 35674:return gf;case 35675:return vf;case 35676:return xf;case 5124:case 35670:return Sf;case 35667:case 35671:return Mf;case 35668:case 35672:return Ef;case 35669:case 35673:return yf;case 5125:return Tf;case 36294:return Af;case 36295:return bf;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Lf}}function Df(i,e){i.uniform1fv(this.addr,e)}function If(i,e){const t=vi(e,this.size,2);i.uniform2fv(this.addr,t)}function Nf(i,e){const t=vi(e,this.size,3);i.uniform3fv(this.addr,t)}function Ff(i,e){const t=vi(e,this.size,4);i.uniform4fv(this.addr,t)}function Of(i,e){const t=vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bf(i,e){const t=vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zf(i,e){const t=vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hf(i,e){i.uniform1iv(this.addr,e)}function Gf(i,e){i.uniform2iv(this.addr,e)}function kf(i,e){i.uniform3iv(this.addr,e)}function Vf(i,e){i.uniform4iv(this.addr,e)}function Wf(i,e){i.uniform1uiv(this.addr,e)}function Xf(i,e){i.uniform2uiv(this.addr,e)}function qf(i,e){i.uniform3uiv(this.addr,e)}function Yf(i,e){i.uniform4uiv(this.addr,e)}function Zf(i,e,t){const n=this.cache,r=e.length,s=Pr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Fo,s[a])}function Kf(i,e,t){const n=this.cache,r=e.length,s=Pr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Bo,s[a])}function $f(i,e,t){const n=this.cache,r=e.length,s=Pr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||zo,s[a])}function Jf(i,e,t){const n=this.cache,r=e.length,s=Pr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Oo,s[a])}function jf(i){switch(i){case 5126:return Df;case 35664:return If;case 35665:return Nf;case 35666:return Ff;case 35674:return Of;case 35675:return Bf;case 35676:return zf;case 5124:case 35670:return Hf;case 35667:case 35671:return Gf;case 35668:case 35672:return kf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return Xf;case 36295:return qf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Zf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return Jf}}class Qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uf(t.type)}}class ed{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jf(t.type)}}class td{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const os=/(\w+)(\])?(\[|\.)?/g;function Ka(i,e){i.seq.push(e),i.map[e.id]=e}function nd(i,e,t){const n=i.name,r=n.length;for(os.lastIndex=0;;){const s=os.exec(n),a=os.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){Ka(t,u===void 0?new Qf(l,i,e):new ed(l,i,e));break}else{let f=t.map[l];f===void 0&&(f=new td(l),Ka(t,f)),t=f}}}class Mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);nd(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function $a(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const id=37297;let rd=0;function sd(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}function ad(i){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(i);let n;switch(e===t?n="":e===Tr&&t===yr?n="LinearDisplayP3ToLinearSRGB":e===yr&&t===Tr&&(n="LinearSRGBToLinearDisplayP3"),i){case Jt:case Rr:return[n,"LinearTransferOETF"];case Yt:case oa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ja(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sd(i.getShaderSource(e),a)}else return r}function od(i,e){const t=ad(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ld(i,e){let t;switch(e){case vl:t="Linear";break;case xl:t="Reinhard";break;case Sl:t="Cineon";break;case Ml:t="ACESFilmic";break;case yl:t="AgX";break;case Tl:t="Neutral";break;case El:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fr=new X;function cd(){nt.getLuminanceCoefficients(fr);const i=fr.x.toFixed(4),e=fr.y.toFixed(4),t=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ud(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function hd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fd(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function Ri(i){return i!==""}function ja(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Js(i){return i.replace(dd,md)}const pd=new Map;function md(i,e){let t=Ge[e];if(t===void 0){const n=pd.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Js(t)}const _d=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eo(i){return i.replace(_d,gd)}function gd(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function to(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(e="SHADOWMAP_TYPE_VSM"),e}function xd(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hi:case fi:e="ENVMAP_TYPE_CUBE";break;case wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function Md(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lo:e="ENVMAP_BLENDING_MULTIPLY";break;case _l:e="ENVMAP_BLENDING_MIX";break;case gl:e="ENVMAP_BLENDING_ADD";break}return e}function Ed(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function yd(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=vd(t),u=xd(t),h=Sd(t),f=Md(t),m=Ed(t),g=ud(t),y=hd(s),A=r.createProgram();let _,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ri).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ri).join(`
`),p.length>0&&(p+=`
`)):(_=[to(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),p=[to(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==wn?ld("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,od("linearToOutputTexel",t.outputColorSpace),cd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),a=Js(a),a=ja(a,t),a=Qa(a,t),l=Js(l),l=ja(l,t),l=Qa(l,t),a=eo(a),l=eo(l),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=C+_+a,R=C+p+l,W=$a(r,r.VERTEX_SHADER,b),F=$a(r,r.FRAGMENT_SHADER,R);r.attachShader(A,W),r.attachShader(A,F),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function L(T){if(i.debug.checkShaderErrors){const Z=r.getProgramInfoLog(A).trim(),q=r.getShaderInfoLog(W).trim(),Q=r.getShaderInfoLog(F).trim();let re=!0,Y=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,W,F);else{const ne=Ja(r,W,"vertex"),K=Ja(r,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+Z+`
`+ne+`
`+K)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(q===""||Q==="")&&(Y=!1);Y&&(T.diagnostics={runnable:re,programLog:Z,vertexShader:{log:q,prefix:_},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(W),r.deleteShader(F),k=new Mr(r,A),he=fd(r,A)}let k;this.getUniforms=function(){return k===void 0&&L(this),k};let he;this.getAttributes=function(){return he===void 0&&L(this),he};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(A,id)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rd++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=W,this.fragmentShader=F,this}let Td=0;class Ad{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bd(e),t.set(e,n)),n}}class bd{constructor(e){this.id=Td++,this.code=e,this.usedTimes=0}}function wd(i,e,t,n,r,s,a){const l=new To,c=new Ad,u=new Set,h=[],f=r.logarithmicDepthBuffer,m=r.reverseDepthBuffer,g=r.vertexTextures;let y=r.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return u.add(x),x===0?"uv":`uv${x}`}function p(x,T,Z,q,Q){const re=q.fog,Y=Q.geometry,ne=x.isMeshStandardMaterial?q.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||ne),pe=K&&K.mapping===wr?K.image.height:null,me=A[x.type];x.precision!==null&&(y=r.getMaxPrecision(x.precision),y!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));const Ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Fe=Ae!==void 0?Ae.length:0;let ze=0;Y.morphAttributes.position!==void 0&&(ze=1),Y.morphAttributes.normal!==void 0&&(ze=2),Y.morphAttributes.color!==void 0&&(ze=3);let $,ae,ue,_e;if(me){const St=Zt[me];$=St.vertexShader,ae=St.fragmentShader}else $=x.vertexShader,ae=x.fragmentShader,c.update(x),ue=c.getVertexShaderID(x),_e=c.getFragmentShaderID(x);const Pe=i.getRenderTarget(),Le=Q.isInstancedMesh===!0,Xe=Q.isBatchedMesh===!0,je=!!x.map,We=!!x.matcap,D=!!K,vt=!!x.aoMap,qe=!!x.lightMap,Qe=!!x.bumpMap,De=!!x.normalMap,rt=!!x.displacementMap,Ne=!!x.emissiveMap,w=!!x.metalnessMap,M=!!x.roughnessMap,z=x.anisotropy>0,ee=x.clearcoat>0,oe=x.dispersion>0,j=x.iridescence>0,Re=x.sheen>0,ve=x.transmission>0,Ee=z&&!!x.anisotropyMap,Ye=ee&&!!x.clearcoatMap,fe=ee&&!!x.clearcoatNormalMap,Te=ee&&!!x.clearcoatRoughnessMap,Ie=j&&!!x.iridescenceMap,Ce=j&&!!x.iridescenceThicknessMap,de=Re&&!!x.sheenColorMap,Ze=Re&&!!x.sheenRoughnessMap,Ue=!!x.specularMap,He=!!x.specularColorMap,I=!!x.specularIntensityMap,Se=ve&&!!x.transmissionMap,N=ve&&!!x.thicknessMap,te=!!x.gradientMap,xe=!!x.alphaMap,Me=x.alphaTest>0,$e=!!x.alphaHash,lt=!!x.extensions;let xt=wn;x.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(xt=i.toneMapping);const et={shaderID:me,shaderType:x.type,shaderName:x.name,vertexShader:$,fragmentShader:ae,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:Xe,batchingColor:Xe&&Q._colorsTexture!==null,instancing:Le,instancingColor:Le&&Q.instanceColor!==null,instancingMorph:Le&&Q.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Jt,alphaToCoverage:!!x.alphaToCoverage,map:je,matcap:We,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:pe,aoMap:vt,lightMap:qe,bumpMap:Qe,normalMap:De,displacementMap:g&&rt,emissiveMap:Ne,normalMapObjectSpace:De&&x.normalMapType===Cl,normalMapTangentSpace:De&&x.normalMapType===Rl,metalnessMap:w,roughnessMap:M,anisotropy:z,anisotropyMap:Ee,clearcoat:ee,clearcoatMap:Ye,clearcoatNormalMap:fe,clearcoatRoughnessMap:Te,dispersion:oe,iridescence:j,iridescenceMap:Ie,iridescenceThicknessMap:Ce,sheen:Re,sheenColorMap:de,sheenRoughnessMap:Ze,specularMap:Ue,specularColorMap:He,specularIntensityMap:I,transmission:ve,transmissionMap:Se,thicknessMap:N,gradientMap:te,opaque:x.transparent===!1&&x.blending===oi&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:Me,alphaHash:$e,combine:x.combine,mapUv:je&&_(x.map.channel),aoMapUv:vt&&_(x.aoMap.channel),lightMapUv:qe&&_(x.lightMap.channel),bumpMapUv:Qe&&_(x.bumpMap.channel),normalMapUv:De&&_(x.normalMap.channel),displacementMapUv:rt&&_(x.displacementMap.channel),emissiveMapUv:Ne&&_(x.emissiveMap.channel),metalnessMapUv:w&&_(x.metalnessMap.channel),roughnessMapUv:M&&_(x.roughnessMap.channel),anisotropyMapUv:Ee&&_(x.anisotropyMap.channel),clearcoatMapUv:Ye&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&_(x.sheenRoughnessMap.channel),specularMapUv:Ue&&_(x.specularMap.channel),specularColorMapUv:He&&_(x.specularColorMap.channel),specularIntensityMapUv:I&&_(x.specularIntensityMap.channel),transmissionMapUv:Se&&_(x.transmissionMap.channel),thicknessMapUv:N&&_(x.thicknessMap.channel),alphaMapUv:xe&&_(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(De||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!Y.attributes.uv&&(je||xe),fog:!!re,useFog:x.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:m,skinning:Q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:ze,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:je&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Ct,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:lt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&x.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return et.vertexUv1s=u.has(1),et.vertexUv2s=u.has(2),et.vertexUv3s=u.has(3),u.clear(),et}function C(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Z in x.defines)T.push(Z),T.push(x.defines[Z]);return x.isRawShaderMaterial===!1&&(b(T,x),R(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function b(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function R(x,T){l.disableAll(),T.supportsVertexTextures&&l.enable(0),T.instancing&&l.enable(1),T.instancingColor&&l.enable(2),T.instancingMorph&&l.enable(3),T.matcap&&l.enable(4),T.envMap&&l.enable(5),T.normalMapObjectSpace&&l.enable(6),T.normalMapTangentSpace&&l.enable(7),T.clearcoat&&l.enable(8),T.iridescence&&l.enable(9),T.alphaTest&&l.enable(10),T.vertexColors&&l.enable(11),T.vertexAlphas&&l.enable(12),T.vertexUv1s&&l.enable(13),T.vertexUv2s&&l.enable(14),T.vertexUv3s&&l.enable(15),T.vertexTangents&&l.enable(16),T.anisotropy&&l.enable(17),T.alphaHash&&l.enable(18),T.batching&&l.enable(19),T.dispersion&&l.enable(20),T.batchingColor&&l.enable(21),x.push(l.mask),l.disableAll(),T.fog&&l.enable(0),T.useFog&&l.enable(1),T.flatShading&&l.enable(2),T.logarithmicDepthBuffer&&l.enable(3),T.reverseDepthBuffer&&l.enable(4),T.skinning&&l.enable(5),T.morphTargets&&l.enable(6),T.morphNormals&&l.enable(7),T.morphColors&&l.enable(8),T.premultipliedAlpha&&l.enable(9),T.shadowMapEnabled&&l.enable(10),T.doubleSided&&l.enable(11),T.flipSided&&l.enable(12),T.useDepthPacking&&l.enable(13),T.dithering&&l.enable(14),T.transmission&&l.enable(15),T.sheen&&l.enable(16),T.opaque&&l.enable(17),T.pointsUvs&&l.enable(18),T.decodeVideoTexture&&l.enable(19),T.alphaToCoverage&&l.enable(20),x.push(l.mask)}function W(x){const T=A[x.type];let Z;if(T){const q=Zt[T];Z=cc.clone(q.uniforms)}else Z=x.uniforms;return Z}function F(x,T){let Z;for(let q=0,Q=h.length;q<Q;q++){const re=h[q];if(re.cacheKey===T){Z=re,++Z.usedTimes;break}}return Z===void 0&&(Z=new yd(i,T,x,s),h.push(Z)),Z}function L(x){if(--x.usedTimes===0){const T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),x.destroy()}}function k(x){c.remove(x)}function he(){c.dispose()}return{getParameters:p,getProgramCacheKey:C,getUniforms:W,acquireProgram:F,releaseProgram:L,releaseShaderCache:k,programs:h,dispose:he}}function Rd(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,c){i.get(a)[l]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Cd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function no(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function io(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,m,g,y,A,_){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:m,material:g,groupOrder:y,renderOrder:f.renderOrder,z:A,group:_},i[e]=p):(p.id=f.id,p.object=f,p.geometry=m,p.material=g,p.groupOrder=y,p.renderOrder=f.renderOrder,p.z=A,p.group=_),e++,p}function l(f,m,g,y,A,_){const p=a(f,m,g,y,A,_);g.transmission>0?n.push(p):g.transparent===!0?r.push(p):t.push(p)}function c(f,m,g,y,A,_){const p=a(f,m,g,y,A,_);g.transmission>0?n.unshift(p):g.transparent===!0?r.unshift(p):t.unshift(p)}function u(f,m){t.length>1&&t.sort(f||Cd),n.length>1&&n.sort(m||no),r.length>1&&r.sort(m||no)}function h(){for(let f=e,m=i.length;f<m;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function Pd(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new io,i.set(n,[a])):r>=s.length?(a=new io,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ld(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new it};break;case"SpotLight":t={position:new X,direction:new X,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function Ud(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Dd=0;function Id(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nd(i){const e=new Ld,t=Ud(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new X);const r=new X,s=new pt,a=new pt;function l(u){let h=0,f=0,m=0;for(let he=0;he<9;he++)n.probe[he].set(0,0,0);let g=0,y=0,A=0,_=0,p=0,C=0,b=0,R=0,W=0,F=0,L=0;u.sort(Id);for(let he=0,x=u.length;he<x;he++){const T=u[he],Z=T.color,q=T.intensity,Q=T.distance,re=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=Z.r*q,f+=Z.g*q,m+=Z.b*q;else if(T.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(T.sh.coefficients[Y],q);L++}else if(T.isDirectionalLight){const Y=e.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const ne=T.shadow,K=t.get(T);K.shadowIntensity=ne.intensity,K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=T.shadow.matrix,C++}n.directional[g]=Y,g++}else if(T.isSpotLight){const Y=e.get(T);Y.position.setFromMatrixPosition(T.matrixWorld),Y.color.copy(Z).multiplyScalar(q),Y.distance=Q,Y.coneCos=Math.cos(T.angle),Y.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Y.decay=T.decay,n.spot[A]=Y;const ne=T.shadow;if(T.map&&(n.spotLightMap[W]=T.map,W++,ne.updateMatrices(T),T.castShadow&&F++),n.spotLightMatrix[A]=ne.matrix,T.castShadow){const K=t.get(T);K.shadowIntensity=ne.intensity,K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,n.spotShadow[A]=K,n.spotShadowMap[A]=re,R++}A++}else if(T.isRectAreaLight){const Y=e.get(T);Y.color.copy(Z).multiplyScalar(q),Y.halfWidth.set(T.width*.5,0,0),Y.halfHeight.set(0,T.height*.5,0),n.rectArea[_]=Y,_++}else if(T.isPointLight){const Y=e.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),Y.distance=T.distance,Y.decay=T.decay,T.castShadow){const ne=T.shadow,K=t.get(T);K.shadowIntensity=ne.intensity,K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,K.shadowCameraNear=ne.camera.near,K.shadowCameraFar=ne.camera.far,n.pointShadow[y]=K,n.pointShadowMap[y]=re,n.pointShadowMatrix[y]=T.shadow.matrix,b++}n.point[y]=Y,y++}else if(T.isHemisphereLight){const Y=e.get(T);Y.skyColor.copy(T.color).multiplyScalar(q),Y.groundColor.copy(T.groundColor).multiplyScalar(q),n.hemi[p]=Y,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=m;const k=n.hash;(k.directionalLength!==g||k.pointLength!==y||k.spotLength!==A||k.rectAreaLength!==_||k.hemiLength!==p||k.numDirectionalShadows!==C||k.numPointShadows!==b||k.numSpotShadows!==R||k.numSpotMaps!==W||k.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=A,n.rectArea.length=_,n.point.length=y,n.hemi.length=p,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=R+W-F,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=L,k.directionalLength=g,k.pointLength=y,k.spotLength=A,k.rectAreaLength=_,k.hemiLength=p,k.numDirectionalShadows=C,k.numPointShadows=b,k.numSpotShadows=R,k.numSpotMaps=W,k.numLightProbes=L,n.version=Dd++)}function c(u,h){let f=0,m=0,g=0,y=0,A=0;const _=h.matrixWorldInverse;for(let p=0,C=u.length;p<C;p++){const b=u[p];if(b.isDirectionalLight){const R=n.directional[f];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),f++}else if(b.isSpotLight){const R=n.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const R=n.rectArea[y];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(_),a.identity(),s.copy(b.matrixWorld),s.premultiply(_),a.extractRotation(s),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const R=n.point[m];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const R=n.hemi[A];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(_),A++}}}return{setup:l,setupView:c,state:n}}function ro(i){const e=new Nd(i),t=[],n=[];function r(h){u.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function l(){e.setup(t)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function Fd(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new ro(i),e.set(r,[l])):s>=a.length?(l=new ro(i),a.push(l)):l=a[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class Od extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bd extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gd(i,e,t){let n=new Uo;const r=new st,s=new st,a=new ht,l=new Od({depthPacking:wl}),c=new Bd,u={},h=t.maxTextureSize,f={[Rn]:Ct,[Ct]:Rn,[ln]:ln},m=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:zd,fragmentShader:Hd}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new kn;y.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Kt(y,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let p=this.type;this.render=function(F,L,k){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||F.length===0)return;const he=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(bn),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const q=p!==on&&this.type===on,Q=p===on&&this.type!==on;for(let re=0,Y=F.length;re<Y;re++){const ne=F[re],K=ne.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const pe=K.getFrameExtents();if(r.multiply(pe),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/pe.x),r.x=s.x*pe.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/pe.y),r.y=s.y*pe.y,K.mapSize.y=s.y)),K.map===null||q===!0||Q===!0){const Ae=this.type!==on?{minFilter:Rt,magFilter:Rt}:{};K.map!==null&&K.map.dispose(),K.map=new Gn(r.x,r.y,Ae),K.map.texture.name=ne.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const me=K.getViewportCount();for(let Ae=0;Ae<me;Ae++){const Fe=K.getViewport(Ae);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),Z.viewport(a),K.updateMatrices(ne,Ae),n=K.getFrustum(),R(L,k,K.camera,ne,this.type)}K.isPointLightShadow!==!0&&this.type===on&&C(K,k),K.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(he,x,T)};function C(F,L){const k=e.update(A);m.defines.VSM_SAMPLES!==F.blurSamples&&(m.defines.VSM_SAMPLES=F.blurSamples,g.defines.VSM_SAMPLES=F.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Gn(r.x,r.y)),m.uniforms.shadow_pass.value=F.map.texture,m.uniforms.resolution.value=F.mapSize,m.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(L,null,k,m,A,null),g.uniforms.shadow_pass.value=F.mapPass.texture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(L,null,k,g,A,null)}function b(F,L,k,he){let x=null;const T=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(T!==void 0)x=T;else if(x=k.isPointLight===!0?c:l,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Z=x.uuid,q=L.uuid;let Q=u[Z];Q===void 0&&(Q={},u[Z]=Q);let re=Q[q];re===void 0&&(re=x.clone(),Q[q]=re,L.addEventListener("dispose",W)),x=re}if(x.visible=L.visible,x.wireframe=L.wireframe,he===on?x.side=L.shadowSide!==null?L.shadowSide:L.side:x.side=L.shadowSide!==null?L.shadowSide:f[L.side],x.alphaMap=L.alphaMap,x.alphaTest=L.alphaTest,x.map=L.map,x.clipShadows=L.clipShadows,x.clippingPlanes=L.clippingPlanes,x.clipIntersection=L.clipIntersection,x.displacementMap=L.displacementMap,x.displacementScale=L.displacementScale,x.displacementBias=L.displacementBias,x.wireframeLinewidth=L.wireframeLinewidth,x.linewidth=L.linewidth,k.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Z=i.properties.get(x);Z.light=k}return x}function R(F,L,k,he,x){if(F.visible===!1)return;if(F.layers.test(L.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&x===on)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const q=e.update(F),Q=F.material;if(Array.isArray(Q)){const re=q.groups;for(let Y=0,ne=re.length;Y<ne;Y++){const K=re[Y],pe=Q[K.materialIndex];if(pe&&pe.visible){const me=b(F,pe,he,x);F.onBeforeShadow(i,F,L,k,q,me,K),i.renderBufferDirect(k,null,q,me,F,K),F.onAfterShadow(i,F,L,k,q,me,K)}}}else if(Q.visible){const re=b(F,Q,he,x);F.onBeforeShadow(i,F,L,k,q,re,null),i.renderBufferDirect(k,null,q,re,F,null),F.onAfterShadow(i,F,L,k,q,re,null)}}const Z=F.children;for(let q=0,Q=Z.length;q<Q;q++)R(Z[q],L,k,he,x)}function W(F){F.target.removeEventListener("dispose",W);for(const k in u){const he=u[k],x=F.target.uuid;x in he&&(he[x].dispose(),delete he[x])}}}const kd={[ds]:ps,[ms]:vs,[_s]:xs,[ui]:gs,[ps]:ds,[vs]:ms,[xs]:_s,[gs]:ui};function Vd(i){function e(){let I=!1;const Se=new ht;let N=null;const te=new ht(0,0,0,0);return{setMask:function(xe){N!==xe&&!I&&(i.colorMask(xe,xe,xe,xe),N=xe)},setLocked:function(xe){I=xe},setClear:function(xe,Me,$e,lt,xt){xt===!0&&(xe*=lt,Me*=lt,$e*=lt),Se.set(xe,Me,$e,lt),te.equals(Se)===!1&&(i.clearColor(xe,Me,$e,lt),te.copy(Se))},reset:function(){I=!1,N=null,te.set(-1,0,0,0)}}}function t(){let I=!1,Se=!1,N=null,te=null,xe=null;return{setReversed:function(Me){Se=Me},setTest:function(Me){Me?ue(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(Me){N!==Me&&!I&&(i.depthMask(Me),N=Me)},setFunc:function(Me){if(Se&&(Me=kd[Me]),te!==Me){switch(Me){case ds:i.depthFunc(i.NEVER);break;case ps:i.depthFunc(i.ALWAYS);break;case ms:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case _s:i.depthFunc(i.EQUAL);break;case gs:i.depthFunc(i.GEQUAL);break;case vs:i.depthFunc(i.GREATER);break;case xs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=Me}},setLocked:function(Me){I=Me},setClear:function(Me){xe!==Me&&(i.clearDepth(Me),xe=Me)},reset:function(){I=!1,N=null,te=null,xe=null}}}function n(){let I=!1,Se=null,N=null,te=null,xe=null,Me=null,$e=null,lt=null,xt=null;return{setTest:function(et){I||(et?ue(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(et){Se!==et&&!I&&(i.stencilMask(et),Se=et)},setFunc:function(et,St,Ot){(N!==et||te!==St||xe!==Ot)&&(i.stencilFunc(et,St,Ot),N=et,te=St,xe=Ot)},setOp:function(et,St,Ot){(Me!==et||$e!==St||lt!==Ot)&&(i.stencilOp(et,St,Ot),Me=et,$e=St,lt=Ot)},setLocked:function(et){I=et},setClear:function(et){xt!==et&&(i.clearStencil(et),xt=et)},reset:function(){I=!1,Se=null,N=null,te=null,xe=null,Me=null,$e=null,lt=null,xt=null}}}const r=new e,s=new t,a=new n,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,m=[],g=null,y=!1,A=null,_=null,p=null,C=null,b=null,R=null,W=null,F=new it(0,0,0),L=0,k=!1,he=null,x=null,T=null,Z=null,q=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Y=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ne)[1]),re=Y>=1):ne.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),re=Y>=2);let K=null,pe={};const me=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Fe=new ht().fromArray(me),ze=new ht().fromArray(Ae);function $(I,Se,N,te){const xe=new Uint8Array(4),Me=i.createTexture();i.bindTexture(I,Me),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<N;$e++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(Se+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Me}const ae={};ae[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ue(i.DEPTH_TEST),s.setFunc(ui),qe(!1),Qe(ha),ue(i.CULL_FACE),D(bn);function ue(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function _e(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Pe(I,Se){return h[I]!==Se?(i.bindFramebuffer(I,Se),h[I]=Se,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Se),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Le(I,Se){let N=m,te=!1;if(I){N=f.get(Se),N===void 0&&(N=[],f.set(Se,N));const xe=I.textures;if(N.length!==xe.length||N[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,$e=xe.length;Me<$e;Me++)N[Me]=i.COLOR_ATTACHMENT0+Me;N.length=xe.length,te=!0}}else N[0]!==i.BACK&&(N[0]=i.BACK,te=!0);te&&i.drawBuffers(N)}function Xe(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const je={[On]:i.FUNC_ADD,[Qo]:i.FUNC_SUBTRACT,[el]:i.FUNC_REVERSE_SUBTRACT};je[tl]=i.MIN,je[nl]=i.MAX;const We={[il]:i.ZERO,[rl]:i.ONE,[sl]:i.SRC_COLOR,[hs]:i.SRC_ALPHA,[hl]:i.SRC_ALPHA_SATURATE,[cl]:i.DST_COLOR,[ol]:i.DST_ALPHA,[al]:i.ONE_MINUS_SRC_COLOR,[fs]:i.ONE_MINUS_SRC_ALPHA,[ul]:i.ONE_MINUS_DST_COLOR,[ll]:i.ONE_MINUS_DST_ALPHA,[fl]:i.CONSTANT_COLOR,[dl]:i.ONE_MINUS_CONSTANT_COLOR,[pl]:i.CONSTANT_ALPHA,[ml]:i.ONE_MINUS_CONSTANT_ALPHA};function D(I,Se,N,te,xe,Me,$e,lt,xt,et){if(I===bn){y===!0&&(_e(i.BLEND),y=!1);return}if(y===!1&&(ue(i.BLEND),y=!0),I!==jo){if(I!==A||et!==k){if((_!==On||b!==On)&&(i.blendEquation(i.FUNC_ADD),_=On,b=On),et)switch(I){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fa:i.blendFunc(i.ONE,i.ONE);break;case da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,C=null,R=null,W=null,F.set(0,0,0),L=0,A=I,k=et}return}xe=xe||Se,Me=Me||N,$e=$e||te,(Se!==_||xe!==b)&&(i.blendEquationSeparate(je[Se],je[xe]),_=Se,b=xe),(N!==p||te!==C||Me!==R||$e!==W)&&(i.blendFuncSeparate(We[N],We[te],We[Me],We[$e]),p=N,C=te,R=Me,W=$e),(lt.equals(F)===!1||xt!==L)&&(i.blendColor(lt.r,lt.g,lt.b,xt),F.copy(lt),L=xt),A=I,k=!1}function vt(I,Se){I.side===ln?_e(i.CULL_FACE):ue(i.CULL_FACE);let N=I.side===Ct;Se&&(N=!N),qe(N),I.blending===oi&&I.transparent===!1?D(bn):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const te=I.stencilWrite;a.setTest(te),te&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(I){he!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),he=I)}function Qe(I){I!==Ko?(ue(i.CULL_FACE),I!==x&&(I===ha?i.cullFace(i.BACK):I===$o?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),x=I}function De(I){I!==T&&(re&&i.lineWidth(I),T=I)}function rt(I,Se,N){I?(ue(i.POLYGON_OFFSET_FILL),(Z!==Se||q!==N)&&(i.polygonOffset(Se,N),Z=Se,q=N)):_e(i.POLYGON_OFFSET_FILL)}function Ne(I){I?ue(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function w(I){I===void 0&&(I=i.TEXTURE0+Q-1),K!==I&&(i.activeTexture(I),K=I)}function M(I,Se,N){N===void 0&&(K===null?N=i.TEXTURE0+Q-1:N=K);let te=pe[N];te===void 0&&(te={type:void 0,texture:void 0},pe[N]=te),(te.type!==I||te.texture!==Se)&&(K!==N&&(i.activeTexture(N),K=N),i.bindTexture(I,Se||ae[I]),te.type=I,te.texture=Se)}function z(){const I=pe[K];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){Fe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Fe.copy(I))}function de(I){ze.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ze.copy(I))}function Ze(I,Se){let N=c.get(Se);N===void 0&&(N=new WeakMap,c.set(Se,N));let te=N.get(I);te===void 0&&(te=i.getUniformBlockIndex(Se,I.name),N.set(I,te))}function Ue(I,Se){const te=c.get(Se).get(I);l.get(Se)!==te&&(i.uniformBlockBinding(Se,te,I.__bindingPointIndex),l.set(Se,te))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,pe={},h={},f=new WeakMap,m=[],g=null,y=!1,A=null,_=null,p=null,C=null,b=null,R=null,W=null,F=new it(0,0,0),L=0,k=!1,he=null,x=null,T=null,Z=null,q=null,Fe.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ue,disable:_e,bindFramebuffer:Pe,drawBuffers:Le,useProgram:Xe,setBlending:D,setMaterial:vt,setFlipSided:qe,setCullFace:Qe,setLineWidth:De,setPolygonOffset:rt,setScissorTest:Ne,activeTexture:w,bindTexture:M,unbindTexture:z,compressedTexImage2D:ee,compressedTexImage3D:oe,texImage2D:Te,texImage3D:Ie,updateUBOMapping:Ze,uniformBlockBinding:Ue,texStorage2D:Ye,texStorage3D:fe,texSubImage2D:j,texSubImage3D:Re,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ee,scissor:Ce,viewport:de,reset:He}}function so(i,e,t,n){const r=Wd(n);switch(t){case po:return i*e;case _o:return i*e;case go:return i*e*2;case ia:return i*e/r.components*r.byteLength;case ra:return i*e/r.components*r.byteLength;case vo:return i*e*2/r.components*r.byteLength;case sa:return i*e*2/r.components*r.byteLength;case mo:return i*e*3/r.components*r.byteLength;case Ft:return i*e*4/r.components*r.byteLength;case aa:return i*e*4/r.components*r.byteLength;case mr:case _r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gr:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case As:case ws:return Math.max(i,16)*Math.max(e,8)/4;case Ts:case bs:return Math.max(i,8)*Math.max(e,8)/2;case Rs:case Cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Us:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ds:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Is:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ns:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Os:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ks:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ws:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xr:case Xs:case qs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xo:case Ys:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zs:case Ks:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wd(i){switch(i){case pn:case uo:return{byteLength:1,components:1};case Pi:case ho:case fn:return{byteLength:2,components:1};case ta:case na:return{byteLength:2,components:4};case Hn:case ea:case Nt:return{byteLength:4,components:1};case fo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xd(i,e,t,n,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new st,h=new WeakMap;let f;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,M){return g?new OffscreenCanvas(w,M):Li("canvas")}function A(w,M,z){let ee=1;const oe=Ne(w);if((oe.width>z||oe.height>z)&&(ee=z/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(ee*oe.width),Re=Math.floor(ee*oe.height);f===void 0&&(f=y(j,Re));const ve=M?y(j,Re):f;return ve.width=j,ve.height=Re,ve.getContext("2d").drawImage(w,0,0,j,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+j+"x"+Re+")."),ve}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),w;return w}function _(w){return w.generateMipmaps&&w.minFilter!==Rt&&w.minFilter!==yt}function p(w){i.generateMipmap(w)}function C(w,M,z,ee,oe=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=M;if(M===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),M===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){const Re=oe?Er:nt.getTransfer(ee);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=Re===at?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(w,M){let z;return w?M===null||M===Hn||M===di?z=i.DEPTH24_STENCIL8:M===Nt?z=i.DEPTH32F_STENCIL8:M===Pi&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hn||M===di?z=i.DEPTH_COMPONENT24:M===Nt?z=i.DEPTH_COMPONENT32F:M===Pi&&(z=i.DEPTH_COMPONENT16),z}function R(w,M){return _(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rt&&w.minFilter!==yt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function W(w){const M=w.target;M.removeEventListener("dispose",W),L(M),M.isVideoTexture&&h.delete(M)}function F(w){const M=w.target;M.removeEventListener("dispose",F),he(M)}function L(w){const M=n.get(w);if(M.__webglInit===void 0)return;const z=w.source,ee=m.get(z);if(ee){const oe=ee[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&k(w),Object.keys(ee).length===0&&m.delete(z)}n.remove(w)}function k(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const z=w.source,ee=m.get(z);delete ee[M.__cacheKey],a.memory.textures--}function he(w){const M=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let oe=0;oe<M.__webglFramebuffer[ee].length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[ee][oe]);else i.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[ee]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=w.textures;for(let ee=0,oe=z.length;ee<oe;ee++){const j=n.get(z[ee]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(z[ee])}n.remove(w)}let x=0;function T(){x=0}function Z(){const w=x;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),x+=1,w}function q(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function Q(w,M){const z=n.get(w);if(w.isVideoTexture&&De(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(z,w,M);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function re(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){ze(z,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function Y(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){ze(z,w,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function ne(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){$(z,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const K={[Es]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[ys]:i.MIRRORED_REPEAT},pe={[Rt]:i.NEAREST,[Al]:i.NEAREST_MIPMAP_NEAREST,[qi]:i.NEAREST_MIPMAP_LINEAR,[yt]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[An]:i.LINEAR_MIPMAP_LINEAR},me={[Pl]:i.NEVER,[Fl]:i.ALWAYS,[Ll]:i.LESS,[So]:i.LEQUAL,[Ul]:i.EQUAL,[Nl]:i.GEQUAL,[Dl]:i.GREATER,[Il]:i.NOTEQUAL};function Ae(w,M){if(M.type===Nt&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===yt||M.magFilter===Ur||M.magFilter===qi||M.magFilter===An||M.minFilter===yt||M.minFilter===Ur||M.minFilter===qi||M.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,K[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,K[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,K[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,pe[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Rt||M.minFilter!==qi&&M.minFilter!==An||M.type===Nt&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Fe(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",W));const ee=M.source;let oe=m.get(ee);oe===void 0&&(oe={},m.set(ee,oe));const j=q(M);if(j!==w.__cacheKey){oe[j]===void 0&&(oe[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),oe[j].usedTimes++;const Re=oe[w.__cacheKey];Re!==void 0&&(oe[w.__cacheKey].usedTimes--,Re.usedTimes===0&&k(M)),w.__cacheKey=j,w.__webglTexture=oe[j].texture}return z}function ze(w,M,z){let ee=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=i.TEXTURE_3D);const oe=Fe(w,M),j=M.source;t.bindTexture(ee,w.__webglTexture,i.TEXTURE0+z);const Re=n.get(j);if(j.version!==Re.__version||oe===!0){t.activeTexture(i.TEXTURE0+z);const ve=nt.getPrimaries(nt.workingColorSpace),Ee=M.colorSpace===cn?null:nt.getPrimaries(M.colorSpace),Ye=M.colorSpace===cn||ve===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let fe=A(M.image,!1,r.maxTextureSize);fe=rt(M,fe);const Te=s.convert(M.format,M.colorSpace),Ie=s.convert(M.type);let Ce=C(M.internalFormat,Te,Ie,M.colorSpace,M.isVideoTexture);Ae(ee,M);let de;const Ze=M.mipmaps,Ue=M.isVideoTexture!==!0,He=Re.__version===void 0||oe===!0,I=j.dataReady,Se=R(M,fe);if(M.isDepthTexture)Ce=b(M.format===pi,M.type),He&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,Te,Ie,null));else if(M.isDataTexture)if(Ze.length>0){Ue&&He&&t.texStorage2D(i.TEXTURE_2D,Se,Ce,Ze[0].width,Ze[0].height);for(let N=0,te=Ze.length;N<te;N++)de=Ze[N],Ue?I&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,de.width,de.height,Te,Ie,de.data):t.texImage2D(i.TEXTURE_2D,N,Ce,de.width,de.height,0,Te,Ie,de.data);M.generateMipmaps=!1}else Ue?(He&&t.texStorage2D(i.TEXTURE_2D,Se,Ce,fe.width,fe.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Te,Ie,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,Te,Ie,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ce,Ze[0].width,Ze[0].height,fe.depth);for(let N=0,te=Ze.length;N<te;N++)if(de=Ze[N],M.format!==Ft)if(Te!==null)if(Ue){if(I)if(M.layerUpdates.size>0){const xe=so(de.width,de.height,M.format,M.type);for(const Me of M.layerUpdates){const $e=de.data.subarray(Me*xe/de.data.BYTES_PER_ELEMENT,(Me+1)*xe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,Me,de.width,de.height,1,Te,$e,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,de.width,de.height,fe.depth,Te,de.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,N,Ce,de.width,de.height,fe.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,de.width,de.height,fe.depth,Te,Ie,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,N,Ce,de.width,de.height,fe.depth,0,Te,Ie,de.data)}else{Ue&&He&&t.texStorage2D(i.TEXTURE_2D,Se,Ce,Ze[0].width,Ze[0].height);for(let N=0,te=Ze.length;N<te;N++)de=Ze[N],M.format!==Ft?Te!==null?Ue?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,N,0,0,de.width,de.height,Te,de.data):t.compressedTexImage2D(i.TEXTURE_2D,N,Ce,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,de.width,de.height,Te,Ie,de.data):t.texImage2D(i.TEXTURE_2D,N,Ce,de.width,de.height,0,Te,Ie,de.data)}else if(M.isDataArrayTexture)if(Ue){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ce,fe.width,fe.height,fe.depth),I)if(M.layerUpdates.size>0){const N=so(fe.width,fe.height,M.format,M.type);for(const te of M.layerUpdates){const xe=fe.data.subarray(te*N/fe.data.BYTES_PER_ELEMENT,(te+1)*N/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,fe.width,fe.height,1,Te,Ie,xe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Te,Ie,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,Te,Ie,fe.data);else if(M.isData3DTexture)Ue?(He&&t.texStorage3D(i.TEXTURE_3D,Se,Ce,fe.width,fe.height,fe.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Te,Ie,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,Te,Ie,fe.data);else if(M.isFramebufferTexture){if(He)if(Ue)t.texStorage2D(i.TEXTURE_2D,Se,Ce,fe.width,fe.height);else{let N=fe.width,te=fe.height;for(let xe=0;xe<Se;xe++)t.texImage2D(i.TEXTURE_2D,xe,Ce,N,te,0,Te,Ie,null),N>>=1,te>>=1}}else if(Ze.length>0){if(Ue&&He){const N=Ne(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Se,Ce,N.width,N.height)}for(let N=0,te=Ze.length;N<te;N++)de=Ze[N],Ue?I&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,Te,Ie,de):t.texImage2D(i.TEXTURE_2D,N,Ce,Te,Ie,de);M.generateMipmaps=!1}else if(Ue){if(He){const N=Ne(fe);t.texStorage2D(i.TEXTURE_2D,Se,Ce,N.width,N.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Ie,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ce,Te,Ie,fe);_(M)&&p(ee),Re.__version=j.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function $(w,M,z){if(M.image.length!==6)return;const ee=Fe(w,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const j=n.get(oe);if(oe.version!==j.__version||ee===!0){t.activeTexture(i.TEXTURE0+z);const Re=nt.getPrimaries(nt.workingColorSpace),ve=M.colorSpace===cn?null:nt.getPrimaries(M.colorSpace),Ee=M.colorSpace===cn||Re===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ye=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let te=0;te<6;te++)!Ye&&!fe?Te[te]=A(M.image[te],!0,r.maxCubemapSize):Te[te]=fe?M.image[te].image:M.image[te],Te[te]=rt(M,Te[te]);const Ie=Te[0],Ce=s.convert(M.format,M.colorSpace),de=s.convert(M.type),Ze=C(M.internalFormat,Ce,de,M.colorSpace),Ue=M.isVideoTexture!==!0,He=j.__version===void 0||ee===!0,I=oe.dataReady;let Se=R(M,Ie);Ae(i.TEXTURE_CUBE_MAP,M);let N;if(Ye){Ue&&He&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ze,Ie.width,Ie.height);for(let te=0;te<6;te++){N=Te[te].mipmaps;for(let xe=0;xe<N.length;xe++){const Me=N[xe];M.format!==Ft?Ce!==null?Ue?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,Me.width,Me.height,Ce,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Ze,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,Me.width,Me.height,Ce,de,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Ze,Me.width,Me.height,0,Ce,de,Me.data)}}}else{if(N=M.mipmaps,Ue&&He){N.length>0&&Se++;const te=Ne(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ze,te.width,te.height)}for(let te=0;te<6;te++)if(fe){Ue?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Te[te].width,Te[te].height,Ce,de,Te[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ze,Te[te].width,Te[te].height,0,Ce,de,Te[te].data);for(let xe=0;xe<N.length;xe++){const $e=N[xe].image[te].image;Ue?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,$e.width,$e.height,Ce,de,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Ze,$e.width,$e.height,0,Ce,de,$e.data)}}else{Ue?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ce,de,Te[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ze,Ce,de,Te[te]);for(let xe=0;xe<N.length;xe++){const Me=N[xe];Ue?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,Ce,de,Me.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Ze,Ce,de,Me.image[te])}}}_(M)&&p(i.TEXTURE_CUBE_MAP),j.__version=oe.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ae(w,M,z,ee,oe,j){const Re=s.convert(z.format,z.colorSpace),ve=s.convert(z.type),Ee=C(z.internalFormat,Re,ve,z.colorSpace);if(!n.get(M).__hasExternalTextures){const fe=Math.max(1,M.width>>j),Te=Math.max(1,M.height>>j);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,j,Ee,fe,Te,M.depth,0,Re,ve,null):t.texImage2D(oe,j,Ee,fe,Te,0,Re,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Qe(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,oe,n.get(z).__webglTexture,0,qe(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,oe,n.get(z).__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(w,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const ee=M.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,j=b(M.stencilBuffer,oe),Re=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=qe(M);Qe(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,j,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,w)}else{const ee=M.textures;for(let oe=0;oe<ee.length;oe++){const j=ee[oe],Re=s.convert(j.format,j.colorSpace),ve=s.convert(j.type),Ee=C(j.internalFormat,Re,ve,j.colorSpace),Ye=qe(M);z&&Qe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Ee,M.width,M.height):Qe(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,Ee,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const ee=n.get(M.depthTexture).__webglTexture,oe=qe(M);if(M.depthTexture.format===li)Qe(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(M.depthTexture.format===pi)Qe(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Pe(w){const M=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const ee=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const oe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=ee}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");_e(M.__webglFramebuffer,w)}else if(z){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=i.createRenderbuffer(),ue(M.__webglDepthbuffer[ee],w,!1);else{const oe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ue(M.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(w,M,z){const ee=n.get(w);M!==void 0&&ae(ee.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Pe(w)}function Xe(w){const M=w.texture,z=n.get(w),ee=n.get(M);w.addEventListener("dispose",F);const oe=w.textures,j=w.isWebGLCubeRenderTarget===!0,Re=oe.length>1;if(Re||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=M.version,a.memory.textures++),j){z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ve]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)z.__webglFramebuffer[ve][Ee]=i.createFramebuffer()}else z.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ve=0;ve<M.mipmaps.length;ve++)z.__webglFramebuffer[ve]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Re)for(let ve=0,Ee=oe.length;ve<Ee;ve++){const Ye=n.get(oe[ve]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Qe(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ve=0;ve<oe.length;ve++){const Ee=oe[ve];z.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ve]);const Ye=s.convert(Ee.format,Ee.colorSpace),fe=s.convert(Ee.type),Te=C(Ee.internalFormat,Ye,fe,Ee.colorSpace,w.isXRRenderTarget===!0),Ie=qe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Te,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,z.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,M);for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)ae(z.__webglFramebuffer[ve][Ee],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ee);else ae(z.__webglFramebuffer[ve],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);_(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ve=0,Ee=oe.length;ve<Ee;ve++){const Ye=oe[ve],fe=n.get(Ye);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),Ae(i.TEXTURE_2D,Ye),ae(z.__webglFramebuffer,w,Ye,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),_(Ye)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ee.__webglTexture),Ae(ve,M),M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)ae(z.__webglFramebuffer[Ee],w,M,i.COLOR_ATTACHMENT0,ve,Ee);else ae(z.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ve,0);_(M)&&p(ve),t.unbindTexture()}w.depthBuffer&&Pe(w)}function je(w){const M=w.textures;for(let z=0,ee=M.length;z<ee;z++){const oe=M[z];if(_(oe)){const j=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Re=n.get(oe).__webglTexture;t.bindTexture(j,Re),p(j),t.unbindTexture()}}}const We=[],D=[];function vt(w){if(w.samples>0){if(Qe(w)===!1){const M=w.textures,z=w.width,ee=w.height;let oe=i.COLOR_BUFFER_BIT;const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(w),ve=M.length>1;if(ve)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ee]);const Ye=n.get(M[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,z,ee,0,0,z,ee,oe,i.NEAREST),c===!0&&(We.length=0,D.length=0,We.push(i.COLOR_ATTACHMENT0+Ee),w.depthBuffer&&w.resolveDepthBuffer===!1&&(We.push(j),D.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ee]);const Ye=n.get(M[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function qe(w){return Math.min(r.maxSamples,w.samples)}function Qe(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function De(w){const M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function rt(w,M){const z=w.colorSpace,ee=w.format,oe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Jt&&z!==cn&&(nt.getTransfer(z)===at?(ee!==Ft||oe!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Ne(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=Z,this.resetTextureUnits=T,this.setTexture2D=Q,this.setTexture2DArray=re,this.setTexture3D=Y,this.setTextureCube=ne,this.rebindTextures=Le,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Qe}function qd(i,e){function t(n,r=cn){let s;const a=nt.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uo)return i.BYTE;if(n===ho)return i.SHORT;if(n===Pi)return i.UNSIGNED_SHORT;if(n===ea)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Nt)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===po)return i.ALPHA;if(n===mo)return i.RGB;if(n===Ft)return i.RGBA;if(n===_o)return i.LUMINANCE;if(n===go)return i.LUMINANCE_ALPHA;if(n===li)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===ia)return i.RED;if(n===ra)return i.RED_INTEGER;if(n===vo)return i.RG;if(n===sa)return i.RG_INTEGER;if(n===aa)return i.RGBA_INTEGER;if(n===mr||n===_r||n===gr||n===vr)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ts||n===As||n===bs||n===ws)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ts)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===As)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ws)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rs||n===Cs||n===Ps)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rs||n===Cs)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ps)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ls||n===Us||n===Ds||n===Is||n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===Hs||n===Gs||n===ks||n===Vs||n===Ws)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ls)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Us)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ds)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Is)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ns)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fs)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Os)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bs)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zs)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hs)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gs)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ks)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vs)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ws)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xr||n===Xs||n===qs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xr)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===Ys||n===Zs||n===Ks)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ys)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ks)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Yd extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dr extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zd={type:"move"};class ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const A of e.hand.values()){const _=t.getJointPose(A,n),p=this._getHandJoint(u,A);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],m=h.position.distanceTo(f.position),g=.02,y=.005;u.inputState.pinching&&m>g+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=g-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Zd)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Kd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$d=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Tt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _n({vertexShader:Kd,fragmentShader:$d,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jd extends gi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,l="local-floor",c=1,u=null,h=null,f=null,m=null,g=null,y=null;const A=new Jd,_=t.getContextAttributes();let p=null,C=null;const b=[],R=[],W=new st;let F=null;const L=new Wt;L.layers.enable(1),L.viewport=new ht;const k=new Wt;k.layers.enable(2),k.viewport=new ht;const he=[L,k],x=new Yd;x.layers.enable(1),x.layers.enable(2);let T=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=b[$];return ae===void 0&&(ae=new ls,b[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=b[$];return ae===void 0&&(ae=new ls,b[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=b[$];return ae===void 0&&(ae=new ls,b[$]=ae),ae.getHandSpace()};function q($){const ae=R.indexOf($.inputSource);if(ae===-1)return;const ue=b[ae];ue!==void 0&&(ue.update($.inputSource,$.frame,u||a),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function Q(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",re);for(let $=0;$<b.length;$++){const ae=R[$];ae!==null&&(R[$]=null,b[$].disconnect(ae))}T=null,Z=null,A.reset(),e.setRenderTarget(p),g=null,m=null,f=null,r=null,C=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",re),_.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(W),r.renderState.layers===void 0){const ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),C=new Gn(g.framebufferWidth,g.framebufferHeight,{format:Ft,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ae=null,ue=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=_.stencil?pi:li,ue=_.stencil?di:Hn);const Pe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,t),m=f.createProjectionLayer(Pe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new Gn(m.textureWidth,m.textureHeight,{format:Ft,type:pn,depthTexture:new No(m.textureWidth,m.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),ze.setContext(r),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function re($){for(let ae=0;ae<$.removed.length;ae++){const ue=$.removed[ae],_e=R.indexOf(ue);_e>=0&&(R[_e]=null,b[_e].disconnect(ue))}for(let ae=0;ae<$.added.length;ae++){const ue=$.added[ae];let _e=R.indexOf(ue);if(_e===-1){for(let Le=0;Le<b.length;Le++)if(Le>=R.length){R.push(ue),_e=Le;break}else if(R[Le]===null){R[Le]=ue,_e=Le;break}if(_e===-1)break}const Pe=b[_e];Pe&&Pe.connect(ue)}}const Y=new X,ne=new X;function K($,ae,ue){Y.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(ue.matrixWorld);const _e=Y.distanceTo(ne),Pe=ae.projectionMatrix.elements,Le=ue.projectionMatrix.elements,Xe=Pe[14]/(Pe[10]-1),je=Pe[14]/(Pe[10]+1),We=(Pe[9]+1)/Pe[5],D=(Pe[9]-1)/Pe[5],vt=(Pe[8]-1)/Pe[0],qe=(Le[8]+1)/Le[0],Qe=Xe*vt,De=Xe*qe,rt=_e/(-vt+qe),Ne=rt*-vt;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(rt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pe[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const w=Xe+rt,M=je+rt,z=Qe-Ne,ee=De+(_e-Ne),oe=We*je/M*w,j=D*je/M*w;$.projectionMatrix.makePerspective(z,ee,oe,j,w,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pe($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ae=$.near,ue=$.far;A.texture!==null&&(A.depthNear>0&&(ae=A.depthNear),A.depthFar>0&&(ue=A.depthFar)),x.near=k.near=L.near=ae,x.far=k.far=L.far=ue,(T!==x.near||Z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,Z=x.far);const _e=$.parent,Pe=x.cameras;pe(x,_e);for(let Le=0;Le<Pe.length;Le++)pe(Pe[Le],_e);Pe.length===2?K(x,L,k):x.projectionMatrix.copy(L.projectionMatrix),me($,x,_e)};function me($,ae,ue){ue===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=$s*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(m===null&&g===null))return c},this.setFoveation=function($){c=$,m!==null&&(m.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(x)};let Ae=null;function Fe($,ae){if(h=ae.getViewerPose(u||a),y=ae,h!==null){const ue=h.views;g!==null&&(e.setRenderTargetFramebuffer(C,g.framebuffer),e.setRenderTarget(C));let _e=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,_e=!0);for(let Le=0;Le<ue.length;Le++){const Xe=ue[Le];let je=null;if(g!==null)je=g.getViewport(Xe);else{const D=f.getViewSubImage(m,Xe);je=D.viewport,Le===0&&(e.setRenderTargetTextures(C,D.colorTexture,m.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(C))}let We=he[Le];We===void 0&&(We=new Wt,We.layers.enable(Le),We.viewport=new ht,he[Le]=We),We.matrix.fromArray(Xe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Xe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(je.x,je.y,je.width,je.height),Le===0&&(x.matrix.copy(We.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),_e===!0&&x.cameras.push(We)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Le=f.getDepthInformation(ue[0]);Le&&Le.isValid&&Le.texture&&A.init(e,Le,r.renderState)}}for(let ue=0;ue<b.length;ue++){const _e=R[ue],Pe=b[ue];_e!==null&&Pe!==void 0&&Pe.update(_e,ae,u||a)}Ae&&Ae($,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),y=null}const ze=new Do;ze.setAnimationLoop(Fe),this.setAnimationLoop=function($){Ae=$},this.dispose=function(){}}}const In=new mn,Qd=new pt;function ep(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Co(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,C,b,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),f(_,p)):p.isMeshPhongMaterial?(s(_,p),h(_,p)):p.isMeshStandardMaterial?(s(_,p),m(_,p),p.isMeshPhysicalMaterial&&g(_,p,R)):p.isMeshMatcapMaterial?(s(_,p),y(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),A(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&l(_,p)):p.isPointsMaterial?c(_,p,C,b):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Ct&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Ct&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const C=e.get(p),b=C.envMap,R=C.envMapRotation;b&&(_.envMap.value=b,In.copy(R),In.x*=-1,In.y*=-1,In.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),_.envMapRotation.value.setFromMatrix4(Qd.makeRotationFromEuler(In)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function l(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,C,b){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*C,_.scale.value=b*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function f(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function m(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function g(_,p,C){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ct&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,p){p.matcap&&(_.matcap.value=p.matcap)}function A(_,p){const C=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function tp(i,e,t,n){let r={},s={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,b){const R=b.program;n.uniformBlockBinding(C,R)}function u(C,b){let R=r[C.id];R===void 0&&(y(C),R=h(C),r[C.id]=R,C.addEventListener("dispose",_));const W=b.program;n.updateUBOMapping(C,W);const F=e.render.frame;s[C.id]!==F&&(m(C),s[C.id]=F)}function h(C){const b=f();C.__bindingPointIndex=b;const R=i.createBuffer(),W=C.__size,F=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,W,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,R),R}function f(){for(let C=0;C<l;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const b=r[C.id],R=C.uniforms,W=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let F=0,L=R.length;F<L;F++){const k=Array.isArray(R[F])?R[F]:[R[F]];for(let he=0,x=k.length;he<x;he++){const T=k[he];if(g(T,F,he,W)===!0){const Z=T.__offset,q=Array.isArray(T.value)?T.value:[T.value];let Q=0;for(let re=0;re<q.length;re++){const Y=q[re],ne=A(Y);typeof Y=="number"||typeof Y=="boolean"?(T.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,Z+Q,T.__data)):Y.isMatrix3?(T.__data[0]=Y.elements[0],T.__data[1]=Y.elements[1],T.__data[2]=Y.elements[2],T.__data[3]=0,T.__data[4]=Y.elements[3],T.__data[5]=Y.elements[4],T.__data[6]=Y.elements[5],T.__data[7]=0,T.__data[8]=Y.elements[6],T.__data[9]=Y.elements[7],T.__data[10]=Y.elements[8],T.__data[11]=0):(Y.toArray(T.__data,Q),Q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(C,b,R,W){const F=C.value,L=b+"_"+R;if(W[L]===void 0)return typeof F=="number"||typeof F=="boolean"?W[L]=F:W[L]=F.clone(),!0;{const k=W[L];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return W[L]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function y(C){const b=C.uniforms;let R=0;const W=16;for(let L=0,k=b.length;L<k;L++){const he=Array.isArray(b[L])?b[L]:[b[L]];for(let x=0,T=he.length;x<T;x++){const Z=he[x],q=Array.isArray(Z.value)?Z.value:[Z.value];for(let Q=0,re=q.length;Q<re;Q++){const Y=q[Q],ne=A(Y),K=R%W,pe=K%ne.boundary,me=K+pe;R+=pe,me!==0&&W-me<ne.storage&&(R+=W-me),Z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=R,R+=ne.storage}}}const F=R%W;return F>0&&(R+=W-F),C.__size=R,C.__cache={},this}function A(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),b}function _(C){const b=C.target;b.removeEventListener("dispose",_);const R=a.indexOf(b.__bindingPointIndex);a.splice(R,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const C in r)i.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:c,update:u,dispose:p}}class np{constructor(e={}){const{canvas:t=Bl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),y=new Int32Array(4);let A=null,_=null;const p=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=wn,this.toneMappingExposure=1;const b=this;let R=!1,W=0,F=0,L=null,k=-1,he=null;const x=new ht,T=new ht;let Z=null;const q=new it(0);let Q=0,re=t.width,Y=t.height,ne=1,K=null,pe=null;const me=new ht(0,0,re,Y),Ae=new ht(0,0,re,Y);let Fe=!1;const ze=new Uo;let $=!1,ae=!1;const ue=new pt,_e=new pt,Pe=new X,Le=new ht,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function We(){return L===null?ne:1}let D=n;function vt(E,o){return t.getContext(E,o)}try{const E={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qs}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Me,!1),D===null){const o="webgl2";if(D=vt(o,E),D===null)throw vt(o)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let qe,Qe,De,rt,Ne,w,M,z,ee,oe,j,Re,ve,Ee,Ye,fe,Te,Ie,Ce,de,Ze,Ue,He,I;function Se(){qe=new of(D),qe.init(),Ue=new qd(D,qe),Qe=new ef(D,qe,e,Ue),De=new Vd(D),Qe.reverseDepthBuffer&&De.buffers.depth.setReversed(!0),rt=new uf(D),Ne=new Rd,w=new Xd(D,qe,De,Ne,Qe,Ue,rt),M=new nf(b),z=new af(b),ee=new _c(D),He=new jh(D,ee),oe=new lf(D,ee,rt,He),j=new ff(D,oe,ee,rt),Ce=new hf(D,Qe,w),fe=new tf(Ne),Re=new wd(b,M,z,qe,Qe,He,fe),ve=new ep(b,Ne),Ee=new Pd,Ye=new Fd(qe),Ie=new Jh(b,M,z,De,j,m,c),Te=new Gd(b,j,Qe),I=new tp(D,rt,Qe,De),de=new Qh(D,qe,rt),Ze=new cf(D,qe,rt),rt.programs=Re.programs,b.capabilities=Qe,b.extensions=qe,b.properties=Ne,b.renderLists=Ee,b.shadowMap=Te,b.state=De,b.info=rt}Se();const N=new jd(b,D);this.xr=N,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(re,Y,!1))},this.getSize=function(E){return E.set(re,Y)},this.setSize=function(E,o,d=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=E,Y=o,t.width=Math.floor(E*ne),t.height=Math.floor(o*ne),d===!0&&(t.style.width=E+"px",t.style.height=o+"px"),this.setViewport(0,0,E,o)},this.getDrawingBufferSize=function(E){return E.set(re*ne,Y*ne).floor()},this.setDrawingBufferSize=function(E,o,d){re=E,Y=o,ne=d,t.width=Math.floor(E*d),t.height=Math.floor(o*d),this.setViewport(0,0,E,o)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(me)},this.setViewport=function(E,o,d,v){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,o,d,v),De.viewport(x.copy(me).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,o,d,v){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,o,d,v),De.scissor(T.copy(Ae).multiplyScalar(ne).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(E){De.setScissorTest(Fe=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){pe=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(E=!0,o=!0,d=!0){let v=0;if(E){let S=!1;if(L!==null){const U=L.texture.format;S=U===aa||U===sa||U===ra}if(S){const U=L.texture.type,P=U===pn||U===Hn||U===Pi||U===di||U===ta||U===na,O=Ie.getClearColor(),V=Ie.getClearAlpha(),H=O.r,G=O.g,B=O.b;P?(g[0]=H,g[1]=G,g[2]=B,g[3]=V,D.clearBufferuiv(D.COLOR,0,g)):(y[0]=H,y[1]=G,y[2]=B,y[3]=V,D.clearBufferiv(D.COLOR,0,y))}else v|=D.COLOR_BUFFER_BIT}o&&(v|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),d&&(v|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(v)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ee.dispose(),Ye.dispose(),Ne.dispose(),M.dispose(),z.dispose(),j.dispose(),He.dispose(),I.dispose(),Re.dispose(),N.dispose(),N.removeEventListener("sessionstart",zi),N.removeEventListener("sessionend",Hi),jt.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=rt.autoReset,o=Te.enabled,d=Te.autoUpdate,v=Te.needsUpdate,S=Te.type;Se(),rt.autoReset=E,Te.enabled=o,Te.autoUpdate=d,Te.needsUpdate=v,Te.type=S}function Me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $e(E){const o=E.target;o.removeEventListener("dispose",$e),lt(o)}function lt(E){xt(E),Ne.remove(E)}function xt(E){const o=Ne.get(E).programs;o!==void 0&&(o.forEach(function(d){Re.releaseProgram(d)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,o,d,v,S,U){o===null&&(o=Xe);const P=S.isMesh&&S.matrixWorld.determinant()<0,O=Wi(E,o,d,v,S);De.setMaterial(v,P);let V=d.index,H=1;if(v.wireframe===!0){if(V=oe.getWireframeAttribute(d),V===void 0)return;H=2}const G=d.drawRange,B=d.attributes.position;let ie=G.start*H,le=(G.start+G.count)*H;U!==null&&(ie=Math.max(ie,U.start*H),le=Math.min(le,(U.start+U.count)*H)),V!==null?(ie=Math.max(ie,0),le=Math.min(le,V.count)):B!=null&&(ie=Math.max(ie,0),le=Math.min(le,B.count));const ce=le-ie;if(ce<0||ce===1/0)return;He.setup(S,v,O,d,V);let ye,se=de;if(V!==null&&(ye=ee.get(V),se=Ze,se.setIndex(ye)),S.isMesh)v.wireframe===!0?(De.setLineWidth(v.wireframeLinewidth*We()),se.setMode(D.LINES)):se.setMode(D.TRIANGLES);else if(S.isLine){let J=v.linewidth;J===void 0&&(J=1),De.setLineWidth(J*We()),S.isLineSegments?se.setMode(D.LINES):S.isLineLoop?se.setMode(D.LINE_LOOP):se.setMode(D.LINE_STRIP)}else S.isPoints?se.setMode(D.POINTS):S.isSprite&&se.setMode(D.TRIANGLES);if(S.isBatchedMesh)if(S._multiDrawInstances!==null)se.renderMultiDrawInstances(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount,S._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))se.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else{const J=S._multiDrawStarts,be=S._multiDrawCounts,we=S._multiDrawCount,Je=V?ee.get(V).bytesPerElement:1,ft=Ne.get(v).currentProgram.getUniforms();for(let Ve=0;Ve<we;Ve++)ft.setValue(D,"_gl_DrawID",Ve),se.render(J[Ve]/Je,be[Ve])}else if(S.isInstancedMesh)se.renderInstances(ie,ce,S.count);else if(d.isInstancedBufferGeometry){const J=d._maxInstanceCount!==void 0?d._maxInstanceCount:1/0,be=Math.min(d.instanceCount,J);se.renderInstances(ie,ce,be)}else se.render(ie,ce)};function et(E,o,d){E.transparent===!0&&E.side===ln&&E.forceSinglePass===!1?(E.side=Ct,E.needsUpdate=!0,Wn(E,o,d),E.side=Rn,E.needsUpdate=!0,Wn(E,o,d),E.side=ln):Wn(E,o,d)}this.compile=function(E,o,d=null){d===null&&(d=E),_=Ye.get(d),_.init(o),C.push(_),d.traverseVisible(function(S){S.isLight&&S.layers.test(o.layers)&&(_.pushLight(S),S.castShadow&&_.pushShadow(S))}),E!==d&&E.traverseVisible(function(S){S.isLight&&S.layers.test(o.layers)&&(_.pushLight(S),S.castShadow&&_.pushShadow(S))}),_.setupLights();const v=new Set;return E.traverse(function(S){if(!(S.isMesh||S.isPoints||S.isLine||S.isSprite))return;const U=S.material;if(U)if(Array.isArray(U))for(let P=0;P<U.length;P++){const O=U[P];et(O,d,S),v.add(O)}else et(U,d,S),v.add(U)}),C.pop(),_=null,v},this.compileAsync=function(E,o,d=null){const v=this.compile(E,o,d);return new Promise(S=>{function U(){if(v.forEach(function(P){Ne.get(P).currentProgram.isReady()&&v.delete(P)}),v.size===0){S(E);return}setTimeout(U,10)}qe.get("KHR_parallel_shader_compile")!==null?U():setTimeout(U,10)})};let St=null;function Ot(E){St&&St(E)}function zi(){jt.stop()}function Hi(){jt.start()}const jt=new Do;jt.setAnimationLoop(Ot),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(E){St=E,N.setAnimationLoop(E),E===null?jt.stop():jt.start()},N.addEventListener("sessionstart",zi),N.addEventListener("sessionend",Hi),this.render=function(E,o){if(o!==void 0&&o.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),o.parent===null&&o.matrixWorldAutoUpdate===!0&&o.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(o),o=N.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,o,L),_=Ye.get(E,C.length),_.init(o),C.push(_),_e.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),ze.setFromProjectionMatrix(_e),ae=this.localClippingEnabled,$=fe.init(this.clippingPlanes,ae),A=Ee.get(E,p.length),A.init(),p.push(A),N.enabled===!0&&N.isPresenting===!0){const U=b.xr.getDepthSensingMesh();U!==null&&xi(U,o,-1/0,b.sortObjects)}xi(E,o,0,b.sortObjects),A.finish(),b.sortObjects===!0&&A.sort(K,pe),je=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,je&&Ie.addToRenderList(A,E),this.info.render.frame++,$===!0&&fe.beginShadows();const d=_.state.shadowsArray;Te.render(d,E,o),$===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const v=A.opaque,S=A.transmissive;if(_.setupLights(),o.isArrayCamera){const U=o.cameras;if(S.length>0)for(let P=0,O=U.length;P<O;P++){const V=U[P];Si(v,S,E,V)}je&&Ie.render(E);for(let P=0,O=U.length;P<O;P++){const V=U[P];Gi(A,E,V,V.viewport)}}else S.length>0&&Si(v,S,E,o),je&&Ie.render(E),Gi(A,E,o);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(b,E,o),He.resetDefaultState(),k=-1,he=null,C.pop(),C.length>0?(_=C[C.length-1],$===!0&&fe.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,p.pop(),p.length>0?A=p[p.length-1]:A=null};function xi(E,o,d,v){if(E.visible===!1)return;if(E.layers.test(o.layers)){if(E.isGroup)d=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(o);else if(E.isLight)_.pushLight(E),E.castShadow&&_.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ze.intersectsSprite(E)){v&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);const P=j.update(E),O=E.material;O.visible&&A.push(E,P,O,d,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ze.intersectsObject(E))){const P=j.update(E),O=E.material;if(v&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(P.boundingSphere===null&&P.computeBoundingSphere(),Le.copy(P.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(_e)),Array.isArray(O)){const V=P.groups;for(let H=0,G=V.length;H<G;H++){const B=V[H],ie=O[B.materialIndex];ie&&ie.visible&&A.push(E,P,ie,d,Le.z,B)}}else O.visible&&A.push(E,P,O,d,Le.z,null)}}const U=E.children;for(let P=0,O=U.length;P<O;P++)xi(U[P],o,d,v)}function Gi(E,o,d,v){const S=E.opaque,U=E.transmissive,P=E.transparent;_.setupLightsView(d),$===!0&&fe.setGlobalState(b.clippingPlanes,d),v&&De.viewport(x.copy(v)),S.length>0&&Vn(S,o,d),U.length>0&&Vn(U,o,d),P.length>0&&Vn(P,o,d),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Si(E,o,d,v){if((d.isScene===!0?d.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[v.id]===void 0&&(_.state.transmissionRenderTarget[v.id]=new Gn(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?fn:pn,minFilter:An,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const U=_.state.transmissionRenderTarget[v.id],P=v.viewport||x;U.setSize(P.z,P.w);const O=b.getRenderTarget();b.setRenderTarget(U),b.getClearColor(q),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),je&&Ie.render(d);const V=b.toneMapping;b.toneMapping=wn;const H=v.viewport;if(v.viewport!==void 0&&(v.viewport=void 0),_.setupLightsView(v),$===!0&&fe.setGlobalState(b.clippingPlanes,v),Vn(E,d,v),w.updateMultisampleRenderTarget(U),w.updateRenderTargetMipmap(U),qe.has("WEBGL_multisampled_render_to_texture")===!1){let G=!1;for(let B=0,ie=o.length;B<ie;B++){const le=o[B],ce=le.object,ye=le.geometry,se=le.material,J=le.group;if(se.side===ln&&ce.layers.test(v.layers)){const be=se.side;se.side=Ct,se.needsUpdate=!0,ki(ce,d,v,ye,se,J),se.side=be,se.needsUpdate=!0,G=!0}}G===!0&&(w.updateMultisampleRenderTarget(U),w.updateRenderTargetMipmap(U))}b.setRenderTarget(O),b.setClearColor(q,Q),H!==void 0&&(v.viewport=H),b.toneMapping=V}function Vn(E,o,d){const v=o.isScene===!0?o.overrideMaterial:null;for(let S=0,U=E.length;S<U;S++){const P=E[S],O=P.object,V=P.geometry,H=v===null?P.material:v,G=P.group;O.layers.test(d.layers)&&ki(O,o,d,V,H,G)}}function ki(E,o,d,v,S,U){E.onBeforeRender(b,o,d,v,S,U),E.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),S.onBeforeRender(b,o,d,v,E,U),S.transparent===!0&&S.side===ln&&S.forceSinglePass===!1?(S.side=Ct,S.needsUpdate=!0,b.renderBufferDirect(d,o,v,S,E,U),S.side=Rn,S.needsUpdate=!0,b.renderBufferDirect(d,o,v,S,E,U),S.side=ln):b.renderBufferDirect(d,o,v,S,E,U),E.onAfterRender(b,o,d,v,S,U)}function Wn(E,o,d){o.isScene!==!0&&(o=Xe);const v=Ne.get(E),S=_.state.lights,U=_.state.shadowsArray,P=S.state.version,O=Re.getParameters(E,S.state,U,o,d),V=Re.getProgramCacheKey(O);let H=v.programs;v.environment=E.isMeshStandardMaterial?o.environment:null,v.fog=o.fog,v.envMap=(E.isMeshStandardMaterial?z:M).get(E.envMap||v.environment),v.envMapRotation=v.environment!==null&&E.envMap===null?o.environmentRotation:E.envMapRotation,H===void 0&&(E.addEventListener("dispose",$e),H=new Map,v.programs=H);let G=H.get(V);if(G!==void 0){if(v.currentProgram===G&&v.lightsStateVersion===P)return Mi(E,O),G}else O.uniforms=Re.getUniforms(E),E.onBeforeCompile(O,b),G=Re.acquireProgram(O,V),H.set(V,G),v.uniforms=O.uniforms;const B=v.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(B.clippingPlanes=fe.uniform),Mi(E,O),v.needsLights=Qt(E),v.lightsStateVersion=P,v.needsLights&&(B.ambientLightColor.value=S.state.ambient,B.lightProbe.value=S.state.probe,B.directionalLights.value=S.state.directional,B.directionalLightShadows.value=S.state.directionalShadow,B.spotLights.value=S.state.spot,B.spotLightShadows.value=S.state.spotShadow,B.rectAreaLights.value=S.state.rectArea,B.ltc_1.value=S.state.rectAreaLTC1,B.ltc_2.value=S.state.rectAreaLTC2,B.pointLights.value=S.state.point,B.pointLightShadows.value=S.state.pointShadow,B.hemisphereLights.value=S.state.hemi,B.directionalShadowMap.value=S.state.directionalShadowMap,B.directionalShadowMatrix.value=S.state.directionalShadowMatrix,B.spotShadowMap.value=S.state.spotShadowMap,B.spotLightMatrix.value=S.state.spotLightMatrix,B.spotLightMap.value=S.state.spotLightMap,B.pointShadowMap.value=S.state.pointShadowMap,B.pointShadowMatrix.value=S.state.pointShadowMatrix),v.currentProgram=G,v.uniformsList=null,G}function Vi(E){if(E.uniformsList===null){const o=E.currentProgram.getUniforms();E.uniformsList=Mr.seqWithValue(o.seq,E.uniforms)}return E.uniformsList}function Mi(E,o){const d=Ne.get(E);d.outputColorSpace=o.outputColorSpace,d.batching=o.batching,d.batchingColor=o.batchingColor,d.instancing=o.instancing,d.instancingColor=o.instancingColor,d.instancingMorph=o.instancingMorph,d.skinning=o.skinning,d.morphTargets=o.morphTargets,d.morphNormals=o.morphNormals,d.morphColors=o.morphColors,d.morphTargetsCount=o.morphTargetsCount,d.numClippingPlanes=o.numClippingPlanes,d.numIntersection=o.numClipIntersection,d.vertexAlphas=o.vertexAlphas,d.vertexTangents=o.vertexTangents,d.toneMapping=o.toneMapping}function Wi(E,o,d,v,S){o.isScene!==!0&&(o=Xe),w.resetTextureUnits();const U=o.fog,P=v.isMeshStandardMaterial?o.environment:null,O=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Jt,V=(v.isMeshStandardMaterial?z:M).get(v.envMap||P),H=v.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,G=!!d.attributes.tangent&&(!!v.normalMap||v.anisotropy>0),B=!!d.morphAttributes.position,ie=!!d.morphAttributes.normal,le=!!d.morphAttributes.color;let ce=wn;v.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ce=b.toneMapping);const ye=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,se=ye!==void 0?ye.length:0,J=Ne.get(v),be=_.state.lights;if($===!0&&(ae===!0||E!==he)){const Oe=E===he&&v.id===k;fe.setState(v,E,Oe)}let we=!1;v.version===J.__version?(J.needsLights&&J.lightsStateVersion!==be.state.version||J.outputColorSpace!==O||S.isBatchedMesh&&J.batching===!1||!S.isBatchedMesh&&J.batching===!0||S.isBatchedMesh&&J.batchingColor===!0&&S.colorTexture===null||S.isBatchedMesh&&J.batchingColor===!1&&S.colorTexture!==null||S.isInstancedMesh&&J.instancing===!1||!S.isInstancedMesh&&J.instancing===!0||S.isSkinnedMesh&&J.skinning===!1||!S.isSkinnedMesh&&J.skinning===!0||S.isInstancedMesh&&J.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&J.instancingColor===!1&&S.instanceColor!==null||S.isInstancedMesh&&J.instancingMorph===!0&&S.morphTexture===null||S.isInstancedMesh&&J.instancingMorph===!1&&S.morphTexture!==null||J.envMap!==V||v.fog===!0&&J.fog!==U||J.numClippingPlanes!==void 0&&(J.numClippingPlanes!==fe.numPlanes||J.numIntersection!==fe.numIntersection)||J.vertexAlphas!==H||J.vertexTangents!==G||J.morphTargets!==B||J.morphNormals!==ie||J.morphColors!==le||J.toneMapping!==ce||J.morphTargetsCount!==se)&&(we=!0):(we=!0,J.__version=v.version);let Je=J.currentProgram;we===!0&&(Je=Wn(v,o,S));let ft=!1,Ve=!1,Ke=!1;const Be=Je.getUniforms(),ut=J.uniforms;if(De.useProgram(Je.program)&&(ft=!0,Ve=!0,Ke=!0),v.id!==k&&(k=v.id,Ve=!0),ft||he!==E){Qe.reverseDepthBuffer?(ue.copy(E.projectionMatrix),Hl(ue),Gl(ue),Be.setValue(D,"projectionMatrix",ue)):Be.setValue(D,"projectionMatrix",E.projectionMatrix),Be.setValue(D,"viewMatrix",E.matrixWorldInverse);const Oe=Be.map.cameraPosition;Oe!==void 0&&Oe.setValue(D,Pe.setFromMatrixPosition(E.matrixWorld)),Qe.logarithmicDepthBuffer&&Be.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(v.isMeshPhongMaterial||v.isMeshToonMaterial||v.isMeshLambertMaterial||v.isMeshBasicMaterial||v.isMeshStandardMaterial||v.isShaderMaterial)&&Be.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),he!==E&&(he=E,Ve=!0,Ke=!0)}if(S.isSkinnedMesh){Be.setOptional(D,S,"bindMatrix"),Be.setOptional(D,S,"bindMatrixInverse");const Oe=S.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Be.setValue(D,"boneTexture",Oe.boneTexture,w))}S.isBatchedMesh&&(Be.setOptional(D,S,"batchingTexture"),Be.setValue(D,"batchingTexture",S._matricesTexture,w),Be.setOptional(D,S,"batchingIdTexture"),Be.setValue(D,"batchingIdTexture",S._indirectTexture,w),Be.setOptional(D,S,"batchingColorTexture"),S._colorsTexture!==null&&Be.setValue(D,"batchingColorTexture",S._colorsTexture,w));const ct=d.morphAttributes;if((ct.position!==void 0||ct.normal!==void 0||ct.color!==void 0)&&Ce.update(S,d,Je),(Ve||J.receiveShadow!==S.receiveShadow)&&(J.receiveShadow=S.receiveShadow,Be.setValue(D,"receiveShadow",S.receiveShadow)),v.isMeshGouraudMaterial&&v.envMap!==null&&(ut.envMap.value=V,ut.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1),v.isMeshStandardMaterial&&v.envMap===null&&o.environment!==null&&(ut.envMapIntensity.value=o.environmentIntensity),Ve&&(Be.setValue(D,"toneMappingExposure",b.toneMappingExposure),J.needsLights&&Lr(ut,Ke),U&&v.fog===!0&&ve.refreshFogUniforms(ut,U),ve.refreshMaterialUniforms(ut,v,ne,Y,_.state.transmissionRenderTarget[E.id]),Mr.upload(D,Vi(J),ut,w)),v.isShaderMaterial&&v.uniformsNeedUpdate===!0&&(Mr.upload(D,Vi(J),ut,w),v.uniformsNeedUpdate=!1),v.isSpriteMaterial&&Be.setValue(D,"center",S.center),Be.setValue(D,"modelViewMatrix",S.modelViewMatrix),Be.setValue(D,"normalMatrix",S.normalMatrix),Be.setValue(D,"modelMatrix",S.matrixWorld),v.isShaderMaterial||v.isRawShaderMaterial){const Oe=v.uniformsGroups;for(let tt=0,Bt=Oe.length;tt<Bt;tt++){const gn=Oe[tt];I.update(gn,Je),I.bind(gn,Je)}}return Je}function Lr(E,o){E.ambientLightColor.needsUpdate=o,E.lightProbe.needsUpdate=o,E.directionalLights.needsUpdate=o,E.directionalLightShadows.needsUpdate=o,E.pointLights.needsUpdate=o,E.pointLightShadows.needsUpdate=o,E.spotLights.needsUpdate=o,E.spotLightShadows.needsUpdate=o,E.rectAreaLights.needsUpdate=o,E.hemisphereLights.needsUpdate=o}function Qt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,o,d){Ne.get(E.texture).__webglTexture=o,Ne.get(E.depthTexture).__webglTexture=d;const v=Ne.get(E);v.__hasExternalTextures=!0,v.__autoAllocateDepthBuffer=d===void 0,v.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),v.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,o){const d=Ne.get(E);d.__webglFramebuffer=o,d.__useDefaultFramebuffer=o===void 0},this.setRenderTarget=function(E,o=0,d=0){L=E,W=o,F=d;let v=!0,S=null,U=!1,P=!1;if(E){const V=Ne.get(E);if(V.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(D.FRAMEBUFFER,null),v=!1;else if(V.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(V.__hasExternalTextures)w.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const B=E.depthTexture;if(V.__boundDepthTexture!==B){if(B!==null&&Ne.has(B)&&(E.width!==B.image.width||E.height!==B.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const H=E.texture;(H.isData3DTexture||H.isDataArrayTexture||H.isCompressedArrayTexture)&&(P=!0);const G=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(G[o])?S=G[o][d]:S=G[o],U=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?S=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(G)?S=G[d]:S=G,x.copy(E.viewport),T.copy(E.scissor),Z=E.scissorTest}else x.copy(me).multiplyScalar(ne).floor(),T.copy(Ae).multiplyScalar(ne).floor(),Z=Fe;if(De.bindFramebuffer(D.FRAMEBUFFER,S)&&v&&De.drawBuffers(E,S),De.viewport(x),De.scissor(T),De.setScissorTest(Z),U){const V=Ne.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+o,V.__webglTexture,d)}else if(P){const V=Ne.get(E.texture),H=o||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.__webglTexture,d||0,H)}k=-1},this.readRenderTargetPixels=function(E,o,d,v,S,U,P){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&P!==void 0&&(O=O[P]),O){De.bindFramebuffer(D.FRAMEBUFFER,O);try{const V=E.texture,H=V.format,G=V.type;if(!Qe.textureFormatReadable(H)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(G)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}o>=0&&o<=E.width-v&&d>=0&&d<=E.height-S&&D.readPixels(o,d,v,S,Ue.convert(H),Ue.convert(G),U)}finally{const V=L!==null?Ne.get(L).__webglFramebuffer:null;De.bindFramebuffer(D.FRAMEBUFFER,V)}}},this.readRenderTargetPixelsAsync=async function(E,o,d,v,S,U,P){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let O=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&P!==void 0&&(O=O[P]),O){const V=E.texture,H=V.format,G=V.type;if(!Qe.textureFormatReadable(H))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(G))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(o>=0&&o<=E.width-v&&d>=0&&d<=E.height-S){De.bindFramebuffer(D.FRAMEBUFFER,O);const B=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,B),D.bufferData(D.PIXEL_PACK_BUFFER,U.byteLength,D.STREAM_READ),D.readPixels(o,d,v,S,Ue.convert(H),Ue.convert(G),0);const ie=L!==null?Ne.get(L).__webglFramebuffer:null;De.bindFramebuffer(D.FRAMEBUFFER,ie);const le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await zl(D,le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,B),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,U),D.deleteBuffer(B),D.deleteSync(le),U}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,o=null,d=0){E.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),o=arguments[0]||null,E=arguments[1]);const v=Math.pow(2,-d),S=Math.floor(E.image.width*v),U=Math.floor(E.image.height*v),P=o!==null?o.x:0,O=o!==null?o.y:0;w.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,d,0,0,P,O,S,U),De.unbindTexture()},this.copyTextureToTexture=function(E,o,d=null,v=null,S=0){E.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),v=arguments[0]||null,E=arguments[1],o=arguments[2],S=arguments[3]||0,d=null);let U,P,O,V,H,G;d!==null?(U=d.max.x-d.min.x,P=d.max.y-d.min.y,O=d.min.x,V=d.min.y):(U=E.image.width,P=E.image.height,O=0,V=0),v!==null?(H=v.x,G=v.y):(H=0,G=0);const B=Ue.convert(o.format),ie=Ue.convert(o.type);w.setTexture2D(o,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,o.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,o.unpackAlignment);const le=D.getParameter(D.UNPACK_ROW_LENGTH),ce=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ye=D.getParameter(D.UNPACK_SKIP_PIXELS),se=D.getParameter(D.UNPACK_SKIP_ROWS),J=D.getParameter(D.UNPACK_SKIP_IMAGES),be=E.isCompressedTexture?E.mipmaps[S]:E.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,be.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,O),D.pixelStorei(D.UNPACK_SKIP_ROWS,V),E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,S,H,G,U,P,B,ie,be.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,S,H,G,be.width,be.height,B,be.data):D.texSubImage2D(D.TEXTURE_2D,S,H,G,U,P,B,ie,be),D.pixelStorei(D.UNPACK_ROW_LENGTH,le),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,se),D.pixelStorei(D.UNPACK_SKIP_IMAGES,J),S===0&&o.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(E,o,d=null,v=null,S=0){E.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),d=arguments[0]||null,v=arguments[1]||null,E=arguments[2],o=arguments[3],S=arguments[4]||0);let U,P,O,V,H,G,B,ie,le;const ce=E.isCompressedTexture?E.mipmaps[S]:E.image;d!==null?(U=d.max.x-d.min.x,P=d.max.y-d.min.y,O=d.max.z-d.min.z,V=d.min.x,H=d.min.y,G=d.min.z):(U=ce.width,P=ce.height,O=ce.depth,V=0,H=0,G=0),v!==null?(B=v.x,ie=v.y,le=v.z):(B=0,ie=0,le=0);const ye=Ue.convert(o.format),se=Ue.convert(o.type);let J;if(o.isData3DTexture)w.setTexture3D(o,0),J=D.TEXTURE_3D;else if(o.isDataArrayTexture||o.isCompressedArrayTexture)w.setTexture2DArray(o,0),J=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,o.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,o.unpackAlignment);const be=D.getParameter(D.UNPACK_ROW_LENGTH),we=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Je=D.getParameter(D.UNPACK_SKIP_PIXELS),ft=D.getParameter(D.UNPACK_SKIP_ROWS),Ve=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,V),D.pixelStorei(D.UNPACK_SKIP_ROWS,H),D.pixelStorei(D.UNPACK_SKIP_IMAGES,G),E.isDataTexture||E.isData3DTexture?D.texSubImage3D(J,S,B,ie,le,U,P,O,ye,se,ce.data):o.isCompressedArrayTexture?D.compressedTexSubImage3D(J,S,B,ie,le,U,P,O,ye,ce.data):D.texSubImage3D(J,S,B,ie,le,U,P,O,ye,se,ce),D.pixelStorei(D.UNPACK_ROW_LENGTH,be),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Je),D.pixelStorei(D.UNPACK_SKIP_ROWS,ft),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve),S===0&&o.generateMipmaps&&D.generateMipmap(J),De.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),De.unbindTexture()},this.resetState=function(){W=0,F=0,L=null,De.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===oa?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Rr?"display-p3":"srgb"}}class ip extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rp extends Tt{constructor(e=null,t=1,n=1,r,s,a,l,c,u=Rt,h=Rt,f,m){super(null,a,l,c,u,h,r,s,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const br={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class sp{constructor(e,t,n){const r=this;let s=!1,a=0,l=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,l),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){const f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,m=u.length;f<m;f+=2){const g=u[f],y=u[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return y}return null}}}const ap=new sp;class Oi{constructor(e){this.manager=e!==void 0?e:ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";const an={};class op extends Error{constructor(e,t){super(e),this.response=t}}class lp extends Oi{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=br.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(an[e]!==void 0){an[e].push({onLoad:t,onProgress:n,onError:r});return}an[e]=[],an[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=an[e],f=u.body.getReader(),m=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),g=m?parseInt(m):0,y=g!==0;let A=0;const _=new ReadableStream({start(p){C();function C(){f.read().then(({done:b,value:R})=>{if(b)p.close();else{A+=R.byteLength;const W=new ProgressEvent("progress",{lengthComputable:y,loaded:A,total:g});for(let F=0,L=h.length;F<L;F++){const k=h[F];k.onProgress&&k.onProgress(W)}p.enqueue(R),C()}},b=>{p.error(b)})}}});return new Response(_)}else throw new op(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return u.json();default:if(l===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(l),m=f&&f[1]?f[1].toLowerCase():void 0,g=new TextDecoder(m);return u.arrayBuffer().then(y=>g.decode(y))}}}).then(u=>{br.add(e,u);const h=an[e];delete an[e];for(let f=0,m=h.length;f<m;f++){const g=h[f];g.onLoad&&g.onLoad(u)}}).catch(u=>{const h=an[e];if(h===void 0)throw this.manager.itemError(e),u;delete an[e];for(let f=0,m=h.length;f<m;f++){const g=h[f];g.onError&&g.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class cp extends Oi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=br.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const l=Li("img");function c(){h(),br.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){h(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class up extends Oi{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new rp,l=new lp(this.manager);return l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(s.withCredentials),l.load(e,function(c){let u;try{u=s.parse(c)}catch(h){if(r!==void 0)r(h);else{console.error(h);return}}u.image!==void 0?a.image=u.image:u.data!==void 0&&(a.image.width=u.width,a.image.height=u.height,a.image.data=u.data),a.wrapS=u.wrapS!==void 0?u.wrapS:hn,a.wrapT=u.wrapT!==void 0?u.wrapT:hn,a.magFilter=u.magFilter!==void 0?u.magFilter:yt,a.minFilter=u.minFilter!==void 0?u.minFilter:yt,a.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(a.colorSpace=u.colorSpace),u.flipY!==void 0&&(a.flipY=u.flipY),u.format!==void 0&&(a.format=u.format),u.type!==void 0&&(a.type=u.type),u.mipmaps!==void 0&&(a.mipmaps=u.mipmaps,a.minFilter=An),u.mipmapCount===1&&(a.minFilter=yt),u.generateMipmaps!==void 0&&(a.generateMipmaps=u.generateMipmaps),a.needsUpdate=!0,t&&t(a,u)},n,r),a}}class Ho extends Oi{constructor(e){super(e)}load(e,t,n,r){const s=new Tt,a=new cp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class hp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ao(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ao();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ao(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qs);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var It=Uint8Array,ai=Uint16Array,fp=Int32Array,Go=new It([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ko=new It([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),dp=new It([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Vo=function(i,e){for(var t=new ai(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new fp(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Wo=Vo(Go,2),Xo=Wo.b,pp=Wo.r;Xo[28]=258,pp[258]=28;var mp=Vo(ko,0),_p=mp.b,js=new ai(32768);for(var ot=0;ot<32768;++ot){var Tn=(ot&43690)>>1|(ot&21845)<<1;Tn=(Tn&52428)>>2|(Tn&13107)<<2,Tn=(Tn&61680)>>4|(Tn&3855)<<4,js[ot]=((Tn&65280)>>8|(Tn&255)<<8)>>1}var Ci=function(i,e,t){for(var n=i.length,r=0,s=new ai(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new ai(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var l;if(t){l=new ai(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var u=r<<4|i[r],h=e-i[r],f=a[i[r]-1]++<<h,m=f|(1<<h)-1;f<=m;++f)l[js[f]>>c]=u}else for(l=new ai(n),r=0;r<n;++r)i[r]&&(l[r]=js[a[i[r]-1]++]>>15-i[r]);return l},Bi=new It(288);for(var ot=0;ot<144;++ot)Bi[ot]=8;for(var ot=144;ot<256;++ot)Bi[ot]=9;for(var ot=256;ot<280;++ot)Bi[ot]=7;for(var ot=280;ot<288;++ot)Bi[ot]=8;var qo=new It(32);for(var ot=0;ot<32;++ot)qo[ot]=5;var gp=Ci(Bi,9,1),vp=Ci(qo,5,1),cs=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},kt=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},us=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},xp=function(i){return(i+7)/8|0},Sp=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new It(i.subarray(e,t))},Mp=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Vt=function(i,e,t){var n=new Error(e||Mp[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Vt),!t)throw n;return n},Ep=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new It(0);var a=!t,l=a||e.i!=2,c=e.i;a&&(t=new It(r*3));var u=function(je){var We=t.length;if(je>We){var D=new It(Math.max(We*2,je));D.set(t),t=D}},h=e.f||0,f=e.p||0,m=e.b||0,g=e.l,y=e.d,A=e.m,_=e.n,p=r*8;do{if(!g){h=kt(i,f,1);var C=kt(i,f+1,3);if(f+=3,C)if(C==1)g=gp,y=vp,A=9,_=5;else if(C==2){var F=kt(i,f,31)+257,L=kt(i,f+10,15)+4,k=F+kt(i,f+5,31)+1;f+=14;for(var he=new It(k),x=new It(19),T=0;T<L;++T)x[dp[T]]=kt(i,f+T*3,7);f+=L*3;for(var Z=cs(x),q=(1<<Z)-1,Q=Ci(x,Z,1),T=0;T<k;){var re=Q[kt(i,f,q)];f+=re&15;var b=re>>4;if(b<16)he[T++]=b;else{var Y=0,ne=0;for(b==16?(ne=3+kt(i,f,3),f+=2,Y=he[T-1]):b==17?(ne=3+kt(i,f,7),f+=3):b==18&&(ne=11+kt(i,f,127),f+=7);ne--;)he[T++]=Y}}var K=he.subarray(0,F),pe=he.subarray(F);A=cs(K),_=cs(pe),g=Ci(K,A,1),y=Ci(pe,_,1)}else Vt(1);else{var b=xp(f)+4,R=i[b-4]|i[b-3]<<8,W=b+R;if(W>r){c&&Vt(0);break}l&&u(m+R),t.set(i.subarray(b,W),m),e.b=m+=R,e.p=f=W*8,e.f=h;continue}if(f>p){c&&Vt(0);break}}l&&u(m+131072);for(var me=(1<<A)-1,Ae=(1<<_)-1,Fe=f;;Fe=f){var Y=g[us(i,f)&me],ze=Y>>4;if(f+=Y&15,f>p){c&&Vt(0);break}if(Y||Vt(2),ze<256)t[m++]=ze;else if(ze==256){Fe=f,g=null;break}else{var $=ze-254;if(ze>264){var T=ze-257,ae=Go[T];$=kt(i,f,(1<<ae)-1)+Xo[T],f+=ae}var ue=y[us(i,f)&Ae],_e=ue>>4;ue||Vt(3),f+=ue&15;var pe=_p[_e];if(_e>3){var ae=ko[_e];pe+=us(i,f)&(1<<ae)-1,f+=ae}if(f>p){c&&Vt(0);break}l&&u(m+131072);var Pe=m+$;if(m<pe){var Le=s-pe,Xe=Math.min(pe,Pe);for(Le+m<0&&Vt(3);m<Xe;++m)t[m]=n[Le+m]}for(;m<Pe;++m)t[m]=t[m-pe]}}e.l=g,e.p=Fe,e.b=m,e.f=h,g&&(h=1,e.m=A,e.d=y,e.n=_)}while(!h);return m!=t.length&&a?Sp(t,0,m):t.subarray(0,m)},yp=new It(0),Tp=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Vt(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&Vt(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function pr(i,e){return Ep(i.subarray(Tp(i,e),-4),{i:2},e,e)}var Ap=typeof TextDecoder<"u"&&new TextDecoder,bp=0;try{Ap.decode(yp,{stream:!0}),bp=1}catch{}class wp extends up{constructor(e){super(e),this.type=fn}parse(e){const he=Math.pow(2.7182818,2.2);function x(o,d){let v=0;for(let U=0;U<65536;++U)(U==0||o[U>>3]&1<<(U&7))&&(d[v++]=U);const S=v-1;for(;v<65536;)d[v++]=0;return S}function T(o){for(let d=0;d<16384;d++)o[d]={},o[d].len=0,o[d].lit=0,o[d].p=null}const Z={l:0,c:0,lc:0};function q(o,d,v,S,U){for(;v<o;)d=d<<8|Ze(S,U),v+=8;v-=o,Z.l=d>>v&(1<<o)-1,Z.c=d,Z.lc=v}const Q=new Array(59);function re(o){for(let v=0;v<=58;++v)Q[v]=0;for(let v=0;v<65537;++v)Q[o[v]]+=1;let d=0;for(let v=58;v>0;--v){const S=d+Q[v]>>1;Q[v]=d,d=S}for(let v=0;v<65537;++v){const S=o[v];S>0&&(o[v]=S|Q[S]++<<6)}}function Y(o,d,v,S,U,P){const O=d;let V=0,H=0;for(;S<=U;S++){if(O.value-d.value>v)return!1;q(6,V,H,o,O);const G=Z.l;if(V=Z.c,H=Z.lc,P[S]=G,G==63){if(O.value-d.value>v)throw new Error("Something wrong with hufUnpackEncTable");q(8,V,H,o,O);let B=Z.l+6;if(V=Z.c,H=Z.lc,S+B>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;B--;)P[S++]=0;S--}else if(G>=59){let B=G-59+2;if(S+B>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;B--;)P[S++]=0;S--}}re(P)}function ne(o){return o&63}function K(o){return o>>6}function pe(o,d,v,S){for(;d<=v;d++){const U=K(o[d]),P=ne(o[d]);if(U>>P)throw new Error("Invalid table entry");if(P>14){const O=S[U>>P-14];if(O.len)throw new Error("Invalid table entry");if(O.lit++,O.p){const V=O.p;O.p=new Array(O.lit);for(let H=0;H<O.lit-1;++H)O.p[H]=V[H]}else O.p=new Array(1);O.p[O.lit-1]=d}else if(P){let O=0;for(let V=1<<14-P;V>0;V--){const H=S[(U<<14-P)+O];if(H.len||H.p)throw new Error("Invalid table entry");H.len=P,H.lit=d,O++}}}return!0}const me={c:0,lc:0};function Ae(o,d,v,S){o=o<<8|Ze(v,S),d+=8,me.c=o,me.lc=d}const Fe={c:0,lc:0};function ze(o,d,v,S,U,P,O,V,H){if(o==d){S<8&&(Ae(v,S,U,P),v=me.c,S=me.lc),S-=8;let G=v>>S;if(G=new Uint8Array([G])[0],V.value+G>H)return!1;const B=O[V.value-1];for(;G-- >0;)O[V.value++]=B}else if(V.value<H)O[V.value++]=o;else return!1;Fe.c=v,Fe.lc=S}function $(o){return o&65535}function ae(o){const d=$(o);return d>32767?d-65536:d}const ue={a:0,b:0};function _e(o,d){const v=ae(o),U=ae(d),P=v+(U&1)+(U>>1),O=P,V=P-U;ue.a=O,ue.b=V}function Pe(o,d){const v=$(o),S=$(d),U=v-(S>>1)&65535,P=S+U-32768&65535;ue.a=P,ue.b=U}function Le(o,d,v,S,U,P,O){const V=O<16384,H=v>U?U:v;let G=1,B,ie;for(;G<=H;)G<<=1;for(G>>=1,B=G,G>>=1;G>=1;){ie=0;const le=ie+P*(U-B),ce=P*G,ye=P*B,se=S*G,J=S*B;let be,we,Je,ft;for(;ie<=le;ie+=ye){let Ve=ie;const Ke=ie+S*(v-B);for(;Ve<=Ke;Ve+=J){const Be=Ve+se,ut=Ve+ce,ct=ut+se;V?(_e(o[Ve+d],o[ut+d]),be=ue.a,Je=ue.b,_e(o[Be+d],o[ct+d]),we=ue.a,ft=ue.b,_e(be,we),o[Ve+d]=ue.a,o[Be+d]=ue.b,_e(Je,ft),o[ut+d]=ue.a,o[ct+d]=ue.b):(Pe(o[Ve+d],o[ut+d]),be=ue.a,Je=ue.b,Pe(o[Be+d],o[ct+d]),we=ue.a,ft=ue.b,Pe(be,we),o[Ve+d]=ue.a,o[Be+d]=ue.b,Pe(Je,ft),o[ut+d]=ue.a,o[ct+d]=ue.b)}if(v&G){const Be=Ve+ce;V?_e(o[Ve+d],o[Be+d]):Pe(o[Ve+d],o[Be+d]),be=ue.a,o[Be+d]=ue.b,o[Ve+d]=be}}if(U&G){let Ve=ie;const Ke=ie+S*(v-B);for(;Ve<=Ke;Ve+=J){const Be=Ve+se;V?_e(o[Ve+d],o[Be+d]):Pe(o[Ve+d],o[Be+d]),be=ue.a,o[Be+d]=ue.b,o[Ve+d]=be}}B=G,G>>=1}return ie}function Xe(o,d,v,S,U,P,O,V,H){let G=0,B=0;const ie=O,le=Math.trunc(S.value+(U+7)/8);for(;S.value<le;)for(Ae(G,B,v,S),G=me.c,B=me.lc;B>=14;){const ye=G>>B-14&16383,se=d[ye];if(se.len)B-=se.len,ze(se.lit,P,G,B,v,S,V,H,ie),G=Fe.c,B=Fe.lc;else{if(!se.p)throw new Error("hufDecode issues");let J;for(J=0;J<se.lit;J++){const be=ne(o[se.p[J]]);for(;B<be&&S.value<le;)Ae(G,B,v,S),G=me.c,B=me.lc;if(B>=be&&K(o[se.p[J]])==(G>>B-be&(1<<be)-1)){B-=be,ze(se.p[J],P,G,B,v,S,V,H,ie),G=Fe.c,B=Fe.lc;break}}if(J==se.lit)throw new Error("hufDecode issues")}}const ce=8-U&7;for(G>>=ce,B-=ce;B>0;){const ye=d[G<<14-B&16383];if(ye.len)B-=ye.len,ze(ye.lit,P,G,B,v,S,V,H,ie),G=Fe.c,B=Fe.lc;else throw new Error("hufDecode issues")}return!0}function je(o,d,v,S,U,P){const O={value:0},V=v.value,H=de(d,v),G=de(d,v);v.value+=4;const B=de(d,v);if(v.value+=4,H<0||H>=65537||G<0||G>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ie=new Array(65537),le=new Array(16384);T(le);const ce=S-(v.value-V);if(Y(o,v,ce,H,G,ie),B>8*(S-(v.value-V)))throw new Error("Something wrong with hufUncompress");pe(ie,H,G,le),Xe(ie,le,o,v,B,G,P,U,O)}function We(o,d,v){for(let S=0;S<v;++S)d[S]=o[d[S]]}function D(o){for(let d=1;d<o.length;d++){const v=o[d-1]+o[d]-128;o[d]=v}}function vt(o,d){let v=0,S=Math.floor((o.length+1)/2),U=0;const P=o.length-1;for(;!(U>P||(d[U++]=o[v++],U>P));)d[U++]=o[S++]}function qe(o){let d=o.byteLength;const v=new Array;let S=0;const U=new DataView(o);for(;d>0;){const P=U.getInt8(S++);if(P<0){const O=-P;d-=O+1;for(let V=0;V<O;V++)v.push(U.getUint8(S++))}else{const O=P;d-=2;const V=U.getUint8(S++);for(let H=0;H<O+1;H++)v.push(V)}}return v}function Qe(o,d,v,S,U,P){let O=new DataView(P.buffer);const V=v[o.idx[0]].width,H=v[o.idx[0]].height,G=3,B=Math.floor(V/8),ie=Math.ceil(V/8),le=Math.ceil(H/8),ce=V-(ie-1)*8,ye=H-(le-1)*8,se={value:0},J=new Array(G),be=new Array(G),we=new Array(G),Je=new Array(G),ft=new Array(G);for(let Ke=0;Ke<G;++Ke)ft[Ke]=d[o.idx[Ke]],J[Ke]=Ke<1?0:J[Ke-1]+ie*le,be[Ke]=new Float32Array(64),we[Ke]=new Uint16Array(64),Je[Ke]=new Uint16Array(ie*64);for(let Ke=0;Ke<le;++Ke){let Be=8;Ke==le-1&&(Be=ye);let ut=8;for(let Oe=0;Oe<ie;++Oe){Oe==ie-1&&(ut=ce);for(let tt=0;tt<G;++tt)we[tt].fill(0),we[tt][0]=U[J[tt]++],De(se,S,we[tt]),rt(we[tt],be[tt]),Ne(be[tt]);w(be);for(let tt=0;tt<G;++tt)M(be[tt],Je[tt],Oe*64)}let ct=0;for(let Oe=0;Oe<G;++Oe){const tt=v[o.idx[Oe]].type;for(let Bt=8*Ke;Bt<8*Ke+Be;++Bt){ct=ft[Oe][Bt];for(let gn=0;gn<B;++gn){const qt=gn*64+(Bt&7)*8;O.setUint16(ct+0*2*tt,Je[Oe][qt+0],!0),O.setUint16(ct+1*2*tt,Je[Oe][qt+1],!0),O.setUint16(ct+2*2*tt,Je[Oe][qt+2],!0),O.setUint16(ct+3*2*tt,Je[Oe][qt+3],!0),O.setUint16(ct+4*2*tt,Je[Oe][qt+4],!0),O.setUint16(ct+5*2*tt,Je[Oe][qt+5],!0),O.setUint16(ct+6*2*tt,Je[Oe][qt+6],!0),O.setUint16(ct+7*2*tt,Je[Oe][qt+7],!0),ct+=8*2*tt}}if(B!=ie)for(let Bt=8*Ke;Bt<8*Ke+Be;++Bt){const gn=ft[Oe][Bt]+8*B*2*tt,qt=B*64+(Bt&7)*8;for(let Xi=0;Xi<ut;++Xi)O.setUint16(gn+Xi*2*tt,Je[Oe][qt+Xi],!0)}}}const Ve=new Uint16Array(V);O=new DataView(P.buffer);for(let Ke=0;Ke<G;++Ke){v[o.idx[Ke]].decoded=!0;const Be=v[o.idx[Ke]].type;if(v[Ke].type==2)for(let ut=0;ut<H;++ut){const ct=ft[Ke][ut];for(let Oe=0;Oe<V;++Oe)Ve[Oe]=O.getUint16(ct+Oe*2*Be,!0);for(let Oe=0;Oe<V;++Oe)O.setFloat32(ct+Oe*2*Be,N(Ve[Oe]),!0)}}}function De(o,d,v){let S,U=1;for(;U<64;)S=d[o.value],S==65280?U=64:S>>8==255?U+=S&255:(v[U]=S,U++),o.value++}function rt(o,d){d[0]=N(o[0]),d[1]=N(o[1]),d[2]=N(o[5]),d[3]=N(o[6]),d[4]=N(o[14]),d[5]=N(o[15]),d[6]=N(o[27]),d[7]=N(o[28]),d[8]=N(o[2]),d[9]=N(o[4]),d[10]=N(o[7]),d[11]=N(o[13]),d[12]=N(o[16]),d[13]=N(o[26]),d[14]=N(o[29]),d[15]=N(o[42]),d[16]=N(o[3]),d[17]=N(o[8]),d[18]=N(o[12]),d[19]=N(o[17]),d[20]=N(o[25]),d[21]=N(o[30]),d[22]=N(o[41]),d[23]=N(o[43]),d[24]=N(o[9]),d[25]=N(o[11]),d[26]=N(o[18]),d[27]=N(o[24]),d[28]=N(o[31]),d[29]=N(o[40]),d[30]=N(o[44]),d[31]=N(o[53]),d[32]=N(o[10]),d[33]=N(o[19]),d[34]=N(o[23]),d[35]=N(o[32]),d[36]=N(o[39]),d[37]=N(o[45]),d[38]=N(o[52]),d[39]=N(o[54]),d[40]=N(o[20]),d[41]=N(o[22]),d[42]=N(o[33]),d[43]=N(o[38]),d[44]=N(o[46]),d[45]=N(o[51]),d[46]=N(o[55]),d[47]=N(o[60]),d[48]=N(o[21]),d[49]=N(o[34]),d[50]=N(o[37]),d[51]=N(o[47]),d[52]=N(o[50]),d[53]=N(o[56]),d[54]=N(o[59]),d[55]=N(o[61]),d[56]=N(o[35]),d[57]=N(o[36]),d[58]=N(o[48]),d[59]=N(o[49]),d[60]=N(o[57]),d[61]=N(o[58]),d[62]=N(o[62]),d[63]=N(o[63])}function Ne(o){const d=.5*Math.cos(.7853975),v=.5*Math.cos(3.14159/16),S=.5*Math.cos(3.14159/8),U=.5*Math.cos(3*3.14159/16),P=.5*Math.cos(5*3.14159/16),O=.5*Math.cos(3*3.14159/8),V=.5*Math.cos(7*3.14159/16),H=new Array(4),G=new Array(4),B=new Array(4),ie=new Array(4);for(let le=0;le<8;++le){const ce=le*8;H[0]=S*o[ce+2],H[1]=O*o[ce+2],H[2]=S*o[ce+6],H[3]=O*o[ce+6],G[0]=v*o[ce+1]+U*o[ce+3]+P*o[ce+5]+V*o[ce+7],G[1]=U*o[ce+1]-V*o[ce+3]-v*o[ce+5]-P*o[ce+7],G[2]=P*o[ce+1]-v*o[ce+3]+V*o[ce+5]+U*o[ce+7],G[3]=V*o[ce+1]-P*o[ce+3]+U*o[ce+5]-v*o[ce+7],B[0]=d*(o[ce+0]+o[ce+4]),B[3]=d*(o[ce+0]-o[ce+4]),B[1]=H[0]+H[3],B[2]=H[1]-H[2],ie[0]=B[0]+B[1],ie[1]=B[3]+B[2],ie[2]=B[3]-B[2],ie[3]=B[0]-B[1],o[ce+0]=ie[0]+G[0],o[ce+1]=ie[1]+G[1],o[ce+2]=ie[2]+G[2],o[ce+3]=ie[3]+G[3],o[ce+4]=ie[3]-G[3],o[ce+5]=ie[2]-G[2],o[ce+6]=ie[1]-G[1],o[ce+7]=ie[0]-G[0]}for(let le=0;le<8;++le)H[0]=S*o[16+le],H[1]=O*o[16+le],H[2]=S*o[48+le],H[3]=O*o[48+le],G[0]=v*o[8+le]+U*o[24+le]+P*o[40+le]+V*o[56+le],G[1]=U*o[8+le]-V*o[24+le]-v*o[40+le]-P*o[56+le],G[2]=P*o[8+le]-v*o[24+le]+V*o[40+le]+U*o[56+le],G[3]=V*o[8+le]-P*o[24+le]+U*o[40+le]-v*o[56+le],B[0]=d*(o[le]+o[32+le]),B[3]=d*(o[le]-o[32+le]),B[1]=H[0]+H[3],B[2]=H[1]-H[2],ie[0]=B[0]+B[1],ie[1]=B[3]+B[2],ie[2]=B[3]-B[2],ie[3]=B[0]-B[1],o[0+le]=ie[0]+G[0],o[8+le]=ie[1]+G[1],o[16+le]=ie[2]+G[2],o[24+le]=ie[3]+G[3],o[32+le]=ie[3]-G[3],o[40+le]=ie[2]-G[2],o[48+le]=ie[1]-G[1],o[56+le]=ie[0]-G[0]}function w(o){for(let d=0;d<64;++d){const v=o[0][d],S=o[1][d],U=o[2][d];o[0][d]=v+1.5747*U,o[1][d]=v-.1873*S-.4682*U,o[2][d]=v+1.8556*S}}function M(o,d,v){for(let S=0;S<64;++S)d[v+S]=Pa.toHalfFloat(z(o[S]))}function z(o){return o<=1?Math.sign(o)*Math.pow(Math.abs(o),2.2):Math.sign(o)*Math.pow(he,Math.abs(o)-1)}function ee(o){return new DataView(o.array.buffer,o.offset.value,o.size)}function oe(o){const d=o.viewer.buffer.slice(o.offset.value,o.offset.value+o.size),v=new Uint8Array(qe(d)),S=new Uint8Array(v.length);return D(v),vt(v,S),new DataView(S.buffer)}function j(o){const d=o.array.slice(o.offset.value,o.offset.value+o.size),v=pr(d),S=new Uint8Array(v.length);return D(v),vt(v,S),new DataView(S.buffer)}function Re(o){const d=o.viewer,v={value:o.offset.value},S=new Uint16Array(o.columns*o.lines*(o.inputChannels.length*o.type)),U=new Uint8Array(8192);let P=0;const O=new Array(o.inputChannels.length);for(let ye=0,se=o.inputChannels.length;ye<se;ye++)O[ye]={},O[ye].start=P,O[ye].end=O[ye].start,O[ye].nx=o.columns,O[ye].ny=o.lines,O[ye].size=o.type,P+=O[ye].nx*O[ye].ny*O[ye].size;const V=te(d,v),H=te(d,v);if(H>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(V<=H)for(let ye=0;ye<H-V+1;ye++)U[ye+V]=Ue(d,v);const G=new Uint16Array(65536),B=x(U,G),ie=de(d,v);je(o.array,d,v,ie,S,P);for(let ye=0;ye<o.inputChannels.length;++ye){const se=O[ye];for(let J=0;J<O[ye].size;++J)Le(S,se.start+J,se.nx,se.size,se.ny,se.nx*se.size,B)}We(G,S,P);let le=0;const ce=new Uint8Array(S.buffer.byteLength);for(let ye=0;ye<o.lines;ye++)for(let se=0;se<o.inputChannels.length;se++){const J=O[se],be=J.nx*J.size,we=new Uint8Array(S.buffer,J.end*2,be*2);ce.set(we,le),le+=be*2,J.end+=be}return new DataView(ce.buffer)}function ve(o){const d=o.array.slice(o.offset.value,o.offset.value+o.size),v=pr(d),S=o.inputChannels.length*o.lines*o.columns*o.totalBytes,U=new ArrayBuffer(S),P=new DataView(U);let O=0,V=0;const H=new Array(4);for(let G=0;G<o.lines;G++)for(let B=0;B<o.inputChannels.length;B++){let ie=0;switch(o.inputChannels[B].pixelType){case 1:H[0]=O,H[1]=H[0]+o.columns,O=H[1]+o.columns;for(let ce=0;ce<o.columns;++ce){const ye=v[H[0]++]<<8|v[H[1]++];ie+=ye,P.setUint16(V,ie,!0),V+=2}break;case 2:H[0]=O,H[1]=H[0]+o.columns,H[2]=H[1]+o.columns,O=H[2]+o.columns;for(let ce=0;ce<o.columns;++ce){const ye=v[H[0]++]<<24|v[H[1]++]<<16|v[H[2]++]<<8;ie+=ye,P.setUint32(V,ie,!0),V+=4}break}}return P}function Ee(o){const d=o.viewer,v={value:o.offset.value},S=new Uint8Array(o.columns*o.lines*(o.inputChannels.length*o.type*2)),U={version:He(d,v),unknownUncompressedSize:He(d,v),unknownCompressedSize:He(d,v),acCompressedSize:He(d,v),dcCompressedSize:He(d,v),rleCompressedSize:He(d,v),rleUncompressedSize:He(d,v),rleRawSize:He(d,v),totalAcUncompressedCount:He(d,v),totalDcUncompressedCount:He(d,v),acCompression:He(d,v)};if(U.version<2)throw new Error("EXRLoader.parse: "+Qt.compression+" version "+U.version+" is unsupported");const P=new Array;let O=te(d,v)-2;for(;O>0;){const se=Ye(d.buffer,v),J=Ue(d,v),be=J>>2&3,we=(J>>4)-1,Je=new Int8Array([we])[0],ft=Ue(d,v);P.push({name:se,index:Je,type:ft,compression:be}),O-=se.length+3}const V=Qt.channels,H=new Array(o.inputChannels.length);for(let se=0;se<o.inputChannels.length;++se){const J=H[se]={},be=V[se];J.name=be.name,J.compression=0,J.decoded=!1,J.type=be.pixelType,J.pLinear=be.pLinear,J.width=o.columns,J.height=o.lines}const G={idx:new Array(3)};for(let se=0;se<o.inputChannels.length;++se){const J=H[se];for(let be=0;be<P.length;++be){const we=P[be];J.name==we.name&&(J.compression=we.compression,we.index>=0&&(G.idx[we.index]=se),J.offset=se)}}let B,ie,le;if(U.acCompressedSize>0)switch(U.acCompression){case 0:B=new Uint16Array(U.totalAcUncompressedCount),je(o.array,d,v,U.acCompressedSize,B,U.totalAcUncompressedCount);break;case 1:const se=o.array.slice(v.value,v.value+U.totalAcUncompressedCount),J=pr(se);B=new Uint16Array(J.buffer),v.value+=U.totalAcUncompressedCount;break}if(U.dcCompressedSize>0){const se={array:o.array,offset:v,size:U.dcCompressedSize};ie=new Uint16Array(j(se).buffer),v.value+=U.dcCompressedSize}if(U.rleRawSize>0){const se=o.array.slice(v.value,v.value+U.rleCompressedSize),J=pr(se);le=qe(J.buffer),v.value+=U.rleCompressedSize}let ce=0;const ye=new Array(H.length);for(let se=0;se<ye.length;++se)ye[se]=new Array;for(let se=0;se<o.lines;++se)for(let J=0;J<H.length;++J)ye[J].push(ce),ce+=H[J].width*o.type*2;Qe(G,ye,H,B,ie,S);for(let se=0;se<H.length;++se){const J=H[se];if(!J.decoded)switch(J.compression){case 2:let be=0,we=0;for(let Je=0;Je<o.lines;++Je){let ft=ye[se][be];for(let Ve=0;Ve<J.width;++Ve){for(let Ke=0;Ke<2*J.type;++Ke)S[ft++]=le[we+Ke*J.width*J.height];we++}be++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(S.buffer)}function Ye(o,d){const v=new Uint8Array(o);let S=0;for(;v[d.value+S]!=0;)S+=1;const U=new TextDecoder().decode(v.slice(d.value,d.value+S));return d.value=d.value+S+1,U}function fe(o,d,v){const S=new TextDecoder().decode(new Uint8Array(o).slice(d.value,d.value+v));return d.value=d.value+v,S}function Te(o,d){const v=Ce(o,d),S=de(o,d);return[v,S]}function Ie(o,d){const v=de(o,d),S=de(o,d);return[v,S]}function Ce(o,d){const v=o.getInt32(d.value,!0);return d.value=d.value+4,v}function de(o,d){const v=o.getUint32(d.value,!0);return d.value=d.value+4,v}function Ze(o,d){const v=o[d.value];return d.value=d.value+1,v}function Ue(o,d){const v=o.getUint8(d.value);return d.value=d.value+1,v}const He=function(o,d){let v;return"getBigInt64"in DataView.prototype?v=Number(o.getBigInt64(d.value,!0)):v=o.getUint32(d.value+4,!0)+Number(o.getUint32(d.value,!0)<<32),d.value+=8,v};function I(o,d){const v=o.getFloat32(d.value,!0);return d.value+=4,v}function Se(o,d){return Pa.toHalfFloat(I(o,d))}function N(o){const d=(o&31744)>>10,v=o&1023;return(o>>15?-1:1)*(d?d===31?v?NaN:1/0:Math.pow(2,d-15)*(1+v/1024):6103515625e-14*(v/1024))}function te(o,d){const v=o.getUint16(d.value,!0);return d.value+=2,v}function xe(o,d){return N(te(o,d))}function Me(o,d,v,S){const U=v.value,P=[];for(;v.value<U+S-1;){const O=Ye(d,v),V=Ce(o,v),H=Ue(o,v);v.value+=3;const G=Ce(o,v),B=Ce(o,v);P.push({name:O,pixelType:V,pLinear:H,xSampling:G,ySampling:B})}return v.value+=1,P}function $e(o,d){const v=I(o,d),S=I(o,d),U=I(o,d),P=I(o,d),O=I(o,d),V=I(o,d),H=I(o,d),G=I(o,d);return{redX:v,redY:S,greenX:U,greenY:P,blueX:O,blueY:V,whiteX:H,whiteY:G}}function lt(o,d){const v=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],S=Ue(o,d);return v[S]}function xt(o,d){const v=Ce(o,d),S=Ce(o,d),U=Ce(o,d),P=Ce(o,d);return{xMin:v,yMin:S,xMax:U,yMax:P}}function et(o,d){const v=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],S=Ue(o,d);return v[S]}function St(o,d){const v=["ENVMAP_LATLONG","ENVMAP_CUBE"],S=Ue(o,d);return v[S]}function Ot(o,d){const v=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],S=["ROUND_DOWN","ROUND_UP"],U=de(o,d),P=de(o,d),O=Ue(o,d);return{xSize:U,ySize:P,levelMode:v[O&15],roundingMode:S[O>>4]}}function zi(o,d){const v=I(o,d),S=I(o,d);return[v,S]}function Hi(o,d){const v=I(o,d),S=I(o,d),U=I(o,d);return[v,S,U]}function jt(o,d,v,S,U){if(S==="string"||S==="stringvector"||S==="iccProfile")return fe(d,v,U);if(S==="chlist")return Me(o,d,v,U);if(S==="chromaticities")return $e(o,v);if(S==="compression")return lt(o,v);if(S==="box2i")return xt(o,v);if(S==="envmap")return St(o,v);if(S==="tiledesc")return Ot(o,v);if(S==="lineOrder")return et(o,v);if(S==="float")return I(o,v);if(S==="v2f")return zi(o,v);if(S==="v3f")return Hi(o,v);if(S==="int")return Ce(o,v);if(S==="rational")return Te(o,v);if(S==="timecode")return Ie(o,v);if(S==="preview")return v.value+=U,"skipped";v.value+=U}function xi(o,d){const v=Math.log2(o);return d=="ROUND_DOWN"?Math.floor(v):Math.ceil(v)}function Gi(o,d,v){let S=0;switch(o.levelMode){case"ONE_LEVEL":S=1;break;case"MIPMAP_LEVELS":S=xi(Math.max(d,v),o.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return S}function Si(o,d,v,S){const U=new Array(o);for(let P=0;P<o;P++){const O=1<<P;let V=d/O|0;S=="ROUND_UP"&&V*O<d&&(V+=1);const H=Math.max(V,1);U[P]=(H+v-1)/v|0}return U}function Vn(){const o=this,d=o.offset,v={value:0};for(let S=0;S<o.tileCount;S++){const U=Ce(o.viewer,d),P=Ce(o.viewer,d);d.value+=8,o.size=de(o.viewer,d);const O=U*o.blockWidth,V=P*o.blockHeight;o.columns=O+o.blockWidth>o.width?o.width-O:o.blockWidth,o.lines=V+o.blockHeight>o.height?o.height-V:o.blockHeight;const H=o.columns*o.totalBytes,B=o.size<o.lines*H?o.uncompress(o):ee(o);d.value+=o.size;for(let ie=0;ie<o.lines;ie++){const le=ie*o.columns*o.totalBytes;for(let ce=0;ce<o.inputChannels.length;ce++){const ye=Qt.channels[ce].name,se=o.channelByteOffsets[ye]*o.columns,J=o.decodeChannels[ye];if(J===void 0)continue;v.value=le+se;const be=(o.height-(1+V+ie))*o.outLineWidth;for(let we=0;we<o.columns;we++){const Je=be+(we+O)*o.outputChannels+J;o.byteArray[Je]=o.getter(B,v)}}}}}function ki(){const o=this,d=o.offset,v={value:0};for(let S=0;S<o.height/o.blockHeight;S++){const U=Ce(o.viewer,d)-Qt.dataWindow.yMin;o.size=de(o.viewer,d),o.lines=U+o.blockHeight>o.height?o.height-U:o.blockHeight;const P=o.columns*o.totalBytes,V=o.size<o.lines*P?o.uncompress(o):ee(o);d.value+=o.size;for(let H=0;H<o.blockHeight;H++){const G=S*o.blockHeight,B=H+o.scanOrder(G);if(B>=o.height)continue;const ie=H*P,le=(o.height-1-B)*o.outLineWidth;for(let ce=0;ce<o.inputChannels.length;ce++){const ye=Qt.channels[ce].name,se=o.channelByteOffsets[ye]*o.columns,J=o.decodeChannels[ye];if(J!==void 0){v.value=ie+se;for(let be=0;be<o.columns;be++){const we=le+be*o.outputChannels+J;o.byteArray[we]=o.getter(V,v)}}}}}}function Wn(o,d,v){const S={};if(o.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");S.version=o.getUint8(4);const U=o.getUint8(5);S.spec={singleTile:!!(U&2),longName:!!(U&4),deepFormat:!!(U&8),multiPart:!!(U&16)},v.value=8;let P=!0;for(;P;){const O=Ye(d,v);if(O==0)P=!1;else{const V=Ye(d,v),H=de(o,v),G=jt(o,d,v,V,H);G===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${V}'.`):S[O]=G}}if(U&-7)throw console.error("THREE.EXRHeader:",S),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return S}function Vi(o,d,v,S,U){const P={size:0,viewer:d,array:v,offset:S,width:o.dataWindow.xMax-o.dataWindow.xMin+1,height:o.dataWindow.yMax-o.dataWindow.yMin+1,inputChannels:o.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Jt};switch(o.compression){case"NO_COMPRESSION":P.blockHeight=1,P.uncompress=ee;break;case"RLE_COMPRESSION":P.blockHeight=1,P.uncompress=oe;break;case"ZIPS_COMPRESSION":P.blockHeight=1,P.uncompress=j;break;case"ZIP_COMPRESSION":P.blockHeight=16,P.uncompress=j;break;case"PIZ_COMPRESSION":P.blockHeight=32,P.uncompress=Re;break;case"PXR24_COMPRESSION":P.blockHeight=16,P.uncompress=ve;break;case"DWAA_COMPRESSION":P.blockHeight=32,P.uncompress=Ee;break;case"DWAB_COMPRESSION":P.blockHeight=256,P.uncompress=Ee;break;default:throw new Error("EXRLoader.parse: "+o.compression+" is unsupported")}const O={};for(const B of o.channels)switch(B.name){case"Y":case"R":case"G":case"B":case"A":O[B.name]=!0,P.type=B.pixelType}let V=!1;if(O.R&&O.G&&O.B)V=!O.A,P.outputChannels=4,P.decodeChannels={R:0,G:1,B:2,A:3};else if(O.Y)P.outputChannels=1,P.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(P.type==1)switch(U){case Nt:P.getter=xe;break;case fn:P.getter=te;break}else if(P.type==2)switch(U){case Nt:P.getter=I;break;case fn:P.getter=Se}else throw new Error("EXRLoader.parse: unsupported pixelType "+P.type+" for "+o.compression+".");P.columns=P.width;const H=P.width*P.height*P.outputChannels;switch(U){case Nt:P.byteArray=new Float32Array(H),V&&P.byteArray.fill(1,0,H);break;case fn:P.byteArray=new Uint16Array(H),V&&P.byteArray.fill(15360,0,H);break;default:console.error("THREE.EXRLoader: unsupported type: ",U);break}let G=0;for(const B of o.channels)P.decodeChannels[B.name]!==void 0&&(P.channelByteOffsets[B.name]=G),G+=B.pixelType*2;if(P.totalBytes=G,P.outLineWidth=P.width*P.outputChannels,o.lineOrder==="INCREASING_Y"?P.scanOrder=B=>B:P.scanOrder=B=>P.height-1-B,P.outputChannels==4?(P.format=Ft,P.colorSpace=Jt):(P.format=ia,P.colorSpace=cn),o.spec.singleTile){P.blockHeight=o.tiles.ySize,P.blockWidth=o.tiles.xSize;const B=Gi(o.tiles,P.width,P.height),ie=Si(B,P.width,o.tiles.xSize,o.tiles.roundingMode),le=Si(B,P.height,o.tiles.ySize,o.tiles.roundingMode);P.tileCount=ie[0]*le[0];for(let ce=0;ce<B;ce++)for(let ye=0;ye<le[ce];ye++)for(let se=0;se<ie[ce];se++)He(d,S);P.decode=Vn.bind(P)}else{P.blockWidth=P.width;const B=Math.ceil(P.height/P.blockHeight);for(let ie=0;ie<B;ie++)He(d,S);P.decode=ki.bind(P)}return P}const Mi={value:0},Wi=new DataView(e),Lr=new Uint8Array(e),Qt=Wn(Wi,e,Mi),E=Vi(Qt,Wi,Lr,Mi,this.type);return E.decode(),{header:Qt,width:E.width,height:E.height,data:E.byteArray,format:E.format,colorSpace:E.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(a,l){a.colorSpace=l.colorSpace,a.minFilter=yt,a.magFilter=yt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,l)}return super.load(e,s,n,r)}}const Rp=document.querySelector("#mycanvas"),_i=new np({canvas:Rp});_i.setPixelRatio(window.devicePixelRatio);_i.setSize(window.innerWidth,window.innerHeight);const Yo=new ip,Zo=new Io,Cp=new Fi(2,2),Pp=new Ho().load("/src/img/disk_texture_noisy.png"),Lp=new wp().load("/src/img/black_hole_uv6b.exr"),Up=new Ho().load("/src/img/stars_distort.png"),Dp=new _n({vertexShader:document.getElementById("vertexShader").textContent,fragmentShader:document.getElementById("fragmentShader").textContent,uniforms:{accretion_disk:{type:"t",value:Pp},grav_lens:{type:"t",value:Lp},stars:{type:"t",value:Up},time:{value:0},aspect:{value:window.innerWidth/window.innerHeight}}}),ua=new Kt(Cp,Dp);Yo.add(ua);Zo.position.z=5;const Ip=new hp;function Np(){ua.material.uniforms.time.value+=Ip.getDelta(),_i.render(Yo,Zo)}_i.setAnimationLoop(Np);function Fp(){_i.setPixelRatio(window.devicePixelRatio),_i.setSize(window.innerWidth,window.innerHeight),ua.material.uniforms.aspect.value=window.innerWidth/window.innerHeight}window.addEventListener("resize",Fp,!1);
