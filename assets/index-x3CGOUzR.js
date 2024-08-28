(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="167",Oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wh=0,Ul=1,Xh=2,iu=1,Yh=2,Pn=3,ni=0,Ue=1,In=2,Jn=0,ar=1,Nl=2,Ol=3,Fl=4,qh=5,xi=100,Kh=101,jh=102,Zh=103,$h=104,Jh=200,Qh=201,tf=202,ef=203,Qa=204,to=205,nf=206,rf=207,sf=208,af=209,of=210,lf=211,cf=212,uf=213,hf=214,ff=0,df=1,pf=2,Gs=3,mf=4,_f=5,gf=6,vf=7,ru=0,xf=1,Mf=2,Qn=0,Sf=1,yf=2,Ef=3,Tf=4,bf=5,Af=6,wf=7,su=300,pr=301,mr=302,eo=303,no=304,na=306,io=1e3,Si=1001,ro=1002,tn=1003,Rf=1004,os=1005,un=1006,ma=1007,yi=1008,On=1009,au=1010,ou=1011,Xr=1012,Zo=1013,Ri=1014,Un=1015,es=1016,$o=1017,Jo=1018,_r=1020,lu=35902,cu=1021,uu=1022,hn=1023,hu=1024,fu=1025,or=1026,gr=1027,du=1028,Qo=1029,pu=1030,tl=1031,el=1033,Us=33776,Ns=33777,Os=33778,Fs=33779,so=35840,ao=35841,oo=35842,lo=35843,co=36196,uo=37492,ho=37496,fo=37808,po=37809,mo=37810,_o=37811,go=37812,vo=37813,xo=37814,Mo=37815,So=37816,yo=37817,Eo=37818,To=37819,bo=37820,Ao=37821,Bs=36492,wo=36494,Ro=36495,mu=36283,Co=36284,Po=36285,Lo=36286,Cf=3200,Pf=3201,_u=0,Lf=1,Kn="",fn="srgb",ai="srgb-linear",nl="display-p3",ia="display-p3-linear",Ws="linear",$t="srgb",Xs="rec709",Ys="p3",Bi=7680,Bl=519,Df=512,If=513,Uf=514,gu=515,Nf=516,Of=517,Ff=518,Bf=519,zl=35044,kl="300 es",Nn=2e3,qs=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hl=1234567;const zr=Math.PI/180,Yr=180/Math.PI;function Tr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[r&255]+Te[r>>8&255]+Te[r>>16&255]+Te[r>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ae(r,t,e){return Math.max(t,Math.min(e,r))}function il(r,t){return(r%t+t)%t}function zf(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function kf(r,t,e){return r!==t?(e-r)/(t-r):0}function kr(r,t,e){return(1-e)*r+e*t}function Hf(r,t,e,n){return kr(r,t,1-Math.exp(-e*n))}function Vf(r,t=1){return t-Math.abs(il(r,t*2)-t)}function Gf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Wf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Xf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Yf(r,t){return r+Math.random()*(t-r)}function qf(r){return r*(.5-Math.random())}function Kf(r){r!==void 0&&(Hl=r);let t=Hl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jf(r){return r*zr}function Zf(r){return r*Yr}function $f(r){return(r&r-1)===0&&r!==0}function Jf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Qf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function td(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),f=a((t-n)/2),m=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*m,o*c);break;case"YXY":r.set(l*m,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function nr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ed={DEG2RAD:zr,RAD2DEG:Yr,generateUUID:Tr,clamp:Ae,euclideanModulo:il,mapLinear:zf,inverseLerp:kf,lerp:kr,damp:Hf,pingpong:Vf,smoothstep:Gf,smootherstep:Wf,randInt:Xf,randFloat:Yf,randFloatSpread:qf,seededRandom:Kf,degToRad:jf,radToDeg:Zf,isPowerOfTwo:$f,ceilPowerOfTwo:Jf,floorPowerOfTwo:Qf,setQuaternionFromProperEuler:td,normalize:Pe,denormalize:nr};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,s,a,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],d=i[6],E=i[1],x=i[4],b=i[7],R=i[2],w=i[5],A=i[8];return s[0]=a*_+o*E+l*R,s[3]=a*p+o*x+l*w,s[6]=a*d+o*b+l*A,s[1]=c*_+u*E+h*R,s[4]=c*p+u*x+h*w,s[7]=c*d+u*b+h*A,s[2]=f*_+m*E+g*R,s[5]=f*p+m*x+g*w,s[8]=f*d+m*b+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(_a.makeScale(t,e)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new Nt;function vu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ks(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function nd(){const r=Ks("canvas");return r.style.display="block",r}const Vl={};function Hr(r){r in Vl||(Vl[r]=!0,console.warn(r))}function id(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Gl=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wl=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cr={[ai]:{transfer:Ws,primaries:Xs,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[fn]:{transfer:$t,primaries:Xs,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ia]:{transfer:Ws,primaries:Ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Wl),fromReference:r=>r.applyMatrix3(Gl)},[nl]:{transfer:$t,primaries:Ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Wl),fromReference:r=>r.applyMatrix3(Gl).convertLinearToSRGB()}},rd=new Set([ai,ia]),qt={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!rd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Cr[t].toReference,i=Cr[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Cr[r].primaries},getTransfer:function(r){return r===Kn?Ws:Cr[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(Cr[t].luminanceCoefficients)}};function lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ga(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zi;class sd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=Ks("canvas")),zi.width=t.width,zi.height=t.height;const n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=lr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(lr(e[n]/255)*255):e[n]=lr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ad=0;class xu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Tr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(va(i[a].image)):s.push(va(i[a]))}else s=va(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function va(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let od=0;class Ne extends Ii{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Si,i=Si,s=un,a=yi,o=hn,l=On,c=Ne.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Tr(),this.name="",this.source=new xu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case io:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case io:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=su;Ne.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,i=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,b=(m+1)/2,R=(d+1)/2,w=(u+f)/4,A=(h+_)/4,P=(g+p)/4;return x>b&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=A/n):b>R?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=w/i,s=P/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=A/s,i=P/s),this.set(n,i,s,e),this}let E=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ld extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends ld{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mu extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cd extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let p=1-o;const d=l*f+c*m+u*g+h*_,E=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const R=Math.sqrt(x),w=Math.atan2(R,d*E);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R}const b=o*E;if(l=l*p+f*b,c=c*p+m*b,u=u*p+g*b,h=h*p+_*b,p===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*m-c*f,t[e+1]=l*g+u*f+c*h-o*m,t[e+2]=c*g+u*m+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new U,Xl=new Pi;class ns{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(s,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(t.matrixWorld),this.union(ls)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),cs.subVectors(this.max,Pr),ki.subVectors(t.a,Pr),Hi.subVectors(t.b,Pr),Vi.subVectors(t.c,Pr),Hn.subVectors(Hi,ki),Vn.subVectors(Vi,Hi),ci.subVectors(ki,Vi);let e=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ci.z,ci.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ci.z,0,-ci.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ci.y,ci.x,0];return!Ma(e,ki,Hi,Vi,cs)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,ki,Hi,Vi,cs))?!1:(us.crossVectors(Hn,Vn),e=[us.x,us.y,us.z],Ma(e,ki,Hi,Vi,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new U,new U,new U,new U,new U,new U,new U,new U],on=new U,ls=new ns,ki=new U,Hi=new U,Vi=new U,Hn=new U,Vn=new U,ci=new U,Pr=new U,cs=new U,us=new U,ui=new U;function Ma(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ui.fromArray(r,s);const o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ud=new ns,Lr=new U,Sa=new U;class ra{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ud.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);const e=Lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Lr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(Sa)),this.expandByPoint(Lr.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new U,ya=new U,hs=new U,Gn=new U,Ea=new U,fs=new U,Ta=new U;class rl{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ya.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(ya);const s=t.distanceTo(e)*.5,a=-this.direction.dot(hs),o=Gn.dot(this.direction),l=-Gn.dot(hs),c=Gn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ya).addScaledVector(hs,f),m}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,i,s){Ea.subVectors(e,t),fs.subVectors(n,t),Ta.crossVectors(Ea,fs);let a=this.direction.dot(Ta),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);const l=o*this.direction.dot(fs.crossVectors(Gn,fs));if(l<0)return null;const c=o*this.direction.dot(Ea.cross(Gn));if(c<0||l+c>a)return null;const u=-o*Gn.dot(Ta);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,s,a,o,l,c,u,h,f,m,g,_,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,f,m,g,_,p)}set(t,e,n,i,s,a,o,l,c,u,h,f,m,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Gi.setFromMatrixColumn(t,0).length(),s=1/Gi.setFromMatrixColumn(t,1).length(),a=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hd,t,fd)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Wn.crossVectors(n,Ge),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Wn.crossVectors(n,Ge)),Wn.normalize(),ds.crossVectors(Ge,Wn),i[0]=Wn.x,i[4]=ds.x,i[8]=Ge.x,i[1]=Wn.y,i[5]=ds.y,i[9]=Ge.y,i[2]=Wn.z,i[6]=ds.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],E=n[3],x=n[7],b=n[11],R=n[15],w=i[0],A=i[4],P=i[8],M=i[12],y=i[1],L=i[5],z=i[9],O=i[13],j=i[2],Y=i[6],G=i[10],K=i[14],W=i[3],it=i[7],at=i[11],ut=i[15];return s[0]=a*w+o*y+l*j+c*W,s[4]=a*A+o*L+l*Y+c*it,s[8]=a*P+o*z+l*G+c*at,s[12]=a*M+o*O+l*K+c*ut,s[1]=u*w+h*y+f*j+m*W,s[5]=u*A+h*L+f*Y+m*it,s[9]=u*P+h*z+f*G+m*at,s[13]=u*M+h*O+f*K+m*ut,s[2]=g*w+_*y+p*j+d*W,s[6]=g*A+_*L+p*Y+d*it,s[10]=g*P+_*z+p*G+d*at,s[14]=g*M+_*O+p*K+d*ut,s[3]=E*w+x*y+b*j+R*W,s[7]=E*A+x*L+b*Y+R*it,s[11]=E*P+x*z+b*G+R*at,s[15]=E*M+x*O+b*K+R*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*m-n*l*m)+_*(+e*l*m-e*c*f+s*a*f-i*a*m+i*c*u-s*l*u)+p*(+e*c*h-e*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+d*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],E=h*p*c-_*f*c+_*l*m-o*p*m-h*l*d+o*f*d,x=g*f*c-u*p*c-g*l*m+a*p*m+u*l*d-a*f*d,b=u*_*c-g*h*c+g*o*m-a*_*m-u*o*d+a*h*d,R=g*h*l-u*_*l-g*o*f+a*_*f+u*o*p-a*h*p,w=e*E+n*x+i*b+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=E*A,t[1]=(_*f*s-h*p*s-_*i*m+n*p*m+h*i*d-n*f*d)*A,t[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*d+n*l*d)*A,t[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*m-n*l*m)*A,t[4]=x*A,t[5]=(u*p*s-g*f*s+g*i*m-e*p*m-u*i*d+e*f*d)*A,t[6]=(g*l*s-a*p*s-g*i*c+e*p*c+a*i*d-e*l*d)*A,t[7]=(a*f*s-u*l*s+u*i*c-e*f*c-a*i*m+e*l*m)*A,t[8]=b*A,t[9]=(g*h*s-u*_*s-g*n*m+e*_*m+u*n*d-e*h*d)*A,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*d+e*o*d)*A,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*m-e*o*m)*A,t[12]=R*A,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*p+e*h*p)*A,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*A,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,g=s*h,_=a*u,p=a*h,d=o*h,E=l*c,x=l*u,b=l*h,R=n.x,w=n.y,A=n.z;return i[0]=(1-(_+d))*R,i[1]=(m+b)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(m-b)*w,i[5]=(1-(f+d))*w,i[6]=(p+E)*w,i[7]=0,i[8]=(g+x)*A,i[9]=(p-E)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Gi.set(i[0],i[1],i[2]).length();const a=Gi.set(i[4],i[5],i[6]).length(),o=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ln.copy(this);const c=1/s,u=1/a,h=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,e.setFromRotationMatrix(ln),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Nn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(o===Nn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===qs)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Nn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),f=(e+t)*c,m=(n+i)*u;let g,_;if(o===Nn)g=(a+s)*h,_=-2*h;else if(o===qs)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gi=new U,ln=new ie,hd=new U(0,0,0),fd=new U(1,1,1),Wn=new U,ds=new U,Ge=new U,Yl=new ie,ql=new Pi;class Sn{constructor(t=0,e=0,n=0,i=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Su{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dd=0;const Kl=new U,Wi=new Pi,wn=new ie,ps=new U,Dr=new U,pd=new U,md=new Pi,jl=new U(1,0,0),Zl=new U(0,1,0),$l=new U(0,0,1),Jl={type:"added"},_d={type:"removed"},Xi={type:"childadded",child:null},ba={type:"childremoved",child:null};class Ie extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new U,e=new Sn,n=new Pi,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Nt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(jl,t)}rotateY(t){return this.rotateOnAxis(Zl,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,e){return Kl.copy(t).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jl,t)}translateY(t){return this.translateOnAxis(Zl,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ps.copy(t):ps.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Dr,ps,this.up):wn.lookAt(ps,Dr,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(wn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_d),ba.child=t,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ie.DEFAULT_UP=new U(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new U,Rn=new U,Aa=new U,Cn=new U,Yi=new U,qi=new U,Ql=new U,wa=new U,Ra=new U,Ca=new U;class mn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),cn.subVectors(t,e),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){cn.subVectors(i,e),Rn.subVectors(n,e),Aa.subVectors(t,e);const a=cn.dot(cn),o=cn.dot(Rn),l=cn.dot(Aa),c=Rn.dot(Rn),u=Rn.dot(Aa),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static isFrontFacing(t,e,n,i){return cn.subVectors(n,e),Rn.subVectors(t,e),cn.cross(Rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),cn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Yi.subVectors(i,n),qi.subVectors(s,n),wa.subVectors(t,n);const l=Yi.dot(wa),c=qi.dot(wa);if(l<=0&&c<=0)return e.copy(n);Ra.subVectors(t,i);const u=Yi.dot(Ra),h=qi.dot(Ra);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Yi,a);Ca.subVectors(t,s);const m=Yi.dot(Ca),g=qi.dot(Ca);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(qi,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Ql.subVectors(s,i),o=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(Ql,o);const d=1/(p+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Yi,a).addScaledVector(qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Pa(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=il(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Pa(a,s,t+1/3),this.g=Pa(a,s,t),this.b=Pa(a,s,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}copyLinearToSRGB(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return qt.fromWorkingColorSpace(be.copy(this),t),Math.round(Ae(be.r*255,0,255))*65536+Math.round(Ae(be.g*255,0,255))*256+Math.round(Ae(be.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,s=be.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=fn){qt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(ms);const n=kr(Xn.h,ms.h,e),i=kr(Xn.s,ms.s,e),s=kr(Xn.l,ms.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new kt;kt.NAMES=yu;let gd=0;class br extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=ar,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=to,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qa&&(n.blendSrc=this.blendSrc),this.blendDst!==to&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Eu extends br{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new U,_s=new Rt;class xn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Hr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_s.fromBufferAttribute(this,e),_s.applyMatrix3(t),this.setXY(e,_s.x,_s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zl&&(t.usage=this.usage),t}}class Tu extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bu extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class rn extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vd=0;const Je=new ie,La=new Ie,Ki=new U,We=new ns,Ir=new ns,xe=new U;class En extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vu(t)?bu:Tu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];We.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(We.min,Ir.min),We.expandByPoint(xe),xe.addVectors(We.max,Ir.max),We.expandByPoint(xe)):(We.expandByPoint(Ir.min),We.expandByPoint(Ir.max))}We.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)xe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xe.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(t,c),xe.add(Ki)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new U,l[P]=new U;const c=new U,u=new U,h=new U,f=new Rt,m=new Rt,g=new Rt,_=new U,p=new U;function d(P,M,y){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(L),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(L),o[P].add(_),o[M].add(_),o[y].add(_),l[P].add(p),l[M].add(p),l[y].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,M=E.length;P<M;++P){const y=E[P],L=y.start,z=y.count;for(let O=L,j=L+z;O<j;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new U,b=new U,R=new U,w=new U;function A(P){R.fromBufferAttribute(i,P),w.copy(R);const M=o[P];x.copy(M),x.sub(R.multiplyScalar(R.dot(M))).normalize(),b.crossVectors(w,M);const L=b.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,L)}for(let P=0,M=E.length;P<M;++P){const y=E[P],L=y.start,z=y.count;for(let O=L,j=L+z;O<j;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[m++]}return new xn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new En,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tc=new ie,hi=new rl,gs=new ra,ec=new U,ji=new U,Zi=new U,$i=new U,Da=new U,vs=new U,xs=new Rt,Ms=new Rt,Ss=new Rt,nc=new U,ic=new U,rc=new U,ys=new U,Es=new U;class gn extends Ie{constructor(t=new En,e=new Eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Da.fromBufferAttribute(h,t),a?vs.addScaledVector(Da,u):vs.addScaledVector(Da.sub(e),u))}e.add(vs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(s),hi.copy(t.ray).recast(t.near),!(gs.containsPoint(hi.origin)===!1&&(hi.intersectSphere(gs,ec)===null||hi.origin.distanceToSquared(ec)>(t.far-t.near)**2))&&(tc.copy(s).invert(),hi.copy(t.ray).applyMatrix4(tc),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,R=x;b<R;b+=3){const w=o.getX(b),A=o.getX(b+1),P=o.getX(b+2);i=Ts(this,d,t,n,c,u,h,w,A,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const E=o.getX(p),x=o.getX(p+1),b=o.getX(p+2);i=Ts(this,a,t,n,c,u,h,E,x,b),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,R=x;b<R;b+=3){const w=b,A=b+1,P=b+2;i=Ts(this,d,t,n,c,u,h,w,A,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const E=p,x=p+1,b=p+2;i=Ts(this,a,t,n,c,u,h,E,x,b),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function xd(r,t,e,n,i,s,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===ni,o),l===null)return null;Es.copy(o),Es.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Es);return c<e.near||c>e.far?null:{distance:c,point:Es.clone(),object:r}}function Ts(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,ji),r.getVertexPosition(l,Zi),r.getVertexPosition(c,$i);const u=xd(r,t,e,n,ji,Zi,$i,ys);if(u){i&&(xs.fromBufferAttribute(i,o),Ms.fromBufferAttribute(i,l),Ss.fromBufferAttribute(i,c),u.uv=mn.getInterpolation(ys,ji,Zi,$i,xs,Ms,Ss,new Rt)),s&&(xs.fromBufferAttribute(s,o),Ms.fromBufferAttribute(s,l),Ss.fromBufferAttribute(s,c),u.uv1=mn.getInterpolation(ys,ji,Zi,$i,xs,Ms,Ss,new Rt)),a&&(nc.fromBufferAttribute(a,o),ic.fromBufferAttribute(a,l),rc.fromBufferAttribute(a,c),u.normal=mn.getInterpolation(ys,ji,Zi,$i,nc,ic,rc,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};mn.getNormal(ji,Zi,$i,h.normal),u.face=h}return u}class is extends En{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(h,2));function g(_,p,d,E,x,b,R,w,A,P,M){const y=b/A,L=R/P,z=b/2,O=R/2,j=w/2,Y=A+1,G=P+1;let K=0,W=0;const it=new U;for(let at=0;at<G;at++){const ut=at*L-O;for(let Ct=0;Ct<Y;Ct++){const zt=Ct*y-z;it[_]=zt*E,it[p]=ut*x,it[d]=j,c.push(it.x,it.y,it.z),it[_]=0,it[p]=0,it[d]=w>0?1:-1,u.push(it.x,it.y,it.z),h.push(Ct/A),h.push(1-at/P),K+=1}}for(let at=0;at<P;at++)for(let ut=0;ut<A;ut++){const Ct=f+ut+Y*at,zt=f+ut+Y*(at+1),q=f+(ut+1)+Y*(at+1),J=f+(ut+1)+Y*at;l.push(Ct,zt,J),l.push(zt,q,J),W+=6}o.addGroup(m,W,M),m+=W,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Le(r){const t={};for(let e=0;e<r.length;e++){const n=vr(r[e]);for(const i in n)t[i]=n[i]}return t}function Md(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Au(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Sd={clone:vr,merge:Le};var yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends br{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yd,this.fragmentShader=Ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vr(t.uniforms),this.uniformsGroups=Md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wu extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new U,sc=new Rt,ac=new Rt;class Ye extends wu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,sc,ac),e.subVectors(ac,sc)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Td extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ye(Ji,Qi,t,e);i.layers=this.layers,this.add(i);const s=new Ye(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const a=new Ye(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new Ye(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const l=new Ye(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new Ye(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ru extends Ne{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:pr,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bd extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ru(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new is(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Jn});s.uniforms.tEquirect.value=e;const a=new gn(i,s),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=un),new Td(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Ia=new U,Ad=new U,wd=new Nt;class qn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ia.subVectors(n,e).cross(Ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wd.getNormalMatrix(t),i=this.coplanarPoint(Ia).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new ra,bs=new U;class sl{constructor(t=new qn,e=new qn,n=new qn,i=new qn,s=new qn,a=new qn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],d=i[12],E=i[13],x=i[14],b=i[15];if(n[0].setComponents(l-s,f-c,p-m,b-d).normalize(),n[1].setComponents(l+s,f+c,p+m,b+d).normalize(),n[2].setComponents(l+a,f+u,p+g,b+E).normalize(),n[3].setComponents(l-a,f-u,p-g,b-E).normalize(),n[4].setComponents(l-o,f-h,p-_,b-x).normalize(),e===Nn)n[5].setComponents(l+o,f+h,p+_,b+x).normalize();else if(e===qs)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(bs.x=i.normal.x>0?t.max.x:t.min.x,bs.y=i.normal.y>0?t.max.y:t.min.y,bs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cu(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Rd(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,o),h.count===-1&&f.length===0&&r.bufferSubData(c,0,u),f.length!==0){for(let m=0,g=f.length;m<g;m++){const _=f[m];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class sa extends En{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const E=d*f-a;for(let x=0;x<c;x++){const b=x*h-s;g.push(b,-E,0),_.push(0,0,1),p.push(x/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const x=E+c*d,b=E+c*(d+1),R=E+1+c*(d+1),w=E+1+c*d;m.push(x,b,w),m.push(b,R,w)}this.setIndex(m),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pd=`#ifdef USE_ALPHAHASH
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
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nd=`#ifdef USE_AOMAP
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
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fd=`#ifdef USE_BATCHING
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
#endif`,Bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vd=`#ifdef USE_IRIDESCENCE
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
#endif`,Gd=`#ifdef USE_BUMPMAP
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jd=`#define PI 3.141592653589793
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
} // validated`,Qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tp=`vec3 transformedNormal = objectNormal;
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
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`
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
}`,op=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_p=`#ifdef USE_GRADIENTMAP
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
}`,gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
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
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
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
#endif`,wp=`struct PhysicalMaterial {
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
}`,Rp=`
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bp=`#if defined( USE_POINTS_UV )
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
#endif`,zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dm=`float getShadowMask() {
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
}`,pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sm=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
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
}`,Nm=`#if DEPTH_PACKING == 3200
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
}`,Om=`#define DISTANCE
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
}`,Fm=`#define DISTANCE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`uniform float scale;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#define LAMBERT
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
}`,Xm=`#define LAMBERT
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
}`,Ym=`#define MATCAP
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
}`,qm=`#define MATCAP
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
}`,Km=`#define NORMAL
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
}`,jm=`#define NORMAL
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
}`,Zm=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,Jm=`#define STANDARD
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
}`,Qm=`#define STANDARD
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
}`,t_=`#define TOON
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
}`,e_=`#define TOON
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
}`,n_=`uniform float size;
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
}`,i_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,s_=`uniform vec3 color;
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
}`,a_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,o_=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Cd,alphahash_pars_fragment:Pd,alphamap_fragment:Ld,alphamap_pars_fragment:Dd,alphatest_fragment:Id,alphatest_pars_fragment:Ud,aomap_fragment:Nd,aomap_pars_fragment:Od,batching_pars_vertex:Fd,batching_vertex:Bd,begin_vertex:zd,beginnormal_vertex:kd,bsdfs:Hd,iridescence_fragment:Vd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:qd,color_fragment:Kd,color_pars_fragment:jd,color_pars_vertex:Zd,color_vertex:$d,common:Jd,cube_uv_reflection_fragment:Qd,defaultnormal_vertex:tp,displacementmap_pars_vertex:ep,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:rp,colorspace_fragment:sp,colorspace_pars_fragment:ap,envmap_fragment:op,envmap_common_pars_fragment:lp,envmap_pars_fragment:cp,envmap_pars_vertex:up,envmap_physical_pars_fragment:Sp,envmap_vertex:hp,fog_vertex:fp,fog_pars_vertex:dp,fog_fragment:pp,fog_pars_fragment:mp,gradientmap_pars_fragment:_p,lightmap_pars_fragment:gp,lights_lambert_fragment:vp,lights_lambert_pars_fragment:xp,lights_pars_begin:Mp,lights_toon_fragment:yp,lights_toon_pars_fragment:Ep,lights_phong_fragment:Tp,lights_phong_pars_fragment:bp,lights_physical_fragment:Ap,lights_physical_pars_fragment:wp,lights_fragment_begin:Rp,lights_fragment_maps:Cp,lights_fragment_end:Pp,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Dp,logdepthbuf_pars_vertex:Ip,logdepthbuf_vertex:Up,map_fragment:Np,map_pars_fragment:Op,map_particle_fragment:Fp,map_particle_pars_fragment:Bp,metalnessmap_fragment:zp,metalnessmap_pars_fragment:kp,morphinstance_vertex:Hp,morphcolor_vertex:Vp,morphnormal_vertex:Gp,morphtarget_pars_vertex:Wp,morphtarget_vertex:Xp,normal_fragment_begin:Yp,normal_fragment_maps:qp,normal_pars_fragment:Kp,normal_pars_vertex:jp,normal_vertex:Zp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:tm,iridescence_pars_fragment:em,opaque_fragment:nm,packing:im,premultiplied_alpha_fragment:rm,project_vertex:sm,dithering_fragment:am,dithering_pars_fragment:om,roughnessmap_fragment:lm,roughnessmap_pars_fragment:cm,shadowmap_pars_fragment:um,shadowmap_pars_vertex:hm,shadowmap_vertex:fm,shadowmask_pars_fragment:dm,skinbase_vertex:pm,skinning_pars_vertex:mm,skinning_vertex:_m,skinnormal_vertex:gm,specularmap_fragment:vm,specularmap_pars_fragment:xm,tonemapping_fragment:Mm,tonemapping_pars_fragment:Sm,transmission_fragment:ym,transmission_pars_fragment:Em,uv_pars_fragment:Tm,uv_pars_vertex:bm,uv_vertex:Am,worldpos_vertex:wm,background_vert:Rm,background_frag:Cm,backgroundCube_vert:Pm,backgroundCube_frag:Lm,cube_vert:Dm,cube_frag:Im,depth_vert:Um,depth_frag:Nm,distanceRGBA_vert:Om,distanceRGBA_frag:Fm,equirect_vert:Bm,equirect_frag:zm,linedashed_vert:km,linedashed_frag:Hm,meshbasic_vert:Vm,meshbasic_frag:Gm,meshlambert_vert:Wm,meshlambert_frag:Xm,meshmatcap_vert:Ym,meshmatcap_frag:qm,meshnormal_vert:Km,meshnormal_frag:jm,meshphong_vert:Zm,meshphong_frag:$m,meshphysical_vert:Jm,meshphysical_frag:Qm,meshtoon_vert:t_,meshtoon_frag:e_,points_vert:n_,points_frag:i_,shadow_vert:r_,shadow_frag:s_,sprite_vert:a_,sprite_frag:o_},st={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},pn={basic:{uniforms:Le([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Le([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Le([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Le([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Le([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Le([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Le([st.points,st.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Le([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Le([st.common,st.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Le([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Le([st.sprite,st.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Le([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Le([st.lights,st.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};pn.physical={uniforms:Le([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const As={r:0,b:0,g:0},di=new Sn,l_=new ie;function c_(r,t,e,n,i,s,a){const o=new kt(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1;const b=g(E);b===null?d(o,l):b&&b.isColor&&(d(b,1),x=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(E,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===na)?(u===void 0&&(u=new gn(new is(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:vr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),di.copy(x.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(l_.makeRotationFromEuler(di)),u.material.toneMapped=qt.getTransfer(b.colorSpace)!==$t,(h!==b||f!==b.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,m=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new gn(new sa(2,2),new ii({name:"BackgroundMaterial",uniforms:vr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=qt.getTransfer(b.colorSpace)!==$t,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,m=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,x){E.getRGB(As,Au(r)),n.buffers.color.setClear(As.r,As.g,As.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:_,addToRenderList:p}}function u_(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(y,L,z,O,j){let Y=!1;const G=h(O,z,L);s!==G&&(s=G,c(s.object)),Y=m(y,O,z,j),Y&&g(y,O,z,j),j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(y,L,z,O),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,L,z){const O=z.wireframe===!0;let j=n[y.id];j===void 0&&(j={},n[y.id]=j);let Y=j[L.id];Y===void 0&&(Y={},j[L.id]=Y);let G=Y[O];return G===void 0&&(G=f(l()),Y[O]=G),G}function f(y){const L=[],z=[],O=[];for(let j=0;j<e;j++)L[j]=0,z[j]=0,O[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:O,object:y,attributes:{},index:null}}function m(y,L,z,O){const j=s.attributes,Y=L.attributes;let G=0;const K=z.getAttributes();for(const W in K)if(K[W].location>=0){const at=j[W];let ut=Y[W];if(ut===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),at===void 0||at.attribute!==ut||ut&&at.data!==ut.data)return!0;G++}return s.attributesNum!==G||s.index!==O}function g(y,L,z,O){const j={},Y=L.attributes;let G=0;const K=z.getAttributes();for(const W in K)if(K[W].location>=0){let at=Y[W];at===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(at=y.instanceColor));const ut={};ut.attribute=at,at&&at.data&&(ut.data=at.data),j[W]=ut,G++}s.attributes=j,s.attributesNum=G,s.index=O}function _(){const y=s.newAttributes;for(let L=0,z=y.length;L<z;L++)y[L]=0}function p(y){d(y,0)}function d(y,L){const z=s.newAttributes,O=s.enabledAttributes,j=s.attributeDivisors;z[y]=1,O[y]===0&&(r.enableVertexAttribArray(y),O[y]=1),j[y]!==L&&(r.vertexAttribDivisor(y,L),j[y]=L)}function E(){const y=s.newAttributes,L=s.enabledAttributes;for(let z=0,O=L.length;z<O;z++)L[z]!==y[z]&&(r.disableVertexAttribArray(z),L[z]=0)}function x(y,L,z,O,j,Y,G){G===!0?r.vertexAttribIPointer(y,L,z,j,Y):r.vertexAttribPointer(y,L,z,O,j,Y)}function b(y,L,z,O){_();const j=O.attributes,Y=z.getAttributes(),G=L.defaultAttributeValues;for(const K in Y){const W=Y[K];if(W.location>=0){let it=j[K];if(it===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){const at=it.normalized,ut=it.itemSize,Ct=t.get(it);if(Ct===void 0)continue;const zt=Ct.buffer,q=Ct.type,J=Ct.bytesPerElement,dt=q===r.INT||q===r.UNSIGNED_INT||it.gpuType===Zo;if(it.isInterleavedBufferAttribute){const ht=it.data,Lt=ht.stride,It=it.offset;if(ht.isInstancedInterleavedBuffer){for(let Ot=0;Ot<W.locationSize;Ot++)d(W.location+Ot,ht.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ot=0;Ot<W.locationSize;Ot++)p(W.location+Ot);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let Ot=0;Ot<W.locationSize;Ot++)x(W.location+Ot,ut/W.locationSize,q,at,Lt*J,(It+ut/W.locationSize*Ot)*J,dt)}else{if(it.isInstancedBufferAttribute){for(let ht=0;ht<W.locationSize;ht++)d(W.location+ht,it.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ht=0;ht<W.locationSize;ht++)p(W.location+ht);r.bindBuffer(r.ARRAY_BUFFER,zt);for(let ht=0;ht<W.locationSize;ht++)x(W.location+ht,ut/W.locationSize,q,at,ut*J,ut/W.locationSize*ht*J,dt)}}else if(G!==void 0){const at=G[K];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(W.location,at);break;case 3:r.vertexAttrib3fv(W.location,at);break;case 4:r.vertexAttrib4fv(W.location,at);break;default:r.vertexAttrib1fv(W.location,at)}}}}E()}function R(){P();for(const y in n){const L=n[y];for(const z in L){const O=L[z];for(const j in O)u(O[j].object),delete O[j];delete L[z]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const z in L){const O=L[z];for(const j in O)u(O[j].object),delete O[j];delete L[z]}delete n[y.id]}function A(y){for(const L in n){const z=n[L];if(z[y.id]===void 0)continue;const O=z[y.id];for(const j in O)u(O[j].object),delete O[j];delete z[y.id]}}function P(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function h_(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,n,1)}function l(c,u,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function f_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==hn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==On&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Un&&!A)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),d=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:b,maxSamples:R}}function d_(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new qn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const E=s?0:n,x=E*4;let b=d.clippingState||null;l.value=b,b=u(g,f,x,m);for(let R=0;R!==x;++R)b[R]=e[R];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,b=m;x!==_;++x,b+=4)a.copy(h[x]).applyMatrix4(E,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function p_(r){let t=new WeakMap;function e(a,o){return o===eo?a.mapping=pr:o===no&&(a.mapping=mr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===eo||o===no)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bd(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class m_ extends wu{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ir=4,oc=[.125,.215,.35,.446,.526,.582],Mi=20,Ua=new m_,lc=new kt;let Na=null,Oa=0,Fa=0,Ba=!1;const gi=(1+Math.sqrt(5))/2,tr=1/gi,cc=[new U(-gi,tr,0),new U(gi,tr,0),new U(-tr,0,gi),new U(tr,0,gi),new U(0,gi,-tr),new U(0,gi,tr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Na=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Oa,Fa),this._renderer.xr.enabled=Ba,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pr||t.mapping===mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:es,format:hn,colorSpace:ai,depthBuffer:!1},i=hc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=__(s)),this._blurMaterial=g_(s,t,e)}return i}_compileMaterial(t){const e=new gn(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,i){const o=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(lc),u.toneMapping=Qn,u.autoClear=!1;const m=new Eu({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new gn(new is,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(lc),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;ws(i,E*x,d>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===pr||t.mapping===mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new gn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ua)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cc[(i-s-1)%cc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new gn(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Mi-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Mi;p>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mi}`);const d=[];let E=0;for(let A=0;A<Mi;++A){const P=A/_,M=Math.exp(-P*P/2);d.push(M),A===0?E+=M:A<p&&(E+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const b=this._sizeLods[i],R=3*b*(i>x-ir?i-x+ir:0),w=4*(this._cubeSize-b);ws(e,R,w,3*b,2*b),l.setRenderTarget(e),l.render(h,Ua)}}function __(r){const t=[],e=[],n=[];let i=r;const s=r-ir+1+oc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-ir?l=oc[a-r+ir-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,d=1,E=new Float32Array(_*g*m),x=new Float32Array(p*g*m),b=new Float32Array(d*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,P=w>2?0:-1,M=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];E.set(M,_*g*w),x.set(f,p*g*w);const y=[w,w,w,w,w,w];b.set(y,d*g*w)}const R=new En;R.setAttribute("position",new xn(E,_)),R.setAttribute("uv",new xn(x,p)),R.setAttribute("faceIndex",new xn(b,d)),t.push(R),i>ir&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hc(r,t,e){const n=new Ci(r,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function g_(r,t,e){const n=new Float32Array(Mi),i=new U(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:al(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function fc(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function dc(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function al(){return`

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
	`}function v_(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===eo||l===no,u=l===pr||l===mr;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new uc(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&i(m)?(e===null&&(e=new uc(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function x_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Hr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function M_(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let x=0,b=E.length;x<b;x+=3){const R=E[x+0],w=E[x+1],A=E[x+2];f.push(R,w,w,A,A,R)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,b=E.length/3-1;x<b;x+=3){const R=x+0,w=x+1,A=x+2;f.push(R,w,w,A,A,R)}}else return;const p=new(vu(f)?bu:Tu)(f,1);p.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function S_(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){r.drawElements(n,m,s,f*a),e.update(m,n,1)}function c(f,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,f*a,g),e.update(m,n,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];e.update(p,n,1)}function h(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/a,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=m[E];for(let E=0;E<_.length;E++)e.update(d,n,_[E])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function y_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function E_(r,t,e){const n=new WeakMap,i=new Jt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let R=o.attributes.position.count*b,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*w*4*h),P=new Mu(A,R,w,h);P.type=Un,P.needsUpdate=!0;const M=b*4;for(let L=0;L<h;L++){const z=d[L],O=E[L],j=x[L],Y=R*w*4*L;for(let G=0;G<z.count;G++){const K=G*M;g===!0&&(i.fromBufferAttribute(z,G),A[Y+K+0]=i.x,A[Y+K+1]=i.y,A[Y+K+2]=i.z,A[Y+K+3]=0),_===!0&&(i.fromBufferAttribute(O,G),A[Y+K+4]=i.x,A[Y+K+5]=i.y,A[Y+K+6]=i.z,A[Y+K+7]=0),p===!0&&(i.fromBufferAttribute(j,G),A[Y+K+8]=i.x,A[Y+K+9]=i.y,A[Y+K+10]=i.z,A[Y+K+11]=j.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new Rt(R,w)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function T_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Pu extends Ne{constructor(t,e,n,i,s,a,o,l,c,u=or){if(u!==or&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===or&&(n=Ri),n===void 0&&u===gr&&(n=_r),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lu=new Ne,pc=new Pu(1,1),Du=new Mu,Iu=new cd,Uu=new Ru,mc=[],_c=[],gc=new Float32Array(16),vc=new Float32Array(9),xc=new Float32Array(4);function Ar(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=mc[i];if(s===void 0&&(s=new Float32Array(i),mc[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ge(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ve(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function aa(r,t){let e=_c[t];e===void 0&&(e=new Int32Array(t),_c[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function b_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function A_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2fv(this.addr,t),ve(e,t)}}function w_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;r.uniform3fv(this.addr,t),ve(e,t)}}function R_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4fv(this.addr,t),ve(e,t)}}function C_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;xc.set(n),r.uniformMatrix2fv(this.addr,!1,xc),ve(e,n)}}function P_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;vc.set(n),r.uniformMatrix3fv(this.addr,!1,vc),ve(e,n)}}function L_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;gc.set(n),r.uniformMatrix4fv(this.addr,!1,gc),ve(e,n)}}function D_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function I_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2iv(this.addr,t),ve(e,t)}}function U_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3iv(this.addr,t),ve(e,t)}}function N_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4iv(this.addr,t),ve(e,t)}}function O_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function F_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2uiv(this.addr,t),ve(e,t)}}function B_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3uiv(this.addr,t),ve(e,t)}}function z_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4uiv(this.addr,t),ve(e,t)}}function k_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(pc.compareFunction=gu,s=pc):s=Lu,e.setTexture2D(t||s,i)}function H_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Iu,i)}function V_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Uu,i)}function G_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Du,i)}function W_(r){switch(r){case 5126:return b_;case 35664:return A_;case 35665:return w_;case 35666:return R_;case 35674:return C_;case 35675:return P_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return I_;case 35668:case 35672:return U_;case 35669:case 35673:return N_;case 5125:return O_;case 36294:return F_;case 36295:return B_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return G_}}function X_(r,t){r.uniform1fv(this.addr,t)}function Y_(r,t){const e=Ar(t,this.size,2);r.uniform2fv(this.addr,e)}function q_(r,t){const e=Ar(t,this.size,3);r.uniform3fv(this.addr,e)}function K_(r,t){const e=Ar(t,this.size,4);r.uniform4fv(this.addr,e)}function j_(r,t){const e=Ar(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Z_(r,t){const e=Ar(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function $_(r,t){const e=Ar(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function J_(r,t){r.uniform1iv(this.addr,t)}function Q_(r,t){r.uniform2iv(this.addr,t)}function tg(r,t){r.uniform3iv(this.addr,t)}function eg(r,t){r.uniform4iv(this.addr,t)}function ng(r,t){r.uniform1uiv(this.addr,t)}function ig(r,t){r.uniform2uiv(this.addr,t)}function rg(r,t){r.uniform3uiv(this.addr,t)}function sg(r,t){r.uniform4uiv(this.addr,t)}function ag(r,t,e){const n=this.cache,i=t.length,s=aa(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Lu,s[a])}function og(r,t,e){const n=this.cache,i=t.length,s=aa(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Iu,s[a])}function lg(r,t,e){const n=this.cache,i=t.length,s=aa(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Uu,s[a])}function cg(r,t,e){const n=this.cache,i=t.length,s=aa(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Du,s[a])}function ug(r){switch(r){case 5126:return X_;case 35664:return Y_;case 35665:return q_;case 35666:return K_;case 35674:return j_;case 35675:return Z_;case 35676:return $_;case 5124:case 35670:return J_;case 35667:case 35671:return Q_;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return rg;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}class hg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=W_(e.type)}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ug(e.type)}}class dg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function Mc(r,t){r.seq.push(t),r.map[t.id]=t}function pg(r,t,e){const n=r.name,i=n.length;for(za.lastIndex=0;;){const s=za.exec(n),a=za.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Mc(e,c===void 0?new hg(o,r,t):new fg(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new dg(o),Mc(e,h)),e=h}}}class zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);pg(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Sc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const mg=37297;let _g=0;function gg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function vg(r){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(r);let n;switch(t===e?n="":t===Ys&&e===Xs?n="LinearDisplayP3ToLinearSRGB":t===Xs&&e===Ys&&(n="LinearSRGBToLinearDisplayP3"),r){case ai:case ia:return[n,"LinearTransferOETF"];case fn:case nl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function yc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+gg(r.getShaderSource(t),a)}else return i}function xg(r,t){const e=vg(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Mg(r,t){let e;switch(t){case Sf:e="Linear";break;case yf:e="Reinhard";break;case Ef:e="OptimizedCineon";break;case Tf:e="ACESFilmic";break;case Af:e="AgX";break;case wf:e="Neutral";break;case bf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rs=new U;function Sg(){qt.getLuminanceCoefficients(Rs);const r=Rs.x.toFixed(4),t=Rs.y.toFixed(4),e=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function Eg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Or(r){return r!==""}function Ec(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(r){return r.replace(bg,wg)}const Ag=new Map;function wg(r,t){let e=Ut[t];if(e===void 0){const n=Ag.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Do(e)}const Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(r){return r.replace(Rg,Cg)}function Cg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ac(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Lg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case pr:case mr:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case mr:t="ENVMAP_MODE_REFRACTION";break}return t}function Ig(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ru:t="ENVMAP_BLENDING_MULTIPLY";break;case xf:t="ENVMAP_BLENDING_MIX";break;case Mf:t="ENVMAP_BLENDING_ADD";break}return t}function Ug(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ng(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Pg(e),c=Lg(e),u=Dg(e),h=Ig(e),f=Ug(e),m=yg(e),g=Eg(s),_=i.createProgram();let p,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),d.length>0&&(d+=`
`)):(p=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),d=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,xg("linearToOutputTexel",e.outputColorSpace),Sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),a=Do(a),a=Ec(a,e),a=Tc(a,e),o=Do(o),o=Ec(o,e),o=Tc(o,e),a=bc(a),o=bc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=E+p+a,b=E+d+o,R=Sc(i,i.VERTEX_SHADER,x),w=Sc(i,i.FRAGMENT_SHADER,b);i.attachShader(_,R),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(L){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(R).trim(),j=i.getShaderInfoLog(w).trim();let Y=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,w);else{const K=yc(i,R,"vertex"),W=yc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+K+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||j==="")&&(G=!1);G&&(L.diagnostics={runnable:Y,programLog:z,vertexShader:{log:O,prefix:p},fragmentShader:{log:j,prefix:d}})}i.deleteShader(R),i.deleteShader(w),P=new zs(i,_),M=Tg(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,mg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_g++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let Og=0;class Fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bg(t),e.set(t,n)),n}}class Bg{constructor(t){this.id=Og++,this.code=t,this.usedTimes=0}}function zg(r,t,e,n,i,s,a){const o=new Su,l=new Fg,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,y,L,z,O){const j=z.fog,Y=O.geometry,G=M.isMeshStandardMaterial?z.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),W=K&&K.mapping===na?K.image.height:null,it=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const at=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ut=at!==void 0?at.length:0;let Ct=0;Y.morphAttributes.position!==void 0&&(Ct=1),Y.morphAttributes.normal!==void 0&&(Ct=2),Y.morphAttributes.color!==void 0&&(Ct=3);let zt,q,J,dt;if(it){const Ht=pn[it];zt=Ht.vertexShader,q=Ht.fragmentShader}else zt=M.vertexShader,q=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),dt=l.getFragmentShaderID(M);const ht=r.getRenderTarget(),Lt=O.isInstancedMesh===!0,It=O.isBatchedMesh===!0,Ot=!!M.map,Zt=!!M.matcap,D=!!K,re=!!M.aoMap,Vt=!!M.lightMap,Gt=!!M.bumpMap,_t=!!M.normalMap,se=!!M.displacementMap,At=!!M.emissiveMap,Pt=!!M.metalnessMap,C=!!M.roughnessMap,S=M.anisotropy>0,V=M.clearcoat>0,$=M.dispersion>0,tt=M.iridescence>0,Z=M.sheen>0,xt=M.transmission>0,rt=S&&!!M.anisotropyMap,lt=V&&!!M.clearcoatMap,Dt=V&&!!M.clearcoatNormalMap,et=V&&!!M.clearcoatRoughnessMap,ct=tt&&!!M.iridescenceMap,Ft=tt&&!!M.iridescenceThicknessMap,St=Z&&!!M.sheenColorMap,ft=Z&&!!M.sheenRoughnessMap,Et=!!M.specularMap,wt=!!M.specularColorMap,Qt=!!M.specularIntensityMap,v=xt&&!!M.transmissionMap,F=xt&&!!M.thicknessMap,B=!!M.gradientMap,X=!!M.alphaMap,Q=M.alphaTest>0,gt=!!M.alphaHash,Tt=!!M.extensions;let ce=Qn;M.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ce=r.toneMapping);const me={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:zt,fragmentShader:q,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:dt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:It,batchingColor:It&&O._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&O.instanceColor!==null,instancingMorph:Lt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ai,alphaToCoverage:!!M.alphaToCoverage,map:Ot,matcap:Zt,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:W,aoMap:re,lightMap:Vt,bumpMap:Gt,normalMap:_t,displacementMap:f&&se,emissiveMap:At,normalMapObjectSpace:_t&&M.normalMapType===Lf,normalMapTangentSpace:_t&&M.normalMapType===_u,metalnessMap:Pt,roughnessMap:C,anisotropy:S,anisotropyMap:rt,clearcoat:V,clearcoatMap:lt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:et,dispersion:$,iridescence:tt,iridescenceMap:ct,iridescenceThicknessMap:Ft,sheen:Z,sheenColorMap:St,sheenRoughnessMap:ft,specularMap:Et,specularColorMap:wt,specularIntensityMap:Qt,transmission:xt,transmissionMap:v,thicknessMap:F,gradientMap:B,opaque:M.transparent===!1&&M.blending===ar&&M.alphaToCoverage===!1,alphaMap:X,alphaTest:Q,alphaHash:gt,combine:M.combine,mapUv:Ot&&_(M.map.channel),aoMapUv:re&&_(M.aoMap.channel),lightMapUv:Vt&&_(M.lightMap.channel),bumpMapUv:Gt&&_(M.bumpMap.channel),normalMapUv:_t&&_(M.normalMap.channel),displacementMapUv:se&&_(M.displacementMap.channel),emissiveMapUv:At&&_(M.emissiveMap.channel),metalnessMapUv:Pt&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:rt&&_(M.anisotropyMap.channel),clearcoatMapUv:lt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:St&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(M.sheenRoughnessMap.channel),specularMapUv:Et&&_(M.specularMap.channel),specularColorMapUv:wt&&_(M.specularColorMap.channel),specularIntensityMapUv:Qt&&_(M.specularIntensityMap.channel),transmissionMapUv:v&&_(M.transmissionMap.channel),thicknessMapUv:F&&_(M.thicknessMap.channel),alphaMapUv:X&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(_t||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(Ot||X),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Ct,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:Ot&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===$t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===In,flipSided:M.side===Ue,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Tt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&M.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function d(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(E(y,M),x(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),M.push(o.mask)}function b(M){const y=g[M.type];let L;if(y){const z=pn[y];L=Sd.clone(z.uniforms)}else L=M.uniforms;return L}function R(M,y){let L;for(let z=0,O=u.length;z<O;z++){const j=u[z];if(j.cacheKey===y){L=j,++L.usedTimes;break}}return L===void 0&&(L=new Ng(r,y,M,s),u.push(L)),L}function w(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:P}}function kg(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Hg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function wc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Rc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,m,g,_,p){let d=r[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),t++,d}function o(h,f,m,g,_,p){const d=a(h,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):e.push(d)}function l(h,f,m,g,_,p){const d=a(h,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||Hg),n.length>1&&n.sort(f||wc),i.length>1&&i.sort(f||wc)}function u(){for(let h=t,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Vg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Rc,r.set(n,[a])):i>=s.length?(a=new Rc,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Gg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new kt};break;case"SpotLight":e={position:new U,direction:new U,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function Wg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Xg=0;function Yg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function qg(r){const t=new Gg,e=Wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new ie,a=new ie;function o(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,E=0,x=0,b=0,R=0,w=0,A=0;c.sort(Yg);for(let M=0,y=c.length;M<y;M++){const L=c[M],z=L.color,O=L.intensity,j=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=z.r*O,h+=z.g*O,f+=z.b*O;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],O);A++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,W=e.get(L);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=L.shadow.matrix,E++}n.directional[m]=G,m++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(z).multiplyScalar(O),G.distance=j,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[_]=G;const K=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,K.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=K.matrix,L.castShadow){const W=e.get(L);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=Y,b++}_++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(z).multiplyScalar(O),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=G,p++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const K=L.shadow,W=e.get(L);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(O),G.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[d]=G,d++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==d||P.numDirectionalShadows!==E||P.numPointShadows!==x||P.numSpotShadows!==b||P.numSpotMaps!==R||P.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=d,P.numDirectionalShadows=E,P.numPointShadows=x,P.numSpotShadows=b,P.numSpotMaps=R,P.numLightProbes=A,n.version=Xg++)}function l(c,u){let h=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const x=c[d];if(x.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),h++}else if(x.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Cc(r){const t=new qg(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Kg(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Cc(r),t.set(i,[o])):s>=a.length?(o=new Cc(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class jg extends br{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zg extends br{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`;function Qg(r,t,e){let n=new sl;const i=new Rt,s=new Rt,a=new Jt,o=new jg({depthPacking:Pf}),l=new Zg,c={},u=e.maxTextureSize,h={[ni]:Ue,[Ue]:ni,[In]:In},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:$g,fragmentShader:Jg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new En;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let d=this.type;this.render=function(w,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),y=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Jn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=d!==Pn&&this.type===Pn,j=d===Pn&&this.type!==Pn;for(let Y=0,G=w.length;Y<G;Y++){const K=w[Y],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const it=W.getFrameExtents();if(i.multiply(it),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/it.x),i.x=s.x*it.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/it.y),i.y=s.y*it.y,W.mapSize.y=s.y)),W.map===null||O===!0||j===!0){const ut=this.type!==Pn?{minFilter:tn,magFilter:tn}:{};W.map!==null&&W.map.dispose(),W.map=new Ci(i.x,i.y,ut),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const at=W.getViewportCount();for(let ut=0;ut<at;ut++){const Ct=W.getViewport(ut);a.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),z.viewport(a),W.updateMatrices(K,ut),n=W.getFrustum(),b(A,P,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Pn&&E(W,P),W.needsUpdate=!1}d=this.type,p.needsUpdate=!1,r.setRenderTarget(M,y,L)};function E(w,A){const P=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ci(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,P,f,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,P,m,_,null)}function x(w,A,P,M){let y=null;const L=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=y.uuid,O=A.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let Y=j[O];Y===void 0&&(Y=y.clone(),j[O]=Y,A.addEventListener("dispose",R)),y=Y}if(y.visible=A.visible,y.wireframe=A.wireframe,M===Pn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=r.properties.get(y);z.light=P}return y}function b(w,A,P,M,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Pn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const O=t.update(w),j=w.material;if(Array.isArray(j)){const Y=O.groups;for(let G=0,K=Y.length;G<K;G++){const W=Y[G],it=j[W.materialIndex];if(it&&it.visible){const at=x(w,it,M,y);w.onBeforeShadow(r,w,A,P,O,at,W),r.renderBufferDirect(P,null,O,at,w,W),w.onAfterShadow(r,w,A,P,O,at,W)}}}else if(j.visible){const Y=x(w,j,M,y);w.onBeforeShadow(r,w,A,P,O,Y,null),r.renderBufferDirect(P,null,O,Y,w,null),w.onAfterShadow(r,w,A,P,O,Y,null)}}const z=w.children;for(let O=0,j=z.length;O<j;O++)b(z[O],A,P,M,y)}function R(w){w.target.removeEventListener("dispose",R);for(const P in c){const M=c[P],y=w.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function t0(r){function t(){let v=!1;const F=new Jt;let B=null;const X=new Jt(0,0,0,0);return{setMask:function(Q){B!==Q&&!v&&(r.colorMask(Q,Q,Q,Q),B=Q)},setLocked:function(Q){v=Q},setClear:function(Q,gt,Tt,ce,me){me===!0&&(Q*=ce,gt*=ce,Tt*=ce),F.set(Q,gt,Tt,ce),X.equals(F)===!1&&(r.clearColor(Q,gt,Tt,ce),X.copy(F))},reset:function(){v=!1,B=null,X.set(-1,0,0,0)}}}function e(){let v=!1,F=null,B=null,X=null;return{setTest:function(Q){Q?dt(r.DEPTH_TEST):ht(r.DEPTH_TEST)},setMask:function(Q){F!==Q&&!v&&(r.depthMask(Q),F=Q)},setFunc:function(Q){if(B!==Q){switch(Q){case ff:r.depthFunc(r.NEVER);break;case df:r.depthFunc(r.ALWAYS);break;case pf:r.depthFunc(r.LESS);break;case Gs:r.depthFunc(r.LEQUAL);break;case mf:r.depthFunc(r.EQUAL);break;case _f:r.depthFunc(r.GEQUAL);break;case gf:r.depthFunc(r.GREATER);break;case vf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}B=Q}},setLocked:function(Q){v=Q},setClear:function(Q){X!==Q&&(r.clearDepth(Q),X=Q)},reset:function(){v=!1,F=null,B=null,X=null}}}function n(){let v=!1,F=null,B=null,X=null,Q=null,gt=null,Tt=null,ce=null,me=null;return{setTest:function(Ht){v||(Ht?dt(r.STENCIL_TEST):ht(r.STENCIL_TEST))},setMask:function(Ht){F!==Ht&&!v&&(r.stencilMask(Ht),F=Ht)},setFunc:function(Ht,_e,he){(B!==Ht||X!==_e||Q!==he)&&(r.stencilFunc(Ht,_e,he),B=Ht,X=_e,Q=he)},setOp:function(Ht,_e,he){(gt!==Ht||Tt!==_e||ce!==he)&&(r.stencilOp(Ht,_e,he),gt=Ht,Tt=_e,ce=he)},setLocked:function(Ht){v=Ht},setClear:function(Ht){me!==Ht&&(r.clearStencil(Ht),me=Ht)},reset:function(){v=!1,F=null,B=null,X=null,Q=null,gt=null,Tt=null,ce=null,me=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],m=null,g=!1,_=null,p=null,d=null,E=null,x=null,b=null,R=null,w=new kt(0,0,0),A=0,P=!1,M=null,y=null,L=null,z=null,O=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,G=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=G>=2);let W=null,it={};const at=r.getParameter(r.SCISSOR_BOX),ut=r.getParameter(r.VIEWPORT),Ct=new Jt().fromArray(at),zt=new Jt().fromArray(ut);function q(v,F,B,X){const Q=new Uint8Array(4),gt=r.createTexture();r.bindTexture(v,gt),r.texParameteri(v,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(v,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Tt=0;Tt<B;Tt++)v===r.TEXTURE_3D||v===r.TEXTURE_2D_ARRAY?r.texImage3D(F,0,r.RGBA,1,1,X,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage2D(F+Tt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q);return gt}const J={};J[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),dt(r.DEPTH_TEST),s.setFunc(Gs),Gt(!1),_t(Ul),dt(r.CULL_FACE),re(Jn);function dt(v){c[v]!==!0&&(r.enable(v),c[v]=!0)}function ht(v){c[v]!==!1&&(r.disable(v),c[v]=!1)}function Lt(v,F){return u[v]!==F?(r.bindFramebuffer(v,F),u[v]=F,v===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=F),v===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=F),!0):!1}function It(v,F){let B=f,X=!1;if(v){B=h.get(F),B===void 0&&(B=[],h.set(F,B));const Q=v.textures;if(B.length!==Q.length||B[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,Tt=Q.length;gt<Tt;gt++)B[gt]=r.COLOR_ATTACHMENT0+gt;B.length=Q.length,X=!0}}else B[0]!==r.BACK&&(B[0]=r.BACK,X=!0);X&&r.drawBuffers(B)}function Ot(v){return m!==v?(r.useProgram(v),m=v,!0):!1}const Zt={[xi]:r.FUNC_ADD,[Kh]:r.FUNC_SUBTRACT,[jh]:r.FUNC_REVERSE_SUBTRACT};Zt[Zh]=r.MIN,Zt[$h]=r.MAX;const D={[Jh]:r.ZERO,[Qh]:r.ONE,[tf]:r.SRC_COLOR,[Qa]:r.SRC_ALPHA,[of]:r.SRC_ALPHA_SATURATE,[sf]:r.DST_COLOR,[nf]:r.DST_ALPHA,[ef]:r.ONE_MINUS_SRC_COLOR,[to]:r.ONE_MINUS_SRC_ALPHA,[af]:r.ONE_MINUS_DST_COLOR,[rf]:r.ONE_MINUS_DST_ALPHA,[lf]:r.CONSTANT_COLOR,[cf]:r.ONE_MINUS_CONSTANT_COLOR,[uf]:r.CONSTANT_ALPHA,[hf]:r.ONE_MINUS_CONSTANT_ALPHA};function re(v,F,B,X,Q,gt,Tt,ce,me,Ht){if(v===Jn){g===!0&&(ht(r.BLEND),g=!1);return}if(g===!1&&(dt(r.BLEND),g=!0),v!==qh){if(v!==_||Ht!==P){if((p!==xi||x!==xi)&&(r.blendEquation(r.FUNC_ADD),p=xi,x=xi),Ht)switch(v){case ar:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nl:r.blendFunc(r.ONE,r.ONE);break;case Ol:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ol:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}d=null,E=null,b=null,R=null,w.set(0,0,0),A=0,_=v,P=Ht}return}Q=Q||F,gt=gt||B,Tt=Tt||X,(F!==p||Q!==x)&&(r.blendEquationSeparate(Zt[F],Zt[Q]),p=F,x=Q),(B!==d||X!==E||gt!==b||Tt!==R)&&(r.blendFuncSeparate(D[B],D[X],D[gt],D[Tt]),d=B,E=X,b=gt,R=Tt),(ce.equals(w)===!1||me!==A)&&(r.blendColor(ce.r,ce.g,ce.b,me),w.copy(ce),A=me),_=v,P=!1}function Vt(v,F){v.side===In?ht(r.CULL_FACE):dt(r.CULL_FACE);let B=v.side===Ue;F&&(B=!B),Gt(B),v.blending===ar&&v.transparent===!1?re(Jn):re(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),s.setFunc(v.depthFunc),s.setTest(v.depthTest),s.setMask(v.depthWrite),i.setMask(v.colorWrite);const X=v.stencilWrite;a.setTest(X),X&&(a.setMask(v.stencilWriteMask),a.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),a.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),At(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(v){M!==v&&(v?r.frontFace(r.CW):r.frontFace(r.CCW),M=v)}function _t(v){v!==Wh?(dt(r.CULL_FACE),v!==y&&(v===Ul?r.cullFace(r.BACK):v===Xh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ht(r.CULL_FACE),y=v}function se(v){v!==L&&(Y&&r.lineWidth(v),L=v)}function At(v,F,B){v?(dt(r.POLYGON_OFFSET_FILL),(z!==F||O!==B)&&(r.polygonOffset(F,B),z=F,O=B)):ht(r.POLYGON_OFFSET_FILL)}function Pt(v){v?dt(r.SCISSOR_TEST):ht(r.SCISSOR_TEST)}function C(v){v===void 0&&(v=r.TEXTURE0+j-1),W!==v&&(r.activeTexture(v),W=v)}function S(v,F,B){B===void 0&&(W===null?B=r.TEXTURE0+j-1:B=W);let X=it[B];X===void 0&&(X={type:void 0,texture:void 0},it[B]=X),(X.type!==v||X.texture!==F)&&(W!==B&&(r.activeTexture(B),W=B),r.bindTexture(v,F||J[v]),X.type=v,X.texture=F)}function V(){const v=it[W];v!==void 0&&v.type!==void 0&&(r.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xt(){try{r.texSubImage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function rt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function lt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Dt(){try{r.texStorage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function et(){try{r.texStorage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ct(){try{r.texImage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ft(){try{r.texImage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function St(v){Ct.equals(v)===!1&&(r.scissor(v.x,v.y,v.z,v.w),Ct.copy(v))}function ft(v){zt.equals(v)===!1&&(r.viewport(v.x,v.y,v.z,v.w),zt.copy(v))}function Et(v,F){let B=l.get(F);B===void 0&&(B=new WeakMap,l.set(F,B));let X=B.get(v);X===void 0&&(X=r.getUniformBlockIndex(F,v.name),B.set(v,X))}function wt(v,F){const X=l.get(F).get(v);o.get(F)!==X&&(r.uniformBlockBinding(F,X,v.__bindingPointIndex),o.set(F,X))}function Qt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},W=null,it={},u={},h=new WeakMap,f=[],m=null,g=!1,_=null,p=null,d=null,E=null,x=null,b=null,R=null,w=new kt(0,0,0),A=0,P=!1,M=null,y=null,L=null,z=null,O=null,Ct.set(0,0,r.canvas.width,r.canvas.height),zt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:dt,disable:ht,bindFramebuffer:Lt,drawBuffers:It,useProgram:Ot,setBlending:re,setMaterial:Vt,setFlipSided:Gt,setCullFace:_t,setLineWidth:se,setPolygonOffset:At,setScissorTest:Pt,activeTexture:C,bindTexture:S,unbindTexture:V,compressedTexImage2D:$,compressedTexImage3D:tt,texImage2D:ct,texImage3D:Ft,updateUBOMapping:Et,uniformBlockBinding:wt,texStorage2D:Dt,texStorage3D:et,texSubImage2D:Z,texSubImage3D:xt,compressedTexSubImage2D:rt,compressedTexSubImage3D:lt,scissor:St,viewport:ft,reset:Qt}}function Pc(r,t,e,n){const i=e0(n);switch(e){case cu:return r*t;case hu:return r*t;case fu:return r*t*2;case du:return r*t/i.components*i.byteLength;case Qo:return r*t/i.components*i.byteLength;case pu:return r*t*2/i.components*i.byteLength;case tl:return r*t*2/i.components*i.byteLength;case uu:return r*t*3/i.components*i.byteLength;case hn:return r*t*4/i.components*i.byteLength;case el:return r*t*4/i.components*i.byteLength;case Us:case Ns:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Os:case Fs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ao:case lo:return Math.max(r,16)*Math.max(t,8)/4;case so:case oo:return Math.max(r,8)*Math.max(t,8)/2;case co:case uo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ho:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case mo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case _o:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case go:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case vo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case So:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case yo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case bo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Bs:case wo:case Ro:return Math.ceil(r/4)*Math.ceil(t/4)*16;case mu:case Co:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Po:case Lo:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e0(r){switch(r){case On:case au:return{byteLength:1,components:1};case Xr:case ou:case es:return{byteLength:2,components:1};case $o:case Jo:return{byteLength:2,components:4};case Ri:case Zo:case Un:return{byteLength:4,components:1};case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function n0(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):Ks("canvas")}function _(C,S,V){let $=1;const tt=Pt(C);if((tt.width>V||tt.height>V)&&($=V/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor($*tt.width),xt=Math.floor($*tt.height);h===void 0&&(h=g(Z,xt));const rt=S?g(Z,xt):h;return rt.width=Z,rt.height=xt,rt.getContext("2d").drawImage(C,0,0,Z,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+xt+")."),rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==tn&&C.minFilter!==un}function d(C){r.generateMipmap(C)}function E(C,S,V,$,tt=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=S;if(S===r.RED&&(V===r.FLOAT&&(Z=r.R32F),V===r.HALF_FLOAT&&(Z=r.R16F),V===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.R8UI),V===r.UNSIGNED_SHORT&&(Z=r.R16UI),V===r.UNSIGNED_INT&&(Z=r.R32UI),V===r.BYTE&&(Z=r.R8I),V===r.SHORT&&(Z=r.R16I),V===r.INT&&(Z=r.R32I)),S===r.RG&&(V===r.FLOAT&&(Z=r.RG32F),V===r.HALF_FLOAT&&(Z=r.RG16F),V===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RG8UI),V===r.UNSIGNED_SHORT&&(Z=r.RG16UI),V===r.UNSIGNED_INT&&(Z=r.RG32UI),V===r.BYTE&&(Z=r.RG8I),V===r.SHORT&&(Z=r.RG16I),V===r.INT&&(Z=r.RG32I)),S===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),S===r.RGBA){const xt=tt?Ws:qt.getTransfer($);V===r.FLOAT&&(Z=r.RGBA32F),V===r.HALF_FLOAT&&(Z=r.RGBA16F),V===r.UNSIGNED_BYTE&&(Z=xt===$t?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(C,S){let V;return C?S===null||S===Ri||S===_r?V=r.DEPTH24_STENCIL8:S===Un?V=r.DEPTH32F_STENCIL8:S===Xr&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ri||S===_r?V=r.DEPTH_COMPONENT24:S===Un?V=r.DEPTH_COMPONENT32F:S===Xr&&(V=r.DEPTH_COMPONENT16),V}function b(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==tn&&C.minFilter!==un?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){const S=C.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&u.delete(S)}function w(C){const S=C.target;S.removeEventListener("dispose",w),M(S)}function A(C){const S=n.get(C);if(S.__webglInit===void 0)return;const V=C.source,$=f.get(V);if($){const tt=$[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&P(C),Object.keys($).length===0&&f.delete(V)}n.remove(C)}function P(C){const S=n.get(C);r.deleteTexture(S.__webglTexture);const V=C.source,$=f.get(V);delete $[S.__cacheKey],a.memory.textures--}function M(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let tt=0;tt<S.__webglFramebuffer[$].length;tt++)r.deleteFramebuffer(S.__webglFramebuffer[$][tt]);else r.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)r.deleteFramebuffer(S.__webglFramebuffer[$]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=C.textures;for(let $=0,tt=V.length;$<tt;$++){const Z=n.get(V[$]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(V[$])}n.remove(C)}let y=0;function L(){y=0}function z(){const C=y;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),y+=1,C}function O(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function j(C,S){const V=n.get(C);if(C.isVideoTexture&&se(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(V,C,S);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+S)}function Y(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){zt(V,C,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+S)}function G(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){zt(V,C,S);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+S)}function K(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){q(V,C,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+S)}const W={[io]:r.REPEAT,[Si]:r.CLAMP_TO_EDGE,[ro]:r.MIRRORED_REPEAT},it={[tn]:r.NEAREST,[Rf]:r.NEAREST_MIPMAP_NEAREST,[os]:r.NEAREST_MIPMAP_LINEAR,[un]:r.LINEAR,[ma]:r.LINEAR_MIPMAP_NEAREST,[yi]:r.LINEAR_MIPMAP_LINEAR},at={[Df]:r.NEVER,[Bf]:r.ALWAYS,[If]:r.LESS,[gu]:r.LEQUAL,[Uf]:r.EQUAL,[Ff]:r.GEQUAL,[Nf]:r.GREATER,[Of]:r.NOTEQUAL};function ut(C,S){if(S.type===Un&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===un||S.magFilter===ma||S.magFilter===os||S.magFilter===yi||S.minFilter===un||S.minFilter===ma||S.minFilter===os||S.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,W[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,W[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,W[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,it[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,it[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==os&&S.minFilter!==yi||S.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ct(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const $=S.source;let tt=f.get($);tt===void 0&&(tt={},f.set($,tt));const Z=O(S);if(Z!==C.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),tt[Z].usedTimes++;const xt=tt[C.__cacheKey];xt!==void 0&&(tt[C.__cacheKey].usedTimes--,xt.usedTimes===0&&P(S)),C.__cacheKey=Z,C.__webglTexture=tt[Z].texture}return V}function zt(C,S,V){let $=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=r.TEXTURE_3D);const tt=Ct(C,S),Z=S.source;e.bindTexture($,C.__webglTexture,r.TEXTURE0+V);const xt=n.get(Z);if(Z.version!==xt.__version||tt===!0){e.activeTexture(r.TEXTURE0+V);const rt=qt.getPrimaries(qt.workingColorSpace),lt=S.colorSpace===Kn?null:qt.getPrimaries(S.colorSpace),Dt=S.colorSpace===Kn||rt===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let et=_(S.image,!1,i.maxTextureSize);et=At(S,et);const ct=s.convert(S.format,S.colorSpace),Ft=s.convert(S.type);let St=E(S.internalFormat,ct,Ft,S.colorSpace,S.isVideoTexture);ut($,S);let ft;const Et=S.mipmaps,wt=S.isVideoTexture!==!0,Qt=xt.__version===void 0||tt===!0,v=Z.dataReady,F=b(S,et);if(S.isDepthTexture)St=x(S.format===gr,S.type),Qt&&(wt?e.texStorage2D(r.TEXTURE_2D,1,St,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,St,et.width,et.height,0,ct,Ft,null));else if(S.isDataTexture)if(Et.length>0){wt&&Qt&&e.texStorage2D(r.TEXTURE_2D,F,St,Et[0].width,Et[0].height);for(let B=0,X=Et.length;B<X;B++)ft=Et[B],wt?v&&e.texSubImage2D(r.TEXTURE_2D,B,0,0,ft.width,ft.height,ct,Ft,ft.data):e.texImage2D(r.TEXTURE_2D,B,St,ft.width,ft.height,0,ct,Ft,ft.data);S.generateMipmaps=!1}else wt?(Qt&&e.texStorage2D(r.TEXTURE_2D,F,St,et.width,et.height),v&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,et.width,et.height,ct,Ft,et.data)):e.texImage2D(r.TEXTURE_2D,0,St,et.width,et.height,0,ct,Ft,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){wt&&Qt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,F,St,Et[0].width,Et[0].height,et.depth);for(let B=0,X=Et.length;B<X;B++)if(ft=Et[B],S.format!==hn)if(ct!==null)if(wt){if(v)if(S.layerUpdates.size>0){const Q=Pc(ft.width,ft.height,S.format,S.type);for(const gt of S.layerUpdates){const Tt=ft.data.subarray(gt*Q/ft.data.BYTES_PER_ELEMENT,(gt+1)*Q/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,B,0,0,gt,ft.width,ft.height,1,ct,Tt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,B,0,0,0,ft.width,ft.height,et.depth,ct,ft.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,B,St,ft.width,ft.height,et.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?v&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,B,0,0,0,ft.width,ft.height,et.depth,ct,Ft,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,B,St,ft.width,ft.height,et.depth,0,ct,Ft,ft.data)}else{wt&&Qt&&e.texStorage2D(r.TEXTURE_2D,F,St,Et[0].width,Et[0].height);for(let B=0,X=Et.length;B<X;B++)ft=Et[B],S.format!==hn?ct!==null?wt?v&&e.compressedTexSubImage2D(r.TEXTURE_2D,B,0,0,ft.width,ft.height,ct,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,B,St,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?v&&e.texSubImage2D(r.TEXTURE_2D,B,0,0,ft.width,ft.height,ct,Ft,ft.data):e.texImage2D(r.TEXTURE_2D,B,St,ft.width,ft.height,0,ct,Ft,ft.data)}else if(S.isDataArrayTexture)if(wt){if(Qt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,F,St,et.width,et.height,et.depth),v)if(S.layerUpdates.size>0){const B=Pc(et.width,et.height,S.format,S.type);for(const X of S.layerUpdates){const Q=et.data.subarray(X*B/et.data.BYTES_PER_ELEMENT,(X+1)*B/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,X,et.width,et.height,1,ct,Ft,Q)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ct,Ft,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,St,et.width,et.height,et.depth,0,ct,Ft,et.data);else if(S.isData3DTexture)wt?(Qt&&e.texStorage3D(r.TEXTURE_3D,F,St,et.width,et.height,et.depth),v&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ct,Ft,et.data)):e.texImage3D(r.TEXTURE_3D,0,St,et.width,et.height,et.depth,0,ct,Ft,et.data);else if(S.isFramebufferTexture){if(Qt)if(wt)e.texStorage2D(r.TEXTURE_2D,F,St,et.width,et.height);else{let B=et.width,X=et.height;for(let Q=0;Q<F;Q++)e.texImage2D(r.TEXTURE_2D,Q,St,B,X,0,ct,Ft,null),B>>=1,X>>=1}}else if(Et.length>0){if(wt&&Qt){const B=Pt(Et[0]);e.texStorage2D(r.TEXTURE_2D,F,St,B.width,B.height)}for(let B=0,X=Et.length;B<X;B++)ft=Et[B],wt?v&&e.texSubImage2D(r.TEXTURE_2D,B,0,0,ct,Ft,ft):e.texImage2D(r.TEXTURE_2D,B,St,ct,Ft,ft);S.generateMipmaps=!1}else if(wt){if(Qt){const B=Pt(et);e.texStorage2D(r.TEXTURE_2D,F,St,B.width,B.height)}v&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct,Ft,et)}else e.texImage2D(r.TEXTURE_2D,0,St,ct,Ft,et);p(S)&&d($),xt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function q(C,S,V){if(S.image.length!==6)return;const $=Ct(C,S),tt=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);const Z=n.get(tt);if(tt.version!==Z.__version||$===!0){e.activeTexture(r.TEXTURE0+V);const xt=qt.getPrimaries(qt.workingColorSpace),rt=S.colorSpace===Kn?null:qt.getPrimaries(S.colorSpace),lt=S.colorSpace===Kn||xt===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Dt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,ct=[];for(let X=0;X<6;X++)!Dt&&!et?ct[X]=_(S.image[X],!0,i.maxCubemapSize):ct[X]=et?S.image[X].image:S.image[X],ct[X]=At(S,ct[X]);const Ft=ct[0],St=s.convert(S.format,S.colorSpace),ft=s.convert(S.type),Et=E(S.internalFormat,St,ft,S.colorSpace),wt=S.isVideoTexture!==!0,Qt=Z.__version===void 0||$===!0,v=tt.dataReady;let F=b(S,Ft);ut(r.TEXTURE_CUBE_MAP,S);let B;if(Dt){wt&&Qt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,F,Et,Ft.width,Ft.height);for(let X=0;X<6;X++){B=ct[X].mipmaps;for(let Q=0;Q<B.length;Q++){const gt=B[Q];S.format!==hn?St!==null?wt?v&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,Q,0,0,gt.width,gt.height,St,gt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,Q,Et,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?v&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,Q,0,0,gt.width,gt.height,St,ft,gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,Q,Et,gt.width,gt.height,0,St,ft,gt.data)}}}else{if(B=S.mipmaps,wt&&Qt){B.length>0&&F++;const X=Pt(ct[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,F,Et,X.width,X.height)}for(let X=0;X<6;X++)if(et){wt?v&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ct[X].width,ct[X].height,St,ft,ct[X].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Et,ct[X].width,ct[X].height,0,St,ft,ct[X].data);for(let Q=0;Q<B.length;Q++){const Tt=B[Q].image[X].image;wt?v&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,Q+1,0,0,Tt.width,Tt.height,St,ft,Tt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,Q+1,Et,Tt.width,Tt.height,0,St,ft,Tt.data)}}else{wt?v&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,St,ft,ct[X]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Et,St,ft,ct[X]);for(let Q=0;Q<B.length;Q++){const gt=B[Q];wt?v&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,Q+1,0,0,St,ft,gt.image[X]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,Q+1,Et,St,ft,gt.image[X])}}}p(S)&&d(r.TEXTURE_CUBE_MAP),Z.__version=tt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function J(C,S,V,$,tt,Z){const xt=s.convert(V.format,V.colorSpace),rt=s.convert(V.type),lt=E(V.internalFormat,xt,rt,V.colorSpace);if(!n.get(S).__hasExternalTextures){const et=Math.max(1,S.width>>Z),ct=Math.max(1,S.height>>Z);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,lt,et,ct,S.depth,0,xt,rt,null):e.texImage2D(tt,Z,lt,et,ct,0,xt,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),_t(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,tt,n.get(V).__webglTexture,0,Gt(S)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,tt,n.get(V).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(C,S,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){const $=S.depthTexture,tt=$&&$.isDepthTexture?$.type:null,Z=x(S.stencilBuffer,tt),xt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=Gt(S);_t(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,Z,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,C)}else{const $=S.textures;for(let tt=0;tt<$.length;tt++){const Z=$[tt],xt=s.convert(Z.format,Z.colorSpace),rt=s.convert(Z.type),lt=E(Z.internalFormat,xt,rt,Z.colorSpace),Dt=Gt(S);V&&_t(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,lt,S.width,S.height):_t(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,lt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,lt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,tt=Gt(S);if(S.depthTexture.format===or)_t(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(S.depthTexture.format===gr)_t(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Lt(C){const S=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ht(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]=r.createRenderbuffer(),dt(S.__webglDepthbuffer[$],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),dt(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function It(C,S,V){const $=n.get(C);S!==void 0&&J($.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Lt(C)}function Ot(C){const S=C.texture,V=n.get(C),$=n.get(S);C.addEventListener("dispose",w);const tt=C.textures,Z=C.isWebGLCubeRenderTarget===!0,xt=tt.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=S.version,a.memory.textures++),Z){V.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[rt]=[];for(let lt=0;lt<S.mipmaps.length;lt++)V.__webglFramebuffer[rt][lt]=r.createFramebuffer()}else V.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)V.__webglFramebuffer[rt]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(xt)for(let rt=0,lt=tt.length;rt<lt;rt++){const Dt=n.get(tt[rt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&_t(C)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let rt=0;rt<tt.length;rt++){const lt=tt[rt];V.__webglColorRenderbuffer[rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[rt]);const Dt=s.convert(lt.format,lt.colorSpace),et=s.convert(lt.type),ct=E(lt.internalFormat,Dt,et,lt.colorSpace,C.isXRRenderTarget===!0),Ft=Gt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,ct,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,V.__webglColorRenderbuffer[rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),dt(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),ut(r.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let lt=0;lt<S.mipmaps.length;lt++)J(V.__webglFramebuffer[rt][lt],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,lt);else J(V.__webglFramebuffer[rt],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(S)&&d(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let rt=0,lt=tt.length;rt<lt;rt++){const Dt=tt[rt],et=n.get(Dt);e.bindTexture(r.TEXTURE_2D,et.__webglTexture),ut(r.TEXTURE_2D,Dt),J(V.__webglFramebuffer,C,Dt,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,0),p(Dt)&&d(r.TEXTURE_2D)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,$.__webglTexture),ut(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let lt=0;lt<S.mipmaps.length;lt++)J(V.__webglFramebuffer[lt],C,S,r.COLOR_ATTACHMENT0,rt,lt);else J(V.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,rt,0);p(S)&&d(rt),e.unbindTexture()}C.depthBuffer&&Lt(C)}function Zt(C){const S=C.textures;for(let V=0,$=S.length;V<$;V++){const tt=S[V];if(p(tt)){const Z=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,xt=n.get(tt).__webglTexture;e.bindTexture(Z,xt),d(Z),e.unbindTexture()}}}const D=[],re=[];function Vt(C){if(C.samples>0){if(_t(C)===!1){const S=C.textures,V=C.width,$=C.height;let tt=r.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=n.get(C),rt=S.length>1;if(rt)for(let lt=0;lt<S.length;lt++)e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let lt=0;lt<S.length;lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xt.__webglColorRenderbuffer[lt]);const Dt=n.get(S[lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Dt,0)}r.blitFramebuffer(0,0,V,$,0,0,V,$,tt,r.NEAREST),l===!0&&(D.length=0,re.length=0,D.push(r.COLOR_ATTACHMENT0+lt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(D.push(Z),re.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),rt)for(let lt=0;lt<S.length;lt++){e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,xt.__webglColorRenderbuffer[lt]);const Dt=n.get(S[lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,Dt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Gt(C){return Math.min(i.maxSamples,C.samples)}function _t(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function se(C){const S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function At(C,S){const V=C.colorSpace,$=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==ai&&V!==Kn&&(qt.getTransfer(V)===$t?($!==hn||tt!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=It,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=_t}function i0(r,t){function e(n,i=Kn){let s;const a=qt.getTransfer(i);if(n===On)return r.UNSIGNED_BYTE;if(n===$o)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return r.BYTE;if(n===ou)return r.SHORT;if(n===Xr)return r.UNSIGNED_SHORT;if(n===Zo)return r.INT;if(n===Ri)return r.UNSIGNED_INT;if(n===Un)return r.FLOAT;if(n===es)return r.HALF_FLOAT;if(n===cu)return r.ALPHA;if(n===uu)return r.RGB;if(n===hn)return r.RGBA;if(n===hu)return r.LUMINANCE;if(n===fu)return r.LUMINANCE_ALPHA;if(n===or)return r.DEPTH_COMPONENT;if(n===gr)return r.DEPTH_STENCIL;if(n===du)return r.RED;if(n===Qo)return r.RED_INTEGER;if(n===pu)return r.RG;if(n===tl)return r.RG_INTEGER;if(n===el)return r.RGBA_INTEGER;if(n===Us||n===Ns||n===Os||n===Fs)if(a===$t)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ao||n===oo||n===lo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===so)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===uo||n===ho)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===co||n===uo)return a===$t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ho)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fo||n===po||n===mo||n===_o||n===go||n===vo||n===xo||n===Mo||n===So||n===yo||n===Eo||n===To||n===bo||n===Ao)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===po)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bs||n===wo||n===Ro)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Bs)return a===$t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ro)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mu||n===Co||n===Po||n===Lo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Bs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class r0 extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Cs extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s0={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Cs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const a0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o0=`
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

}`;class l0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ne,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ii({vertexShader:a0,fragmentShader:o0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gn(new sa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c0 extends Ii{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new l0,p=e.getContextAttributes();let d=null,E=null;const x=[],b=[],R=new Rt;let w=null;const A=new Ye;A.layers.enable(1),A.viewport=new Jt;const P=new Ye;P.layers.enable(2),P.viewport=new Jt;const M=[A,P],y=new r0;y.layers.enable(1),y.layers.enable(2);let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=x[q];return J===void 0&&(J=new ka,x[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=x[q];return J===void 0&&(J=new ka,x[q]=J),J.getGripSpace()},this.getHand=function(q){let J=x[q];return J===void 0&&(J=new ka,x[q]=J),J.getHandSpace()};function O(q){const J=b.indexOf(q.inputSource);if(J===-1)return;const dt=x[J];dt!==void 0&&(dt.update(q.inputSource,q.frame,c||a),dt.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<x.length;q++){const J=b[q];J!==null&&(b[q]=null,x[q].disconnect(J))}L=null,z=null,_.reset(),t.setRenderTarget(d),m=null,f=null,h=null,i=null,E=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",j),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Ci(m.framebufferWidth,m.framebufferHeight,{format:hn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,dt=null,ht=null;p.depth&&(ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?gr:or,dt=p.stencil?_r:Ri);const Lt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(Lt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Ci(f.textureWidth,f.textureHeight,{format:hn,type:On,depthTexture:new Pu(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),zt.setContext(i),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(q){for(let J=0;J<q.removed.length;J++){const dt=q.removed[J],ht=b.indexOf(dt);ht>=0&&(b[ht]=null,x[ht].disconnect(dt))}for(let J=0;J<q.added.length;J++){const dt=q.added[J];let ht=b.indexOf(dt);if(ht===-1){for(let It=0;It<x.length;It++)if(It>=b.length){b.push(dt),ht=It;break}else if(b[It]===null){b[It]=dt,ht=It;break}if(ht===-1)break}const Lt=x[ht];Lt&&Lt.connect(dt)}}const G=new U,K=new U;function W(q,J,dt){G.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(dt.matrixWorld);const ht=G.distanceTo(K),Lt=J.projectionMatrix.elements,It=dt.projectionMatrix.elements,Ot=Lt[14]/(Lt[10]-1),Zt=Lt[14]/(Lt[10]+1),D=(Lt[9]+1)/Lt[5],re=(Lt[9]-1)/Lt[5],Vt=(Lt[8]-1)/Lt[0],Gt=(It[8]+1)/It[0],_t=Ot*Vt,se=Ot*Gt,At=ht/(-Vt+Gt),Pt=At*-Vt;J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pt),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const C=Ot+At,S=Zt+At,V=_t-Pt,$=se+(ht-Pt),tt=D*Zt/S*C,Z=re*Zt/S*C;q.projectionMatrix.makePerspective(V,$,tt,Z,C,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function it(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;_.texture!==null&&(q.near=_.depthNear,q.far=_.depthFar),y.near=P.near=A.near=q.near,y.far=P.far=A.far=q.far,(L!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,z=y.far,A.near=L,A.far=z,P.near=L,P.far=z,A.updateProjectionMatrix(),P.updateProjectionMatrix(),q.updateProjectionMatrix());const J=q.parent,dt=y.cameras;it(y,J);for(let ht=0;ht<dt.length;ht++)it(dt[ht],J);dt.length===2?W(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),at(q,y,J)};function at(q,J,dt){dt===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(dt.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Yr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ut=null;function Ct(q,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const dt=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let ht=!1;dt.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let It=0;It<dt.length;It++){const Ot=dt[It];let Zt=null;if(m!==null)Zt=m.getViewport(Ot);else{const re=h.getViewSubImage(f,Ot);Zt=re.viewport,It===0&&(t.setRenderTargetTextures(E,re.colorTexture,f.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(E))}let D=M[It];D===void 0&&(D=new Ye,D.layers.enable(It),D.viewport=new Jt,M[It]=D),D.matrix.fromArray(Ot.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Ot.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),It===0&&(y.matrix.copy(D.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(D)}const Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const It=h.getDepthInformation(dt[0]);It&&It.isValid&&It.texture&&_.init(t,It,i.renderState)}}for(let dt=0;dt<x.length;dt++){const ht=b[dt],Lt=x[dt];ht!==null&&Lt!==void 0&&Lt.update(ht,J,c||a)}ut&&ut(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const zt=new Cu;zt.setAnimationLoop(Ct),this.setAnimationLoop=function(q){ut=q},this.dispose=function(){}}}const pi=new Sn,u0=new ie;function h0(r,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Au(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,E,x,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,E,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ue&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ue&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=t.get(d),x=E.envMap,b=E.envMapRotation;x&&(p.envMap.value=x,pi.copy(b),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),p.envMapRotation.value.setFromMatrix4(u0.makeRotationFromEuler(pi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=x*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ue&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function f0(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const b=x.program;n.uniformBlockBinding(E,b)}function c(E,x){let b=i[E.id];b===void 0&&(g(E),b=u(E),i[E.id]=b,E.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(E,R);const w=t.render.frame;s[E.id]!==w&&(f(E),s[E.id]=w)}function u(E){const x=h();E.__bindingPointIndex=x;const b=r.createBuffer(),R=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,b),b}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=i[E.id],b=E.uniforms,R=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,A=b.length;w<A;w++){const P=Array.isArray(b[w])?b[w]:[b[w]];for(let M=0,y=P.length;M<y;M++){const L=P[M];if(m(L,w,M,R)===!0){const z=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let Y=0;Y<O.length;Y++){const G=O[Y],K=_(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,z+j,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,j),j+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(E,x,b,R){const w=E.value,A=x+"_"+b;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const P=R[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(E){const x=E.uniforms;let b=0;const R=16;for(let A=0,P=x.length;A<P;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,L=M.length;y<L;y++){const z=M[y],O=Array.isArray(z.value)?z.value:[z.value];for(let j=0,Y=O.length;j<Y;j++){const G=O[j],K=_(G),W=b%R,it=W%K.boundary,at=W+it;b+=it,at!==0&&R-at<K.storage&&(b+=R-at),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=K.storage}}}const w=b%R;return w>0&&(b+=R-w),E.__size=b,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}class d0{constructor(t={}){const{canvas:e=nd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Qn,this.toneMappingExposure=1;const x=this;let b=!1,R=0,w=0,A=null,P=-1,M=null;const y=new Jt,L=new Jt;let z=null;const O=new kt(0);let j=0,Y=e.width,G=e.height,K=1,W=null,it=null;const at=new Jt(0,0,Y,G),ut=new Jt(0,0,Y,G);let Ct=!1;const zt=new sl;let q=!1,J=!1;const dt=new ie,ht=new U,Lt=new Jt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function Zt(){return A===null?K:1}let D=n;function re(T,I){return e.getContext(T,I)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jo}`),e.addEventListener("webglcontextlost",B,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",Q,!1),D===null){const I="webgl2";if(D=re(I,T),D===null)throw re(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Vt,Gt,_t,se,At,Pt,C,S,V,$,tt,Z,xt,rt,lt,Dt,et,ct,Ft,St,ft,Et,wt,Qt;function v(){Vt=new x_(D),Vt.init(),Et=new i0(D,Vt),Gt=new f_(D,Vt,t,Et),_t=new t0(D),se=new y_(D),At=new kg,Pt=new n0(D,Vt,_t,At,Gt,Et,se),C=new p_(x),S=new v_(x),V=new Rd(D),wt=new u_(D,V),$=new M_(D,V,se,wt),tt=new T_(D,$,V,se),Ft=new E_(D,Gt,Pt),Dt=new d_(At),Z=new zg(x,C,S,Vt,Gt,wt,Dt),xt=new h0(x,At),rt=new Vg,lt=new Kg(Vt),ct=new c_(x,C,S,_t,tt,f,l),et=new Qg(x,tt,Gt),Qt=new f0(D,se,Gt,_t),St=new h_(D,Vt,se),ft=new S_(D,Vt,se),se.programs=Z.programs,x.capabilities=Gt,x.extensions=Vt,x.properties=At,x.renderLists=rt,x.shadowMap=et,x.state=_t,x.info=se}v();const F=new c0(x,D);this.xr=F,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Vt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Vt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(Y,G,!1))},this.getSize=function(T){return T.set(Y,G)},this.setSize=function(T,I,k=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,G=I,e.width=Math.floor(T*K),e.height=Math.floor(I*K),k===!0&&(e.style.width=T+"px",e.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(Y*K,G*K).floor()},this.setDrawingBufferSize=function(T,I,k){Y=T,G=I,K=k,e.width=Math.floor(T*k),e.height=Math.floor(I*k),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(at)},this.setViewport=function(T,I,k,H){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,I,k,H),_t.viewport(y.copy(at).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(ut)},this.setScissor=function(T,I,k,H){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,I,k,H),_t.scissor(L.copy(ut).multiplyScalar(K).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(T){_t.setScissorTest(Ct=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){it=T},this.getClearColor=function(T){return T.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(T=!0,I=!0,k=!0){let H=0;if(T){let N=!1;if(A!==null){const nt=A.texture.format;N=nt===el||nt===tl||nt===Qo}if(N){const nt=A.texture.type,ot=nt===On||nt===Ri||nt===Xr||nt===_r||nt===$o||nt===Jo,pt=ct.getClearColor(),mt=ct.getClearAlpha(),yt=pt.r,bt=pt.g,Mt=pt.b;ot?(m[0]=yt,m[1]=bt,m[2]=Mt,m[3]=mt,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=yt,g[1]=bt,g[2]=Mt,g[3]=mt,D.clearBufferiv(D.COLOR,0,g))}else H|=D.COLOR_BUFFER_BIT}I&&(H|=D.DEPTH_BUFFER_BIT),k&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",B,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),rt.dispose(),lt.dispose(),At.dispose(),C.dispose(),S.dispose(),tt.dispose(),wt.dispose(),Qt.dispose(),Z.dispose(),F.dispose(),F.removeEventListener("sessionstart",he),F.removeEventListener("sessionend",zn),ye.stop()};function B(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=se.autoReset,I=et.enabled,k=et.autoUpdate,H=et.needsUpdate,N=et.type;v(),se.autoReset=T,et.enabled=I,et.autoUpdate=k,et.needsUpdate=H,et.type=N}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function gt(T){const I=T.target;I.removeEventListener("dispose",gt),Tt(I)}function Tt(T){ce(T),At.remove(T)}function ce(T){const I=At.get(T).programs;I!==void 0&&(I.forEach(function(k){Z.releaseProgram(k)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,k,H,N,nt){I===null&&(I=It);const ot=N.isMesh&&N.matrixWorld.determinant()<0,pt=kh(T,I,k,H,N);_t.setMaterial(H,ot);let mt=k.index,yt=1;if(H.wireframe===!0){if(mt=$.getWireframeAttribute(k),mt===void 0)return;yt=2}const bt=k.drawRange,Mt=k.attributes.position;let Wt=bt.start*yt,ae=(bt.start+bt.count)*yt;nt!==null&&(Wt=Math.max(Wt,nt.start*yt),ae=Math.min(ae,(nt.start+nt.count)*yt)),mt!==null?(Wt=Math.max(Wt,0),ae=Math.min(ae,mt.count)):Mt!=null&&(Wt=Math.max(Wt,0),ae=Math.min(ae,Mt.count));const oe=ae-Wt;if(oe<0||oe===1/0)return;wt.setup(N,H,pt,k,mt);let He,Xt=St;if(mt!==null&&(He=V.get(mt),Xt=ft,Xt.setIndex(He)),N.isMesh)H.wireframe===!0?(_t.setLineWidth(H.wireframeLinewidth*Zt()),Xt.setMode(D.LINES)):Xt.setMode(D.TRIANGLES);else if(N.isLine){let vt=H.linewidth;vt===void 0&&(vt=1),_t.setLineWidth(vt*Zt()),N.isLineSegments?Xt.setMode(D.LINES):N.isLineLoop?Xt.setMode(D.LINE_LOOP):Xt.setMode(D.LINE_STRIP)}else N.isPoints?Xt.setMode(D.POINTS):N.isSprite&&Xt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Xt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const vt=N._multiDrawStarts,Ee=N._multiDrawCounts,Yt=N._multiDrawCount,an=mt?V.get(mt).bytesPerElement:1,Ni=At.get(H).currentProgram.getUniforms();for(let Ve=0;Ve<Yt;Ve++)Ni.setValue(D,"_gl_DrawID",Ve),Xt.render(vt[Ve]/an,Ee[Ve])}else if(N.isInstancedMesh)Xt.renderInstances(Wt,oe,N.count);else if(k.isInstancedBufferGeometry){const vt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ee=Math.min(k.instanceCount,vt);Xt.renderInstances(Wt,oe,Ee)}else Xt.render(Wt,oe)};function me(T,I,k){T.transparent===!0&&T.side===In&&T.forceSinglePass===!1?(T.side=Ue,T.needsUpdate=!0,as(T,I,k),T.side=ni,T.needsUpdate=!0,as(T,I,k),T.side=In):as(T,I,k)}this.compile=function(T,I,k=null){k===null&&(k=T),p=lt.get(k),p.init(I),E.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==k&&T.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return T.traverse(function(N){const nt=N.material;if(nt)if(Array.isArray(nt))for(let ot=0;ot<nt.length;ot++){const pt=nt[ot];me(pt,k,N),H.add(pt)}else me(nt,k,N),H.add(nt)}),E.pop(),p=null,H},this.compileAsync=function(T,I,k=null){const H=this.compile(T,I,k);return new Promise(N=>{function nt(){if(H.forEach(function(ot){At.get(ot).currentProgram.isReady()&&H.delete(ot)}),H.size===0){N(T);return}setTimeout(nt,10)}Vt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ht=null;function _e(T){Ht&&Ht(T)}function he(){ye.stop()}function zn(){ye.start()}const ye=new Cu;ye.setAnimationLoop(_e),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(T){Ht=T,F.setAnimationLoop(T),T===null?ye.stop():ye.start()},F.addEventListener("sessionstart",he),F.addEventListener("sessionend",zn),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(I),I=F.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,I,A),p=lt.get(T,E.length),p.init(I),E.push(p),dt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),zt.setFromProjectionMatrix(dt),J=this.localClippingEnabled,q=Dt.init(this.clippingPlanes,J),_=rt.get(T,d.length),_.init(),d.push(_),F.enabled===!0&&F.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&Tn(nt,I,-1/0,x.sortObjects)}Tn(T,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,it),Ot=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Ot&&ct.addToRenderList(_,T),this.info.render.frame++,q===!0&&Dt.beginShadows();const k=p.state.shadowsArray;et.render(k,T,I),q===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,N=_.transmissive;if(p.setupLights(),I.isArrayCamera){const nt=I.cameras;if(N.length>0)for(let ot=0,pt=nt.length;ot<pt;ot++){const mt=nt[ot];Rr(H,N,T,mt)}Ot&&ct.render(T);for(let ot=0,pt=nt.length;ot<pt;ot++){const mt=nt[ot];li(_,T,mt,mt.viewport)}}else N.length>0&&Rr(H,N,T,I),Ot&&ct.render(T),li(_,T,I);A!==null&&(Pt.updateMultisampleRenderTarget(A),Pt.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(x,T,I),wt.resetDefaultState(),P=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],q===!0&&Dt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Tn(T,I,k,H){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||zt.intersectsSprite(T)){H&&Lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);const ot=tt.update(T),pt=T.material;pt.visible&&_.push(T,ot,pt,k,Lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||zt.intersectsObject(T))){const ot=tt.update(T),pt=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Lt.copy(T.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Lt.copy(ot.boundingSphere.center)),Lt.applyMatrix4(T.matrixWorld).applyMatrix4(dt)),Array.isArray(pt)){const mt=ot.groups;for(let yt=0,bt=mt.length;yt<bt;yt++){const Mt=mt[yt],Wt=pt[Mt.materialIndex];Wt&&Wt.visible&&_.push(T,ot,Wt,k,Lt.z,Mt)}}else pt.visible&&_.push(T,ot,pt,k,Lt.z,null)}}const nt=T.children;for(let ot=0,pt=nt.length;ot<pt;ot++)Tn(nt[ot],I,k,H)}function li(T,I,k,H){const N=T.opaque,nt=T.transmissive,ot=T.transparent;p.setupLightsView(k),q===!0&&Dt.setGlobalState(x.clippingPlanes,k),H&&_t.viewport(y.copy(H)),N.length>0&&ss(N,I,k),nt.length>0&&ss(nt,I,k),ot.length>0&&ss(ot,I,k),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Rr(T,I,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Ci(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?es:On,minFilter:yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[H.id],ot=H.viewport||y;nt.setSize(ot.z,ot.w);const pt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(O),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Ot&&ct.render(k);const mt=x.toneMapping;x.toneMapping=Qn;const yt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),q===!0&&Dt.setGlobalState(x.clippingPlanes,H),ss(T,k,H),Pt.updateMultisampleRenderTarget(nt),Pt.updateRenderTargetMipmap(nt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Mt=0,Wt=I.length;Mt<Wt;Mt++){const ae=I[Mt],oe=ae.object,He=ae.geometry,Xt=ae.material,vt=ae.group;if(Xt.side===In&&oe.layers.test(H.layers)){const Ee=Xt.side;Xt.side=Ue,Xt.needsUpdate=!0,Pl(oe,k,H,He,Xt,vt),Xt.side=Ee,Xt.needsUpdate=!0,bt=!0}}bt===!0&&(Pt.updateMultisampleRenderTarget(nt),Pt.updateRenderTargetMipmap(nt))}x.setRenderTarget(pt),x.setClearColor(O,j),yt!==void 0&&(H.viewport=yt),x.toneMapping=mt}function ss(T,I,k){const H=I.isScene===!0?I.overrideMaterial:null;for(let N=0,nt=T.length;N<nt;N++){const ot=T[N],pt=ot.object,mt=ot.geometry,yt=H===null?ot.material:H,bt=ot.group;pt.layers.test(k.layers)&&Pl(pt,I,k,mt,yt,bt)}}function Pl(T,I,k,H,N,nt){T.onBeforeRender(x,I,k,H,N,nt),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.transparent===!0&&N.side===In&&N.forceSinglePass===!1?(N.side=Ue,N.needsUpdate=!0,x.renderBufferDirect(k,I,H,N,T,nt),N.side=ni,N.needsUpdate=!0,x.renderBufferDirect(k,I,H,N,T,nt),N.side=In):x.renderBufferDirect(k,I,H,N,T,nt),T.onAfterRender(x,I,k,H,N,nt)}function as(T,I,k){I.isScene!==!0&&(I=It);const H=At.get(T),N=p.state.lights,nt=p.state.shadowsArray,ot=N.state.version,pt=Z.getParameters(T,N.state,nt,I,k),mt=Z.getProgramCacheKey(pt);let yt=H.programs;H.environment=T.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(T.isMeshStandardMaterial?S:C).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,yt===void 0&&(T.addEventListener("dispose",gt),yt=new Map,H.programs=yt);let bt=yt.get(mt);if(bt!==void 0){if(H.currentProgram===bt&&H.lightsStateVersion===ot)return Dl(T,pt),bt}else pt.uniforms=Z.getUniforms(T),T.onBeforeCompile(pt,x),bt=Z.acquireProgram(pt,mt),yt.set(mt,bt),H.uniforms=pt.uniforms;const Mt=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Mt.clippingPlanes=Dt.uniform),Dl(T,pt),H.needsLights=Vh(T),H.lightsStateVersion=ot,H.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=bt,H.uniformsList=null,bt}function Ll(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=zs.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Dl(T,I){const k=At.get(T);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function kh(T,I,k,H,N){I.isScene!==!0&&(I=It),Pt.resetTextureUnits();const nt=I.fog,ot=H.isMeshStandardMaterial?I.environment:null,pt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ai,mt=(H.isMeshStandardMaterial?S:C).get(H.envMap||ot),yt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,bt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Mt=!!k.morphAttributes.position,Wt=!!k.morphAttributes.normal,ae=!!k.morphAttributes.color;let oe=Qn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(oe=x.toneMapping);const He=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Xt=He!==void 0?He.length:0,vt=At.get(H),Ee=p.state.lights;if(q===!0&&(J===!0||T!==M)){const $e=T===M&&H.id===P;Dt.setState(H,T,$e)}let Yt=!1;H.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Ee.state.version||vt.outputColorSpace!==pt||N.isBatchedMesh&&vt.batching===!1||!N.isBatchedMesh&&vt.batching===!0||N.isBatchedMesh&&vt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&vt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&vt.instancing===!1||!N.isInstancedMesh&&vt.instancing===!0||N.isSkinnedMesh&&vt.skinning===!1||!N.isSkinnedMesh&&vt.skinning===!0||N.isInstancedMesh&&vt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&vt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&vt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&vt.instancingMorph===!1&&N.morphTexture!==null||vt.envMap!==mt||H.fog===!0&&vt.fog!==nt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Dt.numPlanes||vt.numIntersection!==Dt.numIntersection)||vt.vertexAlphas!==yt||vt.vertexTangents!==bt||vt.morphTargets!==Mt||vt.morphNormals!==Wt||vt.morphColors!==ae||vt.toneMapping!==oe||vt.morphTargetsCount!==Xt)&&(Yt=!0):(Yt=!0,vt.__version=H.version);let an=vt.currentProgram;Yt===!0&&(an=as(H,I,N));let Ni=!1,Ve=!1,fa=!1;const fe=an.getUniforms(),kn=vt.uniforms;if(_t.useProgram(an.program)&&(Ni=!0,Ve=!0,fa=!0),H.id!==P&&(P=H.id,Ve=!0),Ni||M!==T){fe.setValue(D,"projectionMatrix",T.projectionMatrix),fe.setValue(D,"viewMatrix",T.matrixWorldInverse);const $e=fe.map.cameraPosition;$e!==void 0&&$e.setValue(D,ht.setFromMatrixPosition(T.matrixWorld)),Gt.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&fe.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Ve=!0,fa=!0)}if(N.isSkinnedMesh){fe.setOptional(D,N,"bindMatrix"),fe.setOptional(D,N,"bindMatrixInverse");const $e=N.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),fe.setValue(D,"boneTexture",$e.boneTexture,Pt))}N.isBatchedMesh&&(fe.setOptional(D,N,"batchingTexture"),fe.setValue(D,"batchingTexture",N._matricesTexture,Pt),fe.setOptional(D,N,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",N._indirectTexture,Pt),fe.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",N._colorsTexture,Pt));const da=k.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0)&&Ft.update(N,k,an),(Ve||vt.receiveShadow!==N.receiveShadow)&&(vt.receiveShadow=N.receiveShadow,fe.setValue(D,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(kn.envMap.value=mt,kn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(kn.envMapIntensity.value=I.environmentIntensity),Ve&&(fe.setValue(D,"toneMappingExposure",x.toneMappingExposure),vt.needsLights&&Hh(kn,fa),nt&&H.fog===!0&&xt.refreshFogUniforms(kn,nt),xt.refreshMaterialUniforms(kn,H,K,G,p.state.transmissionRenderTarget[T.id]),zs.upload(D,Ll(vt),kn,Pt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(zs.upload(D,Ll(vt),kn,Pt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&fe.setValue(D,"center",N.center),fe.setValue(D,"modelViewMatrix",N.modelViewMatrix),fe.setValue(D,"normalMatrix",N.normalMatrix),fe.setValue(D,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const $e=H.uniformsGroups;for(let pa=0,Gh=$e.length;pa<Gh;pa++){const Il=$e[pa];Qt.update(Il,an),Qt.bind(Il,an)}}return an}function Hh(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Vh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,I,k){At.get(T.texture).__webglTexture=I,At.get(T.depthTexture).__webglTexture=k;const H=At.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const k=At.get(T);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,k=0){A=T,R=I,w=k;let H=!0,N=null,nt=!1,ot=!1;if(T){const mt=At.get(T);mt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(D.FRAMEBUFFER,null),H=!1):mt.__webglFramebuffer===void 0?Pt.setupRenderTarget(T):mt.__hasExternalTextures&&Pt.rebindTextures(T,At.get(T.texture).__webglTexture,At.get(T.depthTexture).__webglTexture);const yt=T.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ot=!0);const bt=At.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(bt[I])?N=bt[I][k]:N=bt[I],nt=!0):T.samples>0&&Pt.useMultisampledRTT(T)===!1?N=At.get(T).__webglMultisampledFramebuffer:Array.isArray(bt)?N=bt[k]:N=bt,y.copy(T.viewport),L.copy(T.scissor),z=T.scissorTest}else y.copy(at).multiplyScalar(K).floor(),L.copy(ut).multiplyScalar(K).floor(),z=Ct;if(_t.bindFramebuffer(D.FRAMEBUFFER,N)&&H&&_t.drawBuffers(T,N),_t.viewport(y),_t.scissor(L),_t.setScissorTest(z),nt){const mt=At.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,k)}else if(ot){const mt=At.get(T.texture),yt=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,k||0,yt)}P=-1},this.readRenderTargetPixels=function(T,I,k,H,N,nt,ot){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){_t.bindFramebuffer(D.FRAMEBUFFER,pt);try{const mt=T.texture,yt=mt.format,bt=mt.type;if(!Gt.textureFormatReadable(yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-H&&k>=0&&k<=T.height-N&&D.readPixels(I,k,H,N,Et.convert(yt),Et.convert(bt),nt)}finally{const mt=A!==null?At.get(A).__webglFramebuffer:null;_t.bindFramebuffer(D.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(T,I,k,H,N,nt,ot){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){_t.bindFramebuffer(D.FRAMEBUFFER,pt);try{const mt=T.texture,yt=mt.format,bt=mt.type;if(!Gt.textureFormatReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-H&&k>=0&&k<=T.height-N){const Mt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Mt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),D.readPixels(I,k,H,N,Et.convert(yt),Et.convert(bt),0),D.flush();const Wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await id(D,Wt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Mt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt)}finally{D.deleteBuffer(Mt),D.deleteSync(Wt)}return nt}}finally{const mt=A!==null?At.get(A).__webglFramebuffer:null;_t.bindFramebuffer(D.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(T,I=null,k=0){T.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-k),N=Math.floor(T.image.width*H),nt=Math.floor(T.image.height*H),ot=I!==null?I.x:0,pt=I!==null?I.y:0;Pt.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ot,pt,N,nt),_t.unbindTexture()},this.copyTextureToTexture=function(T,I,k=null,H=null,N=0){T.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],I=arguments[2],N=arguments[3]||0,k=null);let nt,ot,pt,mt,yt,bt;k!==null?(nt=k.max.x-k.min.x,ot=k.max.y-k.min.y,pt=k.min.x,mt=k.min.y):(nt=T.image.width,ot=T.image.height,pt=0,mt=0),H!==null?(yt=H.x,bt=H.y):(yt=0,bt=0);const Mt=Et.convert(I.format),Wt=Et.convert(I.type);Pt.setTexture2D(I,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const ae=D.getParameter(D.UNPACK_ROW_LENGTH),oe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),He=D.getParameter(D.UNPACK_SKIP_PIXELS),Xt=D.getParameter(D.UNPACK_SKIP_ROWS),vt=D.getParameter(D.UNPACK_SKIP_IMAGES),Ee=T.isCompressedTexture?T.mipmaps[N]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,mt),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,yt,bt,nt,ot,Mt,Wt,Ee.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,yt,bt,Ee.width,Ee.height,Mt,Ee.data):D.texSubImage2D(D.TEXTURE_2D,N,yt,bt,nt,ot,Mt,Wt,Ee),D.pixelStorei(D.UNPACK_ROW_LENGTH,ae),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,He),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,vt),N===0&&I.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(T,I,k=null,H=null,N=0){T.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,T=arguments[2],I=arguments[3],N=arguments[4]||0);let nt,ot,pt,mt,yt,bt,Mt,Wt,ae;const oe=T.isCompressedTexture?T.mipmaps[N]:T.image;k!==null?(nt=k.max.x-k.min.x,ot=k.max.y-k.min.y,pt=k.max.z-k.min.z,mt=k.min.x,yt=k.min.y,bt=k.min.z):(nt=oe.width,ot=oe.height,pt=oe.depth,mt=0,yt=0,bt=0),H!==null?(Mt=H.x,Wt=H.y,ae=H.z):(Mt=0,Wt=0,ae=0);const He=Et.convert(I.format),Xt=Et.convert(I.type);let vt;if(I.isData3DTexture)Pt.setTexture3D(I,0),vt=D.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Pt.setTexture2DArray(I,0),vt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Ee=D.getParameter(D.UNPACK_ROW_LENGTH),Yt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),an=D.getParameter(D.UNPACK_SKIP_PIXELS),Ni=D.getParameter(D.UNPACK_SKIP_ROWS),Ve=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,oe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,bt),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(vt,N,Mt,Wt,ae,nt,ot,pt,He,Xt,oe.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(vt,N,Mt,Wt,ae,nt,ot,pt,He,oe.data):D.texSubImage3D(vt,N,Mt,Wt,ae,nt,ot,pt,He,Xt,oe),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Yt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,an),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ni),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve),N===0&&I.generateMipmaps&&D.generateMipmap(vt),_t.unbindTexture()},this.initRenderTarget=function(T){At.get(T).__webglFramebuffer===void 0&&Pt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Pt.setTextureCube(T,0):T.isData3DTexture?Pt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Pt.setTexture2DArray(T,0):Pt.setTexture2D(T,0),_t.unbindTexture()},this.resetState=function(){R=0,w=0,A=null,_t.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===nl?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===ia?"display-p3":"srgb"}}class p0 extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nu extends br{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lc=new ie,Io=new rl,Ps=new ra,Ls=new U;class m0 extends Ie{constructor(t=new En,e=new Nu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(i),Ps.radius+=s,t.ray.intersectsSphere(Ps)===!1)return;Lc.copy(i).invert(),Io.copy(t.ray).applyMatrix4(Lc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Ls.fromBufferAttribute(h,p),Dc(Ls,p,l,i,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,_=m;g<_;g++)Ls.fromBufferAttribute(h,g),Dc(Ls,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Dc(r,t,e,n,i,s,a){const o=Io.distanceSqToPoint(r);if(o<e){const l=new U;Io.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class ol extends En{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new U,f=new U,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const E=[],x=d/n;let b=0;d===0&&a===0?b=.5/e:d===n&&l===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){const w=R/e;h.x=-t*Math.cos(i+w*s)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(i+w*s)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(w+b,1-x),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const x=u[d][E+1],b=u[d][E],R=u[d+1][E],w=u[d+1][E+1];(d!==0||a>0)&&m.push(x,b,w),(d!==n-1||l<Math.PI)&&m.push(b,R,w)}this.setIndex(m),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _0 extends br{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class g0 extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ha=new ie,Ic=new U,Uc=new U;class v0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sl,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ic),Uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uc),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nc=new ie,Ur=new U,Va=new U;class x0 extends v0{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),Va.copy(n.position),Va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Va),n.updateMatrixWorld(),i.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc)}}class M0 extends g0{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new x0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Oc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);function Ln(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ou(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var je={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xr={duration:.5,overwrite:!1,delay:0},ll,Re,te,en=1e8,jt=1/en,Uo=Math.PI*2,S0=Uo/4,y0=0,Fu=Math.sqrt,E0=Math.cos,T0=Math.sin,Se=function(t){return typeof t=="string"},le=function(t){return typeof t=="function"},Fn=function(t){return typeof t=="number"},cl=function(t){return typeof t>"u"},yn=function(t){return typeof t=="object"},Oe=function(t){return t!==!1},ul=function(){return typeof window<"u"},Ds=function(t){return le(t)||Se(t)},Bu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ce=Array.isArray,No=/(?:-?\.?\d|\.)+/gi,zu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ga=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ku=/[+-]=-?[.\d]+/,Hu=/[^,'"\[\]\s]+/gi,b0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ee,dn,Oo,hl,Ze={},js={},Vu,Gu=function(t){return(js=Li(t,Ze))&&ke},fl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},qr=function(t,e){return!e&&console.warn(t)},Wu=function(t,e){return t&&(Ze[t]=e)&&js&&(js[t]=e)||Ze},Kr=function(){return 0},A0={suppressEvents:!0,isStart:!0,kill:!1},ks={suppressEvents:!0,kill:!1},w0={suppressEvents:!0},dl={},ti=[],Fo={},Xu,Xe={},Wa={},Fc=30,Hs=[],pl="",ml=function(t){var e=t[0],n,i;if(yn(e)||le(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Hs.length;i--&&!Hs[i].targetTest(e););n=Hs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new mh(t[i],n)))||t.splice(i,1);return t},Ti=function(t){return t._gsap||ml(nn(t))[0]._gsap},Yu=function(t,e,n){return(n=t[e])&&le(n)?t[e]():cl(n)&&t.getAttribute&&t.getAttribute(e)||n},Fe=function(t,e){return(t=t.split(",")).forEach(e)||t},ue=function(t){return Math.round(t*1e5)/1e5||0},Me=function(t){return Math.round(t*1e7)/1e7||0},cr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},R0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Zs=function(){var t=ti.length,e=ti.slice(0),n,i;for(Fo={},ti.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qu=function(t,e,n,i){ti.length&&!Re&&Zs(),t.render(e,n,Re&&e<0&&(t._initted||t._startAt)),ti.length&&!Re&&Zs()},Ku=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Hu).length<2?e:Se(t)?t.trim():t},ju=function(t){return t},sn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},C0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Li=function(t,e){for(var n in e)t[n]=e[n];return t},Bc=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=yn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},$s=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Vr=function(t){var e=t.parent||ee,n=t.keyframes?C0(Ce(t.keyframes)):sn;if(Oe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},P0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Zu=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},oa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ri=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},bi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},L0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Bo=function(t,e,n,i){return t._startAt&&(Re?t._startAt.revert(ks):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},D0=function r(t){return!t||t._ts&&r(t.parent)},zc=function(t){return t._repeat?Mr(t._tTime,t=t.duration()+t._rDelay)*t:0},Mr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Js=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},la=function(t){return t._end=Me(t._start+(t._tDur/Math.abs(t._ts||t._rts||jt)||0))},ca=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Me(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),la(t),n._dirty||bi(n,t)),t},$u=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Js(t.rawTime(),e),(!e._dur||rs(0,e.totalDuration(),n)-e._tTime>jt)&&e.render(n,!0)),bi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-jt}},_n=function(t,e,n,i){return e.parent&&ri(e),e._start=Me((Fn(n)?n:n||t!==ee?Qe(t,n,e):t._time)+e._delay),e._end=Me(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Zu(t,e,"_first","_last",t._sort?"_start":0),zo(e)||(t._recent=e),i||$u(t,e),t._ts<0&&ca(t,t._tTime),t},Ju=function(t,e){return(Ze.ScrollTrigger||fl("scrollTrigger",e))&&Ze.ScrollTrigger.create(e,t)},Qu=function(t,e,n,i,s){if(gl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Re&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Xu!==qe.frame)return ti.push(t),t._lazy=[s,i],1},I0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},zo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},U0=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&I0(t)&&!(!t._initted&&zo(t))||(t._ts<0||t._dp._ts<0)&&!zo(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=rs(0,t._tDur,e),u=Mr(l,o),t._yoyo&&u&1&&(a=1-a),u!==Mr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Re||i||t._zTime===jt||!e&&t._zTime){if(!t._initted&&Qu(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?jt:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Bo(t,e,n,!0),t._onUpdate&&!n&&Ke(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ke(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ri(t,1),!n&&!Re&&(Ke(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},N0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Sr=function(t,e,n,i){var s=t._repeat,a=Me(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Me(a*(s+1)+t._rDelay*s):a,o>0&&!i&&ca(t,t._tTime=t._tDur*o),t.parent&&la(t),n||bi(t.parent,t),t},kc=function(t){return t instanceof De?bi(t):Sr(t,t._dur)},O0={_start:0,endTime:Kr,totalDuration:Kr},Qe=function r(t,e,n){var i=t.labels,s=t._recent||O0,a=t.duration()>=en?s.endTime(!1):t._dur,o,l,c;return Se(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ce(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Gr=function(t,e,n){var i=Fn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Oe(l.vars.inherit)&&l.parent;a.immediateRender=Oe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new pe(e[0],a,e[s+1])},oi=function(t,e){return t||t===0?e(t):e},rs=function(t,e,n){return n<t?t:n>e?e:n},we=function(t,e){return!Se(t)||!(e=b0.exec(t))?"":e[1]},F0=function(t,e,n){return oi(n,function(i){return rs(t,e,i)})},ko=[].slice,th=function(t,e){return t&&yn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&yn(t[0]))&&!t.nodeType&&t!==dn},B0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Se(i)&&!e||th(i,1)?(s=n).push.apply(s,nn(i)):n.push(i)})||n},nn=function(t,e,n){return te&&!e&&te.selector?te.selector(t):Se(t)&&!n&&(Oo||!yr())?ko.call((e||hl).querySelectorAll(t),0):Ce(t)?B0(t,n):th(t)?ko.call(t,0):t?[t]:[]},Ho=function(t){return t=nn(t)[0]||qr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return nn(e,n.querySelectorAll?n:n===t?qr("Invalid scope")||hl.createElement("div"):t)}},eh=function(t){return t.sort(function(){return .5-Math.random()})},nh=function(t){if(le(t))return t;var e=yn(t)?t:{each:t},n=Ai(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return Se(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,m,g){var _=(g||e).length,p=a[_],d,E,x,b,R,w,A,P,M;if(!p){if(M=e.grid==="auto"?0:(e.grid||[1,en])[1],!M){for(A=-en;A<(A=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(p=a[_]=[],d=l?Math.min(M,_)*u-.5:i%M,E=M===en?0:l?_*h/M-.5:i/M|0,A=0,P=en,w=0;w<_;w++)x=w%M-d,b=E-(w/M|0),p[w]=R=c?Math.abs(c==="y"?b:x):Fu(x*x+b*b),R>A&&(A=R),R<P&&(P=R);i==="random"&&eh(p),p.max=A-P,p.min=P,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=we(e.amount||e.each)||0,n=n&&_<0?fh(n):n}return _=(p[f]-p.min)/p.max||0,Me(p.b+(n?n(_):_)*p.v)+p.u}},Vo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Me(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Fn(n)?0:we(n))}},ih=function(t,e){var n=Ce(t),i,s;return!n&&yn(t)&&(i=n=t.radius||en,t.values?(t=nn(t.values),(s=!Fn(t[0]))&&(i*=i)):t=Vo(t.increment)),oi(e,n?le(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=en,u=0,h=t.length,f,m;h--;)s?(f=t[h].x-o,m=t[h].y-l,f=f*f+m*m):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,s||u===a||Fn(a)?u:u+we(a)}:Vo(t))},rh=function(t,e,n,i){return oi(Ce(t)?!e:n===!0?!!(n=0):!i,function(){return Ce(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},z0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},k0=function(t,e){return function(n){return t(parseFloat(n))+(e||we(n))}},H0=function(t,e,n){return ah(t,e,0,1,n)},sh=function(t,e,n){return oi(n,function(i){return t[~~e(i)]})},V0=function r(t,e,n){var i=e-t;return Ce(t)?sh(t,r(0,t.length),e):oi(n,function(s){return(i+(s-t)%i)%i+t})},G0=function r(t,e,n){var i=e-t,s=i*2;return Ce(t)?sh(t,r(0,t.length-1),e):oi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},jr=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?Hu:No),n+=t.substr(e,i-e)+rh(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},ah=function(t,e,n,i,s){var a=e-t,o=i-n;return oi(s,function(l){return n+((l-t)/a*o||0)})},W0=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=Se(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ce(t)&&!Ce(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=Li(Ce(t)?[]:{},t));if(!u){for(l in e)_l.call(o,t,l,"get",e[l]);s=function(g){return Ml(g,o)||(a?t.p:t)}}}return oi(n,s)},Hc=function(t,e,n){var i=t.labels,s=en,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Ke=function(t,e,n){var i=t.vars,s=i[e],a=te,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ti.length&&Zs(),o&&(te=o),u=l?s.apply(c,l):s.call(c),te=a,u},Fr=function(t){return ri(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Re),t.progress()<1&&Ke(t,"onInterrupt"),t},sr,oh=[],lh=function(t){if(t)if(t=!t.name&&t.default||t,ul()||t.headless){var e=t.name,n=le(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Kr,render:Ml,add:_l,kill:av,modifier:sv,rawVars:0},a={targetTest:0,get:0,getSetter:xl,aliases:{},register:0};if(yr(),t!==i){if(Xe[e])return;sn(i,sn($s(t,s),a)),Li(i.prototype,Li(s,$s(t,a))),Xe[i.prop=e]=i,t.targetTest&&(Hs.push(i),dl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Wu(e,i),t.register&&t.register(ke,i,Be)}else oh.push(t)},Kt=255,Br={aqua:[0,Kt,Kt],lime:[0,Kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Kt],navy:[0,0,128],white:[Kt,Kt,Kt],olive:[128,128,0],yellow:[Kt,Kt,0],orange:[Kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Kt,0,0],pink:[Kt,192,203],cyan:[0,Kt,Kt],transparent:[Kt,Kt,Kt,0]},Xa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Kt+.5|0},ch=function(t,e,n){var i=t?Fn(t)?[t>>16,t>>8&Kt,t&Kt]:0:Br.black,s,a,o,l,c,u,h,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Br[t])i=Br[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Kt,i&Kt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Kt,t&Kt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(No),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Xa(l+1/3,s,a),i[1]=Xa(l,s,a),i[2]=Xa(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(zu),n&&i.length<4&&(i[3]=1),i}else i=t.match(No)||Br.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Kt,a=i[1]/Kt,o=i[2]/Kt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},uh=function(t){var e=[],n=[],i=-1;return t.split(ei).forEach(function(s){var a=s.match(rr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Vc=function(t,e,n){var i="",s=(t+i).match(ei),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=ch(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=uh(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ei,"1").split(rr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ei),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},ei=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Br)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),X0=/hsl[a]?\(/,hh=function(t){var e=t.join(" "),n;if(ei.lastIndex=0,ei.test(e))return n=X0.test(e),t[1]=Vc(t[1],n),t[0]=Vc(t[0],n,uh(t[1])),!0},Zr,qe=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,m,g=function _(p){var d=r()-i,E=p===!0,x,b,R,w;if((d>t||d<0)&&(n+=d-e),i+=d,R=i-n,x=R-a,(x>0||E)&&(w=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,a+=x+(x>=s?4:s-x),b=1),E||(l=c(_)),b)for(m=0;m<o.length;m++)o[m](R,f,w,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Vu&&(!Oo&&ul()&&(dn=Oo=window,hl=dn.document||{},Ze.gsap=ke,(dn.gsapVersions||(dn.gsapVersions=[])).push(ke.version),Gu(js||dn.GreenSockGlobals||!dn.gsap&&dn||{}),oh.forEach(lh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Zr=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Zr=0,c=Kr},lagSmoothing:function(p,d){t=p||1/0,e=Math.min(d||33,t)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,d,E){var x=d?function(b,R,w,A){p(b,R,w,A),h.remove(x)}:p;return h.remove(p),o[E?"unshift":"push"](x),yr(),x},remove:function(p,d){~(d=o.indexOf(p))&&o.splice(d,1)&&m>=d&&m--},_listeners:o},h}(),yr=function(){return!Zr&&qe.wake()},Bt={},Y0=/^[\d.\-M][\d.\-,\s]/,q0=/["']/g,K0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(q0,"").trim():+c,i=l.substr(o+1).trim();return e},j0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Z0=function(t){var e=(t+"").split("("),n=Bt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[K0(e[1])]:j0(t).split(",").map(Ku)):Bt._CE&&Y0.test(t)?Bt._CE("",t):n},fh=function(t){return function(e){return 1-t(1-e)}},dh=function r(t,e){for(var n=t._first,i;n;)n instanceof De?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ai=function(t,e){return t&&(le(t)?t:Bt[t]||Z0(t))||e},Ui=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Fe(t,function(o){Bt[o]=Ze[o]=s,Bt[a=o.toLowerCase()]=n;for(var l in s)Bt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Bt[o+"."+l]=s[l]}),s},ph=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ya=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Uo*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*T0((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:ph(o);return s=Uo/s,l.config=function(c,u){return r(t,c,u)},l},qa=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:ph(n);return i.config=function(s){return r(t,s)},i};Fe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ui(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;Ui("Elastic",Ya("in"),Ya("out"),Ya());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Ui("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ui("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Ui("Circ",function(r){return-(Fu(1-r*r)-1)});Ui("Sine",function(r){return r===1?1:-E0(r*S0)+1});Ui("Back",qa("in"),qa("out"),qa());Bt.SteppedEase=Bt.steps=Ze.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-jt;return function(o){return((i*rs(0,a,o)|0)+s)*n}}};xr.ease=Bt["quad.out"];Fe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return pl+=r+","+r+"Params,"});var mh=function(t,e){this.id=y0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Yu,this.set=e?e.getSetter:xl},$r=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Sr(this,+e.duration,1,1),this.data=e.data,te&&(this._ctx=te,te.data.push(this)),Zr||qe.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Sr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(yr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ca(this,n),!s._dp||s.parent||$u(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&_n(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===jt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Mr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-jt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Js(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-jt?0:this._rts,this.totalTime(rs(-Math.abs(this._delay),this._tDur,s),i!==!1),la(this),L0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(yr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==jt&&(this._tTime-=jt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&_n(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Oe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Js(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=w0);var i=Re;return Re=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Re=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,kc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,kc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Qe(this,n),Oe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Oe(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-jt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-jt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-jt)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=le(n)?n:ju,o=function(){var c=i.then;i.then=null,le(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Fr(this)},r}();sn($r.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-jt,_prom:0,_ps:!1,_rts:1});var De=function(r){Ou(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Oe(n.sortChildren),ee&&_n(n.parent||ee,Ln(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ju(Ln(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Gr(0,arguments,this),this},e.from=function(i,s,a){return Gr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Gr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Vr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new pe(i,s,Qe(this,a),1),this},e.call=function(i,s,a){return _n(this,pe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new pe(i,a,Qe(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Vr(a).immediateRender=Oe(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Vr(o).immediateRender=Oe(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Me(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,_,p,d,E,x,b,R,w,A;if(this!==ee&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,b=this._start,x=this._ts,d=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Me(u%p),u===l?(_=this._repeat,f=c):(_=~~(u/p),_&&_===u/p&&(f=c,_--),f>c&&(f=c)),R=Mr(this._tTime,p),!o&&this._tTime&&R!==_&&this._tTime-R*p-this._dur<=0&&(R=_),w&&_&1&&(f=c-f,A=1),_!==R&&!this._lock){var P=w&&R&1,M=P===(w&&_&1);if(_<R&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Me(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ke(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;dh(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=N0(this,Me(o),Me(f)),E&&(u-=f-(f=E._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!_&&(Ke(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&E!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,a),f!==this._time||!this._ts&&!d){E=0,g&&(u+=this._zTime=-jt);break}}m=g}else{m=this._last;for(var y=i<0?i:f;m;){if(g=m._prev,(m._act||y<=m._end)&&m._ts&&E!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(y-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(y-m._start)*m._ts,s,a||Re&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!d){E=0,g&&(u+=this._zTime=y?-jt:jt);break}}m=g}}if(E&&!s&&(this.pause(),E.render(f>=o?0:-jt)._zTime=f>=o?1:-1,this._ts))return this._start=b,la(this),this.render(i,s,a);this._onUpdate&&!s&&Ke(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ri(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Ke(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Fn(s)||(s=Qe(this,s,i)),!(i instanceof $r)){if(Ce(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Se(i))return this.addLabel(i,s);if(le(i))i=pe.delayedCall(0,i);else return this}return this!==i?_n(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-en);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof pe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Se(i)?this.removeLabel(i):le(i)?this.killTweensOf(i):(oa(this,i),i===this._recent&&(this._recent=this._last),bi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Me(qe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Qe(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=pe.delayedCall(0,s||Kr,a);return o.data="isPause",this._hasPause=1,_n(this,o,Qe(this,i))},e.removePause=function(i){var s=this._first;for(i=Qe(this,i);s;)s._start===i&&s.data==="isPause"&&ri(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)jn!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=nn(i),l=this._first,c=Fn(s),u;l;)l instanceof pe?R0(l._targets,o)&&(c?(!jn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Qe(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=pe.to(a,sn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||jt,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Sr(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,sn({startAt:{time:Qe(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Hc(this,Qe(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Hc(this,Qe(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+jt)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return bi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),bi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=en,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,_n(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Sr(a,a===ee&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ee._ts&&(qu(ee,Js(i,ee)),Xu=qe.frame),qe.frame>=Fc){Fc+=je.autoSleep||120;var s=ee._first;if((!s||!s._ts)&&je.autoSleep&&qe._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qe.sleep()}}},t}($r);sn(De.prototype,{_lock:0,_hasPause:0,_forcing:0});var $0=function(t,e,n,i,s,a,o){var l=new Be(this._pt,t,e,0,1,Sh,null,s),c=0,u=0,h,f,m,g,_,p,d,E;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=jr(i)),a&&(E=[n,i],a(E,t,e),n=E[0],i=E[1]),f=n.match(Ga)||[];h=Ga.exec(i);)g=h[0],_=i.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?cr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=Ga.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ku.test(i)||d)&&(l.e=0),this._pt=l,l},_l=function(t,e,n,i,s,a,o,l,c,u){le(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:le(h)?c?t[e.indexOf("set")||!le(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,m=le(h)?c?nv:xh:vl,g;if(Se(i)&&(~i.indexOf("random(")&&(i=jr(i)),i.charAt(1)==="="&&(g=cr(f,i)+(we(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Go)return!isNaN(f*i)&&i!==""?(g=new Be(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?rv:Mh,0,m),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&fl(e,i),$0.call(this,t,e,f,i,m,l||je.stringFilter,c))},J0=function(t,e,n,i,s){if(le(t)&&(t=Wr(t,s,e,n,i)),!yn(t)||t.style&&t.nodeType||Ce(t)||Bu(t))return Se(t)?Wr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Wr(t[o],s,e,n,i);return a},_h=function(t,e,n,i,s,a){var o,l,c,u;if(Xe[t]&&(o=new Xe[t]).init(s,o.rawVars?e[t]:J0(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Be(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==sr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},jn,Go,gl=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,m=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,d=t.parent,E=d&&d.data==="nested"?d.vars.targets:p,x=t._overwrite==="auto"&&!ll,b=t.timeline,R,w,A,P,M,y,L,z,O,j,Y,G,K;if(b&&(!f||!s)&&(s="none"),t._ease=Ai(s,xr.ease),t._yEase=h?fh(Ai(h===!0?s:h,xr.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!b&&!!i.runBackwards,!b||f&&!i.stagger){if(z=p[0]?Ti(p[0]).harness:0,G=z&&i[z.prop],R=$s(i,dl),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!m?_.render(-1,!0):_.revert(u&&g?ks:A0),_._lazy=0),a){if(ri(t._startAt=pe.set(p,sn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&Oe(l),startAt:null,delay:0,onUpdate:c&&function(){return Ke(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Re||!o&&!m)&&t._startAt.revert(ks),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),A=sn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Oe(l),immediateRender:o,stagger:0,parent:d},R),G&&(A[z.prop]=G),ri(t._startAt=pe.set(p,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Re?t._startAt.revert(ks):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,jt,jt);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Oe(l)||l&&!g,w=0;w<p.length;w++){if(M=p[w],L=M._gsap||ml(p)[w]._gsap,t._ptLookup[w]=j={},Fo[L.id]&&ti.length&&Zs(),Y=E===p?w:E.indexOf(M),z&&(O=new z).init(M,G||R,t,Y,E)!==!1&&(t._pt=P=new Be(t._pt,M,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(W){j[W]=P}),O.priority&&(y=1)),!z||G)for(A in R)Xe[A]&&(O=_h(A,R,t,Y,M,E))?O.priority&&(y=1):j[A]=P=_l.call(t,M,A,"get",R[A],Y,E,0,i.stringFilter);t._op&&t._op[w]&&t.kill(M,t._op[w]),x&&t._pt&&(jn=t,ee.killTweensOf(M,j,t.globalTime(e)),K=!t.parent,jn=0),t._pt&&l&&(Fo[L.id]=1)}y&&yh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,f&&e<=0&&b.render(en,!0,!0)},Q0=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,m;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,m=t._targets.length;m--;){if(u=f[m][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Go=1,t.vars[e]="+=0",gl(t,o),Go=0,l?qr(e+" not eligible for reset"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=ue(n)+we(h.e)),h.b&&(h.b=u.s+we(h.b))},tv=function(t,e){var n=t[0]?Ti(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Li({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ev=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Ce(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Wr=function(t,e,n,i,s){return le(t)?t.call(e,n,i,s):Se(t)&&~t.indexOf("random(")?jr(t):t},gh=pl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vh={};Fe(gh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vh[r]=1});var pe=function(r){Ou(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Vr(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,d=l.yoyoEase,E=i.parent||ee,x=(Ce(n)||Bu(n)?Fn(n[0]):"length"in i)?[n]:nn(n),b,R,w,A,P,M,y,L;if(o._targets=x.length?ml(x):qr("GSAP target "+n+" not found. https://gsap.com",!je.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||f||Ds(c)||Ds(u)){if(i=o.vars,b=o.timeline=new De({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:x}),b.kill(),b.parent=b._dp=Ln(o),b._start=0,f||Ds(c)||Ds(u)){if(A=x.length,y=f&&nh(f),yn(f))for(P in f)~gh.indexOf(P)&&(L||(L={}),L[P]=f[P]);for(R=0;R<A;R++)w=$s(i,vh),w.stagger=0,d&&(w.yoyoEase=d),L&&Li(w,L),M=x[R],w.duration=+Wr(c,Ln(o),R,M,x),w.delay=(+Wr(u,Ln(o),R,M,x)||0)-o._delay,!f&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),b.to(M,w,y?y(R,M,x):0),b._ease=Bt.none;b.duration()?c=u=0:o.timeline=0}else if(g){Vr(sn(b.vars.defaults,{ease:"none"})),b._ease=Ai(g.ease||i.ease||"none");var z=0,O,j,Y;if(Ce(g))g.forEach(function(G){return b.to(x,G,">")}),b.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||ev(P,g[P],w,g.easeEach);for(P in w)for(O=w[P].sort(function(G,K){return G.t-K.t}),z=0,R=0;R<O.length;R++)j=O[R],Y={ease:j.e,duration:(j.t-(R?O[R-1].t:0))/100*c},Y[P]=j.v,b.to(x,Y,z),z+=Y.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return m===!0&&!ll&&(jn=Ln(o),ee.killTweensOf(x),jn=0),_n(E,Ln(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Me(E._time)&&Oe(h)&&D0(Ln(o))&&E.data!=="nested")&&(o._tTime=-jt,o.render(Math.max(0,-u)||0)),p&&Ju(Ln(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-jt&&!u?l:i<jt?0:i,f,m,g,_,p,d,E,x,b;if(!c)U0(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=Me(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===Me(h/_)&&(f=c,g--),f>c&&(f=c)),d=this._yoyo&&g&1,d&&(b=this._yEase,f=c-f),p=Mr(this._tTime,_),f===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(x&&this._yEase&&dh(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Me(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Qu(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(b||this._ease)(f/c),this._from&&(this.ratio=E=1-E),f&&!o&&!s&&!g&&(Ke(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(E,m.d),m=m._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Bo(this,i,s,a),Ke(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Ke(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Bo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ri(this,1),!s&&!(u&&!o)&&(h||o||d)&&(Ke(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Zr||qe.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||gl(this,c),u=this._ease(c/this._dur),Q0(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(ca(this,0),this.parent||Zu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,jn&&jn.vars.overwrite!==!0)._first||Fr(this),this.parent&&a!==this.timeline.totalDuration()&&Sr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?nn(i):o,c=this._ptLookup,u=this._pt,h,f,m,g,_,p,d;if((!s||s==="all")&&P0(o,l))return s==="all"&&(this._pt=0),Fr(this);for(h=this._op=this._op||[],s!=="all"&&(Se(s)&&(_={},Fe(s,function(E){return _[E]=1}),s=_),s=tv(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(h[d]=s,g=f,m={}):(m=h[d]=h[d]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&oa(this,p,"_pt"),delete f[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&Fr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Gr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Gr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return ee.killTweensOf(i,s,a)},t}($r);sn(pe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fe("staggerTo,staggerFrom,staggerFromTo",function(r){pe[r]=function(){var t=new De,e=ko.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var vl=function(t,e,n){return t[e]=n},xh=function(t,e,n){return t[e](n)},nv=function(t,e,n,i){return t[e](i.fp,n)},iv=function(t,e,n){return t.setAttribute(e,n)},xl=function(t,e){return le(t[e])?xh:cl(t[e])&&t.setAttribute?iv:vl},Mh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},rv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Sh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ml=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},sv=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},av=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?oa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},ov=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},yh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Be=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Mh,this.d=l||this,this.set=c||vl,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ov,this.m=n,this.mt=s,this.tween=i},r}();Fe(pl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return dl[r]=1});Ze.TweenMax=Ze.TweenLite=pe;Ze.TimelineLite=Ze.TimelineMax=De;ee=new De({sortChildren:!1,defaults:xr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});je.stringFilter=hh;var wi=[],Vs={},lv=[],Gc=0,cv=0,Ka=function(t){return(Vs[t]||lv).map(function(e){return e()})},Wo=function(){var t=Date.now(),e=[];t-Gc>2&&(Ka("matchMediaInit"),wi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=dn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ka("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Gc=t,Ka("matchMedia"))},Eh=function(){function r(e,n){this.selector=n&&Ho(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cv++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){le(n)&&(s=i,i=n,n=le);var a=this,o=function(){var c=te,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ho(s)),te=a,h=i.apply(a,arguments),le(h)&&a._r.push(h),te=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===le?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=te;te=null,n(this),te=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof pe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof De?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof pe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=wi.length;a--;)wi[a].id===this.id&&wi.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),uv=function(){function r(e){this.contexts=[],this.scope=e,te&&te.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){yn(n)||(n={matches:n});var a=new Eh(0,s||this.scope),o=a.conditions={},l,c,u;te&&!a.selector&&(a.selector=te.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=dn.matchMedia(n[c]),l&&(wi.indexOf(a)<0&&wi.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Wo):l.addEventListener("change",Wo)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Qs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return lh(i)})},timeline:function(t){return new De(t)},getTweensOf:function(t,e){return ee.getTweensOf(t,e)},getProperty:function(t,e,n,i){Se(t)&&(t=nn(t)[0]);var s=Ti(t||{}).get,a=n?ju:Ku;return n==="native"&&(n=""),t&&(e?a((Xe[e]&&Xe[e].get||s)(t,e,n,i)):function(o,l,c){return a((Xe[o]&&Xe[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=nn(t),t.length>1){var i=t.map(function(u){return ke.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=Xe[e],o=Ti(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;sr._pt=0,h.init(t,n?u+n:u,sr,0,[t]),h.render(1,h),sr._pt&&Ml(1,sr)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=ke.to(t,Li((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return ee.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ai(t.ease,xr.ease)),Bc(xr,t||{})},config:function(t){return Bc(je,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Xe[o]&&!Ze[o]&&qr(e+" effect requires "+o+" plugin.")}),Wa[e]=function(o,l,c){return n(nn(o),sn(l||{},s),c)},a&&(De.prototype[e]=function(o,l,c){return this.add(Wa[e](o,yn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Bt[t]=Ai(e)},parseEase:function(t,e){return arguments.length?Ai(t,e):Bt},getById:function(t){return ee.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new De(t),i,s;for(n.smoothChildTiming=Oe(t.smoothChildTiming),ee.remove(n),n._dp=0,n._time=n._tTime=ee._time,i=ee._first;i;)s=i._next,(e||!(!i._dur&&i instanceof pe&&i.vars.onComplete===i._targets[0]))&&_n(n,i,i._start-i._delay),i=s;return _n(ee,n,0),n},context:function(t,e){return t?new Eh(t,e):te},matchMedia:function(t){return new uv(t)},matchMediaRefresh:function(){return wi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Wo()},addEventListener:function(t,e){var n=Vs[t]||(Vs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Vs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:V0,wrapYoyo:G0,distribute:nh,random:rh,snap:ih,normalize:H0,getUnit:we,clamp:F0,splitColor:ch,toArray:nn,selector:Ho,mapRange:ah,pipe:z0,unitize:k0,interpolate:W0,shuffle:eh},install:Gu,effects:Wa,ticker:qe,updateRoot:De.updateRoot,plugins:Xe,globalTimeline:ee,core:{PropTween:Be,globals:Wu,Tween:pe,Timeline:De,Animation:$r,getCache:Ti,_removeLinkedListItem:oa,reverting:function(){return Re},context:function(t){return t&&te&&(te.data.push(t),t._ctx=te),te},suppressOverwrites:function(t){return ll=t}}};Fe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Qs[r]=pe[r]});qe.add(De.updateRoot);sr=Qs.to({},{duration:0});var hv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},fv=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=hv(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},ja=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Se(s)&&(l={},Fe(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}fv(o,s)}}}},ke=Qs.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Re?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ja("roundProps",Vo),ja("modifiers"),ja("snap",ih))||Qs;pe.version=De.version=ke.version="3.12.5";Vu=1;ul()&&yr();Bt.Power0;Bt.Power1;Bt.Power2;Bt.Power3;Bt.Power4;Bt.Linear;Bt.Quad;Bt.Cubic;Bt.Quart;Bt.Quint;Bt.Strong;Bt.Elastic;Bt.Back;Bt.SteppedEase;Bt.Bounce;Bt.Sine;Bt.Expo;Bt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Wc,Zn,ur,Sl,Ei,Xc,yl,dv=function(){return typeof window<"u"},Bn={},vi=180/Math.PI,hr=Math.PI/180,er=Math.atan2,Yc=1e8,El=/([A-Z])/g,pv=/(left|right|width|margin|padding|x)/i,mv=/[\s,\(]\S/,vn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_v=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},gv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},vv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Th=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},bh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},xv=function(t,e,n){return t.style[e]=n},Mv=function(t,e,n){return t.style.setProperty(e,n)},Sv=function(t,e,n){return t._gsap[e]=n},yv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ev=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Tv=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ne="transform",ze=ne+"Origin",bv=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Bn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=vn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Dn(i,o)}):this.tfm[t]=a.x?a[t]:Dn(i,t),t===ze&&(this.tfm.zOrigin=a.zOrigin);else return vn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(ne)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ze,e,"")),t=ne}(s||e)&&this.props.push(t,e,s[t])},Ah=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Av=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(El,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=yl(),(!s||!s.isStart)&&!n[ne]&&(Ah(n),i.zOrigin&&n[ze]&&(n[ze]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},wh=function(t,e){var n={target:t,props:[],revert:Av,save:bv};return t._gsap||ke.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Rh,Yo=function(t,e){var n=Zn.createElementNS?Zn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Zn.createElement(t);return n&&n.style?n:Zn.createElement(t)},Mn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(El,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Er(e)||e,1)||""},qc="O,Moz,ms,Ms,Webkit".split(","),Er=function(t,e,n){var i=e||Ei,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(qc[a]+t in s););return a<0?null:(a===3?"ms":a>=0?qc[a]:"")+t},qo=function(){dv()&&window.document&&(Wc=window,Zn=Wc.document,ur=Zn.documentElement,Ei=Yo("div")||{style:{}},Yo("div"),ne=Er(ne),ze=ne+"Origin",Ei.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rh=!!Er("perspective"),yl=ke.core.reverting,Sl=1)},Za=function r(t){var e=Yo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(ur.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ur.removeChild(e),this.style.cssText=s,a},Kc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ch=function(t){var e;try{e=t.getBBox()}catch{e=Za.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Za||(e=Za.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Kc(t,["x","cx","x1"])||0,y:+Kc(t,["y","cy","y1"])||0,width:0,height:0}:e},Ph=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ch(t))},Di=function(t,e){if(e){var n=t.style,i;e in Bn&&e!==ze&&(e=ne),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(El,"-$1").toLowerCase())):n.removeAttribute(e)}},$n=function(t,e,n,i,s,a){var o=new Be(t._pt,e,n,0,1,a?bh:Th);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},jc={deg:1,rad:1,turn:1},wv={grid:1,flex:1},si=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ei.style,l=pv.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,_,p,d;if(i===a||!s||jc[i]||jc[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),d=t.getCTM&&Ph(t),(m||a==="%")&&(Bn[e]||~e.indexOf("adius")))return g=d?t.getBBox()[l?"width":"height"]:t[u],ue(m?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Zn||!_.appendChild)&&(_=Zn.body),p=_._gsap,p&&m&&p.width&&l&&p.time===qe.time&&!p.uncache)return ue(s/p.width*h);if(m&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=h+i,g=t[u],E?t.style[e]=E:Di(t,e)}else(m||a==="%")&&!wv[Mn(_,"display")]&&(o.position=Mn(t,"position")),_===t&&(o.position="static"),_.appendChild(Ei),g=Ei[u],_.removeChild(Ei),o.position="absolute";return l&&m&&(p=Ti(_),p.time=qe.time,p.width=_[u]),ue(f?g*s/h:g&&s?h/g*s:0)},Dn=function(t,e,n,i){var s;return Sl||qo(),e in vn&&e!=="transform"&&(e=vn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Bn[e]&&e!=="transform"?(s=Qr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ea(Mn(t,ze))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ta[e]&&ta[e](t,e,n)||Mn(t,e)||Yu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?si(t,e,s,n)+n:s},Rv=function(t,e,n,i){if(!n||n==="none"){var s=Er(e,t,1),a=s&&Mn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Mn(t,"borderTopColor"))}var o=new Be(this._pt,t.style,e,0,1,Sh),l=0,c=0,u,h,f,m,g,_,p,d,E,x,b,R;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=Mn(t,e)||i,_?t.style[e]=_:Di(t,e)),u=[n,i],hh(u),n=u[0],i=u[1],f=n.match(rr)||[],R=i.match(rr)||[],R.length){for(;h=rr.exec(i);)p=h[0],E=i.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(m=parseFloat(_)||0,b=_.substr((m+"").length),p.charAt(1)==="="&&(p=cr(m,p)+b),d=parseFloat(p),x=p.substr((d+"").length),l=rr.lastIndex-x.length,x||(x=x||je.units[e]||b,l===i.length&&(i+=x,o.e+=x)),b!==x&&(m=si(t,e,_,x)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:m,c:d-m,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?bh:Th;return ku.test(i)&&(o.e=0),this._pt=o,o},Zc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Cv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Zc[n]||n,e[1]=Zc[i]||i,e.join(" ")},Pv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Bn[o]&&(l=1,o=o==="transformOrigin"?ze:ne),Di(n,o);l&&(Di(n,ne),a&&(a.svg&&n.removeAttribute("transform"),Qr(n,1),a.uncache=1,Ah(i)))}},ta={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Be(t._pt,e,n,0,0,Pv);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Jr=[1,0,0,1,0,0],Lh={},Dh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},$c=function(t){var e=Mn(t,ne);return Dh(e)?Jr:e.substr(7).match(zu).map(ue)},Tl=function(t,e){var n=t._gsap||Ti(t),i=t.style,s=$c(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Jr:s):(s===Jr&&!t.offsetParent&&t!==ur&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,ur.appendChild(t)),s=$c(t),l?i.display=l:Di(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ur.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ko=function(t,e,n,i,s,a){var o=t._gsap,l=s||Tl(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],d=l[4],E=l[5],x=e.split(" "),b=parseFloat(x[0])||0,R=parseFloat(x[1])||0,w,A,P,M;n?l!==Jr&&(A=m*p-g*_)&&(P=b*(p/A)+R*(-_/A)+(_*E-p*d)/A,M=b*(-g/A)+R*(m/A)-(m*E-g*d)/A,b=P,R=M):(w=Ch(t),b=w.x+(~x[0].indexOf("%")?b/100*w.width:b),R=w.y+(~(x[1]||x[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&o.smooth?(d=b-c,E=R-u,o.xOffset=h+(d*m+E*_)-d,o.yOffset=f+(d*g+E*p)-E):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=R,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[ze]="0px 0px",a&&($n(a,o,"xOrigin",c,b),$n(a,o,"yOrigin",u,R),$n(a,o,"xOffset",h,o.xOffset),$n(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",b+" "+R)},Qr=function(t,e){var n=t._gsap||new mh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Mn(t,ze)||"0",u,h,f,m,g,_,p,d,E,x,b,R,w,A,P,M,y,L,z,O,j,Y,G,K,W,it,at,ut,Ct,zt,q,J;return u=h=f=_=p=d=E=x=b=0,m=g=1,n.svg=!!(t.getCTM&&Ph(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ne]!=="none"?l[ne]:"")),i.scale=i.rotate=i.translate="none"),A=Tl(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),Ko(t,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,A)),R=n.xOrigin||0,w=n.yOrigin||0,A!==Jr&&(L=A[0],z=A[1],O=A[2],j=A[3],u=Y=A[4],h=G=A[5],A.length===6?(m=Math.sqrt(L*L+z*z),g=Math.sqrt(j*j+O*O),_=L||z?er(z,L)*vi:0,E=O||j?er(O,j)*vi+_:0,E&&(g*=Math.abs(Math.cos(E*hr))),n.svg&&(u-=R-(R*L+w*O),h-=w-(R*z+w*j))):(J=A[6],zt=A[7],at=A[8],ut=A[9],Ct=A[10],q=A[11],u=A[12],h=A[13],f=A[14],P=er(J,Ct),p=P*vi,P&&(M=Math.cos(-P),y=Math.sin(-P),K=Y*M+at*y,W=G*M+ut*y,it=J*M+Ct*y,at=Y*-y+at*M,ut=G*-y+ut*M,Ct=J*-y+Ct*M,q=zt*-y+q*M,Y=K,G=W,J=it),P=er(-O,Ct),d=P*vi,P&&(M=Math.cos(-P),y=Math.sin(-P),K=L*M-at*y,W=z*M-ut*y,it=O*M-Ct*y,q=j*y+q*M,L=K,z=W,O=it),P=er(z,L),_=P*vi,P&&(M=Math.cos(P),y=Math.sin(P),K=L*M+z*y,W=Y*M+G*y,z=z*M-L*y,G=G*M-Y*y,L=K,Y=W),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,d=180-d),m=ue(Math.sqrt(L*L+z*z+O*O)),g=ue(Math.sqrt(G*G+J*J)),P=er(Y,G),E=Math.abs(P)>2e-4?P*vi:0,b=q?1/(q<0?-q:q):0),n.svg&&(K=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Dh(Mn(t,ne)),K&&t.setAttribute("transform",K))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(m*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ue(m),n.scaleY=ue(g),n.rotation=ue(_)+o,n.rotationX=ue(p)+o,n.rotationY=ue(d)+o,n.skewX=E+o,n.skewY=x+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ze]=ea(c)),n.xOffset=n.yOffset=0,n.force3D=je.force3D,n.renderTransform=n.svg?Dv:Rh?Ih:Lv,n.uncache=0,n},ea=function(t){return(t=t.split(" "))[0]+" "+t[1]},$a=function(t,e,n){var i=we(e);return ue(parseFloat(e)+parseFloat(si(t,"x",n+"px",i)))+i},Lv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ih(t,e)},mi="0deg",Nr="0px",_i=") ",Ih=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,d=n.force3D,E=n.target,x=n.zOrigin,b="",R=d==="auto"&&t&&t!==1||d===!0;if(x&&(h!==mi||u!==mi)){var w=parseFloat(u)*hr,A=Math.sin(w),P=Math.cos(w),M;w=parseFloat(h)*hr,M=Math.cos(w),a=$a(E,a,A*M*-x),o=$a(E,o,-Math.sin(w)*-x),l=$a(E,l,P*M*-x+x)}p!==Nr&&(b+="perspective("+p+_i),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(R||a!==Nr||o!==Nr||l!==Nr)&&(b+=l!==Nr||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+_i),c!==mi&&(b+="rotate("+c+_i),u!==mi&&(b+="rotateY("+u+_i),h!==mi&&(b+="rotateX("+h+_i),(f!==mi||m!==mi)&&(b+="skew("+f+", "+m+_i),(g!==1||_!==1)&&(b+="scale("+g+", "+_+_i),E.style[ne]=b||"translate(0, 0)"},Dv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,d=n.yOffset,E=n.forceCSS,x=parseFloat(a),b=parseFloat(o),R,w,A,P,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=hr,c*=hr,R=Math.cos(l)*h,w=Math.sin(l)*h,A=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=hr,M=Math.tan(c-u),M=Math.sqrt(1+M*M),A*=M,P*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),R*=M,w*=M)),R=ue(R),w=ue(w),A=ue(A),P=ue(P)):(R=h,P=f,w=A=0),(x&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(x=si(m,"x",a,"px"),b=si(m,"y",o,"px")),(g||_||p||d)&&(x=ue(x+g-(g*R+_*A)+p),b=ue(b+_-(g*w+_*P)+d)),(i||s)&&(M=m.getBBox(),x=ue(x+i/100*M.width),b=ue(b+s/100*M.height)),M="matrix("+R+","+w+","+A+","+P+","+x+","+b+")",m.setAttribute("transform",M),E&&(m.style[ne]=M)},Iv=function(t,e,n,i,s){var a=360,o=Se(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?vi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Yc)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Yc)%a-~~(c/a)*a)),t._pt=f=new Be(t._pt,e,n,i,c,_v),f.e=u,f.u="deg",t._props.push(n),f},Jc=function(t,e){for(var n in e)t[n]=e[n];return t},Uv=function(t,e,n){var i=Jc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ne]=e,o=Qr(n,1),Di(n,ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ne],a[ne]=e,o=Qr(n,1),a[ne]=c);for(l in Bn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=we(c),g=we(u),h=m!==g?si(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Be(t._pt,o,l,h,f-h,Xo),t._pt.u=g||0,t._props.push(l));Jc(o,i)};Fe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ta[t>1?"border"+r:r]=function(o,l,c,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return Dn(o,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,_){return m[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,m,h)}});var Uh={name:"css",register:qo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,m,g,_,p,d,E,x,b,R,w,A,P;Sl||qo(),this.styles=this.styles||wh(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Xe[_]&&_h(_,e,n,i,t,s)))){if(m=typeof u,g=ta[_],m==="function"&&(u=u.call(n,i,t,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=jr(u)),g)g(this,t,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",ei.lastIndex=0,ei.test(c)||(p=we(c),d=we(u)),d?p!==d&&(c=si(t,_,c,d)+d):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Se(c)&&~c.indexOf("random(")&&(c=jr(c)),we(c+"")||c==="auto"||(c+=je.units[_]||we(Dn(t,_))||""),(c+"").charAt(1)==="="&&(c=Dn(t,_))):c=Dn(t,_),f=parseFloat(c),E=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),_ in vn&&(_==="autoAlpha"&&(f===1&&Dn(t,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),$n(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=vn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Bn,x){if(this.styles.save(_),b||(R=t._gsap,R.renderTransform&&!e.parseTransform||Qr(t,e.parseTransform),w=e.smoothOrigin!==!1&&R.smooth,b=this._pt=new Be(this._pt,o,ne,0,1,R.renderTransform,R,0,-1),b.dep=1),_==="scale")this._pt=new Be(this._pt,R,"scaleY",R.scaleY,(E?cr(R.scaleY,E+h):h)-R.scaleY||0,Xo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(ze,0,o[ze]),u=Cv(u),R.svg?Ko(t,u,0,w,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==R.zOrigin&&$n(this,R,"zOrigin",R.zOrigin,d),$n(this,o,_,ea(c),ea(u)));continue}else if(_==="svgOrigin"){Ko(t,u,1,w,0,this);continue}else if(_ in Lh){Iv(this,R,_,f,E?cr(f,E+u):u);continue}else if(_==="smoothOrigin"){$n(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){Uv(this,u,t);continue}}else _ in o||(_=Er(_)||_);if(x||(h||h===0)&&(f||f===0)&&!mv.test(u)&&_ in o)p=(c+"").substr((f+"").length),h||(h=0),d=we(u)||(_ in je.units?je.units[_]:p),p!==d&&(f=si(t,_,c,d)),this._pt=new Be(this._pt,x?R:o,_,f,(E?cr(f,E+h):h)-f,!x&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?vv:Xo),this._pt.u=d||0,p!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=gv);else if(_ in o)Rv.call(this,t,_,c,E?E+u:u);else if(_ in t)this.add(t,_,c||t[_],E?E+u:u,i,s);else if(_!=="parseTransform"){fl(_,u);continue}x||(_ in o?P.push(_,0,o[_]):P.push(_,1,c||t[_])),a.push(_)}}A&&yh(this)},render:function(t,e){if(e.tween._time||!yl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Dn,aliases:vn,getSetter:function(t,e,n){var i=vn[e];return i&&i.indexOf(",")<0&&(e=i),e in Bn&&e!==ze&&(t._gsap.x||Dn(t,"x"))?n&&Xc===n?e==="scale"?yv:Sv:(Xc=n||{})&&(e==="scale"?Ev:Tv):t.style&&!cl(t.style[e])?xv:~e.indexOf("-")?Mv:xl(t,e)},core:{_removeProperty:Di,_getMatrix:Tl}};ke.utils.checkPrefix=Er;ke.core.getStyleSaver=wh;(function(r,t,e,n){var i=Fe(r+","+t+","+e,function(s){Bn[s]=1});Fe(t,function(s){je.units[s]="deg",Lh[s]=1}),vn[i[13]]=r+","+t,Fe(n,function(s){var a=s.split(":");vn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){je.units[r]="px"});ke.registerPlugin(Uh);var bl=ke.registerPlugin(Uh)||ke;bl.core.Tween;const Qc={type:"change"},Ja={type:"start"},tu={type:"end"},Is=new rl,eu=new qn,Nv=Math.cos(70*ed.DEG2RAD);class Ov extends Ii{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",lt),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",lt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Qc),n.update(),s=i.NONE},this.update=function(){const v=new U,F=new Pi().setFromUnitVectors(t.up,new U(0,1,0)),B=F.clone().invert(),X=new U,Q=new Pi,gt=new U,Tt=2*Math.PI;return function(me=null){const Ht=n.object.position;v.copy(Ht).sub(n.target),v.applyQuaternion(F),o.setFromVector3(v),n.autoRotate&&s===i.NONE&&z(y(me)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let _e=n.minAzimuthAngle,he=n.maxAzimuthAngle;isFinite(_e)&&isFinite(he)&&(_e<-Math.PI?_e+=Tt:_e>Math.PI&&(_e-=Tt),he<-Math.PI?he+=Tt:he>Math.PI&&(he-=Tt),_e<=he?o.theta=Math.max(_e,Math.min(he,o.theta)):o.theta=o.theta>(_e+he)/2?Math.max(_e,o.theta):Math.min(he,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let zn=!1;if(n.zoomToCursor&&w||n.object.isOrthographicCamera)o.radius=at(o.radius);else{const ye=o.radius;o.radius=at(o.radius*c),zn=ye!=o.radius}if(v.setFromSpherical(o),v.applyQuaternion(B),Ht.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&w){let ye=null;if(n.object.isPerspectiveCamera){const Tn=v.length();ye=at(Tn*c);const li=Tn-ye;n.object.position.addScaledVector(b,li),n.object.updateMatrixWorld(),zn=!!li}else if(n.object.isOrthographicCamera){const Tn=new U(R.x,R.y,0);Tn.unproject(n.object);const li=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),zn=li!==n.object.zoom;const Rr=new U(R.x,R.y,0);Rr.unproject(n.object),n.object.position.sub(Rr).add(Tn),n.object.updateMatrixWorld(),ye=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ye).add(n.object.position):(Is.origin.copy(n.object.position),Is.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Is.direction))<Nv?t.lookAt(n.target):(eu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Is.intersectPlane(eu,n.target))))}else if(n.object.isOrthographicCamera){const ye=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),ye!==n.object.zoom&&(n.object.updateProjectionMatrix(),zn=!0)}return c=1,w=!1,zn||X.distanceToSquared(n.object.position)>a||8*(1-Q.dot(n.object.quaternion))>a||gt.distanceToSquared(n.target)>a?(n.dispatchEvent(Qc),X.copy(n.object.position),Q.copy(n.object.quaternion),gt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ct),n.domElement.removeEventListener("pointerdown",Pt),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",S),n.domElement.getRootNode().removeEventListener("keydown",xt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",lt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Oc,l=new Oc;let c=1;const u=new U,h=new Rt,f=new Rt,m=new Rt,g=new Rt,_=new Rt,p=new Rt,d=new Rt,E=new Rt,x=new Rt,b=new U,R=new Rt;let w=!1;const A=[],P={};let M=!1;function y(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function L(v){const F=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*F)}function z(v){l.theta-=v}function O(v){l.phi-=v}const j=function(){const v=new U;return function(B,X){v.setFromMatrixColumn(X,0),v.multiplyScalar(-B),u.add(v)}}(),Y=function(){const v=new U;return function(B,X){n.screenSpacePanning===!0?v.setFromMatrixColumn(X,1):(v.setFromMatrixColumn(X,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(B),u.add(v)}}(),G=function(){const v=new U;return function(B,X){const Q=n.domElement;if(n.object.isPerspectiveCamera){const gt=n.object.position;v.copy(gt).sub(n.target);let Tt=v.length();Tt*=Math.tan(n.object.fov/2*Math.PI/180),j(2*B*Tt/Q.clientHeight,n.object.matrix),Y(2*X*Tt/Q.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(B*(n.object.right-n.object.left)/n.object.zoom/Q.clientWidth,n.object.matrix),Y(X*(n.object.top-n.object.bottom)/n.object.zoom/Q.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function K(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function it(v,F){if(!n.zoomToCursor)return;w=!0;const B=n.domElement.getBoundingClientRect(),X=v-B.left,Q=F-B.top,gt=B.width,Tt=B.height;R.x=X/gt*2-1,R.y=-(Q/Tt)*2+1,b.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function at(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function ut(v){h.set(v.clientX,v.clientY)}function Ct(v){it(v.clientX,v.clientX),d.set(v.clientX,v.clientY)}function zt(v){g.set(v.clientX,v.clientY)}function q(v){f.set(v.clientX,v.clientY),m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;z(2*Math.PI*m.x/F.clientHeight),O(2*Math.PI*m.y/F.clientHeight),h.copy(f),n.update()}function J(v){E.set(v.clientX,v.clientY),x.subVectors(E,d),x.y>0?K(L(x.y)):x.y<0&&W(L(x.y)),d.copy(E),n.update()}function dt(v){_.set(v.clientX,v.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),G(p.x,p.y),g.copy(_),n.update()}function ht(v){it(v.clientX,v.clientY),v.deltaY<0?W(L(v.deltaY)):v.deltaY>0&&K(L(v.deltaY)),n.update()}function Lt(v){let F=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),F=!0;break}F&&(v.preventDefault(),n.update())}function It(v){if(A.length===1)h.set(v.pageX,v.pageY);else{const F=wt(v),B=.5*(v.pageX+F.x),X=.5*(v.pageY+F.y);h.set(B,X)}}function Ot(v){if(A.length===1)g.set(v.pageX,v.pageY);else{const F=wt(v),B=.5*(v.pageX+F.x),X=.5*(v.pageY+F.y);g.set(B,X)}}function Zt(v){const F=wt(v),B=v.pageX-F.x,X=v.pageY-F.y,Q=Math.sqrt(B*B+X*X);d.set(0,Q)}function D(v){n.enableZoom&&Zt(v),n.enablePan&&Ot(v)}function re(v){n.enableZoom&&Zt(v),n.enableRotate&&It(v)}function Vt(v){if(A.length==1)f.set(v.pageX,v.pageY);else{const B=wt(v),X=.5*(v.pageX+B.x),Q=.5*(v.pageY+B.y);f.set(X,Q)}m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;z(2*Math.PI*m.x/F.clientHeight),O(2*Math.PI*m.y/F.clientHeight),h.copy(f)}function Gt(v){if(A.length===1)_.set(v.pageX,v.pageY);else{const F=wt(v),B=.5*(v.pageX+F.x),X=.5*(v.pageY+F.y);_.set(B,X)}p.subVectors(_,g).multiplyScalar(n.panSpeed),G(p.x,p.y),g.copy(_)}function _t(v){const F=wt(v),B=v.pageX-F.x,X=v.pageY-F.y,Q=Math.sqrt(B*B+X*X);E.set(0,Q),x.set(0,Math.pow(E.y/d.y,n.zoomSpeed)),K(x.y),d.copy(E);const gt=(v.pageX+F.x)*.5,Tt=(v.pageY+F.y)*.5;it(gt,Tt)}function se(v){n.enableZoom&&_t(v),n.enablePan&&Gt(v)}function At(v){n.enableZoom&&_t(v),n.enableRotate&&Vt(v)}function Pt(v){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",S)),!ft(v)&&(Ft(v),v.pointerType==="touch"?Dt(v):V(v)))}function C(v){n.enabled!==!1&&(v.pointerType==="touch"?et(v):$(v))}function S(v){switch(St(v),A.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",S),n.dispatchEvent(tu),s=i.NONE;break;case 1:const F=A[0],B=P[F];Dt({pointerId:F,pageX:B.x,pageY:B.y});break}}function V(v){let F;switch(v.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Oi.DOLLY:if(n.enableZoom===!1)return;Ct(v),s=i.DOLLY;break;case Oi.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;zt(v),s=i.PAN}else{if(n.enableRotate===!1)return;ut(v),s=i.ROTATE}break;case Oi.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;ut(v),s=i.ROTATE}else{if(n.enablePan===!1)return;zt(v),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ja)}function $(v){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;q(v);break;case i.DOLLY:if(n.enableZoom===!1)return;J(v);break;case i.PAN:if(n.enablePan===!1)return;dt(v);break}}function tt(v){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(v.preventDefault(),n.dispatchEvent(Ja),ht(Z(v)),n.dispatchEvent(tu))}function Z(v){const F=v.deltaMode,B={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(F){case 1:B.deltaY*=16;break;case 2:B.deltaY*=100;break}return v.ctrlKey&&!M&&(B.deltaY*=10),B}function xt(v){v.key==="Control"&&(M=!0,n.domElement.getRootNode().addEventListener("keyup",rt,{passive:!0,capture:!0}))}function rt(v){v.key==="Control"&&(M=!1,n.domElement.getRootNode().removeEventListener("keyup",rt,{passive:!0,capture:!0}))}function lt(v){n.enabled===!1||n.enablePan===!1||Lt(v)}function Dt(v){switch(Et(v),A.length){case 1:switch(n.touches.ONE){case Fi.ROTATE:if(n.enableRotate===!1)return;It(v),s=i.TOUCH_ROTATE;break;case Fi.PAN:if(n.enablePan===!1)return;Ot(v),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Fi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(v),s=i.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;re(v),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ja)}function et(v){switch(Et(v),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Vt(v),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Gt(v),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;se(v),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;At(v),n.update();break;default:s=i.NONE}}function ct(v){n.enabled!==!1&&v.preventDefault()}function Ft(v){A.push(v.pointerId)}function St(v){delete P[v.pointerId];for(let F=0;F<A.length;F++)if(A[F]==v.pointerId){A.splice(F,1);return}}function ft(v){for(let F=0;F<A.length;F++)if(A[F]==v.pointerId)return!0;return!1}function Et(v){let F=P[v.pointerId];F===void 0&&(F=new Rt,P[v.pointerId]=F),F.set(v.pageX,v.pageY)}function wt(v){const F=v.pointerId===A[0]?A[1]:A[0];return P[F]}n.domElement.addEventListener("contextmenu",ct),n.domElement.addEventListener("pointerdown",Pt),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",tt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",xt,{passive:!0,capture:!0}),this.update()}}let fr=window.innerWidth,dr=window.innerHeight;const ua=new p0,Nh=document.querySelector(".webgl"),ha=new d0({canvas:Nh});ha.setPixelRatio(2);ha.setSize(fr,dr);const ts=new Ye(45,fr/dr,.1,1e3);ts.position.set(0,0,20);const Oh=new M0(16777215,200,100);Oh.position.set(0,10,10);ua.add(Oh);const wr=new Ov(ts,Nh);wr.enableDamping=!0;wr.enableZoom=!1;wr.enablePan=!1;wr.autoRotate=!0;wr.autoRotateSpeed=1;const Al=new gn(new ol(3,64,64),new _0({color:"#00ff83",roughness:.5}));ua.add(Al);const wl=new En,Fv=new Nu({vertexColors:!0}),Fh=[],Bh=[],Bv=100;for(let r=0;r<1e4;r++){let t,e,n;do t=(Math.random()-.5)*1e3,e=(Math.random()-.5)*1e3,n=(Math.random()-.5)*1e3;while(Math.sqrt(t*t+e*e+n*n)<Bv);Fh.push(t,e,n);const i=new kt(Math.random(),Math.random(),Math.random());Bh.push(i.r,i.g,i.b)}wl.setAttribute("position",new rn(Fh,3));wl.setAttribute("color",new rn(Bh,3));const zv=new m0(wl,Fv);ua.add(zv);function zh(){wr.update(),requestAnimationFrame(zh),ha.render(ua,ts)}zh();window.addEventListener("resize",()=>{fr=window.innerWidth,dr=window.innerHeight,ts.aspect=fr/dr,ts.updateProjectionMatrix(),ha.setSize(fr,dr)});const Rl=bl.timeline({defaults:{duration:1}});Rl.fromTo(Al.scale,{x:0,y:0,z:0},{x:1,y:1,z:1});Rl.fromTo("nav",{y:"-100%"},{y:"0%"});Rl.fromTo(".title",{opacity:0},{opacity:1});let Cl=!1,nu=[];window.addEventListener("mousedown",()=>Cl=!0);window.addEventListener("mouseup",()=>Cl=!1);window.addEventListener("mousemove",r=>{if(Cl){nu=[Math.round(r.pageX/fr*255),Math.round(r.pageY/dr*255),150];let t=new kt(`rgb(${nu.join(",")})`);bl.to(Al.material.color,{r:t.r,g:t.g,b:t.b})}});
