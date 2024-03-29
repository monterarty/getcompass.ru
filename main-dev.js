/* oldBrowserDetector.min.js */
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b():"function"==typeof define&&define.amd?define(b):b()}(0,function(){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),c={i:"Internet Explorer",f:"Firefox",o:"Opera",s:"Apple Safari",n:"Netscape Navigator",c:"Chrome",x:"Other"},d={i:11,f:20,c:20,o:10.6,s:{d:8,m:3},n:10},e=function(){function f(a,b){!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,f),this.options=a?Object.assign({},d,a):d,this.cb=b||function(a){return console.log("Old Browser Detected: "+a)}}return b(f,[{key:"detect",value:function(){var b=f.getBrowser(),c=0;return c="object"===a(this.options[b.n])?b.isMobile?this.options[b.n].m:this.options[b.n].d:this.options[b.n],("x"===b.n||b.v<=c)&&(this.cb.call(null,b),!0)}}],[{key:"getBrowser",value:function(){var a,b,d=navigator.userAgent,f=/ipad|ipod|iphone|android/i.test(d);if(/bot|googlebot|slurp|mediapartners|adsbot|bingbot|google web preview|like firefox|chromeframe|seamonkey|opera mini|min|meego|netfront|moblin|maemo|arora|camino|flot|k-meleon|fennec|kazehakase|galeon|epiphany|rekonq|symbian|webos/i.test(d))a="x";else if(/Trident.(\d+\.\d+)/i.test(d))a="io";else if(/MSIE.(\d+\.\d+)/i.test(d))a="i";else if(/Chrome.(\d+\.\d+)/i.test(d))a="c";else if(/Firefox.(\d+\.\d+)/i.test(d))a="f";else if(/Version.(\d+.\d+).{0,10}Safari/i.test(d))a="s";else if(/Safari.(\d+)/i.test(d))a="so";else if(/Opera.*Version.(\d+\.?\d+)/i.test(d))a="o";else if(/Opera.(\d+\.?\d+)/i.test(d))a="o";else{if(!/Netscape.(\d+)/i.test(d))return{n:"x",v:0,t:c[a]};a="n"}return"x"==a?{n:"x",v:0,t:c[a]}:(b=new Number(RegExp.$1),"so"==a&&(b=(100>b?1:130>b&&1.2)||320>b&&1.3||520>b&&2||524>b&&3||526>b&&3.2||4,a="s"),"i"==a&&7==b&&window.XDomainRequest&&(b=8),"io"==a&&(a="i",b=5<b?10:4<b?9:3.1<b?8:3<b?7:9),{n:a,v:b,t:c[a]+" "+b,isMobile:f})}}]),f}();window.oldBrowserDetector=e});

/* ---------------------*/
/* ---------------------*/
/*    Platform.min.js   */
/* ---------------------*/
/* ---------------------*/

(function(){"use strict";var e={function:!0,object:!0},G=e[typeof window]&&window||this,i=e[typeof exports]&&exports,t=e[typeof module]&&module&&!module.nodeType&&module,r=i&&t&&"object"==typeof global&&global;!r||r.global!==r&&r.window!==r&&r.self!==r||(G=r);var a=Math.pow(2,53)-1,$=/\bOpera/,n=Object.prototype,o=n.hasOwnProperty,X=n.toString;function l(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function K(e){return e=H(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:l(e)}function j(e,t){for(var i in e)o.call(e,i)&&t(e[i],i,e)}function N(e){return null==e?l(e):X.call(e).slice(8,-1)}function V(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function z(i,r){var n=null;return function(e,t){var i=-1,r=e?e.length:0;if("number"==typeof r&&-1<r&&r<=a)for(;++i<r;)t(e[i],i,e);else j(e,t)}(i,function(e,t){n=r(n,e,t,i)}),n}function H(e){return String(e).replace(/^ +| +$/g,"")}function L(l){var t=G,e=l&&"object"==typeof l&&"String"!=N(l);e&&(t=l,l=null);var i=t.navigator||{},r=i.userAgent||"";l=l||r;var n,a,o,s,b,p=e?!!i.likeChrome:/\bChrome\b/.test(l)&&!/internal|\n/i.test(X.toString()),c="Object",d=e?c:"ScriptBridgingProxyObject",u=e?c:"Environment",f=e&&t.java?"JavaPackage":N(t.java),S=e?c:"RuntimeObject",x=/\bJava/.test(f)&&t.java,h=x&&N(t.environment)==u,m=x?"a":"α",g=x?"b":"β",O=t.document||{},y=t.operamini||t.opera,M=$.test(M=e&&y?y["[[Class]]"]:N(y))?M:y=null,E=l,w=[],v=null,P=l==r,C=P&&y&&"function"==typeof y.version&&y.version(),B=z([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],function(e,t){return e||RegExp("\\b"+(t.pattern||V(t))+"\\b","i").exec(l)&&(t.label||t)}),W=z(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"],function(e,t){return e||RegExp("\\b"+(t.pattern||V(t))+"\\b","i").exec(l)&&(t.label||t)}),k=I([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),R=z({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}},function(e,t,i){return e||(t[k]||t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(k)]||RegExp("\\b"+V(i)+"(?:\\b|\\w*\\d)","i").exec(l))&&i}),A=z(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],function(e,t){var i,r,n,a,o=t.pattern||V(t);return!e&&(e=RegExp("\\b"+o+"(?:/[\\d.]+|[ \\w.]*)","i").exec(l))&&(i=e,r=o,n=t.label||t,a={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"},r&&n&&/^Win/i.test(i)&&!/^Windows Phone /i.test(i)&&(a=a[/[\d.]+$/.exec(i)])&&(i="Windows "+a),i=String(i),r&&n&&(i=i.replace(RegExp(r,"i"),n)),e=i=K(i.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])),e});function I(e){return z(e,function(e,t){var i=t.pattern||V(t);return!e&&(e=RegExp("\\b"+i+" *\\d+[.\\w_]*","i").exec(l)||RegExp("\\b"+i+" *\\w+-[\\w]*","i").exec(l)||RegExp("\\b"+i+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(l))&&((e=String(t.label&&!RegExp(i,"i").test(t.label)?t.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),t=t.label||t,e=K(e[0].replace(RegExp(i,"i"),t).replace(RegExp("; *(?:"+t+"[_-])?","i")," ").replace(RegExp("("+t+")[-_.]?(\\w)","i"),"$1 $2"))),e})}function F(e){return z(e,function(e,t){return e||(RegExp(t+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(l)||0)[1]||null})}if(B=B&&[B],/\bAndroid\b/.test(A)&&!k&&(n=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(l))&&(k=H(n[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),R&&!k?k=I([R]):R&&k&&(k=k.replace(RegExp("^("+V(R)+")[-_.\\s]","i"),R+" ").replace(RegExp("^("+V(R)+")[-_.]?(\\w)","i"),R+" $2")),(n=/\bGoogle TV\b/.exec(k))&&(k=n[0]),/\bSimulator\b/i.test(l)&&(k=(k?k+" ":"")+"Simulator"),"Opera Mini"==W&&/\bOPiOS\b/.test(l)&&w.push("running in Turbo/Uncompressed mode"),"IE"==W&&/\blike iPhone OS\b/.test(l)?(R=(n=L(l.replace(/like iPhone OS/,""))).manufacturer,k=n.product):/^iP/.test(k)?(W=W||"Safari",A="iOS"+((n=/ OS ([\d_]+)/i.exec(l))?" "+n[1].replace(/_/g,"."):"")):"Konqueror"==W&&/^Linux\b/i.test(A)?A="Kubuntu":R&&"Google"!=R&&(/Chrome/.test(W)&&!/\bMobile Safari\b/i.test(l)||/\bVita\b/.test(k))||/\bAndroid\b/.test(A)&&/^Chrome/.test(W)&&/\bVersion\//i.test(l)?(W="Android Browser",A=/\bAndroid\b/.test(A)?A:"Android"):"Silk"==W?(/\bMobi/i.test(l)||(A="Android",w.unshift("desktop mode")),/Accelerated *= *true/i.test(l)&&w.unshift("accelerated")):"UC Browser"==W&&/\bUCWEB\b/.test(l)?w.push("speed mode"):"PaleMoon"==W&&(n=/\bFirefox\/([\d.]+)\b/.exec(l))?w.push("identifying as Firefox "+n[1]):"Firefox"==W&&(n=/\b(Mobile|Tablet|TV)\b/i.exec(l))?(A=A||"Firefox OS",k=k||n[1]):!W||(n=!/\bMinefield\b/i.test(l)&&/\b(?:Firefox|Safari)\b/.exec(W))?(W&&!k&&/[\/,]|^[^(]+?\)/.test(l.slice(l.indexOf(n+"/")+8))&&(W=null),(n=k||R||A)&&(k||R||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(A))&&(W=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(A)?A:n)+" Browser")):"Electron"==W&&(n=(/\bChrome\/([\d.]+)\b/.exec(l)||0)[1])&&w.push("Chromium "+n),C=C||F(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",V(W),"(?:Firefox|Minefield|NetFront)"]),(n=("iCab"==B&&3<parseFloat(C)?"WebKit":/\bOpera\b/.test(W)&&(/\bOPR\b/.test(l)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(l)&&!/^(?:Trident|EdgeHTML)$/.test(B)&&"WebKit"||!B&&/\bMSIE\b/i.test(l)&&("Mac OS"==A?"Tasman":"Trident")||"WebKit"==B&&/\bPlayStation\b(?! Vita\b)/i.test(W)&&"NetFront")&&(B=[n]),"IE"==W&&(n=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(l)||0)[1])?(W+=" Mobile",A="Windows Phone "+(/\+$/.test(n)?n:n+".x"),w.unshift("desktop mode")):/\bWPDesktop\b/i.test(l)?(W="IE Mobile",A="Windows Phone 8.x",w.unshift("desktop mode"),C=C||(/\brv:([\d.]+)/.exec(l)||0)[1]):"IE"!=W&&"Trident"==B&&(n=/\brv:([\d.]+)/.exec(l))&&(W&&w.push("identifying as "+W+(C?" "+C:"")),W="IE",C=n[1]),P){if(s="global",b=null!=(o=t)?typeof o[s]:"number",/^(?:boolean|number|string|undefined)$/.test(b)||"object"==b&&!o[s])N(n=t.runtime)==d?(W="Adobe AIR",A=n.flash.system.Capabilities.os):N(n=t.phantom)==S?(W="PhantomJS",C=(n=n.version||null)&&n.major+"."+n.minor+"."+n.patch):"number"==typeof O.documentMode&&(n=/\bTrident\/(\d+)/i.exec(l))?(C=[C,O.documentMode],(n=+n[1]+4)!=C[1]&&(w.push("IE "+C[1]+" mode"),B&&(B[1]=""),C[1]=n),C="IE"==W?String(C[1].toFixed(1)):C[0]):"number"==typeof O.documentMode&&/^(?:Chrome|Firefox)\b/.test(W)&&(w.push("masking as "+W+" "+C),W="IE",C="11.0",B=["Trident"],A="Windows");else if(x&&(E=(n=x.lang.System).getProperty("os.arch"),A=A||n.getProperty("os.name")+" "+n.getProperty("os.version")),h){try{C=t.require("ringo/engine").version.join("."),W="RingoJS"}catch(e){(n=t.system)&&n.global.system==t.system&&(W="Narwhal",A=A||(n[0].os||null))}W=W||"Rhino"}else"object"==typeof t.process&&!t.process.browser&&(n=t.process)&&("object"==typeof n.versions&&("string"==typeof n.versions.electron?(w.push("Node "+n.versions.node),W="Electron",C=n.versions.electron):"string"==typeof n.versions.nw&&(w.push("Chromium "+C,"Node "+n.versions.node),W="NW.js",C=n.versions.nw)),W||(W="Node.js",E=n.arch,A=n.platform,C=(C=/[\d.]+/.exec(n.version))?C[0]:null));A=A&&K(A)}if(C&&(n=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(C)||/(?:alpha|beta)(?: ?\d)?/i.exec(l+";"+(P&&i.appMinorVersion))||/\bMinefield\b/i.test(l)&&"a")&&(v=/b/i.test(n)?"beta":"alpha",C=C.replace(RegExp(n+"\\+?$"),"")+("beta"==v?g:m)+(/\d+\+?/.exec(n)||"")),"Fennec"==W||"Firefox"==W&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(A))W="Firefox Mobile";else if("Maxthon"==W&&C)C=C.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(k))"Xbox 360"==k&&(A=null),"Xbox 360"==k&&/\bIEMobile\b/.test(l)&&w.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(W)&&(!W||k||/Browser|Mobi/.test(W))||"Windows CE"!=A&&!/Mobi/i.test(l))if("IE"==W&&P)try{null===t.external&&w.unshift("platform preview")}catch(e){w.unshift("embedded")}else(/\bBlackBerry\b/.test(k)||/\bBB10\b/.test(l))&&(n=(RegExp(k.replace(/ +/g," *")+"/([.\\d]+)","i").exec(l)||0)[1]||C)?(A=((n=[n,/BB10/.test(l)])[1]?(k=null,R="BlackBerry"):"Device Software")+" "+n[0],C=null):this!=j&&"Wii"!=k&&(P&&y||/Opera/.test(W)&&/\b(?:MSIE|Firefox)\b/i.test(l)||"Firefox"==W&&/\bOS X (?:\d+\.){2,}/.test(A)||"IE"==W&&(A&&!/^Win/.test(A)&&5.5<C||/\bWindows XP\b/.test(A)&&8<C||8==C&&!/\bTrident\b/.test(l)))&&!$.test(n=L.call(j,l.replace($,"")+";"))&&n.name&&(n="ing as "+n.name+((n=n.version)?" "+n:""),$.test(W)?(/\bIE\b/.test(n)&&"Mac OS"==A&&(A=null),n="identify"+n):(n="mask"+n,W=M?K(M.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(n)&&(A=null),P||(C=null)),B=["Presto"],w.push(n));else W+=" Mobile";(n=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(l)||0)[1])&&(n=[parseFloat(n.replace(/\.(\d)$/,".0$1")),n],"Safari"==W&&"+"==n[1].slice(-1)?(W="WebKit Nightly",v="alpha",C=n[1].slice(0,-1)):C!=n[1]&&C!=(n[2]=(/\bSafari\/([\d.]+\+?)/i.exec(l)||0)[1])||(C=null),n[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(l)||0)[1],537.36==n[0]&&537.36==n[2]&&28<=parseFloat(n[1])&&"WebKit"==B&&(B=["Blink"]),n=P&&(p||n[1])?(B&&(B[1]="like Chrome"),n[1]||((n=n[0])<530?1:n<532?2:n<532.05?3:n<533?4:n<534.03?5:n<534.07?6:n<534.1?7:n<534.13?8:n<534.16?9:n<534.24?10:n<534.3?11:n<535.01?12:n<535.02?"13+":n<535.07?15:n<535.11?16:n<535.19?17:n<536.05?18:n<536.1?19:n<537.01?20:n<537.11?"21+":n<537.13?23:n<537.18?24:n<537.24?25:n<537.36?26:"Blink"!=B?"27":"28")):(B&&(B[1]="like Safari"),(n=n[0])<400?1:n<500?2:n<526?3:n<533?4:n<534?"4+":n<535?5:n<537?6:n<538?7:n<601?8:n<602?9:n<604?10:n<606?11:n<608?12:"12"),B&&(B[1]+=" "+(n+="number"==typeof n?".x":/[.+]/.test(n)?"":"+")),"Safari"==W&&(!C||45<parseInt(C))?C=n:"Chrome"==W&&/\bHeadlessChrome/i.test(l)&&w.unshift("headless")),"Opera"==W&&(n=/\bzbov|zvav$/.exec(A))?(W+=" ",w.unshift("desktop mode"),"zvav"==n?(W+="Mini",C=null):W+="Mobile",A=A.replace(RegExp(" *"+n+"$"),"")):"Safari"==W&&/\bChrome\b/.exec(B&&B[1])?(w.unshift("desktop mode"),W="Chrome Mobile",C=null,A=/\bOS X\b/.test(A)?(R="Apple","iOS 4.3+"):null):/\bSRWare Iron\b/.test(W)&&!C&&(C=F("Chrome")),C&&0==C.indexOf(n=/[\d.]+$/.exec(A))&&-1<l.indexOf("/"+n+"-")&&(A=H(A.replace(n,""))),A&&-1!=A.indexOf(W)&&!RegExp(W+" OS").test(A)&&(A=A.replace(RegExp(" *"+V(W)+" *"),"")),B&&!/\b(?:Avant|Nook)\b/.test(W)&&(/Browser|Lunascape|Maxthon/.test(W)||"Safari"!=W&&/^iOS/.test(A)&&/\bSafari\b/.test(B[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(W)&&B[1])&&(n=B[B.length-1])&&w.push(n),w.length&&(w=["("+w.join("; ")+")"]),R&&k&&k.indexOf(R)<0&&w.push("on "+R),k&&w.push((/^on /.test(w[w.length-1])?"":"on ")+k),A&&(n=/ ([\d.+]+)$/.exec(A),a=n&&"/"==A.charAt(A.length-n[0].length-1),A={architecture:32,family:n&&!a?A.replace(n[0],""):A,version:n?n[1]:null,toString:function(){var e=this.version;return this.family+(e&&!a?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(n=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(E))&&!/\bi686\b/i.test(E)?(A&&(A.architecture=64,A.family=A.family.replace(RegExp(" *"+n),"")),W&&(/\bWOW64\b/i.test(l)||P&&/\w(?:86|32)$/.test(i.cpuClass||i.platform)&&!/\bWin64; x64\b/i.test(l))&&w.unshift("32-bit")):A&&/^OS X/.test(A.family)&&"Chrome"==W&&39<=parseFloat(C)&&(A.architecture=64),l=l||null;var T={};return T.description=l,T.layout=B&&B[0],T.manufacturer=R,T.name=W,T.prerelease=v,T.product=k,T.ua=l,T.version=W&&C,T.os=A||{architecture:null,family:null,version:null,toString:function(){return"null"}},T.parse=L,T.toString=function(){return this.description||""},T.version&&w.unshift(C),T.name&&w.unshift(W),A&&W&&(A!=String(A).split(" ")[0]||A!=W.split(" ")[0]&&!k)&&w.push(k?"("+A+")":"on "+A),w.length&&(T.description=w.join(" ")),T}var s=L();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(G.platform=s,define(function(){return s})):i&&t?j(s,function(e,t){i[t]=e}):G.platform=s}).call(this);

/* ---------------------*/
/* ---------------------*/
/*    remodal.min.js    */
/*   hastracking fix    */
/* ---------------------*/
/* ---------------------*/

window.REMODAL_GLOBALS={NAMESPACE:"remodal",DEFAULTS:{hashTracking:!1}},function(t,n){"function"==typeof define&&define.amd?define(["jquery"],function(a){return n(t,a)}):"object"==typeof exports?n(t,require("jquery")):n(t,t.jQuery||t.Zepto)}(this,function(t,n){"use strict";var a,e,i,o="remodal",s=t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.NAMESPACE||o,r=n.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(t){return t+"."+s}).join(" "),l=n.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(t){return t+"."+s}).join(" "),d=n.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.DEFAULTS),c={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},p={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},m=void 0!==(i=document.createElement("div").style).animationName||void 0!==i.WebkitAnimationName||void 0!==i.MozAnimationName||void 0!==i.msAnimationName||void 0!==i.OAnimationName,f=/iPad|iPhone|iPod/.test(navigator.platform);function u(t){if(m&&"none"===t.css("animation-name")&&"none"===t.css("-webkit-animation-name")&&"none"===t.css("-moz-animation-name")&&"none"===t.css("-o-animation-name")&&"none"===t.css("-ms-animation-name"))return 0;var n,a,e,i,o=t.css("animation-duration")||t.css("-webkit-animation-duration")||t.css("-moz-animation-duration")||t.css("-o-animation-duration")||t.css("-ms-animation-duration")||"0s",s=t.css("animation-delay")||t.css("-webkit-animation-delay")||t.css("-moz-animation-delay")||t.css("-o-animation-delay")||t.css("-ms-animation-delay")||"0s",r=t.css("animation-iteration-count")||t.css("-webkit-animation-iteration-count")||t.css("-moz-animation-iteration-count")||t.css("-o-animation-iteration-count")||t.css("-ms-animation-iteration-count")||"1";for(i=0,o=o.split(", "),s=s.split(", "),r=r.split(", "),a=o.length,n=Number.NEGATIVE_INFINITY;i<a;i++)(e=parseFloat(o[i])*parseInt(r[i],10)+parseFloat(s[i]))>n&&(n=e);return n}function h(){if(n(document).height()<=n(window).height())return 0;var t,a,e=document.createElement("div"),i=document.createElement("div");return e.style.visibility="hidden",e.style.width="100px",document.body.appendChild(e),t=e.offsetWidth,e.style.overflow="scroll",i.style.width="100%",e.appendChild(i),a=i.offsetWidth,e.parentNode.removeChild(e),t-a}function g(){if(!f){var t,a,e=n("html"),i=E("is-locked");e.hasClass(i)&&(t=parseInt((a=n(document.body)).css("padding-right"),10)-h(),a.css("padding-right",t+"px"),e.removeClass(i))}}function C(t,n,a,e){var i=E("is",n),o=[E("is",c.CLOSING),E("is",c.OPENING),E("is",c.CLOSED),E("is",c.OPENED)].join(" ");t.$bg.removeClass(o).addClass(i),t.$overlay.removeClass(o).addClass(i),t.$wrapper.removeClass(o).addClass(i),t.$modal.removeClass(o).addClass(i),t.state=n,a||t.$modal.trigger({type:n,reason:e},[{reason:e}])}function v(t,a,e){var i=0,o=function(t){t.target===this&&i++},s=function(t){t.target===this&&0==--i&&(n.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].off(r+" "+l)}),a())};n.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].on(r,o).on(l,s)}),t(),0===u(e.$bg)&&0===u(e.$overlay)&&0===u(e.$wrapper)&&0===u(e.$modal)&&(n.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].off(r+" "+l)}),a())}function O(t){t.state!==c.CLOSED&&(n.each(["$bg","$overlay","$wrapper","$modal"],function(n,a){t[a].off(r+" "+l)}),t.$bg.removeClass(t.settings.modifier),t.$overlay.removeClass(t.settings.modifier).hide(),t.$wrapper.hide(),g(),C(t,c.CLOSED,!0))}function E(){for(var t=s,n=0;n<arguments.length;++n)t+="-"+arguments[n];return t}function y(){var t,e,i=location.hash.replace("#","");if(i){try{e=n("[data-"+o+'-id="'+i+'"]')}catch(s){}e&&e.length&&(t=n[o].lookup[e.data(o)])&&t.settings.hashTracking&&t.open()}else a&&a.state===c.OPENED&&a.settings.hashTracking&&a.close()}function N(t,a){var e=n(document.body),i=this;i.settings=n.extend({},d,a),i.index=n[o].lookup.push(i)-1,i.state=c.CLOSED,i.$overlay=n("."+E("overlay")),null!==i.settings.appendTo&&i.settings.appendTo.length&&(e=n(i.settings.appendTo)),i.$overlay.length||(i.$overlay=n("<div>").addClass(E("overlay")+" "+E("is",c.CLOSED)).hide(),e.append(i.$overlay)),i.$bg=n("."+E("bg")).addClass(E("is",c.CLOSED)),i.$modal=t.addClass(s+" "+E("is-initialized")+" "+i.settings.modifier+" "+E("is",c.CLOSED)).attr("tabindex","-1"),i.$wrapper=n("<div>").addClass(E("wrapper")+" "+i.settings.modifier+" "+E("is",c.CLOSED)).hide().append(i.$modal),e.append(i.$wrapper),i.$wrapper.on("click."+s,"[data-"+o+'-action="close"]',function(t){t.preventDefault(),i.close()}),i.$wrapper.on("click."+s,"[data-"+o+'-action="cancel"]',function(t){t.preventDefault(),i.$modal.trigger(p.CANCELLATION),i.settings.closeOnCancel&&i.close(p.CANCELLATION)}),i.$wrapper.on("click."+s,"[data-"+o+'-action="confirm"]',function(t){t.preventDefault(),i.$modal.trigger(p.CONFIRMATION),i.settings.closeOnConfirm&&i.close(p.CONFIRMATION)}),i.$wrapper.on("click."+s,function(t){n(t.target).hasClass(E("wrapper"))&&i.settings.closeOnOutsideClick&&i.close()})}N.prototype.open=function(){var t,i=this;i.state!==c.OPENING&&i.state!==c.CLOSING&&((t=i.$modal.attr("data-"+o+"-id"))&&i.settings.hashTracking&&(e=n(window).scrollTop(),location.hash=t),a&&a!==i&&O(a),a=i,function t(){if(!f){var a,e,i=n("html"),o=E("is-locked");i.hasClass(o)||(a=parseInt((e=n(document.body)).css("padding-right"),10)+h(),e.css("padding-right",a+"px"),i.addClass(o))}}(),i.$bg.addClass(i.settings.modifier),i.$overlay.addClass(i.settings.modifier).show(),i.$wrapper.show().scrollTop(0),i.$modal.focus(),v(function(){C(i,c.OPENING)},function(){C(i,c.OPENED)},i))},N.prototype.close=function(t){var a=this;a.state!==c.OPENING&&a.state!==c.CLOSING&&a.state!==c.CLOSED&&(a.settings.hashTracking&&a.$modal.attr("data-"+o+"-id")===location.hash.substr(1)&&(location.hash="",n(window).scrollTop(e)),v(function(){C(a,c.CLOSING,!1,t)},function(){a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),g(),C(a,c.CLOSED,!1,t)},a))},N.prototype.getState=function(){return this.state},N.prototype.destroy=function(){var t,a=n[o].lookup;O(this),this.$wrapper.remove(),delete a[this.index],0===(t=n.grep(a,function(t){return!!t}).length)&&(this.$overlay.remove(),this.$bg.removeClass(E("is",c.CLOSING)+" "+E("is",c.OPENING)+" "+E("is",c.CLOSED)+" "+E("is",c.OPENED)))},n[o]={lookup:[]},n.fn[o]=function(t){var a,e;return this.each(function(i,s){null==(e=n(s)).data(o)?(a=new N(e,t),e.data(o,a.index),a.settings.hashTracking&&e.attr("data-"+o+"-id")===location.hash.substr(1)&&a.open()):a=n[o].lookup[e.data(o)]}),a},n(document).ready(function(){n(document).on("click","[data-"+o+"-target]",function(t){t.preventDefault();var a=t.currentTarget.getAttribute("data-"+o+"-target"),e=n("[data-"+o+'-id="'+a+'"]');n[o].lookup[e.data(o)].open()}),n(document).find("."+s).each(function(t,a){var e=n(a),i=e.data(o+"-options");i?("string"==typeof i||i instanceof String)&&(i=function t(n){var a,e,i,o,s={};for(o=0,e=(a=(n=n.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",")).split(",")).length;o<e;o++)a[o]=a[o].split(":"),("string"==typeof(i=a[o][1])||i instanceof String)&&(i="true"===i||"false"!==i&&i),("string"==typeof i||i instanceof String)&&(i=isNaN(i)?i:+i),s[a[o][0]]=i;return s}(i)):i={},e[o](i)}),n(document).on("keydown."+s,function(t){a&&a.settings.closeOnEscape&&a.state===c.OPENED&&27===t.keyCode&&a.close()}),n(window).on("hashchange."+s,y)})});

/* ---------------------*/
/* ---------------------*/
/* clipboard.js v2.0.11 */
/* ---------------------*/
/* ---------------------*/

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return n={686:function(t,e,n){"use strict";n.d(e,{default:function(){return b}});var e=n(279),i=n.n(e),e=n(370),u=n.n(e),e=n(817),r=n.n(e);function c(t){try{return document.execCommand(t)}catch(t){return}}var a=function(t){t=r()(t);return c("cut"),t};function o(t,e){var n,o,t=(n=t,o="rtl"===document.documentElement.getAttribute("dir"),(t=document.createElement("textarea")).style.fontSize="12pt",t.style.border="0",t.style.padding="0",t.style.margin="0",t.style.position="absolute",t.style[o?"right":"left"]="-9999px",o=window.pageYOffset||document.documentElement.scrollTop,t.style.top="".concat(o,"px"),t.setAttribute("readonly",""),t.value=n,t);return e.container.appendChild(t),e=r()(t),c("copy"),t.remove(),e}var f=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=o(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=o(t.value,e):(n=r()(t),c("copy")),n};function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,o=t.container,e=t.target,t=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==e){if(!e||"object"!==l(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return t?f(t,{container:o}):e?"cut"===n?a(e):f(e,{container:o}):void 0};function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=v(n);return t=o?(t=v(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==p(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){t="data-clipboard-".concat(t);if(e.hasAttribute(t))return e.getAttribute(t)}var b=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(r,i());var t,e,n,o=h(r);function r(t,e){var n;return function(t){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this),(n=o.call(this)).resolveOptions(e),n.listenClick(t),n}return t=r,n=[{key:"copy",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body};return f(t,e)}},{key:"cut",value:function(t){return a(t)}},{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof t?[t]:t,e=!!document.queryCommandSupported;return t.forEach(function(t){e=e&&!!document.queryCommandSupported(t)}),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=u()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",t=s({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(t?"success":"error",{action:n,text:t,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){t=m("target",t);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&d(t.prototype,e),n&&d(t,n),r}()},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var u=n(828);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=u(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},879:function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var f=n(879),l=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!f.string(e))throw new TypeError("Second argument must be a String");if(!f.fn(n))throw new TypeError("Third argument must be a Function");if(f.node(t))return c=e,a=n,(u=t).addEventListener(c,a),{destroy:function(){u.removeEventListener(c,a)}};if(f.nodeList(t))return o=t,r=e,i=n,Array.prototype.forEach.call(o,function(t){t.addEventListener(r,i)}),{destroy:function(){Array.prototype.forEach.call(o,function(t){t.removeEventListener(r,i)})}};if(f.string(t))return t=t,e=e,n=n,l(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,u,c,a}},817:function(t){t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,u=o.length;i<u;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},r={},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o(686).default;function o(t){if(r[t])return r[t].exports;var e=r[t]={exports:{}};return n[t](e,e.exports,o),e.exports}var n,r});

/* ---------------------*/
/* ---------------------*/
/*   js-cookie v3.0.1   */
/* ---------------------*/
/* ---------------------*/

(()=>{var at=Object.create;var N=Object.defineProperty,lt=Object.defineProperties,ct=Object.getOwnPropertyDescriptor,dt=Object.getOwnPropertyDescriptors,ft=Object.getOwnPropertyNames,Ae=Object.getOwnPropertySymbols,ut=Object.getPrototypeOf,Oe=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable;var ie=(n,e,t)=>e in n?N(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,I=(n,e)=>{for(var t in e||(e={}))Oe.call(e,t)&&ie(n,t,e[t]);if(Ae)for(var t of Ae(e))pt.call(e,t)&&ie(n,t,e[t]);return n},ae=(n,e)=>lt(n,dt(e)),mt=n=>N(n,"__esModule",{value:!0});var ht=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var yt=(n,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of ft(e))!Oe.call(n,o)&&o!=="default"&&N(n,o,{get:()=>e[o],enumerable:!(t=ct(e,o))||t.enumerable});return n},le=n=>yt(mt(N(n!=null?at(ut(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);var l=(n,e,t)=>(ie(n,typeof e!="symbol"?e+"":e,t),t);var p=(n,e,t)=>new Promise((o,r)=>{var i=c=>{try{a(t.next(c))}catch(u){r(u)}},s=c=>{try{a(t.throw(c))}catch(u){r(u)}},a=c=>c.done?o(c.value):Promise.resolve(c.value).then(i,s);a((t=t.apply(n,e)).next())});var Q=ht((Ko,_e)=>{"use strict";var v=new WeakMap,z=new WeakMap,H=new WeakMap,ge=Symbol("anyProducer"),Re=Promise.resolve(),Y=Symbol("listenerAdded"),G=Symbol("listenerRemoved"),Ee=!1;function O(n){if(typeof n!="string"&&typeof n!="symbol")throw new TypeError("eventName must be a string or a symbol")}function J(n){if(typeof n!="function")throw new TypeError("listener must be a function")}function k(n,e){let t=z.get(n);return t.has(e)||t.set(e,new Set),t.get(e)}function R(n,e){let t=typeof e=="string"||typeof e=="symbol"?e:ge,o=H.get(n);return o.has(t)||o.set(t,new Set),o.get(t)}function Et(n,e,t){let o=H.get(n);if(o.has(e))for(let r of o.get(e))r.enqueue(t);if(o.has(ge)){let r=Promise.all([e,t]);for(let i of o.get(ge))i.enqueue(r)}}function Be(n,e){e=Array.isArray(e)?e:[e];let t=!1,o=()=>{},r=[],i={enqueue(s){r.push(s),o()},finish(){t=!0,o()}};for(let s of e)R(n,s).add(i);return{next(){return p(this,null,function*(){return r?r.length===0?t?(r=void 0,this.next()):(yield new Promise(s=>{o=s}),this.next()):{done:!1,value:yield r.shift()}:{done:!0}})},return(a){return p(this,arguments,function*(s){r=void 0;for(let c of e)R(n,c).delete(i);return o(),arguments.length>0?{done:!0,value:yield s}:{done:!0}})},[Symbol.asyncIterator](){return this}}}function Ke(n){if(n===void 0)return Ne;if(!Array.isArray(n))throw new TypeError("`methodNames` must be an array of strings");for(let e of n)if(!Ne.includes(e))throw typeof e!="string"?new TypeError("`methodNames` element must be a string"):new Error(`${e} is not Emittery method`);return n}var we=n=>n===Y||n===G,x=class{static mixin(e,t){return t=Ke(t),o=>{if(typeof o!="function")throw new TypeError("`target` must be function");for(let s of t)if(o.prototype[s]!==void 0)throw new Error(`The property \`${s}\` already exists on \`target\``);function r(){return Object.defineProperty(this,e,{enumerable:!1,value:new x}),this[e]}Object.defineProperty(o.prototype,e,{enumerable:!1,get:r});let i=s=>function(...a){return this[e][s](...a)};for(let s of t)Object.defineProperty(o.prototype,s,{enumerable:!1,value:i(s)});return o}}static get isDebugEnabled(){if(typeof process!="object")return Ee;let{env:e}=process||{env:{}};return e.DEBUG==="emittery"||e.DEBUG==="*"||Ee}static set isDebugEnabled(e){Ee=e}constructor(e={}){v.set(this,new Set),z.set(this,new Map),H.set(this,new Map),this.debug=e.debug||{},this.debug.enabled===void 0&&(this.debug.enabled=!1),this.debug.logger||(this.debug.logger=(t,o,r,i)=>{try{i=JSON.stringify(i)}catch(c){i=`Object with the following keys failed to stringify: ${Object.keys(i).join(",")}`}typeof r=="symbol"&&(r=r.toString());let s=new Date,a=`${s.getHours()}:${s.getMinutes()}:${s.getSeconds()}.${s.getMilliseconds()}`;console.log(`[${a}][emittery:${t}][${o}] Event Name: ${r}
	data: ${i}`)})}logIfDebugEnabled(e,t,o){(x.isDebugEnabled||this.debug.enabled)&&this.debug.logger(e,this.debug.name,t,o)}on(e,t){J(t),e=Array.isArray(e)?e:[e];for(let o of e)O(o),k(this,o).add(t),this.logIfDebugEnabled("subscribe",o,void 0),we(o)||this.emit(Y,{eventName:o,listener:t});return this.off.bind(this,e,t)}off(e,t){J(t),e=Array.isArray(e)?e:[e];for(let o of e)O(o),k(this,o).delete(t),this.logIfDebugEnabled("unsubscribe",o,void 0),we(o)||this.emit(G,{eventName:o,listener:t})}once(e){return new Promise(t=>{let o=this.on(e,r=>{o(),t(r)})})}events(e){e=Array.isArray(e)?e:[e];for(let t of e)O(t);return Be(this,e)}emit(e,t){return p(this,null,function*(){O(e),this.logIfDebugEnabled("emit",e,t),Et(this,e,t);let o=k(this,e),r=v.get(this),i=[...o],s=we(e)?[]:[...r];yield Re,yield Promise.all([...i.map(a=>p(this,null,function*(){if(o.has(a))return a(t)})),...s.map(a=>p(this,null,function*(){if(r.has(a))return a(e,t)}))])})}emitSerial(e,t){return p(this,null,function*(){O(e),this.logIfDebugEnabled("emitSerial",e,t);let o=k(this,e),r=v.get(this),i=[...o],s=[...r];yield Re;for(let a of i)o.has(a)&&(yield a(t));for(let a of s)r.has(a)&&(yield a(e,t))})}onAny(e){return J(e),this.logIfDebugEnabled("subscribeAny",void 0,void 0),v.get(this).add(e),this.emit(Y,{listener:e}),this.offAny.bind(this,e)}anyEvent(){return Be(this)}offAny(e){J(e),this.logIfDebugEnabled("unsubscribeAny",void 0,void 0),this.emit(G,{listener:e}),v.get(this).delete(e)}clearListeners(e){e=Array.isArray(e)?e:[e];for(let t of e)if(this.logIfDebugEnabled("clear",t,void 0),typeof t=="string"||typeof t=="symbol"){k(this,t).clear();let o=R(this,t);for(let r of o)r.finish();o.clear()}else{v.get(this).clear();for(let o of z.get(this).values())o.clear();for(let o of H.get(this).values()){for(let r of o)r.finish();o.clear()}}}listenerCount(e){e=Array.isArray(e)?e:[e];let t=0;for(let o of e){if(typeof o=="string"){t+=v.get(this).size+k(this,o).size+R(this,o).size+R(this).size;continue}typeof o!="undefined"&&O(o),t+=v.get(this).size;for(let r of z.get(this).values())t+=r.size;for(let r of H.get(this).values())t+=r.size}return t}bindMethods(e,t){if(typeof e!="object"||e===null)throw new TypeError("`target` must be an object");t=Ke(t);for(let o of t){if(e[o]!==void 0)throw new Error(`The property \`${o}\` already exists on \`target\``);Object.defineProperty(e,o,{enumerable:!1,value:this[o].bind(this)})}}},Ne=Object.getOwnPropertyNames(x.prototype).filter(n=>n!=="constructor");Object.defineProperty(x,"listenerAdded",{value:Y,writable:!1,enumerable:!0,configurable:!1});Object.defineProperty(x,"listenerRemoved",{value:G,writable:!1,enumerable:!0,configurable:!1});_e.exports=x});var bt=["essential"],ce=["personalization","analytics","marketing"],de="uncategorized",_=[...bt,...ce,de],f="fs-cc",kt=f+"-ie",ke=["informational","opt-in","opt-out"],D={allow:"allow",deny:"deny",submit:"submit"},b={banner:`[${f}="banner"]`,preferences:`[${f}="preferences"]`,manager:`[${f}="manager"]`},w={allow:`[${f}="${D.allow}"]`,deny:`[${f}="${D.deny}"]`,submit:`[${f}="${D.submit}"]`,openPreferences:`[${f}="open-preferences"]`,close:`[${f}="close"]`},fe={interactionTrigger:`[${f}="interaction"]`},m={categories:[`${f}-category`,`${f}-categories`],disableScroll:`${f}-scroll`,displayProperty:`${f}-display`,cookieMaxAge:`${f}-expires`,mode:`${f}-mode`,debugMode:`${f}-debug`,endpoint:`${f}-endpoint`,componentsSource:`${f}-source`,src:`${f}-src`,placeholder:`${f}-placeholder`,domain:`${f}-domain`},T={main:f,consentsUpdated:`${f}-updated`};var L={checkbox:n=>`[${f}-checkbox="${n}"]`,gtmEvent:n=>`${n}-activated`};var Me=`<style>${b.banner},${b.manager},${b.preferences},${fe.interactionTrigger}{display:none}</style>`;var q=Object.freeze({analytics:!1,essential:!0,marketing:!1,personalization:!1,uncategorized:!1}),$=Object.freeze({analytics:!0,essential:!0,marketing:!0,personalization:!0,uncategorized:!0}),Pe="180";var F=(n,e="flex")=>new Promise(t=>{n.style.opacity="0",n.style.display=e,function o(){let r=parseFloat(n.style.opacity);if(r>=1){t();return}let i=r+.1;n.style.opacity=i.toString(),requestAnimationFrame(o)}()}),j=n=>new Promise(e=>{n.style.opacity="1",function t(){let r=parseFloat(n.style.opacity)-.1;n.style.opacity=r.toString(),r<=0?(n.style.display="none",e()):requestAnimationFrame(t)}()});var C=class{static activateAlerts(){this.alertsActivated=!0}static alert(e,t){if(this.alertsActivated&&window.alert(e),t==="error")throw new Error(e)}};C.alertsActivated=!1;var S=(n,e)=>(Array.isArray(e)||(e=[e]),e.map(o=>n.dispatchEvent(new Event(o,{bubbles:!0}))).every(o=>o));var g=(n,e)=>!!n&&e.includes(n);function ue(n,e,t,o=!0){let r=t?[t]:[];if(!n)return r;let i=n.split(",").reduce((s,a)=>{let c=a.trim();return(!o||c)&&s.push(c),s},[]);if(e){let s=i.filter(a=>g(a,e));return s.length?s:r}return i}var pe=n=>Object.entries(n);var U=n=>Object.keys(n);var V=n=>{let{overflow:e}=getComputedStyle(n);return e==="auto"||e==="scroll"};var Ie=n=>!!(n.offsetWidth||n.offsetHeight||n.getClientRects().length);var y=(n,e,t=document)=>{let o=t.querySelector(n);if(o instanceof e)return o};var me=n=>n.replace(/\/+$/,"");var W=(n,e=!0)=>(e!==n.checked&&(n.checked=e,S(n,["click","input","change"])),n.type==="checkbox"?n.checked:n.value);var De=n=>new Promise(e=>setTimeout(e,n));var he=class{constructor({element:e,duration:t}){this.active=!1;this.running=!1;this.isActive=()=>this.active;this.isRunning=()=>this.running;this.untilFinished=()=>this.runningPromise;var o,r;this.element=typeof e=="string"?y(e,HTMLElement)||C.alert(`No interaction with the ${e} selector was found.`,"error"):e,this.duration={first:typeof t=="number"?t:(o=t==null?void 0:t.first)!=null?o:0,second:typeof t=="number"?t:(r=t==null?void 0:t.second)!=null?r:0}}trigger(e){return p(this,null,function*(){return e==="first"&&this.active||e==="second"&&!this.active?!1:(e||(e=this.active?"second":"first"),S(this.element,"click"),this.running=!0,this.runningPromise=De(this.duration[e]),yield this.runningPromise,this.running=!1,this.active=e==="first",!0)})}};var A=class{constructor({element:e,interaction:t,displayProperty:o,noTransition:r,startsHidden:i}){this.isVisible=()=>this.visible;if(this.element=typeof e=="string"?y(e,HTMLElement)||C.alert(`No element with the ${e} selector was found.`,"error"):e,this.noTransition=r,this.displayProperty=o||"block",i?(this.element.style.display="none",this.visible=!1):this.visible=Ie(this.element),t){let{element:s,duration:a}=t;this.interaction=new he({element:s,duration:a})}}show(){return p(this,null,function*(){this.visible||(this.interaction?yield this.interaction.trigger("first"):this.noTransition?this.element.style.display=this.displayProperty:yield F(this.element,this.displayProperty),this.visible=!0)})}hide(){return p(this,null,function*(){!this.visible||(this.interaction?yield this.interaction.trigger("second"):this.noTransition?this.element.style.display="none":yield j(this.element),this.visible=!1)})}};A.displayProperties=["block","flex","grid","inline-block","inline"];var ye=()=>document.documentElement.getAttribute("data-wf-site");var be=n=>p(void 0,null,function*(){let{Webflow:e}=window;if(!(!e||!("destroy"in e)||!("ready"in e)||!("require"in e))&&!(n&&!n.length)){if(n||(e.destroy(),e.ready()),!n||n.includes("ix2")){let t=e.require("ix2");if(t){let{store:o,actions:r}=t,{eventState:i}=o.getState().ixSession;n||t.destroy(),t.init();for(let s of Object.entries(i))o.dispatch(r.eventStateChanged(...s))}}if(!n||n.includes("commerce")){let t=e.require("commerce"),o=ye();t&&o&&(t.destroy(),t.init({siteId:o,apiUrl:"https://render.webflow.com"}))}if(n==null?void 0:n.includes("lightbox")){let t=e.require("lightbox");t==null||t.ready()}return new Promise(t=>e.push(()=>t(void 0)))}});var gt={info:"green",warning:"yellow",error:"red"},d=class{static activate(){this.init(),this.active=!0}static init(){this.element=document.createElement("div"),Object.assign(this.element.style,{position:"fixed",left:"auto",top:"auto",right:"16px",bottom:"0px","z-index":"999999","max-width":"320px","font-size":"14px","line-height":"1.25"}),document.body.appendChild(this.element)}static alert(e,t){if(!this.active)return;let o=document.createElement("div");Object.assign(o.style,{position:"relative",padding:"16px",opacity:"0","margin-bottom":"16px","border-left":`4px solid ${gt[t]}`,"background-color":"#fff","box-shadow":"1px 1px 3px 0 rgba(0, 0, 0, 0.1)","word-break":"break-all"});let r=document.createElement("div");r.innerText=e,o.appendChild(r),o.insertAdjacentHTML("beforeend",`<div ${f}="close" style="position: absolute; left: auto; top: 4px; right: 8px; bottom: auto; cursor: pointer">\u2716</div>`),this.handleCard(o)}static handleCard(e){let t=o=>{o.target instanceof Element&&o.target.closest(w.close)&&(e.removeEventListener("click",t),e.remove())};e.addEventListener("click",t),this.element.insertAdjacentElement("afterbegin",e),F(e)}};l(d,"active",!1),l(d,"element");var Le=n=>p(void 0,null,function*(){let{origin:e,pathname:t,href:o}=window.location,{origin:r,pathname:i,href:s}=new URL(document.baseURI);try{if(n.startsWith("/")){let se=s===o?e:r+i;n=me(se)+n}let{origin:a,pathname:c}=new URL(n);if(a+c===e+t)return;let h=yield(yield fetch(n)).text(),it=new DOMParser().parseFromString(h,"text/html");Object.values(b).forEach(se=>{let Te=it.querySelector(se);Te&&document.body.appendChild(Te)}),be()}catch(a){d.alert(`${a}`,"error")}}),$e=n=>{if(V(n))return n;let e=n.querySelectorAll("*");for(let t of e)if(V(t))return t},Fe=({element:n})=>{let e=document.createElement("script");return e.type="text/javascript",e.innerText=n.innerText,e.text=n.text,n.src&&(e.src=n.src),e},je=({element:n,src:e,placeholder:t})=>{let o=document.createElement("iframe");for(let{name:r,value:i}of n.attributes)o.setAttribute(r,i);return o.innerText=n.innerText,o.src=e,t&&o.addEventListener("load",()=>j(t)),o};var Ue=i=>p(void 0,[i],function*({id:n,endpoint:e,consents:t,action:o,bannerText:r}){if(!!e)try{let s=JSON.stringify({id:n,action:o,consents:t,bannerText:r,url:window.location.href,userAgent:navigator.userAgent}),a=yield fetch(e,{body:s,method:"POST"});if(a.ok)d.alert("The new consents were successfully POSTed to the API endpoint.","info");else throw new Error(`The API returned a ${a.status} status.`)}catch(s){d.alert(`There was an error while POSTing to the API: ${s}`,"error")}});var He=n=>{window.dataLayer=window.dataLayer||[],window.dataLayer.find(e=>e.event===n)||(window.dataLayer.push({event:n}),d.alert(`The GTM event ${n} has been fired.`,"info"))};var Xe=le(Q());var qe=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");var Ve=n=>Object.keys(n).every(e=>g(e,_));function X(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}var wt={read:function(n){return n[0]==='"'&&(n=n.slice(1,-1)),n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(n){return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function ve(n,e){function t(r,i,s){if(typeof document!="undefined"){s=X({},e,s),typeof s.expires=="number"&&(s.expires=new Date(Date.now()+s.expires*864e5)),s.expires&&(s.expires=s.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var c in s)!s[c]||(a+="; "+c,s[c]!==!0&&(a+="="+s[c].split(";")[0]));return document.cookie=r+"="+n.write(i,r)+a}}function o(r){if(!(typeof document=="undefined"||arguments.length&&!r)){for(var i=document.cookie?document.cookie.split("; "):[],s={},a=0;a<i.length;a++){var c=i[a].split("="),u=c.slice(1).join("=");try{var h=decodeURIComponent(c[0]);if(s[h]=n.read(u,h),r===h)break}catch(st){}}return r?s[r]:s}}return Object.create({set:t,get:o,remove:function(r,i){t(r,"",X({},i,{expires:-1}))},withAttributes:function(r){return ve(this.converter,X({},this.attributes,r))},withConverter:function(r){return ve(X({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(n)}})}var vt=ve(wt,{path:"/"}),E=vt;var We=n=>{if(!n)return;let{hostname:e}=window.location;return e.includes("webflow.io")?e:n},ze=()=>{let n=E.get(T.main);if(!n)return;let e=JSON.parse(decodeURIComponent(n));if(e.consents&&Ve(e.consents))return e.consents},Ye=(n,e,t=120,o)=>{let r={id:n,consents:e},i=encodeURIComponent(JSON.stringify(r));o=We(o),E.set(T.main,i,{expires:t,domain:o})},Ge=()=>{let n=E.get();for(let e in n){if(e===T.main)continue;let t=window.location.host.split(".");for(;t.length>1;)E.remove(e),E.remove(e,{domain:`.${t.join(".")}`}),E.remove(e,{domain:`${t.join(".")}`}),t.splice(0,1)}},Je=()=>!!E.get(T.consentsUpdated),Qe=(n=120,e)=>{e=We(e),E.set(T.consentsUpdated,"true",{expires:n,domain:e})};var Z=class extends Xe.default{constructor(e){super();this.store=e;this.loadConsents(),this.storeElements(),document.readyState!=="complete"&&window.addEventListener("load",()=>{this.storeElements(),this.applyConsents()}),this.applyConsents()}storeElements(){let{store:e}=this,t=document.querySelectorAll(`script[type="${f}"], iframe[${m.src}]`),o=e.getStoredElements();[...t].filter(i=>!o.find(({element:s})=>i===s)).forEach(i=>{let s=ue(i.getAttribute(m.categories[0])||i.getAttribute(m.categories[1]),_,de);if(i instanceof HTMLScriptElement&&e.storeScript({categories:s,element:i,active:!1}),i instanceof HTMLIFrameElement){let a=i.getAttribute(m.src);if(!a)return;i.src="";let c=i.getAttribute(m.placeholder),u=c?y(c,HTMLElement):void 0;e.storeIFrame({categories:s,element:i,src:a,placeholder:u,active:!1})}d.alert(`Stored the element: ${i.outerHTML} in the categories: ${s.join(", ")}`,"info")})}loadConsents(){let e=ze();if(!e)return;d.alert(`The following consents were loaded from the stored cookies: ${JSON.stringify(e)}`,"info"),this.store.storeConsents(e),Je()&&(Ge(),d.alert("Previously denied cookies have been deleted.","info"))}applyConsents(){return p(this,null,function*(){let{store:e}=this;for(let t of e.getActivableElements())yield new Promise(o=>{let{element:r}=t,{src:i,parentElement:s}=r,a;if(t.type==="script")a=Fe(t);else if(t.type==="iframe")a=je(t);else{o(void 0);return}let c=()=>{t.element=a,t.active=!0,o(void 0)};i&&a.addEventListener("load",c),s==null||s.insertBefore(a,r),r.remove(),i||c()});e.getConsentsEntries().forEach(([t,o])=>{o&&He(L.gtmEvent(t))})})}updateConsents(e,t){let{store:o}=this,{cookieMaxAge:r,endpoint:i,domain:s}=o,a=o.storeConsents(e),c=qe();Ye(c,o.getConsents(),r,s),i&&Ue({action:t,endpoint:i,id:c,consents:o.getConsents(),bannerText:o.getBannerText()||""}),a.length&&(Qe(r,s),this.applyConsents(),d.alert(`The following consents were updated: ${a.join(", ")}`,"info")),this.emit("updateconsents")}};function xt(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}else return Array.from(n)}var xe=!1;typeof window!="undefined"&&(Ce={get passive(){xe=!0}},window.addEventListener("testPassive",null,Ce),window.removeEventListener("testPassive",null,Ce));var Ce,Ze=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),M=[],ee=!1,Se=-1,B=void 0,K=void 0,et=function(e){return M.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},te=function(e){var t=e||window.event;return et(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},Ct=function(e){if(K===void 0){var t=!!e&&e.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;t&&o>0&&(K=document.body.style.paddingRight,document.body.style.paddingRight=o+"px")}B===void 0&&(B=document.body.style.overflow,document.body.style.overflow="hidden")},St=function(){K!==void 0&&(document.body.style.paddingRight=K,K=void 0),B!==void 0&&(document.body.style.overflow=B,B=void 0)},Tt=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},At=function(e,t){var o=e.targetTouches[0].clientY-Se;return et(e.target)?!1:t&&t.scrollTop===0&&o>0||Tt(t)&&o<0?te(e):(e.stopPropagation(),!0)},tt=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!M.some(function(r){return r.targetElement===e})){var o={targetElement:e,options:t||{}};M=[].concat(xt(M),[o]),Ze?(e.ontouchstart=function(r){r.targetTouches.length===1&&(Se=r.targetTouches[0].clientY)},e.ontouchmove=function(r){r.targetTouches.length===1&&At(r,e)},ee||(document.addEventListener("touchmove",te,xe?{passive:!1}:void 0),ee=!0)):Ct(t)}},ot=function(){Ze?(M.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),ee&&(document.removeEventListener("touchmove",te,xe?{passive:!1}:void 0),ee=!1),Se=-1):St(),M=[]};var nt=le(Q());var oe=class extends nt.default{constructor(e,t){super();this.element=e;this.store=t;l(this,"checkboxes",new Map);this.initElements(),this.listenEvents(),this.updateCheckboxes()}initElements(){let e=ce.filter(t=>{let o=L.checkbox(t),r=this.element.querySelector(`input${o}, ${o} input`);return!r||r.type!=="checkbox"?!0:(r.checked&&W(r,!1),this.checkboxes.set(t,r),!1)});e.length&&d.alert(`The Consents Form is missing the following checkboxes: ${e.map(t=>L.checkbox(t)).join(", ")}.`,"warning")}listenEvents(){this.element.addEventListener("submit",e=>this.handleSubmit(e))}handleSubmit(e){e.preventDefault(),e.stopPropagation();let t={};this.checkboxes.forEach((o,r)=>{var i;t[r]=(i=o.checked)!=null?i:!1}),this.emit("submit",t)}updateCheckboxes(){let e=this.store.getConsents();this.checkboxes.forEach((t,o)=>{!!e[o]!==t.checked&&W(t,e[o])})}submit(){S(this.element,"submit")}};var rt=le(Q());var P=class extends rt.default{constructor(e,t){super();this.selector=e;this.store=t;l(this,"element");l(this,"form");l(this,"displayController");l(this,"scrollableElement");l(this,"disableScrollOnOpen",!1);l(this,"ready",!1);l(this,"isReady",()=>this.ready);document.readyState==="complete"?this.init():window.addEventListener("load",()=>this.init())}init(){let{banner:e,manager:t,preferences:o}=b;if(!this.initElements()){switch(this.selector){case e:d.alert(`No element with the ${e} attribute was found, it is required to have it!`,"error");break;case t:d.alert(`No element with the ${t} attribute was found, did you want to use the Manager component?`,"info");break;case o:d.alert(`No element with the ${o} attribute was found, did you want to use the Preferences component?`,"info");break}return}this.handleAccessibility(),this.listenEvents(),this.ready=!0,this.emit("ready",this.element)}initElements(){this.element=y(this.selector,HTMLElement);let{element:e,store:t}=this;if(!e)return!1;let o=y("form",HTMLFormElement,e);o&&(this.form=new oe(o,t));let r=e.getAttribute(m.displayProperty);this.disableScrollOnOpen=e.getAttribute(m.disableScroll)==="disable",this.disableScrollOnOpen&&(this.scrollableElement=$e(e));let i=y(fe.interactionTrigger,HTMLElement,e);return this.displayController=new A({element:e,interaction:i?{element:i}:void 0,displayProperty:g(r,A.displayProperties)?r:"flex",startsHidden:!0}),!0}handleAccessibility(){let{element:e}=this;!e||U(w).forEach(t=>{let o=e.querySelector(w[t]);!o||(o.setAttribute("role","button"),o.setAttribute("tabindex","0"))})}listenEvents(){let{element:e,form:t}=this;!e||(e.addEventListener("click",o=>this.handleMouseAndKeyboard(o)),e.addEventListener("keydown",o=>this.handleMouseAndKeyboard(o)),t==null||t.on("submit",o=>this.handleFormSubmit(o)))}handleMouseAndKeyboard(e){var a;let{target:t}=e,{allow:o,deny:r,close:i,submit:s}=w;t instanceof Element&&("key"in e&&e.key!=="Enter"||(t.closest(o)?(this.emit("allow"),this.close()):t.closest(r)?(this.emit("deny"),this.close()):t.closest(i)?this.close():t.closest(s)&&((a=this.form)==null||a.submit())))}handleFormSubmit(e){this.emit("formsubmit",e),this.close()}show(e=!0){let{element:t,displayController:o,disableScrollOnOpen:r,scrollableElement:i}=this;!t||!o||o.isVisible()===e||(o[e?"show":"hide"](),r&&(e?tt(i||t,{reserveScrollBarGap:!0}):ot()),this.emit(e?"open":"close"))}open(){this.ready?this.show():this.once("ready").then(()=>this.show())}close(){this.ready?this.show(!1):this.once("ready").then(()=>this.show(!1))}};var ne=class{constructor(){l(this,"mode");l(this,"cookieMaxAge");l(this,"debugMode");l(this,"endpoint");l(this,"componentsSource");l(this,"domain");l(this,"confirmed",!1);l(this,"consents");l(this,"bannerText","empty");l(this,"scripts",[]);l(this,"iFrames",[]);l(this,"userHasConfirmed",()=>this.confirmed);l(this,"getStoredElements",()=>[...this.scripts,...this.iFrames]);l(this,"getActivableElements",()=>this.getStoredElements().filter(({active:e,categories:t})=>!e&&t.every(o=>this.consents[o])));l(this,"getConsents",()=>this.consents);l(this,"getConsentsEntries",()=>pe(this.consents));l(this,"getConsent",e=>this.consents[e]);l(this,"getBannerText",()=>this.bannerText);let{currentScript:e}=document,t=e==null?void 0:e.getAttribute(m.mode);switch(this.mode=g(t,ke)?t:"opt-in",this.mode){case"informational":case"opt-out":this.consents=I({},$);break;default:this.consents=I({},q)}this.cookieMaxAge=parseInt((e==null?void 0:e.getAttribute(m.cookieMaxAge))||Pe);let o=e==null?void 0:e.getAttribute(m.debugMode);this.debugMode=o===""||o==="true",this.debugMode&&d.activate(),this.endpoint=e==null?void 0:e.getAttribute(m.endpoint),this.componentsSource=e==null?void 0:e.getAttribute(m.componentsSource),this.domain=e==null?void 0:e.getAttribute(m.domain),d.alert(`The cookie banner is set to ${this.mode} mode with a consent expiry time of ${this.cookieMaxAge} days.${this.endpoint?`The consents will be POSTed to ${this.endpoint}`:""}`,"info")}storeScript(e){this.scripts.push(ae(I({},e),{type:"script"}))}storeIFrame(e){this.iFrames.push(ae(I({},e),{type:"iframe"}))}storeConsents(e){let t=[];return U(e).forEach(o=>{if(o==="essential")return;let r=e[o];r===void 0||r===this.consents[o]||(this.consents[o]=r,t.push(o))}),this.confirmed=!0,t}storeBannerText(e){e&&e.textContent&&(this.bannerText=e.textContent)}};var re=class{constructor(){l(this,"consentController");l(this,"store",new ne);l(this,"banner");l(this,"preferences");l(this,"manager");this.consentController=new Z(this.store),this.initComponents().then(()=>this.init())}initComponents(){return p(this,null,function*(){let{store:e}=this,{componentsSource:t}=e,{banner:o,preferences:r,manager:i}=b;t&&(yield Le(t)),this.banner=new P(o,e),this.preferences=new P(r,e),this.manager=new P(i,e)})}init(){let{store:e,manager:t,banner:o}=this;document.head.insertAdjacentHTML("beforeend",Me),!/bot|crawler|spider|crawling/i.test(navigator.userAgent)&&(e.userHasConfirmed()?t.open():o.open(),this.listenEvents())}listenEvents(){let{allow:e,deny:t,submit:o}=D,r=["banner","manager","preferences"],{store:i,consentController:s,banner:a,manager:c}=this;document.addEventListener("click",u=>this.handleMouseAndKeyboard(u)),document.addEventListener("keydown",u=>this.handleMouseAndKeyboard(u)),a.isReady()?i.storeBannerText(a.element):a.on("ready",u=>i.storeBannerText(u)),s.on("updateconsents",()=>{r.forEach(u=>{var h;return(h=this[u].form)==null?void 0:h.updateCheckboxes()})}),r.forEach(u=>{this[u].on("allow",()=>{d.alert(`Allow button was clicked in the ${u} component.`,"info"),s.updateConsents($,e)}),this[u].on("deny",()=>{d.alert(`Deny button was clicked in the ${u} component.`,"info"),s.updateConsents(q,t)}),this[u].on("formsubmit",h=>{d.alert(`Consents Form was submitted in the ${u} component with the following consents: ${JSON.stringify(h)}`,"info"),s.updateConsents(h,o)}),u!=="manager"&&this[u].on("close",()=>{d.alert(`The ${u} component was closed.`,"info"),i.mode==="informational"&&(d.alert(`All cookies were accepted because the mode is set to ${i.mode}.`,"warning"),s.updateConsents($,e)),c.open()})})}handleMouseAndKeyboard(e){let{target:t}=e,{banner:o,manager:r,preferences:i}=this;t instanceof Element&&("key"in e&&e.key!=="Enter"||t.closest(w.openPreferences)&&(o.close(),r.close(),i.open(),d.alert("Open Preferences button was clicked.","info")))}};window.FsCC=new re;})();

/* ------------------------*/
/* ------------------------*/
/*         typograf        */
/* ------------------------*/
/* ------------------------*/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Typograf=t()}(this,function(){"use strict";var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function n(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||((r=r||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}var P=[["iexcl",161],["cent",162],["pound",163],["curren",164],["yen",165],["brvbar",166],["sect",167],["uml",168],["copy",169],["ordf",170],["laquo",171],["not",172],["reg",174],["macr",175],["deg",176],["plusmn",177],["sup2",178],["sup3",179],["acute",180],["micro",181],["para",182],["middot",183],["cedil",184],["sup1",185],["ordm",186],["raquo",187],["frac14",188],["frac12",189],["frac34",190],["iquest",191],["Agrave",192],["Aacute",193],["Acirc",194],["Atilde",195],["Auml",196],["Aring",197],["AElig",198],["Ccedil",199],["Egrave",200],["Eacute",201],["Ecirc",202],["Euml",203],["Igrave",204],["Iacute",205],["Icirc",206],["Iuml",207],["ETH",208],["Ntilde",209],["Ograve",210],["Oacute",211],["Ocirc",212],["Otilde",213],["Ouml",214],["times",215],["Oslash",216],["Ugrave",217],["Uacute",218],["Ucirc",219],["Uuml",220],["Yacute",221],["THORN",222],["szlig",223],["agrave",224],["aacute",225],["acirc",226],["atilde",227],["auml",228],["aring",229],["aelig",230],["ccedil",231],["egrave",232],["eacute",233],["ecirc",234],["euml",235],["igrave",236],["iacute",237],["icirc",238],["iuml",239],["eth",240],["ntilde",241],["ograve",242],["oacute",243],["ocirc",244],["otilde",245],["ouml",246],["divide",247],["oslash",248],["ugrave",249],["uacute",250],["ucirc",251],["uuml",252],["yacute",253],["thorn",254],["yuml",255],["fnof",402],["Alpha",913],["Beta",914],["Gamma",915],["Delta",916],["Epsilon",917],["Zeta",918],["Eta",919],["Theta",920],["Iota",921],["Kappa",922],["Lambda",923],["Mu",924],["Nu",925],["Xi",926],["Omicron",927],["Pi",928],["Rho",929],["Sigma",931],["Tau",932],["Upsilon",933],["Phi",934],["Chi",935],["Psi",936],["Omega",937],["alpha",945],["beta",946],["gamma",947],["delta",948],["epsilon",949],["zeta",950],["eta",951],["theta",952],["iota",953],["kappa",954],["lambda",955],["mu",956],["nu",957],["xi",958],["omicron",959],["pi",960],["rho",961],["sigmaf",962],["sigma",963],["tau",964],["upsilon",965],["phi",966],["chi",967],["psi",968],["omega",969],["thetasym",977],["upsih",978],["piv",982],["bull",8226],["hellip",8230],["prime",8242],["Prime",8243],["oline",8254],["frasl",8260],["weierp",8472],["image",8465],["real",8476],["trade",8482],["alefsym",8501],["larr",8592],["uarr",8593],["rarr",8594],["darr",8595],["harr",8596],["crarr",8629],["lArr",8656],["uArr",8657],["rArr",8658],["dArr",8659],["hArr",8660],["forall",8704],["part",8706],["exist",8707],["empty",8709],["nabla",8711],["isin",8712],["notin",8713],["ni",8715],["prod",8719],["sum",8721],["minus",8722],["lowast",8727],["radic",8730],["prop",8733],["infin",8734],["ang",8736],["and",8743],["or",8744],["cap",8745],["cup",8746],["int",8747],["there4",8756],["sim",8764],["cong",8773],["asymp",8776],["ne",8800],["equiv",8801],["le",8804],["ge",8805],["sub",8834],["sup",8835],["nsub",8836],["sube",8838],["supe",8839],["oplus",8853],["otimes",8855],["perp",8869],["sdot",8901],["lceil",8968],["rceil",8969],["lfloor",8970],["rfloor",8971],["lang",9001],["rang",9002],["spades",9824],["clubs",9827],["hearts",9829],["diams",9830],["loz",9674],["OElig",338],["oelig",339],["Scaron",352],["scaron",353],["Yuml",376],["circ",710],["tilde",732],["ndash",8211],["mdash",8212],["lsquo",8216],["rsquo",8217],["sbquo",8218],["ldquo",8220],["rdquo",8221],["bdquo",8222],["dagger",8224],["Dagger",8225],["permil",8240],["lsaquo",8249],["rsaquo",8250],["euro",8364],["NestedGreaterGreater",8811],["NestedLessLess",8810]],e=[["nbsp",160],["thinsp",8201],["ensp",8194],["emsp",8195],["shy",173],["zwnj",8204],["zwj",8205],["lrm",8206],["rlm",8207]];function t(){var t=this;this.entities=this.prepareEntities(n(n([],P,!0),e,!0)),this.entitiesByName={},this.entitiesByNameEntity={},this.entitiesByDigitEntity={},this.entitiesByUtf={},this.entities.forEach(function(e){t.entitiesByName[e.name]=e,t.entitiesByNameEntity[e.nameEntity]=e,t.entitiesByDigitEntity[e.digitEntity]=e,t.entitiesByUtf[e.utf]=e}),this.invisibleEntities=this.prepareEntities(e)}t.prototype.toUtf=function(e){var n=this;-1!==e.text.search(/&#/)&&(e.text=this.decHexToUtf(e.text)),-1!==e.text.search(/&[a-z]/i)&&(e.text=e.text.replace(/&[a-z\d]{2,31};/gi,function(e){var t=n.entitiesByNameEntity[e];return t?t.utf:e}))},t.prototype.decHexToUtf=function(e){return e.replace(/&#(\d{1,6});/gi,function(e,t){return String.fromCharCode(parseInt(t,10))}).replace(/&#x([\da-f]{1,6});/gi,function(e,t){return String.fromCharCode(parseInt(t,16))})},t.prototype.restore=function(e){var t=e.prefs.htmlEntity,n=t.type,r=this.entities;"name"!==n&&"digit"!==n||((t.onlyInvisible||t.list)&&(r=[],t.onlyInvisible&&(r=r.concat(this.invisibleEntities)),t.list)&&(r=r.concat(this.prepareListParam(t.list))),e.text=this.restoreEntitiesByIndex(e.text,"name"===n?"nameEntity":"digitEntity",r))},t.prototype.getByUtf=function(e,t){var n;switch(t){case"digit":n=this.entitiesByDigitEntity[e];break;case"name":n=this.entitiesByNameEntity[e];break;default:n=e}return n},t.prototype.prepareEntities=function(e){var r=[];return e.forEach(function(e){var t=e[0],e=e[1],n=String.fromCharCode(e);r.push({name:t,nameEntity:"&"+t+";",digitEntity:"&#"+e+";",utf:n,reName:new RegExp("&"+t+";","g"),reUtf:new RegExp(n,"g")})}),r},t.prototype.prepareListParam=function(e){var t=this,n=[];return e.forEach(function(e){e=t.entitiesByName[e];e&&n.push(e)}),n},t.prototype.restoreEntitiesByIndex=function(t,n,e){return e.forEach(function(e){t=t.replace(e.reUtf,e[n])}),t};var s=new t,a=[];function i(e){e=(e||"").split("/")[0];e&&"common"!==e&&!o(e)&&(a.push(e),a.sort())}function o(e){return"common"===e||-1!==a.indexOf(e)}function u(e,t){e=e||t;return e?Array.isArray(e)?e:[e]:[]}function l(e){if(!e.length)throw Error('Not defined the property "locale".');e.forEach(function(e){if(!o(e))throw Error('"'.concat(e,'" is not supported locale.'))})}var c={};function N(e){return c[e]}function p(t){Object.keys(t).forEach(function(e){i(e),c[e]=t[e]})}var j=["a","abbr","acronym","b","bdo","big","br","button","cite","code","dfn","em","i","img","input","kbd","label","map","object","q","samp","script","select","small","span","strong","sub","sup","textarea","time","tt","var"],g=new RegExp("(https?|file|ftp)://([a-zA-Z0-9/+-=%&:_.~?]+[a-zA-Z0-9#+]*)","g"),h="\\d+([.,]\\d+)?",O=/\d/;function f(e){return-1<e.search(O)}var d="\uf000",m="\uf001",M=($.prototype.add=function(e){this.tags.own.push(this.prepareRegExp(e))},$.prototype.show=function(t,n){for(var e=new RegExp("\uf000tf\\d+\uf000","g"),r=new RegExp("\uf000tf\\d"),a=function(e){return t.safeTags.hidden[n][e]||e},i=0,s=this.tags[n].length;i<s&&(t.text=t.text.replace(e,a),-1!==t.text.search(r));i++);},$.prototype.hide=function(t,e){var n=this,r=(t.safeTags.hidden[e]={},this.pasteLabel.bind(this,t,e));this.tags[e].forEach(function(e){t.text=t.text.replace(n.prepareRegExp(e),r)})},$.prototype.hideHTMLTags=function(e){var t;e.isHTML&&(t=this.pasteLabel.bind(this,e,"html"),e.text=e.text.replace(/<\/?[a-z][^]*?>/gi,t).replace(/&lt;\/?[a-z][^]*?&gt;/gi,t).replace(/&[gl]t;/gi,t))},$.prototype.getPrevLabel=function(e,t){for(var n=t-1;0<=n;n--)if(e[n]===d)return e.slice(n,t+1);return""},$.prototype.getNextLabel=function(e,t){for(var n=t+1;n<e.length;n++)if(e[n]===d)return e.slice(t,n+1);return""},$.prototype.getTagByLabel=function(n,r){var a=null;return this.groups.some(function(e){var t=n.safeTags.hidden[e][r];return a=void 0!==t?{group:e,value:t}:a}),a},$.prototype.getTagInfo=function(e){if(!e)return null;var t={group:e.group};switch(e.group){case"html":t.name=e.value.split(/[<\s>]/)[1],t.isInline=-1<j.indexOf(t.name),t.isClosing=-1<e.value.search(/^<\//);break;case"url":t.isInline=!0;break;case"own":t.isInline=!1}return t},$.prototype.pasteLabel=function(e,t,n){var e=e.safeTags,r="\uf000tf"+e.counter+d;return e.hidden[t][r]=n,e.counter++,r},$.prototype.prepareRegExp=function(e){var t,n;return e instanceof RegExp?e:(t=e[0],n=e[1],e=e[2],new RegExp(t+(void 0===e?"[^]*?":e)+n,"gi"))},$.prototype.getPrevTagInfo=function(e,t,n){t=this.getPrevLabel(t,n-1);if(t){n=this.getTagByLabel(e,t);if(n)return this.getTagInfo(n)}return null},$.prototype.getNextTagInfo=function(e,t,n){t=this.getNextLabel(t,n+1);if(t){n=this.getTagByLabel(e,t);if(n)return this.getTagInfo(n)}return null},$);function $(){this.groups=["own","html","url"],this.hidden={},this.counter=0;var t=[["\x3c!--","--\x3e"],["<!ENTITY",">"],["<!DOCTYPE",">"],["<\\?xml","\\?>"],["<!\\[CDATA\\[","\\]\\]>"]];["code","kbd","object","pre","samp","script","style","var"].forEach(function(e){t.push(["<".concat(e,"(\\s[^>]*?)?>"),"</".concat(e,">")])}),this.tags={own:[],html:t.map(this.prepareRegExp),url:[g]}}function b(e,t){for(var n="";1==(1&t)&&(n+=e),0!=(t>>>=1);)e+=e;return n}function x(e){return e.replace(/\u00A0/g," ")}function v(e,t){for(var n=0;n<t.length;n++)e=e.replace(t[n][0],t[n][1]);return e}function U(e){return-1!==e.search(/(<\/?[a-z]|<!|&[lg]t;)/i)}function y(e){return"object"==typeof e?JSON.parse(JSON.stringify(e)):e}var Q={symbols:110,number:150,space:210,dash:310,punctuation:410,nbsp:510,money:710,date:810,other:910,optalign:1010,typo:1110,html:1210},F=0,H="default",G=[],W=[];function R(){var e=n([],G,!0);return e.sort(function(e,t){return e.index>t.index?1:-1}),e}function X(){return n([],W,!0)}function V(e){var t=e.name.split("/"),n=t[0],r=t[1],t=t[2];return{name:e.name,shortName:t,handler:e.handler,queue:e.queue||H,enabled:!0!==e.disabled,locale:n,group:r,index:"number"==typeof(t=e).index?t.index:(n=t.name.split("/")[1],void 0===(n=Q[n])&&(n=F),"string"==typeof t.index?n+parseInt(t.index,10):n),settings:e.settings,live:e.live,htmlAttrs:e.htmlAttrs}}function K(e){return{type:(null==e?void 0:e.type)||"default",list:null==e?void 0:e.list,onlyInvisible:Boolean(null==e?void 0:e.onlyInvisible)}}function Y(e){return e||"LF"}w.addRule=function(e){i((e=V(e=e)).locale),G.push(e)},w.addRules=function(e){var t=this;e.forEach(function(e){t.addRule(e)})},w.addInnerRule=function(e){W.push(V(e))},w.addInnerRules=function(e){var t=this;e.forEach(function(e){t.addInnerRule(e)})},w.getRule=function(t){var n=null;return R().some(function(e){return e.name===t&&(n=e,!0)}),n},w.getRules=R,w.getInnerRules=X,w.getLocales=function(){return a},w.addLocale=function(e){i(e)},w.hasLocale=o,w.setData=function(e){p(e)},w.getData=function(e){return c[e]},w.prototype.execute=function(e,t){var n;return(e=""+e)?(n=this.prefs,t=t,n=r({},n),t&&("locale"in t&&(n.locale=u(t.locale)),"htmlEntity"in t&&(n.htmlEntity=K(t.htmlEntity)),"lineEnding"in t&&(n.lineEnding=Y(t.lineEnding)),"processingSeparateParts"in t&&(n.processingSeparateParts=t.processingSeparateParts),"ruleFilter"in t)&&(n.ruleFilter=t.ruleFilter),l((t=n).locale),n=this.prepareContext(e,t),this.process(n)):""},w.prototype.getSetting=function(e,t){return this.settings[e]&&this.settings[e][t]},w.prototype.setSetting=function(e,t,n){this.settings[e]=this.settings[e]||{},this.settings[e][t]=n},w.prototype.isEnabledRule=function(e){return!1!==this.enabledRules[e]},w.prototype.isDisabledRule=function(e){return!this.enabledRules[e]},w.prototype.enableRule=function(e){return this.enable(e,!0)},w.prototype.disableRule=function(e){return this.enable(e,!1)},w.prototype.addSafeTag=function(e,t,n){e=e instanceof RegExp?e:[e,t,n];this.safeTags.add(e)},w.prototype.prepareContext=function(e,n){return{text:e,isHTML:U(e),prefs:n,getData:function(t){return"char"===t?n.locale.map(function(e){return c[e+"/"+t]}).join(""):N(n.locale[0]+"/"+t)},safeTags:this.safeTags}},w.prototype.splitBySeparateParts=function(a){var i,e,s;return a.isHTML&&!1!==a.prefs.processingSeparateParts?(i=[],e=new RegExp("<("+this.separatePartsTags.join("|")+")(\\s[^>]*?)?>[^]*?</\\1>","gi"),s=0,a.text.replace(e,function(e,t,n,r){return s!==r&&i.push((s?m:"")+a.text.slice(s,r)+m),i.push(e),s=r+e.length,e}),i.push(s?m+a.text.slice(s,a.text.length):a.text),i):[a.text]},w.prototype.process=function(t){var e,n=this,r=(t.text=t.text.replace(/\r\n?/g,"\n"),this.executeRules(t,"start"),this.safeTags.hide(t,"own"),this.executeRules(t,"hide-safe-tags-own"),this.safeTags.hide(t,"html"),this.executeRules(t,"hide-safe-tags-html"),t.isHTML),a=new RegExp(m,"g");return t.text=this.splitBySeparateParts(t).map(function(e){return t.text=e,t.isHTML=U(e),n.safeTags.hideHTMLTags(t),n.safeTags.hide(t,"url"),n.executeRules(t,"hide-safe-tags-url"),n.executeRules(t,"hide-safe-tags"),s.toUtf(t),t.prefs.live&&(t.text=x(t.text)),n.executeRules(t,"utf"),n.executeRules(t),s.restore(t),n.executeRules(t,"html-entities"),n.safeTags.show(t,"url"),n.executeRules(t,"show-safe-tags-url"),t.text.replace(a,"")}).join(""),t.isHTML=r,this.safeTags.show(t,"html"),this.executeRules(t,"show-safe-tags-html"),this.safeTags.show(t,"own"),this.executeRules(t,"show-safe-tags-own"),this.executeRules(t,"end"),r=t.text,"CRLF"===(e=t.prefs.lineEnding)?r.replace(/\n/g,"\r\n"):"CR"===e?r.replace(/\n/g,"\r"):r},w.prototype.executeRules=function(t,e){var n=this,r=this.rulesByQueues[e=void 0===e?H:e],e=this.innerRulesByQueues[e];e&&e.forEach(function(e){n.ruleIterator(t,e)}),r&&r.forEach(function(e){n.ruleIterator(t,e)})},w.prototype.ruleIterator=function(e,t){!0===e.prefs.live&&!1===t.live||!1===e.prefs.live&&!0===t.live||"common"!==t.locale&&t.locale!==e.prefs.locale[0]||!this.isEnabledRule(t.name)||e.prefs.ruleFilter&&!e.prefs.ruleFilter(t)||(this.onBeforeRule&&this.onBeforeRule(t.name,e),e.text=t.handler.call(this,e.text,this.settings[t.name],e),this.onAfterRule&&this.onAfterRule(t.name,e))},w.prototype.prepareRuleSettings=function(e){this.settings[e.name]=y(e.settings),this.enabledRules[e.name]=e.enabled},w.prototype.enable=function(e,t){var n=this;Array.isArray(e)?e.forEach(function(e){n.enableByMask(e,t)}):this.enableByMask(e,t)},w.prototype.enableByMask=function(e,t){var n,r=this;e&&(-1!==e.search(/\*/)?(n=new RegExp(e.replace(/\//g,"\\/").replace(/\*/g,".*")),this.rules.forEach(function(e){e=e.name;n.test(e)&&(r.enabledRules[e]=t)})):this.enabledRules[e]=t)},w.groups=[],w.titles={},w.version="7.0.0";var E=w;function w(e){var t=this;this.rules=[],this.innerRules=[],this.rulesByQueues={},this.innerRulesByQueues={},this.separatePartsTags=["title","p","h[1-6]","select","legend"],this.prefs={locale:u((e=e).locale),lineEnding:Y(e.lineEnding),live:Boolean(e.live),ruleFilter:e.ruleFilter,enableRule:e.enableRule,disableRule:e.disableRule,processingSeparateParts:e.processingSeparateParts,htmlEntity:K(e.htmlEntity)},l(this.prefs.locale),this.safeTags=new M,this.settings={},this.enabledRules={},this.innerRulesByQueues={},this.innerRules=X(),this.innerRules.forEach(function(e){t.innerRulesByQueues[e.queue]=t.innerRulesByQueues[e.queue]||[],t.innerRulesByQueues[e.queue].push(e)}),this.rulesByQueues={},this.rules=R(),this.rules.forEach(function(e){t.prepareRuleSettings(e),t.rulesByQueues[e.queue]=t.rulesByQueues[e.queue]||[],t.rulesByQueues[e.queue].push(e)}),this.prefs.disableRule&&this.disableRule(this.prefs.disableRule),this.prefs.enableRule&&this.enableRule(this.prefs.enableRule)}[{"common/char":"a-z","common/dash":"--?|\u2012|\u2013|\u2014","common/quote":'\xab\u2039\xbb\u203a\u201e\u201c\u201f\u201d"'},{"be/char":"\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u044b\u044c\u044d\u044e\u044f\u0451\u0456\u045e\u0491","be/quote":{left:"\xab\u201c",right:"\xbb\u201d"}},{"bg/char":"\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044c\u044e\u044f","bg/quote":{left:"\u201e\u2019",right:"\u201c\u2019"}},{"ca/char":"abcdefghijlmnopqrstuvxyz\xe0\xe7\xe8\xe9\xed\xef\xf2\xf3\xfa\xfc","ca/quote":{left:"\xab\u201c",right:"\xbb\u201d"}},{"cs/char":"a-z\xe1\xe9\xed\xf3\xfa\xfd\u010d\u010f\u011b\u0148\u0159\u0161\u0165\u016f\u017e","cs/quote":{left:"\u201e\u201a",right:"\u201c\u2018"}},{"da/char":"a-z\xe5\xe6\xf8","da/quote":{left:"\xbb\u203a",right:"\xab\u2039"}},{"de/char":"a-z\xdf\xe4\xf6\xfc","de/quote":{left:"\u201e\u201a",right:"\u201c\u2018"}},{"el/char":"\u0390\u03ac\u03ad\u03ae\u03af\u03b0\u03b1\u03b2\u03b3\u03b4\u03b5\u03b6\u03b7\u03b8\u03b9\u03ba\u03bb\u03bc\u03bd\u03be\u03bf\u03c0\u03c1\u03c2\u03c3\u03c4\u03c5\u03c6\u03c7\u03c8\u03c9\u03ca\u03cb\u03cc\u03cd\u03ce\u03f2\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d","el/quote":{left:"\xab\u201c",right:"\xbb\u201d"}},{"en-GB/char":"a-z","en-GB/quote":{left:"\u2018\u201c",right:"\u2019\u201d"}},{"en-US/char":"a-z","en-US/quote":{left:"\u201c\u2018",right:"\u201d\u2019"}},{"eo/char":"abcdefghijklmnoprstuvz\u0109\u011d\u0125\u0135\u015d\u016d","eo/quote":{left:"\u201c\u2018",right:"\u201d\u2019"}},{"es/char":"a-z\xe1\xe9\xed\xf1\xf3\xfa\xfc","es/quote":{left:"\xab\u201c",right:"\xbb\u201d"}},{"et/char":"abdefghijklmnoprstuvz\xe4\xf5\xf6\xfc\u0161\u017e","et/quote":{left:"\u201e\xab",right:"\u201c\xbb"}},{"fi/char":"abcdefghijklmnopqrstuvy\xf6\xe4\xe5","fi/quote":{left:"\u201d\u2019",right:"\u201d\u2019"}},{"fr/char":"a-z\xe0\xe2\xe7\xe8\xe9\xea\xeb\xee\xef\xf4\xfb\xfc\u0153\xe6","fr/quote":{left:"\xab\u2039",right:"\xbb\u203a",spacing:!0}},{"ga/char":"abcdefghilmnoprstuvwxyz\xe1\xe9\xed\xf3\xfa","ga/quote":{left:"\u201c\u2018",right:"\u201d\u2019"}},{"hu/char":"a-z\xe1\xe4\xe9\xed\xf3\xf6\xfa\xfc\u0151\u0171","hu/quote":{left:"\u201e\xbb",right:"\u201d\xab"}},{"it/char":"a-z\xe0\xe9\xe8\xec\xf2\xf9","it/quote":{left:"\xab\u201c",right:"\xbb\u201d"}},{"lv/char":"abcdefghijklmnopqrstuvxz\xe6\u0153","lv/quote":{left:"\xab\u201e",right:"\xbb\u201c"}},{"nl/char":"a-z\xe4\xe7\xe8\xe9\xea\xeb\xee\xef\xf1\xf6\xfb\xfc","nl/quote":{left:"\u2018\u201c",right:"\u2019\u201d"}},{"no/char":"a-z\xe5\xe6\xe8\xe9\xea\xf2\xf3\xf4\xf8","no/quote":{left:"\xab\u2019",right:"\xbb\u2019"}},{"pl/char":"abcdefghijklmnoprstuvwxyz\xf3\u0105\u0107\u0119\u0142\u0144\u015b\u017a\u017c","pl/quote":{left:"\u201e\xab",right:"\u201d\xbb"}},{"ro/char":"abcdefghijklmnoprstuvxz\xee\u0103\u0219\u021b","ro/quote":{left:"\u201e\xab",right:"\u201d\xbb"}},{"ru/char":"\u0430-\u044f\u0451","ru/dashBefore":"(^| |\\n)","ru/dashAfter":"(?=[\xa0 ,.?:!]|$)","ru/dashAfterDe":"(?=[,.?:!]|[\xa0 ][^\u0410-\u042f\u0401]|$)","ru/l":"\u0430-\u044f\u0451a-z","ru/L":"\u0410-\u042f\u0401A-Z","ru/month":"\u044f\u043d\u0432\u0430\u0440\u044c|\u0444\u0435\u0432\u0440\u0430\u043b\u044c|\u043c\u0430\u0440\u0442|\u0430\u043f\u0440\u0435\u043b\u044c|\u043c\u0430\u0439|\u0438\u044e\u043d\u044c|\u0438\u044e\u043b\u044c|\u0430\u0432\u0433\u0443\u0441\u0442|\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c|\u043e\u043a\u0442\u044f\u0431\u0440\u044c|\u043d\u043e\u044f\u0431\u0440\u044c|\u0434\u0435\u043a\u0430\u0431\u0440\u044c","ru/monthGenCase":"\u044f\u043d\u0432\u0430\u0440\u044f|\u0444\u0435\u0432\u0440\u0430\u043b\u044f|\u043c\u0430\u0440\u0442\u0430|\u0430\u043f\u0440\u0435\u043b\u044f|\u043c\u0430\u044f|\u0438\u044e\u043d\u044f|\u0438\u044e\u043b\u044f|\u0430\u0432\u0433\u0443\u0441\u0442\u0430|\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f|\u043e\u043a\u0442\u044f\u0431\u0440\u044f|\u043d\u043e\u044f\u0431\u0440\u044f|\u0434\u0435\u043a\u0430\u0431\u0440\u044f","ru/monthPreCase":"\u044f\u043d\u0432\u0430\u0440\u0435|\u0444\u0435\u0432\u0440\u0430\u043b\u0435|\u043c\u0430\u0440\u0442\u0435|\u0430\u043f\u0440\u0435\u043b\u0435|\u043c\u0430\u0435|\u0438\u044e\u043d\u0435|\u0438\u044e\u043b\u0435|\u0430\u0432\u0433\u0443\u0441\u0442\u0435|\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u0435|\u043e\u043a\u0442\u044f\u0431\u0440\u0435|\u043d\u043e\u044f\u0431\u0440\u0435|\u0434\u0435\u043a\u0430\u0431\u0440\u0435","ru/quote":{left:"\xab\u201e\u201a",right:"\xbb\u201c\u2018",removeDuplicateQuotes:!0},"ru/shortMonth":"\u044f\u043d\u0432|\u0444\u0435\u0432|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430[\u0435\u0439\u044f]|\u0438\u044e\u043d|\u0438\u044e\u043b|\u0430\u0432\u0433|\u0441\u0435\u043d|\u043e\u043a\u0442|\u043d\u043e\u044f|\u0434\u0435\u043a","ru/weekday":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a|\u0432\u0442\u043e\u0440\u043d\u0438\u043a|\u0441\u0440\u0435\u0434\u0430|\u0447\u0435\u0442\u0432\u0435\u0440\u0433|\u043f\u044f\u0442\u043d\u0438\u0446\u0430|\u0441\u0443\u0431\u0431\u043e\u0442\u0430|\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"},{"sk/char":"abcdefghijklmnoprstuvwxyz\xe1\xe4\xe9\xed\xf3\xf4\xfa\xfd\u010d\u010f\u013e\u0148\u0155\u0161\u0165\u017e","sk/quote":{left:"\u201e\u201a",right:"\u201c\u2018"}},{"sl/char":"a-z\u010d\u0161\u017e","sl/quote":{left:"\u201e\u201a",right:"\u201c\u2018"}},{"sr/char":"abcdefghijklmnoprstuvz\u0107\u010d\u0111\u0161\u017e","sr/quote":{left:"\u201e\u2019",right:"\u201d\u2019"}},{"sv/char":"a-z\xe4\xe5\xe9\xf6","sv/quote":{left:"\u201d\u2019",right:"\u201d\u2019"}},{"tr/char":"abcdefghijklmnoprstuvyz\xe2\xe7\xee\xf6\xfb\xfc\u011f\u0131\u015f","tr/quote":{left:"\u201c\u2018",right:"\u201d\u2019"}},{"uk/char":"\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044c\u044e\u044f\u0454\u0456\u0457\u0491","uk/quote":{left:"\xab\u201e",right:"\xbb\u201c"}}].forEach(p);var Z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},q={name:"common/html/escape",index:"+100",queue:"end",handler:function(e){return e.replace(/[&<>"'/]/g,function(e){return Z[e]})},disabled:!0},J=new RegExp("<("+["address","article","aside","blockquote","canvas","dd","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tfoot","ul","video"].join("|")+")[>\\s]"),q=(E.addRules([{name:"common/html/e-mail",queue:"end",handler:function(e,t,n){return n.isHTML?e:e.replace(/(^|[\s;(])([\w\-.]{2,64})@([\w\-.]{2,64})\.([a-z]{2,64})([)\s.,!?]|$)/gi,'$1<a href="mailto:$2@$3.$4">$2@$3.$4</a>$5')},disabled:!0,htmlAttrs:!1},q,{name:"common/html/nbr",index:"+10",queue:"end",handler:function(e){return e.replace(/([^\n>])\n(?=[^\n])/g,"$1<br/>\n")},disabled:!0,htmlAttrs:!1},{name:"common/html/p",index:"+5",queue:"end",handler:function(e){e=e.split("\n\n");return e.forEach(function(e,t,n){!e.trim()||J.test(e)||(n[t]=e.replace(/^(\s*)/,"$1<p>").replace(/(\s*)$/,"</p>$1"))}),e.join("\n\n")},disabled:!0,htmlAttrs:!1},{name:"common/html/processingAttrs",queue:"hide-safe-tags-own",handler:function(e,t,n){var s=this,r=new RegExp("(^|\\s)("+t.attrs.join("|")+")=(\"[^\"]*?\"|'[^']*?')","gi"),o=y(n.prefs);return o.ruleFilter=function(e){return!1!==e.htmlAttrs},e.replace(/(<[-\w]+\s)([^>]+?)(?=>)/g,function(e,t,n){return t+n.replace(r,function(e,t,n,r){var a=r[0],i=r[r.length-1],r=r.slice(1,-1);return t+n+"="+a+s.execute(r,o)+i})})},settings:{attrs:["title","placeholder"]},disabled:!0,htmlAttrs:!1},{name:"common/html/quot",queue:"hide-safe-tags",handler:function(e){return e.replace(/&quot;/g,'"')}},{name:"common/html/stripTags",index:"+99",queue:"end",handler:function(e){return e.replace(/<[^>]+>/g,"")},disabled:!0},{name:"common/html/url",queue:"end",handler:function(e,t,n){return n.isHTML?e:e.replace(g,function(e,t,n){n=n.replace(/([^/]+\/?)(\?|#)$/,"$1").replace(/^([^/]+)\/$/,"$1"),"http"===t?n=n.replace(/^([^/]+)(:80)([^\d]|\/|$)/,"$1$3"):"https"===t&&(n=n.replace(/^([^/]+)(:443)([^\d]|\/|$)/,"$1$3"));var r=n,n=t+"://"+n,a='<a href="'+n+'">';return"http"===t||"https"===t?(r=r.replace(/^www\./,""),a+("http"===t?r:t+"://"+r)+"</a>"):a+n+"</a>"})},disabled:!0,htmlAttrs:!1}]),{name:"common/nbsp/afterNumber",handler:function(e,t,n){n=n.getData("char");return e.replace(new RegExp("(^|\\s)(\\d{1,5}) (["+n+"]+)","gi"),"$1$2\xa0$3")},disabled:!0});function _(e,t,n,r){return t+n.replace(/([^\u00A0])\u00A0([^\u00A0])/g,"$1 $2")+r}E.addRules([q,{name:"common/nbsp/afterParagraphMark",handler:function(e){return e.replace(/\xb6 ?(?=\d)/g,"\xb6\xa0")}},{name:"common/nbsp/afterSectionMark",handler:function(e,t,n){n=n.prefs.locale[0];return e.replace(/\xa7[ \u00A0\u2009]?(?=\d|I|V|X)/g,"ru"===n?"\xa7\u202f":"\xa7\xa0")}},{name:"common/nbsp/afterShortWord",handler:function(e,t,n){var t=t.lengthShortWord,r=c["common/quote"],n=n.getData("char"),r=new RegExp("(^|["+(" \xa0(\uf000"+r)+"])(["+n+"]{1,"+t+"}) ","gim");return e.replace(r,"$1$2\xa0").replace(r,"$1$2\xa0")},settings:{lengthShortWord:2}},{name:"common/nbsp/beforeShortLastNumber",handler:function(e,t,n){var r=n.getData("quote"),n=n.getData("char"),a=n.toUpperCase(),n=new RegExp("(["+n+a+"]) (?=\\d{1,"+t.lengthLastNumber+"}[-+\u2212%'\""+r.right+")]?([.!?\u2026]( ["+a+"]|$)|$))","gm");return e.replace(n,"$1\xa0")},live:!1,settings:{lengthLastNumber:2}},{name:"common/nbsp/beforeShortLastWord",handler:function(e,t,n){var n=n.getData("char"),r=n.toUpperCase(),n=new RegExp("(["+n+"\\d]) (["+n+r+"]{1,"+t.lengthLastWord+"}[.!?\u2026])( ["+r+"]|$)","g");return e.replace(n,"$1\xa0$2$3")},settings:{lengthLastWord:3}},{name:"common/nbsp/dpi",handler:function(e){return e.replace(/(\d) ?(lpi|dpi)(?!\w)/,"$1\xa0$2")}},{name:"common/nbsp/nowrap",queue:"end",handler:function(e){return e.replace(/(<nowrap>)(.*?)(<\/nowrap>)/g,_).replace(/(<nobr>)(.*?)(<\/nobr>)/g,_)}},{name:"common/nbsp/replaceNbsp",queue:"utf",live:!1,handler:x,disabled:!0}]);q={name:"common/number/digitGrouping",index:"310",disabled:!0,handler:function(e,a){return e.replace(new RegExp("(^ ?|\\D |".concat(d,")(\\d{1,3}([ \xa0\u202f\u2009]\\d{3})+)(?! ?[\\d-])"),"gm"),function(e,t,n){return t+n.replace(/\s/g,a.space)}).replace(/(\d{5,}([.,]\d+)?)/g,function(e,t){var n=t.match(/[.,]/),t=n?t.split(n):[t],r=t[0],t=t[1],r=r.replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1"+a.space);return n?r+n+t:r})},settings:{space:"\u202f"}},E.addRules([q,{name:"common/number/fraction",handler:function(e){return e.replace(/(^|\D)1\/2(\D|$)/g,"$1\xbd$2").replace(/(^|\D)1\/4(\D|$)/g,"$1\xbc$2").replace(/(^|\D)3\/4(\D|$)/g,"$1\xbe$2")}},{name:"common/number/mathSigns",handler:function(e){return v(e,[[/!=/g,"\u2260"],[/<=/g,"\u2264"],[/(^|[^=])>=/g,"$1\u2265"],[/<=>/g,"\u21d4"],[/<</g,"\u226a"],[/>>/g,"\u226b"],[/~=/g,"\u2245"],[/(^|[^+])\+-/g,"$1\xb1"]])}},{name:"common/number/times",handler:function(e){return e.replace(/(\d)[ \u00A0]?[x\u0445][ \u00A0]?(\d)/g,"$1\xd7$2")}}]),E.addRules([{name:"common/other/delBOM",queue:"start",index:-1,handler:function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}},{name:"common/other/repeatWord",handler:function(e,t,n){var r=c["common/quote"],n=n.getData("char"),r="[;:,.?! \n"+r+"]",n=new RegExp("("+r+"|^)(["+n+"]{"+t.min+",}) \\2("+r+"|$)","gi");return e.replace(n,"$1$2$3")},settings:{min:2},disabled:!0}]),q={name:"common/punctuation/apostrophe",handler:function(e,t,n){n="(["+n.getData("char")+"])",n=new RegExp(n+"'"+n,"gi");return e.replace(n,"$1\u2019$2")}};function A(){this.bufferQuotes={left:"\uf005\uf006\uf007",right:"\uf008\uf009\uf0a0"},this.beforeLeft=" \n\t\xa0[(",this.afterRight=" \n\t\xa0!?.:;#*,\u2026)\\]"}A.prototype.process=function(e){var t,n,r=e.context.text;return this.count(r).total&&(t=e.settings,(n=e.settings.left[0]===e.settings.right[0])&&(e.settings=y(e.settings),e.settings.left=this.bufferQuotes.left.slice(0,e.settings.left.length),e.settings.right=this.bufferQuotes.right.slice(0,e.settings.right.length)),e.settings.spacing&&(r=this.removeSpacing(r,e.settings)),r=this.set(r,e),e.settings.spacing&&(r=this.setSpacing(r,e.settings)),e.settings.removeDuplicateQuotes&&(r=this.removeDuplicates(r,e.settings)),n)&&(r=this.returnOriginalQuotes(r,t,e.settings),e.settings=t),r},A.prototype.returnOriginalQuotes=function(e,t,n){for(var r={},a=0;a<n.left.length;a++)r[n.left[a]]=t.left[a],r[n.right[a]]=t.right[a];return e.replace(new RegExp("["+n.left+n.right+"]","g"),function(e){return r[e]})},A.prototype.count=function(e){var t={total:0};return e.replace(new RegExp("["+c["common/quote"]+"]","g"),function(e){return t[e]||(t[e]=0),t[e]++,t.total++,e}),t},A.prototype.removeDuplicates=function(e,t){var n=t.left[0],r=t.left[1]||n,t=t.right[0];return n!==r?e:e.replace(new RegExp(n+n,"g"),n).replace(new RegExp(t+t,"g"),t)},A.prototype.removeSpacing=function(e,t){for(var n=0,r=t.left.length;n<r;n++){var a=t.left[n],i=t.right[n];e=e.replace(new RegExp(a+"([ \u202f\xa0])","g"),a).replace(new RegExp("([ \u202f\xa0])"+i,"g"),i)}return e},A.prototype.setSpacing=function(e,t){for(var n=0,r=t.left.length;n<r;n++){var a=t.left[n],i=t.right[n];e=e.replace(new RegExp(a+"([^\u202f])","g"),a+"\u202f$1").replace(new RegExp("([^\u202f])"+i,"g"),"$1\u202f"+i)}return e},A.prototype.set=function(e,t){var n=c["common/quote"],r=t.settings.left[0],a=t.settings.left[1]||r,i=t.settings.right[0],s=new RegExp("(^|["+this.beforeLeft+"])(["+n+"]+)(?=[^\\s"+d+"])","gim"),n=new RegExp("([^\\s\uf000])(["+n+"]+)(?=["+this.afterRight+"]|$)","gim");return e=e.replace(s,function(e,t,n){return t+b(r,n.length)}).replace(n,function(e,t,n){return t+b(i,n.length)}),e=this.setAboveTags(e,t),e=r!==a?this.setInner(e,t.settings):e},A.prototype.setAboveTags=function(i,s){var o=this,u=s.settings.left[0],l=s.settings.right[0];return i.replace(new RegExp("(^|.)(["+c["common/quote"]+"])(.|$)","gm"),function(e,t,n,r,a){return t!==d&&r!==d?e:t===d&&r===d?'"'===n?t+o.getAboveTwoTags(i,a+1,s)+r:e:t===d?(n=-1<o.afterRight.indexOf(r),e=s.safeTags.getPrevTagInfo(s.context,i,a-1),n&&e&&"html"===e.group?t+(e.isClosing?l:u)+r:t+(!r||n?l:u)+r):(e=-1<o.beforeLeft.indexOf(t),n=s.safeTags.getNextTagInfo(s.context,i,a+1),e&&n&&"html"===n.group?t+(n.isClosing?l:u)+r:t+(!t||e?u:l)+r)})},A.prototype.getAboveTwoTags=function(e,t,n){var r=n.safeTags.getPrevTagInfo(n.context,e,t),a=n.safeTags.getNextTagInfo(n.context,e,t);if(r&&"html"===r.group){if(!r.isClosing)return n.settings.left[0];if(a&&a.isClosing&&r.isClosing)return n.settings.right[0]}return e[t]},A.prototype.setInner=function(e,t){for(var n=t.left[0],r=t.right[0],a=this.getMaxLevel(e,n,r,t.left.length),i=0,s="",o=0,u=e.length;o<u;o++){var l=e[o];l===n?(s+=t.left[a-1<i?a-1:i],a<++i&&(i=a)):l===r?(--i<0&&(i=0),s+=t.right[i]):('"'===l&&(i=0),s+=l)}return s},A.prototype.getMaxLevel=function(e,t,n,r){e=this.count(e);return e[t]===e[n]?r:Math.min(r,2)};var ee=new A,te={},T=(a.forEach(function(e){te[e]=y(c[e+"/quote"])}),{name:"common/punctuation/quote",handler:function(e,t,n){t=t[n.prefs.locale[0]];return t?ee.process({context:n,settings:t,safeTags:this.safeTags}):e},settings:te}),q=(E.addRules([q,{name:"common/punctuation/delDoublePunctuation",handler:function(e){return e.replace(/(^|[^,]),,(?!,)/g,"$1,").replace(/(^|[^:])::(?!:)/g,"$1:").replace(/(^|[^!?.])\.\.(?!\.)/g,"$1.").replace(/(^|[^;]);;(?!;)/g,"$1;").replace(/(^|[^?])\?\?(?!\?)/g,"$1?")}},{name:"common/punctuation/hellip",handler:function(e,t,n){return"ru"===n.prefs.locale[0]?e.replace(/(^|[^.])\.{3,4}(?=[^.]|$)/g,"$1\u2026"):e.replace(/(^|[^.])\.{3}(\.?)(?=[^.]|$)/g,"$1\u2026$2")}},T,{name:"common/punctuation/quoteLink",queue:"show-safe-tags-html",index:"+5",handler:function(e,t,n){var n=this.getSetting("common/punctuation/quote",n.prefs.locale[0]),r=s.getByUtf(n.left[0]),a=s.getByUtf(n.right[0]),i=(i=s.getByUtf(n.left[1]))?"|"+i:"",n=(n=s.getByUtf(n.right[1]))?"|"+n:"",r=new RegExp("(<[aA]\\s[^>]*?>)("+r+i+")([^]*?)("+a+n+")(</[aA]>)","g");return e.replace(r,"$2$1$3$5$4")}}]),{name:"common/space/beforeBracket",handler:function(e,t,n){n=n.getData("char"),n=new RegExp("(["+n+".!?,;\u2026)])\\(","gi");return e.replace(n,"$1 (")}}),T={name:"common/space/delRepeatN",index:"-1",handler:function(e,t){var t=t.maxConsecutiveLineBreaks,n=new RegExp("\n{".concat(t+1,",}"),"g"),t=b("\n",t);return e.replace(n,t)},settings:{maxConsecutiveLineBreaks:2}},B={name:"common/space/trimLeft",index:"-4",handler:String.prototype.trimLeft?function(e){return e.trimLeft()}:function(e){return e.replace(/^[\s\uFEFF\xA0]+/g,"")}},ne={name:"common/space/trimRight",index:"-3",live:!1,handler:String.prototype.trimRight?function(e){return e.trimRight()}:function(e){return e.replace(/[\s\uFEFF\xA0]+$/g,"")}},re=new RegExp('(\\D):([^)",:.?\\s\\/\\\\\uf000])',"g"),k={name:"common/space/afterColon",handler:function(e){return e.replace(re,"$1: $2")}},L={name:"common/space/afterComma",handler:function(e,t,n){n=n.getData("quote"),n="string"==typeof n?n:n.right;return e.replace(new RegExp('(.),([^)",:.?\\s\\/\\\\\uf000'+n+"])","g"),function(e,t,n){return f(t)&&f(n)?e:t+", "+n})}},ae=new RegExp("\\?([^).\u2026!;?\\s[\\])\uf000"+c["common/quote"]+"])","g"),D={name:"common/space/afterQuestionMark",handler:function(e){return e.replace(ae,"? $1")}},ie=new RegExp("!([^).\u2026!;?\\s[\\])\uf000"+c["common/quote"]+"])","g"),I={name:"common/space/afterExclamationMark",handler:function(e){return e.replace(ie,"! $1")}},se=new RegExp(";([^).\u2026!;?\\s[\\])\uf000"+c["common/quote"]+"])","g"),k=(E.addRules([k,L,D,I,{name:"common/space/afterSemicolon",handler:function(e){return e.replace(se,"; $1")}},q,{name:"common/space/bracket",handler:function(e){return e.replace(/(\() +/g,"(").replace(/ +\)/g,")")}},{name:"common/space/delBeforeDot",handler:function(e){return e.replace(/(^|[^!?:;,.\u2026]) (\.|\.\.\.)(\s|$)/g,"$1$2$3")}},{name:"common/space/delBeforePercent",handler:function(e){return e.replace(/(\d)( |\u00A0)(%|\u2030|\u2031)/g,"$1$3")}},{name:"common/space/delBeforePunctuation",handler:function(e){return e.replace(/(^|[^!?:;,.\u2026]) ([!?:;,])(?!\))/g,"$1$2")}},{name:"common/space/delBetweenExclamationMarks",handler:function(e){return e.replace(/([!?]) (?=[!?])/g,"$1")}},{name:"common/space/delLeadingBlanks",handler:function(e){return e.replace(/^[ \t]+/gm,"")},disabled:!0},T,{name:"common/space/delRepeatSpace",index:"-1",handler:function(e){return e.replace(/([^\n \t])[ \t]{2,}(?![\n \t])/g,"$1 ")}},{name:"common/space/delTrailingBlanks",index:"-3",handler:function(e){return e.replace(/[ \t]+\n/g,"\n")}},{name:"common/space/insertFinalNewline",queue:"end",handler:function(e){return"\n"===e[e.length-1]?e:e+"\n"},live:!1,disabled:!0},{name:"common/space/replaceTab",index:"-5",handler:function(e){return e.replace(/\t/g,"    ")}},{name:"common/space/squareBracket",handler:function(e){return e.replace(/(\[) +/g,"[").replace(/ +\]/g,"]")}},B,ne]),{name:"common/symbols/arrow",handler:function(e){return v(e,[[/(^|[^-])->(?!>)/g,"$1\u2192"],[/(^|[^<])<-(?!-)/g,"$1\u2190"]])}}),L=(E.addRules([k,{name:"common/symbols/cf",handler:function(e){var t=new RegExp('(^|[\\s(\\[+\u2248\xb1\u2212\u2014\u2013\\-])(\\d+(?:[.,]\\d+)?)[ \xa0\u2009]?(C|F)([\\W\\s.,:!?")\\]]|$)',"mg");return e.replace(t,"$1$2\u2009\xb0$3$4")}},{name:"common/symbols/copy",handler:function(e){return v(e,[[/\(r\)/gi,"\xae"],[/(copyright )?\((c|\u0441)\)/gi,"\xa9"],[/\(tm\)/gi,"\u2122"]])}}]),{name:"en-US/dash/main",index:"-5",handler:function(e){var t=c["common/dash"],n="[ ".concat("\xa0","]"),r="[ ".concat("\xa0","\n]"),n=new RegExp("".concat(n,"(").concat(t,")(").concat(r,")"),"g");return e.replace(n,"".concat("\xa0").concat("\u2014","$2"))}}),D=(E.addRules([L]),{name:"ru/dash/centuries",handler:function(e,t){var n=new RegExp("(X|I|V)[ |\xa0]?"+("("+c["common/dash"]+")")+"[ |\xa0]?(X|I|V)","g");return e.replace(n,"$1"+t.dash+"$3")},settings:{dash:"\u2013"}}),I=(E.addRules([D,{name:"ru/dash/daysMonth",handler:function(e,t){var n=new RegExp("(^|\\s)([123]?\\d)("+c["common/dash"]+")([123]?\\d)[ \xa0]("+c["ru/monthGenCase"]+")","g");return e.replace(n,"$1$2"+t.dash+"$4\xa0$5")},settings:{dash:"\u2013"}},{name:"ru/dash/de",handler:function(e){var t=new RegExp("([a-\u044f\u0451]+) \u0434\u0435"+c["ru/dashAfterDe"],"g");return e.replace(t,"$1-\u0434\u0435")},disabled:!0},{name:"ru/dash/decade",handler:function(e,t){var n=new RegExp("(^|\\s)(\\d{3}|\\d)0("+c["common/dash"]+")(\\d{3}|\\d)0(-\u0435[ \xa0])(?=\u0433\\.?[ \xa0]?\u0433|\u0433\u043e\u0434)","g");return e.replace(n,"$1$20"+t.dash+"$40$5")},settings:{dash:"\u2013"}},{name:"ru/dash/directSpeech",handler:function(e){var t=c["common/dash"],n=new RegExp('(["\xbb\u2018\u201c,])[ |\xa0]?('.concat(t,")[ |\xa0]"),"g"),r=new RegExp("(^|".concat(d,")(").concat(t,")( |\xa0)"),"gm"),t=new RegExp("([.\u2026?!])[ \xa0](".concat(t,")[ \xa0]"),"g");return e.replace(n,"$1\xa0\u2014 ").replace(r,"$1\u2014\xa0").replace(t,"$1 \u2014\xa0")}},{name:"ru/dash/izpod",handler:function(e){var t=new RegExp(c["ru/dashBefore"]+"(\u0418|\u0438)\u0437 \u043f\u043e\u0434"+c["ru/dashAfter"],"g");return e.replace(t,"$1$2\u0437-\u043f\u043e\u0434")}},{name:"ru/dash/izza",handler:function(e){var t=new RegExp(c["ru/dashBefore"]+"(\u0418|\u0438)\u0437 \u0437\u0430"+c["ru/dashAfter"],"g");return e.replace(t,"$1$2\u0437-\u0437\u0430")}},{name:"ru/dash/ka",handler:function(e){var t=new RegExp("([a-\u044f\u0451]+) \u043a\u0430(\u0441\u044c)?"+c["ru/dashAfter"],"g");return e.replace(t,"$1-\u043a\u0430$2")}},{name:"ru/dash/koe",handler:function(e){var t=new RegExp(c["ru/dashBefore"]+"([\u041a\u043a]\u043e[\u0435\u0439])\\s([\u0430-\u044f\u0451]{3,})"+c["ru/dashAfter"],"g");return e.replace(t,"$1$2-$3")}},{name:"ru/dash/main",index:"-5",handler:function(e){var t=new RegExp("([ \xa0])("+c["common/dash"]+")([ \xa0\\n])","g");return e.replace(t,"\xa0\u2014$3")}},{name:"ru/dash/month",handler:function(e,t){var n="("+c["ru/month"]+")",r="("+c["ru/monthPreCase"]+")",a=c["common/dash"],n=new RegExp(n+" ?("+a+") ?"+n,"gi"),a=new RegExp(r+" ?("+a+") ?"+r,"gi"),r="$1"+t.dash+"$3";return e.replace(n,r).replace(a,r)},settings:{dash:"\u2013"}},{name:"ru/dash/surname",handler:function(e){var t=new RegExp("([\u0410-\u042f\u0401][\u0430-\u044f\u0451]+)\\s-([\u0430-\u044f\u0451]{1,3})(?![^\u0430-\u044f\u0451]|$)","g");return e.replace(t,"$1\xa0\u2014$2")}},{name:"ru/dash/taki",handler:function(e){var t=new RegExp("(\u0432\u0435\u0440\u043d\u043e|\u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e|\u043e\u043f\u044f\u0442\u044c|\u043f\u0440\u044f\u043c\u043e|\u0442\u0430\u043a|\u0432\u0441[\u0435\u0451]|\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e|\u043d\u0435\u0443\u0436\u0435\u043b\u0438)\\s(\u0442\u0430\u043a\u0438)"+c["ru/dashAfter"],"g");return e.replace(t,"$1-$2")}},{name:"ru/dash/time",handler:function(e,t){var n=new RegExp(c["ru/dashBefore"]+"(\\d?\\d:[0-5]\\d)"+c["common/dash"]+"(\\d?\\d:[0-5]\\d)"+c["ru/dashAfter"],"g");return e.replace(n,"$1$2"+t.dash+"$3")},settings:{dash:"\u2013"}},{name:"ru/dash/to",handler:function(e){var t=new RegExp("(^|[^\u0410-\u042f\u0401\u0430-\u044f\u0451\\w])([\u041e\u043e]\u0442\u043a\u0443\u0434\u0430|[\u041a\u043a]\u0443\u0434\u0430|[\u0413\u0433]\u0434\u0435|[\u041a\u043a]\u043e\u0433\u0434\u0430|[\u0417\u0437]\u0430\u0447\u0435\u043c|[\u041f\u043f]\u043e\u0447\u0435\u043c\u0443|[\u041a\u043a]\u0430\u043a|[\u041a\u043a]\u0430\u043a\u043e[\u0435\u0439\u043c]|[\u041a\u043a]\u0430\u043a\u0430\u044f|[\u041a\u043a]\u0430\u043a\u0438[\u0435\u043c\u0445]|[\u041a\u043a]\u0430\u043a\u0438\u043c\u0438|[\u041a\u043a]\u0430\u043a\u0443\u044e|[\u0427\u0447]\u0442\u043e|[\u0427\u0447]\u0435\u0433\u043e|[\u0427\u0447]\u0435[\u0439\u043c]|[\u0427\u0447]\u044c\u0438\u043c?|[\u041a\u043a]\u0442\u043e|[\u041a\u043a]\u043e\u0433\u043e|[\u041a\u043a]\u043e\u043c\u0443|[\u041a\u043a]\u0435\u043c)( | -|- )(\u0442\u043e|\u043b\u0438\u0431\u043e|\u043d\u0438\u0431\u0443\u0434\u044c)"+c["ru/dashAfter"],"g");return e.replace(t,function(e,t,n,r,a){r=n+r+a;return"\u043a\u0430\u043a \u0442\u043e"===r||"\u041a\u0430\u043a \u0442\u043e"===r?e:t+n+"-"+a})}},{name:"ru/dash/kakto",handler:function(e){var t=new RegExp("(^|[^\u0410-\u042f\u0401\u0430-\u044f\u0451\\w])([\u041a\u043a]\u0430\u043a) \u0442\u043e"+c["ru/dashAfter"],"g");return e.replace(t,"$1$2-\u0442\u043e")}},{name:"ru/dash/weekday",handler:function(e,t){var n="("+c["ru/weekday"]+")",n=new RegExp(n+" ?("+c["common/dash"]+") ?"+n,"gi");return e.replace(n,"$1"+t.dash+"$3")},settings:{dash:"\u2013"}},{name:"ru/dash/years",handler:function(e,i){var t=new RegExp("(\\D|^)(\\d{4})[ \xa0]?("+c["common/dash"]+")[ \xa0]?(\\d{4})(?=[ \xa0]?\u0433)","g");return e.replace(t,function(e,t,n,r,a){return parseInt(n,10)<parseInt(a,10)?t+n+i.dash+a:e})},settings:{dash:"\u2013"}}]),"(-|\\.|\\/)"),q="(-|\\/)",oe=new RegExp("(^|\\D)(\\d{4})"+I+"(\\d{2})"+I+"(\\d{2})(\\D|$)","gi"),ue=new RegExp("(^|\\D)(\\d{2})"+q+"(\\d{2})"+q+"(\\d{4})(\\D|$)","gi"),T=(E.addRules([{name:"ru/date/fromISO",handler:function(e){return e.replace(oe,"$1$6.$4.$2$7").replace(ue,"$1$4.$2.$6$7")}},{name:"ru/date/weekday",handler:function(e){var t=new RegExp("(\\d)( |\xa0)("+c["ru/monthGenCase"]+"),( |\xa0)("+c["ru/weekday"]+")","gi");return e.replace(t,function(e,t,n,r,a,i){return t+n+r.toLowerCase()+","+a+i.toLowerCase()})}}]),{name:"ru/money/currency",handler:function(e){var t="([$\u20ac\xa5\u04b0\xa3\u20a4\u20bd])",n=new RegExp("(^|[\\D]{2})"+t+" ?("+h+"([ \xa0\u2009\u202f]\\d{3})*)([ \xa0\u2009\u202f]?(\u0442\u044b\u0441\\.|\u043c\u043b\u043d|\u043c\u043b\u0440\u0434|\u0442\u0440\u043b\u043d))?","gm"),t=new RegExp("(^|[\\D])("+h+") ?"+t,"gm");return e.replace(n,function(e,t,n,r,a,i,s,o){return t+r+(o?"\xa0"+o:"")+"\xa0"+n}).replace(t,"$1$2\xa0$4")},disabled:!0});function le(e,t,n,r){return"\u0434\u0434"===n&&"\u043c\u043c"===r||-1<["\u0440\u0444","\u0440\u0443","\u0440\u0443\u0441","\u043e\u0440\u0433","\u0443\u043a\u0440","\u0431\u0433","\u0441\u0440\u0431"].indexOf(r)?e:t+n+".\xa0"+r+"."}E.addRules([T,{name:"ru/money/ruble",handler:function(e){var t="$1\xa0\u20bd",n="(\\d+)( |\xa0)?(\u0440|\u0440\u0443\u0431)\\.",r=new RegExp("^"+n+"$","g"),a=new RegExp(n+"(?=[!?,:;])","g"),n=new RegExp(n+"(?=\\s+[A-\u042f\u0401])","g");return e.replace(r,t).replace(a,t).replace(n,t+".")},disabled:!0}]);var ce={2:"\xb2","\xb2":"\xb2",3:"\xb3","\xb3":"\xb3","":""};E.addRules([{name:"ru/nbsp/abbr",handler:function(e){var t=new RegExp("(^|\\s|".concat(d,")([\u0430-\u044f\u0451]{1,3})\\. ?([\u0430-\u044f\u0451]{1,3})\\."),"g");return e.replace(t,le).replace(t,le)}},{name:"ru/nbsp/addr",handler:function(e){return e.replace(/(\s|^)(\u0434\u043e\u043c|\u0434\.|\u043a\u0432\.|\u043f\u043e\u0434\.|\u043f-\u0434) *(\d+)/gi,"$1$2\xa0$3").replace(/(\s|^)(\u043c\u043a\u0440-\u043d|\u043c\u043a-\u043d|\u043c\u043a\u0440\.|\u043c\u043a\u0440\u043d)\s/gi,"$1$2\xa0").replace(/(\s|^)(\u044d\u0442\.) *(-?\d+)/gi,"$1$2\xa0$3").replace(/(\s|^)(\d+) +\u044d\u0442\u0430\u0436([^\u0430-\u044f\u0451]|$)/gi,"$1$2\xa0\u044d\u0442\u0430\u0436$3").replace(/(\s|^)\u043b\u0438\u0442\u0435\u0440\s([\u0410-\u042f]|$)/gi,"$1\u043b\u0438\u0442\u0435\u0440\xa0$2").replace(/(\s|^)(\u043e\u0431\u043b|\u043a\u0440|\u0441\u0442|\u043f\u043e\u0441|\u0441|\u0434|\u0443\u043b|\u043f\u0435\u0440|\u043f\u0440|\u043f\u0440-\u0442|\u043f\u0440\u043e\u0441\u043f|\u043f\u043b|\u0431\u0443\u043b|\u0431-\u0440|\u043d\u0430\u0431|\u0448|\u0442\u0443\u043f|\u043e\u0444|\u043a\u043e\u043c\u043d?|\u0443\u0447|\u0432\u043b|\u0432\u043b\u0430\u0434|\u0441\u0442\u0440|\u043a\u043e\u0440)\. *([\u0430-\u044f\u0451a-z\d]+)/gi,"$1$2.\xa0$3").replace(/(\D[ \u00A0]|^)\u0433\. ?([\u0410-\u042f\u0401])/gm,"$1\u0433.\xa0$2")}},{name:"ru/nbsp/afterNumberSign",handler:function(e){return e.replace(/\u2116[ \u00A0\u2009]?(\d|\u043f\/\u043f)/g,"\u2116\u202f$1")}},{name:"ru/nbsp/beforeParticle",index:"+5",handler:function(e){var t="(\u043b\u0438|\u043b\u044c|\u0436\u0435|\u0436|\u0431\u044b|\u0431)",n=new RegExp("([\u0410-\u042f\u0401\u0430-\u044f\u0451]) "+t+'(?=[,;:?!"\u2018\u201c\xbb])',"g"),t=new RegExp("([\u0410-\u042f\u0401\u0430-\u044f\u0451])[ \xa0]"+t+"[ \xa0]","g");return e.replace(n,"$1\xa0$2").replace(t,"$1\xa0$2 ")}},{name:"ru/nbsp/centuries",handler:function(e){var t=c["common/dash"],n="(^|\\s)([VIX]+)",r='(?=[,;:?!"\u2018\u201c\xbb]|$)',a=new RegExp(n+"[ \xa0]?\u0432\\.?"+r,"gm"),n=new RegExp(n+"("+t+")([VIX]+)[ \xa0]?\u0432\\.?([ \xa0]?\u0432\\.?)?"+r,"gm");return e.replace(a,"$1$2\xa0\u0432.").replace(n,"$1$2$3$4\xa0\u0432\u0432.")}},{name:"ru/nbsp/dayMonth",handler:function(e){var t=new RegExp("(\\d{1,2}) ("+c["ru/shortMonth"]+")","gi");return e.replace(t,"$1\xa0$2")}},{name:"ru/nbsp/initials",handler:function(e){var t=new RegExp("(^|[\xa0\u202f "+c["ru/quote"].left+d+'"])([\u0410-\u042f\u0401])\\.[\xa0\u202f ]?([\u0410-\u042f\u0401])\\.[\xa0\u202f ]?([\u0410-\u042f\u0401][\u0430-\u044f\u0451]+)',"gm");return e.replace(t,"$1$2.\xa0$3.\xa0$4")}},{name:"ru/nbsp/m",index:"+5",handler:function(e){var t=new RegExp("(^|[\\s,.\\(\uf000])(\\d+)[ \xa0]?(\u043c\u043c?|\u0441\u043c|\u043a\u043c|\u0434\u043c|\u0433\u043c|mm?|km|cm|dm)([23\xb2\xb3])?([\\s\\).!?,;\uf000]|$)","gm");return e.replace(t,function(e,t,n,r,a,i){return t+n+"\xa0"+r+ce[a||""]+("\xa0"===i?" ":i)})}},{name:"ru/nbsp/mln",handler:function(e){return e.replace(/(\d) ?(\u0442\u044b\u0441|\u043c\u043b\u043d|\u043c\u043b\u0440\u0434|\u0442\u0440\u043b\u043d)(\.|\s|$)/gi,"$1\xa0$2$3")}},{name:"ru/nbsp/ooo",handler:function(e){return e.replace(/(^|[^a-\u044f\u0451A-\u042f\u0401])(\u041e\u041e\u041e|\u041e\u0410\u041e|\u0417\u0410\u041e|\u041d\u0418\u0418|\u041f\u0411\u041e\u042e\u041b) /g,"$1$2\xa0")}},{name:"ru/nbsp/page",handler:function(e){var t=new RegExp("(^|[)\\s\uf000])(\u0441\u0442\u0440|\u0433\u043b|\u0440\u0438\u0441|\u0438\u043b\u043b?|\u0441\u0442|\u043f|c)\\. *(\\d+)([\\s.,?!;:]|$)","gim");return e.replace(t,"$1$2.\xa0$3$4")}},{name:"ru/nbsp/ps",handler:function(e){var t=new RegExp("(^|\\s|".concat(d,")[p\u0437]\\.[ \xa0]?([p\u0437]\\.[ \xa0]?)?[s\u044b]\\.:? "),"gim");return e.replace(t,function(e,t,n){return t+(n?"P.\xa0P.\xa0S. ":"P.\xa0S. ")})}},{name:"ru/nbsp/rubleKopek",handler:function(e){return e.replace(/(\d) ?(?=(\u0440\u0443\u0431|\u043a\u043e\u043f)\.)/g,"$1\xa0")}},{name:"ru/nbsp/see",handler:function(e){var t=new RegExp("(^|\\s|".concat(d,"|\\()(\u0441\u043c|\u0438\u043c)\\.[ \xa0]?([\u0430-\u044f\u04510-9a-z]+)([\\s.,?!]|$)"),"gi");return e.replace(t,function(e,t,n,r,a){return("\xa0"===t?" ":t)+n+".\xa0"+r+a})}},{name:"ru/nbsp/year",handler:function(e){return e.replace(/(^|\D)(\d{4}) ?\u0433([ ,;.\n]|$)/g,"$1$2\xa0\u0433$3")}},{name:"ru/nbsp/years",index:"+5",handler:function(e){var t=new RegExp("(^|\\D)(\\d{4})("+c["common/dash"]+')(\\d{4})[ \xa0]?\u0433\\.?([ \xa0]?\u0433\\.)?(?=[,;:?!"\u2018\u201c\xbb\\s]|$)',"gm");return e.replace(t,"$1$2$3$4\xa0\u0433\u0433.")}}]);function S(e,t){t=new RegExp('<span class="('+t.join("|")+')">([^]*?)</span>',"g");return e.replace(t,"$2")}function z(e,t){return e.replace(/<title>[^]*?<\/title>/i,function(e){return S(e,t)})}E.addRules([{name:"ru/number/comma",handler:function(e){return e.replace(/(^|\s)(\d+)\.(\d+[\u00A0\u2009\u202F ]*?[%\u2030\xb0\xd7x])/gim,"$1$2,$3")}},{name:"ru/number/ordinals",handler:function(e,t,n){n=n.getData("char"),n=new RegExp("(\\d[%\u2030]?)-(\u044b\u0439|\u043e\u0439|\u0430\u044f|\u043e\u0435|\u044b\u0435|\u044b\u043c|\u043e\u043c|\u044b\u0445|\u043e\u0433\u043e|\u043e\u043c\u0443|\u044b\u043c\u0438)(?!["+n+"])","g");return e.replace(n,function(e,t,n){return t+"-"+{"\u043e\u0439":"\u0439","\u044b\u0439":"\u0439","\u0430\u044f":"\u044f","\u043e\u0435":"\u0435","\u044b\u0435":"\u0435","\u044b\u043c":"\u043c","\u043e\u043c":"\u043c","\u044b\u0445":"\u0445","\u043e\u0433\u043e":"\u0433\u043e","\u043e\u043c\u0443":"\u043c\u0443","\u044b\u043c\u0438":"\u043c\u0438"}[n]})}}]);var pe=["typograf-oa-lbracket","typograf-oa-n-lbracket","typograf-oa-sp-lbracket"],B="ru/optalign/bracket",ne={name:B,queue:"start",handler:function(e){return S(e,pe)},htmlAttrs:!1},k={name:B,queue:"end",handler:function(e){return z(e,pe)},htmlAttrs:!1},ge=["typograf-oa-comma","typograf-oa-comma-sp"],L="ru/optalign/comma",D={name:L,queue:"start",handler:function(e){return S(e,ge)},htmlAttrs:!1},I={name:L,queue:"end",handler:function(e){return z(e,ge)},htmlAttrs:!1},he=["typograf-oa-lquote","typograf-oa-n-lquote","typograf-oa-sp-lquote"],q="ru/optalign/quote",T={name:q,queue:"start",handler:function(e){return S(e,he)},htmlAttrs:!1},fe={name:q,queue:"end",handler:function(e){return z(e,he)},htmlAttrs:!1},C=(E.addRules([{name:B,handler:function(e){return e.replace(/( |\u00A0)\(/g,'<span class="typograf-oa-sp-lbracket">$1</span><span class="typograf-oa-lbracket">(</span>').replace(/^\(/gm,'<span class="typograf-oa-n-lbracket">(</span>')},disabled:!0,htmlAttrs:!1},{name:L,handler:function(e,t,n){n=n.getData("char"),n=new RegExp("(["+n+"\\d\u0301]+), ","gi");return e.replace(n,'$1<span class="typograf-oa-comma">,</span><span class="typograf-oa-comma-sp"> </span>')},disabled:!0,htmlAttrs:!1},{name:q,handler:function(e){var t=this.getSetting("common/punctuation/quote","ru"),t="(["+t.left[0]+(t.left[1]||"")+"])",n=new RegExp("(^|\n\n|\uf000)("+t+")","g"),t=new RegExp("([^\n\uf000])([ \xa0\n])("+t+")","gi");return e.replace(n,'$1<span class="typograf-oa-n-lquote">$2</span>').replace(t,'$1<span class="typograf-oa-sp-lquote">$2</span><span class="typograf-oa-lquote">$3</span>')},disabled:!0,htmlAttrs:!1}]),E.addInnerRules([ne,k,D,I,T,fe]),[]);function de(e){var t,n,r=e[0],a="";if(e.length<8)return me(e);if(10<e.length)if("+"===r){if("7"!==e[1])return e;t=!0,e=e.substr(2)}else"8"===r&&(n=!0,e=e.substr(1));for(var i=8;2<=i;i--){var s=+e.substr(0,i);if(-1<C.indexOf(s)){a=e.substr(0,i),e=e.substr(i);break}}return a||(a=e.substr(0,5),e=e.substr(5)),(t?"+7\xa0":"")+(n?"8\xa0":"")+function(e){var t=+e,n=e.length,r=[e],a=!1;if(3<n)switch(n){case 4:r=[e.substr(0,2),e.substr(2,2)];break;case 5:r=[e.substr(0,3),e.substr(3,3)];break;case 6:r=[e.substr(0,2),e.substr(2,2),e.substr(4,2)]}else a=900<t&&t<=999||495==t||499==t;n=r.join("-");return a?n:"("+n+")"}(a)+"\xa0"+me(e)}function me(e){var t="";return e.length%2&&(t=e[0],t+=e.length<=5?"-":"",e=e.substr(1,e.length-1)),t+e.split(/(?=(?:\d\d)+$)/).join("-")}function $e(e){return e.replace(/[^\d+]/g,"")}[4162,416332,8512,851111,4722,4725,391379,8442,4732,4152,4154451,4154459,4154455,41544513,8142,8332,8612,8622,3525,812,8342,8152,3812,4862,3422,342633,8112,9142,8452,3432,3434,3435,4812,8432,8439,3822,4872,3412,3511,3512,3022,4112,4852,4855,3852,3854,8182,818,90,3472,4741,4764,4832,4922,8172,8202,8722,4932,493,3952,3951,3953,411533,4842,3842,3843,8212,4942,"39131-39179","39190-39199",391,4712,4742,8362,495,499,4966,4964,4967,498,8312,8313,3832,383612,3532,8412,4232,423370,423630,8632,8642,8482,4242,8672,8652,4752,4822,482502,4826300,3452,8422,4212,3466,3462,8712,8352,"901-934","936-939","950-953",958,"960-969","977-989","991-997",999].forEach(function(e){if("string"==typeof e)for(var t=e.split("-"),n=+t[0];n<=+t[1];n++)C.push(n);else C.push(e)});E.addRules([{name:"ru/other/accent",handler:function(e){return e.replace(/([\u0430-\u044f\u0451])([\u0410\u0415\u0401\u0418\u041e\u0423\u042b\u042d\u042e\u042f])([^\u0410-\u042f\u0401\w]|$)/g,function(e,t,n,r){return t+n.toLowerCase()+"\u0301"+r})},disabled:!0},{name:"ru/other/phone-number",live:!1,handler:function(e){var t=new RegExp("(^|,| |\uf000)(\\+7[\\d\\(\\) \xa0-]{10,18})(?=,|;|\uf000|$)","gm");return e.replace(t,function(e,t,n){n=$e(n);return 12===n.length?t+de(n):e}).replace(/(^|[^\u0430-\u044f\u0451])([\u260e\u260f\u2706\ud83d\udce0\ud83d\udcde\ud83d\udcf1]|\u0442\.|\u0442\u0435\u043b\.|\u0444\.|\u043c\u043e\u0431\.|\u0444\u0430\u043a\u0441|\u0441\u043e\u0442\u043e\u0432\u044b\u0439|\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439|\u0442\u0435\u043b\u0435\u0444\u043e\u043d)(:?\s*?)([+\d(][\d \u00A0\-()]{3,}\d)/gi,function(e,t,n,r,a){a=$e(a);return 5<=a.length?t+n+r+de(a):e})}}]);var B={name:"ru/punctuation/ano",handler:function(e){var t=new RegExp("([^\xab\u201e[(!?,:;\\-\u2012\u2013\u2014\\s\uf000])(\\s+)(\u0430|\u043d\u043e)(?= |\xa0|\\n)","g");return e.replace(t,"$1,$2$3")}},be=(E.addRules([B,{name:"ru/punctuation/exclamation",handler:function(e){return e.replace(/(^|[^!])!{2}($|[^!])/gm,"$1!$2").replace(/(^|[^!])!{4}($|[^!])/gm,"$1!!!$2")},live:!1},{name:"ru/punctuation/exclamationQuestion",index:"+5",handler:function(e){var t=new RegExp("(^|[^!])!\\?([^?]|$)","g");return e.replace(t,"$1?!$2")}},{name:"ru/punctuation/hellipQuestion",handler:function(e){return e.replace(/(^|[^.])(\.\.\.|\u2026),/g,"$1\u2026").replace(/(!|\?)(\.\.\.|\u2026)(?=[^.]|$)/g,"$1..")}}]),E.addRules([{name:"ru/space/afterHellip",handler:function(e){return e.replace(/([\u0430-\u044f\u0451])(\.\.\.|\u2026)([\u0410-\u042f\u0401])/g,"$1$2 $3").replace(/([?!]\.\.)([\u0430-\u044f\u0451a-z])/gi,"$1 $2")}},{name:"ru/space/year",handler:function(e,t,n){n=n.getData("char"),n=new RegExp("(^| |\xa0)(\\d{3,4})(\u0433\u043e\u0434([\u0430\u0443\u0435]|\u043e\u043c)?)([^"+n+"]|$)","g");return e.replace(n,"$1$2 $3$5")}}]),E.addRules([{name:"ru/symbols/NN",handler:function(e){return e.replace(/\u2116\u2116/g,"\u2116")}}]),{A:"\u0410",a:"\u0430",B:"\u0412",E:"\u0415",e:"\u0435",K:"\u041a",M:"\u041c",H:"\u041d",O:"\u041e",o:"\u043e",P:"\u0420",p:"\u0440",C:"\u0421",c:"\u0441",T:"\u0422",y:"\u0443",X:"\u0425",x:"\u0445"}),xe=Object.keys(be).join("");return E.addRules([{name:"ru/typo/switchingKeyboardLayout",handler:function(e){var t=new RegExp("(["+xe+"]{1,3})(?=[\u0410-\u042f\u0401\u0430-\u044f\u0451]+?)","g");return e.replace(t,function(e,t){for(var n="",r=0;r<t.length;r++)n+=be[t[r]];return n})}}]),E});

/* ------------------------*/
/* ------------------------*/
/*    noUiSlider.min.js    */
/* ------------------------*/
/* ------------------------*/

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).noUiSlider={})}(this,function(ot){"use strict";function n(t){return"object"==typeof t&&"function"==typeof t.to}function st(t){t.parentElement.removeChild(t)}function at(t){return null!=t}function lt(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function ut(t,e,r){0<r&&(ft(t,e),setTimeout(function(){dt(t,e)},r))}function ct(t){return Math.max(Math.min(t,100),0)}function pt(t){return Array.isArray(t)?t:[t]}function e(t){t=(t=String(t)).split(".");return 1<t.length?t[1].length:0}function ft(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function dt(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function ht(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:(r?t.documentElement:t.body).scrollLeft,y:e?window.pageYOffset:(r?t.documentElement:t.body).scrollTop}}function s(t,e){return 100/(e-t)}function a(t,e,r){return 100*e/(t[r+1]-t[r])}function l(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=l(r,t),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return t+(r=r,a(o=[i,o],o[0]<0?r+Math.abs(o[0]):r-o[0],0)/s(t,n))}function o(t,e,r,n){if(100===n)return n;var i=l(n,t),o=t[i-1],s=t[i];return r?(s-o)/2<n-o?s:o:e[i-1]?t[i-1]+(t=n-t[i-1],i=e[i-1],Math.round(t/i)*i):n}ot.PipsMode=void 0,(H=ot.PipsMode||(ot.PipsMode={})).Range="range",H.Steps="steps",H.Positions="positions",H.Count="count",H.Values="values",ot.PipsType=void 0,(H=ot.PipsType||(ot.PipsType={}))[H.None=-1]="None",H[H.NoValue=0]="NoValue",H[H.LargeValue=1]="LargeValue",H[H.SmallValue=2]="SmallValue";var u=(t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=a(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++;for(var i,o=1,s=(e=null===e?[]:e)[n],a=0,l=0,u=0,c=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);0<s;)i=this.xPct[n+1+u]-this.xPct[n+u],100<e[n+u]*o+100-100*c?(a=i*c,o=(s-100*c)/e[n+u],c=1):(a=e[n+u]*i/100*o,o=0),r?(l-=a,1<=this.xPct.length+u&&u--):(l+=a,1<=this.xPct.length-u&&u++),s=e[n+u]*o;return t+l},t.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n=l(r,e),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return(r-t)*s(t,n)*((o=[i,o])[1]-o[0])/100+o[0]}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=o(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var n=l(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){t=l(t,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){t="min"===t?0:"max"===t?100:parseFloat(t);if(!i(t)||!i(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(t),this.xVal.push(e[0]);e=Number(e[1]);t?this.xSteps.push(!isNaN(e)&&e):isNaN(e)||(this.xSteps[0]=e),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){e&&(this.xVal[t]!==this.xVal[t+1]?(this.xSteps[t]=a([this.xVal[t],this.xVal[t+1]],e,0)/s(this.xPct[t],this.xPct[t+1]),e=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],e=Math.ceil(Number(e.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*e,this.xHighestCompleteStep[t]=e):this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t])},t);function t(e,t,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=t;var i=[];for(Object.keys(e).forEach(function(t){i.push([pt(e[t]),t])}),i.sort(function(t,e){return t[0][0]-e[0][0]}),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}var c={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},p={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},mt={tooltips:".__tooltips",aria:".__aria"};function f(t,e){if(!i(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function d(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function h(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function m(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function g(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new u(e,t.snap||!1,t.singleStep)}function v(t,e){if(e=pt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function b(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function S(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function x(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function y(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function w(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function E(t,e){if(!i(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function P(t,e){if(!i(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function C(t,e){var r;if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],e=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-e))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function N(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function V(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),s=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained"),l=0<=e.indexOf("drag-all"),e=0<=e.indexOf("smooth-steps");if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");E(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:l,smoothSteps:e,fixed:i,snap:o,hover:s,unconstrained:a}}function A(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=pt(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function k(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function M(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function U(t,e){if(!n(r=e)||"function"!=typeof r.from)throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var r;t.format=e}function D(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function O(t,e){t.documentElement=e}function L(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function T(e,r){if("object"!=typeof r)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(r).forEach(function(t){e.cssClasses[t]=e.cssPrefix+r[t]})):e.cssClasses=r}function gt(e){var r={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:c,format:c},n={step:{r:!1,t:f},keyboardPageMultiplier:{r:!1,t:d},keyboardMultiplier:{r:!1,t:h},keyboardDefaultStep:{r:!1,t:m},start:{r:!0,t:v},connect:{r:!0,t:y},direction:{r:!0,t:N},snap:{r:!1,t:b},animate:{r:!1,t:S},animationDuration:{r:!1,t:x},range:{r:!0,t:g},orientation:{r:!1,t:w},margin:{r:!1,t:E},limit:{r:!1,t:P},padding:{r:!1,t:C},behaviour:{r:!0,t:V},ariaFormat:{r:!1,t:M},format:{r:!1,t:U},tooltips:{r:!1,t:A},keyboardSupport:{r:!0,t:D},documentElement:{r:!1,t:O},cssPrefix:{r:!0,t:L},cssClasses:{r:!0,t:T},handleAttributes:{r:!1,t:k}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:p,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(at(e[t])||void 0!==i[t])n[t].t(r,(at(e[t])?e:i)[t]);else if(n[t].r)throw new Error("noUiSlider: '"+t+"' is required.")}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,t=void 0!==t.style.transform;r.transformRule=t?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function j(t,f,o){var i,l,a,n,s,u,c=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},p=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),d=t,S=f.spectrum,h=[],m=[],g=[],v=0,b={},x=t.ownerDocument,y=f.documentElement||x.documentElement,w=x.body,E="rtl"===x.dir||1===f.ort?0:100;function P(t,e){var r=x.createElement("div");return e&&ft(r,e),t.appendChild(r),r}function C(t,e){var r,t=P(t,f.cssClasses.origin),n=P(t,f.cssClasses.handle);return P(n,f.cssClasses.touchArea),n.setAttribute("data-handle",String(e)),f.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(V()||A(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];f.dir&&!f.ort?r.reverse():f.ort&&!f.dir&&(n.reverse(),i.reverse());var s=t.key.replace("Arrow",""),a=s===i[0],l=s===i[1],i=s===n[0]||s===r[0]||a,n=s===n[1]||s===r[1]||l,r=s===o[0],o=s===o[1];if(!(i||n||r||o))return!0;if(t.preventDefault(),n||i){var u=i?0:1,u=nt(e)[u];if(null===u)return!1;!1===u&&(u=S.getDefaultStep(m[e],i,f.keyboardDefaultStep)),u*=l||a?f.keyboardPageMultiplier:f.keyboardMultiplier,u=Math.max(u,1e-7),u*=i?-1:1,u=h[e]+u}else u=o?f.spectrum.xVal[f.spectrum.xVal.length-1]:f.spectrum.xVal[0];return Q(e,S.toStepping(u),!0,!0),I("slide",e),I("update",e),I("change",e),I("set",e),!1}(t,e)})),void 0!==f.handleAttributes&&(r=f.handleAttributes[e],Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",f.ort?"vertical":"horizontal"),0===e?ft(n,f.cssClasses.handleLower):e===f.handles-1&&ft(n,f.cssClasses.handleUpper),t.handle=n,t}function N(t,e){return!!e&&P(t,f.cssClasses.connect)}function e(t,e){return!(!f.tooltips||!f.tooltips[e])&&P(t.firstChild,f.cssClasses.tooltip)}function V(){return d.hasAttribute("disabled")}function A(t){return l[t].hasAttribute("disabled")}function k(){s&&(Y("update"+mt.tooltips),s.forEach(function(t){t&&st(t)}),s=null)}function M(){k(),s=l.map(e),X("update"+mt.tooltips,function(t,e,r){s&&f.tooltips&&!1!==s[e]&&(t=t[e],!0!==f.tooltips[e]&&(t=f.tooltips[e].to(r[e])),s[e].innerHTML=t)})}function U(t,e){return t.map(function(t){return S.fromStepping(e?S.getStep(t):t)})}function D(d){var h=function(t){if(t.mode===ot.PipsMode.Range||t.mode===ot.PipsMode.Steps)return S.xVal;if(t.mode!==ot.PipsMode.Count)return t.mode===ot.PipsMode.Positions?U(t.values,t.stepped):t.mode===ot.PipsMode.Values?t.stepped?t.values.map(function(t){return S.fromStepping(S.getStep(S.toStepping(t)))}):t.values:[];if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var e=t.values-1,r=100/e,n=[];e--;)n[e]=e*r;return n.push(100),U(n,t.stepped)}(d),m={},t=S.xVal[0],e=S.xVal[S.xVal.length-1],g=!1,v=!1,b=0;return(h=h.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==t&&(h.unshift(t),g=!0),h[h.length-1]!==e&&(h.push(e),v=!0),h.forEach(function(t,e){var r,n,i,o,s,a,l,u,t=t,c=h[e+1],p=d.mode===ot.PipsMode.Steps,f=(f=p?S.xNumSteps[e]:f)||c-t;for(void 0===c&&(c=t),f=Math.max(f,1e-7),r=t;r<=c;r=Number((r+f).toFixed(7))){for(a=(o=(i=S.toStepping(r))-b)/(d.density||1),u=o/(l=Math.round(a)),n=1;n<=l;n+=1)m[(s=b+n*u).toFixed(5)]=[S.fromStepping(s),0];a=-1<h.indexOf(r)?ot.PipsType.LargeValue:p?ot.PipsType.SmallValue:ot.PipsType.NoValue,!e&&g&&r!==c&&(a=0),r===c&&v||(m[i.toFixed(5)]=[r,a]),b=i}}),m}function O(i,o,s){var t,a=x.createElement("div"),n=((t={})[ot.PipsType.None]="",t[ot.PipsType.NoValue]=f.cssClasses.valueNormal,t[ot.PipsType.LargeValue]=f.cssClasses.valueLarge,t[ot.PipsType.SmallValue]=f.cssClasses.valueSub,t),l=((t={})[ot.PipsType.None]="",t[ot.PipsType.NoValue]=f.cssClasses.markerNormal,t[ot.PipsType.LargeValue]=f.cssClasses.markerLarge,t[ot.PipsType.SmallValue]=f.cssClasses.markerSub,t),u=[f.cssClasses.valueHorizontal,f.cssClasses.valueVertical],c=[f.cssClasses.markerHorizontal,f.cssClasses.markerVertical];function p(t,e){var r=e===f.cssClasses.value;return e+" "+(r?u:c)[f.ort]+" "+(r?n:l)[t]}return ft(a,f.cssClasses.pips),ft(a,0===f.ort?f.cssClasses.pipsHorizontal:f.cssClasses.pipsVertical),Object.keys(i).forEach(function(t){var e,r,n;r=i[e=t][0],n=i[t][1],(n=o?o(r,n):n)!==ot.PipsType.None&&((t=P(a,!1)).className=p(n,f.cssClasses.marker),t.style[f.style]=e+"%",n>ot.PipsType.NoValue&&((t=P(a,!1)).className=p(n,f.cssClasses.value),t.setAttribute("data-value",String(r)),t.style[f.style]=e+"%",t.innerHTML=String(s.to(r))))}),a}function L(){n&&(st(n),n=null)}function T(t){L();var e=D(t),r=t.filter,t=t.format||{to:function(t){return String(Math.round(t))}};return n=d.appendChild(O(e,r,t))}function j(){var t=i.getBoundingClientRect(),e="offset"+["Width","Height"][f.ort];return 0===f.ort?t.width||i[e]:t.height||i[e]}function z(n,i,o,s){function e(t){var e,r=function(e,t,r){var n=0===e.type.indexOf("touch"),i=0===e.type.indexOf("mouse"),o=0===e.type.indexOf("pointer"),s=0,a=0;0===e.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(n){var l=function(t){t=t.target;return t===r||r.contains(t)||e.composed&&e.composedPath().shift()===r};if("touchstart"===e.type){n=Array.prototype.filter.call(e.touches,l);if(1<n.length)return!1;s=n[0].pageX,a=n[0].pageY}else{l=Array.prototype.find.call(e.changedTouches,l);if(!l)return!1;s=l.pageX,a=l.pageY}}t=t||ht(x),(i||o)&&(s=e.clientX+t.x,a=e.clientY+t.y);return e.pageOffset=t,e.points=[s,a],e.cursor=i||o,e}(t,s.pageOffset,s.target||i);return!!r&&(!(V()&&!s.doNotReject)&&(e=d,t=f.cssClasses.tap,!((e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className))&&!s.doNotReject)&&(!(n===c.start&&void 0!==r.buttons&&1<r.buttons)&&((!s.hover||!r.buttons)&&(p||r.preventDefault(),r.calcPoint=r.points[f.ort],void o(r,s))))))}var r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!p&&{passive:!0}),r.push([t,e])}),r}function H(t){var e,r,n=ct(n=100*(t-(n=i,e=f.ort,r=n.getBoundingClientRect(),n=(t=n.ownerDocument).documentElement,t=ht(t),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(t.x=0),e?r.top+t.y-n.clientTop:r.left+t.x-n.clientLeft))/j());return f.dir?100-n:n}function F(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function R(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);t=(f.dir?-1:1)*(t.calcPoint-e.startCalcPoint);G(0<t,100*t/e.baseSize,e.locations,e.handleNumbers,e.connect)}function _(t,e){e.handle&&(dt(e.handle,f.cssClasses.active),--v),e.listeners.forEach(function(t){y.removeEventListener(t[0],t[1])}),0===v&&(dt(d,f.cssClasses.drag),K(),t.cursor&&(w.style.cursor="",w.removeEventListener("selectstart",lt))),f.events.smoothSteps&&(e.handleNumbers.forEach(function(t){Q(t,m[t],!0,!0,!1,!1)}),e.handleNumbers.forEach(function(t){I("update",t)})),e.handleNumbers.forEach(function(t){I("change",t),I("set",t),I("end",t)})}function B(t,e){var r,n,i,o;e.handleNumbers.some(A)||(1===e.handleNumbers.length&&(o=l[e.handleNumbers[0]].children[0],v+=1,ft(o,f.cssClasses.active)),t.stopPropagation(),n=z(c.move,y,R,{target:t.target,handle:o,connect:e.connect,listeners:r=[],startCalcPoint:t.calcPoint,baseSize:j(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:m.slice()}),i=z(c.end,y,_,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),o=z("mouseout",y,F,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),r.push.apply(r,n.concat(i,o)),t.cursor&&(w.style.cursor=getComputedStyle(t.target).cursor,1<l.length&&ft(d,f.cssClasses.drag),w.addEventListener("selectstart",lt,!1)),e.handleNumbers.forEach(function(t){I("start",t)}))}function r(t){t.stopPropagation();var i,o,s,e=H(t.calcPoint),r=(i=e,s=!(o=100),l.forEach(function(t,e){var r,n;A(e)||(r=m[e],((n=Math.abs(r-i))<o||n<=o&&r<i||100===n&&100===o)&&(s=e,o=n))}),s);!1!==r&&(f.events.snap||ut(d,f.cssClasses.tap,f.animationDuration),Q(r,e,!0,!0),K(),I("slide",r,!0),I("update",r,!0),f.events.snap?B(t,{handleNumbers:[r]}):(I("change",r,!0),I("set",r,!0)))}function q(t){var t=H(t.calcPoint),t=S.getStep(t),e=S.fromStepping(t);Object.keys(b).forEach(function(t){"hover"===t.split(".")[0]&&b[t].forEach(function(t){t.call(it,e)})})}function X(t,e){b[t]=b[t]||[],b[t].push(e),"update"===t.split(".")[0]&&l.forEach(function(t,e){I("update",e)})}function Y(t){var n=t&&t.split(".")[0],i=n?t.substring(n.length):t;Object.keys(b).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||((e=r)!==mt.aria&&e!==mt.tooltips||i===r)&&delete b[t]})}function I(r,n,i){Object.keys(b).forEach(function(t){var e=t.split(".")[0];r===e&&b[t].forEach(function(t){t.call(it,h.map(f.format.to),n,h.slice(),i||!1,m.slice(),it)})})}function W(t,e,r,n,i,o,s){var a;return 1<l.length&&!f.events.unconstrained&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],f.margin,!1),r=Math.max(r,a)),i&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],f.margin,!0),r=Math.min(r,a))),1<l.length&&f.limit&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],f.limit,!1),r=Math.min(r,a)),i&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],f.limit,!0),r=Math.max(r,a))),f.padding&&(0===e&&(a=S.getAbsoluteDistance(0,f.padding[0],!1),r=Math.max(r,a)),e===l.length-1&&(a=S.getAbsoluteDistance(100,f.padding[1],!0),r=Math.min(r,a))),!((r=ct(r=!s?S.getStep(r):r))===t[e]&&!o)&&r}function $(t,e){var r=f.ort;return(r?e:t)+", "+(r?t:e)}function G(t,r,n,e,i){var o=n.slice(),s=e[0],a=f.events.smoothSteps,l=[!t,t],u=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){e=W(o,t,o[t]+r,l[e],u[e],!1,a);!1===e?r=0:(r=e-o[t],o[t]=e)}):l=u=[!0];var c=!1;e.forEach(function(t,e){c=Q(t,n[t]+r,l[e],u[e],!1,a)||c}),c&&(e.forEach(function(t){I("update",t),I("slide",t)}),null!=i&&I("drag",s))}function J(t,e){return f.dir?100-t-e:t}function K(){g.forEach(function(t){var e=50<m[t]?-1:1,e=3+(l.length+e*t);l[t].style.zIndex=String(e)})}function Q(t,e,r,n,i,o){return!1!==(e=i?e:W(m,t,e,r,n,!1,o))&&(e=e,m[t=t]=e,h[t]=S.fromStepping(e),e="translate("+$(J(e,0)-E+"%","0")+")",l[t].style[f.transformRule]=e,Z(t),Z(t+1),!0)}function Z(t){var e,r;a[t]&&(r=100,e="translate("+$(J(e=(e=0)!==t?m[t-1]:e,r=(r=t!==a.length-1?m[t]:r)-e)+"%","0")+")",r="scale("+$(r/100,"1")+")",a[t].style[f.transformRule]=e+" "+r)}function tt(t,e){return null===t||!1===t||void 0===t?m[e]:("number"==typeof t&&(t=String(t)),!1===(t=!1!==(t=f.format.from(t))?S.toStepping(t):t)||isNaN(t)?m[e]:t)}function et(t,e,r){var n=pt(t),t=void 0===m[0];e=void 0===e||e,f.animate&&!t&&ut(d,f.cssClasses.tap,f.animationDuration),g.forEach(function(t){Q(t,tt(n[t],t),!0,!1,r)});var i,o=1===g.length?0:1;for(t&&S.hasNoSize()&&(r=!0,m[0]=0,1<g.length&&(i=100/(g.length-1),g.forEach(function(t){m[t]=t*i})));o<g.length;++o)g.forEach(function(t){Q(t,m[t],!0,!0,r)});K(),g.forEach(function(t){I("update",t),null!==n[t]&&e&&I("set",t)})}function rt(t){if(t=void 0===t?!1:t)return 1===h.length?h[0]:h.slice(0);t=h.map(f.format.to);return 1===t.length?t[0]:t}function nt(t){var e=m[t],r=S.getNearbySteps(e),n=h[t],i=r.thisStep.step,t=null;if(f.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),t=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(t=null);e=S.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(e))),[t=null!==t&&!1!==t?Number(t.toFixed(e)):t,i]}ft(t=d,f.cssClasses.target),0===f.dir?ft(t,f.cssClasses.ltr):ft(t,f.cssClasses.rtl),0===f.ort?ft(t,f.cssClasses.horizontal):ft(t,f.cssClasses.vertical),ft(t,"rtl"===getComputedStyle(t).direction?f.cssClasses.textDirectionRtl:f.cssClasses.textDirectionLtr),i=P(t,f.cssClasses.base),function(t,e){var r=P(e,f.cssClasses.connects);l=[],(a=[]).push(N(r,t[0]));for(var n=0;n<f.handles;n++)l.push(C(e,n)),g[n]=n,a.push(N(r,t[n+1]))}(f.connect,i),(u=f.events).fixed||l.forEach(function(t,e){z(c.start,t.children[0],B,{handleNumbers:[e]})}),u.tap&&z(c.start,i,r,{}),u.hover&&z(c.move,i,q,{hover:!0}),u.drag&&a.forEach(function(e,t){var r,n,i,o,s;!1!==e&&0!==t&&t!==a.length-1&&(r=l[t-1],n=l[t],i=[e],o=[r,n],s=[t-1,t],ft(e,f.cssClasses.draggable),u.fixed&&(i.push(r.children[0]),i.push(n.children[0])),u.dragAll&&(o=l,s=g),i.forEach(function(t){z(c.start,t,B,{handles:o,handleNumbers:s,connect:e})}))}),et(f.start),f.pips&&T(f.pips),f.tooltips&&M(),Y("update"+mt.aria),X("update"+mt.aria,function(t,e,o,r,s){g.forEach(function(t){var e=l[t],r=W(m,t,0,!0,!0,!0),n=W(m,t,100,!0,!0,!0),i=s[t],t=String(f.ariaFormat.to(o[t])),r=S.fromStepping(r).toFixed(1),n=S.fromStepping(n).toFixed(1),i=S.fromStepping(i).toFixed(1);e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",t)})});var it={destroy:function(){for(Y(mt.aria),Y(mt.tooltips),Object.keys(f.cssClasses).forEach(function(t){dt(d,f.cssClasses[t])});d.firstChild;)d.removeChild(d.firstChild);delete d.noUiSlider},steps:function(){return g.map(nt)},on:X,off:Y,get:rt,set:et,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<g.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Q(t,tt(e,t),!0,!0,n),I("update",t),r&&I("set",t)},reset:function(t){et(f.start,t)},disable:function(t){null!=t?(l[t].setAttribute("disabled",""),l[t].handle.removeAttribute("tabindex")):(d.setAttribute("disabled",""),l.forEach(function(t){t.handle.removeAttribute("tabindex")}))},enable:function(t){null!=t?(l[t].removeAttribute("disabled"),l[t].handle.setAttribute("tabindex","0")):(d.removeAttribute("disabled"),l.forEach(function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")}))},__moveHandles:function(t,e,r){G(t,e,m,r)},options:o,updateOptions:function(e,t){var r=rt(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=gt(o);n.forEach(function(t){void 0!==e[t]&&(f[t]=i[t])}),S=i.spectrum,f.margin=i.margin,f.limit=i.limit,f.padding=i.padding,f.pips?T(f.pips):L(),(f.tooltips?M:k)(),m=[],et(at(e.start)?e.start:r,t)},target:d,removePips:L,removeTooltips:k,getPositions:function(){return m.slice()},getTooltips:function(){return s},getOrigins:function(){return l},pips:T};return it}function z(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");e=j(t,gt(e),e);return t.noUiSlider=e}var H={__spectrum:u,cssClasses:p,create:z};ot.create=z,ot.cssClasses=p,ot.default=H,Object.defineProperty(ot,"__esModule",{value:!0})});

/* ------------------------*/
/* ------------------------*/
/*    ua-parser.min.js     */
/* ------------------------*/
/* ------------------------*/

!function(r,b){"use strict";var u="function",e="undefined",c="object",a="string",i="model",s="name",o="type",n="vendor",t="version",l="architecture",w="console",d="mobile",m="tablet",p="smarttv",f="wearable",h="embedded",g={extend:function(i,s){var e,o={};for(e in i)s[e]&&s[e].length%2==0?o[e]=s[e].concat(i[e]):o[e]=i[e];return o},has:function(i,s){return typeof i==a&&-1!==s.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i==a?i.replace(/[^\d\.]/g,"").split(".")[0]:b},trim:function(i,s){return i=i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof s==e?i:i.substring(0,255)}},v={rgx:function(i,s){for(var e,o,r,a,n,t=0;t<s.length&&!a;){for(var l=s[t],w=s[t+1],d=e=0;d<l.length&&!a;)if(a=l[d++].exec(i))for(o=0;o<w.length;o++)n=a[++e],typeof(r=w[o])==c&&0<r.length?2==r.length?typeof r[1]==u?this[r[0]]=r[1].call(this,n):this[r[0]]=r[1]:3==r.length?typeof r[1]!=u||r[1].exec&&r[1].test?this[r[0]]=n?n.replace(r[1],r[2]):b:this[r[0]]=n?r[1].call(this,n,r[2]):b:4==r.length&&(this[r[0]]=n?r[3].call(this,n.replace(r[1],r[2])):b):this[r]=n||b;t+=2}},str:function(i,s){for(var e in s)if(typeof s[e]==c&&0<s[e].length){for(var o=0;o<s[e].length;o++)if(g.has(s[e][o],i))return"?"===e?b:e}else if(g.has(s[e],i))return"?"===e?b:e;return i}},x={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},k={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[t,[s,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[t,[s,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[s,t],[/opios[\/\s]+([\w\.]+)/i],[t,[s,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[t,[s,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[s,t],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[t,[s,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[t,[s,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[t,[s,"WeChat"]],[/konqueror\/([\w\.]+)/i],[t,[s,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[t,[s,"IE"]],[/yabrowser\/([\w\.]+)/i],[t,[s,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[s,/(.+)/,"$1 Secure Browser"],t],[/focus\/([\w\.]+)/i],[t,[s,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[t,[s,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[t,[s,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[t,[s,"Dolphin"]],[/coast\/([\w\.]+)/i],[t,[s,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[t,[s,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[t,[s,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[s,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[s,/(.+)/,"$1 Browser"],t],[/(comodo_dragon)\/([\w\.]+)/i],[[s,/_/g," "],t],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[s,t],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[s],[/;fbav\/([\w\.]+);/i],[t,[s,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[s,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[s,t],[/\bgsa\/([\w\.]+)\s.*safari\//i],[t,[s,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[t,[s,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[s,"Chrome WebView"],t],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[t,[s,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[s,t],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[t,[s,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[t,s],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[s,[t,v.str,x.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[s,t],[/(navigator|netscape)\/([\w\.-]+)/i],[[s,"Netscape"],t],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[t,[s,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[s,t]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[l,"amd64"]],[/(ia32(?=;))/i],[[l,g.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[l,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[l,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[l,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[l,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[l,/ower/,"",g.lowerize]],[/(sun4\w)[;\)]/i],[[l,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[l,g.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[i,[n,"Samsung"],[o,m]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[i,[n,"Samsung"],[o,d]],[/\((ip(?:hone|od)[\s\w]*);/i],[i,[n,"Apple"],[o,d]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[i,[n,"Apple"],[o,m]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[i,[n,"Huawei"],[o,m]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[i,[n,"Huawei"],[o,d]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[i,/_/g," "],[n,"Xiaomi"],[o,d]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[i,/_/g," "],[n,"Xiaomi"],[o,m]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[i,[n,"OPPO"],[o,d]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[i,[n,"Vivo"],[o,d]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[i,[n,"Realme"],[o,d]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[i,[n,"Motorola"],[o,d]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[i,[n,"Motorola"],[o,m]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[i,[n,"LG"],[o,m]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[i,[n,"LG"],[o,d]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[i,[n,"Lenovo"],[o,m]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[i,/_/g," "],[n,"Nokia"],[o,d]],[/droid.+;\s(pixel\sc)[\s)]/i],[i,[n,"Google"],[o,m]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[i,[n,"Google"],[o,d]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[i,[n,"Sony"],[o,d]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[i,"Xperia Tablet"],[n,"Sony"],[o,m]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[i,[n,"OnePlus"],[o,d]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[i,[n,"Amazon"],[o,m]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[i,"Fire Phone"],[n,"Amazon"],[o,d]],[/\((playbook);[\w\s\),;-]+(rim)/i],[i,n,[o,m]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[i,[n,"BlackBerry"],[o,d]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[i,[n,"ASUS"],[o,m]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[i,[n,"ASUS"],[o,d]],[/(nexus\s9)/i],[i,[n,"HTC"],[o,m]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[n,[i,/_/g," "],[o,d]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[i,[n,"Acer"],[o,m]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[i,[n,"Meizu"],[o,d]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[n,i,[o,d]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[n,i,[o,m]],[/\s(surface\sduo)\s/i],[i,[n,"Microsoft"],[o,m]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[i,[n,"Fairphone"],[o,d]],[/\s(u304aa)\sbuild/i],[i,[n,"AT&T"],[o,d]],[/sie-(\w*)/i],[i,[n,"Siemens"],[o,d]],[/[;\/]\s?(rct\w+)\sbuild/i],[i,[n,"RCA"],[o,m]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[i,[n,"Dell"],[o,m]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[i,[n,"Verizon"],[o,m]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[i,[n,"Barnes & Noble"],[o,m]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[i,[n,"NuVision"],[o,m]],[/;\s(k88)\sbuild/i],[i,[n,"ZTE"],[o,m]],[/;\s(nx\d{3}j)\sbuild/i],[i,[n,"ZTE"],[o,d]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[i,[n,"Swiss"],[o,d]],[/[;\/]\s?(zur\d{3})\sbuild/i],[i,[n,"Swiss"],[o,m]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[i,[n,"Zeki"],[o,m]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[n,"Dragon Touch"],i,[o,m]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[i,[n,"Insignia"],[o,m]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[i,[n,"NextBook"],[o,m]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[n,"Voice"],i,[o,d]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[n,"LvTel"],i,[o,d]],[/;\s(ph-1)\s/i],[i,[n,"Essential"],[o,d]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[i,[n,"Envizen"],[o,m]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[i,[n,"MachSpeed"],[o,m]],[/[;\/]\s?tu_(1491)\sbuild/i],[i,[n,"Rotor"],[o,m]],[/(shield[\w\s]+)\sbuild/i],[i,[n,"Nvidia"],[o,m]],[/(sprint)\s(\w+)/i],[n,i,[o,d]],[/(kin\.[onetw]{3})/i],[[i,/\./g," "],[n,"Microsoft"],[o,d]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[i,[n,"Zebra"],[o,m]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[i,[n,"Zebra"],[o,d]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[n,i,[o,w]],[/droid.+;\s(shield)\sbuild/i],[i,[n,"Nvidia"],[o,w]],[/(playstation\s[345portablevi]+)/i],[i,[n,"Sony"],[o,w]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[i,[n,"Microsoft"],[o,w]],[/smart-tv.+(samsung)/i],[n,[o,p]],[/hbbtv.+maple;(\d+)/i],[[i,/^/,"SmartTV"],[n,"Samsung"],[o,p]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[n,"LG"],[o,p]],[/(apple)\s?tv/i],[n,[i,"Apple TV"],[o,p]],[/crkey/i],[[i,"Chromecast"],[n,"Google"],[o,p]],[/droid.+aft([\w])(\sbuild\/|\))/i],[i,[n,"Amazon"],[o,p]],[/\(dtv[\);].+(aquos)/i],[i,[n,"Sharp"],[o,p]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[n,g.trim],[i,g.trim],[o,p]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[o,p]],[/((pebble))app\/[\d\.]+\s/i],[n,i,[o,f]],[/droid.+;\s(glass)\s\d/i],[i,[n,"Google"],[o,f]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[i,[n,"Zebra"],[o,f]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[n,[o,h]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[i,[o,d]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[i,[o,m]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[o,g.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[i,[n,"Generic"]],[/(phone)/i],[[o,d]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[t,[s,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[t,[s,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[s,t],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[t,s]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[s,t],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[s,[t,v.str,x.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[s,"Windows"],[t,v.str,x.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[t,/_/g,"."],[s,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[s,"Mac OS"],[t,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[s,t],[/\(bb(10);/i],[t,[s,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[t,[s,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[s,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[t,[s,"webOS"]],[/crkey\/([\d\.]+)/i],[t,[s,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[s,"Chromium OS"],t],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[s,t],[/(sunos)\s?([\w\.\d]*)/i],[[s,"Solaris"],t],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[s,t]]},y=function(i,s){if("object"==typeof i&&(s=i,i=b),!(this instanceof y))return new y(i,s).getResult();var e=i||(void 0!==r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=s?g.extend(k,s):k;return this.getBrowser=function(){var i={name:b,version:b};return v.rgx.call(i,e,o.browser),i.major=g.major(i.version),i},this.getCPU=function(){var i={architecture:b};return v.rgx.call(i,e,o.cpu),i},this.getDevice=function(){var i={vendor:b,model:b,type:b};return v.rgx.call(i,e,o.device),i},this.getEngine=function(){var i={name:b,version:b};return v.rgx.call(i,e,o.engine),i},this.getOS=function(){var i={name:b,version:b};return v.rgx.call(i,e,o.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(i){return e=typeof i==a&&255<i.length?g.trim(i,255):i,this},this.setUA(e),this};y.VERSION="0.7.28",y.BROWSER={NAME:s,MAJOR:"major",VERSION:t},y.CPU={ARCHITECTURE:l},y.DEVICE={MODEL:i,VENDOR:n,TYPE:o,CONSOLE:w,MOBILE:d,SMARTTV:p,TABLET:m,WEARABLE:f,EMBEDDED:h},y.ENGINE={NAME:s,VERSION:t},y.OS={NAME:s,VERSION:t},typeof exports!=e?(typeof module!=e&&module.exports&&(exports=module.exports=y),exports.UAParser=y):"function"==typeof define&&define.amd?define(function(){return y}):void 0!==r&&(r.UAParser=y);var S,E=void 0!==r&&(r.jQuery||r.Zepto);E&&!E.ua&&(S=new y,E.ua=S.getResult(),E.ua.get=function(){return S.getUA()},E.ua.set=function(i){S.setUA(i);var s,e=S.getResult();for(s in e)E.ua[s]=e[s]})}("object"==typeof window?window:this);

/* ------------------------*/
/* ------------------------*/
/*     ` attribution.js     */
/* ------------------------*/
/* ------------------------*/

var DeviceDetectParser=new UAParser(window.navigator.userAgent);class DeviceDetect{static isMobile(){return"mobile"===DeviceDetectParser.getDevice().type}static isMobileHuawei(){return DeviceDetect.isMobile()&&"Huawei"===DeviceDetectParser.getDevice().vendor}static isMobileApple(){return DeviceDetect.isMobile()&&"Apple"===DeviceDetectParser.getDevice().vendor}static isMobileAndroid(){return DeviceDetect.isMobile()&&!DeviceDetect.isMobileHuawei()&&"Android"===DeviceDetectParser.getOS().name}static isAndroid(){return"Android"===DeviceDetectParser.getOS().name}static get0S(){return DeviceDetectParser.getOS()?.name.toLowerCase()}static isMacOs(){return!DeviceDetect.isMobile()&&DeviceDetect.get0S()?.includes("mac os")}static isWindows(){return!DeviceDetect.isMobile()&&DeviceDetect.get0S()?.includes("window")}static isLinux(){return!DeviceDetect.isMobile()&&!DeviceDetect.isWindows()&&!DeviceDetect.isMacOs()}static isIPad(){return DeviceDetectParser.getDevice()?.model?.includes("iPad")}}var AttributionUtmTagSourceId="source_id",AttributionPlatformAndroid="android",AttributionPlatformDesktop="desktop",AttributionPlatformIOS="ios",AttributionPlatformIPad="ipad",AttributionPlatformOsAndroid="android",AttributionPlatformOsIOS="ios",AttributionPlatformOsIPad="ipad",AttributionPlatformOsWindows="windows",AttributionPlatformOsLinux="linux",AttributionPlatformOsMacos="macos";class Attribution{static upgradeStoreLink(e){let t=new URL(window.location),i=new URLSearchParams(t.search),r=new URL(e);return i.forEach((e,t)=>{r.searchParams.append(t,e)}),r.toString()}static openStoreLink(e,t){e=this.upgradeStoreLink(e),window.open(e,t?"_blank":null)}static sendDoStartRequest(){return new Promise((e,t)=>{let i=window.location.protocol+"//"+window.location.host+"/",r=new URLSearchParams(Object.entries({link:window.location,utm_tag:this.getUtmTags(),source_id:this.getSourceId(),platform:this.getPlatform(),platform_os:this.getPlatformOS(),timezone_utc_offset:this.getTimezoneUTCOffset(),screen_avail_width:this.getScreenAvailWidth(),screen_avail_height:this.getScreenAvailHeight()})).toString(),s=new XMLHttpRequest;s.open("POST",i+"www/global/doStart",!0),s.onload=()=>{4===s.readyState&&(s.status>=200&&s.status<300?e(JSON.parse(s.response)):t({status:s.status,statusText:s.statusText}))},s.onerror=()=>{t({status:s.status,statusText:s.statusText})},s.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01"),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),s.send(r)})}static getUtmTags(){let e=new URL(window.location),t=new URLSearchParams(e.search);return t.toString()}static getSourceId(){let e=new URL(window.location),t=new URLSearchParams(e.search);return t.has("source_id")?t.get("source_id"):""}static getPlatform(){return DeviceDetect.isMobileAndroid()||DeviceDetect.isMobileHuawei()||DeviceDetect.isAndroid()?"android":DeviceDetect.isMobileApple()?"ios":DeviceDetect.isIPad()?"ipad":"desktop"}static getPlatformOS(){return DeviceDetect.isMobileAndroid()||DeviceDetect.isMobileHuawei()||DeviceDetect.isAndroid()?"android":DeviceDetect.isMobileApple()?"ios":DeviceDetect.isIPad()?"ipad":DeviceDetect.isLinux()?"linux":DeviceDetect.isMacOs()?"macos":(DeviceDetect.isWindows(),"windows")}static getTimezoneUTCOffset(){let e=new Date;return-(60*e.getTimezoneOffset())}static getScreenAvailWidth(){return window.screen.availWidth}static getScreenAvailHeight(){return window.screen.availHeight}}document.addEventListener("DOMContentLoaded",function(){window.doStart=Attribution.sendDoStartRequest(),Array.prototype.find.call(document.querySelectorAll("a"),e=>{let t=e.getAttribute("href");t&&t.includes("redirect.appmetrica.yandex.com")&&e.setAttribute("href",Attribution.upgradeStoreLink(t))})});

/* ------------------------*/
/* ------------------------*/
/*      ` main-v20.js      */
/* ------------------------*/
/* ------------------------*/

const body = document.body;
var remSize = 0

const getSize = () => {
    var remSize = getComputedStyle(document.documentElement).getPropertyValue('--remSize');
    var factor = 0;
    
    if (window.innerWidth > 1280) {
        factor = 18;
    } else {
        factor = window.innerWidth / 100 * remSize;
    }
    
    return factor;
}

const getPage = () => {
    if (body.classList.contains('is--home-page')) {
	   return 'home';
    }
    if (body.classList.contains('is--on-premise-page')) {
	   return 'on-premise';
    }
    if (body.classList.contains('is--blog-post-page')) {
	   return 'post';
    }
    if (body.classList.contains('is--partner-page')) {
	   return 'partner';
    }
    if (body.classList.contains('is--blog-page')) {
	   return 'blog';
    }
    if (window.location.href.indexOf('download') + 1 > 0) {
        return 'download';
    }
}

body.classList.add('is--js-success');

function showOldBrowserMsg() {
	const oldMsg = document.querySelector('.navbar__old-msg');
	if (oldMsg) {
		oldMsg.classList.add('is--display-block');
		document.querySelector('.navbar__old-close').addEventListener('click', () => {
			oldMsg.classList.remove('is--show');
		})
		setTimeout(function () {
			oldMsg.classList.add('is--show');
		}, 100)
	}
}

if (navigator.userAgent.indexOf(' UCBrowser/') >= 0) {
	showOldBrowserMsg()
}

var Detector = new oldBrowserDetector({
	c: 87,
	f: 73,
	o: 70,
	s: {
		d: 12
	}
}, function () {
    const browserInfoObj = oldBrowserDetector.getBrowser();
    if (browserInfoObj.n != 'x' && browserInfoObj.v != 0)    
	   showOldBrowserMsg();
})

Detector.detect();
switch (platform.name) {
	case 'Safari':
		switch (platform.os.family) {
			case 'iOS':
				if (platform.version.split('.')[0] <= 13 && platform.os.version.split('.')[0] <= 13) {
					showOldBrowserMsg();
				}
				break;
			case 'OS X':
				if (platform.version.split('.')[0] <= 13) {
					showOldBrowserMsg();
				}
				break;
		}
		break;
	case 'Chrome':
		if (platform.version.split('.')[0] <= 87) {
			showOldBrowserMsg();
		}
		break;
	case 'Chrome Mobile':
		if (platform.version.split('.')[0] <= 87) {
			showOldBrowserMsg();
		}
		break;
	case 'Opera':
		if (platform.version.split('.')[0] <= 73) {
			showOldBrowserMsg();
		}
		break;
	case 'Firefox':
		if (platform.version.split('.')[0] <= 73) {
			showOldBrowserMsg();
		}
		break;
}

$(document).ready(function () {
	$(".w-webflow-badge").removeClass("w-webflow-badge").empty();
});

var os = platform.os.family;
function getOS() {
	"use strict";
	var userAgent = window.navigator.userAgent,
		platform = window.navigator.userAgentData ? window.navigator.userAgentData : window.navigator.platform || window.navigator.platform,
		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		os = null;
	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'OS X';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (/Huawei/.test(userAgent)) {
		os = 'Huawei';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (/Linux/.test(platform)) {
		os = 'Linux';
	}

	return os;
}

function iOS() {
	"use strict";
	return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
		// iPad on iOS 13 detection
		||
		(navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

if (os === null || os == 'Android') {
	os = getOS();
	if (os == 'OS X') {
		if (iOS()) {
			os = 'iOS';
		}
	}
}

function isTouchDevice() {
	return (('ontouchstart' in window) ||
		(navigator.maxTouchPoints > 0) ||
		(navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
	body.classList.add('is--touch-device');
}

// Функция для создания ссылки с SVG и названием
function createDownloadLink(options) {
  const linkText = options[0],
        linkPlatform = options[1],
        linkClass = options[2],
        linkUrl = options[3],
        onPremiseLinkUrl = options[4],
        linkTag = options[5],
        svgIcon = options[6],
        svgDarkIcon = options[7]
  
  // Создаем элемент
  const downloadItemWrap = document.createElement('div');
  downloadItemWrap.classList.add('cta__list-item-wrap');
  
  const link = document.createElement('a');
  // Устанавливаем атрибут href

  if (getPage() == 'on-premise') { 
    link.href = onPremiseLinkUrl;
  } else {
    link.href = linkUrl;
  }
  link.classList.add('cta__list-item', 'w-inline-block', linkClass);
  link.setAttribute('download', 'download');
  link.addEventListener('click', () => {
    $(".w-dropdown").trigger("w-close");
  })

  // Создаем иконку
  const svgWrapper = document.createElement('div');
  svgWrapper.classList.add('cta__list-item-icon', 'is--vector-full', 'w-embed');
  
  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute('width', '22');
  svgElement.setAttribute('height', '22');
  svgElement.setAttribute('viewBox', '0 0 22 22');
  svgElement.innerHTML = svgIcon;

  const svgDarkElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgDarkElement.setAttribute('width', '22');
  svgDarkElement.setAttribute('height', '22');
  svgDarkElement.setAttribute('viewBox', '0 0 22 22');
  svgDarkElement.innerHTML = svgDarkIcon;

  // Создаем элементы для отображения текста ссылки
  const linkShortText = document.createElement('span');
  linkShortText.textContent = linkText;

  const linkPlatformName = document.createElement('span');
  linkPlatformName.textContent = linkPlatform;

  const linkTextElement = document.createElement('div');
  linkTextElement.classList.add('cta__list-item-name');

  linkTextElement.appendChild(linkShortText)
  linkTextElement.appendChild(linkPlatformName)

  // Добавляем элементы внутрь ссылки
  svgWrapper.appendChild(svgElement);
  if (svgDarkIcon) {
    svgWrapper.appendChild(svgDarkElement);
    svgDarkElement.classList.add('is--dark-icon');
    svgElement.classList.add('is--light-icon');
  }
  link.appendChild(svgWrapper);
  link.appendChild(linkTextElement);
  
  if (linkTag) {
     const tagElement = document.createElement('div');
     tagElement.classList.add('cta__list-item-tag');
     tagElement.textContent = linkTag;
     link.appendChild(tagElement);
  }
  downloadItemWrap.appendChild(link);
  return downloadItemWrap;
}


const downloadLinksData = {
  macintel: ['Скачать для ',
             'MacOS',
             'macintel',
             'https://update.getcompass.com/apps/compass-mac.dmg',
             'https://update-onpremise.getcompass.ru/apps/compass-on-premise-mac.dmg',
              'Intel',
              '<path d="M15.4258 11.0566C15.4258 9.82812 15.9902 8.93164 17.0859 8.23438C16.4551 7.33789 15.5254 6.87305 14.2969 6.77344C13.1016 6.67383 11.8066 7.4375 11.3418 7.4375C10.8438 7.4375 9.71484 6.80664 8.81836 6.80664C6.95898 6.83984 5 8.26758 5 11.2227C5 12.0859 5.13281 12.9824 5.46484 13.9121C5.89648 15.1406 7.42383 18.1289 9.01758 18.0625C9.84766 18.0625 10.4453 17.4648 11.541 17.4648C12.6035 17.4648 13.1348 18.0625 14.0645 18.0625C15.6914 18.0625 17.0859 15.3398 17.4844 14.1113C15.3262 13.082 15.4258 11.123 15.4258 11.0566ZM13.5664 5.61133C14.4629 4.54883 14.3633 3.55273 14.3633 3.1875C13.5664 3.25391 12.6367 3.75195 12.1055 4.34961C11.5078 5.01367 11.1758 5.84375 11.2422 6.74023C12.1055 6.80664 12.9023 6.375 13.5664 5.61133Z" fill="currentColor"></path>'],
  macapple: ['Скачать для ', 
             'MacOS', 
             'macapple', 
             'https://update.getcompass.com/apps/compass-mac-arm64.dmg', 
             'https://update-onpremise.getcompass.ru/apps/compass-on-premise-mac-arm64.dmg', 
             'M1/M2', 
             '<path d="M15.4258 11.0566C15.4258 9.82812 15.9902 8.93164 17.0859 8.23438C16.4551 7.33789 15.5254 6.87305 14.2969 6.77344C13.1016 6.67383 11.8066 7.4375 11.3418 7.4375C10.8438 7.4375 9.71484 6.80664 8.81836 6.80664C6.95898 6.83984 5 8.26758 5 11.2227C5 12.0859 5.13281 12.9824 5.46484 13.9121C5.89648 15.1406 7.42383 18.1289 9.01758 18.0625C9.84766 18.0625 10.4453 17.4648 11.541 17.4648C12.6035 17.4648 13.1348 18.0625 14.0645 18.0625C15.6914 18.0625 17.0859 15.3398 17.4844 14.1113C15.3262 13.082 15.4258 11.123 15.4258 11.0566ZM13.5664 5.61133C14.4629 4.54883 14.3633 3.55273 14.3633 3.1875C13.5664 3.25391 12.6367 3.75195 12.1055 4.34961C11.5078 5.01367 11.1758 5.84375 11.2422 6.74023C12.1055 6.80664 12.9023 6.375 13.5664 5.61133Z" fill="currentColor"></path>'],
  windows: ['Скачать для ', 
            'Windows', 
            'windows', 
            'https://update.getcompass.com/apps/compass-win.exe', 
            'https://update-onpremise.getcompass.ru/apps/compass-on-premise-win.exe', 
            '', 
            '<path d="M4.01636 6.08452V11.1519H10.1172V5.25108L4.01636 6.08452ZM4.01636 16.9193L10.1172 17.7528V11.9186H4.01636V16.9193ZM10.7839 17.8528L18.9517 18.9529V11.9186H10.7839V17.8528ZM10.7839 5.15106V11.1519H18.9517V4.01758L10.7839 5.15106Z" fill="currentColor"></path>'],
  linuxdeb: ['Скачать для ', 
             'Linux', 
             'linuxdeb', 
             'https://update.getcompass.com/apps/compass-linux.deb', 
             'https://update-onpremise.getcompass.ru/apps/compass-on-premise-linux.deb', 
             '.deb', 
             '<path d="M11.2344 3C6.68555 3 3 6.68555 3 11.2344C3 15.7832 6.68555 19.4688 11.2344 19.4688C15.7832 19.4688 19.4688 15.7832 19.4688 11.2344C19.4688 6.68555 15.7832 3 11.2344 3ZM12.9609 6.08789C13.2598 5.58984 13.9238 5.42383 14.4219 5.72266C14.9199 6.02148 15.0859 6.65234 14.7871 7.15039C14.5215 7.68164 13.8574 7.84766 13.3594 7.54883C12.8613 7.25 12.6621 6.61914 12.9609 6.08789ZM5.88867 12.2969C5.29102 12.2969 4.82617 11.832 4.82617 11.2344C4.82617 10.6699 5.29102 10.2051 5.88867 10.2051C6.48633 10.2051 6.95117 10.6699 6.95117 11.2344C6.95117 11.832 6.48633 12.2969 5.88867 12.2969ZM6.81836 12.3965C7.54883 11.832 7.54883 10.7031 6.81836 10.1055C7.11719 9.00977 7.78125 8.08008 8.71094 7.44922L9.47461 8.77734C7.78125 9.97266 7.78125 12.5293 9.47461 13.7246L8.71094 15.0195C7.78125 14.4219 7.11719 13.4922 6.81836 12.3965ZM14.4219 16.7793C13.8906 17.0781 13.2598 16.9121 12.9609 16.3809C12.6621 15.8828 12.8613 15.252 13.3594 14.9531C13.8574 14.6543 14.5215 14.8203 14.7871 15.3516C15.0859 15.8496 14.9199 16.4805 14.4219 16.7793ZM14.4219 14.4883C13.5254 14.123 12.5625 14.6875 12.4297 15.6504C12.2305 15.6836 10.8027 16.1152 9.20898 15.3184L9.93945 13.9902C11.832 14.8535 14.0566 13.5918 14.2227 11.5332H15.75C15.6836 12.6953 15.1855 13.7246 14.4219 14.4883ZM14.2227 10.9688C14.0566 8.91016 11.8652 7.61523 9.93945 8.51172L9.20898 7.18359C10.8027 6.38672 12.2305 6.81836 12.3965 6.85156C12.5625 7.81445 13.5254 8.37891 14.4219 8.01367C15.1855 8.77734 15.6836 9.80664 15.75 10.9688H14.2227Z" fill="currentColor"></path>'],
  linuxtar: ['Скачать для ', 
             'Linux', 
             'linuxtar', 
             'https://update.getcompass.com/apps/compass-linux.tar', 
             'https://update-onpremise.getcompass.ru/apps/compass-on-premise-linux.tar', 
             '.tar', 
             '<path d="m10.122 6.1925c0.06-0.0225 0.1425-0.03 0.195 0 0.015 0.0075 0.03 0.0225 0.0225 0.0375v0.015h0.0075c-0.015 0.045-0.09 0.0375-0.1275 0.0525s-0.0675 0.0525-0.105 0.0525-0.0975-0.015-0.105-0.0525c-0.0075-0.0525 0.0675-0.105 0.1125-0.105zm0.765 0.105c-0.0375-0.015-0.1125-0.0075-0.12-0.0525v-0.015c-0.0075-0.015 0.0075-0.03 0.015-0.0375 0.0649-0.02627 0.1375-0.02627 0.2025 0 0.045 0 0.12 0.0525 0.1125 0.105-0.0075 0.0375-0.0675 0.045-0.105 0.045s-0.0675-0.03-0.105-0.045zm-1.32 1.0875c0.225 0.15 0.51752 0.3525 0.88502 0.3525s0.8025-0.2025 1.065-0.3525c0.1425-0.0975 0.3375-0.2475 0.4875-0.3525 0.12-0.0975 0.1125-0.195 0.2175-0.195 0.0975 0.0075 0.0225 0.0975-0.1125 0.2475-0.1425 0.0975-0.3525 0.2475-0.525 0.3525-0.33 0.15-0.72 0.3975-1.1325 0.3975-0.405 0-0.73502-0.2025-0.96752-0.3525-0.12-0.0975-0.21-0.195-0.285-0.2475-0.12-0.0975-0.105-0.2475-0.0525-0.2475 0.0825 0.0075 0.0975 0.0975 0.15 0.15 0.075 0.045 0.165 0.15 0.27 0.2475z" fill="#fff"></path><path d="m11.098 6.2975c-0.0075 0.0375-0.0675 0.045-0.105 0.045s-0.0675-0.03-0.105-0.045-0.1125-0.0075-0.12-0.0525v-0.015c-0.0075-0.015 0.0075-0.03 0.015-0.0375 0.0649-0.02627 0.1375-0.02627 0.2025 0 0.045 0 0.12 0.0525 0.1125 0.105z" fill="#B4B4B4"></path><path d="m14.472 10.235v0.69h-0.4125c0.3745 0.6828 0.6426 1.4188 0.795 2.1825 0.1125-0.0075 0.2475 0.015 0.39 0.045 0.06-0.1575 0.0975-0.315 0.12-0.4725 0.1425-1.0425-0.5175-2.0625-0.8925-2.445zm0 0v0.69h-0.4125c0.3745 0.6828 0.6426 1.4188 0.795 2.1825 0.1125-0.0075 0.2475 0.015 0.39 0.045 0.06-0.1575 0.0975-0.315 0.12-0.4725 0.1425-1.0425-0.5175-2.0625-0.8925-2.445zm3.4875 5.9775v-0.0675l-0.0075-0.0075c-0.1275-0.15-0.1875-0.3975-0.255-0.69-0.06-0.3-0.135-0.5925-0.375-0.7875-0.045-0.0375-0.09-0.045-0.1425-0.0975-0.0428-0.0284-0.0916-0.0464-0.1425-0.0525 0.21-0.615 0.2325-1.2375 0.1275-1.83-0.0525-0.3225-0.1425-0.6375-0.2625-0.9375-0.405-1.0575-1.11-1.98-1.65-2.61-0.2775-0.3525-0.5625-0.705-0.78-1.08-0.2475-0.4275-0.4125-0.885-0.405-1.4475 0.015-1.0425 0.0825-2.67-0.6525-3.6825-0.39-0.5475-1.0275-0.9225-2.0325-0.9225-0.12 0-0.24 0.0075-0.3675 0.015-0.9525 0.075-1.545 0.42-1.9125 0.9075-0.8625 1.14-0.45751 3.03-0.48751 3.8175-0.06 0.8175-0.225 1.4625-0.795 2.265-0.2325 0.27-0.5025 0.6-0.765 0.975-0.5025 0.705-1.005 1.545-1.2975 2.415-0.1875 0.5625-0.2925 1.14-0.24 1.695l0.0225 0.1725c-0.03 0.0225-0.06 0.0525-0.0825 0.0975-0.2025 0.2025-0.345 0.45-0.5025 0.63-0.1575 0.15-0.3675 0.2025-0.6075 0.3-0.24 0.105-0.5025 0.2025-0.6525 0.51-0.075 0.1425-0.105 0.3-0.105 0.45s0.0225 0.3075 0.045 0.405c0.045 0.3 0.09 0.5475 0.03 0.7275-0.1875 0.51-0.21 0.8625-0.0825 1.1175 0.135 0.2475 0.405 0.345 0.7125 0.45 0.615 0.15 1.4475 0.0975 2.1075 0.45 0.6975 0.345 1.4175 0.5025 1.98 0.3525 0.405-0.09 0.7425-0.3525 0.9225-0.7125 0.0375 0 0.06751 0 0.10501-0.0075 0.42-0.0225 0.88501-0.195 1.605-0.24 0.2025-0.015 0.42 0.0075 0.66 0.0375 0.3825 0.06 0.8175 0.1425 1.2975 0.1125 0.015 0.0975 0.045 0.1425 0.0825 0.2475h0.0075c0.2925 0.585 0.84 0.8475 1.425 0.8025s1.2075-0.3975 1.7175-0.975c0.4725-0.5775 1.275-0.8175 1.8-1.1325 0.2625-0.1425 0.48-0.345 0.495-0.6375 0.015-0.3-0.15-0.6075-0.54-1.035zm-5.835-10.732c-0.03-0.0975-0.075-0.15-0.135-0.2475-0.0675-0.0525-0.1275-0.105-0.2025-0.105h-0.015c-0.0675 0-0.135 0.0225-0.195 0.105-0.075 0.0675-0.1275 0.15-0.1575 0.2475-0.0375 0.0975-0.06 0.195-0.0675 0.3v0.015c0 0.0675 0.0075 0.135 0.015 0.2025-0.15-0.0525-0.33-0.105-0.4575-0.1575-0.0075-0.045-0.015-0.0975-0.015-0.1425v-0.015c-0.0075-0.2025 0.03-0.3975 0.1125-0.5775 0.06-0.165 0.1725-0.3075 0.3225-0.405 0.135-0.0975 0.2925-0.15 0.45-0.15h0.015c0.1575 0 0.3 0.0525 0.4425 0.15 0.1425 0.105 0.2475 0.2475 0.33 0.405 0.0825 0.1875 0.12 0.3375 0.1275 0.54 0-0.015 0.0075-0.03 0.0075-0.045v0.075c-0.0075 0-0.0075-0.0075-0.0075-0.015 0 0.1725-0.045 0.3525-0.1125 0.5175-0.0375 0.09-0.09 0.18-0.165 0.2475-0.0225-0.015-0.045-0.0225-0.0675-0.03-0.075-0.0375-0.15-0.0525-0.2175-0.0975-0.0522-0.02531-0.1078-0.04299-0.165-0.0525 0.0375-0.045 0.1125-0.0975 0.1425-0.15 0.0375-0.0975 0.06-0.195 0.0675-0.3v-0.015c0-0.0975-0.015-0.2025-0.0525-0.3zm-3.12-0.33c0.0375-0.15 0.11251-0.285 0.21751-0.405 0.0975-0.0975 0.19499-0.15 0.31499-0.15h0.0225c0.11103 0.0016 0.21869 0.03836 0.3075 0.105 0.1125 0.0975 0.20252 0.2175 0.26252 0.345 0.0675 0.15 0.105 0.3 0.1125 0.5025 0.0075 0.0525 0.0075 0.09 0.0075 0.1275 0 0.03 0 0.0525-0.0075 0.075v0.06c-0.0193 0.00765-0.0394 0.01269-0.06 0.015-0.12 0.045-0.21002 0.105-0.30002 0.15 0.0075-0.06 0.0075-0.1275 0-0.195v-0.015c-0.0075-0.0975-0.03-0.15-0.06-0.2475-0.02501-0.07704-0.06883-0.14664-0.1275-0.2025-0.01953-0.01664-0.04221-0.0292-0.06669-0.03693-0.02447-0.00773-0.05025-0.01048-0.07581-0.00807h-0.015c-0.0525 0-0.0975 0.03-0.135 0.0975-0.0525 0.06-0.0825 0.1275-0.0975 0.2025-0.015 0.0825-0.02249 0.165-0.01499 0.2475v0.015c0.0075 0.0975 0.03 0.15 0.06 0.2475 0.0375 0.0975 0.075 0.15 0.1275 0.2025 0.0075 0.0075 0.01499 0.015 0.02249 0.015-0.0525 0.045-0.0825 0.0525-0.1275 0.105-0.03085 0.02479-0.06665 0.04269-0.105 0.0525-0.075-0.0975-0.1425-0.195-0.2025-0.3075-0.075-0.1575-0.1125-0.3225-0.12-0.495-0.015-0.1725 0.0075-0.345 0.06-0.5025zm0.0825 1.5825c0.165-0.105 0.285-0.21 0.3675-0.255 0.075-0.0525 0.105-0.075 0.1275-0.0975h0.0075c0.1275-0.1575 0.33-0.3525 0.63002-0.4575 0.105-0.0225 0.225-0.045 0.36-0.045 0.2475 0 0.555 0.045 0.915 0.3 0.225 0.15 0.3975 0.2025 0.8025 0.3525 0.195 0.0975 0.3075 0.195 0.3675 0.3v-0.105c0.0525 0.1125 0.0525 0.24 0.0075 0.3525-0.09 0.24-0.39 0.4875-0.8025 0.6375-0.21 0.0975-0.3825 0.2475-0.5925 0.345-0.21 0.105-0.4425 0.225-0.765 0.2025-0.1151 0.00953-0.2308-0.00847-0.3375-0.0525-0.09-0.045-0.1725-0.09-0.24752-0.1425-0.15-0.105-0.2775-0.255-0.465-0.3525-0.3075-0.1875-0.4725-0.39-0.525-0.5325-0.0525-0.2025 0-0.3525 0.15-0.45zm0.12 11.745c-0.045 0.555-0.36749 0.855-0.85499 0.9675-0.495 0.0975-1.155 0-1.8225-0.345-0.7275-0.405-1.605-0.3525-2.16-0.4575-0.285-0.045-0.465-0.15-0.555-0.3-0.0825-0.15-0.0825-0.45 0.0975-0.9225 0.09-0.255 0.0225-0.57-0.0225-0.84-0.0375-0.3-0.06-0.5325 0.0375-0.705 0.12-0.255 0.3-0.3 0.5175-0.405 0.225-0.0975 0.4875-0.15 0.6975-0.345v-0.0075c0.195-0.2025 0.3375-0.45 0.51-0.63 0.1425-0.15 0.285-0.2475 0.5025-0.2475h0.0075c0.0375 0 0.075 0 0.12 0.0075 0.285 0.045 0.5325 0.255 0.7725 0.5625l0.69 1.2525h0.0075c0.18 0.3975 0.57 0.8025 0.9 1.23 0.33 0.45 0.585 0.8475 0.555 1.1775v0.0075zm2.4675-0.48c-0.7425 0.1725-1.53 0.12-2.265-0.285-0.09-0.045-0.18001-0.0975-0.26251-0.1575-0.0825-0.1425-0.1875-0.2775-0.3075-0.3975-0.0552-0.094-0.12624-0.1777-0.21-0.2475 0.1425 0 0.2625-0.0225 0.36-0.0525 0.105-0.0525 0.19501-0.1425 0.23251-0.2475 0.0825-0.2025-1e-5 -0.525-0.26251-0.8775-0.2625-0.345-0.705-0.7425-1.35-1.14-0.2475-0.1575-0.435-0.3225-0.5775-0.5025-0.1425-0.1725-0.24-0.3525-0.3-0.54-0.12-0.405-0.105-0.8175-0.0075-1.2375 0.1125-0.495 0.3375-0.975 0.555-1.3875 0.15-0.2625 0.2925-0.495 0.4125-0.6825 0.075-0.0525 0.0225 0.09-0.2925 0.6825l-0.0225 0.045c-0.3 0.5625-0.8625 1.875-0.09 2.895 0.03-0.7425 0.195-1.4775 0.4875-2.16 0.0975-0.225 0.225-0.4875 0.36-0.78 0.4425-0.9375 0.98251-2.1525 1.035-3.1725 0.0375 0.03 0.165 0.105 0.2175 0.15 0.165 0.105 0.29249 0.255 0.44999 0.3525 0.1575 0.15 0.36002 0.2475 0.66752 0.2475 0.03 0.0075 0.0525 0.0075 0.0825 0.0075 0.3075 0 0.555-0.0975 0.7575-0.2025 0.2175-0.0975 0.39-0.2475 0.555-0.3h0.0075c0.3525-0.0975 0.63-0.3 0.795-0.525 0.27 1.065 0.9075 2.61 1.3125 3.36 0.3981 0.7058 0.6817 1.4703 0.84 2.265 0.1125-0.0075 0.2475 0.015 0.39 0.045 0.06-0.1575 0.0975-0.315 0.12-0.4725 0.1425-1.0425-0.5175-2.0625-0.8925-2.445-0.0225-0.015-0.045-0.0375-0.06-0.0525-0.165-0.15-0.1725-0.255-0.09-0.255 0.0525 0.045 0.0975 0.09 0.15 0.1425 0.42 0.435 0.9075 1.1325 1.095 1.9275 0.06 0.2175 0.09 0.45 0.09 0.6825 0 0.1875-0.0225 0.3825-0.0675 0.57 0.045 0.0225 0.0975 0.045 0.15 0.0525 0.7875 0.3975 1.0725 0.6975 0.9375 1.1475v-0.03h-0.15c0.1125-0.3525-0.135-0.6225-0.81-0.915-0.69-0.3-1.245-0.255-1.3425 0.345-0.0075 0.03-0.0075 0.0525-0.015 0.105-0.0525 0.015-0.105 0.0375-0.1575 0.045-0.3225 0.2025-0.5025 0.5025-0.6 0.8925-0.0975 0.3975-0.1275 0.8625-0.1575 1.4025-0.015 0.2475-0.1275 0.63-0.24 1.0125-0.4575 0.3225-0.975 0.57-1.53 0.69zm6.225-0.3825c-0.4725 0.3-1.32 0.5325-1.86 1.1775-0.4725 0.555-1.0425 0.855-1.545 0.8925s-0.9375-0.15-1.1925-0.675h-0.0075c-0.1575-0.3-0.09-0.7725 0.045-1.2675 0.135-0.5025 0.3225-1.0125 0.3525-1.425 0.0225-0.5325 0.0525-0.9975 0.1425-1.3575 0.0975-0.3525 0.24-0.6 0.4875-0.7425l0.0375-0.015c0.0225 0.45 0.255 0.93 0.6675 1.035 0.4425 0.0975 1.0875-0.255 1.3575-0.5775l0.1575-0.0075c0.24-0.0075 0.4425 0.0075 0.645 0.2025 0.1575 0.15 0.2325 0.3975 0.3 0.66 0.0675 0.3 0.12 0.585 0.3075 0.795 0.375 0.3975 0.495 0.6825 0.4875 0.855-0.015 0.2025-0.1425 0.3-0.3825 0.45zm-3.4275-7.38v0.69h-0.4125c0.3745 0.6828 0.6426 1.4188 0.795 2.1825 0.1125-0.0075 0.2475 0.015 0.39 0.045 0.06-0.1575 0.0975-0.315 0.12-0.4725 0.1425-1.0425-0.5175-2.0625-0.8925-2.445z" fill="#B4B4B4"></path><path d="m10.348 6.245c-0.015 0.045-0.09 0.0375-0.1275 0.0525s-0.0675 0.0525-0.105 0.0525-0.0975-0.015-0.105-0.0525c-0.0075-0.0525 0.0675-0.105 0.1125-0.105 0.06-0.0225 0.1425-0.03 0.195 0 0.015 0.0075 0.03 0.0225 0.0225 0.0375v0.015h0.0075zm1.7625 0.84c-0.1425 0.0975-0.3525 0.2475-0.525 0.3525-0.33 0.15-0.72 0.3975-1.1325 0.3975-0.405 0-0.73502-0.2025-0.96752-0.3525-0.12-0.0975-0.21-0.195-0.285-0.2475-0.12-0.0975-0.105-0.2475-0.0525-0.2475 0.0825 0.0075 0.0975 0.0975 0.15 0.15 0.075 0.045 0.165 0.15 0.27 0.2475 0.225 0.15 0.51752 0.3525 0.88502 0.3525s0.8025-0.2025 1.065-0.3525c0.1425-0.0975 0.3375-0.2475 0.4875-0.3525 0.12-0.0975 0.1125-0.195 0.2175-0.195 0.0975 0.0075 0.0225 0.0975-0.1125 0.2475z" fill="currentColor"></path>','<path d="M10.0055 5.5513C10.073 5.5249 10.1669 5.5161 10.2255 5.5513C10.2431 5.55863 10.2607 5.57623 10.2519 5.59383V5.60997H10.2607C10.2431 5.6613 10.1581 5.65397 10.1155 5.66863C10.073 5.6833 10.0393 5.72877 9.99821 5.72877C9.95421 5.72877 9.88675 5.71263 9.87795 5.6701C9.86915 5.61143 9.95421 5.5513 10.0055 5.5513ZM10.8723 5.66863C10.8298 5.65397 10.7447 5.6613 10.7359 5.60997V5.59383C10.7286 5.57623 10.7447 5.55863 10.7535 5.54983C10.8269 5.5205 10.909 5.5205 10.9823 5.54983C11.0337 5.54983 11.1187 5.60997 11.1099 5.6701C11.1026 5.71263 11.0337 5.72143 10.9926 5.72143C10.9515 5.72143 10.9149 5.68477 10.8723 5.66863ZM9.37635 6.9021C9.63155 7.07223 9.96301 7.30103 10.3795 7.30103C10.7961 7.30103 11.2889 7.07223 11.5866 6.9021C11.7479 6.7921 11.9679 6.62197 12.1395 6.50317C12.2745 6.3917 12.2671 6.2817 12.3859 6.2817C12.4959 6.2905 12.4109 6.3917 12.2583 6.56183C12.097 6.6733 11.8579 6.84343 11.6629 6.96223C11.2889 7.13237 10.8474 7.4125 10.3795 7.4125C9.92048 7.4125 9.54648 7.18223 9.28248 7.0121C9.14754 6.9021 9.04488 6.7921 8.95981 6.73343C8.82341 6.62197 8.84101 6.45183 8.90114 6.45183C8.99354 6.46063 9.01114 6.56183 9.06981 6.62197C9.15488 6.6733 9.25608 6.7921 9.37635 6.9021Z" fill="currentColor"/><g opacity="0.5"><path d="M11.11 5.6701C11.1027 5.71263 11.0337 5.71997 10.9927 5.71997C10.9516 5.71997 10.9149 5.68623 10.8724 5.6701C10.8299 5.6525 10.7448 5.6613 10.736 5.61143V5.59383C10.7287 5.57623 10.7448 5.55863 10.7536 5.54983C10.8269 5.5205 10.9091 5.5205 10.9824 5.54983C11.0337 5.54983 11.1188 5.60997 11.11 5.6701Z" fill="currentColor"/><path d="M14.935 10.1317V10.9134H14.4672C14.8925 11.6878 15.1961 12.5224 15.3692 13.3877C15.4968 13.3789 15.6478 13.4053 15.8092 13.439C15.8781 13.2601 15.9206 13.0812 15.947 12.9037C16.1084 11.7216 15.3604 10.5658 14.935 10.1317ZM14.935 10.1317V10.9134H14.4672C14.8925 11.6878 15.1961 12.5224 15.3692 13.3877C15.4968 13.3789 15.6478 13.4053 15.8092 13.439C15.8781 13.2601 15.9206 13.0812 15.947 12.9037C16.1084 11.7216 15.3604 10.5658 14.935 10.1317ZM18.8877 16.9077V16.83L18.8789 16.8212C18.7352 16.651 18.6662 16.3709 18.59 16.0394C18.5225 15.6992 18.4374 15.3677 18.1646 15.1477C18.1133 15.1037 18.062 15.0964 18.0033 15.0362C17.9548 15.0045 17.8995 14.9844 17.842 14.9776C18.0796 14.2809 18.106 13.574 17.9872 12.9037C17.927 12.537 17.8258 12.1806 17.6894 11.8404C17.2304 10.6421 16.431 9.59638 15.8194 8.88212C15.5041 8.48318 15.1814 8.08425 14.935 7.65892C14.6549 7.17492 14.4672 6.65572 14.476 6.01772C14.4936 4.83705 14.5698 2.99198 13.7368 1.84505C13.2938 1.22465 12.5722 0.799316 11.4341 0.799316C11.2977 0.799316 11.1613 0.808116 11.0161 0.816916C9.93662 0.901983 9.26488 1.29212 8.84835 1.84358C7.87155 3.13718 8.33062 5.27852 8.29688 6.17025C8.22795 7.09718 8.04168 7.82758 7.39488 8.73692C7.13088 9.04492 6.82582 9.41892 6.52955 9.84278C5.95902 10.6421 5.38995 11.594 5.05848 12.5796C4.84582 13.2176 4.72702 13.8717 4.78568 14.5009L4.81208 14.6974C4.77251 14.7261 4.74033 14.7639 4.71822 14.8074C4.48795 15.0362 4.32662 15.3178 4.14915 15.5217C3.97022 15.6918 3.73262 15.7505 3.45982 15.862C3.18848 15.9793 2.89075 16.0908 2.72062 16.4398C2.63555 16.6012 2.60182 16.7786 2.60182 16.9488C2.60182 17.1189 2.62675 17.2978 2.65315 17.4078C2.70302 17.7481 2.75582 18.0282 2.68688 18.2321C2.47422 18.8114 2.44782 19.2104 2.59302 19.4993C2.74555 19.7794 3.05208 19.8909 3.39968 20.0097C4.09782 20.1798 5.04235 20.1197 5.79035 20.5186C6.57942 20.9102 7.39488 21.0892 8.03435 20.919C8.49195 20.8164 8.87475 20.5186 9.07862 20.1124C9.12115 20.1124 9.15488 20.1124 9.19742 20.1021C9.67408 20.0772 10.2006 19.8821 11.0161 19.8308C11.2464 19.8132 11.4928 19.8396 11.7641 19.8733C12.1982 19.9408 12.691 20.0346 13.2352 20.0009C13.2513 20.1109 13.2865 20.1622 13.329 20.281H13.3364C13.6678 20.944 14.2897 21.2417 14.9526 21.1904C15.6156 21.139 16.321 20.7401 16.8989 20.086C17.4342 19.4318 18.3436 19.159 18.9376 18.8026C19.2368 18.6413 19.4832 18.411 19.4993 18.0796C19.5169 17.7393 19.3292 17.3917 18.8877 16.9077ZM12.2745 4.74172C12.2408 4.63172 12.1894 4.57158 12.122 4.46158C12.0457 4.40292 11.9768 4.34278 11.8917 4.34278H11.8756C11.8317 4.34178 11.7883 4.35204 11.7495 4.37258C11.7108 4.39312 11.6779 4.42326 11.6541 4.46012C11.5696 4.53564 11.5076 4.63311 11.4752 4.74172C11.4328 4.85065 11.407 4.96537 11.3989 5.08198V5.09812C11.3989 5.17585 11.4077 5.25212 11.4165 5.32838C11.2464 5.26972 11.0425 5.20958 10.8973 5.14945C10.8877 5.09617 10.8823 5.04223 10.8812 4.98812V4.97198C10.8712 4.74705 10.9144 4.52294 11.0073 4.31785C11.0763 4.12901 11.205 3.96784 11.374 3.85878C11.5216 3.75012 11.6996 3.6906 11.8829 3.68865H11.9005C12.0794 3.68865 12.2408 3.74732 12.4021 3.85878C12.5634 3.97758 12.6822 4.14038 12.7761 4.31785C12.87 4.53052 12.9125 4.70065 12.9198 4.92945C12.9198 4.91332 12.9286 4.89572 12.9286 4.87958V4.96465C12.9198 4.96465 12.9198 4.95585 12.9198 4.94705C12.9198 5.14212 12.87 5.34598 12.7937 5.53372C12.7524 5.63975 12.6883 5.7354 12.606 5.81385C12.5822 5.79913 12.5565 5.78778 12.5297 5.78012C12.4446 5.73758 12.3596 5.72145 12.2833 5.67012C12.2238 5.64165 12.1606 5.62189 12.0956 5.61145C12.1396 5.55865 12.2232 5.49998 12.2569 5.43985C12.2998 5.33099 12.326 5.21627 12.3346 5.09958V5.08345C12.3354 4.96732 12.315 4.85055 12.2745 4.74172ZM8.73982 4.36772C8.78358 4.19731 8.86757 4.03988 8.98475 3.90865C9.09475 3.79865 9.20475 3.73852 9.34262 3.73852H9.36755C9.49368 3.73998 9.61542 3.78252 9.71662 3.85732C9.84138 3.96597 9.94226 4.09931 10.0129 4.24892C10.0938 4.42792 10.1372 4.62158 10.1405 4.81798C10.1493 4.87665 10.1493 4.92065 10.1493 4.96318C10.1493 4.99692 10.1493 5.02185 10.1405 5.04825V5.11572C10.1189 5.12454 10.0962 5.13046 10.073 5.13332C9.93662 5.18318 9.83542 5.25065 9.73275 5.30345C9.7413 5.22987 9.7413 5.15556 9.73275 5.08198V5.06438C9.72395 4.95438 9.69902 4.89425 9.66528 4.78425C9.63661 4.69712 9.58671 4.61849 9.52008 4.55545C9.49796 4.53659 9.47229 4.52234 9.44459 4.51352C9.41689 4.50471 9.38771 4.50151 9.35875 4.50412H9.34262C9.28248 4.50412 9.23115 4.53785 9.18862 4.61412C9.13195 4.67961 9.09396 4.75915 9.07862 4.84438C9.06025 4.93606 9.05433 5.02979 9.06102 5.12305V5.14065C9.06982 5.25212 9.09475 5.31078 9.12995 5.42225C9.1596 5.50857 9.20879 5.58687 9.27368 5.65105C9.28248 5.65985 9.29128 5.66865 9.30008 5.66865C9.23995 5.71852 9.20622 5.72732 9.15488 5.78598C9.12004 5.81429 9.07953 5.8348 9.03608 5.84612C8.94966 5.73695 8.87263 5.62067 8.80582 5.49852C8.72317 5.32237 8.67726 5.13125 8.67088 4.93678C8.6545 4.74448 8.67892 4.55086 8.73982 4.36772ZM8.83222 6.16145C9.01848 6.04265 9.15488 5.92385 9.24875 5.87252C9.29962 5.83934 9.34769 5.80206 9.39248 5.76105H9.40128C9.54648 5.58358 9.77528 5.36212 10.1156 5.24332C10.3626 5.18013 10.6207 5.17328 10.8708 5.2233C11.1208 5.27331 11.3565 5.3789 11.5602 5.53225C11.8154 5.70238 12.0105 5.76105 12.4696 5.93118C12.691 6.04265 12.8186 6.15265 12.8861 6.27145V6.15265C12.9448 6.28025 12.9448 6.42398 12.8949 6.55158C12.7922 6.82438 12.4534 7.10452 11.9856 7.27465C11.748 7.38465 11.5514 7.55478 11.3138 7.66625C11.0762 7.78358 10.8122 7.91998 10.447 7.89505C10.3171 7.90594 10.1864 7.88583 10.0657 7.83638C9.96798 7.7896 9.87386 7.73567 9.78408 7.67505C9.61395 7.55478 9.46875 7.38465 9.25608 7.27465C8.90848 7.06198 8.72075 6.83318 8.66208 6.67185C8.60342 6.44158 8.66208 6.27145 8.83222 6.16145ZM8.96862 19.4714C8.91728 20.1021 8.55208 20.4409 7.99915 20.5685C7.43742 20.6785 6.68942 20.5685 5.93408 20.1769C5.10835 19.7193 4.11542 19.778 3.48475 19.6592C3.16208 19.6078 2.95822 19.489 2.85702 19.3189C2.76315 19.1488 2.76315 18.8085 2.96702 18.2732C3.06968 17.9842 2.99195 17.6278 2.94208 17.3213C2.89808 16.981 2.87315 16.7185 2.98462 16.522C3.11955 16.233 3.32342 16.1832 3.57128 16.0629C3.82502 15.9529 4.12275 15.8928 4.36035 15.6728V15.664C4.58182 15.4352 4.74315 15.1536 4.93968 14.9497C5.10102 14.7796 5.26235 14.6696 5.50875 14.6696H5.51755C5.5627 14.6686 5.60785 14.6715 5.65248 14.6784C5.97515 14.7297 6.25675 14.9673 6.52808 15.3149L7.30982 16.7346H7.31862C7.52395 17.1849 7.96395 17.644 8.33942 18.128C8.71342 18.6384 9.00235 19.0901 8.96862 19.4626V19.4714ZM11.7641 18.9288C10.9237 19.1238 10.0305 19.0637 9.19742 18.6061C9.09344 18.5547 8.99387 18.4949 8.89968 18.4272C8.8038 18.2622 8.68696 18.1104 8.55208 17.9754C8.48904 17.8695 8.40816 17.7752 8.31302 17.6968C8.45167 17.6974 8.58962 17.6772 8.72222 17.6366C8.83955 17.5765 8.94222 17.4753 8.98622 17.355C9.07862 17.1262 8.98622 16.761 8.68702 16.3606C8.39075 15.9705 7.88915 15.5188 7.15728 15.07C6.90863 14.918 6.68747 14.7251 6.50315 14.4994C6.35145 14.3194 6.23591 14.1117 6.16288 13.8878C6.03674 13.4294 6.0337 12.9457 6.15408 12.4857C6.28168 11.924 6.53688 11.3798 6.78475 10.912C6.95342 10.6157 7.11475 10.3517 7.25115 10.139C7.33622 10.0804 7.27608 10.2417 6.91968 10.912L6.89328 10.9633C6.55448 11.6013 5.91648 13.0885 6.79062 14.2442C6.82505 13.4014 7.01292 12.5718 7.34502 11.7964C7.45502 11.5412 7.60022 11.2434 7.75275 10.912C8.25435 9.85012 8.86595 8.47292 8.92608 7.31718C8.96862 7.35092 9.11235 7.43452 9.17248 7.48732C9.35875 7.60465 9.50395 7.77625 9.68142 7.88625C9.7821 7.98164 9.90107 8.05564 10.0311 8.10379C10.1612 8.15194 10.2997 8.17323 10.4382 8.16638C10.472 8.17518 10.4969 8.17518 10.5321 8.17518C10.8812 8.17518 11.1613 8.06518 11.3901 7.94638C11.6365 7.83492 11.833 7.66478 12.0208 7.60612H12.0266C12.3844 7.51267 12.7011 7.30326 12.9272 7.01065C13.2337 8.21772 13.9568 9.96892 14.4144 10.8196C14.8661 11.6189 15.1873 12.4857 15.3677 13.3862C15.4938 13.3774 15.6464 13.4024 15.8077 13.4376C15.8766 13.2586 15.9192 13.0797 15.9456 12.9008C16.1069 11.7201 15.3589 10.5644 14.9336 10.1302C14.9086 10.1141 14.8822 10.0877 14.8661 10.0716C14.6784 9.90145 14.6696 9.78265 14.7634 9.78265C14.8221 9.83252 14.8734 9.88532 14.9336 9.94398C15.4088 10.4368 15.9617 11.2273 16.1744 12.1278C16.2992 12.5919 16.3077 13.0795 16.1993 13.5476C16.2526 13.5759 16.31 13.5957 16.3694 13.6062C17.2626 14.058 17.5868 14.3982 17.4328 14.9072V14.8734H17.2626C17.3902 14.4745 17.1101 14.168 16.3445 13.8365C15.5628 13.4962 14.9336 13.5476 14.8236 14.2281C14.8148 14.2618 14.8148 14.2868 14.806 14.3454C14.7473 14.363 14.6872 14.3894 14.627 14.3968C14.2618 14.627 14.058 14.9673 13.948 15.4088C13.8365 15.859 13.8028 16.387 13.769 16.9986C13.7514 17.2788 13.6238 17.7129 13.4977 18.1456C12.9785 18.5122 12.3918 18.7909 11.7626 18.9273L11.7641 18.9288ZM18.8188 18.4946C18.2834 18.8349 17.3228 19.0974 16.7112 19.8293C16.1758 20.4585 15.5305 20.7973 14.96 20.8413C14.3909 20.8824 13.8981 20.6712 13.6092 20.0757H13.6004C13.4214 19.7354 13.4977 19.2001 13.6517 18.6384C13.8042 18.0693 14.0184 17.4914 14.0506 17.025C14.077 16.4208 14.1093 15.8928 14.212 15.485C14.3234 15.0861 14.4848 14.806 14.7649 14.6446L14.8089 14.627C14.8324 15.1374 15.0964 15.6816 15.5642 15.8004C16.0658 15.9104 16.7962 15.5114 17.1028 15.1462L17.2802 15.1374C17.553 15.1286 17.7818 15.1462 18.0121 15.3662C18.191 15.5364 18.2761 15.8165 18.3524 16.1142C18.4286 16.4545 18.4873 16.7772 18.7 17.0162C19.1253 17.4665 19.2617 17.7892 19.2529 17.9842C19.2353 18.2145 19.0916 18.3245 18.8188 18.4946ZM14.935 10.1317V10.9134H14.4672C14.8925 11.6878 15.1961 12.5209 15.3692 13.3862C15.4953 13.3774 15.6478 13.4024 15.8092 13.4376C15.8781 13.2586 15.9206 13.0797 15.947 12.9022C16.1084 11.7201 15.3604 10.5658 14.935 10.1317Z" fill="currentColor"/><path d="M10.2607 5.60996C10.2431 5.66129 10.1581 5.65396 10.1155 5.66863C10.073 5.68329 10.0393 5.72876 9.99821 5.72876C9.95421 5.72876 9.88675 5.71263 9.87795 5.67009C9.86915 5.61143 9.95421 5.55129 10.0055 5.55129C10.073 5.52489 10.1669 5.51609 10.2255 5.55129C10.2431 5.55863 10.2607 5.57623 10.2519 5.59383V5.60996H10.2607ZM12.2583 6.56329C12.097 6.67329 11.8579 6.84196 11.6629 6.96223C11.2889 7.13236 10.8474 7.41249 10.3795 7.41249C9.92048 7.41249 9.54648 7.18223 9.28248 7.01209C9.14754 6.90209 9.04488 6.79209 8.95981 6.73343C8.82341 6.62196 8.84101 6.45183 8.90114 6.45183C8.99354 6.46063 9.01114 6.56183 9.07128 6.62196C9.15488 6.67329 9.25755 6.79209 9.37635 6.90209C9.63155 7.07223 9.96301 7.30103 10.3795 7.30103C10.7961 7.30103 11.2889 7.07223 11.5866 6.90209C11.7479 6.79209 11.9679 6.62196 12.1395 6.50316C12.2745 6.39169 12.2671 6.28169 12.3859 6.28169C12.4959 6.29049 12.4109 6.39316 12.2583 6.56329Z" fill="currentColor"/></g><path d="M12.8876 6.15408V6.27288C12.8187 6.15408 12.6911 6.04408 12.4711 5.93261C12.012 5.76248 11.8155 5.70381 11.5617 5.53368C11.3578 5.38011 11.1219 5.2744 10.8716 5.22438C10.6213 5.17436 10.3629 5.18132 10.1156 5.24474C9.83438 5.34751 9.58749 5.52683 9.40279 5.76248H9.39399C9.34873 5.80355 9.30017 5.84083 9.24879 5.87394C9.15639 5.92381 9.01999 6.04408 8.83226 6.16288C8.66213 6.27288 8.60346 6.44301 8.66213 6.67181C8.72079 6.83314 8.90853 7.06341 9.25759 7.27608C9.47026 7.38608 9.61399 7.55621 9.78559 7.67501C9.86919 7.73368 9.96306 7.78648 10.0643 7.83634C10.1853 7.88652 10.3165 7.90714 10.4471 7.89648C10.8137 7.92141 11.0777 7.78648 11.3153 7.66621C11.5529 7.55621 11.748 7.38754 11.9856 7.27608C12.4549 7.10594 12.7923 6.82581 12.8949 6.55301C12.921 6.48953 12.9338 6.42139 12.9325 6.35279C12.9312 6.28418 12.916 6.21656 12.8876 6.15408ZM10.736 5.59234C10.7287 5.57621 10.7448 5.55861 10.7536 5.54981C10.8269 5.52048 10.9091 5.52048 10.9839 5.54981C11.0337 5.54981 11.1188 5.60994 11.1115 5.67008C11.1027 5.71261 11.0337 5.71994 10.9912 5.71994C10.9487 5.71994 10.9149 5.68621 10.8739 5.67008C10.8299 5.65248 10.7448 5.66128 10.736 5.60994V5.59234ZM10.0056 5.54981C10.0731 5.52488 10.1669 5.51608 10.2256 5.54981C10.2432 5.55861 10.2608 5.57621 10.252 5.59381V5.60994H10.2608C10.2432 5.66128 10.1581 5.65248 10.1156 5.66861C10.0731 5.68474 10.0393 5.72874 9.99826 5.72874C9.95426 5.72874 9.88679 5.71261 9.87799 5.67008C9.86919 5.60994 9.95426 5.54981 10.0056 5.54981ZM12.2584 6.56181C12.0971 6.67181 11.8595 6.84194 11.6629 6.96074C11.2889 7.13088 10.8475 7.41248 10.3796 7.41248C9.92053 7.41248 9.54653 7.18221 9.28253 7.01208C9.14759 6.90208 9.04493 6.79208 8.95986 6.73194C8.82493 6.62194 8.84253 6.45181 8.90119 6.45181C8.99359 6.46061 9.01119 6.56181 9.07133 6.62194C9.15639 6.67181 9.25759 6.79208 9.37639 6.90061C9.63159 7.07221 9.96306 7.30101 10.3796 7.30101C10.7961 7.30101 11.2889 7.07221 11.5867 6.90208C11.748 6.79208 11.968 6.62194 12.1396 6.50314C12.2745 6.39168 12.2672 6.28168 12.386 6.28168C12.496 6.29048 12.4109 6.39168 12.2584 6.56181ZM19.2544 17.9871C19.2368 18.2159 19.0931 18.3259 18.8203 18.4961C18.2849 18.8363 17.3243 19.0989 16.7127 19.8307C16.1773 20.4599 15.5305 20.7987 14.9615 20.8427C14.3924 20.8838 13.8981 20.6711 13.6092 20.0771H13.6019C13.4229 19.7369 13.4992 19.2015 13.6517 18.6398C13.8057 18.0707 14.0184 17.4929 14.0521 17.0265C14.0771 16.4222 14.1108 15.8942 14.2135 15.4865C14.3235 15.0875 14.4848 14.8074 14.7664 14.6461L14.8075 14.6285C14.8339 15.1389 15.0979 15.683 15.5643 15.8018C16.0659 15.9118 16.7963 15.5129 17.1043 15.1462L17.2817 15.1389C17.5531 15.1301 17.7833 15.1462 18.0121 15.3677C18.1911 15.5378 18.2761 15.8179 18.3524 16.1157C18.4287 16.4559 18.4888 16.7786 18.7015 17.0162C19.1268 17.4679 19.2617 17.7906 19.2544 17.9857V17.9871ZM8.96866 19.4655V19.4729C8.91733 20.1035 8.55213 20.4423 8.00066 20.5699C7.43893 20.6799 6.69093 20.5699 5.93413 20.1783C5.10986 19.7193 4.11546 19.7794 3.48626 19.6606C3.16359 19.6093 2.95826 19.4905 2.85706 19.3203C2.76319 19.1502 2.76319 18.8099 2.96706 18.2746C3.06973 17.9857 2.99346 17.6293 2.94213 17.3227C2.89959 16.9825 2.87466 16.7199 2.98613 16.5234C3.12106 16.2345 3.32346 16.1831 3.57133 16.0643C3.82653 15.9543 4.12426 15.8942 4.36186 15.6742V15.6654C4.58186 15.4351 4.74319 15.155 4.93973 14.9511C5.10106 14.781 5.26239 14.671 5.50879 14.671H5.51759C5.56159 14.671 5.60266 14.671 5.65399 14.6798C5.97666 14.7297 6.25679 14.9687 6.52959 15.3163L7.31133 16.7361H7.32013C7.52399 17.1863 7.96546 17.6454 8.33946 18.1294C8.71346 18.6398 9.00239 19.0915 8.97013 19.4641L8.96866 19.4655Z" fill="currentColor"/>'],
  appstore: ['Перейти в ', 
             'AppStore', 
             'appstore', 
             'https://redirect.appmetrica.yandex.com/serve/244294711257416556', 
             'https://apps.apple.com/app/id6469516890', 
             '', 
             '<path d="M4.25338 2.67078H17.7578C18.7745 2.67078 19.5994 3.49562 19.5994 4.51229V18.0168C19.5994 19.0334 18.7745 19.8583 17.7578 19.8583H4.25338C3.23671 19.8583 2.41187 19.0334 2.41187 18.0168V4.51229C2.41187 3.49562 3.23671 2.67078 4.25338 2.67078ZM14.727 16.1944C14.938 16.5627 15.4099 16.6855 15.7744 16.4745C16.1427 16.2635 16.2655 15.7916 16.0544 15.4271L15.5058 14.4795C14.8881 14.2915 14.3817 14.4373 13.9866 14.9169L14.727 16.1944ZM9.39812 14.1266H16.3767C16.7987 14.1266 17.144 13.7813 17.144 13.3593C17.144 12.9372 16.7987 12.592 16.3767 12.592H14.4201L11.911 8.24904L12.6975 6.89092C12.9085 6.52262 12.7819 6.05457 12.4174 5.84356C12.0491 5.63255 11.5811 5.75916 11.3701 6.12362L11.0286 6.71444L10.6872 6.12362C10.4762 5.75532 10.0043 5.63255 9.63982 5.84356C9.27152 6.05457 9.14875 6.52645 9.35976 6.89092L12.6515 12.592H10.269C9.49404 12.592 9.06051 13.5012 9.39812 14.1266ZM5.63452 14.1266H6.74711L5.99515 15.4271C5.78414 15.7954 5.91075 16.2635 6.27522 16.4745C6.64352 16.6855 7.11157 16.5589 7.32258 16.1944C8.58479 14.0115 9.52856 12.3694 10.1616 11.2799C10.8023 10.1673 10.3457 9.05471 9.8892 8.67873C9.38661 9.54961 8.63466 10.854 7.6295 12.592H5.63452C5.21251 12.592 4.86722 12.9372 4.86722 13.3593C4.86722 13.7851 5.21251 14.1266 5.63452 14.1266Z" fill="currentColor"/>'],
  playmarket: ['Перейти в ', 
               'Google Play', 
               'playmarket', 
               'https://redirect.appmetrica.yandex.com/serve/532525089422325047', 
               'https://play.google.com/store/apps/details?id=com.getcompass.android.enterprise', 
               '', 
               '<path d="M11.7677 11.03L3.46533 19.356C3.19031 19.0597 3.04436 18.6977 3.00496 18.2877C2.99812 18.2148 3.00054 18.1406 3.00054 18.0668C3.00054 13.3579 3.00054 8.64895 3.00054 3.94002C3.00054 3.45021 3.13724 3.01844 3.43558 2.67175L11.7677 11.03Z" fill="currentColor"/><path d="M12.4697 11.6851L15.3799 14.6051L13.3313 15.7052C10.8229 17.0517 8.31456 18.3985 5.80618 19.7455C5.3434 19.9946 4.86453 20.0736 4.35511 19.9249C4.33587 19.9201 4.31705 19.9137 4.29882 19.9059C4.28716 19.9003 4.27912 19.8882 4.28475 19.8938L12.4697 11.6851Z" fill="currentColor"/><path d="M15.3855 7.40097L12.4797 10.3157L4.28394 2.09687C4.79538 1.92836 5.29917 1.98077 5.78889 2.24361C7.6545 3.24662 9.52078 4.24829 11.3877 5.24861C12.6357 5.91862 13.8839 6.58824 15.1322 7.25745C15.2195 7.30461 15.3047 7.35541 15.3855 7.40097Z" fill="currentColor"/><path d="M13.1251 11.0171C14.1705 9.96896 15.2086 8.92725 16.264 7.86861L17.3987 8.47654C17.9169 8.7539 18.434 9.03287 18.9527 9.30942C19.6322 9.67225 20.0053 10.2366 20.0001 11.0091C19.9948 11.7815 19.6161 12.3374 18.9326 12.697C18.0758 13.1481 17.225 13.6109 16.3738 14.0717C16.2825 14.1213 16.2214 14.1406 16.1326 14.0515C15.1443 13.0526 14.1525 12.0564 13.1572 11.0631C13.1453 11.0487 13.1345 11.0333 13.1251 11.0171Z" fill="currentColor"/>'],
  huawei: ['Перейти в ', 
           'AppGallery', 
           'huawei', 
           'https://redirect.appmetrica.yandex.com/serve/244294713874627369', 
           'https://appgallery.huawei.com/?agc_click_id=465812443111623680#/app/C109414583', 
           '', 
           '<path d="M2.50012 18.4013V4.59358C2.51263 4.57017 2.52259 4.5455 2.52983 4.51997C2.62162 4.01137 2.87438 3.59588 3.31028 3.32495C3.54707 3.17773 3.83087 3.10634 4.09339 3.00037H17.9015C17.9153 3.00879 17.9281 3.02298 17.9428 3.0252C18.7232 3.12275 19.5028 3.84287 19.4997 4.94122C19.4877 9.31069 19.4952 13.6802 19.4926 18.0496C19.4959 18.2262 19.4788 18.4025 19.4416 18.5751C19.2363 19.4437 18.5104 19.994 17.5831 19.994C13.7448 19.994 9.90624 19.994 6.06756 19.994C5.46981 19.994 4.87029 20.0109 4.27564 19.9878C3.56082 19.9612 3.02604 19.6131 2.69967 18.9746C2.60788 18.7963 2.56664 18.5933 2.50012 18.4013ZM10.6434 12.0683L10.705 12.0448C10.7303 11.7442 10.76 11.444 10.78 11.1429C10.8638 9.86674 10.8859 8.59235 10.6633 7.32594C10.5848 6.87941 10.4744 6.44175 10.2709 6.03159C10.2239 5.9367 10.1649 5.90256 10.062 5.92872C9.89086 5.97306 9.71571 6.00099 9.5472 6.05287C9.251 6.14838 8.99132 6.33263 8.80334 6.58065C8.61535 6.82867 8.50815 7.12847 8.49626 7.43945C8.49538 7.46718 8.49497 7.49481 8.49504 7.52234C8.49602 7.93558 8.60224 8.33045 8.75522 8.71207C9.22704 9.88802 9.90239 10.9491 10.6039 11.996C10.619 12.0191 10.6305 12.0448 10.6434 12.0683ZM11.2926 12.0475L11.3396 12.0519C11.3713 12.0147 11.4009 11.9758 11.4283 11.9353C11.8579 11.2342 12.3014 10.5412 12.7107 9.82816C13.0291 9.273 13.2987 8.6899 13.4375 8.05802C13.5785 7.41462 13.4982 6.82709 12.9825 6.35662C12.7045 6.10387 12.3617 6.01917 12.0069 5.94069C11.8847 5.91379 11.8104 5.9308 11.7541 5.99171C11.7268 6.02119 11.7037 6.06093 11.6815 6.11096C11.4819 6.55926 11.3711 7.03062 11.2979 7.51173C11.0886 8.87569 11.1374 10.2436 11.2487 11.6116C11.2497 11.6272 11.2508 11.6429 11.252 11.6585C11.2523 11.6621 11.2526 11.6657 11.2529 11.6694C11.2631 11.7961 11.2795 11.922 11.2926 12.0479V12.0475ZM10.2691 12.3361C10.1067 11.9856 9.9362 11.6391 9.7579 11.2969C9.03539 9.90995 8.18416 8.59301 7.21497 7.36358C7.21338 7.36156 7.21179 7.35955 7.2102 7.35753C7.20993 7.3572 7.20967 7.35686 7.20941 7.35653C6.87107 7.70063 6.60323 8.05492 6.44093 8.48105C6.20325 9.1045 6.31589 9.66321 6.76376 10.1536C6.77348 10.1641 6.78329 10.1744 6.79317 10.1847C6.88285 10.2779 6.97913 10.3646 7.08126 10.4441C7.11879 10.4741 7.15651 10.5038 7.1944 10.5332C7.95317 11.122 8.78274 11.5921 9.62783 12.0364C9.8006 12.1272 9.97402 12.217 10.1476 12.3064C10.1872 12.3198 10.2279 12.3299 10.2691 12.3366V12.3361ZM14.7837 7.35077C13.5709 8.90895 12.5484 10.5398 11.7599 12.3171L11.7601 12.3171C11.8246 12.3105 11.8869 12.2904 11.9431 12.2581C12.072 12.1883 12.2013 12.119 12.3306 12.0497C12.6635 11.8714 12.9965 11.693 13.3235 11.5043C13.9598 11.1371 14.586 10.7505 15.1292 10.2499C15.4045 9.99533 15.6001 9.69114 15.648 9.31335C15.6546 9.26082 15.6589 9.2093 15.6611 9.15873C15.6612 9.15731 15.6612 9.15589 15.6613 9.15447C15.6908 8.42247 15.2653 7.88778 14.7837 7.35077ZM9.96359 12.7224L9.97955 12.6758C8.58007 11.757 7.11584 10.9465 5.64275 10.1439C5.2206 11.3588 6.14605 12.7024 7.40452 12.7277C7.9763 12.739 8.54807 12.7378 9.11985 12.7367C9.35468 12.7362 9.58952 12.7357 9.82435 12.7361C9.87091 12.7361 9.91703 12.7268 9.96359 12.7224ZM16.3491 10.1434C16.3486 10.1437 16.3481 10.144 16.3476 10.1442C14.8701 10.955 13.4091 11.76 12.0242 12.6989C12.0634 12.7218 12.1076 12.7346 12.1528 12.736C12.1536 12.736 12.1543 12.736 12.1551 12.736C12.158 12.7361 12.161 12.7361 12.1639 12.7361C12.1906 12.7361 12.2172 12.7361 12.2439 12.7361C12.4054 12.7362 12.567 12.7365 12.7286 12.7367C13.0514 12.7373 13.3742 12.7378 13.6971 12.7368C13.7118 12.7367 13.7265 12.7367 13.7412 12.7366C13.8846 12.7361 14.028 12.7352 14.1713 12.7339C14.4135 12.7339 14.6591 12.7339 14.8968 12.686C16.0268 12.4586 16.7354 11.23 16.3476 10.1442C16.3475 10.144 16.3474 10.1437 16.3473 10.1434H16.3491ZM6.53539 13.1055C6.72606 13.4478 6.95 13.7214 7.25686 13.9196C7.50061 14.0767 7.75344 14.1567 8.00925 14.13C8.0127 14.1296 8.01615 14.1292 8.0196 14.1288C8.15595 14.113 8.29312 14.0668 8.43019 13.9857C8.7927 13.7701 9.15007 13.5439 9.50721 13.3177C9.63062 13.2395 9.754 13.1614 9.87756 13.0838C9.89663 13.0713 9.90594 13.0434 9.94408 12.9871L6.53539 13.1055ZM12.034 12.9866C12.0538 13.0111 12.0674 13.0294 12.0777 13.0431C12.0936 13.0645 12.1015 13.0751 12.112 13.0815C12.23 13.1548 12.348 13.2282 12.4659 13.3016C12.8528 13.5425 13.2399 13.7834 13.6304 14.0189C13.8091 14.1237 14.0201 14.1592 14.2232 14.1187C14.813 14.0141 15.1544 13.6052 15.4648 13.1055L12.034 12.9866ZM11.2438 15.2069C11.2494 15.2276 11.2541 15.2464 11.2584 15.2637C11.2664 15.2955 11.2732 15.3226 11.2824 15.3487C11.339 15.512 11.3961 15.675 11.4532 15.8381C11.5786 16.1961 11.7039 16.5541 11.8242 16.9136C11.8437 16.9719 11.8684 17.0054 11.9036 17.0233C11.9328 17.0381 11.969 17.0422 12.0154 17.0408C12.1178 17.0377 12.1883 17.0351 12.2256 16.9145C12.3182 16.6138 12.4269 16.3181 12.5297 16.021C12.5462 15.974 12.5679 15.9292 12.6011 15.8489C12.7342 16.2303 12.8548 16.5677 12.9639 16.9091C13.0007 17.024 13.0659 17.04 13.1705 17.0422C13.2008 17.0428 13.2273 17.0409 13.2507 17.0352C13.2757 17.0291 13.297 17.0185 13.3153 17.0019C13.3168 17.0005 13.3183 16.9991 13.3197 16.9976C13.3412 16.9764 13.3583 16.9463 13.3723 16.9043C13.547 16.3806 13.7332 15.8609 13.9142 15.3394C13.9266 15.2956 13.9368 15.2512 13.9448 15.2064C13.9443 15.2064 13.9438 15.2065 13.9434 15.2065C13.9142 15.2089 13.8849 15.2097 13.8557 15.2088C13.8551 15.2088 13.8546 15.2087 13.8541 15.2087C13.841 15.2083 13.8279 15.2075 13.8148 15.2064C13.7951 15.2026 13.7765 15.2001 13.7589 15.1989C13.6105 15.1886 13.5392 15.27 13.4956 15.4326C13.4334 15.6662 13.3567 15.8962 13.2753 16.1401C13.2405 16.2443 13.2049 16.3511 13.1692 16.4617C13.169 16.461 13.1687 16.4603 13.1685 16.4596C13.0397 16.0707 12.9207 15.7224 12.8104 15.3714C12.7767 15.2634 12.7393 15.2031 12.614 15.1987C12.6091 15.1985 12.6041 15.1984 12.5989 15.1984C12.4615 15.1984 12.4216 15.2632 12.3901 15.3758C12.3521 15.5065 12.308 15.6354 12.2639 15.7643C12.2437 15.8235 12.2235 15.8827 12.2038 15.942C12.169 16.0464 12.1345 16.1511 12.1 16.2558C12.0827 16.3082 12.0655 16.3606 12.0482 16.413C12.0479 16.4123 12.0477 16.4117 12.0474 16.4111C11.9045 16.0606 11.7794 15.7031 11.6726 15.3399C11.6495 15.2625 11.6166 15.2226 11.5607 15.2099C11.5393 15.2051 11.5147 15.2043 11.4859 15.2069C11.4353 15.2103 11.3849 15.2093 11.3309 15.2081C11.3307 15.2081 11.3304 15.2081 11.3302 15.2081C11.3021 15.2075 11.273 15.2069 11.2425 15.2069H11.2438ZM5.56781 15.2135V17.0267H5.93231H5.9332V16.3025V16.3017H6.77573V17.0244H7.13402V15.2166H6.76908V15.9354H5.92655V15.9345V15.2135H5.56781ZM15.6028 15.2064H14.2725V15.2077V17.0244H15.6365H15.6387V16.7016H14.6365V16.2418V16.2405H15.2972H15.2994V15.9075H14.6383V15.5359H15.601L15.601 15.5329L15.6028 15.2064ZM7.67413 15.2139C7.67413 15.327 7.67253 15.4386 7.67076 15.5491C7.6705 15.5649 7.67024 15.5807 7.66999 15.5964C7.66539 15.8774 7.66091 16.1516 7.67989 16.424C7.70739 16.8187 7.9903 17.0479 8.41112 17.0657C8.42613 17.0663 8.44103 17.0666 8.45579 17.0667C8.46635 17.0667 8.47683 17.0666 8.48725 17.0663C8.87068 17.0567 9.15994 16.8473 9.20531 16.4773C9.24966 16.1012 9.23147 15.7172 9.23946 15.3368C9.23797 15.2953 9.23397 15.254 9.22748 15.2131H8.87007C8.87007 15.3971 8.87007 15.5727 8.87007 15.7478C8.86932 15.7987 8.8693 15.8496 8.86934 15.9006C8.86934 15.9051 8.86934 15.9097 8.86935 15.9143C8.86947 16.0654 8.8696 16.2165 8.85229 16.3654C8.85187 16.369 8.85144 16.3726 8.85101 16.3762C8.8234 16.6009 8.67618 16.7094 8.45099 16.7086C8.44687 16.7086 8.44272 16.7086 8.43855 16.7085C8.43636 16.7084 8.43416 16.7083 8.43196 16.7083C8.20581 16.7012 8.05637 16.5708 8.0444 16.3389C8.02976 16.0635 8.03597 15.7868 8.03376 15.5106C8.03376 15.4135 8.03376 15.3164 8.03376 15.2139H7.67413ZM11.3577 17.032C11.3418 16.9876 11.332 16.9508 11.317 16.9167C11.085 16.3846 10.8469 15.8582 10.623 15.3244C10.5876 15.2398 10.5392 15.2165 10.4799 15.2082C10.46 15.2054 10.4388 15.2043 10.4165 15.2032C10.407 15.2027 10.3974 15.2022 10.3875 15.2015C10.278 15.1949 10.2194 15.2304 10.1747 15.3346C10.0178 15.6998 9.85719 16.0636 9.69653 16.4274C9.62551 16.5882 9.55448 16.7491 9.48379 16.91C9.46893 16.9492 9.45626 16.9893 9.44585 17.0299C9.44579 17.0301 9.44572 17.0304 9.44565 17.0306C9.79109 17.0537 9.7871 17.0515 9.93609 16.7584C9.95275 16.7312 9.97516 16.708 10.0017 16.6904C10.0283 16.6727 10.0584 16.6611 10.09 16.6564C10.2771 16.6435 10.466 16.6595 10.6531 16.6484C10.7024 16.6455 10.7435 16.65 10.777 16.6639C10.8295 16.6857 10.863 16.7304 10.8793 16.8054C10.8956 16.8813 10.9234 16.9395 10.9629 16.9799C10.9634 16.9804 10.9639 16.9808 10.9643 16.9813C11.0259 17.0432 11.1155 17.0626 11.234 17.0395C11.2745 17.0343 11.3152 17.0317 11.356 17.0315L11.3577 17.032ZM16.1025 15.2139V17.0253H16.4435V15.2139H16.1025Z" fill="currentColor"/><path d="M10.6687 16.3118H10.1188C10.1815 16.1616 10.2427 16.0185 10.3083 15.8651C10.3354 15.8016 10.3633 15.7363 10.3924 15.668C10.4913 15.8985 10.5769 16.0972 10.6687 16.3118Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75522 8.71207C8.6022 8.33036 8.49597 7.93695 8.49504 7.52234C8.49602 7.93558 8.60224 8.33045 8.75522 8.71207Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2926 12.0479L11.3391 12.0524C11.3393 12.0522 11.3394 12.0521 11.3396 12.0519L11.2926 12.0475V12.0479ZM11.2482 11.6121C11.2494 11.6275 11.2507 11.643 11.252 11.6585C11.2508 11.6429 11.2497 11.6272 11.2487 11.6116C11.1374 10.2436 11.0886 8.87569 11.2979 7.51173C11.3711 7.03062 11.4819 6.55926 11.6815 6.11096C11.7037 6.06093 11.7268 6.02119 11.7541 5.99171C11.7266 6.02123 11.7034 6.06114 11.681 6.11144C11.4815 6.55973 11.3711 7.03109 11.2974 7.5122C11.0881 8.87616 11.1369 10.2441 11.2482 11.6121Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7601 12.3171L11.7599 12.3175C11.8245 12.311 11.8869 12.2909 11.9431 12.2585C12.0776 12.1855 12.2126 12.1131 12.3475 12.0408C12.6747 11.8654 13.002 11.6899 13.3235 11.5047C13.9598 11.1371 14.5859 10.7527 15.1292 10.2503C15.4045 9.99574 15.6001 9.69156 15.648 9.31376C15.6546 9.26109 15.659 9.20943 15.6611 9.15873C15.6589 9.2093 15.6546 9.26082 15.648 9.31335C15.6001 9.69114 15.4045 9.99533 15.1292 10.2499C14.586 10.7505 13.9598 11.1371 13.3235 11.5043C12.9965 11.693 12.6635 11.8714 12.3306 12.0497C12.2013 12.119 12.072 12.1883 11.9431 12.2581C11.8869 12.2904 11.8246 12.3105 11.7601 12.3171Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3476 10.1442C16.3475 10.144 16.3474 10.1437 16.3473 10.1434C14.8693 10.9544 13.4077 11.7579 12.0224 12.6988C12.0621 12.7221 12.107 12.7348 12.1528 12.736C12.1076 12.7346 12.0634 12.7218 12.0242 12.6989C13.4091 11.76 14.8701 10.955 16.3476 10.1442ZM13.7412 12.7366C13.7265 12.7367 13.7118 12.7367 13.6971 12.7368C13.3742 12.7378 13.0514 12.7373 12.7286 12.7367C12.567 12.7365 12.4054 12.7362 12.2439 12.7361C12.3781 12.7363 12.5124 12.7365 12.6466 12.7367C13.0115 12.7374 13.3764 12.738 13.7412 12.7366Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.034 12.9866L12.0326 12.9866C12.0528 13.0116 12.0665 13.03 12.0769 13.0439C12.0925 13.0648 12.1003 13.0753 12.1107 13.082C12.2287 13.1552 12.3466 13.2286 12.4645 13.302C12.8514 13.5429 13.2385 13.7839 13.629 14.0194C13.8082 14.1243 14.0197 14.1597 14.2232 14.1187C14.0201 14.1592 13.8091 14.1237 13.6304 14.0189C13.2399 13.7834 12.8528 13.5425 12.4659 13.3016C12.348 13.2282 12.23 13.1548 12.112 13.0815C12.1015 13.0751 12.0936 13.0645 12.0777 13.0431C12.0674 13.0294 12.0538 13.0111 12.034 12.9866Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.49982 13.3225C9.62565 13.2428 9.75147 13.163 9.87756 13.0838C9.754 13.1614 9.63062 13.2395 9.50721 13.3177C9.15007 13.5439 8.7927 13.7701 8.43019 13.9857C8.79111 13.7717 9.14552 13.5471 9.49982 13.3225ZM8.0196 14.1288C8.01615 14.1292 8.0127 14.1296 8.00925 14.13C7.75344 14.1567 7.50061 14.0767 7.25686 13.9196C7.50305 14.0794 7.75955 14.1593 8.0196 14.1288Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.23667 12.737C9.43256 12.7366 9.62845 12.7361 9.82435 12.7361C9.58952 12.7357 9.35468 12.7362 9.11985 12.7367C8.54807 12.7378 7.9763 12.739 7.40452 12.7277C8.01524 12.7398 8.62595 12.7384 9.23667 12.737Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.92565 15.2135H5.56603V17.0275H5.93231V17.0267H5.56781V15.2135L5.92565 15.2135ZM5.92655 15.9345V15.9354H6.76908V15.2166H7.13402L6.76818 15.2166V15.9345H5.92655ZM7.13402 17.0244H6.77573V16.3017H5.9332V16.3025H6.77483V17.0253H7.13402L7.13402 17.0244Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4799 15.2082C10.4582 15.2047 10.4351 15.2035 10.4108 15.2021C10.4024 15.2016 10.3939 15.2012 10.3853 15.2006C10.2758 15.1944 10.2168 15.2299 10.1725 15.3336C10.0157 15.6989 9.855 16.0627 9.69435 16.4265C9.62332 16.5873 9.55229 16.7481 9.4816 16.9091C9.46664 16.9486 9.45391 16.9888 9.44346 17.0297C9.44426 17.0298 9.44506 17.0298 9.44585 17.0299C9.45626 16.9893 9.46893 16.9492 9.48379 16.91C9.55448 16.7491 9.62551 16.5882 9.69653 16.4274C9.85719 16.0636 10.0178 15.6998 10.1747 15.3346C10.2194 15.2304 10.278 15.1949 10.3875 15.2015C10.3974 15.2022 10.407 15.2027 10.4165 15.2032C10.4388 15.2043 10.46 15.2054 10.4799 15.2082ZM10.8771 16.8045C10.8946 16.881 10.923 16.9394 10.9629 16.9799C10.9234 16.9395 10.8956 16.8813 10.8793 16.8054C10.863 16.7304 10.8295 16.6857 10.777 16.6639C10.8282 16.686 10.8611 16.7305 10.8771 16.8045ZM10.1188 16.3118C10.1815 16.1616 10.2427 16.0185 10.3083 15.8651C10.3354 15.8016 10.3633 15.7363 10.3924 15.668C10.2931 15.9012 10.2088 16.0994 10.1188 16.3118Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.601 15.5372V15.5329L15.601 15.5359H14.6383V15.9075L14.6383 15.5372H15.601ZM15.2972 16.2405H14.6365V16.2418H15.2972V16.2405ZM15.6365 17.0244V17.0257H14.2702V15.2077H14.2725V17.0244H15.6365Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.1025 15.2139L16.1016 15.214V17.0253H16.4426L16.1025 17.0253V15.2139Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2691 12.3366C10.2283 12.3303 10.1881 12.3206 10.1489 12.3078C9.97493 12.2179 9.80107 12.1277 9.62783 12.0364C9.8006 12.1272 9.97402 12.217 10.1476 12.3064C10.1872 12.3198 10.2279 12.3299 10.2691 12.3366ZM7.1944 10.5332C7.15651 10.5038 7.11879 10.4741 7.08126 10.4441C6.97913 10.3646 6.88285 10.2779 6.79317 10.1847C6.88322 10.2784 6.97994 10.3656 7.08256 10.4454C7.11966 10.475 7.15694 10.5042 7.1944 10.5332ZM7.2102 7.35753C7.21179 7.35955 7.21338 7.36156 7.21497 7.36358L7.21072 7.357L7.2102 7.35753Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.67076 15.5491C7.67253 15.4386 7.67413 15.327 7.67413 15.2139L8.03156 15.2139H7.67238C7.67238 15.3443 7.67017 15.4724 7.66799 15.599C7.66318 15.8776 7.65849 16.1494 7.6777 16.424C7.70564 16.8236 7.98456 17.0479 8.40893 17.0657C8.42469 17.0663 8.44032 17.0667 8.45579 17.0667C8.44103 17.0666 8.42613 17.0663 8.41112 17.0657C7.9903 17.0479 7.70739 16.8187 7.67989 16.424C7.66091 16.1516 7.66539 15.8774 7.66999 15.5964C7.67024 15.5807 7.6705 15.5649 7.67076 15.5491ZM8.43855 16.7085C8.44272 16.7086 8.44687 16.7086 8.45099 16.7086C8.67618 16.7094 8.8234 16.6009 8.85101 16.3762C8.85144 16.3726 8.85187 16.369 8.85229 16.3654L8.84881 16.3761C8.86741 16.2238 8.86728 16.069 8.86715 15.9143C8.86715 15.9111 8.86715 15.908 8.86715 15.9048L8.86934 15.9006C8.8693 15.8496 8.86932 15.7987 8.87007 15.7478V15.2131L9.22529 15.2131H8.86788C8.86788 15.2751 8.86818 15.3358 8.86848 15.396C8.86907 15.5143 8.86965 15.6302 8.86788 15.7478C8.86711 15.8001 8.86711 15.8524 8.86715 15.9048L8.46008 16.691L8.43855 16.7085ZM8.46008 16.691L8.45099 16.7086C8.67494 16.7087 8.82129 16.6002 8.84881 16.3761L8.46008 16.691Z" fill="currentColor"/>']
}

//Создаем выпадающий список с ссылками 
const downloadLinksList = document.createElement('div');
downloadLinksList.classList.add('cta__dd-list-inner-wrap');
const downloadLinksOtherWrap = document.createElement('div');
downloadLinksOtherWrap.classList.add('cta__dd-list-other-wrap');
const downloadLinksOtherLink = document.createElement('a');
downloadLinksOtherLink.classList.add('cta__list-item', 'cta__list-other-button', 'w-inline-block');
downloadLinksOtherLink.href = "#";
const downloadLinksOtherIconWrap = document.createElement('div')
downloadLinksOtherIconWrap.classList.add('cta__list-item-icon', 'is--vector-full', 'w-embed');
const downloadLinksOtherIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
downloadLinksOtherIcon.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 15.9998H16.3334C17.0698 15.9998 17.6667 15.4029 17.6667 14.6665V7.99984C17.6667 7.26346 17.0698 6.6665 16.3334 6.6665H5.66671C4.93033 6.6665 4.33337 7.26346 4.33337 7.99984V14.6665C4.33337 15.4029 4.93033 15.9998 5.66671 15.9998H10.5V17.6665H7.00004C6.7239 17.6665 6.50004 17.8904 6.50004 18.1665C6.50004 18.4426 6.7239 18.6665 7.00004 18.6665H11H15C15.2762 18.6665 15.5 18.4426 15.5 18.1665C15.5 17.8904 15.2762 17.6665 15 17.6665H11.5V15.9998Z" fill="currentColor"></path>';
downloadLinksOtherIcon.setAttribute('width', '22');
downloadLinksOtherIcon.setAttribute('height', '22');
downloadLinksOtherIcon.setAttribute('viewBox', '0 0 22 22');
const downloadLinksOtherArrowWrap = document.createElement('div')
downloadLinksOtherArrowWrap.classList.add('cta__list-item-icon', 'is--vector-full', 'is--arrow', 'w-embed');
const downloadLinksOtherArrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
downloadLinksOtherArrow.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.1263 13.0612C24.5412 13.4761 24.5412 14.1489 24.1263 14.5638L17.7513 20.9388C17.3364 21.3537 16.6636 21.3537 16.2487 20.9388L9.8737 14.5638C9.45877 14.1489 9.45877 13.4761 9.8737 13.0612C10.2886 12.6463 10.9614 12.6463 11.3763 13.0612L17 18.6849L22.6237 13.0612C23.0386 12.6463 23.7114 12.6463 24.1263 13.0612Z" fill="currentColor"></path>';
downloadLinksOtherArrow.setAttribute('width', '34');
downloadLinksOtherArrow.setAttribute('height', '34');
downloadLinksOtherArrow.setAttribute('viewBox', '0 0 34 34');
downloadLinksOtherArrowWrap.appendChild(downloadLinksOtherArrow);
downloadLinksOtherIconWrap.appendChild(downloadLinksOtherIcon);
const downloadOtherLinksTextNode = document.createTextNode('Другие платформы');
downloadLinksOtherLink.appendChild(downloadLinksOtherIconWrap);
downloadLinksOtherLink.appendChild(downloadOtherLinksTextNode);
downloadLinksOtherLink.appendChild(downloadLinksOtherArrowWrap);
downloadLinksOtherWrap.appendChild(downloadLinksOtherLink);
downloadLinksList.appendChild(downloadLinksOtherWrap);

//Скрываем кнопку при клике на другие платформы
downloadLinksOtherLink.addEventListener('click', () => {
  downloadLinksOtherWrap.classList.add('is--open');
})

var downloadLinksNodes = [];

for (key in downloadLinksData) {
  const downloadLink = createDownloadLink(downloadLinksData[key]);
  downloadLinksNodes.push(downloadLink.querySelector('.cta__list-item'));
  downloadLinksList.appendChild(downloadLink);
}

const ctaDropdowns = document.querySelectorAll('.cta__dropdown');
const allDownloadDropdowns = [
  ...ctaDropdowns,
  ...document.querySelectorAll('.cta__vendor-dd'),
  ...document.querySelectorAll('.footer__item-download-dd'),
  ...document.querySelectorAll('.blog-footer__mac-dropdown'),
  ...document.querySelectorAll('.download__cta-dd'),
  ...document.querySelectorAll('.fast-work__platform-dd')

]

allDownloadDropdowns.forEach(downloadDropdown => {
  downloadDropdown.querySelector('.w-dropdown-toggle').addEventListener('mousedown', (e) => {
    if (!downloadDropdown.classList.contains('w-open')) {
        downloadLinksOtherWrap.classList.remove('is--open');
        allDownloadDropdowns.forEach(downloadOtherDropdown => {
            if (downloadOtherDropdown != downloadDropdown) {
                downloadOtherDropdown.querySelector('.w-dropdown-list').classList.remove('w--open');
            }
        })
        downloadDropdown.querySelector('.cta__dd-list-wrap').appendChild(downloadLinksList);
        e.preventDefault;
        return false;
    }
  })
})

if (['iOS', 'Android', 'Huawei'].indexOf(os) + 1) {
	body.classList.add('is--touch-device');
	document.querySelector('.page-wrapper').classList.remove('is--overflow-clip');
    
    Array.prototype.forEach.call(ctaDropdowns, ctaDropdown => {
        ctaDropdown.classList.add('is--hidden-list');
        ctaDropdown.addEventListener('click', ()=> {
            switch (os) {
			case 'iOS':
				ctaDropdown.querySelector('.appstore').click();
				break;
			case 'Android':
				ctaDropdown.querySelector('.playmarket').click();
				break;
			case 'Huawei':
				ctaDropdown.querySelector('.huawei').click();
				break;
		}
        })
    })
}

//Определеяем систему и добавляем класс в body
switch (os) {
	case 'iOS':
		body.classList.add('is--ios');
		break;
	case 'Android':
		body.classList.add('is--android');
		break;
	case 'Windows':
        body.classList.add('is--windows');
		break;
	case 'Linux':
        body.classList.add('is--linux');
		break;
	case 'OS X':
        body.classList.add('is--mac');
		break;
	case 'Huawei':
		body.classList.add('is--android');
		break;
}

const instructionLinks = {
    appstore: '/download/appstore',
    playmarket: '/download/playmarket',
    huawei: '/download/huawei',
    macintel: '/download/mac-os-intel',
    macapple: '/download/mac-os-m1-m2',
    windows: '/download/windows',
    linuxdeb: '/download/ubuntu',
    linuxtar: '/download/linux'
};

const downloadLinks = [
  ...downloadLinksNodes,
  ...document.querySelectorAll('.appstore, .playmarket, .huawei, .macintel, .macapple, .windows, .linuxdeb, .linuxtar, [data-platform="windows"]')
];

const mobileClassNames = ['appstore', 'playmarket', 'huawei'];
const mobileBodyClassNames = ['is--ios', 'is--android', 'is--huawei'];
const url = new URL(location);
const urlParams = url.searchParams;
const startDownload = urlParams.get('start-download') || '';
const platformClass = urlParams.get('platform') || '';
const sourceID = urlParams.get('source_id') || '';
const utmTag = urlParams.get('utm_tag') || '';


//Удаляем параметры URL
urlParams.delete("platform");
urlParams.delete("start-download");
if (startDownload)
    window.history.pushState({}, '', url.toString());

Array.prototype.forEach.call(downloadLinks, downloadLink => {
  //Цели яндекс на клик по стору
  downloadLink.addEventListener('click', (e) => {
    if (getPage() !== 'on-premise' && getPage() !== 'download') {
      for (platform in instructionLinks) {
        if (downloadLink.classList.contains(platform)) {
          switch (platform) {
            case 'appstore':
              ym(ymetrikaID, 'reachGoal', '12');
              break;
            case 'huawei':
              ym(ymetrikaID, 'reachGoal', '13');
              break;
            case 'playmarket':
              ym(ymetrikaID, 'reachGoal', '14');
              break;
            case 'windows':
              ym(ymetrikaID, 'reachGoal', '15');
              break;
            case 'macintel':
            case 'macapple':
              ym(ymetrikaID, 'reachGoal', '16');
              break;
            case 'linuxdeb':
            case 'linuxtar':
              ym(ymetrikaID, 'reachGoal', '17');
              break;
          }
        }
      }
    }
    if (downloadLink.closest('footer')) {
      ym(ymetrikaID, 'reachGoal', '23');
    }
    if (getPage() == 'home') {
      for (platform in instructionLinks) {
        if (downloadLink.classList.contains(platform)) {
          switch (platform) {
            case 'windows':
            case 'macintel':
            case 'macapple':
            case 'linuxdeb':
            case 'linuxtar':
              ym(ymetrikaID, 'reachGoal', '52');
              break;
          }
        }
      }
      ym(ymetrikaID, 'reachGoal', '51'); //Переход в стор
      _tmr.push({
        type: 'reachGoal',
        id: 3381982,
        goal: 'click'
      });
    } else if (getPage() == 'on-premise') {
      ym(ymetrikaID, 'reachGoal', '305'); //Переход в стор
    }
  });

  if (getPage() !== 'on-premise') {
    openInstruction(downloadLink);
  }

  if (!mobileClassNames.some(className => downloadLink.classList.contains(className)) &&
    !mobileBodyClassNames.some(className => document.body.classList.contains(className))) {
    downloadLink.setAttribute('download', 'download');
  } else if (!mobileClassNames.some(className => downloadLink.classList.contains(className)) &&
    mobileBodyClassNames.some(className => document.body.classList.contains(className))) {
    downloadLink.removeAttribute('download');
    downloadLink.setAttribute('build-link', downloadLink.getAttribute('href'));
    downloadLink.setAttribute('href', '#');
  }
});

window.addEventListener('load', () => {
    if (startDownload) {
        downloadLinksNodes.forEach(link => {
          if (link.classList.contains(platformClass)) {
            location.href = link.getAttribute('href');
          }
        })
    }
});

function openInstruction(downloadLink) {
    downloadLink.addEventListener('click', (e) => {
        var instructionLink = '';
        for (platform in instructionLinks) {
            if (downloadLink.classList.contains(platform) 
                && window.location.pathname.indexOf(instructionLinks[platform]) < 0
                && (!mobileBodyClassNames.some(className => document.body.classList.contains(className)) 
                    || mobileClassNames.some(className => downloadLink.classList.contains(className)))) {
                
                e.preventDefault();
                instructionLink = window.location.origin + instructionLinks[platform] + '/?start-download=true&platform=' + platform;
                window.location.href = instructionLink
            } 
        }
        //На странице скачивания повторно нажат download
        if ( getPage() == 'download' ) {
            ym(ymetrikaID, 'reachGoal', '76');
        }
    })
}
        
if ( mobileBodyClassNames.some(className => document.body.classList.contains(className)) ) {
        
        var closingMessageTimeout = setTimeout(function () {}, 0);
        const clipboard = new ClipboardJS('[build-link]', {
            text: function (trigger) {
                return trigger.getAttribute('build-link');
            }
        });

        clipboard.on('success', function (e) {
            showCopyNote();
            e.clearSelection();
        });

        clipboard.on('error', function (e) {
            showCopyNote('Не получилось скопировать ссылку. Возможно, ваш&nbsp;браузер устарел.', true);
        });
}

//Центруем всплывашку платформ на мобилке
const setCenterCTAListArrow = (dropdown) => {
    const hasArrowCTALists = document.querySelectorAll('.cta__dd-list.is--has-arrow, .cta__dd-list.is--mobile-has-arrow');
    Array.prototype.forEach.call(hasArrowCTALists, CTAList => {
        CTAList.style.setProperty('--popupLeft', 0);
        CTAList.style.setProperty('--arrowLeft', 0);
        const CTAListRect = CTAList.getBoundingClientRect();
        const CTADropdown = CTAList.closest('.w-dropdown');
        const CTADropdownList = CTADropdown.querySelector('.w-dropdown-list');
        const CTAListInnerWrap = CTAList.querySelector('.cta__dd-list-wrap');
        const CTATextCenterArrow = CTADropdown.querySelector('.cta__dd-center-arrow');
        const CTATextCenterArrowRect = CTATextCenterArrow.getBoundingClientRect();
    
            if (window.innerWidth < 768) {
                if (CTAListRect.x != 0)
                    CTADropdownList.style.setProperty('--popupLeft', `-${CTAListRect.x}px`);
                    CTADropdownList.style.setProperty('--arrowLeft', `${CTATextCenterArrowRect.x - CTAListInnerWrap.getBoundingClientRect().x + CTATextCenterArrowRect.width / 2}px`);
            } else {
                CTADropdownList.style.removeProperty('left');
                CTADropdownList.style.setProperty('--arrowLeft', `${CTATextCenterArrowRect.x - CTAListRect.x + CTATextCenterArrowRect.width / 2}px`);
            }
    });
}

const CTADropdowns = document.querySelectorAll('.w-dropdown');
Array.prototype.forEach.call(CTADropdowns, dropdown => {
    const dropdownToggle = dropdown.querySelector('.w-dropdown-toggle');
    dropdownToggle.addEventListener('click', (e) => {
        if (!dropdownToggle.classList.contains('w--open'))
            setCenterCTAListArrow(dropdown);
    }) 
});

//Маска для инпутов (телефон)
function addInputPhoneMask() {
	const phoneInputs = document.querySelectorAll("input[data-tel-input]");
	const regExp = /\D/g;
	const getInputNumbersValue = (input) => input.value.replace(regExp, "");

	const onInputHandler = (event) => {
		const input = event.target;
		let inputNumbersValue = getInputNumbersValue(input);
		let formattedInputValue = "";
		let prevRawNumber = "";
		// положение каретки относительно численных значений
		let prevNumberCaretPosition = 0;
		// количество выделенных символов в ренже
		let selectedNumberCount = 0;
		const {
			selectionEnd,
			selectionStart
		} = input;

		if (!inputNumbersValue) {
			input.value = "";
			return;
		}

		if (input.value.length !== selectionStart) {
			if (event.data && regExp.test(event.data)) {
				input.value = inputNumbersValue;
			}
		}
		var inputSelectionStart = selectionStart,
			inputSelectionEnd = selectionEnd;
		if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
			if (inputNumbersValue[0] === "9" && os == "iOS") {
				inputNumbersValue = `7${inputNumbersValue}`;
			}

			const firstSymbols =
				(inputNumbersValue[0] == "8" || "7") && inputNumbersValue[0] !== "9" ?
				"+7" :
				"+";
			if (inputNumbersValue[0] === "9" && os !== "iOS") {
				formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
			} else {
				formattedInputValue = `${firstSymbols} `;
				if (inputNumbersValue.length > 1) {
					formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
				}
				if (inputNumbersValue.length >= 5) {
					formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
				}
				if (inputNumbersValue.length >= 8) {
					formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
				}
				if (inputNumbersValue.length >= 10) {
					formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
				}
				if (inputNumbersValue.length >= 12) {
					formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
				}
			}
		} else {
			formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
		}

		// получим новое значение каретки
		const newCaretPosition = getNewCaretPosition(
			inputNumbersValue,
			formattedInputValue
		);

		// записываем новое значение
		input.value = formattedInputValue;

		// устанавливаем каретку
		input.setSelectionRange(newCaretPosition, newCaretPosition);
	};

	const onKeyDownHanler = (event) => {
		const input = event.target;
		const inputValue = input.value.replace(/\D/g, "");
		const DELETE_KEY_CODE = 8;
		if (event.keyCode === DELETE_KEY_CODE && inputValue.length === 1) {
			input.value = "";
		}
        //if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode !== DELETE_KEY_CODE) {
        //    return event.preventDefault();
        //}
	};

	const onPasteHandler = (event) => {
		const input = event.target;
		const inputNumbersValue = getInputNumbersValue(input);
		const pasted = event.clipboardData || window.Clipboard;
		if (pasted) {
			const pastedText = pasted.getData("Text");
			if (regExp.test(pastedText)) {
				input.value = inputNumbersValue;
			}
		}
	};

	const onFocusSelectionEnd = (event) => {
		const input = event.target;
		if (!input.classList.contains("focus"))
			setTimeout(() => {
				input.selectionStart = input.value.length;
			}, 100);
		input.classList.add("focus");
	};

	const onFocusoutSelectionEnd = (event) => {
		const input = event.target;
		input.classList.remove("focus");
	};

	const onBeforeInput = (event) => {
		// если выделили сколько-то символов, сначала берем все символы в выделении и убираем пробелы
		// так мы поймем сколько цифр изменилось
		// не используем window.getSelection(), потому что в этот момент оно уже схлопнулось
		selectedNumberCount = Math.abs(
			event.target.value
			.slice(event.target.selectionStart, event.target.selectionEnd)
			.replace(/\s/g, "").length
		);

		// сохраняем предыдущее значени инпута телефона без символов
		prevRawNumber = event.target.value.replace(/\D/g, "");

		// берем все числа до каретки
		prevNumberCaretPosition = event.target.value
			.slice(0, event.target.selectionStart)
			.replace(/\D/g, "").length;
	};

	const getNewCaretPosition = (newRawNumber, maskedValue) => {
		// массив номера с символами
		const maskedValueArray = maskedValue.split("");

		// текущее положение каретки
		let caretPosition = 0;

		// получаем желаемое положение каретки, относительно строки номера без форматирования
		const newCaretPosition =
			prevNumberCaretPosition +
			(newRawNumber.length - prevRawNumber.length + selectedNumberCount);

		// актуальный индекс позиции каретки, относительно форматированной строки
		let i;

		// итерируем по строке с символами
		for (i = 0; i <= maskedValueArray.length - 1; i++) {
			// если мы достигли желаемой позиции каретки
			if (caretPosition === newCaretPosition) {
				// вернем индекс символа с учетом форматирования
				return i;
			}

			/**
			 * Если это не символ, то увеличиваем значение каретки.
			 * Мы точно знаем на каком числе находилась каретка,
			 * и после какого числа она должна встать
			 */
			if (/\d/.test(maskedValueArray[i])) {
				++caretPosition;
			}
		}

		// если не нужно двигать каретку
		return i;
	}

	phoneInputs.forEach((input) => {
		input.addEventListener("input", onInputHandler, false);
		input.addEventListener("keydown", onKeyDownHanler);
		input.addEventListener("paste", onPasteHandler, false);
		input.addEventListener("focus", onFocusSelectionEnd, false);
		input.addEventListener("focusout", onFocusoutSelectionEnd, false);
		input.addEventListener("beforeinput", onBeforeInput, false);
	});
}
addInputPhoneMask();

const nameInputs = document.querySelectorAll('input[data-name-input]');
const comandInputs = document.querySelectorAll('input[data-input-comand]');

//Запрет ввода цифр в поле имени 
nameInputs.forEach((input) => {
	input.addEventListener('keypress', function (e) {
		//console.log(e.keyCode);
		if (e.keyCode != 8 && e.keyCode != 46 && (input.value.length > 49 || e.key && e.key.match(/[^а-яА-ЯЁёІіЇїҐґЄєa-zA-ZẞßÄäÜüÖöÀàÈèÉéÌìÍíÎîÒòÓóÙùÚúÂâÊêÔôÛûËëÏïŸÿÇçÑñœ’`'.-\s]/)))
			return e.preventDefault();
	});
	input.addEventListener('input', function (e) {
		if (e.inputType == "insertFromPaste") {
			// На случай, если умудрились ввести через копипаст или авто-дополнение.
			input.value = input.value.replace(/[^а-яА-ЯЁёІіЇїҐґЄєa-zA-ZẞßÄäÜüÖöÀàÈèÉéÌìÍíÎîÒòÓóÙùÚúÂâÊêÔôÛûËëÏïŸÿÇçÑñœ’`'.-\s]/g, "").slice(0, 50);
		}
	});
});

//Запрет ввода букв в поле размера команды 
comandInputs.forEach((input) => {
	input.addEventListener('keypress', function (e) {
		if (e.key && e.key.match(/[^0-9]/)) return e.preventDefault();
	});
	input.addEventListener('input', function (e) {
		// На случай, если умудрились ввести через копипаст или авто-дополнение.
		input.value = input.value.replace(/[^0-9]/g, "").slice(0, 12);
	});
});

// Валидация форм
function removeErrorClassOnInput(input) {
	input.addEventListener('input', () => {
        if (input.value.trim() !== '')
		  input.classList.remove('input-error');
	});
	input.addEventListener('focus', () => {});
	input.onblur = function () {
		const {
			value
		} = input;
		const requiredIcon = input.closest('.form-row').querySelector('.input-icon');
		if (!value && requiredIcon) {
			requiredIcon.classList.remove('display-none');
		}
        if (os == 'iOS' && parseFloat(platform.version.replace(/\D/g, "")) > 1731) {
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
	};

	input.onfocus = function () {
		const requiredIcon = input.closest('.form-row').querySelector('.input-icon');
		if (requiredIcon) {
			requiredIcon.classList.add('display-none');
		}
        input.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
        })
	};
}

function formValidation(form) {
	let isValid = true;
	const inputs = form.querySelectorAll('.input');

	inputs.forEach((input) => {
		const {
			value,
			dataset
		} = input;
		input.classList.remove('input-error');

		if (input.hasAttribute('data-tel-input')) {
			const regExp = /[^\d]/g;
			if (
				dataset.minLength &&
				value.replace(regExp, '').length < dataset.minLength
			) {
				input.classList.add('input-error');
				isValid = false;
			}

			if (
				dataset.maxLength &&
				value.replace(regExp, '').length > dataset.maxLength
			) {
				input.classList.add('input-error');
				isValid = false;
			}

			if (
				value.replace(regExp, '')[0] == 7 && value.replace(regExp, '').length > 11
			) {
				input.classList.add('input-error');
				isValid = false;
			}
		}

		if (input.hasAttribute('data-name-input')) {
			const namePattern = /[^а-яА-ЯЁёІіЇїҐґЄєa-zA-ZẞßÄäÜüÖöÀàÈèÉéÌìÍíÎîÒòÓóÙùÚúÂâÊêÔôÛûËëÏïŸÿÇçÑñœ’`'.-\s]/g;

			if (namePattern.test(value.trim()) || value.trim() == '') {
				input.classList.add('input-error');
				isValid = false;
			}

/*
			if (dataset.minLength && value.trim().length < dataset.minLength) {
				input.classList.add('input-error');
				isValid = false;
			}

			if (dataset.maxLength && value.trim().length > dataset.maxLength) {
				input.classList.add('input-error');
				isValid = false;
			}
            */
		}

		if (dataset.required === 'true') {
			if (!value) {
				input.classList.add('input-error');
				isValid = false;
			}
		}
	});

	return isValid;
}

function checkValidationFormOnSubmit(form) {
	const inputs = form.querySelectorAll('.input');
	const onSubmitHandler = (event) => {
		if (formValidation(form)) {
			return true;
		} else {
			form.querySelector('.w-button').value = form.querySelector('.w-button').getAttribute('data-btn-default');
			return false;
		}
	};

	inputs.forEach((input) => {
		const isRequiredInput = input.getAttribute('data-required');
		if (isRequiredInput) {
			removeErrorClassOnInput(input);
		}
	});

	$(form).submit(onSubmitHandler);
}

const forms = document.querySelectorAll('form[action="https://getcompass.ru"]');
if (forms) {
    Array.prototype.forEach.call(forms, (form) => {
        checkValidationFormOnSubmit(form);
    })
}

if (getPage() == 'partner') {
    var calcRange = document.querySelector('.partner-calc__slider'),
        calcRangeStartLabel = document.querySelector('.partner-calc__slider-start'),
        calcRangeEndLabel = document.querySelector('.partner-calc__slider-end'),
        calcTarifsRadio = document.querySelectorAll('[name="tarif"]'),
        сalcResultField = document.querySelector('.partner-calc__result-field'),
        calcResultWrap = document.querySelector('.partner-calc__result'),
        calcMembersField = document.querySelectorAll('[data-calc-members]'),
        calcBusinessFline = document.querySelector('[data-calc-business-fline]'),
        calcBusinessSline = document.querySelector('[data-calc-business-sline]'),
        calcBusinessTline = document.querySelector('[data-calc-business-tline]'),
        calcOnpremiseFline = document.querySelector('[data-calc-onpremise-fline]'),
        calcBusinessPFMembers = document.querySelector('[data-calc-business-pfmembers]'),
        calcOnpremisePFMembers = document.querySelector('[data-calc-onpremise-pfmembers]');
    
    Array.prototype.forEach.call(calcTarifsRadio, (radio) => {
        if (radio.value == "business") {
            radio.checked = true
        } else {
            radio.checked = false
        }
    })
    const calcResult = () => {
        var tarif = Array.from(document.getElementsByName("tarif")).find(r => r.checked).value,
            members = calcRange.noUiSlider.get(),
            result = 0,
            membersString = num_word(members, ['человек', 'человека', 'человек']),
            membersFormated = String(parseFloat(members).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u00A0");
        
        switch(tarif) {
            case 'business':
                result = ( members * 200 ) + ( ( members ) * 299 * 0.1 * 24);
                break;
            case 'on-premise':
                result = ( members ) * 399 * 0.2 * 24
                break;
        }
        
        if (result > 999999) {
            calcResultWrap.classList.add('is--small')
        } else {
            calcResultWrap.classList.remove('is--small')
        }
        Array.prototype.forEach.call(calcMembersField, (membersField) => {
            membersField.textContent = `${membersFormated}\u00A0${membersString}`
        });
        
        calcBusinessFline.innerHTML = `${membersFormated}&nbsp;${membersString} х 200&nbsp;₽ = <strong>${String((members * 200).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u00A0")}&nbsp;₽</strong>`;
        calcBusinessSline.innerHTML = `${membersFormated}&nbsp;${membersString} х 299&nbsp;₽ х&nbsp;10% х&nbsp;24&nbsp;месяца = <strong>${String((members * 299 * .1 * 24).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u00A0")}&nbsp;₽</strong>`;
        calcBusinessTline.innerHTML = `${String((members * 200).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u00A0")}&nbsp;₽ +&nbsp;${String((members * 299 * .1 * 24).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u00A0")}&nbsp;₽ = ${String((members * 200 + (members * 299 * .1 * 24)).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u00A0")}`;
        calcOnpremiseFline.innerHTML = `${membersFormated}&nbsp;${membersString} х 399&nbsp;₽ х&nbsp;20% х&nbsp;24&nbsp;месяца = <strong>${String((members * 399 * .2 * 24).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u00A0")}&nbsp;₽</strong>`;
        calcBusinessPFMembers.innerHTML = `${String((members * 299 * .1 * 24).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u00A0")}&nbsp;₽`
        calcOnpremisePFMembers.innerHTML = `${String((members * 399 * .2 * 24).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u00A0")}&nbsp;₽`;
        сalcResultField.textContent = String(result.toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u00A0")
    }
    
    const switchCalcInfoTab = () => {
        var tarif = Array.from(document.getElementsByName("tarif")).find(r => r.checked).value
        
        $(`[data-w-tab="${tarif}"]`).trigger('click');
    }
    
    Array.prototype.forEach.call(calcTarifsRadio, (radio) => {
        radio.addEventListener('change', () => {
            calcResult();
            switchCalcInfoTab();
        });
    })
    calcRangeStartLabel.addEventListener('click', () => {
        calcRange.noUiSlider.set(20);
    });

    calcRangeEndLabel.addEventListener('click', () => {
        calcRange.noUiSlider.set(5000);
    })

    noUiSlider.create(calcRange, {
        start: 100,
        step: 5,
        tooltips: { 
            to: function(value) { 
                return value.toFixed(0); 
            } 
        },
        connect: 'lower',
        range: {
            'min': [20],
            '27%': [100, 20],
            '66%': [1000, 100],
            'max': [5000]
        }
    });
    
    calcRange.noUiSlider.on('update', () => {
        calcResult();
    });
}

function num_word(value, words){  
	value = Math.abs(value) % 100; 
	var num = value % 10;
	if(value > 10 && value < 20) return words[2]; 
	if(num > 1 && num < 5) return words[1];
	if(num == 1) return words[0]; 
	return words[2];
}

// Типограф Стетей, заголовков и шорттекстов
var tp = new Typograf({
		locale: ['ru', 'en-US']
	}),
	article = document.querySelector('.article'),
	relatedArticles = document.querySelector('.related-articles');

if (article) {
	article.innerHTML = tp.execute(article.innerHTML);
	relatedArticles.innerHTML = tp.execute(relatedArticles.innerHTML);
}

// Типограф вопросов и ответов
const faqContentBlocks = document.querySelectorAll('.faq__content');
const faqTitles = document.querySelectorAll('.faq__quess-text');

Array.prototype.forEach.call(faqContentBlocks, (contentWrap) => {
    contentWrap.innerHTML = tp.execute(contentWrap.innerHTML);
})
Array.prototype.forEach.call(faqTitles, (contentWrap) => {
    contentWrap.innerHTML = tp.execute(contentWrap.innerHTML);
})

//UTM метки в блоге на страницах статей
if (getPage() == 'post') {
    const homeLinks = document.querySelectorAll('[href="/"]');
    
    Array.prototype.forEach.call(homeLinks, (homeLink) => {
        homeLink.setAttribute('href', `/?utm_source=blog&utm_medium=${window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}&source_id=blog`)
    })
}

//Типографируем подгруженные статьи`
window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsload',
  (listInstances) => {
		if ($('.fs-cms_pagination-wrapper').length) {
			$('.fs-cms_pagination-wrapper .w-pagination-next').addClass('is--ajax-load-btn').find('.blog-grid__lm-btn-text').html('Загрузить ещё');
		}
		if ($('.blog-grid__card-title').length) {
			$('.blog-grid__card-title').each(function () {
				$(this).html(tp.execute($(this).html()));
			})
			$('.blog-grid__card-introtext').each(function () {
				$(this).html(tp.execute($(this).html()));
			})
		}

		// The callback passes a listInstances array with all the CMSList instances on the page.
		const [listInstance] = listInstances;

		// The renderitems event runs whenever the list renders items after switching pages.
		listInstance.on('renderitems', (renderedItems) => {
            Array.prototype.forEach.call(renderedItems, (item) => {
                const blogImage = item.element.querySelector(".blog-grid__card-img");
                blogImage.addEventListener('error', function() {
                    console.log('error')
                    const src = blogImage.getAttribute('src');
                    blogImage.setAttribute('src', '');
                    blogImage.setAttribute('src', src);
                        
                })
            });
			if ($('.blog-grid__card-title').length) {
				$('.blog-grid__card-title').each(function () {
					$(this).html(tp.execute($(this).html()));
				})
				$('.blog-grid__card-introtext').each(function () {
					$(this).html(tp.execute($(this).html()));
				})
                const images = document.querySelectorAll(".blog-grid__card-img")
				document.querySelectorAll(".article__preloader-wrapper").forEach(preloader => {
					setTimeout(function () {
						preloader.style.opacity = '0';
						preloader.addEventListener('transitionend', () => preloader.remove());
					}, 500);

				});
			}
		});
  },
]);

$('.fs-cms_pagination-wrapper .w-pagination-next').on('click', function () {
    setTimeout(function () {
     document.querySelectorAll(".article__preloader-wrapper").forEach(preloader => {
             preloader.style.opacity = '0';
             preloader.addEventListener('transitionend', () => preloader.remove());
     });                                                 
    }, 1000);
})



$('.form__success-button, .form__button-close').on('click', function () {
	var successButton = $(this);
	setTimeout(function () {
		successButton.closest('.remodal').find('.w-form-done').hide();
		successButton.closest('.remodal').find('form').show();
	}, 300);
})

var scrollDistance = 0;
var scrollBarWidth = window.innerWidth - document.body.clientWidth;
const bodyScrollControls = {
	disable() {
        //const scrollBarWidth = window.innerWidth - document.body.clientWidth;
        if (['iOS', 'Android', 'Huawei'].indexOf(os) + 1) {
            body.style.top = `-${window.scrollY}px`;
            scrollDistance = window.scrollY;
            body.style.position = 'fixed';
            body.style.left = 0;
            body.style.right = 0;
        }
		document.body.style.marginRight = `${scrollBarWidth}px`;
		document.querySelector('.w-nav').style.right = `${scrollBarWidth}px`;
		document.querySelector('.cookie').style.marhinRight = `${scrollBarWidth}px`;
		if (document.getElementById('carrotquest-messenger-collapsed-container'))
			document.getElementById('carrotquest-messenger-collapsed-container').style.setProperty("right", `${scrollBarWidth}px`, "important");
		document.body.style.paddingRight = null;
		document.body.style.overflowY = 'hidden';
	},
	enable() {
        body.removeAttribute('style');
        if (['iOS', 'Android', 'Huawei'].indexOf(os) + 1) {
            window.scrollTo(0, scrollDistance);
        }
		document.querySelector('.cookie').style.marhinRight = 0;
		document.querySelector('.w-nav').style.right = 0;
		if (document.getElementById('carrotquest-messenger-collapsed-container'))
			document.getElementById('carrotquest-messenger-collapsed-container').style.right = 0;
		document.body.style.overflowY = null;
	},
};

$('[data-remodal-id="consultation-on-premise"]').remodal({
    closeOnOutsideClick: false
});

$('[data-remodal-id="consultation"]').remodal({
    closeOnOutsideClick: false
});

$('[data-remodal-id="pilot-modal"]').remodal({
    closeOnOutsideClick: false
});

$(document).on('opening', '.remodal', function (e) {
	bodyScrollControls.disable();
	$('html').addClass('remodal-is-locked');
	let currentModal = $('.remodal.remodal-is-opening'),
		modalId = '#' + currentModal.data('remodal-id'),
		iframeInModal = currentModal.find('iframe'),
        formInModal = currentModal.find('form'),
		ScrollElement = currentModal.find('.popup__scroll-content');
    if (iframeInModal.attr('src') == '') {
        iframeInModal.attr('src', iframeInModal.data('src'));
    }
    if (iframeInModal) {
        document.querySelector('.remodal-wrapper.remodal-is-opening').scrollTop = 0
    }
	if (['#video-mac-intel', '#video-mac-apple', '#video-linux-deb-standart', '#video-linux-deb-terminal', '#video-linux-tar', '#video-windows', '#video-czech', '#video-partner', '#video-detailing-group', '#video-daily', '#video-good-people'].includes(modalId)) {
		$('html').addClass('is--black-overlay is--center-modal is--small-p-modal is---video-overlay');
    } else if (['#calculator-info'].includes(modalId)) {
        $('html').addClass('is--white-overlay is--small-p-modal');
	} else {
		$('html').addClass('is--white-overlay is--center-modal');
	}
	analyticsModal(modalId);
	ScrollElement.animate({
		scrollTop: 0
	}, 0);

	if (iframeInModal.length && window.Vimeo !== void 0) {
		let player = new Vimeo.Player(iframeInModal[0]);
		player.play();
	}
});

$(document).on('closing', '.remodal', function (e) {
	let currentModal = $('.remodal.remodal-is-closing'),
		iframeInModal = currentModal.find('iframe'),
		formInModal = currentModal.find('form'),
        formButton = formInModal.find('.button-submit');
    
	setTimeout(function () {
		$('.form__button-close').removeClass("is--hidden");
		$('.remodal.is--success').removeClass("is--success");
		$('.w-form-fail').hide();
		$('.w-form-done').hide();
		if (formInModal.length) {
			formInModal.find('.input-icon').each(function () {
				$(this).removeClass('display-none');
			})
			formButton.val(formButton.data('btn-default'));
			formInModal[0].reset();
			formInModal.show();
			formInModal.find('input').each(function () {
				$(this).removeClass('input-error');
			});
		}
	}, 300)

	if (iframeInModal.length) {
		iframeInModal.attr('src', '');
		iframeInModal.attr('src', iframeInModal.data('src'));
	}
});

$(document).on('closed', '.remodal', function (e) {
	bodyScrollControls.enable();
    if (getPage() == 'partner') {
    var tarif = Array.from(document.getElementsByName("tarif")).find(r => r.checked).value
        $(`[data-w-tab="${tarif}"]`).trigger('click');
    }
	$('html').removeClass('is--black-overlay is--white-overlay remodal-is-locked is--center-modal is---video-overlay is--small-p-modal');
});

//Фикс кнопки назалд и закрытия модального окна
function closeRemodal() {
	if ($('.remodal.remodal-is-opened').length) {
		$('.remodal.remodal-is-opened').find('[data-remodal-action="close"]').trigger('click');
	}
}

// Фикс скролла в форме на мобильных
if (os == 'Android') {
     body.classList.add('android-form-modal')       
} else if (os == 'iOS') {
     body.classList.add('ios-form-modal')       
}

window.addEventListener("popstate", (event) => {
	closeRemodal();
});

document.onkeydown = function (evt) {
	if (evt.keyCode == 27) {
		closeRemodal();
	}
    // Переключения между полями ввода в модальном окне если оно открыто
    handleKey(evt);
};

function handleKey(e) {
    if (e.keyCode === 9 && document.querySelector('.remodal.remodal-is-opened')) {
        let focusable = document.querySelector('.remodal.remodal-is-opened').querySelectorAll('input,button,select,textarea');
        if (focusable.length) {
            let first = focusable[0];
            let last = focusable[focusable.length - 1];
            let shift = e.shiftKey;
            if (shift) {
                if (e.target === first) { // shift-tab pressed on first input in dialog
                    last.focus();
                    e.preventDefault();
                }
            } else {
                if (e.target === last) { // tab pressed on last input in dialog
                    first.focus();
                    e.preventDefault();
                }
            }
        }
    }
}


$('input').on('focusout focus', function () {
	setTimeout(function () {
		if ($('html').hasClass('remodal-is-locked')) {
			$('html').removeClass('remodal-is-locked');
			$('html').addClass('remodal-is-locked');
		}
	}, 300);
})

//Доскрол до вопроса при клике на мобилке
$('.faq__trigger').on('click', function () {
	var toggle = $(this),
		wrapper = toggle.parent('.faq__item');
	if (wrapper.hasClass('is--open')) {
		closeDropdown(wrapper)
	} else {
		openDropdown(wrapper);
	}
	closeDropdown($('.faq__item.is--open').not(wrapper));

	if ($(window).width() < 768 && !$(this).hasClass('is--open')) {
		var headerHeight = $('.w-nav').height() + 12,
			faqTrigger = $(this);

		setTimeout(function () {
			$("html, body").animate({
				scrollTop: faqTrigger.offset().top - headerHeight
			});
		}, 500);
	}
})

$('.faq__item').each(function () {
	closeDropdown($(this));
})

$('.faq__show-button').on('click', function () {
	$(this).parent('.faq__wrapper').addClass('is--open');
});

$('.faq__close-button').on('click', function () {
	$(this).parent('.faq__wrapper').removeClass('is--open');
});

$('.faq__wrapper').removeClass('is--open');

function openDropdown(dropdown) {
	var dropdownContent = dropdown.find('.faq__resp-wrapper'),
		dropdownInnerContent = dropdown.find('.faq__resp');

	dropdownContent.css({
		height: dropdownContent.find('div').innerHeight(),
	});
	dropdownInnerContent.css({
		opacity: 1
	});
	dropdown.addClass('is--open');
}

function closeDropdown(dropdown) {
	var dropdownContent = dropdown.find('.faq__resp-wrapper'),
		dropdownInnerContent = dropdown.find('.faq__resp');

	dropdownContent.css({
		height: 0
	});
	dropdownInnerContent.css({
		opacity: 0
	});
	dropdown.removeClass('is--open');
}

//Copy fields
const copyFields = document.querySelectorAll('[clipboard-field]');

Array.prototype.forEach.call(copyFields, (copyField) => {
    const copyBtn = copyField.querySelector('[clipboard-btn]');
    const copyBtnTooltip = copyField.querySelector('[clipboard-tooltip]');
    const copyText = copyField.querySelector('[clipboard-text]').textContent;
    const copyClipboard = new ClipboardJS(copyBtn, {
        text: function (trigger) {
            return copyText;
        }
    });
    copyClipboard.on('success', function (e) {
        copyBtnTooltip.textContent = 'Скопировано'
        copyBtn.classList.add('is--done');
        setTimeout(() => {
            copyBtn.classList.remove('is--done');
        }, 2000);
        e.clearSelection();
    });
    copyClipboard.on('error', function (e) {
        copyBtnTooltip.textContent = 'Ошибка!'
        copyBtn.classList.add('is--fail');
        setTimeout(() => {
            copyBtn.classList.remove('is--fail');
        }, 2000);
        e.clearSelection();
    });
});

$('.article__social-share-link--copy').css('display', 'inline-block');
var copyPostLinkTimeout = setTimeout(function () {}, 0);
var copyPostLink = new ClipboardJS('.article__social-share-link--copy', {
	text: function (trigger) {
		return window.location.href;
	}
})

copyPostLink.on('success', function (e) {
	clearTimeout(copyPostLinkTimeout);
	var copyElement = $(e.trigger);

	copyElement.addClass('is--copy-done');
	copyPostLinkTimeout = setTimeout(function () {
		copyElement.removeClass('is--copy-done');
	}, 2000)
	e.clearSelection();
});

copyPostLink.on('error', function (e) {
	clearTimeout(copyPostLinkTimeout);
	var copyElement = $(e.trigger);

	copyElement.addClass('is--copy-fail');
	copyPostLinkTimeout = setTimeout(function () {
		copyElement.removeClass('is--copy-fail');
	}, 2000)
});

function showCopyNote(text, error) {
	clearTimeout(closingMessageTimeout);
	if (text != '') {
		$('.event__message').html(text);
	}
	if (error) {
		$('.event__message').addClass('is--error');
	} else {
		$('.event__message').removeClass('is--error');
		$('.event__message').html('Ссылка на скачивание Compass для&nbsp;компьютера скопирована');
	}
	$('.event__message').addClass('is--display-block');
	setTimeout(function () {
		$('.event__message').addClass('is--visible');
	}, 300);
	closingMessageTimeout = setTimeout(function () {
		$('.event__message').removeClass('is--visible');
		setTimeout(function () {
			$('.event__message').removeClass('is--display-block');
		}, 300);
	}, 4000);
}

$('.event__message').on('touchmove', function () {
	clearTimeout(closingMessageTimeout);
	$('.event__message').removeClass('is--visible');
	setTimeout(function () {
		$('.event__message').removeClass('is--display-block');
	}, 300);
});

//Выпадающие списки в блоке с табами 
$('.target__tab-menu-block .w-tab-link.w--current').each(function () {
	$(this).find('.tab-menu__description').height($(this).find('.tab-menu__description div').outerHeight());
});

$(".w-tab-link").on('click', function(e) { 
   if( e.which == 2 ) {
      e.preventDefault();
   }
});

function tabsSwipeHandler(linkEl, direction) {
	let currentMenu = linkEl.closest('.w-tabs').find('.w-tab-menu'),
		nextLink = currentMenu.find('.w--current').next('a'),
		prevLink = currentMenu.find('.w--current').prev('a');

	if (direction == 'left' && $(window).width() < 768) {
		if (nextLink.length < 1) {
			currentMenu.addClass('scroll-bounce-left');
			setTimeout(function () {
				currentMenu.removeClass('scroll-bounce-left')
			}, 800)
		} else {
			nextLink.click();
		}
	} else if (direction == 'right' && $(window).width() < 768) {
		if (prevLink.length < 1) {
			currentMenu.addClass('scroll-bounce-right');
			setTimeout(function () {
				currentMenu.removeClass('scroll-bounce-right');
			}, 800)
		} else {
			prevLink.click();
		}
	}
}

if ($('.blog-hero__filter').length) {
		$('.blog-hero__filter-collection .blog-hero__filter-button').each(function () {
			$('.blog-hero__filter-track').append($(this));
		});
		//$('.blog-hero__filter .w-dyn-list').remove();
        
		var currentLink = document.querySelector('.blog-hero__filter-button.w--current');
        
        if (currentLink) {
            currentLink.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            })
            
            setTimeout(() => {
                $('.blog-hero__filter-track').css({opacity: 1})
            }, 300)
        }
	}

// Фикс плавного подскролла к секции при загрузке
if (window.location.hash && $(window.location.hash).length) {
	$('html,body').animate({
		scrollTop: $(window.location.hash).offset().top //- $('.navbar__wrapper').outerHeight()
	}, 800);
	removeAnchorFormURL(); //Удаляем hash из адреса
}

//Фикс удаления хэша после перехода к разделу
history.scrollRestoration = "manual";
removeAnchorFormURL();
function removeAnchorFormURL() {
	setTimeout(() => {
		window.history.replaceState({}, "", window.location.href.split("#")[0]);
	}, 100);
};

$('a[href^="#"]').on('click', function () {
	removeAnchorFormURL();
})

//Открытие содержимого на мобильном
$('.article__toc-button').on('click', function () {
	var tocList = $('.article__toc-button').siblings('.article__toc-links');
	if (!$(this).hasClass('is--open')) {
		tocList.css({
			height: tocList.find('div').outerHeight(),
			opacity: 1
		});
	} else {
		tocList.css({
			height: 0,
			opacity: 0
		});
	}
	$(this).toggleClass('is--open');
});

// Подсчет времени чтения
function readingTime(articleContent) {
	let text = articleContent.text(),
		wpm = 225,
		words = text.trim().split(/\s+/).length,
		time = Math.ceil(words / wpm),
		result = `Время прочтения: ${time} мин.`;

	$('.article__header-meta-time').text(result);
};

var validContent;

if ($('.article__content').length) {
	readingTime($('.article__content'));
	$(".article__content.w-richtext").each(function () {
		var content = $(this).html();
		if (
			(content.match(/{{mobile/g) || []).length ==
			(content.match(/{{\/mobile/g) || []).length &&
			(content.match(/{{pc/g) || []).length ==
			(content.match(/{{\/pc/g) || []).length
		) {
			validContent = 1;
		} else {
			validContent = 0;
		}
		if (validContent)
			$(this).html(
				content
				.replace(/<li>{{isTrue}}/g, '<li class="is--true">')
				.replace(/<p>{{mobile}}<\/p>/g, '<div class="article__mobile-content">')
				.replace(/<p>{{pc}}<\/p>/g, '<div class="article__desctop-content">')
				.replace(/<p>{{\/pc}}<\/p>/g, '</div>')
				.replace(/<p>{{\/mobile}}<\/p>/g, '</div>')
				.replace(/<p>{{cta_banner}}<\/p>/g, '<div class="cta-banner-place"></div>')
				.replace(/<p>{{cta_book}}<\/p>/g, '<div class="cta-book-place"></div>')
			);
        $(this).find('a').each(function() {
            if ($(this).text().indexOf('{{') + 1) {
                $(this).addClass('article__cta-button');
                $(this).parent().addClass('article__cta-button-wrap');
                $(this).html(`<div>${$(this).text().replace(/[{}]+/g,'')}</div><div class="article-cta__button-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.99254 9.93963L5.03374 8.99148L8.36293 5.66229H0V4.27734H8.36293L5.03374 0.953481L5.99254 0L10.9624 4.96982L5.99254 9.93963Z" fill="currentColor"></path></svg></div>`);
            }
        })
	});

	if ($('.cta-banner-place').length) {
		$('.article-cta--in-content .article-cta__title.w-dyn-bind-empty').text('Знакомая ситуация?');
		$('.article-cta--in-content .article-cta__subtitle.w-dyn-bind-empty').html('Попробуйте мессенджер, который приведёт в&nbsp;порядок рабочее общение.');
		$('.cta-banner-place').append($('.article-cta--in-content'));
		$('.article-cta--in-content').css('display', 'flex');
	}
	if ($('.cta-book-place').length) {
		$('.cta-book-place').append($('.article-book-cta--in-content'));
	}
}

//Подсчет количества рекомендуемых статей
if ($('.blog-grid__wrapper--related-news').length) {
	let relatedItemsCount = $('.blog-grid__wrapper--related-news .blog-grid__card').length;
	if (relatedItemsCount > 0 && $('.blog-grid__wrapper--related-news').data('items-count') != relatedItemsCount) {
		$('.blog-grid__wrapper--related-news').attr('data-items-count', relatedItemsCount);
	} else if (relatedItemsCount == 0) {
		$('.related-articles').hide();
	}

}

//Кнопки поделиться
var vkLink = document.querySelectorAll('.article__social-share-link--vk'),
	tgLink = document.querySelectorAll('.article__social-share-link--tg');

if (vkLink.length) {
	vkLink.forEach(element => {
		element.addEventListener('click', () => {
			window.open('https://vk.com/share.php?url=' + window.location.href)
		})
	})
}

if (tgLink.length) {
	tgLink.forEach(element => {
		element.addEventListener('click', () => {
			window.open('https://t.me/share/url?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent(document.title));
		})
	})
}

// Отправка формы в апи
$('form').on('submit', function (e) {
    e.preventDefault()
	var form = $(this),
		formData = new FormData($(this)[0]),
		currentHost = `${window.location.protocol}//${window.location.host}/`,
		url = currentHost + 'www/getcompass/requestConsultation',
        button = form.find('[type="submit"]'),
        object = {},
        currentModal = $('.remodal.remodal-is-opened'),
		modalId = '#' + currentModal.data('remodal-id');
    
	if (formValidation(form[0])) {
		if (formData.get('team_size') == '')
			formData.set('team_size', 0);
        formData.set('source_id', sourceID);
        formData.set('pagetitle', document.title);
        formData.set('page_url', window.location.href);
        formData.set('utm_tag', utmTag);
        if (modalId == '#pilot-modal') {
            formData.set('form_type', "request_pilot_project");
        } else {
            formData.set('form_type', "request_consultation");
        }
		button.val(button.data('wait'));
        try {
            grecaptcha.enterprise.execute(window.googleCaptchaKey).then(function(token) {
                formData.set('grecaptcha_response', token);
                sendRequest(url, form, formData);
                return false;
            })
        } catch (error) {
            sendRequest(url, form, formData);
            return false;
        };
	} else {
        return false;
    }
});
function sendRequest(url, form, formData) {
    var successMessage = form.siblings('.w-form-done'),
        errorMessage = form.siblings('.w-form-fail'),
        button = form.find('[type="submit"]'),
        currentModal = $('.remodal.remodal-is-opened'),
		modalId = '#' + currentModal.data('remodal-id');
    
    $.ajax({
		url: url,
		type: "POST",
		dataType: 'text',
		data: formData,
		contentType: false,
		processData: false,
		statusCode: {
			423: function (result) {
				showErrorMessage(form, 'Произошла ошибка при отправке формы. Попробуйте позже или свяжитесь с&nbsp;нами другим способом.');
			}
		},
		success: function (result) {
            const isSuccessful = JSON.parse(result).status == "ok"
			if (isSuccessful) {
				button.val(button.data('btn-default'));
				successMessage.show();
				errorMessage.hide();
				form.hide();
                if (getPage() == 'on-premise') {
                    if (modalId == "#consultation") {
                        ym(ymetrikaID, 'reachGoal', '302');
                    } else if (modalId == "#pilot-modal") {
                        ym(ymetrikaID, 'reachGoal', '309');
                    }
                } else {
                    if (modalId == "#consultation" || modalId == "#consultation-on-premise") {
                        ym(ymetrikaID, 'reachGoal', '10');
                        _tmr.push({
					      type: 'reachGoal',
					      id: 3381982,
					      goal: 'Demo'
					    });
                    } else if (modalId == "#pilot-modal") {
                        ym(ymetrikaID, 'reachGoal', '307');
                    }
                }
				form.closest('.remodal').addClass('is--success').removeClass('is--no-radius');
				if ($('html').hasClass('remodal-is-locked')) {
					$('html').removeClass('is--white-overlay');
                    $('html').removeClass('is--disable-bg-close');
				}
            }
            return false;
        },
        error: function (xhr, resp, text) {
                showErrorMessage(form, 'Произошла ошибка при отправке формы. Попробуйте позже или свяжитесь с&nbsp;нами другим способом.')
				console.log(xhr, resp, text);
                return false;
        }
    });
    return false;
}
    
function showErrorMessage(form, msg) {
    var button =form.find('[type="submit"]'),
        errorMessage = form.siblings('.w-form-fail');
    
    errorMessage.find('div').html(msg);
    button.val(button.data('btn-default'));
    errorMessage.show();
    setTimeout(function () {
		errorMessage.hide();
	}, 3000)
    form.show();
}

function formToJson(form) {
	var array = form.serializeArray();
	var json = {};

	$.each(array, function () {
		json[this.name] = this.value || 0;
	});

	return JSON.stringify(json);
}

function getSanitizedFormName(name) {
	return name.replace(/\+/g, " ")
}

//Получить скролл страницы в процентах
function getScrollPercentage() {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	let documentHeight = Math.max(
		document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight,
		document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight
	);

	return ((scrollTop / (documentHeight - windowHeight)) * 100);

}

// Устанавливаем ширину видео в зависимости от высоты экрана
const setVideoModalWidth = () => {
        const videoModals = document.querySelectorAll('.popup-content.remodal.is--video-modal');
        const videoModalPadding = window.innerWidth > 767 ? 6 : 7;
        const sizeFactor = getSize();
        
        Array.prototype.forEach.call(videoModals, (videoModal) => {
            const modalHeight = window.innerHeight - sizeFactor * videoModalPadding;
            const modalWidth = videoModal.offsetWidth ? videoModal.offsetWidth : 1;
            if (modalWidth / modalHeight > 1.7 && modalWidth / modalHeight < 1.7) {
                videoModal.style.width = `${modalWidth}px`;
            } else if (modalHeight < sizeFactor * 20.1 && window.innerWidth < 768 && window.innerWidth > 468)  {
                videoModal.style.width = `100%`
            } else if (modalHeight < sizeFactor * 17.33333 && window.innerWidth < 469)  {
                videoModal.style.width = `100%`
            } else if (modalHeight < sizeFactor * 22.5 && window.innerWidth > 767)  {
                videoModal.style.width = `${(sizeFactor * 22.5 * 1.7777778).toFixed(0)}px`
            } else {
                videoModal.style.width = `${(modalHeight * 1.7777778).toFixed(0)}px`
            }
        })
}

setVideoModalWidth();

window.addEventListener("resize", (event) => {
    remSize = getComputedStyle(document.documentElement).getPropertyValue('--remSize');
	setCenterCTAListArrow();
    setVideoModalWidth();
	if ($(window).width() > 767) {
		$('.w-tab-content').each(function () {
			$(this).removeAttr('style');
		})
		$('.article__toc-button').siblings('.article__toc-links').removeAttr('style').removeClass('is--open');
	}
	setTimeout(function () {
		$('.target__tab-menu-block .w-tab-link.w--current').each(function () {
			$(this).trigger('click');
		});
	}, 200);

});

//Показываем кнопку "Попробовать бесплатно"
window.addEventListener("scroll", (event) => {
	if ( ( $('.business__section').length && $(window).scrollTop() + $(window).height() >= $('.business__section').offset().top ) || 
         ( getPage() == 'partner' && $(window).scrollTop() > 620 ) ){
        if ( $(window).width() < 768 ) {
            if (getPage() == 'partner') {
                $('.navbar__logo-text').css({
                    'opacity': 0,
                    'transform': 'translateX(-5px)',
                    'pointer-events': 'none'
                })
                setTimeout(()=> {
                    $('.menu-wrapper--is--mobile .cta__btn').removeClass('is--hidden');
                }, 200)
                
            } else {
                $('.menu-wrapper--is--mobile .cta__dropdown').removeClass('is--hidden');
                $('.menu-wrapper--is--mobile .cta__btn').removeClass('is--hidden');
            }
        }
        $('.navbar__logo-text').addClass('is--visible');
	}
});
document.addEventListener("DOMContentLoaded", function () {
    
    // Подключаем скрипт google recaptcha
    window.doStart.then(function (result) {
        window.googleCaptchaKey = result.response.captcha_public_key;
        let script = document.createElement('script');
        script.src = "https://www.google.com/recaptcha/enterprise.js?render=" + result.response.captcha_public_key;
        document.body.append(script);
    }).catch(function (result) {
        console.log(result);
    });
    
    setCenterCTAListArrow();
    setTimeout(function () {
        //Пользователь на сайте больше минуты
        if ( getPage() == 'home' ) ym(ymetrikaID, 'reachGoal', '4');
    }, 60000);

    var scrollEventStart = false,
        scrollEvent10 = false,
        scrollEvent50 = false,
        scrollEvent75 = false,
        scrollEvent100 = false; // Сообщение ещё не выводилось
    window.onscroll = function (e) {
        
        if ($('.w-nav-button').hasClass('w--open'))
                $('.w-nav-button').trigger('click');
        if ( getPage() == 'home' || getPage() == 'download' || getPage() == 'partner') {
            if (!scrollEventStart && getScrollPercentage() > 0) {
                if ($('.popup__video-iframe').find('iframe').length) {
                    $('.popup__video-iframe').find('iframe').each(function () {
                        $(this).attr('src', $(this).data('src'));
                    });
                }
            }
            if (!scrollEventStart && getScrollPercentage() > 0) {
                scrollEventStart = true;
            }
            if (!scrollEvent50 && getScrollPercentage() > 50) {
                if ( getPage() == 'home' ) ym(ymetrikaID, 'reachGoal', '1');
                scrollEvent50 = true;
            }
            if (!scrollEvent75 && getScrollPercentage() > 75) {
                //console.log('Страница прокручена на 75%');
                if ( getPage() == 'home' ) ym(ymetrikaID, 'reachGoal', '2');
                scrollEvent75 = true;
            }
            if (!scrollEvent100 && getScrollPercentage() > 95) {
                //Страница прокручена на 100%
                if ( getPage() == 'home' ) ym(ymetrikaID, 'reachGoal', '3');
                scrollEvent100 = true;
            }
        }
    }
});

$('a[href*="/blog"]').on('click', function () {
	//переход в блог
    if (getPage() == 'home')
	   ym(ymetrikaID, 'reachGoal', '61');
});


$('.article-cta').on('click', function () {
	//переход с блога на сайт по баннеру
	ym(ymetrikaID, 'reachGoal', '63');
});

$('a[href*="mailto:support@getcompass.ru"]').on('click', function () {
	//console.log('Идентификатор 6');
	ym(ymetrikaID, 'reachGoal', '6');
});

$('.navbar__wrapper .w-dropdown-toggle').on('click', function () {
	//Ленд – Нажата “Попробовать бесплатно” в шапке
	ym(ymetrikaID, 'reachGoal', '11');
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'besplatno'
	});
});

$('.cta__dropdown .w-dropdown-toggle').on('click', function () {
	//Ленд – Нажата любая кнопка Попробовать в контенте лендинга
	if (!$(this).closest('.price__block').length && getPage() == 'home' && !$(this).closest('.navbar__wrapper').length) {
		ym(ymetrikaID, 'reachGoal', '50');
		_tmr.push({
			type: 'reachGoal',
			id: 3381982,
			goal: 'besplatno'
		});
	}
});

$('.price__block.is--start .w-dropdown-toggle').on('click', function () {
	//Ленд – Нажата кнопка Попробовать, тариф Старт
	ym(ymetrikaID, 'reachGoal', '65');
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'besplatno'
	});
})

$('.price__block.is--center .w-dropdown-toggle').on('click', function () {
	//Ленд – Нажата кнопка Попробовать, тариф Образование
	ym(ymetrikaID, 'reachGoal', '66');
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'besplatno'
	});
})

$('.price__block.is--corp .w-dropdown-toggle').on('click', function () {
	//Ленд – Нажата кнопка Попробовать, тариф Бизнес
	ym(ymetrikaID, 'reachGoal', '67');
})

$('#carrot-messenger-collapsed-frame').on('click', function () {
	//Идентификатор 5
	ym(ymetrikaID, 'reachGoal', '5');
});

$('.ceo-link').on('click', function () {
	ym(ymetrikaID, 'reachGoal', '401');
});

$('a[href*="https://t.me/getcompass"],a[href*="https://wa.me/message/CJINDDW52XJYM1"]').on('click', function () {
	ym(ymetrikaID, 'reachGoal', '402');
});

$('.privacy-target').on('click', function () {
	ym(ymetrikaID, 'reachGoal', '7');
});
$('.offer-target').on('click', function () {
	ym(ymetrikaID, 'reachGoal', '8');
});
$('.reccurent-target').on('click', function () {
	ym(ymetrikaID, 'reachGoal', '31');
});

$('.mediakit__link').on('click', function () {
	ym(ymetrikaID, 'reachGoal', '82');
});

if (window.location.href.indexOf('mediakit') + 1 > 0) {
    ym(ymetrikaID, 'reachGoal', '81');
}

$('a[href*="github"]').on('click', function() {
    if (getPage() == 'on-premise') {
        ym(ymetrikaID, 'reachGoal', '304');
    }
})

$('a[href*="partner.getcompass.ru"]').on('click', function() {
    if (getPage() == 'partner') {
        ym(ymetrikaID, 'reachGoal', '403');
    }
})

$('a[href*="on-premise"]').on('click', function() {
    if (getPage() == 'home') {
        ym(ymetrikaID, 'reachGoal', '300');
    }
})

$('.partner-page').on('click', function(e) {
    ym(ymetrikaID, 'reachGoal', '400');
})

$('a[href="/"], a[href*="/#"]').on('click', function(e) {
    if (getPage() == 'on-premise') {
        ym(ymetrikaID, 'reachGoal', '300');
    } else if (getPage() == 'partner') {
        ym(ymetrikaID, 'reachGoal', '400');
    } else if ((getPage() == 'blog' || getPage() == 'post') && !$(this).hasClass('article-cta')) {
        ym(ymetrikaID, 'reachGoal', '62');
    }
});

function analyticsModal(hash) {
	switch (hash) {
		case '#consultation':
            if (getPage() == 'on-premise') {
                ym(ymetrikaID, 'reachGoal', '301');
            } else {
			    ym(ymetrikaID, 'reachGoal', '9');
            }
			break;
        case '#consultation-on-premise':
            if (getPage() == 'on-premise') {
                ym(ymetrikaID, 'reachGoal', '301');
            } else {
			    ym(ymetrikaID, 'reachGoal', '301');
            }
			break;
        case '#pilot-modal':
            if (getPage() == 'on-premise') {
                ym(ymetrikaID, 'reachGoal', '308');
            } else {
			    ym(ymetrikaID, 'reachGoal', '306');
            }
            break;
		case '#video-mac-intel':
			ym(ymetrikaID, 'reachGoal', '71');
			break;
		case '#video-mac-apple':
			ym(ymetrikaID, 'reachGoal', '72');
			break;
        case '#video-linux-deb-standart':
        case '#video-linux-deb-terminal':
			ym(ymetrikaID, 'reachGoal', '73');
			break;
        case '#video-linux-tar':
			ym(ymetrikaID, 'reachGoal', '74');
			break;
        case '#video-windows':
			ym(ymetrikaID, 'reachGoal', '75');
			break;
		case '#video-czech':
			ym(ymetrikaID, 'reachGoal', '18');
			break;
		case '#video-detailing-group':
			ym(ymetrikaID, 'reachGoal', '19');
			break;
		case '#video-daily':
			ym(ymetrikaID, 'reachGoal', '20');
			break;
		case '#video-good-people':
			ym(ymetrikaID, 'reachGoal', '21');
			break;
	}
}
