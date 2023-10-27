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
window.REMODAL_GLOBALS={NAMESPACE:"remodal",DEFAULTS:{hashTracking:!1}},
    !(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], function($) {
      return factory(root, $);
    });
  } else if (typeof exports === 'object') {
    factory(root, require('jquery'));
  } else {
    factory(root, root.jQuery || root.Zepto);
  }
})(this, function(global, $) {

  'use strict';

  /**
   * Name of the plugin
   * @private
   * @const
   * @type {String}
   */
  var PLUGIN_NAME = 'remodal';

  /**
   * Namespace for CSS and events
   * @private
   * @const
   * @type {String}
   */
  var NAMESPACE = global.REMODAL_GLOBALS && global.REMODAL_GLOBALS.NAMESPACE || PLUGIN_NAME;

  /**
   * Animationstart event with vendor prefixes
   * @private
   * @const
   * @type {String}
   */
  var ANIMATIONSTART_EVENTS = $.map(
    ['animationstart', 'webkitAnimationStart', 'MSAnimationStart', 'oAnimationStart'],

    function(eventName) {
      return eventName + '.' + NAMESPACE;
    }

  ).join(' ');

  /**
   * Animationend event with vendor prefixes
   * @private
   * @const
   * @type {String}
   */
  var ANIMATIONEND_EVENTS = $.map(
    ['animationend', 'webkitAnimationEnd', 'MSAnimationEnd', 'oAnimationEnd'],

    function(eventName) {
      return eventName + '.' + NAMESPACE;
    }

  ).join(' ');

  /**
   * Default settings
   * @private
   * @const
   * @type {Object}
   */
  var DEFAULTS = $.extend({
    hashTracking: true,
    closeOnConfirm: true,
    closeOnCancel: true,
    closeOnEscape: true,
    closeOnOutsideClick: true,
    modifier: '',
    appendTo: null
  }, global.REMODAL_GLOBALS && global.REMODAL_GLOBALS.DEFAULTS);

  /**
   * States of the Remodal
   * @private
   * @const
   * @enum {String}
   */
  var STATES = {
    CLOSING: 'closing',
    CLOSED: 'closed',
    OPENING: 'opening',
    OPENED: 'opened'
  };

  /**
   * Reasons of the state change.
   * @private
   * @const
   * @enum {String}
   */
  var STATE_CHANGE_REASONS = {
    CONFIRMATION: 'confirmation',
    CANCELLATION: 'cancellation'
  };

  /**
   * Is animation supported?
   * @private
   * @const
   * @type {Boolean}
   */
  var IS_ANIMATION = (function() {
    var style = document.createElement('div').style;

    return style.animationName !== undefined ||
      style.WebkitAnimationName !== undefined ||
      style.MozAnimationName !== undefined ||
      style.msAnimationName !== undefined ||
      style.OAnimationName !== undefined;
  })();

  /**
   * Is iOS?
   * @private
   * @const
   * @type {Boolean}
   */
  var IS_IOS = /iPad|iPhone|iPod/.test(navigator.platform);

  /**
   * Current modal
   * @private
   * @type {Remodal}
   */
  var current;

  /**
   * Scrollbar position
   * @private
   * @type {Number}
   */
  var scrollTop;

  /**
   * Returns an animation duration
   * @private
   * @param {jQuery} $elem
   * @returns {Number}
   */
  function getAnimationDuration($elem) {
    if (
      IS_ANIMATION &&
      $elem.css('animation-name') === 'none' &&
      $elem.css('-webkit-animation-name') === 'none' &&
      $elem.css('-moz-animation-name') === 'none' &&
      $elem.css('-o-animation-name') === 'none' &&
      $elem.css('-ms-animation-name') === 'none'
    ) {
      return 0;
    }

    var duration = $elem.css('animation-duration') ||
      $elem.css('-webkit-animation-duration') ||
      $elem.css('-moz-animation-duration') ||
      $elem.css('-o-animation-duration') ||
      $elem.css('-ms-animation-duration') ||
      '0s';

    var delay = $elem.css('animation-delay') ||
      $elem.css('-webkit-animation-delay') ||
      $elem.css('-moz-animation-delay') ||
      $elem.css('-o-animation-delay') ||
      $elem.css('-ms-animation-delay') ||
      '0s';

    var iterationCount = $elem.css('animation-iteration-count') ||
      $elem.css('-webkit-animation-iteration-count') ||
      $elem.css('-moz-animation-iteration-count') ||
      $elem.css('-o-animation-iteration-count') ||
      $elem.css('-ms-animation-iteration-count') ||
      '1';

    var max;
    var len;
    var num;
    var i;

    duration = duration.split(', ');
    delay = delay.split(', ');
    iterationCount = iterationCount.split(', ');

    // The 'duration' size is the same as the 'delay' size
    for (i = 0, len = duration.length, max = Number.NEGATIVE_INFINITY; i < len; i++) {
      num = parseFloat(duration[i]) * parseInt(iterationCount[i], 10) + parseFloat(delay[i]);

      if (num > max) {
        max = num;
      }
    }

    return max;
  }

  /**
   * Returns a scrollbar width
   * @private
   * @returns {Number}
   */
  function getScrollbarWidth() {
    if ($(document).height() <= $(window).height()) {
      return 0;
    }

    var outer = document.createElement('div');
    var inner = document.createElement('div');
    var widthNoScroll;
    var widthWithScroll;

    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    document.body.appendChild(outer);

    widthNoScroll = outer.offsetWidth;

    // Force scrollbars
    outer.style.overflow = 'scroll';

    // Add inner div
    inner.style.width = '100%';
    outer.appendChild(inner);

    widthWithScroll = inner.offsetWidth;

    // Remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }

  /**
   * Locks the screen
   * @private
   */
  function lockScreen() {
    if (IS_IOS) {
      return;
    }

    var $html = $('html');
    var lockedClass = namespacify('is-locked');
    var paddingRight;
    var $body;

    if (!$html.hasClass(lockedClass)) {
      $body = $(document.body);

      // Zepto does not support '-=', '+=' in the `css` method
      paddingRight = parseInt($body.css('padding-right'), 10) + getScrollbarWidth();

      $body.css('padding-right', paddingRight + 'px');
      $html.addClass(lockedClass);
    }
  }

  /**
   * Unlocks the screen
   * @private
   */
  function unlockScreen() {
    if (IS_IOS) {
      return;
    }

    var $html = $('html');
    var lockedClass = namespacify('is-locked');
    var paddingRight;
    var $body;

    if ($html.hasClass(lockedClass)) {
      $body = $(document.body);

      // Zepto does not support '-=', '+=' in the `css` method
      paddingRight = parseInt($body.css('padding-right'), 10) - getScrollbarWidth();

      $body.css('padding-right', paddingRight + 'px');
      $html.removeClass(lockedClass);
    }
  }

  /**
   * Sets a state for an instance
   * @private
   * @param {Remodal} instance
   * @param {STATES} state
   * @param {Boolean} isSilent If true, Remodal does not trigger events
   * @param {String} Reason of a state change.
   */
  function setState(instance, state, isSilent, reason) {

    var newState = namespacify('is', state);
    var allStates = [namespacify('is', STATES.CLOSING),
                     namespacify('is', STATES.OPENING),
                     namespacify('is', STATES.CLOSED),
                     namespacify('is', STATES.OPENED)].join(' ');

    instance.$bg
      .removeClass(allStates)
      .addClass(newState);

    instance.$overlay
      .removeClass(allStates)
      .addClass(newState);

    instance.$wrapper
      .removeClass(allStates)
      .addClass(newState);

    instance.$modal
      .removeClass(allStates)
      .addClass(newState);

    instance.state = state;
    !isSilent && instance.$modal.trigger({
      type: state,
      reason: reason
    }, [{ reason: reason }]);
  }

  /**
   * Synchronizes with the animation
   * @param {Function} doBeforeAnimation
   * @param {Function} doAfterAnimation
   * @param {Remodal} instance
   */
  function syncWithAnimation(doBeforeAnimation, doAfterAnimation, instance) {
    var runningAnimationsCount = 0;

    var handleAnimationStart = function(e) {
      if (e.target !== this) {
        return;
      }

      runningAnimationsCount++;
    };

    var handleAnimationEnd = function(e) {
      if (e.target !== this) {
        return;
      }

      if (--runningAnimationsCount === 0) {

        // Remove event listeners
        $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
          instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
        });

        doAfterAnimation();
      }
    };

    $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
      instance[elemName]
        .on(ANIMATIONSTART_EVENTS, handleAnimationStart)
        .on(ANIMATIONEND_EVENTS, handleAnimationEnd);
    });

    doBeforeAnimation();

    // If the animation is not supported by a browser or its duration is 0
    if (
      getAnimationDuration(instance.$bg) === 0 &&
      getAnimationDuration(instance.$overlay) === 0 &&
      getAnimationDuration(instance.$wrapper) === 0 &&
      getAnimationDuration(instance.$modal) === 0
    ) {

      // Remove event listeners
      $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
        instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
      });

      doAfterAnimation();
    }
  }

  /**
   * Closes immediately
   * @private
   * @param {Remodal} instance
   */
  function halt(instance) {
    if (instance.state === STATES.CLOSED) {
      return;
    }

    $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
      instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
    });

    instance.$bg.removeClass(instance.settings.modifier);
    instance.$overlay.removeClass(instance.settings.modifier).hide();
    instance.$wrapper.hide();
    unlockScreen();
    setState(instance, STATES.CLOSED, true);
  }

  /**
   * Parses a string with options
   * @private
   * @param str
   * @returns {Object}
   */
  function parseOptions(str) {
    var obj = {};
    var arr;
    var len;
    var val;
    var i;

    // Remove spaces before and after delimiters
    str = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',');

    // Parse a string
    arr = str.split(',');
    for (i = 0, len = arr.length; i < len; i++) {
      arr[i] = arr[i].split(':');
      val = arr[i][1];

      // Convert a string value if it is like a boolean
      if (typeof val === 'string' || val instanceof String) {
        val = val === 'true' || (val === 'false' ? false : val);
      }

      // Convert a string value if it is like a number
      if (typeof val === 'string' || val instanceof String) {
        val = !isNaN(val) ? +val : val;
      }

      obj[arr[i][0]] = val;
    }

    return obj;
  }

  /**
   * Generates a string separated by dashes and prefixed with NAMESPACE
   * @private
   * @param {...String}
   * @returns {String}
   */
  function namespacify() {
    var result = NAMESPACE;

    for (var i = 0; i < arguments.length; ++i) {
      result += '-' + arguments[i];
    }

    return result;
  }

  /**
   * Handles the hashchange event
   * @private
   * @listens hashchange
   */
  function handleHashChangeEvent() {
    var id = location.hash.replace('#', '');
    var instance;
    var $elem;

    if (!id) {

      // Check if we have currently opened modal and animation was completed
      if (current && current.state === STATES.OPENED && current.settings.hashTracking) {
        current.close();
      }
    } else {

      // Catch syntax error if your hash is bad
      try {
        $elem = $(
          '[data-' + PLUGIN_NAME + '-id="' + id + '"]'
        );
      } catch (err) {}

      if ($elem && $elem.length) {
        instance = $[PLUGIN_NAME].lookup[$elem.data(PLUGIN_NAME)];

        if (instance && instance.settings.hashTracking) {
          instance.open();
        }
      }

    }
  }

  /**
   * Remodal constructor
   * @constructor
   * @param {jQuery} $modal
   * @param {Object} options
   */
  function Remodal($modal, options) {
    var $body = $(document.body);
    var $appendTo = $body;
    var remodal = this;

    remodal.settings = $.extend({}, DEFAULTS, options);
    remodal.index = $[PLUGIN_NAME].lookup.push(remodal) - 1;
    remodal.state = STATES.CLOSED;

    remodal.$overlay = $('.' + namespacify('overlay'));

    if (remodal.settings.appendTo !== null && remodal.settings.appendTo.length) {
      $appendTo = $(remodal.settings.appendTo);
    }

    if (!remodal.$overlay.length) {
      remodal.$overlay = $('<div>').addClass(namespacify('overlay') + ' ' + namespacify('is', STATES.CLOSED)).hide();
      $appendTo.append(remodal.$overlay);
    }

    remodal.$bg = $('.' + namespacify('bg')).addClass(namespacify('is', STATES.CLOSED));

    remodal.$modal = $modal
      .addClass(
        NAMESPACE + ' ' +
        namespacify('is-initialized') + ' ' +
        remodal.settings.modifier + ' ' +
        namespacify('is', STATES.CLOSED))
      .attr('tabindex', '-1');

    remodal.$wrapper = $('<div>')
      .addClass(
        namespacify('wrapper') + ' ' +
        remodal.settings.modifier + ' ' +
        namespacify('is', STATES.CLOSED))
      .hide()
      .append(remodal.$modal);
    $appendTo.append(remodal.$wrapper);

    // Add the event listener for the close button
    remodal.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="close"]', function(e) {
      e.preventDefault();

      remodal.close();
    });

    // Add the event listener for the cancel button
    remodal.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="cancel"]', function(e) {
      e.preventDefault();

      remodal.$modal.trigger(STATE_CHANGE_REASONS.CANCELLATION);

      if (remodal.settings.closeOnCancel) {
        remodal.close(STATE_CHANGE_REASONS.CANCELLATION);
      }
    });

    // Add the event listener for the confirm button
    remodal.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="confirm"]', function(e) {
      e.preventDefault();

      remodal.$modal.trigger(STATE_CHANGE_REASONS.CONFIRMATION);

      if (remodal.settings.closeOnConfirm) {
        remodal.close(STATE_CHANGE_REASONS.CONFIRMATION);
      }
    });

    // Add the event listener for the overlay
    remodal.$wrapper.on('click.' + NAMESPACE, function(e) {
      var $target = $(e.target);

      if (!$target.hasClass(namespacify('wrapper'))) {
        return;
      }

      if (remodal.settings.closeOnOutsideClick) {
        remodal.close();
      }
    });
  }

  /**
   * Opens a modal window
   * @public
   */
  Remodal.prototype.open = function() {
    var remodal = this;
    var id;

    // Check if the animation was completed
    if (remodal.state === STATES.OPENING || remodal.state === STATES.CLOSING) {
      return;
    }

    id = remodal.$modal.attr('data-' + PLUGIN_NAME + '-id');

    if (id && remodal.settings.hashTracking) {
      scrollTop = $(window).scrollTop();
      location.hash = id;
    }

    if (current && current !== remodal) {
      halt(current);
    }

    current = remodal;
    lockScreen();
    remodal.$bg.addClass(remodal.settings.modifier);
    remodal.$overlay.addClass(remodal.settings.modifier).show();
    remodal.$wrapper.show().scrollTop(0);
    remodal.$modal.focus();

    syncWithAnimation(
      function() {
        setState(remodal, STATES.OPENING);
      },

      function() {
        setState(remodal, STATES.OPENED);
      },

      remodal);
  };

  /**
   * Closes a modal window
   * @public
   * @param {String} reason
   */
  Remodal.prototype.close = function(reason) {
    var remodal = this;

    // Check if the animation was completed
    if (remodal.state === STATES.OPENING || remodal.state === STATES.CLOSING || remodal.state === STATES.CLOSED) {
      return;
    }

    if (
      remodal.settings.hashTracking &&
      remodal.$modal.attr('data-' + PLUGIN_NAME + '-id') === location.hash.substr(1)
    ) {
      location.hash = '';
      $(window).scrollTop(scrollTop);
    }

    syncWithAnimation(
      function() {
        setState(remodal, STATES.CLOSING, false, reason);
      },

      function() {
        remodal.$bg.removeClass(remodal.settings.modifier);
        remodal.$overlay.removeClass(remodal.settings.modifier).hide();
        remodal.$wrapper.hide();
        unlockScreen();

        setState(remodal, STATES.CLOSED, false, reason);
      },

      remodal);
  };

  /**
   * Returns a current state of a modal
   * @public
   * @returns {STATES}
   */
  Remodal.prototype.getState = function() {
    return this.state;
  };

  /**
   * Destroys a modal
   * @public
   */
  Remodal.prototype.destroy = function() {
    var lookup = $[PLUGIN_NAME].lookup;
    var instanceCount;

    halt(this);
    this.$wrapper.remove();

    delete lookup[this.index];
    instanceCount = $.grep(lookup, function(instance) {
      return !!instance;
    }).length;

    if (instanceCount === 0) {
      this.$overlay.remove();
      this.$bg.removeClass(
        namespacify('is', STATES.CLOSING) + ' ' +
        namespacify('is', STATES.OPENING) + ' ' +
        namespacify('is', STATES.CLOSED) + ' ' +
        namespacify('is', STATES.OPENED));
    }
  };

  /**
   * Special plugin object for instances
   * @public
   * @type {Object}
   */
  $[PLUGIN_NAME] = {
    lookup: []
  };

  /**
   * Plugin constructor
   * @constructor
   * @param {Object} options
   * @returns {JQuery}
   */
  $.fn[PLUGIN_NAME] = function(opts) {
    var instance;
    var $elem;

    this.each(function(index, elem) {
      $elem = $(elem);

      if ($elem.data(PLUGIN_NAME) == null) {
        instance = new Remodal($elem, opts);
        $elem.data(PLUGIN_NAME, instance.index);

        if (
          instance.settings.hashTracking &&
          $elem.attr('data-' + PLUGIN_NAME + '-id') === location.hash.substr(1)
        ) {
          instance.open();
        }
      } else {
        instance = $[PLUGIN_NAME].lookup[$elem.data(PLUGIN_NAME)];
      }
    });

    return instance;
  };

  $(document).ready(function() {

    // data-remodal-target opens a modal window with the special Id
    $(document).on('click', '[data-' + PLUGIN_NAME + '-target]', function(e) {
      e.preventDefault();

      var elem = e.currentTarget;
      var id = elem.getAttribute('data-' + PLUGIN_NAME + '-target');
      var $target = $('[data-' + PLUGIN_NAME + '-id="' + id + '"]');

      $[PLUGIN_NAME].lookup[$target.data(PLUGIN_NAME)].open();
    });

    // Auto initialization of modal windows
    // They should have the 'remodal' class attribute
    // Also you can write the `data-remodal-options` attribute to pass params into the modal
    $(document).find('.' + NAMESPACE).each(function(i, container) {
      var $container = $(container);
      var options = $container.data(PLUGIN_NAME + '-options');

      if (!options) {
        options = {};
      } else if (typeof options === 'string' || options instanceof String) {
        options = parseOptions(options);
      }

      $container[PLUGIN_NAME](options);
    });

    // Handles the keydown event
    $(document).on('keydown.' + NAMESPACE, function(e) {
      if (current && current.settings.closeOnEscape && current.state === STATES.OPENED && e.keyCode === 27) {
        current.close();
      }
    });

    // Handles the hashchange event
    $(window).on('hashchange.' + NAMESPACE, handleHashChangeEvent);
  });
});

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
/* ---------------------*/
/* ---------------------*/
/*  TouchSwipe v1.6.18  */
/* ---------------------*/
/* ---------------------*/
!function(factory){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],factory):factory("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function($){"use strict";function init(options){return!options||void 0!==options.allowPageScroll||void 0===options.swipe&&void 0===options.swipeStatus||(options.allowPageScroll=NONE),void 0!==options.click&&void 0===options.tap&&(options.tap=options.click),options||(options={}),options=$.extend({},$.fn.swipe.defaults,options),this.each(function(){var $this=$(this),plugin=$this.data(PLUGIN_NS);plugin||(plugin=new TouchSwipe(this,options),$this.data(PLUGIN_NS,plugin))})}function TouchSwipe(element,options){function touchStart(jqEvent){if(!(getTouchInProgress()||$(jqEvent.target).closest(options.excludedElements,$element).length>0)){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(!event.pointerType||"mouse"!=event.pointerType||0!=options.fallbackToMouseEvents){var ret,touches=event.touches,evt=touches?touches[0]:event;return phase=PHASE_START,touches?fingerCount=touches.length:options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),distance=0,direction=null,currentDirection=null,pinchDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,maximumsMap=createMaximumsData(),cancelMultiFingerRelease(),createFingerData(0,evt),!touches||fingerCount===options.fingers||options.fingers===ALL_FINGERS||hasPinches()?(startTime=getTimeStamp(),2==fingerCount&&(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)),(options.swipeStatus||options.pinchStatus)&&(ret=triggerHandler(event,phase))):ret=!1,ret===!1?(phase=PHASE_CANCEL,triggerHandler(event,phase),ret):(options.hold&&(holdTimeout=setTimeout($.proxy(function(){$element.trigger("hold",[event.target]),options.hold&&(ret=options.hold.call($element,event,event.target))},this),options.longTapThreshold)),setTouchInProgress(!0),null)}}}function touchMove(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(phase!==PHASE_END&&phase!==PHASE_CANCEL&&!inMultiFingerRelease()){var ret,touches=event.touches,evt=touches?touches[0]:event,currentFinger=updateFingerData(evt);if(endTime=getTimeStamp(),touches&&(fingerCount=touches.length),options.hold&&clearTimeout(holdTimeout),phase=PHASE_MOVE,2==fingerCount&&(0==startTouchesDistance?(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)):(updateFingerData(touches[1]),endTouchesDistance=calculateTouchesDistance(fingerData[0].end,fingerData[1].end),pinchDirection=calculatePinchDirection(fingerData[0].end,fingerData[1].end)),pinchZoom=calculatePinchZoom(startTouchesDistance,endTouchesDistance),pinchDistance=Math.abs(startTouchesDistance-endTouchesDistance)),fingerCount===options.fingers||options.fingers===ALL_FINGERS||!touches||hasPinches()){if(direction=calculateDirection(currentFinger.start,currentFinger.end),currentDirection=calculateDirection(currentFinger.last,currentFinger.end),validateDefaultEvent(jqEvent,currentDirection),distance=calculateDistance(currentFinger.start,currentFinger.end),duration=calculateDuration(),setMaxDistance(direction,distance),ret=triggerHandler(event,phase),!options.triggerOnTouchEnd||options.triggerOnTouchLeave){var inBounds=!0;if(options.triggerOnTouchLeave){var bounds=getbounds(this);inBounds=isInBounds(currentFinger.end,bounds)}!options.triggerOnTouchEnd&&inBounds?phase=getNextPhase(PHASE_MOVE):options.triggerOnTouchLeave&&!inBounds&&(phase=getNextPhase(PHASE_END)),phase!=PHASE_CANCEL&&phase!=PHASE_END||triggerHandler(event,phase)}}else phase=PHASE_CANCEL,triggerHandler(event,phase);ret===!1&&(phase=PHASE_CANCEL,triggerHandler(event,phase))}}function touchEnd(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent,touches=event.touches;if(touches){if(touches.length&&!inMultiFingerRelease())return startMultiFingerRelease(event),!0;if(touches.length&&inMultiFingerRelease())return!0}return inMultiFingerRelease()&&(fingerCount=fingerCountAtRelease),endTime=getTimeStamp(),duration=calculateDuration(),didSwipeBackToCancel()||!validateSwipeDistance()?(phase=PHASE_CANCEL,triggerHandler(event,phase)):options.triggerOnTouchEnd||options.triggerOnTouchEnd===!1&&phase===PHASE_MOVE?(options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),phase=PHASE_END,triggerHandler(event,phase)):!options.triggerOnTouchEnd&&hasTap()?(phase=PHASE_END,triggerHandlerForGesture(event,phase,TAP)):phase===PHASE_MOVE&&(phase=PHASE_CANCEL,triggerHandler(event,phase)),setTouchInProgress(!1),null}function touchCancel(){fingerCount=0,endTime=0,startTime=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,cancelMultiFingerRelease(),setTouchInProgress(!1)}function touchLeave(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;options.triggerOnTouchLeave&&(phase=getNextPhase(PHASE_END),triggerHandler(event,phase))}function removeListeners(){$element.unbind(START_EV,touchStart),$element.unbind(CANCEL_EV,touchCancel),$element.unbind(MOVE_EV,touchMove),$element.unbind(END_EV,touchEnd),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave),setTouchInProgress(!1)}function getNextPhase(currentPhase){var nextPhase=currentPhase,validTime=validateSwipeTime(),validDistance=validateSwipeDistance(),didCancel=didSwipeBackToCancel();return!validTime||didCancel?nextPhase=PHASE_CANCEL:!validDistance||currentPhase!=PHASE_MOVE||options.triggerOnTouchEnd&&!options.triggerOnTouchLeave?!validDistance&&currentPhase==PHASE_END&&options.triggerOnTouchLeave&&(nextPhase=PHASE_CANCEL):nextPhase=PHASE_END,nextPhase}function triggerHandler(event,phase){var ret,touches=event.touches;return(didSwipe()||hasSwipes())&&(ret=triggerHandlerForGesture(event,phase,SWIPE)),(didPinch()||hasPinches())&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,PINCH)),didDoubleTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,DOUBLE_TAP):didLongTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,LONG_TAP):didTap()&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,TAP)),phase===PHASE_CANCEL&&touchCancel(event),phase===PHASE_END&&(touches?touches.length||touchCancel(event):touchCancel(event)),ret}function triggerHandlerForGesture(event,phase,gesture){var ret;if(gesture==SWIPE){if($element.trigger("swipeStatus",[phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection]),options.swipeStatus&&(ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection),ret===!1))return!1;if(phase==PHASE_END&&validateSwipe()){if(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),$element.trigger("swipe",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipe&&(ret=options.swipe.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection),ret===!1))return!1;switch(direction){case LEFT:$element.trigger("swipeLeft",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeLeft&&(ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case RIGHT:$element.trigger("swipeRight",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeRight&&(ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case UP:$element.trigger("swipeUp",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeUp&&(ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case DOWN:$element.trigger("swipeDown",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeDown&&(ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection))}}}if(gesture==PINCH){if($element.trigger("pinchStatus",[phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchStatus&&(ret=options.pinchStatus.call($element,event,phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData),ret===!1))return!1;if(phase==PHASE_END&&validatePinch())switch(pinchDirection){case IN:$element.trigger("pinchIn",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchIn&&(ret=options.pinchIn.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData));break;case OUT:$element.trigger("pinchOut",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchOut&&(ret=options.pinchOut.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData))}}return gesture==TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),hasDoubleTap()&&!inDoubleTap()?(doubleTapStartTime=getTimeStamp(),singleTapTimeout=setTimeout($.proxy(function(){doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target))},this),options.doubleTapThreshold)):(doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target)))):gesture==DOUBLE_TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),doubleTapStartTime=null,$element.trigger("doubletap",[event.target]),options.doubleTap&&(ret=options.doubleTap.call($element,event,event.target))):gesture==LONG_TAP&&(phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),doubleTapStartTime=null,$element.trigger("longtap",[event.target]),options.longTap&&(ret=options.longTap.call($element,event,event.target)))),ret}function validateSwipeDistance(){var valid=!0;return null!==options.threshold&&(valid=distance>=options.threshold),valid}function didSwipeBackToCancel(){var cancelled=!1;return null!==options.cancelThreshold&&null!==direction&&(cancelled=getMaxDistance(direction)-distance>=options.cancelThreshold),cancelled}function validatePinchDistance(){return null!==options.pinchThreshold?pinchDistance>=options.pinchThreshold:!0}function validateSwipeTime(){var result;return result=options.maxTimeThreshold?!(duration>=options.maxTimeThreshold):!0}function validateDefaultEvent(jqEvent,direction){if(options.preventDefaultEvents!==!1)if(options.allowPageScroll===NONE)jqEvent.preventDefault();else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:(options.swipeLeft&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case RIGHT:(options.swipeRight&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case UP:(options.swipeUp&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case DOWN:(options.swipeDown&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case NONE:}}}function validatePinch(){var hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),hasCorrectDistance=validatePinchDistance();return hasCorrectFingerCount&&hasEndPoint&&hasCorrectDistance}function hasPinches(){return!!(options.pinchStatus||options.pinchIn||options.pinchOut)}function didPinch(){return!(!validatePinch()||!hasPinches())}function validateSwipe(){var hasValidTime=validateSwipeTime(),hasValidDistance=validateSwipeDistance(),hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),didCancel=didSwipeBackToCancel(),valid=!didCancel&&hasEndPoint&&hasCorrectFingerCount&&hasValidDistance&&hasValidTime;return valid}function hasSwipes(){return!!(options.swipe||options.swipeStatus||options.swipeLeft||options.swipeRight||options.swipeUp||options.swipeDown)}function didSwipe(){return!(!validateSwipe()||!hasSwipes())}function validateFingers(){return fingerCount===options.fingers||options.fingers===ALL_FINGERS||!SUPPORTS_TOUCH}function validateEndPoint(){return 0!==fingerData[0].end.x}function hasTap(){return!!options.tap}function hasDoubleTap(){return!!options.doubleTap}function hasLongTap(){return!!options.longTap}function validateDoubleTap(){if(null==doubleTapStartTime)return!1;var now=getTimeStamp();return hasDoubleTap()&&now-doubleTapStartTime<=options.doubleTapThreshold}function inDoubleTap(){return validateDoubleTap()}function validateTap(){return(1===fingerCount||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance<options.threshold)}function validateLongTap(){return duration>options.longTapThreshold&&DOUBLE_TAP_THRESHOLD>distance}function didTap(){return!(!validateTap()||!hasTap())}function didDoubleTap(){return!(!validateDoubleTap()||!hasDoubleTap())}function didLongTap(){return!(!validateLongTap()||!hasLongTap())}function startMultiFingerRelease(event){previousTouchEndTime=getTimeStamp(),fingerCountAtRelease=event.touches.length+1}function cancelMultiFingerRelease(){previousTouchEndTime=0,fingerCountAtRelease=0}function inMultiFingerRelease(){var withinThreshold=!1;if(previousTouchEndTime){var diff=getTimeStamp()-previousTouchEndTime;diff<=options.fingerReleaseThreshold&&(withinThreshold=!0)}return withinThreshold}function getTouchInProgress(){return!($element.data(PLUGIN_NS+"_intouch")!==!0)}function setTouchInProgress(val){$element&&(val===!0?($element.bind(MOVE_EV,touchMove),$element.bind(END_EV,touchEnd),LEAVE_EV&&$element.bind(LEAVE_EV,touchLeave)):($element.unbind(MOVE_EV,touchMove,!1),$element.unbind(END_EV,touchEnd,!1),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave,!1)),$element.data(PLUGIN_NS+"_intouch",val===!0))}function createFingerData(id,evt){var f={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return f.start.x=f.last.x=f.end.x=evt.pageX||evt.clientX,f.start.y=f.last.y=f.end.y=evt.pageY||evt.clientY,fingerData[id]=f,f}function updateFingerData(evt){var id=void 0!==evt.identifier?evt.identifier:0,f=getFingerData(id);return null===f&&(f=createFingerData(id,evt)),f.last.x=f.end.x,f.last.y=f.end.y,f.end.x=evt.pageX||evt.clientX,f.end.y=evt.pageY||evt.clientY,f}function getFingerData(id){return fingerData[id]||null}function setMaxDistance(direction,distance){direction!=NONE&&(distance=Math.max(distance,getMaxDistance(direction)),maximumsMap[direction].distance=distance)}function getMaxDistance(direction){return maximumsMap[direction]?maximumsMap[direction].distance:void 0}function createMaximumsData(){var maxData={};return maxData[LEFT]=createMaximumVO(LEFT),maxData[RIGHT]=createMaximumVO(RIGHT),maxData[UP]=createMaximumVO(UP),maxData[DOWN]=createMaximumVO(DOWN),maxData}function createMaximumVO(dir){return{direction:dir,distance:0}}function calculateDuration(){return endTime-startTime}function calculateTouchesDistance(startPoint,endPoint){var diffX=Math.abs(startPoint.x-endPoint.x),diffY=Math.abs(startPoint.y-endPoint.y);return Math.round(Math.sqrt(diffX*diffX+diffY*diffY))}function calculatePinchZoom(startDistance,endDistance){var percent=endDistance/startDistance*1;return percent.toFixed(2)}function calculatePinchDirection(){return 1>pinchZoom?OUT:IN}function calculateDistance(startPoint,endPoint){return Math.round(Math.sqrt(Math.pow(endPoint.x-startPoint.x,2)+Math.pow(endPoint.y-startPoint.y,2)))}function calculateAngle(startPoint,endPoint){var x=startPoint.x-endPoint.x,y=endPoint.y-startPoint.y,r=Math.atan2(y,x),angle=Math.round(180*r/Math.PI);return 0>angle&&(angle=360-Math.abs(angle)),angle}function calculateDirection(startPoint,endPoint){if(comparePoints(startPoint,endPoint))return NONE;var angle=calculateAngle(startPoint,endPoint);return 45>=angle&&angle>=0?LEFT:360>=angle&&angle>=315?LEFT:angle>=135&&225>=angle?RIGHT:angle>45&&135>angle?DOWN:UP}function getTimeStamp(){var now=new Date;return now.getTime()}function getbounds(el){el=$(el);var offset=el.offset(),bounds={left:offset.left,right:offset.left+el.outerWidth(),top:offset.top,bottom:offset.top+el.outerHeight()};return bounds}function isInBounds(point,bounds){return point.x>bounds.left&&point.x<bounds.right&&point.y>bounds.top&&point.y<bounds.bottom}function comparePoints(pointA,pointB){return pointA.x==pointB.x&&pointA.y==pointB.y}var options=$.extend({},options),useTouchEvents=SUPPORTS_TOUCH||SUPPORTS_POINTER||!options.fallbackToMouseEvents,START_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerDown":"pointerdown":"touchstart":"mousedown",MOVE_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerMove":"pointermove":"touchmove":"mousemove",END_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerUp":"pointerup":"touchend":"mouseup",LEAVE_EV=useTouchEvents?SUPPORTS_POINTER?"mouseleave":null:"mouseleave",CANCEL_EV=SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerCancel":"pointercancel":"touchcancel",distance=0,direction=null,currentDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,pinchDirection=0,maximumsMap=null,$element=$(element),phase="start",fingerCount=0,fingerData={},startTime=0,endTime=0,previousTouchEndTime=0,fingerCountAtRelease=0,doubleTapStartTime=0,singleTapTimeout=null,holdTimeout=null;try{$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel)}catch(e){$.error("events not supported "+START_EV+","+CANCEL_EV+" on jQuery.swipe")}this.enable=function(){return this.disable(),$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel),$element},this.disable=function(){return removeListeners(),$element},this.destroy=function(){removeListeners(),$element.data(PLUGIN_NS,null),$element=null},this.option=function(property,value){if("object"==typeof property)options=$.extend(options,property);else if(void 0!==options[property]){if(void 0===value)return options[property];options[property]=value}else{if(!property)return options;$.error("Option "+property+" does not exist on jQuery.swipe.options")}return null}}var VERSION="1.6.18",LEFT="left",RIGHT="right",UP="up",DOWN="down",IN="in",OUT="out",NONE="none",AUTO="auto",SWIPE="swipe",PINCH="pinch",TAP="tap",DOUBLE_TAP="doubletap",LONG_TAP="longtap",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",DOUBLE_TAP_THRESHOLD=10,PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH="ontouchstart"in window,SUPPORTS_POINTER_IE10=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!SUPPORTS_TOUCH,SUPPORTS_POINTER=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!SUPPORTS_TOUCH,PLUGIN_NS="TouchSwipe",defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&"string"==typeof method){if(plugin[method])return plugin[method].apply(plugin,Array.prototype.slice.call(arguments,1));$.error("Method "+method+" does not exist on jQuery.swipe")}else if(plugin&&"object"==typeof method)plugin.option.apply(plugin,arguments);else if(!(plugin||"object"!=typeof method&&method))return init.apply(this,arguments);return $this},$.fn.swipe.version=VERSION,$.fn.swipe.defaults=defaults,$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL},$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN,IN:IN,OUT:OUT},$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:ALL_FINGERS}});

/* ---------------------*/
/* ---------------------*/
/* popperjs/core v2.11.8*/
/* ---------------------*/
/* ---------------------*/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,(function(e){"use strict";function t(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function o(e){return"undefined"!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}var i=Math.max,a=Math.min,s=Math.round;function f(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function c(){return!/^((?!chrome|android).)*safari/i.test(f())}function p(e,o,i){void 0===o&&(o=!1),void 0===i&&(i=!1);var a=e.getBoundingClientRect(),f=1,p=1;o&&r(e)&&(f=e.offsetWidth>0&&s(a.width)/e.offsetWidth||1,p=e.offsetHeight>0&&s(a.height)/e.offsetHeight||1);var u=(n(e)?t(e):window).visualViewport,l=!c()&&i,d=(a.left+(l&&u?u.offsetLeft:0))/f,h=(a.top+(l&&u?u.offsetTop:0))/p,m=a.width/f,v=a.height/p;return{width:m,height:v,top:h,right:d+m,bottom:h+v,left:d,x:d,y:h}}function u(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function l(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return((n(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return p(d(e)).left+u(e).scrollLeft}function m(e){return t(e).getComputedStyle(e)}function v(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function y(e,n,o){void 0===o&&(o=!1);var i,a,f=r(n),c=r(n)&&function(e){var t=e.getBoundingClientRect(),n=s(t.width)/e.offsetWidth||1,r=s(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(n),m=d(n),y=p(e,c,o),g={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(f||!f&&!o)&&(("body"!==l(n)||v(m))&&(g=(i=n)!==t(i)&&r(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:u(i)),r(n)?((b=p(n,!0)).x+=n.clientLeft,b.y+=n.clientTop):m&&(b.x=h(m))),{x:y.left+g.scrollLeft-b.x,y:y.top+g.scrollTop-b.y,width:y.width,height:y.height}}function g(e){var t=p(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function b(e){return"html"===l(e)?e:e.assignedSlot||e.parentNode||(o(e)?e.host:null)||d(e)}function x(e){return["html","body","#document"].indexOf(l(e))>=0?e.ownerDocument.body:r(e)&&v(e)?e:x(b(e))}function w(e,n){var r;void 0===n&&(n=[]);var o=x(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=t(o),s=i?[a].concat(a.visualViewport||[],v(o)?o:[]):o,f=n.concat(s);return i?f:f.concat(w(b(s)))}function O(e){return["table","td","th"].indexOf(l(e))>=0}function j(e){return r(e)&&"fixed"!==m(e).position?e.offsetParent:null}function E(e){for(var n=t(e),i=j(e);i&&O(i)&&"static"===m(i).position;)i=j(i);return i&&("html"===l(i)||"body"===l(i)&&"static"===m(i).position)?n:i||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&r(e)&&"fixed"===m(e).position)return null;var n=b(e);for(o(n)&&(n=n.host);r(n)&&["html","body"].indexOf(l(n))<0;){var i=m(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||n}var D="top",A="bottom",L="right",P="left",M="auto",k=[D,A,L,P],W="start",B="end",H="viewport",T="popper",R=k.reduce((function(e,t){return e.concat([t+"-"+W,t+"-"+B])}),[]),S=[].concat(k,[M]).reduce((function(e,t){return e.concat([t,t+"-"+W,t+"-"+B])}),[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function C(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function N(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function I(e,r,o){return r===H?N(function(e,n){var r=t(e),o=d(e),i=r.visualViewport,a=o.clientWidth,s=o.clientHeight,f=0,p=0;if(i){a=i.width,s=i.height;var u=c();(u||!u&&"fixed"===n)&&(f=i.offsetLeft,p=i.offsetTop)}return{width:a,height:s,x:f+h(e),y:p}}(e,o)):n(r)?function(e,t){var n=p(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(r,o):N(function(e){var t,n=d(e),r=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=i(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=i(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+h(e),c=-r.scrollTop;return"rtl"===m(o||n).direction&&(f+=i(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(d(e)))}function _(e,t,o,s){var f="clippingParents"===t?function(e){var t=w(b(e)),o=["absolute","fixed"].indexOf(m(e).position)>=0&&r(e)?E(e):e;return n(o)?t.filter((function(e){return n(e)&&C(e,o)&&"body"!==l(e)})):[]}(e):[].concat(t),c=[].concat(f,[o]),p=c[0],u=c.reduce((function(t,n){var r=I(e,n,s);return t.top=i(r.top,t.top),t.right=a(r.right,t.right),t.bottom=a(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),I(e,p,s));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function F(e){return e.split("-")[0]}function U(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?F(o):null,a=o?U(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case D:t={x:s,y:n.y-r.height};break;case A:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:f};break;case P:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?z(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case W:t[c]=t[c]-(n[p]/2-r[p]/2);break;case B:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}function Y(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function G(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function J(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,a=r.strategy,s=void 0===a?e.strategy:a,f=r.boundary,c=void 0===f?"clippingParents":f,u=r.rootBoundary,l=void 0===u?H:u,h=r.elementContext,m=void 0===h?T:h,v=r.altBoundary,y=void 0!==v&&v,g=r.padding,b=void 0===g?0:g,x=Y("number"!=typeof b?b:G(b,k)),w=m===T?"reference":T,O=e.rects.popper,j=e.elements[y?w:m],E=_(n(j)?j:j.contextElement||d(e.elements.popper),c,l,s),P=p(e.elements.reference),M=X({reference:P,element:O,strategy:"absolute",placement:i}),W=N(Object.assign({},O,M)),B=m===T?W:P,R={top:E.top-B.top+x.top,bottom:B.bottom-E.bottom+x.bottom,left:E.left-B.left+x.left,right:B.right-E.right+x.right},S=e.modifiersData.offset;if(m===T&&S){var V=S[i];Object.keys(R).forEach((function(e){var t=[L,A].indexOf(e)>=0?1:-1,n=[D,A].indexOf(e)>=0?"y":"x";R[e]+=V[n]*t}))}return R}var K={placement:"bottom",modifiers:[],strategy:"absolute"};function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Z(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,o=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?K:i;return function(e,t,r){void 0===r&&(r=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},K,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:f,setOptions:function(r){var i="function"==typeof r?r(f.options):r;l(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:n(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(t)};var s,p,d=function(e){var t=q(e);return V.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,f.options.modifiers),p=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(p).map((function(e){return p[e]}))));return f.orderedModifiers=d.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(Q(t,n)){f.rects={reference:y(t,E(n),"fixed"===f.options.strategy),popper:g(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!Q(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!p&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var $={passive:!0};var ee={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=t(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",r.update,$)})),f&&c.addEventListener("resize",r.update,$),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",r.update,$)})),f&&c.removeEventListener("resize",r.update,$)}},data:{}};var te={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.variation,f=e.offsets,c=e.position,p=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,h=e.isFixed,v=f.x,y=void 0===v?0:v,g=f.y,b=void 0===g?0:g,x="function"==typeof l?l({x:y,y:b}):{x:y,y:b};y=x.x,b=x.y;var w=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),j=P,M=D,k=window;if(u){var W=E(r),H="clientHeight",T="clientWidth";if(W===t(r)&&"static"!==m(W=d(r)).position&&"absolute"===c&&(H="scrollHeight",T="scrollWidth"),W=W,i===D||(i===P||i===L)&&a===B)M=A,b-=(h&&W===k&&k.visualViewport?k.visualViewport.height:W[H])-o.height,b*=p?1:-1;if(i===P||(i===D||i===A)&&a===B)j=L,y-=(h&&W===k&&k.visualViewport?k.visualViewport.width:W[T])-o.width,y*=p?1:-1}var R,S=Object.assign({position:c},u&&ne),V=!0===l?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:s(n*o)/o||0,y:s(r*o)/o||0}}({x:y,y:b},t(r)):{x:y,y:b};return y=V.x,b=V.y,p?Object.assign({},S,((R={})[M]=O?"0":"",R[j]=w?"0":"",R.transform=(k.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",R)):Object.assign({},S,((n={})[M]=O?b+"px":"",n[j]=w?y+"px":"",n.transform="",n))}var oe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:F(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ie={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];r(i)&&l(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});r(o)&&l(o)&&(Object.assign(o.style,a),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};var ae={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var r=F(e),o=[P,D].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[P,L].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},se={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(e){return e.replace(/left|right|bottom|top/g,(function(e){return se[e]}))}var ce={start:"end",end:"start"};function pe(e){return e.replace(/start|end/g,(function(e){return ce[e]}))}function ue(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?S:f,p=U(r),u=p?s?R:R.filter((function(e){return U(e)===p})):k,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=J(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[F(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var le={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,y=F(v),g=f||(y===v||!h?[fe(v)]:function(e){if(F(e)===M)return[];var t=fe(e);return[pe(e),t,pe(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(F(n)===M?ue(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,j=!0,E=b[0],k=0;k<b.length;k++){var B=b[k],H=F(B),T=U(B)===W,R=[D,A].indexOf(H)>=0,S=R?"width":"height",V=J(t,{placement:B,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),q=R?T?L:P:T?A:D;x[S]>w[S]&&(q=fe(q));var C=fe(q),N=[];if(i&&N.push(V[H]<=0),s&&N.push(V[q]<=0,V[C]<=0),N.every((function(e){return e}))){E=B,j=!1;break}O.set(B,N)}if(j)for(var I=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},_=h?3:1;_>0;_--){if("break"===I(_))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function de(e,t,n){return i(e,a(t,n))}var he={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=void 0===o||o,f=n.altAxis,c=void 0!==f&&f,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,v=n.tetherOffset,y=void 0===v?0:v,b=J(t,{boundary:p,rootBoundary:u,padding:d,altBoundary:l}),x=F(t.placement),w=U(t.placement),O=!w,j=z(x),M="x"===j?"y":"x",k=t.modifiersData.popperOffsets,B=t.rects.reference,H=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,R="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(k){if(s){var q,C="y"===j?D:P,N="y"===j?A:L,I="y"===j?"height":"width",_=k[j],X=_+b[C],Y=_-b[N],G=m?-H[I]/2:0,K=w===W?B[I]:H[I],Q=w===W?-H[I]:-B[I],Z=t.elements.arrow,$=m&&Z?g(Z):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[C],ne=ee[N],re=de(0,B[I],$[I]),oe=O?B[I]/2-G-re-te-R.mainAxis:K-re-te-R.mainAxis,ie=O?-B[I]/2+G+re+ne+R.mainAxis:Q+re+ne+R.mainAxis,ae=t.elements.arrow&&E(t.elements.arrow),se=ae?"y"===j?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(q=null==S?void 0:S[j])?q:0,ce=_+ie-fe,pe=de(m?a(X,_+oe-fe-se):X,_,m?i(Y,ce):Y);k[j]=pe,V[j]=pe-_}if(c){var ue,le="x"===j?D:P,he="x"===j?A:L,me=k[M],ve="y"===M?"height":"width",ye=me+b[le],ge=me-b[he],be=-1!==[D,P].indexOf(x),xe=null!=(ue=null==S?void 0:S[M])?ue:0,we=be?ye:me-B[ve]-H[ve]-xe+R.altAxis,Oe=be?me+B[ve]+H[ve]-xe-R.altAxis:ge,je=m&&be?function(e,t,n){var r=de(e,t,n);return r>n?n:r}(we,me,Oe):de(m?we:ye,me,m?Oe:ge);k[M]=je,V[M]=je-me}t.modifiersData[r]=V}},requiresIfExists:["offset"]};var me={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=F(n.placement),f=z(s),c=[P,L].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return Y("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:G(e,k))}(o.padding,n),u=g(i),l="y"===f?D:P,d="y"===f?A:L,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],m=a[f]-n.rects.reference[f],v=E(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,x=p[l],w=y-u[c]-p[d],O=y/2-u[c]/2+b,j=de(x,O,w),M=f;n.modifiersData[r]=((t={})[M]=j,t.centerOffset=j-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&C(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[D,L,A,P].some((function(t){return e[t]>=0}))}var ge={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=J(t,{elementContext:"reference"}),s=J(t,{altBoundary:!0}),f=ve(a,r),c=ve(s,o,i),p=ye(f),u=ye(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}},be=Z({defaultModifiers:[ee,te,oe,ie]}),xe=[ee,te,oe,ie,ae,le,he,me,ge],we=Z({defaultModifiers:xe});e.applyStyles=ie,e.arrow=me,e.computeStyles=oe,e.createPopper=we,e.createPopperLite=be,e.defaultModifiers=xe,e.detectOverflow=J,e.eventListeners=ee,e.flip=le,e.hide=ge,e.offset=ae,e.popperGenerator=Z,e.popperOffsets=te,e.preventOverflow=he,Object.defineProperty(e,"__esModule",{value:!0})}));

/* ---------------------*/
/* ---------------------*/
/*      Swiper 9.3.2    */
/* ---------------------*/
/* ---------------------*/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}function n(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function l(){return Date.now()}function o(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function d(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function c(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function p(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(null!=a&&!c(a)){const s=Object.keys(Object(a)).filter((e=>t.indexOf(e)<0));for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(a,i);void 0!==r&&r.enumerable&&(d(e[i])&&d(a[i])?a[i].__swiper__?e[i]=a[i]:p(e[i],a[i]):!d(e[i])&&d(a[i])?(e[i]={},a[i].__swiper__?e[i]=a[i]:p(e[i],a[i])):e[i]=a[i])}}}return e}function u(e,t,s){e.style.setProperty(t,s)}function m(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}function h(e){return e.querySelector(".swiper-slide-transform")||e.shadowEl&&e.shadowEl.querySelector(".swiper-slide-transform")||e}function f(e,t){return void 0===t&&(t=""),[...e.children].filter((e=>e.matches(t)))}function g(e,t){void 0===t&&(t=[]);const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:[t]),s}function v(e){const t=r(),s=a(),i=e.getBoundingClientRect(),n=s.body,l=e.clientTop||n.clientTop||0,o=e.clientLeft||n.clientLeft||0,d=e===t?t.scrollY:e.scrollTop,c=e===t?t.scrollX:e.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}function w(e,t){return r().getComputedStyle(e,null).getPropertyValue(t)}function b(e){let t,s=e;if(s){for(t=0;null!==(s=s.previousSibling);)1===s.nodeType&&(t+=1);return t}}function y(e,t){const s=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&s.push(a):s.push(a),a=a.parentElement;return s}function E(e,t){t&&e.addEventListener("transitionend",(function s(a){a.target===e&&(t.call(e,a),e.removeEventListener("transitionend",s))}))}function x(e,t,s){const a=r();return s?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let S,T,M;function C(){return S||(S=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),S}function P(e){return void 0===e&&(e={}),T||(T=function(e){let{userAgent:t}=void 0===e?{}:e;const s=C(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),m=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!h&&(l.os="android",l.android=!0),(p||m||u)&&(l.os="ios",l.ios=!0),l}(e)),T}function L(){return M||(M=function(){const e=r();let t=!1;function s(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(s()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[e,a]=s.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&a<2}}return{isSafari:t||s(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),M}var z={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};const A=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(s){const t=s.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},$=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},I=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const a="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex,r=i+a-1;if(e.params.rewind)for(let a=i-t;a<=r+t;a+=1){const t=(a%s+s)%s;t!==i&&t>r&&$(e,t)}else for(let a=Math.max(r-t,0);a<=Math.min(r+t,s-1);a+=1)a!==i&&a>r&&$(e,a)};var k={updateSize:function(){const e=this;let t,s;const a=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a.clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a.clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(w(a,"padding-left")||0,10)-parseInt(w(a,"padding-right")||0,10),s=s-parseInt(w(a,"padding-top")||0,10)-parseInt(w(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{wrapperEl:i,slidesEl:r,size:n,rtlTranslate:l,wrongRTL:o}=e,d=e.virtual&&a.virtual.enabled,c=d?e.virtual.slides.length:e.slides.length,p=f(r,`.${e.params.slideClass}, swiper-slide`),m=d?e.virtual.slides.length:p.length;let h=[];const g=[],v=[];let b=a.slidesOffsetBefore;"function"==typeof b&&(b=a.slidesOffsetBefore.call(e));let y=a.slidesOffsetAfter;"function"==typeof y&&(y=a.slidesOffsetAfter.call(e));const E=e.snapGrid.length,S=e.slidesGrid.length;let T=a.spaceBetween,M=-b,C=0,P=0;if(void 0===n)return;"string"==typeof T&&T.indexOf("%")>=0?T=parseFloat(T.replace("%",""))/100*n:"string"==typeof T&&(T=parseFloat(T)),e.virtualSize=-T,p.forEach((e=>{l?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),a.centeredSlides&&a.cssMode&&(u(i,"--swiper-centered-offset-before",""),u(i,"--swiper-centered-offset-after",""));const L=a.grid&&a.grid.rows>1&&e.grid;let z;L&&e.grid.initSlides(m);const A="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<m;i+=1){let r;if(z=0,p[i]&&(r=p[i]),L&&e.grid.updateSlide(i,r,m,t),!p[i]||"none"!==w(r,"display")){if("auto"===a.slidesPerView){A&&(p[i].style[t("width")]="");const n=getComputedStyle(r),l=r.style.transform,o=r.style.webkitTransform;if(l&&(r.style.transform="none"),o&&(r.style.webkitTransform="none"),a.roundLengths)z=e.isHorizontal()?x(r,"width",!0):x(r,"height",!0);else{const e=s(n,"width"),t=s(n,"padding-left"),a=s(n,"padding-right"),i=s(n,"margin-left"),l=s(n,"margin-right"),o=n.getPropertyValue("box-sizing");if(o&&"border-box"===o)z=e+i+l;else{const{clientWidth:s,offsetWidth:n}=r;z=e+t+a+i+l+(n-s)}}l&&(r.style.transform=l),o&&(r.style.webkitTransform=o),a.roundLengths&&(z=Math.floor(z))}else z=(n-(a.slidesPerView-1)*T)/a.slidesPerView,a.roundLengths&&(z=Math.floor(z)),p[i]&&(p[i].style[t("width")]=`${z}px`);p[i]&&(p[i].swiperSlideSize=z),v.push(z),a.centeredSlides?(M=M+z/2+C/2+T,0===C&&0!==i&&(M=M-n/2-T),0===i&&(M=M-n/2-T),Math.abs(M)<.001&&(M=0),a.roundLengths&&(M=Math.floor(M)),P%a.slidesPerGroup==0&&h.push(M),g.push(M)):(a.roundLengths&&(M=Math.floor(M)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup==0&&h.push(M),g.push(M),M=M+z+T),e.virtualSize+=z+T,C=z,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,n)+y,l&&o&&("slide"===a.effect||"coverflow"===a.effect)&&(i.style.width=`${e.virtualSize+T}px`),a.setWrapperSize&&(i.style[t("width")]=`${e.virtualSize+T}px`),L&&e.grid.updateWrapperSize(z,h,t),!a.centeredSlides){const t=[];for(let s=0;s<h.length;s+=1){let i=h[s];a.roundLengths&&(i=Math.floor(i)),h[s]<=e.virtualSize-n&&t.push(i)}h=t,Math.floor(e.virtualSize-n)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-n)}if(d&&a.loop){const t=v[0]+T;if(a.slidesPerGroup>1){const s=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/a.slidesPerGroup),i=t*a.slidesPerGroup;for(let e=0;e<s;e+=1)h.push(h[h.length-1]+i)}for(let s=0;s<e.virtual.slidesBefore+e.virtual.slidesAfter;s+=1)1===a.slidesPerGroup&&h.push(h[h.length-1]+t),g.push(g[g.length-1]+t),e.virtualSize+=t}if(0===h.length&&(h=[0]),0!==T){const s=e.isHorizontal()&&l?"marginLeft":t("marginRight");p.filter(((e,t)=>!(a.cssMode&&!a.loop)||t!==p.length-1)).forEach((e=>{e.style[s]=`${T}px`}))}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;v.forEach((t=>{e+=t+(T||0)})),e-=T;const t=e-n;h=h.map((e=>e<0?-b:e>t?t+y:e))}if(a.centerInsufficientSlides){let e=0;if(v.forEach((t=>{e+=t+(T||0)})),e-=T,e<n){const t=(n-e)/2;h.forEach(((e,s)=>{h[s]=e-t})),g.forEach(((e,s)=>{g[s]=e+t}))}}if(Object.assign(e,{slides:p,snapGrid:h,slidesGrid:g,slidesSizesGrid:v}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){u(i,"--swiper-centered-offset-before",-h[0]+"px"),u(i,"--swiper-centered-offset-after",e.size/2-v[v.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(m!==c&&e.emit("slidesLengthChange"),h.length!==E&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==S&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),!(d||a.cssMode||"slide"!==a.effect&&"fade"!==a.effect)){const t=`${a.containerModifierClass}backface-hidden`,s=e.el.classList.contains(t);m<=a.maxBackfaceHiddenSlides?s||e.el.classList.add(t):s&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&(t.wrapperEl.style.height=`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-s-e.cssOverflowAdjustment()},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.forEach((e=>{e.classList.remove(s.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=s.spaceBetween;"string"==typeof l&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:"string"==typeof l&&(l=parseFloat(l));for(let e=0;e<a.length;e+=1){const o=a[e];let d=o.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=a[0].swiperSlideOffset);const c=(n+(s.centeredSlides?t.minTranslate():0)-d)/(o.swiperSlideSize+l),p=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-d)/(o.swiperSlideSize+l),u=-(n-d),m=u+t.slidesSizesGrid[e];(u>=0&&u<t.size-1||m>1&&m<=t.size||u<=0&&m>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(e),a[e].classList.add(s.slideVisibleClass)),o.progress=i?-c:c,o.originalProgress=i?-p:p}},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n,progressLoop:l}=t;const o=r,d=n;if(0===a)i=0,r=!0,n=!0;else{i=(e-t.minTranslate())/a;const s=Math.abs(e-t.minTranslate())<1,l=Math.abs(e-t.maxTranslate())<1;r=s||i<=0,n=l||i>=1,s&&(i=0),l&&(i=1)}if(s.loop){const s=t.getSlideIndexByData(0),a=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[s],r=t.slidesGrid[a],n=t.slidesGrid[t.slidesGrid.length-1],o=Math.abs(e);l=o>=i?(o-i)/n:(o+n-r)/n,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!d&&t.emit("reachEnd toEdge"),(o&&!r||d&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,slidesEl:a,activeIndex:i}=e,r=e.virtual&&s.virtual.enabled,n=e=>f(a,`.${s.slideClass}${e}, swiper-slide${e}`)[0];let l;if(t.forEach((e=>{e.classList.remove(s.slideActiveClass,s.slideNextClass,s.slidePrevClass)})),r)if(s.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),l=n(`[data-swiper-slide-index="${t}"]`)}else l=n(`[data-swiper-slide-index="${i}"]`);else l=t[i];if(l){l.classList.add(s.slideActiveClass);let e=function(e,t){const s=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}(l,`.${s.slideClass}, swiper-slide`)[0];s.loop&&!e&&(e=t[0]),e&&e.classList.add(s.slideNextClass);let a=function(e,t){const s=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}(l,`.${s.slideClass}, swiper-slide`)[0];s.loop&&0===!a&&(a=t[t.length-1]),a&&a.classList.add(s.slidePrevClass)}e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:i,activeIndex:r,realIndex:n,snapIndex:l}=t;let o,d=e;const c=e=>{let s=e-t.virtual.slidesBefore;return s<0&&(s=t.virtual.slides.length+s),s>=t.virtual.slides.length&&(s-=t.virtual.slides.length),s};if(void 0===d&&(d=function(e){const{slidesGrid:t,params:s}=e,a=e.rtlTranslate?e.translate:-e.translate;let i;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?a>=t[e]&&a<t[e+1]-(t[e+1]-t[e])/2?i=e:a>=t[e]&&a<t[e+1]&&(i=e+1):a>=t[e]&&(i=e);return s.normalizeSlideIndex&&(i<0||void 0===i)&&(i=0),i}(t)),a.indexOf(s)>=0)o=a.indexOf(s);else{const e=Math.min(i.slidesPerGroupSkip,d);o=e+Math.floor((d-e)/i.slidesPerGroup)}if(o>=a.length&&(o=a.length-1),d===r)return o!==l&&(t.snapIndex=o,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=c(d)));let p;p=t.virtual&&i.virtual.enabled&&i.loop?c(d):t.slides[d]?parseInt(t.slides[d].getAttribute("data-swiper-slide-index")||d,10):d,Object.assign(t,{previousSnapIndex:l,snapIndex:o,previousRealIndex:n,realIndex:p,previousIndex:r,activeIndex:d}),t.initialized&&I(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),n!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=e.closest(`.${s.slideClass}, swiper-slide`);let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var O={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=o(i,e);return r+=this.cssOverflowAdjustment(),s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,wrapperEl:r,progress:n}=s;let l,o=0,d=0;s.isHorizontal()?o=a?-e:e:d=e,i.roundLengths&&(o=Math.floor(o),d=Math.floor(d)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?o:d,i.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-o:-d:i.virtualTranslate||(s.isHorizontal()?o-=s.cssOverflowAdjustment():d-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${d}px, 0px)`);const c=s.maxTranslate()-s.minTranslate();l=0===c?0:(e-s.minTranslate())/c,l!==n&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}};function D(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var G={slideTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e&&(e=parseInt(e,10));const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:f}=r;if(r.animating&&l.preventInteractionOnTransition||!f&&!a&&!i)return!1;const g=Math.min(r.params.slidesPerGroupSkip,n);let v=g+Math.floor((n-g)/r.params.slidesPerGroup);v>=o.length&&(v=o.length-1);const w=-o[v];if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*w),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&w<r.translate&&w<r.minTranslate())return!1;if(!r.allowSlidePrev&&w>r.translate&&w>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(n!==(c||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(w),b=n>p?"next":n<p?"prev":"reset",u&&-w===r.translate||!u&&w===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(w),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?w:-w;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),t&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{h[e?"scrollLeft":"scrollTop"]=s}))):h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1}))}else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(w),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){e=parseInt(e,10)}const i=this;let r=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?r+=i.virtual.slidesBefore:r=i.getSlideIndexByData(r)),i.slideTo(r,t,s,a)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{enabled:i,params:r,animating:n}=a;if(!i)return a;let l=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<r.slidesPerGroupSkip?1:l,d=a.virtual&&r.virtual.enabled;if(r.loop){if(n&&!d&&r.loopPreventsSliding)return!1;a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft}return r.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,snapGrid:r,slidesGrid:n,rtlTranslate:l,enabled:o,animating:d}=a;if(!o)return a;const c=a.virtual&&i.virtual.enabled;if(i.loop){if(d&&!c&&i.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}function p(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const u=p(l?a.translate:-a.translate),m=r.map((e=>p(e)));let h=r[m.indexOf(u)-1];if(void 0===h&&i.cssMode){let e;r.forEach(((t,s)=>{u>=t&&(e=s)})),void 0!==e&&(h=r[e>0?e-1:e])}let f=0;if(void 0!==h&&(f=n.indexOf(h),f<0&&(f=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(f=f-a.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return a.slideTo(f,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,slidesEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;const l=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=e.getSlideIndex(f(s,`${l}[data-swiper-slide-index="${i}"]`)[0]),n((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=e.getSlideIndex(f(s,`${l}[data-swiper-slide-index="${i}"]`)[0]),n((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var H={loopCreate:function(e){const t=this,{params:s,slidesEl:a}=t;if(!s.loop||t.virtual&&t.params.virtual.enabled)return;f(a,`.${s.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:s.centeredSlides?void 0:"next"})},loopFix:function(e){let{slideRealIndex:t,slideTo:s=!0,direction:a,setTranslate:i,activeSlideIndex:r,byController:n,byMousewheel:l}=void 0===e?{}:e;const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:d,allowSlidePrev:c,allowSlideNext:p,slidesEl:u,params:m}=o;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&m.virtual.enabled)return s&&(m.centeredSlides||0!==o.snapIndex?m.centeredSlides&&o.snapIndex<m.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0):o.slideTo(o.virtual.slides.length,0,!1,!0)),o.allowSlidePrev=c,o.allowSlideNext=p,void o.emit("loopFix");const h="auto"===m.slidesPerView?o.slidesPerViewDynamic():Math.ceil(parseFloat(m.slidesPerView,10));let f=m.loopedSlides||h;f%m.slidesPerGroup!=0&&(f+=m.slidesPerGroup-f%m.slidesPerGroup),o.loopedSlides=f;const g=[],v=[];let w=o.activeIndex;void 0===r?r=o.getSlideIndex(o.slides.filter((e=>e.classList.contains(m.slideActiveClass)))[0]):w=r;const b="next"===a||!a,y="prev"===a||!a;let E=0,x=0;if(r<f){E=Math.max(f-r,m.slidesPerGroup);for(let e=0;e<f-r;e+=1){const t=e-Math.floor(e/d.length)*d.length;g.push(d.length-t-1)}}else if(r>o.slides.length-2*f){x=Math.max(r-(o.slides.length-2*f),m.slidesPerGroup);for(let e=0;e<x;e+=1){const t=e-Math.floor(e/d.length)*d.length;v.push(t)}}if(y&&g.forEach((e=>{o.slides[e].swiperLoopMoveDOM=!0,u.prepend(o.slides[e]),o.slides[e].swiperLoopMoveDOM=!1})),b&&v.forEach((e=>{o.slides[e].swiperLoopMoveDOM=!0,u.append(o.slides[e]),o.slides[e].swiperLoopMoveDOM=!1})),o.recalcSlides(),"auto"===m.slidesPerView&&o.updateSlides(),m.watchSlidesProgress&&o.updateSlidesOffset(),s)if(g.length>0&&y)if(void 0===t){const e=o.slidesGrid[w],t=o.slidesGrid[w+E]-e;l?o.setTranslate(o.translate-t):(o.slideTo(w+E,0,!1,!0),i&&(o.touches[o.isHorizontal()?"startX":"startY"]+=t))}else i&&o.slideToLoop(t,0,!1,!0);else if(v.length>0&&b)if(void 0===t){const e=o.slidesGrid[w],t=o.slidesGrid[w-x]-e;l?o.setTranslate(o.translate-t):(o.slideTo(w-x,0,!1,!0),i&&(o.touches[o.isHorizontal()?"startX":"startY"]+=t))}else o.slideToLoop(t,0,!1,!0);if(o.allowSlidePrev=c,o.allowSlideNext=p,o.controller&&o.controller.control&&!n){const e={slideRealIndex:t,slideTo:!1,direction:a,setTranslate:i,activeSlideIndex:r,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach((t=>{!t.destroyed&&t.params.loop&&t.loopFix(e)})):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix(e)}o.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;a[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),a.forEach((e=>{s.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}};function X(e){const t=this,s=a(),i=r(),n=t.touchEventsData;n.evCache.push(e);const{params:o,touches:d,enabled:c}=t;if(!c)return;if(!o.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let u=p.target;if("wrapper"===o.touchEventsTarget&&!t.wrapperEl.contains(u))return;if("which"in p&&3===p.which)return;if("button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;const m=!!o.noSwipingClass&&""!==o.noSwipingClass,h=e.composedPath?e.composedPath():e.path;m&&p.target&&p.target.shadowRoot&&h&&(u=h[0]);const f=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,g=!(!p.target||!p.target.shadowRoot);if(o.noSwiping&&(g?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(f,u):u.closest(f)))return void(t.allowClick=!0);if(o.swipeHandler&&!u.closest(o.swipeHandler))return;d.currentX=p.pageX,d.currentY=p.pageY;const v=d.currentX,w=d.currentY,b=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,y=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(b&&(v<=y||v>=i.innerWidth-y)){if("prevent"!==b)return;e.preventDefault()}Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),d.startX=v,d.startY=w,n.touchStartTime=l(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(n.allowThresholdMove=!1);let E=!0;u.matches(n.focusableElements)&&(E=!1,"SELECT"===u.nodeName&&(n.isTouched=!1)),s.activeElement&&s.activeElement.matches(n.focusableElements)&&s.activeElement!==u&&s.activeElement.blur();const x=E&&t.allowTouchMove&&o.touchStartPreventDefault;!o.touchStartForcePreventDefault&&!x||u.isContentEditable||p.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",p)}function Y(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:o,enabled:d}=s;if(!d)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));const p=i.evCache.findIndex((e=>e.pointerId===c.pointerId));p>=0&&(i.evCache[p]=c);const u=i.evCache.length>1?i.evCache[0]:c,m=u.pageX,h=u.pageY;if(c.preventedByNestedSwiper)return n.startX=m,void(n.startY=h);if(!s.allowTouchMove)return c.target.matches(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:m,startY:h,prevX:s.touches.currentX,prevY:s.touches.currentY,currentX:m,currentY:h}),i.touchStartTime=l()));if(r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(h<n.startY&&s.translate<=s.maxTranslate()||h>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(m<n.startX&&s.translate<=s.maxTranslate()||m>n.startX&&s.translate>=s.minTranslate())return;if(t.activeElement&&c.target===t.activeElement&&c.target.matches(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=m,n.currentY=h;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling||s.zoom&&s.params.zoom&&s.params.zoom.enabled&&i.evCache.length>1)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation();let v=s.isHorizontal()?f:g,w=s.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(v=Math.abs(v)*(o?1:-1),w=Math.abs(w)*(o?1:-1)),n.diff=v,v*=r.touchRatio,o&&(v=-v,w=-w);const b=s.touchesDirection;s.swipeDirection=v>0?"prev":"next",s.touchesDirection=w>0?"prev":"next";const y=s.params.loop&&!r.cssMode;if(!i.isMoved){if(y&&s.loopFix({direction:s.swipeDirection}),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});s.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)}let E;i.isMoved&&b!==s.touchesDirection&&y&&Math.abs(v)>=1&&(s.loopFix({direction:s.swipeDirection,setTranslate:!0}),E=!0),s.emit("sliderMove",c),i.isMoved=!0,i.currentTranslate=v+i.startTranslate;let x=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),v>0?(y&&!E&&i.currentTranslate>(r.centeredSlides?s.minTranslate()-s.size/2:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>s.minTranslate()&&(x=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**S))):v<0&&(y&&!E&&i.currentTranslate<(r.centeredSlides?s.maxTranslate()+s.size/2:s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-("auto"===r.slidesPerView?s.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<s.maxTranslate()&&(x=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**S))),x&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function B(e){const t=this,s=t.touchEventsData,a=s.evCache.findIndex((t=>t.pointerId===e.pointerId));if(a>=0&&s.evCache.splice(a,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){if(!("pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView)))return}const{params:i,touches:r,rtlTranslate:o,slidesGrid:d,enabled:c}=t;if(!c)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let p=e;if(p.originalEvent&&(p=p.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",p),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&i.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);i.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=l(),m=u-s.touchStartTime;if(t.allowClick){const e=p.path||p.composedPath&&p.composedPath();t.updateClickedSlide(e&&e[0]||p.target),t.emit("tap click",p),m<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",p)}if(s.lastClickTime=l(),n((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===r.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=i.followFinger?o?t.translate:-t.translate:-s.currentTranslate,i.cssMode)return;if(t.params.freeMode&&i.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let f=0,g=t.slidesSizesGrid[0];for(let e=0;e<d.length;e+=e<i.slidesPerGroupSkip?1:i.slidesPerGroup){const t=e<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==d[e+t]?h>=d[e]&&h<d[e+t]&&(f=e,g=d[e+t]-d[e]):h>=d[e]&&(f=e,g=d[d.length-1]-d[d.length-2])}let v=null,w=null;i.rewind&&(t.isBeginning?w=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(v=0));const b=(h-d[f])/g,y=f<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(m>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(b>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?v:f+y):t.slideTo(f)),"prev"===t.swipeDirection&&(b>1-i.longSwipesRatio?t.slideTo(f+y):null!==w&&b<0&&Math.abs(b)>i.longSwipesRatio?t.slideTo(w):t.slideTo(f))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(p.target===t.navigation.nextEl||p.target===t.navigation.prevEl)?p.target===t.navigation.nextEl?t.slideTo(f+y):t.slideTo(f):("next"===t.swipeDirection&&t.slideTo(null!==v?v:f+y),"prev"===t.swipeDirection&&t.slideTo(null!==w?w:f))}}function N(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e,n=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=n&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||l?e.params.loop&&!n?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function q(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function R(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function F(e){const t=this;A(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}let _=!1;function V(){}const j=(e,t)=>{const s=a(),{params:i,el:r,wrapperEl:n,device:l}=e,o=!!i.nested,d="on"===t?"addEventListener":"removeEventListener",c=t;r[d]("pointerdown",e.onTouchStart,{passive:!1}),s[d]("pointermove",e.onTouchMove,{passive:!1,capture:o}),s[d]("pointerup",e.onTouchEnd,{passive:!0}),s[d]("pointercancel",e.onTouchEnd,{passive:!0}),s[d]("pointerout",e.onTouchEnd,{passive:!0}),s[d]("pointerleave",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[d]("click",e.onClick,!0),i.cssMode&&n[d]("scroll",e.onScroll),i.updateOnWindowResize?e[c](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",N,!0):e[c]("observerUpdate",N,!0),r[d]("load",e.onLoad,{capture:!0})};const W=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var U={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function K(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),p(t,s)):p(t,s)):p(t,s)}}const Z={eventsEmitter:z,update:k,translate:O,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),D({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),D({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:G,loop:H,grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,t=a(),{params:s}=e;e.onTouchStart=X.bind(e),e.onTouchMove=Y.bind(e),e.onTouchEnd=B.bind(e),s.cssMode&&(e.onScroll=R.bind(e)),e.onClick=q.bind(e),e.onLoad=F.bind(e),_||(t.addEventListener("touchstart",V),_=!0),j(e,"on")},detachEvents:function(){j(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{realIndex:t,initialized:s,params:a,el:i}=e,r=a.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const n=e.getBreakpoint(r,e.params.breakpointsBase,e.el);if(!n||e.currentBreakpoint===n)return;const l=(n in r?r[n]:void 0)||e.originalParams,o=W(e,a),d=W(e,l),c=a.enabled;o&&!d?(i.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!o&&d&&(i.classList.add(`${a.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===a.grid.fill)&&i.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const s=a[t]&&a[t].enabled,i=l[t]&&l[t].enabled;s&&!i&&e[t].disable(),!s&&i&&e[t].enable()}));const u=l.direction&&l.direction!==a.direction,m=a.loop&&(l.slidesPerView!==a.slidesPerView||u);u&&s&&e.changeDirection(),p(e.params,l);const h=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),c&&!h?e.disable():!c&&h&&e.enable(),e.currentBreakpoint=n,e.emit("_beforeBreakpoint",l),m&&s&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",l)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,el:i,device:r}=e,n=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...n),i.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},Q={};class J{constructor(){let e,t;for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];1===i.length&&i[0].constructor&&"Object"===Object.prototype.toString.call(i[0]).slice(8,-1)?t=i[0]:[e,t]=i,t||(t={}),t=p({},t),e&&!t.el&&(t.el=e);const n=a();if(t.el&&"string"==typeof t.el&&n.querySelectorAll(t.el).length>1){const e=[];return n.querySelectorAll(t.el).forEach((s=>{const a=p({},t,{el:s});e.push(new J(a))})),e}const l=this;l.__swiper__=!0,l.support=C(),l.device=P({userAgent:t.userAgent}),l.browser=L(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const o={};l.modules.forEach((e=>{e({params:t,swiper:l,extendParams:K(t,o),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})}));const d=p({},U,o);return l.params=p({},d,Q,t),l.originalParams=p({},l.params),l.passedParams=p({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach((e=>{l.on(e,l.params.on[e])})),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===l.params.direction,isVertical:()=>"vertical"===l.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getSlideIndex(e){const{slidesEl:t,params:s}=this,a=b(f(t,`.${s.slideClass}, swiper-slide`)[0]);return b(e)-a}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=f(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&A(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled)a(),e.params.autoHeight&&e.updateAutoHeight();else{if(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides){const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||a()}s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.el.classList.remove(`${s.params.containerModifierClass}${a}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let s=e||t.params.el;if("string"==typeof s&&(s=document.querySelector(s)),!s)return!1;s.swiper=t,s.shadowEl&&(t.isElement=!0);const a=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=(()=>{if(s&&s.shadowRoot&&s.shadowRoot.querySelector){return s.shadowRoot.querySelector(a())}return f(s,a())[0]})();return!i&&t.params.createElements&&(i=g("div",t.params.wrapperClass),s.append(i),f(s,`.${t.params.slideClass}`).forEach((e=>{i.append(e)}))),Object.assign(t,{el:s,wrapperEl:i,slidesEl:t.isElement?s:i,mounted:!0,rtl:"rtl"===s.dir.toLowerCase()||"rtl"===w(s,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===s.dir.toLowerCase()||"rtl"===w(s,"direction")),wrongRTL:"-webkit-box"===w(i,"display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?A(t,e):e.addEventListener("load",(e=>{A(t,e.target)}))})),I(t),t.initialized=!0,I(t),t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,el:i,wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttribute("style"),r.removeAttribute("style"),n&&n.length&&n.forEach((e=>{e.classList.remove(a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.el.swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){p(Q,e)}static get extendedDefaults(){return Q}static get defaults(){return U}static installModule(e){J.prototype.__modules__||(J.prototype.__modules__=[]);const t=J.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>J.installModule(e))),J):(J.installModule(e),J)}}function ee(e,t,s,a){return e.params.createElements&&Object.keys(a).forEach((i=>{if(!s[i]&&!0===s.auto){let r=f(e.el,`.${a[i]}`)[0];r||(r=g("div",a[i]),r.className=a[i],e.el.append(r)),s[i]=r,t[i]=r}})),s}function te(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function se(e){const t=this,{params:s,slidesEl:a}=t;s.loop&&t.loopDestroy();const i=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,a.append(t.children[0]),t.innerHTML=""}else a.append(e)};if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&i(e[t]);else i(e);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update()}function ae(e){const t=this,{params:s,activeIndex:a,slidesEl:i}=t;s.loop&&t.loopDestroy();let r=a+1;const n=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,i.prepend(t.children[0]),t.innerHTML=""}else i.prepend(e)};if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&n(e[t]);r=a+e.length}else n(e);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),t.slideTo(r,0,!1)}function ie(e,t){const s=this,{params:a,activeIndex:i,slidesEl:r}=s;let n=i;a.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.recalcSlides());const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides[t];e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&r.append(t[e]);o=n>e?n+t.length:n}else r.append(t);for(let e=0;e<d.length;e+=1)r.append(d[e]);s.recalcSlides(),a.loop&&s.loopCreate(),a.observer&&!s.isElement||s.update(),a.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function re(e){const t=this,{params:s,activeIndex:a}=t;let i=a;s.loop&&(i-=t.loopedSlides,t.loopDestroy());let r,n=i;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)r=e[s],t.slides[r]&&t.slides[r].remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides[r].remove(),r<n&&(n-=1),n=Math.max(n,0);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),s.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)}function ne(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function le(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.forEach((e=>{e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e=>e.remove()))})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function oe(e,t){const s=h(t);return s!==t&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function de(e){let{swiper:t,duration:s,transformElements:a,allSlides:i}=e;const{activeIndex:r}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a:a.filter((e=>{const s=e.classList.contains("swiper-slide-transform")?(e=>{if(!e.parentElement)return t.slides.filter((t=>t.shadowEl&&t.shadowEl===e.parentNode))[0];return e.parentElement})(e):e;return t.getSlideIndex(s)===r})),e.forEach((e=>{E(e,(()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(e)}))}))}}function ce(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=h(t);let r=i.querySelector(`.${a}`);return r||(r=g("div","swiper-slide-shadow"+(s?`-${s}`:"")),i.append(r)),r}Object.keys(Z).forEach((e=>{Object.keys(Z[e]).forEach((t=>{J.prototype[t]=Z[e][t]}))})),J.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,s){void 0===s&&(s={});const a=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(t.__preventObserver__)return;if(1===e.length)return void i("observerUpdate",e[0]);const s=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(s):l.setTimeout(s,0)}));a.observe(e,{attributes:void 0===s.attributes||s.attributes,childList:void 0===s.childList||s.childList,characterData:void 0===s.characterData||s.characterData}),n.push(a)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=y(t.el);for(let t=0;t<e.length;t+=1)o(e[t])}o(t.el,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const pe=[function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;i({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});const l=a();s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const o=l.createElement("div");function d(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];let i;return a.renderSlide?(i=a.renderSlide.call(s,e,t),"string"==typeof i&&(o.innerHTML=i,i=o.children[0])):i=s.isElement?g("swiper-slide"):g("div",s.params.slideClass),i.setAttribute("data-swiper-slide-index",t),a.renderSlide||(i.innerHTML=e),a.cache&&(s.virtual.cache[t]=i),i}function c(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i,loop:r}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:c,to:p,slides:u,slidesGrid:m,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const g=s.activeIndex||0;let v,w,b;v=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(w=Math.floor(t/2)+a+o,b=Math.floor(t/2)+a+l):(w=t+(a-1)+o,b=(r?t:a)+l);let y=g-b,E=g+w;r||(y=Math.max(y,0),E=Math.min(E,u.length-1));let x=(s.slidesGrid[y]||0)-(s.slidesGrid[0]||0);function S(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),n("virtualUpdate")}if(r&&g>=b?(y-=b,i||(x+=s.slidesGrid[0])):r&&g<b&&(y=-b,i&&(x+=s.slidesGrid[0])),Object.assign(s.virtual,{from:y,to:E,offset:x,slidesGrid:s.slidesGrid,slidesBefore:b,slidesAfter:w}),c===y&&p===E&&!e)return s.slidesGrid!==m&&x!==h&&s.slides.forEach((e=>{e.style[v]=x-Math.abs(s.cssOverflowAdjustment())+"px"})),s.updateProgress(),void n("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:y,to:E,slides:function(){const e=[];for(let t=y;t<=E;t+=1)e.push(u[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?S():n("virtualUpdate"));const T=[],M=[],C=e=>{let t=e;return e<0?t=u.length+e:t>=u.length&&(t-=u.length),t};if(e)s.slidesEl.querySelectorAll(`.${s.params.slideClass}, swiper-slide`).forEach((e=>{e.remove()}));else for(let e=c;e<=p;e+=1)if(e<y||e>E){const t=C(e);s.slidesEl.querySelectorAll(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`).forEach((e=>{e.remove()}))}const P=r?-u.length:0,L=r?2*u.length:u.length;for(let t=P;t<L;t+=1)if(t>=y&&t<=E){const s=C(t);void 0===p||e?M.push(s):(t>p&&M.push(s),t<c&&T.push(s))}if(M.forEach((e=>{s.slidesEl.append(d(u[e],e))})),r)for(let e=T.length-1;e>=0;e-=1){const t=T[e];s.slidesEl.prepend(d(u[t],t))}else T.sort(((e,t)=>t-e)),T.forEach((e=>{s.slidesEl.prepend(d(u[e],e))}));f(s.slidesEl,".swiper-slide, swiper-slide").forEach((e=>{e.style[v]=x-Math.abs(s.cssOverflowAdjustment())+"px"})),S()}r("beforeInit",(()=>{if(!s.params.virtual.enabled)return;let e;if(void 0===s.passedParams.virtual.slides){const t=[...s.slidesEl.children].filter((e=>e.matches(`.${s.params.slideClass}, swiper-slide`)));t&&t.length&&(s.virtual.slides=[...t],e=!0,t.forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t),s.virtual.cache[t]=e,e.remove()})))}e||(s.virtual.slides=s.params.virtual.slides),s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||c()})),r("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{c()}),100)):c())})),r("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&u(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);c(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.getAttribute("data-swiper-slide-index");r&&a.setAttribute("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}c(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);c(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),c(!0),s.slideTo(0,0)},update:c})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function d(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,m=38===i,h=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&h||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&m||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||m||h)){let e=!1;if(y(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&0===y(t.el,`.${t.params.slideActiveClass}`).length)return;const a=t.el,i=a.clientWidth,r=a.clientHeight,n=o.innerWidth,l=o.innerHeight,d=v(a);s&&(d.left-=a.scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||m||h)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||h)&&t.slideNext(),(d||m)&&t.slidePrev()),n("keyPress",i)}}function c(){t.keyboard.enabled||(l.addEventListener("keydown",d),t.keyboard.enabled=!0)}function p(){t.keyboard.enabled&&(l.removeEventListener("keydown",d),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&c()})),i("destroy",(()=>{t.keyboard.enabled&&p()})),Object.assign(t.keyboard,{enable:c,disable:p})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const o=r();let d;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),t.mousewheel={enabled:!1};let c,p=l();const u=[];function m(){t.enabled&&(t.mouseEntered=!0)}function h(){t.enabled&&(t.mouseEntered=!1)}function f(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&l()-p<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&l()-p<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),p=(new o.Date).getTime(),!1)))}function g(e){let s=e,a=!0;if(!t.enabled)return;if(e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let o=t.el;"container"!==t.params.mousewheel.eventsTarget&&(o=document.querySelector(t.params.mousewheel.eventsTarget));const p=o&&o.contains(s.target);if(!t.mouseEntered&&!p&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let m=0;const h=t.rtlTranslate?-1:1,g=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(g.pixelX)>Math.abs(g.pixelY)))return!0;m=-g.pixelX*h}else{if(!(Math.abs(g.pixelY)>Math.abs(g.pixelX)))return!0;m=-g.pixelY}else m=Math.abs(g.pixelX)>Math.abs(g.pixelY)?-g.pixelX*h:-g.pixelY;if(0===m)return!0;r.invert&&(m=-m);let v=t.getTranslate()+m*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:l(),delta:Math.abs(m),direction:Math.sign(m)},a=c&&e.time<c.time+500&&e.delta<=c.delta&&e.direction===c.direction;if(!a){c=void 0;let l=t.getTranslate()+m*r.sensitivity;const o=t.isBeginning,p=t.isEnd;if(l>=t.minTranslate()&&(l=t.minTranslate()),l<=t.maxTranslate()&&(l=t.maxTranslate()),t.setTransition(0),t.setTranslate(l),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!o&&t.isBeginning||!p&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:e.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(d),d=void 0,u.length>=15&&u.shift();const s=u.length?u[u.length-1]:void 0,a=u[0];if(u.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))u.splice(0);else if(u.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=m>0?.8:.2;c=e,u.splice(0),d=n((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}d||(d=n((()=>{c=e,u.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),l===t.minTranslate()||l===t.maxTranslate())return!0}}else{const s={time:l(),delta:Math.abs(m),direction:Math.sign(m),raw:e};u.length>=2&&u.shift();const a=u.length?u[u.length-1]:void 0;if(u.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&f(s):f(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function v(e){let s=t.el;"container"!==t.params.mousewheel.eventsTarget&&(s=document.querySelector(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",h),s[e]("wheel",g)}function w(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",g),!0):!t.mousewheel.enabled&&(v("addEventListener"),t.mousewheel.enabled=!0,!0)}function b(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,g),!0):!!t.mousewheel.enabled&&(v("removeEventListener"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&b(),t.params.mousewheel.enabled&&w()})),a("destroy",(()=>{t.params.cssMode&&w(),t.mousewheel.enabled&&b()})),Object.assign(t.mousewheel,{enable:w,disable:b})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const r=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function n(e){let s;return e&&"string"==typeof e&&t.isElement&&(s=t.el.shadowRoot.querySelector(e),s)?s:(e&&("string"==typeof e&&(s=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.el.querySelectorAll(e).length&&(s=t.el.querySelector(e))),e&&!s?e:s)}function l(e,s){const a=t.params.navigation;(e=r(e)).forEach((e=>{e&&(e.classList[s?"add":"remove"](...a.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=s),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](a.lockClass))}))}function o(){const{nextEl:e,prevEl:s}=t.navigation;if(t.params.loop)return l(s,!1),void l(e,!1);l(s,t.isBeginning&&!t.params.rewind),l(e,t.isEnd&&!t.params.rewind)}function d(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const e=t.params.navigation;if(t.params.navigation=ee(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;let s=n(e.nextEl),a=n(e.prevEl);Object.assign(t.navigation,{nextEl:s,prevEl:a}),s=r(s),a=r(a);const i=(s,a)=>{s&&s.addEventListener("click","next"===a?c:d),!t.enabled&&s&&s.classList.add(...e.lockClass.split(" "))};s.forEach((e=>i(e,"next"))),a.forEach((e=>i(e,"prev")))}function u(){let{nextEl:e,prevEl:s}=t.navigation;e=r(e),s=r(s);const a=(e,s)=>{e.removeEventListener("click","next"===s?c:d),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach((e=>a(e,"next"))),s.forEach((e=>a(e,"prev")))}a("init",(()=>{!1===t.params.navigation.enabled?m():(p(),o())})),a("toEdge fromEdge lock unlock",(()=>{o()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{let{nextEl:e,prevEl:s}=t.navigation;e=r(e),s=r(s),[...e,...s].filter((e=>!!e)).forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.navigation.lockClass)))})),a("click",((e,s)=>{let{nextEl:a,prevEl:n}=t.navigation;a=r(a),n=r(n);const l=s.target;if(t.params.navigation.hideOnClick&&!n.includes(l)&&!a.includes(l)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===l||t.pagination.el.contains(l)))return;let e;a.length?e=a[0].classList.contains(t.params.navigation.hiddenClass):n.length&&(e=n[0].classList.contains(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),[...a,...n].filter((e=>!!e)).forEach((e=>e.classList.toggle(t.params.navigation.hiddenClass)))}}));const m=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(t.navigation,{enable:()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),p(),o()},disable:m,update:o,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,bullets:[]};let l=0;const o=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function d(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&0===t.pagination.el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e&&(e=e[("prev"===s?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${a}-${s}`),(e=e[("prev"===s?"previous":"next")+"ElementSibling"])&&e.classList.add(`${a}-${s}-${s}`))}function p(e){const s=e.target.closest(te(t.params.pagination.bulletClass));if(!s)return;e.preventDefault();const a=b(s)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===a)return;const e=t.getSlideIndexByData(a),s=t.getSlideIndexByData(t.realIndex);e>t.slides.length-t.loopedSlides&&t.loopFix({direction:e>s?"next":"prev",activeSlideIndex:e,slideTo:!1}),t.slideToLoop(a)}else t.slideTo(a)}function u(){const e=t.rtl,s=t.params.pagination;if(d())return;let a,r,p=t.pagination.el;p=o(p);const u=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,m=t.params.loop?Math.ceil(u/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(r=t.previousRealIndex||0,a=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):void 0!==t.snapIndex?(a=t.snapIndex,r=t.previousSnapIndex):(r=t.previousIndex||0,a=t.activeIndex||0),"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const i=t.pagination.bullets;let o,d,u;if(s.dynamicBullets&&(n=x(i[0],t.isHorizontal()?"width":"height",!0),p.forEach((e=>{e.style[t.isHorizontal()?"width":"height"]=n*(s.dynamicMainBullets+4)+"px"})),s.dynamicMainBullets>1&&void 0!==r&&(l+=a-(r||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),o=Math.max(a-l,0),d=o+(Math.min(i.length,s.dynamicMainBullets)-1),u=(d+o)/2),i.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),p.length>1)i.forEach((e=>{const t=b(e);t===a&&e.classList.add(...s.bulletActiveClass.split(" ")),s.dynamicBullets&&(t>=o&&t<=d&&e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),t===o&&c(e,"prev"),t===d&&c(e,"next"))}));else{const e=i[a];if(e&&e.classList.add(...s.bulletActiveClass.split(" ")),s.dynamicBullets){const e=i[o],t=i[d];for(let e=o;e<=d;e+=1)i[e]&&i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));c(e,"prev"),c(t,"next")}}if(s.dynamicBullets){const a=Math.min(i.length,s.dynamicMainBullets+4),r=(n*a-n)/2-u*n,l=e?"right":"left";i.forEach((e=>{e.style[t.isHorizontal()?l:"top"]=`${r}px`}))}}p.forEach(((e,r)=>{if("fraction"===s.type&&(e.querySelectorAll(te(s.currentClass)).forEach((e=>{e.textContent=s.formatFractionCurrent(a+1)})),e.querySelectorAll(te(s.totalClass)).forEach((e=>{e.textContent=s.formatFractionTotal(m)}))),"progressbar"===s.type){let i;i=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const r=(a+1)/m;let n=1,l=1;"horizontal"===i?n=r:l=r,e.querySelectorAll(te(s.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${n}) scaleY(${l})`,e.style.transitionDuration=`${t.params.speed}ms`}))}"custom"===s.type&&s.renderCustom?(e.innerHTML=s.renderCustom(t,a+1,m),0===r&&i("paginationRender",e)):(0===r&&i("paginationRender",e),i("paginationUpdate",e)),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](s.lockClass)}))}function m(){const e=t.params.pagination;if(d())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let a=t.pagination.el;a=o(a);let r="";if("bullets"===e.type){let a=t.params.loop?Math.ceil(s/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&a>s&&(a=s);for(let s=0;s<a;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],a.forEach((s=>{"custom"!==e.type&&(s.innerHTML=r||""),"bullets"===e.type&&t.pagination.bullets.push(...s.querySelectorAll(te(e.bulletClass)))})),"custom"!==e.type&&i("paginationRender",a[0])}function h(){t.params.pagination=ee(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s;"string"==typeof e.el&&t.isElement&&(s=t.el.shadowRoot.querySelector(e.el)),s||"string"!=typeof e.el||(s=[...document.querySelectorAll(e.el)]),s||(s=e.el),s&&0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&Array.isArray(s)&&s.length>1&&(s=[...t.el.querySelectorAll(e.el)],s.length>1&&(s=s.filter((e=>y(e,".swiper")[0]===t.el))[0])),Array.isArray(s)&&1===s.length&&(s=s[0]),Object.assign(t.pagination,{el:s}),s=o(s),s.forEach((s=>{"bullets"===e.type&&e.clickable&&s.classList.add(e.clickableClass),s.classList.add(e.modifierClass+e.type),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.classList.add(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.classList.add(e.progressbarOppositeClass),e.clickable&&s.addEventListener("click",p),t.enabled||s.classList.add(e.lockClass)})))}function f(){const e=t.params.pagination;if(d())return;let s=t.pagination.el;s&&(s=o(s),s.forEach((s=>{s.classList.remove(e.hiddenClass),s.classList.remove(e.modifierClass+e.type),s.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&s.removeEventListener("click",p)}))),t.pagination.bullets&&t.pagination.bullets.forEach((t=>t.classList.remove(...e.bulletActiveClass.split(" "))))}a("changeDirection",(()=>{if(!t.pagination||!t.pagination.el)return;const e=t.params.pagination;let{el:s}=t.pagination;s=o(s),s.forEach((s=>{s.classList.remove(e.horizontalClass,e.verticalClass),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),a("init",(()=>{!1===t.params.pagination.enabled?g():(h(),m(),u())})),a("activeIndexChange",(()=>{void 0===t.snapIndex&&u()})),a("snapIndexChange",(()=>{u()})),a("snapGridLengthChange",(()=>{m(),u()})),a("destroy",(()=>{f()})),a("enable disable",(()=>{let{el:e}=t.pagination;e&&(e=o(e),e.forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass))))})),a("lock unlock",(()=>{u()})),a("click",((e,s)=>{const a=s.target;let{el:r}=t.pagination;if(Array.isArray(r)||(r=[r].filter((e=>!!e))),t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!a.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r[0].classList.contains(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.forEach((e=>e.classList.toggle(t.params.pagination.hiddenClass)))}}));const g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=o(e),e.forEach((e=>e.classList.add(t.params.pagination.paginationDisabledClass)))),f()};Object.assign(t.pagination,{enable:()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=o(e),e.forEach((e=>e.classList.remove(t.params.pagination.paginationDisabledClass)))),h(),m(),u()},disable:g,render:m,update:u,init:h,destroy:f})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const l=a();let o,d,c,p,u=!1,m=null,h=null;function f(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s}=t,{dragEl:a,el:i}=e,r=t.params.scrollbar,n=t.params.loop?t.progressLoop:t.progress;let l=d,o=(c-d)*n;s?(o=-o,o>0?(l=d-o,o=0):-o+d>c&&(l=c+o)):o<0?(l=d+o,o=0):o+d>c&&(l=c-o),t.isHorizontal()?(a.style.transform=`translate3d(${o}px, 0, 0)`,a.style.width=`${l}px`):(a.style.transform=`translate3d(0px, ${o}px, 0)`,a.style.height=`${l}px`),r.hide&&(clearTimeout(m),i.style.opacity=1,m=setTimeout((()=>{i.style.opacity=0,i.style.transitionDuration="400ms"}),1e3))}function w(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{dragEl:s,el:a}=e;s.style.width="",s.style.height="",c=t.isHorizontal()?a.offsetWidth:a.offsetHeight,p=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),d="auto"===t.params.scrollbar.dragSize?c*p:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s.style.width=`${d}px`:s.style.height=`${d}px`,a.style.display=p>=1?"none":"",t.params.scrollbar.hide&&(a.style.opacity=0),t.params.watchOverflow&&t.enabled&&e.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function b(e){return t.isHorizontal()?e.clientX:e.clientY}function y(e){const{scrollbar:s,rtlTranslate:a}=t,{el:i}=s;let r;r=(b(e)-v(i)[t.isHorizontal()?"left":"top"]-(null!==o?o:d/2))/(c-d),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function E(e){const s=t.params.scrollbar,{scrollbar:a,wrapperEl:i}=t,{el:n,dragEl:l}=a;u=!0,o=e.target===l?b(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.style.transitionDuration="100ms",l.style.transitionDuration="100ms",y(e),clearTimeout(h),n.style.transitionDuration="0ms",s.hide&&(n.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),r("scrollbarDragStart",e)}function x(e){const{scrollbar:s,wrapperEl:a}=t,{el:i,dragEl:n}=s;u&&(e.preventDefault?e.preventDefault():e.returnValue=!1,y(e),a.style.transitionDuration="0ms",i.style.transitionDuration="0ms",n.style.transitionDuration="0ms",r("scrollbarDragMove",e))}function S(e){const s=t.params.scrollbar,{scrollbar:a,wrapperEl:i}=t,{el:l}=a;u&&(u=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",i.style.transitionDuration=""),s.hide&&(clearTimeout(h),h=n((()=>{l.style.opacity=0,l.style.transitionDuration="400ms"}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function T(e){const{scrollbar:s,params:a}=t,i=s.el;if(!i)return;const r=i,n=!!a.passiveListeners&&{passive:!1,capture:!1},o=!!a.passiveListeners&&{passive:!0,capture:!1};if(!r)return;const d="on"===e?"addEventListener":"removeEventListener";r[d]("pointerdown",E,n),l[d]("pointermove",x,n),l[d]("pointerup",S,o)}function M(){const{scrollbar:e,el:s}=t;t.params.scrollbar=ee(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i,r;"string"==typeof a.el&&t.isElement&&(i=t.el.shadowRoot.querySelector(a.el)),i||"string"!=typeof a.el?i||(i=a.el):i=l.querySelectorAll(a.el),t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.querySelectorAll(a.el).length&&(i=s.querySelector(a.el)),i.length>0&&(i=i[0]),i.classList.add(t.isHorizontal()?a.horizontalClass:a.verticalClass),i&&(r=i.querySelector(`.${t.params.scrollbar.dragClass}`),r||(r=g("div",t.params.scrollbar.dragClass),i.append(r))),Object.assign(e,{el:i,dragEl:r}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&T("on"),i&&i.classList[t.enabled?"remove":"add"](t.params.scrollbar.lockClass)}function C(){const e=t.params.scrollbar,s=t.scrollbar.el;s&&s.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.params.scrollbar.el&&t.scrollbar.el&&T("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?P():(M(),w(),f())})),i("update resize observerUpdate lock unlock",(()=>{w()})),i("setTranslate",(()=>{f()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&(t.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}(s)})),i("enable disable",(()=>{const{el:e}=t.scrollbar;e&&e.classList[t.enabled?"remove":"add"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{C()}));const P=()=>{t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.el&&t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),C()};Object.assign(t.scrollbar,{enable:()=>{t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.el&&t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),M(),w(),f()},disable:P,updateSize:w,setTranslate:f,init:M,destroy:C})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=a?-1:1,r=e.getAttribute("data-swiper-parallax")||"0";let n=e.getAttribute("data-swiper-parallax-x"),l=e.getAttribute("data-swiper-parallax-y");const o=e.getAttribute("data-swiper-parallax-scale"),d=e.getAttribute("data-swiper-parallax-opacity"),c=e.getAttribute("data-swiper-parallax-rotate");if(n||l?(n=n||"0",l=l||"0"):t.isHorizontal()?(n=r,l="0"):(l=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*s*i+"%":n*s*i+"px",l=l.indexOf("%")>=0?parseInt(l,10)*s+"%":l*s+"px",null!=d){const t=d-(d-1)*(1-Math.abs(s));e.style.opacity=t}let p=`translate3d(${n}, ${l}, 0px)`;if(null!=o){p+=` scale(${o-(o-1)*(1-Math.abs(s))})`}if(c&&null!=c){p+=` rotate(${c*s*-1}deg)`}e.style.transform=p},r=()=>{const{el:e,slides:s,progress:a,snapGrid:r}=t;f(e,"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((e=>{i(e,a)})),s.forEach(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),e.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{el:s}=t;s.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((t=>{let s=parseInt(t.getAttribute("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.style.transitionDuration=`${s}ms`}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,d,c=1,p=!1;const u=[],m={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},h={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let w=1;function b(){if(u.length<2)return 1;const e=u[0].pageX,t=u[0].pageY,s=u[1].pageX,a=u[1].pageY;return Math.sqrt((s-e)**2+(a-t)**2)}function E(e){const s=t.isElement?"swiper-slide":`.${t.params.slideClass}`;return!!e.target.matches(s)||t.slides.filter((t=>t.contains(e.target))).length>0}function x(e){if("mouse"===e.pointerType&&u.splice(0,u.length),!E(e))return;const s=t.params.zoom;if(l=!1,d=!1,u.push(e),!(u.length<2)){if(l=!0,m.scaleStart=b(),!m.slideEl){m.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`),m.slideEl||(m.slideEl=t.slides[t.activeIndex]);let a=m.slideEl.querySelector(`.${s.containerClass}`);if(a&&(a=a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=a,m.imageWrapEl=a?y(m.imageEl,`.${s.containerClass}`)[0]:void 0,!m.imageWrapEl)return void(m.imageEl=void 0);m.maxRatio=m.imageWrapEl.getAttribute("data-swiper-zoom")||s.maxRatio}if(m.imageEl){const[e,t]=function(){if(u.length<2)return{x:null,y:null};const e=m.imageEl.getBoundingClientRect();return[(u[0].pageX+(u[1].pageX-u[0].pageX)/2-e.x)/c,(u[0].pageY+(u[1].pageY-u[0].pageY)/2-e.y)/c]}();m.originX=e,m.originY=t,m.imageEl.style.transitionDuration="0ms"}p=!0}}function S(e){if(!E(e))return;const s=t.params.zoom,a=t.zoom,i=u.findIndex((t=>t.pointerId===e.pointerId));i>=0&&(u[i]=e),u.length<2||(d=!0,m.scaleMove=b(),m.imageEl&&(a.scale=m.scaleMove/m.scaleStart*c,a.scale>m.maxRatio&&(a.scale=m.maxRatio-1+(a.scale-m.maxRatio+1)**.5),a.scale<s.minRatio&&(a.scale=s.minRatio+1-(s.minRatio-a.scale+1)**.5),m.imageEl.style.transform=`translate3d(0,0,0) scale(${a.scale})`))}function T(e){if(!E(e))return;if("mouse"===e.pointerType&&"pointerout"===e.type)return;const s=t.params.zoom,a=t.zoom,i=u.findIndex((t=>t.pointerId===e.pointerId));i>=0&&u.splice(i,1),l&&d&&(l=!1,d=!1,m.imageEl&&(a.scale=Math.max(Math.min(a.scale,m.maxRatio),s.minRatio),m.imageEl.style.transitionDuration=`${t.params.speed}ms`,m.imageEl.style.transform=`translate3d(0,0,0) scale(${a.scale})`,c=a.scale,p=!1,a.scale>1&&m.slideEl?m.slideEl.classList.add(`${s.zoomedSlideClass}`):a.scale<=1&&m.slideEl&&m.slideEl.classList.remove(`${s.zoomedSlideClass}`),1===a.scale&&(m.originX=0,m.originY=0,m.slideEl=void 0)))}function M(e){if(!E(e)||!function(e){const s=`.${t.params.zoom.containerClass}`;return!!e.target.matches(s)||[...t.el.querySelectorAll(s)].filter((t=>t.contains(e.target))).length>0}(e))return;const s=t.zoom;if(!m.imageEl)return;if(!h.isTouched||!m.slideEl)return;h.isMoved||(h.width=m.imageEl.offsetWidth,h.height=m.imageEl.offsetHeight,h.startX=o(m.imageWrapEl,"x")||0,h.startY=o(m.imageWrapEl,"y")||0,m.slideWidth=m.slideEl.offsetWidth,m.slideHeight=m.slideEl.offsetHeight,m.imageWrapEl.style.transitionDuration="0ms");const a=h.width*s.scale,i=h.height*s.scale;if(a<m.slideWidth&&i<m.slideHeight)return;h.minX=Math.min(m.slideWidth/2-a/2,0),h.maxX=-h.minX,h.minY=Math.min(m.slideHeight/2-i/2,0),h.maxY=-h.minY,h.touchesCurrent.x=u.length>0?u[0].pageX:e.pageX,h.touchesCurrent.y=u.length>0?u[0].pageY:e.pageY;if(Math.max(Math.abs(h.touchesCurrent.x-h.touchesStart.x),Math.abs(h.touchesCurrent.y-h.touchesStart.y))>5&&(t.allowClick=!1),!h.isMoved&&!p){if(t.isHorizontal()&&(Math.floor(h.minX)===Math.floor(h.startX)&&h.touchesCurrent.x<h.touchesStart.x||Math.floor(h.maxX)===Math.floor(h.startX)&&h.touchesCurrent.x>h.touchesStart.x))return void(h.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(h.minY)===Math.floor(h.startY)&&h.touchesCurrent.y<h.touchesStart.y||Math.floor(h.maxY)===Math.floor(h.startY)&&h.touchesCurrent.y>h.touchesStart.y))return void(h.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),h.isMoved=!0;const r=(s.scale-c)/(m.maxRatio-t.params.zoom.minRatio),{originX:n,originY:l}=m;h.currentX=h.touchesCurrent.x-h.touchesStart.x+h.startX+r*(h.width-2*n),h.currentY=h.touchesCurrent.y-h.touchesStart.y+h.startY+r*(h.height-2*l),h.currentX<h.minX&&(h.currentX=h.minX+1-(h.minX-h.currentX+1)**.8),h.currentX>h.maxX&&(h.currentX=h.maxX-1+(h.currentX-h.maxX+1)**.8),h.currentY<h.minY&&(h.currentY=h.minY+1-(h.minY-h.currentY+1)**.8),h.currentY>h.maxY&&(h.currentY=h.maxY-1+(h.currentY-h.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=h.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=h.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(h.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(h.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(h.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(h.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=h.touchesCurrent.x,g.prevPositionY=h.touchesCurrent.y,g.prevTime=Date.now(),m.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}function C(){const e=t.zoom;m.slideEl&&t.activeIndex!==t.slides.indexOf(m.slideEl)&&(m.imageEl&&(m.imageEl.style.transform="translate3d(0,0,0) scale(1)"),m.imageWrapEl&&(m.imageWrapEl.style.transform="translate3d(0,0,0)"),m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),e.scale=1,c=1,m.slideEl=void 0,m.imageEl=void 0,m.imageWrapEl=void 0,m.originX=0,m.originY=0)}function P(e){const s=t.zoom,a=t.params.zoom;if(!m.slideEl){e&&e.target&&(m.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`)),m.slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.slideEl=f(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:m.slideEl=t.slides[t.activeIndex]);let s=m.slideEl.querySelector(`.${a.containerClass}`);s&&(s=s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=s,m.imageWrapEl=s?y(m.imageEl,`.${a.containerClass}`)[0]:void 0}if(!m.imageEl||!m.imageWrapEl)return;let i,r,l,o,d,p,u,g,w,b,E,x,S,T,M,C,P,L;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.slideEl.classList.add(`${a.zoomedSlideClass}`),void 0===h.touchesStart.x&&e?(i=e.pageX,r=e.pageY):(i=h.touchesStart.x,r=h.touchesStart.y);const z="number"==typeof e?e:null;1===c&&z&&(i=void 0,r=void 0),s.scale=z||m.imageWrapEl.getAttribute("data-swiper-zoom")||a.maxRatio,c=z||m.imageWrapEl.getAttribute("data-swiper-zoom")||a.maxRatio,!e||1===c&&z?(u=0,g=0):(P=m.slideEl.offsetWidth,L=m.slideEl.offsetHeight,l=v(m.slideEl).left+n.scrollX,o=v(m.slideEl).top+n.scrollY,d=l+P/2-i,p=o+L/2-r,w=m.imageEl.offsetWidth,b=m.imageEl.offsetHeight,E=w*s.scale,x=b*s.scale,S=Math.min(P/2-E/2,0),T=Math.min(L/2-x/2,0),M=-S,C=-T,u=d*s.scale,g=p*s.scale,u<S&&(u=S),u>M&&(u=M),g<T&&(g=T),g>C&&(g=C)),z&&1===s.scale&&(m.originX=0,m.originY=0),m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform=`translate3d(${u}px, ${g}px,0)`,m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform=`translate3d(0,0,0) scale(${s.scale})`}function L(){const e=t.zoom,s=t.params.zoom;if(!m.slideEl){t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.slideEl=f(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:m.slideEl=t.slides[t.activeIndex];let e=m.slideEl.querySelector(`.${s.containerClass}`);e&&(e=e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=e,m.imageWrapEl=e?y(m.imageEl,`.${s.containerClass}`)[0]:void 0}m.imageEl&&m.imageWrapEl&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,c=1,m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform="translate3d(0,0,0)",m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform="translate3d(0,0,0) scale(1)",m.slideEl.classList.remove(`${s.zoomedSlideClass}`),m.slideEl=void 0,m.originX=0,m.originY=0)}function z(e){const s=t.zoom;s.scale&&1!==s.scale?L():P(e)}function A(){return{passiveListener:!!t.params.passiveListeners&&{passive:!0,capture:!1},activeListenerWithCapture:!t.params.passiveListeners||{passive:!1,capture:!0}}}function $(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const{passiveListener:s,activeListenerWithCapture:a}=A();t.wrapperEl.addEventListener("pointerdown",x,s),t.wrapperEl.addEventListener("pointermove",S,a),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.addEventListener(e,T,s)})),t.wrapperEl.addEventListener("pointermove",M,a)}function I(){const e=t.zoom;if(!e.enabled)return;e.enabled=!1;const{passiveListener:s,activeListenerWithCapture:a}=A();t.wrapperEl.removeEventListener("pointerdown",x,s),t.wrapperEl.removeEventListener("pointermove",S,a),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.removeEventListener(e,T,s)})),t.wrapperEl.removeEventListener("pointermove",M,a)}Object.defineProperty(t.zoom,"scale",{get:()=>w,set(e){if(w!==e){const t=m.imageEl,s=m.slideEl;i("zoomChange",e,t,s)}w=e}}),a("init",(()=>{t.params.zoom.enabled&&$()})),a("destroy",(()=>{I()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;if(!m.imageEl)return;if(h.isTouched)return;s.android&&e.cancelable&&e.preventDefault(),h.isTouched=!0;const a=u.length>0?u[0]:e;h.touchesStart.x=a.pageX,h.touchesStart.y=a.pageY}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.imageEl)return;if(!h.isTouched||!h.isMoved)return h.isTouched=!1,void(h.isMoved=!1);h.isTouched=!1,h.isMoved=!1;let s=300,a=300;const i=g.x*s,r=h.currentX+i,n=g.y*a,l=h.currentY+n;0!==g.x&&(s=Math.abs((r-h.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-h.currentY)/g.y));const o=Math.max(s,a);h.currentX=r,h.currentY=l;const d=h.width*e.scale,c=h.height*e.scale;h.minX=Math.min(m.slideWidth/2-d/2,0),h.maxX=-h.minX,h.minY=Math.min(m.slideHeight/2-c/2,0),h.maxY=-h.minY,h.currentX=Math.max(Math.min(h.currentX,h.maxX),h.minX),h.currentY=Math.max(Math.min(h.currentY,h.maxY),h.minY),m.imageWrapEl.style.transitionDuration=`${o}ms`,m.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&z(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:$,disable:I,in:P,out:L,toggle:z})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{if("undefined"!=typeof window&&("string"==typeof t.params.controller.control||t.params.controller.control instanceof HTMLElement)){const e=document.querySelector(t.params.controller.control);if(e&&e.swiper)t.controller.control=e.swiper;else if(e){const s=a=>{t.controller.control=a.detail[0],t.update(),e.removeEventListener("init",s)};e.addEventListener("init",s)}}else t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){if(e.destroyed)return;const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid)}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),!Number.isNaN(r)&&Number.isFinite(r)||(r=1),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function l(s){s.destroyed||(s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&n((()=>{s.updateAutoHeight()})),E(s.wrapperEl,(()=>{i&&s.transitionEnd()}))))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&l(i[r]);else i instanceof a&&s!==i&&l(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.innerHTML="",t.innerHTML=e)}const n=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function l(e){(e=n(e)).forEach((e=>{e.setAttribute("tabIndex","0")}))}function o(e){(e=n(e)).forEach((e=>{e.setAttribute("tabIndex","-1")}))}function d(e,t){(e=n(e)).forEach((e=>{e.setAttribute("role",t)}))}function c(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-roledescription",t)}))}function p(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-label",t)}))}function u(e){(e=n(e)).forEach((e=>{e.setAttribute("aria-disabled",!0)}))}function m(e){(e=n(e)).forEach((e=>{e.setAttribute("aria-disabled",!1)}))}function h(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=e.target;t.pagination&&t.pagination.el&&(a===t.pagination.el||t.pagination.el.contains(e.target))&&!e.target.matches(te(t.params.pagination.bulletClass))||(t.navigation&&t.navigation.nextEl&&a===t.navigation.nextEl&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.prevEl&&a===t.navigation.prevEl&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.matches(te(t.params.pagination.bulletClass))&&a.click())}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function v(){return f()&&t.params.pagination.clickable}const w=(e,t,s)=>{l(e),"BUTTON"!==e.tagName&&(d(e,"button"),e.addEventListener("keydown",h)),p(e,s),function(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-controls",t)}))}(e,t)},y=()=>{t.a11y.clicked=!0},E=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},x=e=>{if(t.a11y.clicked)return;const s=e.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(s),0))},S=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&c(t.slides,e.itemRoleDescriptionMessage),e.slideRole&&d(t.slides,e.slideRole);const s=t.slides.length;e.slideLabelMessage&&t.slides.forEach(((a,i)=>{const r=t.params.loop?parseInt(a.getAttribute("data-swiper-slide-index"),10):i;p(a,e.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,s))}))},T=()=>{const e=t.params.a11y;t.isElement?t.el.shadowEl.append(i):t.el.append(i);const s=t.el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.wrapperEl,r=e.id||a.getAttribute("id")||`swiper-wrapper-${l=16,void 0===l&&(l=16),"x".repeat(l).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var l;const o=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var d;d=r,n(a).forEach((e=>{e.setAttribute("id",d)})),function(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-live",t)}))}(a,o),S();let{nextEl:u,prevEl:m}=t.navigation?t.navigation:{};if(u=n(u),m=n(m),u&&u.forEach((t=>w(t,r,e.nextSlideMessage))),m&&m.forEach((t=>w(t,r,e.prevSlideMessage))),v()){(Array.isArray(t.pagination.el)?t.pagination.el:[t.pagination.el]).forEach((e=>{e.addEventListener("keydown",h)}))}t.el.addEventListener("focus",x,!0),t.el.addEventListener("pointerdown",y,!0),t.el.addEventListener("pointerup",E,!0)};a("beforeInit",(()=>{i=g("span",t.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true")})),a("afterInit",(()=>{t.params.a11y.enabled&&T()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&S()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:e,prevEl:s}=t.navigation;s&&(t.isBeginning?(u(s),o(s)):(m(s),l(s))),e&&(t.isEnd?(u(e),o(e)):(m(e),l(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.forEach((s=>{t.params.pagination.clickable&&(l(s),t.params.pagination.renderBullet||(d(s,"button"),p(s,e.paginationBulletMessage.replace(/\{\{index\}\}/,b(s)+1)))),s.matches(te(t.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){i&&i.remove();let{nextEl:e,prevEl:s}=t.navigation?t.navigation:{};e=n(e),s=n(s),e&&e.forEach((e=>e.removeEventListener("keydown",h))),s&&s.forEach((e=>e.removeEventListener("keydown",h))),v()&&(Array.isArray(t.pagination.el)?t.pagination.el:[t.pagination.el]).forEach((e=>{e.removeEventListener("keydown",h)}));t.el.removeEventListener("focus",x,!0),t.el.removeEventListener("pointerdown",y,!0),t.el.removeEventListener("pointerup",E,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides[s];let d=l(o.getAttribute("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e?`${e}/`:""}${d}`}else n.pathname.includes(e)||(d=`${e?`${e}/`:""}${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides[i];if(l(r.getAttribute("data-history"))===s){const s=t.getSlideIndex(r);t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),n.key||n.value?(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p)):t.params.history.replaceState||e.addEventListener("popstate",p)}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),d=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(e,s){if(t.virtual&&t.params.virtual.enabled){const e=t.slides.filter((e=>e.getAttribute("data-hash")===s))[0];if(!e)return 0;return parseInt(e.getAttribute("data-swiper-slide-index"),10)}return t.getSlideIndex(f(t.slidesEl,`.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])}}});const c=()=>{i("hashChange");const e=o.location.hash.replace("#",""),s=t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`);if(e!==(s?s.getAttribute("data-hash"):"")){const s=t.params.hashNavigation.getSlideIndex(t,e);if(void 0===s||Number.isNaN(s))return;t.slideTo(s)}},p=()=>{if(!l||!t.params.hashNavigation.enabled)return;const e=t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`),s=e?e.getAttribute("data-hash")||e.getAttribute("data-history"):"";t.params.hashNavigation.replaceState&&d.history&&d.history.replaceState?(d.history.replaceState(null,null,`#${s}`||""),i("hashSet")):(o.location.hash=s||"",i("hashSet"))};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0,a=t.params.hashNavigation.getSlideIndex(t,e);t.slideTo(a||0,s,t.params.runCallbacksOnInit,!0)}t.params.hashNavigation.watchState&&d.addEventListener("hashchange",c)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d.removeEventListener("hashchange",c)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&p()})),n("slideChange",(()=>{l&&t.params.cssMode&&p()}))},function(e){let t,s,{swiper:i,extendParams:r,on:n,emit:l,params:o}=e;i.autoplay={running:!1,paused:!1,timeLeft:0},r({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,c,p,u,m,h,f,g=o&&o.autoplay?o.autoplay.delay:3e3,v=o&&o.autoplay?o.autoplay.delay:3e3,w=(new Date).getTime;function b(e){i&&!i.destroyed&&i.wrapperEl&&e.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",b),M())}const y=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?c=!0:c&&(v=d,c=!1);const e=i.autoplay.paused?d:w+v-(new Date).getTime();i.autoplay.timeLeft=e,l("autoplayTimeLeft",e,e/g),s=requestAnimationFrame((()=>{y()}))},E=e=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(s),y();let a=void 0===e?i.params.autoplay.delay:e;g=i.params.autoplay.delay,v=i.params.autoplay.delay;const r=(()=>{let e;if(e=i.virtual&&i.params.virtual.enabled?i.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:i.slides[i.activeIndex],!e)return;return parseInt(e.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(r)&&r>0&&void 0===e&&(a=r,g=r,v=r),d=a;const n=i.params.speed,o=()=>{i&&!i.destroyed&&(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(n,!0,!0),l("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,n,!0,!0),l("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(n,!0,!0),l("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,n,!0,!0),l("autoplay")),i.params.cssMode&&(w=(new Date).getTime(),requestAnimationFrame((()=>{E()}))))};return a>0?(clearTimeout(t),t=setTimeout((()=>{o()}),a)):requestAnimationFrame((()=>{o()})),a},x=()=>{i.autoplay.running=!0,E(),l("autoplayStart")},S=()=>{i.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(s),l("autoplayStop")},T=(e,s)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(t),e||(f=!0);const a=()=>{l("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",b):M()};if(i.autoplay.paused=!0,s)return h&&(d=i.params.autoplay.delay),h=!1,void a();const r=d||i.params.autoplay.delay;d=r-((new Date).getTime()-w),i.isEnd&&d<0&&!i.params.loop||(d<0&&(d=0),a())},M=()=>{i.isEnd&&d<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(w=(new Date).getTime(),f?(f=!1,E(d)):E(),i.autoplay.paused=!1,l("autoplayResume"))},C=()=>{if(i.destroyed||!i.autoplay.running)return;const e=a();"hidden"===e.visibilityState&&(f=!0,T(!0)),"visible"===e.visibilityState&&M()},P=e=>{"mouse"===e.pointerType&&(f=!0,T(!0))},L=e=>{"mouse"===e.pointerType&&i.autoplay.paused&&M()};n("init",(()=>{i.params.autoplay.enabled&&(i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",P),i.el.addEventListener("pointerleave",L)),a().addEventListener("visibilitychange",C),w=(new Date).getTime(),x())})),n("destroy",(()=>{i.el.removeEventListener("pointerenter",P),i.el.removeEventListener("pointerleave",L),a().removeEventListener("visibilitychange",C),i.autoplay.running&&S()})),n("beforeTransitionStart",((e,t,s)=>{!i.destroyed&&i.autoplay.running&&(s||!i.params.autoplay.disableOnInteraction?T(!0,!0):S())})),n("sliderFirstMove",(()=>{!i.destroyed&&i.autoplay.running&&(i.params.autoplay.disableOnInteraction?S():(p=!0,u=!1,f=!1,m=setTimeout((()=>{f=!0,u=!0,T(!0)}),200)))})),n("touchEnd",(()=>{if(!i.destroyed&&i.autoplay.running&&p){if(clearTimeout(m),clearTimeout(t),i.params.autoplay.disableOnInteraction)return u=!1,void(p=!1);u&&i.params.cssMode&&M(),u=!1,p=!1}})),n("slideChange",(()=>{!i.destroyed&&i.autoplay.running&&(h=!0)})),Object.assign(i.autoplay,{start:x,stop:S,pause:T,resume:M})},function(e){let{swiper:t,extendParams:s,on:i}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,n=!1;function l(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&a.classList.contains(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;i=e.params.loop?parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10):s,t.params.loop?t.slideToLoop(i):t.slideTo(i)}function o(){const{thumbs:e}=t.params;if(r)return!1;r=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if(d(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),n=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",l),!0}function c(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.forEach((e=>e.classList.remove(r))),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)f(s.slidesEl,`[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e=>{e.classList.add(r)}));else for(let e=0;e<i;e+=1)s.slides[t.realIndex+e]&&s.slides[t.realIndex+e].classList.add(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){const i=s.activeIndex;let r,o;if(s.params.loop){const e=s.slides.filter((e=>e.getAttribute("data-swiper-slide-index")===`${t.realIndex}`))[0];r=s.slides.indexOf(e),o=t.activeIndex>t.previousIndex?"next":"prev"}else r=t.realIndex,o=r>t.previousIndex?"next":"prev";l&&(r+="next"===o?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(r)<0&&(s.params.centeredSlides?r=r>i?r-Math.floor(a/2)+1:r+Math.floor(a/2)-1:r>i&&s.params.slidesPerGroup,s.slideTo(r,e?0:void 0))}}t.thumbs={swiper:null},i("beforeInit",(()=>{const{thumbs:e}=t.params;if(e&&e.swiper)if("string"==typeof e.swiper||e.swiper instanceof HTMLElement){const s=a(),i=()=>{const a="string"==typeof e.swiper?s.querySelector(e.swiper):e.swiper;if(a&&a.swiper)e.swiper=a.swiper,o(),c(!0);else if(a){const s=i=>{e.swiper=i.detail[0],a.removeEventListener("init",s),o(),c(!0),e.swiper.update(),t.update()};a.addEventListener("init",s)}return a},r=()=>{if(t.destroyed)return;i()||requestAnimationFrame(r)};requestAnimationFrame(r)}else o(),c(!0)})),i("slideChange update resize observerUpdate",(()=>{c()})),i("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),i("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&n&&e.destroy()})),Object.assign(t.thumbs,{init:o,update:c})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:l()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,wrapperEl:n,rtlTranslate:o,snapGrid:d,touchEventsData:c}=t,p=l()-c.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(c.velocities.length>1){const e=c.velocities.pop(),s=c.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||l()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,c.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let p=t.translate+s;o&&(p=-p);let u,m=!1;const h=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(p<t.maxTranslate())r.freeMode.momentumBounce?(p+t.maxTranslate()<-h&&(p=t.maxTranslate()-h),u=t.maxTranslate(),m=!0,c.allowMomentumBounce=!0):p=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(p>t.minTranslate())r.freeMode.momentumBounce?(p-t.minTranslate()>h&&(p=t.minTranslate()+h),u=t.minTranslate(),m=!0,c.allowMomentumBounce=!0):p=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<d.length;t+=1)if(d[t]>-p){e=t;break}p=Math.abs(d[e]-p)<Math.abs(d[e-1]-p)||"next"===t.swipeDirection?d[e]:d[e-1],p=-p}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=o?Math.abs((-p-t.translate)/t.velocity):Math.abs((p-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((o?-p:p)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&m?(t.updateProgress(u),t.setTransition(e),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating=!0,E(n,(()=>{t&&!t.destroyed&&c.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(u),E(n,(()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(p),t.setTransition(e),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,E(n,(()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(p),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||p>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}});const n=()=>{let e=i.params.spaceBetween;return"string"==typeof e&&e.indexOf("%")>=0?e=parseFloat(e.replace("%",""))/100*i.size:"string"==typeof e&&(e=parseFloat(e)),e};i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,l,o)=>{const{slidesPerGroup:d}=i.params,c=n(),{rows:p,fill:u}=i.params.grid;let m,h,f;if("row"===u&&d>1){const s=Math.floor(e/(d*p)),a=e-p*d*s,i=0===s?d:Math.min(Math.ceil((l-s*p*d)/p),d);f=Math.floor(a/i),h=a-f*i+s*d,m=h+f*t/p,r.style.order=m}else"column"===u?(h=Math.floor(e/p),f=e-h*p,(h>a||h===a&&f===p-1)&&(f+=1,f>=p&&(f=0,h+=1))):(f=Math.floor(e/s),h=e-f*s);r.style[o("margin-top")]=0!==f?c&&`${c}px`:""},updateWrapperSize:(e,s,a)=>{const{centeredSlides:r,roundLengths:l}=i.params,o=n(),{rows:d}=i.params.grid;if(i.virtualSize=(e+o)*t,i.virtualSize=Math.ceil(i.virtualSize/d)-o,i.wrapperEl.style[a("width")]=`${i.virtualSize+o}px`,r){const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.splice(0,s.length),s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:se.bind(t),prependSlide:ae.bind(t),addSlide:ie.bind(t),removeSlide:re.bind(t),removeAllSlides:ne.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1}}),le({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t;t.params.fadeEffect;for(let s=0;s<e.length;s+=1){const e=t.slides[s];let a=-e.swiperSlideOffset;t.params.virtualTranslate||(a-=t.translate);let i=0;t.isHorizontal()||(i=a,a=0);const r=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e.progress),0):1+Math.min(Math.max(e.progress,-1),0),n=oe(0,e);n.style.opacity=r,n.style.transform=`translate3d(${a}px, ${i}px, 0px)`}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`})),de({swiper:t,duration:e,transformElements:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=s?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");a||(a=g("div","swiper-slide-shadow-"+(s?"left":"top")),e.append(a)),i||(i=g("div","swiper-slide-shadow-"+(s?"right":"bottom")),e.append(i)),a&&(a.style.opacity=Math.max(-t,0)),i&&(i.style.opacity=Math.max(t,0))};le({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{el:e,wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:d}=t,c=t.params.cubeEffect,p=t.isHorizontal(),u=t.virtual&&t.params.virtual.enabled;let m,h=0;c.shadow&&(p?(m=t.slidesEl.querySelector(".swiper-cube-shadow"),m||(m=g("div","swiper-cube-shadow"),t.slidesEl.append(m)),m.style.height=`${r}px`):(m=e.querySelector(".swiper-cube-shadow"),m||(m=g("div","swiper-cube-shadow"),e.append(m))));for(let e=0;e<a.length;e+=1){const t=a[e];let s=e;u&&(s=parseInt(t.getAttribute("data-swiper-slide-index"),10));let r=90*s,n=Math.floor(r/360);l&&(r=-r,n=Math.floor(-r/360));const d=Math.max(Math.min(t.progress,1),-1);let m=0,f=0,g=0;s%4==0?(m=4*-n*o,g=0):(s-1)%4==0?(m=0,g=4*-n*o):(s-2)%4==0?(m=o+4*n*o,g=o):(s-3)%4==0&&(m=-o,g=3*o+4*o*n),l&&(m=-m),p||(f=m,m=0);const v=`rotateX(${p?0:-r}deg) rotateY(${p?r:0}deg) translate3d(${m}px, ${f}px, ${g}px)`;d<=1&&d>-1&&(h=90*s+90*d,l&&(h=90*-s-90*d)),t.style.transform=v,c.slideShadows&&i(t,d,p)}if(s.style.transformOrigin=`50% 50% -${o/2}px`,s.style["-webkit-transform-origin"]=`50% 50% -${o/2}px`,c.shadow)if(p)m.style.transform=`translate3d(0px, ${r/2+c.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`;else{const e=Math.abs(h)-90*Math.floor(Math.abs(h)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=c.shadowScale,a=c.shadowScale/t,i=c.shadowOffset;m.style.transform=`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`}const f=(d.isSafari||d.isWebView)&&d.needPerspectiveFix?-o/2:0;s.style.transform=`translate3d(0px,0,${f}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`,s.style.setProperty("--swiper-cube-translate-z",`${f}px`)},setTransition:e=>{const{el:s,slides:a}=t;if(a.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),t.params.cubeEffect.shadow&&!t.isHorizontal()){const t=s.querySelector(".swiper-cube-shadow");t&&(t.style.transitionDuration=`${e}ms`)}},recreateShadows:()=>{const e=t.isHorizontal();t.slides.forEach((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(t,s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0}});const i=(e,s,a)=>{let i=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");i||(i=ce(0,e,t.isHorizontal()?"left":"top")),r||(r=ce(0,e,t.isHorizontal()?"right":"bottom")),i&&(i.style.opacity=Math.max(-s,0)),r&&(r.style.opacity=Math.max(s,0))};le({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e[r];let l=n.progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n.progress,1),-1));const o=n.swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),n.style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l);const m=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;oe(0,n).style.transform=m}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),de({swiper:t,duration:e,transformElements:s})},recreateShadows:()=>{t.params.flipEffect;t.slides.forEach((e=>{let s=e.progress;t.params.flipEffect.limitRotation&&(s=Math.max(Math.min(e.progress,1),-1)),i(e,s)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),le({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a[e],s=i[e],l=(o-t.swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,m=n?0:d*p,h=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(h)<.001&&(h=0),Math.abs(u)<.001&&(u=0),Math.abs(m)<.001&&(m=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;if(oe(0,t).style.transform=b,t.style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.querySelector(".swiper-slide-shadow-left"):t.querySelector(".swiper-slide-shadow-top"),s=n?t.querySelector(".swiper-slide-shadow-right"):t.querySelector(".swiper-slide-shadow-bottom");e||(e=ce(0,t,n?"left":"top")),s||(s=ce(0,t,n?"right":"bottom")),e&&(e.style.opacity=p>0?p:0),s&&(s.style.opacity=-p>0?-p:0)}}},setTransition:e=>{t.slides.map((e=>h(e))).forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))}))},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;le({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.style.transform=`translateX(calc(50% - ${e}px))`}for(let s=0;s<e.length;s+=1){const a=e[s],o=a.progress,d=Math.min(Math.max(a.progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a.originalProgress,-r.limitProgress),r.limitProgress));const p=a.swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],m=[0,0,0];let h=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,h=!0):d>0&&(f=r.prev,h=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),m.forEach(((e,t)=>{m[t]=f.rotate[t]*Math.abs(d*n)})),a.style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,y=`translate3d(${g}) ${v} ${w}`;if(h&&f.shadow||!h){let e=a.querySelector(".swiper-slide-shadow");if(!e&&f.shadow&&(e=ce(0,a)),e){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e.style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const E=oe(0,a);E.style.transform=y,E.style.opacity=b,f.origin&&(E.style.transformOrigin=f.origin)}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),de({swiper:t,duration:e,transformElements:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),le({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e[l],d=o.progress,c=Math.min(Math.max(d,-4),4);let p=o.swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&(t.wrapperEl.style.transform=`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,m=0;const h=-100*Math.abs(c);let f=1,g=-a.perSlideRotate*c,v=a.perSlideOffset-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,y=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||y){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,m=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=m;m=u,u=e}const E=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),x=`\n        translate3d(${u}, ${m}, ${h}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${E})\n      `;if(a.slideShadows){let e=o.querySelector(".swiper-slide-shadow");e||(e=ce(0,o)),e&&(e.style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o.style.zIndex=-Math.abs(Math.round(d))+e.length;oe(0,o).style.transform=x}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),de({swiper:t,duration:e,transformElements:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return J.use(pe),J}));

/* ------------------------*/
/* ------------------------*/
/* tippy-bundle.umd.min.js */
/* ------------------------*/
/* ------------------------*/

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t=t||self).tippy=e(t.Popper)}(this,(function(t){"use strict";var e="undefined"!=typeof window&&"undefined"!=typeof document,n=!!e&&!!window.msCrypto,r={passive:!0,capture:!0},o=function(){return document.body};function i(t,e,n){if(Array.isArray(t)){var r=t[e];return null==r?Array.isArray(n)?n[e]:n:r}return t}function a(t,e){var n={}.toString.call(t);return 0===n.indexOf("[object")&&n.indexOf(e+"]")>-1}function s(t,e){return"function"==typeof t?t.apply(void 0,e):t}function u(t,e){return 0===e?t:function(r){clearTimeout(n),n=setTimeout((function(){t(r)}),e)};var n}function p(t,e){var n=Object.assign({},t);return e.forEach((function(t){delete n[t]})),n}function c(t){return[].concat(t)}function f(t,e){-1===t.indexOf(e)&&t.push(e)}function l(t){return t.split("-")[0]}function d(t){return[].slice.call(t)}function v(t){return Object.keys(t).reduce((function(e,n){return void 0!==t[n]&&(e[n]=t[n]),e}),{})}function m(){return document.createElement("div")}function g(t){return["Element","Fragment"].some((function(e){return a(t,e)}))}function h(t){return a(t,"MouseEvent")}function b(t){return!(!t||!t._tippy||t._tippy.reference!==t)}function y(t){return g(t)?[t]:function(t){return a(t,"NodeList")}(t)?d(t):Array.isArray(t)?t:d(document.querySelectorAll(t))}function w(t,e){t.forEach((function(t){t&&(t.style.transitionDuration=e+"ms")}))}function x(t,e){t.forEach((function(t){t&&t.setAttribute("data-state",e)}))}function E(t){var e,n=c(t)[0];return null!=n&&null!=(e=n.ownerDocument)&&e.body?n.ownerDocument:document}function O(t,e,n){var r=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(e){t[r](e,n)}))}function C(t,e){for(var n=e;n;){var r;if(t.contains(n))return!0;n=null==n.getRootNode||null==(r=n.getRootNode())?void 0:r.host}return!1}var T={isTouch:!1},A=0;function L(){T.isTouch||(T.isTouch=!0,window.performance&&document.addEventListener("mousemove",D))}function D(){var t=performance.now();t-A<20&&(T.isTouch=!1,document.removeEventListener("mousemove",D)),A=t}function k(){var t=document.activeElement;if(b(t)){var e=t._tippy;t.blur&&!e.state.isVisible&&t.blur()}}var R=Object.assign({appendTo:o,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),P=Object.keys(R);function j(t){var e=(t.plugins||[]).reduce((function(e,n){var r,o=n.name,i=n.defaultValue;o&&(e[o]=void 0!==t[o]?t[o]:null!=(r=R[o])?r:i);return e}),{});return Object.assign({},t,e)}function M(t,e){var n=Object.assign({},e,{content:s(e.content,[t])},e.ignoreAttributes?{}:function(t,e){return(e?Object.keys(j(Object.assign({},R,{plugins:e}))):P).reduce((function(e,n){var r=(t.getAttribute("data-tippy-"+n)||"").trim();if(!r)return e;if("content"===n)e[n]=r;else try{e[n]=JSON.parse(r)}catch(t){e[n]=r}return e}),{})}(t,e.plugins));return n.aria=Object.assign({},R.aria,n.aria),n.aria={expanded:"auto"===n.aria.expanded?e.interactive:n.aria.expanded,content:"auto"===n.aria.content?e.interactive?null:"describedby":n.aria.content},n}function V(t,e){t.innerHTML=e}function I(t){var e=m();return!0===t?e.className="tippy-arrow":(e.className="tippy-svg-arrow",g(t)?e.appendChild(t):V(e,t)),e}function S(t,e){g(e.content)?(V(t,""),t.appendChild(e.content)):"function"!=typeof e.content&&(e.allowHTML?V(t,e.content):t.textContent=e.content)}function B(t){var e=t.firstElementChild,n=d(e.children);return{box:e,content:n.find((function(t){return t.classList.contains("tippy-content")})),arrow:n.find((function(t){return t.classList.contains("tippy-arrow")||t.classList.contains("tippy-svg-arrow")})),backdrop:n.find((function(t){return t.classList.contains("tippy-backdrop")}))}}function N(t){var e=m(),n=m();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=m();function o(n,r){var o=B(e),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||S(a,t.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(I(r.arrow))):i.appendChild(I(r.arrow)):s&&i.removeChild(s)}return r.className="tippy-content",r.setAttribute("data-state","hidden"),S(r,t.props),e.appendChild(n),n.appendChild(r),o(t.props,t.props),{popper:e,onUpdate:o}}N.$$tippy=!0;var H=1,U=[],_=[];function z(e,a){var p,g,b,y,A,L,D,k,P=M(e,Object.assign({},R,j(v(a)))),V=!1,I=!1,S=!1,N=!1,z=[],F=u(wt,P.interactiveDebounce),W=H++,X=(k=P.plugins).filter((function(t,e){return k.indexOf(t)===e})),Y={id:W,reference:e,popper:m(),popperInstance:null,props:P,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:X,clearDelayTimeouts:function(){clearTimeout(p),clearTimeout(g),cancelAnimationFrame(b)},setProps:function(t){if(Y.state.isDestroyed)return;at("onBeforeUpdate",[Y,t]),bt();var n=Y.props,r=M(e,Object.assign({},n,v(t),{ignoreAttributes:!0}));Y.props=r,ht(),n.interactiveDebounce!==r.interactiveDebounce&&(pt(),F=u(wt,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?c(n.triggerTarget).forEach((function(t){t.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");ut(),it(),J&&J(n,r);Y.popperInstance&&(Ct(),At().forEach((function(t){requestAnimationFrame(t._tippy.popperInstance.forceUpdate)})));at("onAfterUpdate",[Y,t])},setContent:function(t){Y.setProps({content:t})},show:function(){var t=Y.state.isVisible,e=Y.state.isDestroyed,n=!Y.state.isEnabled,r=T.isTouch&&!Y.props.touch,a=i(Y.props.duration,0,R.duration);if(t||e||n||r)return;if(et().hasAttribute("disabled"))return;if(at("onShow",[Y],!1),!1===Y.props.onShow(Y))return;Y.state.isVisible=!0,tt()&&($.style.visibility="visible");it(),dt(),Y.state.isMounted||($.style.transition="none");if(tt()){var u=rt(),p=u.box,c=u.content;w([p,c],0)}L=function(){var t;if(Y.state.isVisible&&!N){if(N=!0,$.offsetHeight,$.style.transition=Y.props.moveTransition,tt()&&Y.props.animation){var e=rt(),n=e.box,r=e.content;w([n,r],a),x([n,r],"visible")}st(),ut(),f(_,Y),null==(t=Y.popperInstance)||t.forceUpdate(),at("onMount",[Y]),Y.props.animation&&tt()&&function(t,e){mt(t,e)}(a,(function(){Y.state.isShown=!0,at("onShown",[Y])}))}},function(){var t,e=Y.props.appendTo,n=et();t=Y.props.interactive&&e===o||"parent"===e?n.parentNode:s(e,[n]);t.contains($)||t.appendChild($);Y.state.isMounted=!0,Ct()}()},hide:function(){var t=!Y.state.isVisible,e=Y.state.isDestroyed,n=!Y.state.isEnabled,r=i(Y.props.duration,1,R.duration);if(t||e||n)return;if(at("onHide",[Y],!1),!1===Y.props.onHide(Y))return;Y.state.isVisible=!1,Y.state.isShown=!1,N=!1,V=!1,tt()&&($.style.visibility="hidden");if(pt(),vt(),it(!0),tt()){var o=rt(),a=o.box,s=o.content;Y.props.animation&&(w([a,s],r),x([a,s],"hidden"))}st(),ut(),Y.props.animation?tt()&&function(t,e){mt(t,(function(){!Y.state.isVisible&&$.parentNode&&$.parentNode.contains($)&&e()}))}(r,Y.unmount):Y.unmount()},hideWithInteractivity:function(t){nt().addEventListener("mousemove",F),f(U,F),F(t)},enable:function(){Y.state.isEnabled=!0},disable:function(){Y.hide(),Y.state.isEnabled=!1},unmount:function(){Y.state.isVisible&&Y.hide();if(!Y.state.isMounted)return;Tt(),At().forEach((function(t){t._tippy.unmount()})),$.parentNode&&$.parentNode.removeChild($);_=_.filter((function(t){return t!==Y})),Y.state.isMounted=!1,at("onHidden",[Y])},destroy:function(){if(Y.state.isDestroyed)return;Y.clearDelayTimeouts(),Y.unmount(),bt(),delete e._tippy,Y.state.isDestroyed=!0,at("onDestroy",[Y])}};if(!P.render)return Y;var q=P.render(Y),$=q.popper,J=q.onUpdate;$.setAttribute("data-tippy-root",""),$.id="tippy-"+Y.id,Y.popper=$,e._tippy=Y,$._tippy=Y;var G=X.map((function(t){return t.fn(Y)})),K=e.hasAttribute("aria-expanded");return ht(),ut(),it(),at("onCreate",[Y]),P.showOnCreate&&Lt(),$.addEventListener("mouseenter",(function(){Y.props.interactive&&Y.state.isVisible&&Y.clearDelayTimeouts()})),$.addEventListener("mouseleave",(function(){Y.props.interactive&&Y.props.trigger.indexOf("mouseenter")>=0&&nt().addEventListener("mousemove",F)})),Y;function Q(){var t=Y.props.touch;return Array.isArray(t)?t:[t,0]}function Z(){return"hold"===Q()[0]}function tt(){var t;return!(null==(t=Y.props.render)||!t.$$tippy)}function et(){return D||e}function nt(){var t=et().parentNode;return t?E(t):document}function rt(){return B($)}function ot(t){return Y.state.isMounted&&!Y.state.isVisible||T.isTouch||y&&"focus"===y.type?0:i(Y.props.delay,t?0:1,R.delay)}function it(t){void 0===t&&(t=!1),$.style.pointerEvents=Y.props.interactive&&!t?"":"none",$.style.zIndex=""+Y.props.zIndex}function at(t,e,n){var r;(void 0===n&&(n=!0),G.forEach((function(n){n[t]&&n[t].apply(n,e)})),n)&&(r=Y.props)[t].apply(r,e)}function st(){var t=Y.props.aria;if(t.content){var n="aria-"+t.content,r=$.id;c(Y.props.triggerTarget||e).forEach((function(t){var e=t.getAttribute(n);if(Y.state.isVisible)t.setAttribute(n,e?e+" "+r:r);else{var o=e&&e.replace(r,"").trim();o?t.setAttribute(n,o):t.removeAttribute(n)}}))}}function ut(){!K&&Y.props.aria.expanded&&c(Y.props.triggerTarget||e).forEach((function(t){Y.props.interactive?t.setAttribute("aria-expanded",Y.state.isVisible&&t===et()?"true":"false"):t.removeAttribute("aria-expanded")}))}function pt(){nt().removeEventListener("mousemove",F),U=U.filter((function(t){return t!==F}))}function ct(t){if(!T.isTouch||!S&&"mousedown"!==t.type){var n=t.composedPath&&t.composedPath()[0]||t.target;if(!Y.props.interactive||!C($,n)){if(c(Y.props.triggerTarget||e).some((function(t){return C(t,n)}))){if(T.isTouch)return;if(Y.state.isVisible&&Y.props.trigger.indexOf("click")>=0)return}else at("onClickOutside",[Y,t]);!0===Y.props.hideOnClick&&(Y.clearDelayTimeouts(),Y.hide(),I=!0,setTimeout((function(){I=!1})),Y.state.isMounted||vt())}}}function ft(){S=!0}function lt(){S=!1}function dt(){var t=nt();t.addEventListener("mousedown",ct,!0),t.addEventListener("touchend",ct,r),t.addEventListener("touchstart",lt,r),t.addEventListener("touchmove",ft,r)}function vt(){var t=nt();t.removeEventListener("mousedown",ct,!0),t.removeEventListener("touchend",ct,r),t.removeEventListener("touchstart",lt,r),t.removeEventListener("touchmove",ft,r)}function mt(t,e){var n=rt().box;function r(t){t.target===n&&(O(n,"remove",r),e())}if(0===t)return e();O(n,"remove",A),O(n,"add",r),A=r}function gt(t,n,r){void 0===r&&(r=!1),c(Y.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),z.push({node:e,eventType:t,handler:n,options:r})}))}function ht(){var t;Z()&&(gt("touchstart",yt,{passive:!0}),gt("touchend",xt,{passive:!0})),(t=Y.props.trigger,t.split(/\s+/).filter(Boolean)).forEach((function(t){if("manual"!==t)switch(gt(t,yt),t){case"mouseenter":gt("mouseleave",xt);break;case"focus":gt(n?"focusout":"blur",Et);break;case"focusin":gt("focusout",Et)}}))}function bt(){z.forEach((function(t){var e=t.node,n=t.eventType,r=t.handler,o=t.options;e.removeEventListener(n,r,o)})),z=[]}function yt(t){var e,n=!1;if(Y.state.isEnabled&&!Ot(t)&&!I){var r="focus"===(null==(e=y)?void 0:e.type);y=t,D=t.currentTarget,ut(),!Y.state.isVisible&&h(t)&&U.forEach((function(e){return e(t)})),"click"===t.type&&(Y.props.trigger.indexOf("mouseenter")<0||V)&&!1!==Y.props.hideOnClick&&Y.state.isVisible?n=!0:Lt(t),"click"===t.type&&(V=!n),n&&!r&&Dt(t)}}function wt(t){var e=t.target,n=et().contains(e)||$.contains(e);"mousemove"===t.type&&n||function(t,e){var n=e.clientX,r=e.clientY;return t.every((function(t){var e=t.popperRect,o=t.popperState,i=t.props.interactiveBorder,a=l(o.placement),s=o.modifiersData.offset;if(!s)return!0;var u="bottom"===a?s.top.y:0,p="top"===a?s.bottom.y:0,c="right"===a?s.left.x:0,f="left"===a?s.right.x:0,d=e.top-r+u>i,v=r-e.bottom-p>i,m=e.left-n+c>i,g=n-e.right-f>i;return d||v||m||g}))}(At().concat($).map((function(t){var e,n=null==(e=t._tippy.popperInstance)?void 0:e.state;return n?{popperRect:t.getBoundingClientRect(),popperState:n,props:P}:null})).filter(Boolean),t)&&(pt(),Dt(t))}function xt(t){Ot(t)||Y.props.trigger.indexOf("click")>=0&&V||(Y.props.interactive?Y.hideWithInteractivity(t):Dt(t))}function Et(t){Y.props.trigger.indexOf("focusin")<0&&t.target!==et()||Y.props.interactive&&t.relatedTarget&&$.contains(t.relatedTarget)||Dt(t)}function Ot(t){return!!T.isTouch&&Z()!==t.type.indexOf("touch")>=0}function Ct(){Tt();var n=Y.props,r=n.popperOptions,o=n.placement,i=n.offset,a=n.getReferenceClientRect,s=n.moveTransition,u=tt()?B($).arrow:null,p=a?{getBoundingClientRect:a,contextElement:a.contextElement||et()}:e,c=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(t){var e=t.state;if(tt()){var n=rt().box;["placement","reference-hidden","escaped"].forEach((function(t){"placement"===t?n.setAttribute("data-placement",e.placement):e.attributes.popper["data-popper-"+t]?n.setAttribute("data-"+t,""):n.removeAttribute("data-"+t)})),e.attributes.popper={}}}}];tt()&&u&&c.push({name:"arrow",options:{element:u,padding:3}}),c.push.apply(c,(null==r?void 0:r.modifiers)||[]),Y.popperInstance=t.createPopper(p,$,Object.assign({},r,{placement:o,onFirstUpdate:L,modifiers:c}))}function Tt(){Y.popperInstance&&(Y.popperInstance.destroy(),Y.popperInstance=null)}function At(){return d($.querySelectorAll("[data-tippy-root]"))}function Lt(t){Y.clearDelayTimeouts(),t&&at("onTrigger",[Y,t]),dt();var e=ot(!0),n=Q(),r=n[0],o=n[1];T.isTouch&&"hold"===r&&o&&(e=o),e?p=setTimeout((function(){Y.show()}),e):Y.show()}function Dt(t){if(Y.clearDelayTimeouts(),at("onUntrigger",[Y,t]),Y.state.isVisible){if(!(Y.props.trigger.indexOf("mouseenter")>=0&&Y.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(t.type)>=0&&V)){var e=ot(!1);e?g=setTimeout((function(){Y.state.isVisible&&Y.hide()}),e):b=requestAnimationFrame((function(){Y.hide()}))}}else vt()}}function F(t,e){void 0===e&&(e={});var n=R.plugins.concat(e.plugins||[]);document.addEventListener("touchstart",L,r),window.addEventListener("blur",k);var o=Object.assign({},e,{plugins:n}),i=y(t).reduce((function(t,e){var n=e&&z(e,o);return n&&t.push(n),t}),[]);return g(t)?i[0]:i}F.defaultProps=R,F.setDefaultProps=function(t){Object.keys(t).forEach((function(e){R[e]=t[e]}))},F.currentInput=T;var W=Object.assign({},t.applyStyles,{effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow)}}),X={mouseover:"mouseenter",focusin:"focus",click:"click"};var Y={name:"animateFill",defaultValue:!1,fn:function(t){var e;if(null==(e=t.props.render)||!e.$$tippy)return{};var n=B(t.popper),r=n.box,o=n.content,i=t.props.animateFill?function(){var t=m();return t.className="tippy-backdrop",x([t],"hidden"),t}():null;return{onCreate:function(){i&&(r.insertBefore(i,r.firstElementChild),r.setAttribute("data-animatefill",""),r.style.overflow="hidden",t.setProps({arrow:!1,animation:"shift-away"}))},onMount:function(){if(i){var t=r.style.transitionDuration,e=Number(t.replace("ms",""));o.style.transitionDelay=Math.round(e/10)+"ms",i.style.transitionDuration=t,x([i],"visible")}},onShow:function(){i&&(i.style.transitionDuration="0ms")},onHide:function(){i&&x([i],"hidden")}}}};var q={clientX:0,clientY:0},$=[];function J(t){var e=t.clientX,n=t.clientY;q={clientX:e,clientY:n}}var G={name:"followCursor",defaultValue:!1,fn:function(t){var e=t.reference,n=E(t.props.triggerTarget||e),r=!1,o=!1,i=!0,a=t.props;function s(){return"initial"===t.props.followCursor&&t.state.isVisible}function u(){n.addEventListener("mousemove",f)}function p(){n.removeEventListener("mousemove",f)}function c(){r=!0,t.setProps({getReferenceClientRect:null}),r=!1}function f(n){var r=!n.target||e.contains(n.target),o=t.props.followCursor,i=n.clientX,a=n.clientY,s=e.getBoundingClientRect(),u=i-s.left,p=a-s.top;!r&&t.props.interactive||t.setProps({getReferenceClientRect:function(){var t=e.getBoundingClientRect(),n=i,r=a;"initial"===o&&(n=t.left+u,r=t.top+p);var s="horizontal"===o?t.top:r,c="vertical"===o?t.right:n,f="horizontal"===o?t.bottom:r,l="vertical"===o?t.left:n;return{width:c-l,height:f-s,top:s,right:c,bottom:f,left:l}}})}function l(){t.props.followCursor&&($.push({instance:t,doc:n}),function(t){t.addEventListener("mousemove",J)}(n))}function d(){0===($=$.filter((function(e){return e.instance!==t}))).filter((function(t){return t.doc===n})).length&&function(t){t.removeEventListener("mousemove",J)}(n)}return{onCreate:l,onDestroy:d,onBeforeUpdate:function(){a=t.props},onAfterUpdate:function(e,n){var i=n.followCursor;r||void 0!==i&&a.followCursor!==i&&(d(),i?(l(),!t.state.isMounted||o||s()||u()):(p(),c()))},onMount:function(){t.props.followCursor&&!o&&(i&&(f(q),i=!1),s()||u())},onTrigger:function(t,e){h(e)&&(q={clientX:e.clientX,clientY:e.clientY}),o="focus"===e.type},onHidden:function(){t.props.followCursor&&(c(),p(),i=!0)}}}};var K={name:"inlinePositioning",defaultValue:!1,fn:function(t){var e,n=t.reference;var r=-1,o=!1,i=[],a={name:"tippyInlinePositioning",enabled:!0,phase:"afterWrite",fn:function(o){var a=o.state;t.props.inlinePositioning&&(-1!==i.indexOf(a.placement)&&(i=[]),e!==a.placement&&-1===i.indexOf(a.placement)&&(i.push(a.placement),t.setProps({getReferenceClientRect:function(){return function(t){return function(t,e,n,r){if(n.length<2||null===t)return e;if(2===n.length&&r>=0&&n[0].left>n[1].right)return n[r]||e;switch(t){case"top":case"bottom":var o=n[0],i=n[n.length-1],a="top"===t,s=o.top,u=i.bottom,p=a?o.left:i.left,c=a?o.right:i.right;return{top:s,bottom:u,left:p,right:c,width:c-p,height:u-s};case"left":case"right":var f=Math.min.apply(Math,n.map((function(t){return t.left}))),l=Math.max.apply(Math,n.map((function(t){return t.right}))),d=n.filter((function(e){return"left"===t?e.left===f:e.right===l})),v=d[0].top,m=d[d.length-1].bottom;return{top:v,bottom:m,left:f,right:l,width:l-f,height:m-v};default:return e}}(l(t),n.getBoundingClientRect(),d(n.getClientRects()),r)}(a.placement)}})),e=a.placement)}};function s(){var e;o||(e=function(t,e){var n;return{popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat(((null==(n=t.popperOptions)?void 0:n.modifiers)||[]).filter((function(t){return t.name!==e.name})),[e])})}}(t.props,a),o=!0,t.setProps(e),o=!1)}return{onCreate:s,onAfterUpdate:s,onTrigger:function(e,n){if(h(n)){var o=d(t.reference.getClientRects()),i=o.find((function(t){return t.left-2<=n.clientX&&t.right+2>=n.clientX&&t.top-2<=n.clientY&&t.bottom+2>=n.clientY})),a=o.indexOf(i);r=a>-1?a:r}},onHidden:function(){r=-1}}}};var Q={name:"sticky",defaultValue:!1,fn:function(t){var e=t.reference,n=t.popper;function r(e){return!0===t.props.sticky||t.props.sticky===e}var o=null,i=null;function a(){var s=r("reference")?(t.popperInstance?t.popperInstance.state.elements.reference:e).getBoundingClientRect():null,u=r("popper")?n.getBoundingClientRect():null;(s&&Z(o,s)||u&&Z(i,u))&&t.popperInstance&&t.popperInstance.update(),o=s,i=u,t.state.isMounted&&requestAnimationFrame(a)}return{onMount:function(){t.props.sticky&&a()}}}};function Z(t,e){return!t||!e||(t.top!==e.top||t.right!==e.right||t.bottom!==e.bottom||t.left!==e.left)}return e&&function(t){var e=document.createElement("style");e.textContent=t,e.setAttribute("data-tippy-stylesheet","");var n=document.head,r=document.querySelector("head>style,head>link");r?n.insertBefore(e,r):n.appendChild(e)}('.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}'),F.setDefaultProps({plugins:[Y,G,K,Q],render:N}),F.createSingleton=function(t,e){var n;void 0===e&&(e={});var r,o=t,i=[],a=[],s=e.overrides,u=[],f=!1;function l(){a=o.map((function(t){return c(t.props.triggerTarget||t.reference)})).reduce((function(t,e){return t.concat(e)}),[])}function d(){i=o.map((function(t){return t.reference}))}function v(t){o.forEach((function(e){t?e.enable():e.disable()}))}function g(t){return o.map((function(e){var n=e.setProps;return e.setProps=function(o){n(o),e.reference===r&&t.setProps(o)},function(){e.setProps=n}}))}function h(t,e){var n=a.indexOf(e);if(e!==r){r=e;var u=(s||[]).concat("content").reduce((function(t,e){return t[e]=o[n].props[e],t}),{});t.setProps(Object.assign({},u,{getReferenceClientRect:"function"==typeof u.getReferenceClientRect?u.getReferenceClientRect:function(){var t;return null==(t=i[n])?void 0:t.getBoundingClientRect()}}))}}v(!1),d(),l();var b={fn:function(){return{onDestroy:function(){v(!0)},onHidden:function(){r=null},onClickOutside:function(t){t.props.showOnCreate&&!f&&(f=!0,r=null)},onShow:function(t){t.props.showOnCreate&&!f&&(f=!0,h(t,i[0]))},onTrigger:function(t,e){h(t,e.currentTarget)}}}},y=F(m(),Object.assign({},p(e,["overrides"]),{plugins:[b].concat(e.plugins||[]),triggerTarget:a,popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat((null==(n=e.popperOptions)?void 0:n.modifiers)||[],[W])})})),w=y.show;y.show=function(t){if(w(),!r&&null==t)return h(y,i[0]);if(!r||null!=t){if("number"==typeof t)return i[t]&&h(y,i[t]);if(o.indexOf(t)>=0){var e=t.reference;return h(y,e)}return i.indexOf(t)>=0?h(y,t):void 0}},y.showNext=function(){var t=i[0];if(!r)return y.show(0);var e=i.indexOf(r);y.show(i[e+1]||t)},y.showPrevious=function(){var t=i[i.length-1];if(!r)return y.show(t);var e=i.indexOf(r),n=i[e-1]||t;y.show(n)};var x=y.setProps;return y.setProps=function(t){s=t.overrides||s,x(t)},y.setInstances=function(t){v(!0),u.forEach((function(t){return t()})),o=t,v(!1),d(),l(),u=g(y),y.setProps({triggerTarget:a})},u=g(y),y},F.delegate=function(t,e){var n=[],o=[],i=!1,a=e.target,s=p(e,["target"]),u=Object.assign({},s,{trigger:"manual",touch:!1}),f=Object.assign({touch:R.touch},s,{showOnCreate:!0}),l=F(t,u);function d(t){if(t.target&&!i){var n=t.target.closest(a);if(n){var r=n.getAttribute("data-tippy-trigger")||e.trigger||R.trigger;if(!n._tippy&&!("touchstart"===t.type&&"boolean"==typeof f.touch||"touchstart"!==t.type&&r.indexOf(X[t.type])<0)){var s=F(n,f);s&&(o=o.concat(s))}}}}function v(t,e,r,o){void 0===o&&(o=!1),t.addEventListener(e,r,o),n.push({node:t,eventType:e,handler:r,options:o})}return c(l).forEach((function(t){var e=t.destroy,a=t.enable,s=t.disable;t.destroy=function(t){void 0===t&&(t=!0),t&&o.forEach((function(t){t.destroy()})),o=[],n.forEach((function(t){var e=t.node,n=t.eventType,r=t.handler,o=t.options;e.removeEventListener(n,r,o)})),n=[],e()},t.enable=function(){a(),o.forEach((function(t){return t.enable()})),i=!1},t.disable=function(){s(),o.forEach((function(t){return t.disable()})),i=!0},function(t){var e=t.reference;v(e,"touchstart",d,r),v(e,"mouseover",d),v(e,"focusin",d),v(e,"click",d)}(t)})),l},F.hideAll=function(t){var e=void 0===t?{}:t,n=e.exclude,r=e.duration;_.forEach((function(t){var e=!1;if(n&&(e=b(n)?t.reference===n:t.popper===n.popper),!e){var o=t.props.duration;t.setProps({duration:r}),t.hide(),t.state.isDestroyed||t.setProps({duration:o})}}))},F.roundArrow='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',F}));

/* ------------------------*/
/* ------------------------*/
/*         typograf        */
/* ------------------------*/
/* ------------------------*/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Typograf=t()}(this,function(){"use strict";var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function n(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||((r=r||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}var P=[["iexcl",161],["cent",162],["pound",163],["curren",164],["yen",165],["brvbar",166],["sect",167],["uml",168],["copy",169],["ordf",170],["laquo",171],["not",172],["reg",174],["macr",175],["deg",176],["plusmn",177],["sup2",178],["sup3",179],["acute",180],["micro",181],["para",182],["middot",183],["cedil",184],["sup1",185],["ordm",186],["raquo",187],["frac14",188],["frac12",189],["frac34",190],["iquest",191],["Agrave",192],["Aacute",193],["Acirc",194],["Atilde",195],["Auml",196],["Aring",197],["AElig",198],["Ccedil",199],["Egrave",200],["Eacute",201],["Ecirc",202],["Euml",203],["Igrave",204],["Iacute",205],["Icirc",206],["Iuml",207],["ETH",208],["Ntilde",209],["Ograve",210],["Oacute",211],["Ocirc",212],["Otilde",213],["Ouml",214],["times",215],["Oslash",216],["Ugrave",217],["Uacute",218],["Ucirc",219],["Uuml",220],["Yacute",221],["THORN",222],["szlig",223],["agrave",224],["aacute",225],["acirc",226],["atilde",227],["auml",228],["aring",229],["aelig",230],["ccedil",231],["egrave",232],["eacute",233],["ecirc",234],["euml",235],["igrave",236],["iacute",237],["icirc",238],["iuml",239],["eth",240],["ntilde",241],["ograve",242],["oacute",243],["ocirc",244],["otilde",245],["ouml",246],["divide",247],["oslash",248],["ugrave",249],["uacute",250],["ucirc",251],["uuml",252],["yacute",253],["thorn",254],["yuml",255],["fnof",402],["Alpha",913],["Beta",914],["Gamma",915],["Delta",916],["Epsilon",917],["Zeta",918],["Eta",919],["Theta",920],["Iota",921],["Kappa",922],["Lambda",923],["Mu",924],["Nu",925],["Xi",926],["Omicron",927],["Pi",928],["Rho",929],["Sigma",931],["Tau",932],["Upsilon",933],["Phi",934],["Chi",935],["Psi",936],["Omega",937],["alpha",945],["beta",946],["gamma",947],["delta",948],["epsilon",949],["zeta",950],["eta",951],["theta",952],["iota",953],["kappa",954],["lambda",955],["mu",956],["nu",957],["xi",958],["omicron",959],["pi",960],["rho",961],["sigmaf",962],["sigma",963],["tau",964],["upsilon",965],["phi",966],["chi",967],["psi",968],["omega",969],["thetasym",977],["upsih",978],["piv",982],["bull",8226],["hellip",8230],["prime",8242],["Prime",8243],["oline",8254],["frasl",8260],["weierp",8472],["image",8465],["real",8476],["trade",8482],["alefsym",8501],["larr",8592],["uarr",8593],["rarr",8594],["darr",8595],["harr",8596],["crarr",8629],["lArr",8656],["uArr",8657],["rArr",8658],["dArr",8659],["hArr",8660],["forall",8704],["part",8706],["exist",8707],["empty",8709],["nabla",8711],["isin",8712],["notin",8713],["ni",8715],["prod",8719],["sum",8721],["minus",8722],["lowast",8727],["radic",8730],["prop",8733],["infin",8734],["ang",8736],["and",8743],["or",8744],["cap",8745],["cup",8746],["int",8747],["there4",8756],["sim",8764],["cong",8773],["asymp",8776],["ne",8800],["equiv",8801],["le",8804],["ge",8805],["sub",8834],["sup",8835],["nsub",8836],["sube",8838],["supe",8839],["oplus",8853],["otimes",8855],["perp",8869],["sdot",8901],["lceil",8968],["rceil",8969],["lfloor",8970],["rfloor",8971],["lang",9001],["rang",9002],["spades",9824],["clubs",9827],["hearts",9829],["diams",9830],["loz",9674],["OElig",338],["oelig",339],["Scaron",352],["scaron",353],["Yuml",376],["circ",710],["tilde",732],["ndash",8211],["mdash",8212],["lsquo",8216],["rsquo",8217],["sbquo",8218],["ldquo",8220],["rdquo",8221],["bdquo",8222],["dagger",8224],["Dagger",8225],["permil",8240],["lsaquo",8249],["rsaquo",8250],["euro",8364],["NestedGreaterGreater",8811],["NestedLessLess",8810]],e=[["nbsp",160],["thinsp",8201],["ensp",8194],["emsp",8195],["shy",173],["zwnj",8204],["zwj",8205],["lrm",8206],["rlm",8207]];function t(){var t=this;this.entities=this.prepareEntities(n(n([],P,!0),e,!0)),this.entitiesByName={},this.entitiesByNameEntity={},this.entitiesByDigitEntity={},this.entitiesByUtf={},this.entities.forEach(function(e){t.entitiesByName[e.name]=e,t.entitiesByNameEntity[e.nameEntity]=e,t.entitiesByDigitEntity[e.digitEntity]=e,t.entitiesByUtf[e.utf]=e}),this.invisibleEntities=this.prepareEntities(e)}t.prototype.toUtf=function(e){var n=this;-1!==e.text.search(/&#/)&&(e.text=this.decHexToUtf(e.text)),-1!==e.text.search(/&[a-z]/i)&&(e.text=e.text.replace(/&[a-z\d]{2,31};/gi,function(e){var t=n.entitiesByNameEntity[e];return t?t.utf:e}))},t.prototype.decHexToUtf=function(e){return e.replace(/&#(\d{1,6});/gi,function(e,t){return String.fromCharCode(parseInt(t,10))}).replace(/&#x([\da-f]{1,6});/gi,function(e,t){return String.fromCharCode(parseInt(t,16))})},t.prototype.restore=function(e){var t=e.prefs.htmlEntity,n=t.type,r=this.entities;"name"!==n&&"digit"!==n||((t.onlyInvisible||t.list)&&(r=[],t.onlyInvisible&&(r=r.concat(this.invisibleEntities)),t.list)&&(r=r.concat(this.prepareListParam(t.list))),e.text=this.restoreEntitiesByIndex(e.text,"name"===n?"nameEntity":"digitEntity",r))},t.prototype.getByUtf=function(e,t){var n;switch(t){case"digit":n=this.entitiesByDigitEntity[e];break;case"name":n=this.entitiesByNameEntity[e];break;default:n=e}return n},t.prototype.prepareEntities=function(e){var r=[];return e.forEach(function(e){var t=e[0],e=e[1],n=String.fromCharCode(e);r.push({name:t,nameEntity:"&"+t+";",digitEntity:"&#"+e+";",utf:n,reName:new RegExp("&"+t+";","g"),reUtf:new RegExp(n,"g")})}),r},t.prototype.prepareListParam=function(e){var t=this,n=[];return e.forEach(function(e){e=t.entitiesByName[e];e&&n.push(e)}),n},t.prototype.restoreEntitiesByIndex=function(t,n,e){return e.forEach(function(e){t=t.replace(e.reUtf,e[n])}),t};var s=new t,a=[];function i(e){e=(e||"").split("/")[0];e&&"common"!==e&&!o(e)&&(a.push(e),a.sort())}function o(e){return"common"===e||-1!==a.indexOf(e)}function u(e,t){e=e||t;return e?Array.isArray(e)?e:[e]:[]}function l(e){if(!e.length)throw Error('Not defined the property "locale".');e.forEach(function(e){if(!o(e))throw Error('"'.concat(e,'" is not supported locale.'))})}var c={};function N(e){return c[e]}function p(t){Object.keys(t).forEach(function(e){i(e),c[e]=t[e]})}var j=["a","abbr","acronym","b","bdo","big","br","button","cite","code","dfn","em","i","img","input","kbd","label","map","object","q","samp","script","select","small","span","strong","sub","sup","textarea","time","tt","var"],g=new RegExp("(https?|file|ftp)://([a-zA-Z0-9/+-=%&:_.~?]+[a-zA-Z0-9#+]*)","g"),h="\\d+([.,]\\d+)?",O=/\d/;function f(e){return-1<e.search(O)}var d="\uf000",m="\uf001",M=($.prototype.add=function(e){this.tags.own.push(this.prepareRegExp(e))},$.prototype.show=function(t,n){for(var e=new RegExp("\uf000tf\\d+\uf000","g"),r=new RegExp("\uf000tf\\d"),a=function(e){return t.safeTags.hidden[n][e]||e},i=0,s=this.tags[n].length;i<s&&(t.text=t.text.replace(e,a),-1!==t.text.search(r));i++);},$.prototype.hide=function(t,e){var n=this,r=(t.safeTags.hidden[e]={},this.pasteLabel.bind(this,t,e));this.tags[e].forEach(function(e){t.text=t.text.replace(n.prepareRegExp(e),r)})},$.prototype.hideHTMLTags=function(e){var t;e.isHTML&&(t=this.pasteLabel.bind(this,e,"html"),e.text=e.text.replace(/<\/?[a-z][^]*?>/gi,t).replace(/&lt;\/?[a-z][^]*?&gt;/gi,t).replace(/&[gl]t;/gi,t))},$.prototype.getPrevLabel=function(e,t){for(var n=t-1;0<=n;n--)if(e[n]===d)return e.slice(n,t+1);return""},$.prototype.getNextLabel=function(e,t){for(var n=t+1;n<e.length;n++)if(e[n]===d)return e.slice(t,n+1);return""},$.prototype.getTagByLabel=function(n,r){var a=null;return this.groups.some(function(e){var t=n.safeTags.hidden[e][r];return a=void 0!==t?{group:e,value:t}:a}),a},$.prototype.getTagInfo=function(e){if(!e)return null;var t={group:e.group};switch(e.group){case"html":t.name=e.value.split(/[<\s>]/)[1],t.isInline=-1<j.indexOf(t.name),t.isClosing=-1<e.value.search(/^<\//);break;case"url":t.isInline=!0;break;case"own":t.isInline=!1}return t},$.prototype.pasteLabel=function(e,t,n){var e=e.safeTags,r="\uf000tf"+e.counter+d;return e.hidden[t][r]=n,e.counter++,r},$.prototype.prepareRegExp=function(e){var t,n;return e instanceof RegExp?e:(t=e[0],n=e[1],e=e[2],new RegExp(t+(void 0===e?"[^]*?":e)+n,"gi"))},$.prototype.getPrevTagInfo=function(e,t,n){t=this.getPrevLabel(t,n-1);if(t){n=this.getTagByLabel(e,t);if(n)return this.getTagInfo(n)}return null},$.prototype.getNextTagInfo=function(e,t,n){t=this.getNextLabel(t,n+1);if(t){n=this.getTagByLabel(e,t);if(n)return this.getTagInfo(n)}return null},$);function $(){this.groups=["own","html","url"],this.hidden={},this.counter=0;var t=[["\x3c!--","--\x3e"],["<!ENTITY",">"],["<!DOCTYPE",">"],["<\\?xml","\\?>"],["<!\\[CDATA\\[","\\]\\]>"]];["code","kbd","object","pre","samp","script","style","var"].forEach(function(e){t.push(["<".concat(e,"(\\s[^>]*?)?>"),"</".concat(e,">")])}),this.tags={own:[],html:t.map(this.prepareRegExp),url:[g]}}function b(e,t){for(var n="";1==(1&t)&&(n+=e),0!=(t>>>=1);)e+=e;return n}function x(e){return e.replace(/\u00A0/g," ")}function v(e,t){for(var n=0;n<t.length;n++)e=e.replace(t[n][0],t[n][1]);return e}function U(e){return-1!==e.search(/(<\/?[a-z]|<!|&[lg]t;)/i)}function y(e){return"object"==typeof e?JSON.parse(JSON.stringify(e)):e}var Q={symbols:110,number:150,space:210,dash:310,punctuation:410,nbsp:510,money:710,date:810,other:910,optalign:1010,typo:1110,html:1210},F=0,H="default",G=[],W=[];function R(){var e=n([],G,!0);return e.sort(function(e,t){return e.index>t.index?1:-1}),e}function X(){return n([],W,!0)}function V(e){var t=e.name.split("/"),n=t[0],r=t[1],t=t[2];return{name:e.name,shortName:t,handler:e.handler,queue:e.queue||H,enabled:!0!==e.disabled,locale:n,group:r,index:"number"==typeof(t=e).index?t.index:(n=t.name.split("/")[1],void 0===(n=Q[n])&&(n=F),"string"==typeof t.index?n+parseInt(t.index,10):n),settings:e.settings,live:e.live,htmlAttrs:e.htmlAttrs}}function K(e){return{type:(null==e?void 0:e.type)||"default",list:null==e?void 0:e.list,onlyInvisible:Boolean(null==e?void 0:e.onlyInvisible)}}function Y(e){return e||"LF"}w.addRule=function(e){i((e=V(e=e)).locale),G.push(e)},w.addRules=function(e){var t=this;e.forEach(function(e){t.addRule(e)})},w.addInnerRule=function(e){W.push(V(e))},w.addInnerRules=function(e){var t=this;e.forEach(function(e){t.addInnerRule(e)})},w.getRule=function(t){var n=null;return R().some(function(e){return e.name===t&&(n=e,!0)}),n},w.getRules=R,w.getInnerRules=X,w.getLocales=function(){return a},w.addLocale=function(e){i(e)},w.hasLocale=o,w.setData=function(e){p(e)},w.getData=function(e){return c[e]},w.prototype.execute=function(e,t){var n;return(e=""+e)?(n=this.prefs,t=t,n=r({},n),t&&("locale"in t&&(n.locale=u(t.locale)),"htmlEntity"in t&&(n.htmlEntity=K(t.htmlEntity)),"lineEnding"in t&&(n.lineEnding=Y(t.lineEnding)),"processingSeparateParts"in t&&(n.processingSeparateParts=t.processingSeparateParts),"ruleFilter"in t)&&(n.ruleFilter=t.ruleFilter),l((t=n).locale),n=this.prepareContext(e,t),this.process(n)):""},w.prototype.getSetting=function(e,t){return this.settings[e]&&this.settings[e][t]},w.prototype.setSetting=function(e,t,n){this.settings[e]=this.settings[e]||{},this.settings[e][t]=n},w.prototype.isEnabledRule=function(e){return!1!==this.enabledRules[e]},w.prototype.isDisabledRule=function(e){return!this.enabledRules[e]},w.prototype.enableRule=function(e){return this.enable(e,!0)},w.prototype.disableRule=function(e){return this.enable(e,!1)},w.prototype.addSafeTag=function(e,t,n){e=e instanceof RegExp?e:[e,t,n];this.safeTags.add(e)},w.prototype.prepareContext=function(e,n){return{text:e,isHTML:U(e),prefs:n,getData:function(t){return"char"===t?n.locale.map(function(e){return c[e+"/"+t]}).join(""):N(n.locale[0]+"/"+t)},safeTags:this.safeTags}},w.prototype.splitBySeparateParts=function(a){var i,e,s;return a.isHTML&&!1!==a.prefs.processingSeparateParts?(i=[],e=new RegExp("<("+this.separatePartsTags.join("|")+")(\\s[^>]*?)?>[^]*?</\\1>","gi"),s=0,a.text.replace(e,function(e,t,n,r){return s!==r&&i.push((s?m:"")+a.text.slice(s,r)+m),i.push(e),s=r+e.length,e}),i.push(s?m+a.text.slice(s,a.text.length):a.text),i):[a.text]},w.prototype.process=function(t){var e,n=this,r=(t.text=t.text.replace(/\r\n?/g,"\n"),this.executeRules(t,"start"),this.safeTags.hide(t,"own"),this.executeRules(t,"hide-safe-tags-own"),this.safeTags.hide(t,"html"),this.executeRules(t,"hide-safe-tags-html"),t.isHTML),a=new RegExp(m,"g");return t.text=this.splitBySeparateParts(t).map(function(e){return t.text=e,t.isHTML=U(e),n.safeTags.hideHTMLTags(t),n.safeTags.hide(t,"url"),n.executeRules(t,"hide-safe-tags-url"),n.executeRules(t,"hide-safe-tags"),s.toUtf(t),t.prefs.live&&(t.text=x(t.text)),n.executeRules(t,"utf"),n.executeRules(t),s.restore(t),n.executeRules(t,"html-entities"),n.safeTags.show(t,"url"),n.executeRules(t,"show-safe-tags-url"),t.text.replace(a,"")}).join(""),t.isHTML=r,this.safeTags.show(t,"html"),this.executeRules(t,"show-safe-tags-html"),this.safeTags.show(t,"own"),this.executeRules(t,"show-safe-tags-own"),this.executeRules(t,"end"),r=t.text,"CRLF"===(e=t.prefs.lineEnding)?r.replace(/\n/g,"\r\n"):"CR"===e?r.replace(/\n/g,"\r"):r},w.prototype.executeRules=function(t,e){var n=this,r=this.rulesByQueues[e=void 0===e?H:e],e=this.innerRulesByQueues[e];e&&e.forEach(function(e){n.ruleIterator(t,e)}),r&&r.forEach(function(e){n.ruleIterator(t,e)})},w.prototype.ruleIterator=function(e,t){!0===e.prefs.live&&!1===t.live||!1===e.prefs.live&&!0===t.live||"common"!==t.locale&&t.locale!==e.prefs.locale[0]||!this.isEnabledRule(t.name)||e.prefs.ruleFilter&&!e.prefs.ruleFilter(t)||(this.onBeforeRule&&this.onBeforeRule(t.name,e),e.text=t.handler.call(this,e.text,this.settings[t.name],e),this.onAfterRule&&this.onAfterRule(t.name,e))},w.prototype.prepareRuleSettings=function(e){this.settings[e.name]=y(e.settings),this.enabledRules[e.name]=e.enabled},w.prototype.enable=function(e,t){var n=this;Array.isArray(e)?e.forEach(function(e){n.enableByMask(e,t)}):this.enableByMask(e,t)},w.prototype.enableByMask=function(e,t){var n,r=this;e&&(-1!==e.search(/\*/)?(n=new RegExp(e.replace(/\//g,"\\/").replace(/\*/g,".*")),this.rules.forEach(function(e){e=e.name;n.test(e)&&(r.enabledRules[e]=t)})):this.enabledRules[e]=t)},w.groups=[],w.titles={},w.version="7.0.0";var E=w;function w(e){var t=this;this.rules=[],this.innerRules=[],this.rulesByQueues={},this.innerRulesByQueues={},this.separatePartsTags=["title","p","h[1-6]","select","legend"],this.prefs={locale:u((e=e).locale),lineEnding:Y(e.lineEnding),live:Boolean(e.live),ruleFilter:e.ruleFilter,enableRule:e.enableRule,disableRule:e.disableRule,processingSeparateParts:e.processingSeparateParts,htmlEntity:K(e.htmlEntity)},l(this.prefs.locale),this.safeTags=new M,this.settings={},this.enabledRules={},this.innerRulesByQueues={},this.innerRules=X(),this.innerRules.forEach(function(e){t.innerRulesByQueues[e.queue]=t.innerRulesByQueues[e.queue]||[],t.innerRulesByQueues[e.queue].push(e)}),this.rulesByQueues={},this.rules=R(),this.rules.forEach(function(e){t.prepareRuleSettings(e),t.rulesByQueues[e.queue]=t.rulesByQueues[e.queue]||[],t.rulesByQueues[e.queue].push(e)}),this.prefs.disableRule&&this.disableRule(this.prefs.disableRule),this.prefs.enableRule&&this.enableRule(this.prefs.enableRule)}[{"common/char":"a-z","common/dash":"--?|\u2012|\u2013|\u2014","common/quote":'\xab\u2039\xbb\u203a\u201e\u201c\u201f\u201d"'},{"be/char":"\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u044b\u044c\u044d\u044e\u044f\u0451\u0456\u045e\u0491","be/quote":{left:"\xab\u201c",right:"\xbb\u201d"}},{"bg/char":"\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044c\u044e\u044f","bg/quote":{left:"\u201e\u2019",right:"\u201c\u2019"}},{"ca/char":"abcdefghijlmnopqrstuvxyz\xe0\xe7\xe8\xe9\xed\xef\xf2\xf3\xfa\xfc","ca/quote":{left:"\xab\u201c",right:"\xbb\u201d"}},{"cs/char":"a-z\xe1\xe9\xed\xf3\xfa\xfd\u010d\u010f\u011b\u0148\u0159\u0161\u0165\u016f\u017e","cs/quote":{left:"\u201e\u201a",right:"\u201c\u2018"}},{"da/char":"a-z\xe5\xe6\xf8","da/quote":{left:"\xbb\u203a",right:"\xab\u2039"}},{"de/char":"a-z\xdf\xe4\xf6\xfc","de/quote":{left:"\u201e\u201a",right:"\u201c\u2018"}},{"el/char":"\u0390\u03ac\u03ad\u03ae\u03af\u03b0\u03b1\u03b2\u03b3\u03b4\u03b5\u03b6\u03b7\u03b8\u03b9\u03ba\u03bb\u03bc\u03bd\u03be\u03bf\u03c0\u03c1\u03c2\u03c3\u03c4\u03c5\u03c6\u03c7\u03c8\u03c9\u03ca\u03cb\u03cc\u03cd\u03ce\u03f2\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d","el/quote":{left:"\xab\u201c",right:"\xbb\u201d"}},{"en-GB/char":"a-z","en-GB/quote":{left:"\u2018\u201c",right:"\u2019\u201d"}},{"en-US/char":"a-z","en-US/quote":{left:"\u201c\u2018",right:"\u201d\u2019"}},{"eo/char":"abcdefghijklmnoprstuvz\u0109\u011d\u0125\u0135\u015d\u016d","eo/quote":{left:"\u201c\u2018",right:"\u201d\u2019"}},{"es/char":"a-z\xe1\xe9\xed\xf1\xf3\xfa\xfc","es/quote":{left:"\xab\u201c",right:"\xbb\u201d"}},{"et/char":"abdefghijklmnoprstuvz\xe4\xf5\xf6\xfc\u0161\u017e","et/quote":{left:"\u201e\xab",right:"\u201c\xbb"}},{"fi/char":"abcdefghijklmnopqrstuvy\xf6\xe4\xe5","fi/quote":{left:"\u201d\u2019",right:"\u201d\u2019"}},{"fr/char":"a-z\xe0\xe2\xe7\xe8\xe9\xea\xeb\xee\xef\xf4\xfb\xfc\u0153\xe6","fr/quote":{left:"\xab\u2039",right:"\xbb\u203a",spacing:!0}},{"ga/char":"abcdefghilmnoprstuvwxyz\xe1\xe9\xed\xf3\xfa","ga/quote":{left:"\u201c\u2018",right:"\u201d\u2019"}},{"hu/char":"a-z\xe1\xe4\xe9\xed\xf3\xf6\xfa\xfc\u0151\u0171","hu/quote":{left:"\u201e\xbb",right:"\u201d\xab"}},{"it/char":"a-z\xe0\xe9\xe8\xec\xf2\xf9","it/quote":{left:"\xab\u201c",right:"\xbb\u201d"}},{"lv/char":"abcdefghijklmnopqrstuvxz\xe6\u0153","lv/quote":{left:"\xab\u201e",right:"\xbb\u201c"}},{"nl/char":"a-z\xe4\xe7\xe8\xe9\xea\xeb\xee\xef\xf1\xf6\xfb\xfc","nl/quote":{left:"\u2018\u201c",right:"\u2019\u201d"}},{"no/char":"a-z\xe5\xe6\xe8\xe9\xea\xf2\xf3\xf4\xf8","no/quote":{left:"\xab\u2019",right:"\xbb\u2019"}},{"pl/char":"abcdefghijklmnoprstuvwxyz\xf3\u0105\u0107\u0119\u0142\u0144\u015b\u017a\u017c","pl/quote":{left:"\u201e\xab",right:"\u201d\xbb"}},{"ro/char":"abcdefghijklmnoprstuvxz\xee\u0103\u0219\u021b","ro/quote":{left:"\u201e\xab",right:"\u201d\xbb"}},{"ru/char":"\u0430-\u044f\u0451","ru/dashBefore":"(^| |\\n)","ru/dashAfter":"(?=[\xa0 ,.?:!]|$)","ru/dashAfterDe":"(?=[,.?:!]|[\xa0 ][^\u0410-\u042f\u0401]|$)","ru/l":"\u0430-\u044f\u0451a-z","ru/L":"\u0410-\u042f\u0401A-Z","ru/month":"\u044f\u043d\u0432\u0430\u0440\u044c|\u0444\u0435\u0432\u0440\u0430\u043b\u044c|\u043c\u0430\u0440\u0442|\u0430\u043f\u0440\u0435\u043b\u044c|\u043c\u0430\u0439|\u0438\u044e\u043d\u044c|\u0438\u044e\u043b\u044c|\u0430\u0432\u0433\u0443\u0441\u0442|\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c|\u043e\u043a\u0442\u044f\u0431\u0440\u044c|\u043d\u043e\u044f\u0431\u0440\u044c|\u0434\u0435\u043a\u0430\u0431\u0440\u044c","ru/monthGenCase":"\u044f\u043d\u0432\u0430\u0440\u044f|\u0444\u0435\u0432\u0440\u0430\u043b\u044f|\u043c\u0430\u0440\u0442\u0430|\u0430\u043f\u0440\u0435\u043b\u044f|\u043c\u0430\u044f|\u0438\u044e\u043d\u044f|\u0438\u044e\u043b\u044f|\u0430\u0432\u0433\u0443\u0441\u0442\u0430|\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f|\u043e\u043a\u0442\u044f\u0431\u0440\u044f|\u043d\u043e\u044f\u0431\u0440\u044f|\u0434\u0435\u043a\u0430\u0431\u0440\u044f","ru/monthPreCase":"\u044f\u043d\u0432\u0430\u0440\u0435|\u0444\u0435\u0432\u0440\u0430\u043b\u0435|\u043c\u0430\u0440\u0442\u0435|\u0430\u043f\u0440\u0435\u043b\u0435|\u043c\u0430\u0435|\u0438\u044e\u043d\u0435|\u0438\u044e\u043b\u0435|\u0430\u0432\u0433\u0443\u0441\u0442\u0435|\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u0435|\u043e\u043a\u0442\u044f\u0431\u0440\u0435|\u043d\u043e\u044f\u0431\u0440\u0435|\u0434\u0435\u043a\u0430\u0431\u0440\u0435","ru/quote":{left:"\xab\u201e\u201a",right:"\xbb\u201c\u2018",removeDuplicateQuotes:!0},"ru/shortMonth":"\u044f\u043d\u0432|\u0444\u0435\u0432|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430[\u0435\u0439\u044f]|\u0438\u044e\u043d|\u0438\u044e\u043b|\u0430\u0432\u0433|\u0441\u0435\u043d|\u043e\u043a\u0442|\u043d\u043e\u044f|\u0434\u0435\u043a","ru/weekday":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a|\u0432\u0442\u043e\u0440\u043d\u0438\u043a|\u0441\u0440\u0435\u0434\u0430|\u0447\u0435\u0442\u0432\u0435\u0440\u0433|\u043f\u044f\u0442\u043d\u0438\u0446\u0430|\u0441\u0443\u0431\u0431\u043e\u0442\u0430|\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"},{"sk/char":"abcdefghijklmnoprstuvwxyz\xe1\xe4\xe9\xed\xf3\xf4\xfa\xfd\u010d\u010f\u013e\u0148\u0155\u0161\u0165\u017e","sk/quote":{left:"\u201e\u201a",right:"\u201c\u2018"}},{"sl/char":"a-z\u010d\u0161\u017e","sl/quote":{left:"\u201e\u201a",right:"\u201c\u2018"}},{"sr/char":"abcdefghijklmnoprstuvz\u0107\u010d\u0111\u0161\u017e","sr/quote":{left:"\u201e\u2019",right:"\u201d\u2019"}},{"sv/char":"a-z\xe4\xe5\xe9\xf6","sv/quote":{left:"\u201d\u2019",right:"\u201d\u2019"}},{"tr/char":"abcdefghijklmnoprstuvyz\xe2\xe7\xee\xf6\xfb\xfc\u011f\u0131\u015f","tr/quote":{left:"\u201c\u2018",right:"\u201d\u2019"}},{"uk/char":"\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044c\u044e\u044f\u0454\u0456\u0457\u0491","uk/quote":{left:"\xab\u201e",right:"\xbb\u201c"}}].forEach(p);var Z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},q={name:"common/html/escape",index:"+100",queue:"end",handler:function(e){return e.replace(/[&<>"'/]/g,function(e){return Z[e]})},disabled:!0},J=new RegExp("<("+["address","article","aside","blockquote","canvas","dd","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tfoot","ul","video"].join("|")+")[>\\s]"),q=(E.addRules([{name:"common/html/e-mail",queue:"end",handler:function(e,t,n){return n.isHTML?e:e.replace(/(^|[\s;(])([\w\-.]{2,64})@([\w\-.]{2,64})\.([a-z]{2,64})([)\s.,!?]|$)/gi,'$1<a href="mailto:$2@$3.$4">$2@$3.$4</a>$5')},disabled:!0,htmlAttrs:!1},q,{name:"common/html/nbr",index:"+10",queue:"end",handler:function(e){return e.replace(/([^\n>])\n(?=[^\n])/g,"$1<br/>\n")},disabled:!0,htmlAttrs:!1},{name:"common/html/p",index:"+5",queue:"end",handler:function(e){e=e.split("\n\n");return e.forEach(function(e,t,n){!e.trim()||J.test(e)||(n[t]=e.replace(/^(\s*)/,"$1<p>").replace(/(\s*)$/,"</p>$1"))}),e.join("\n\n")},disabled:!0,htmlAttrs:!1},{name:"common/html/processingAttrs",queue:"hide-safe-tags-own",handler:function(e,t,n){var s=this,r=new RegExp("(^|\\s)("+t.attrs.join("|")+")=(\"[^\"]*?\"|'[^']*?')","gi"),o=y(n.prefs);return o.ruleFilter=function(e){return!1!==e.htmlAttrs},e.replace(/(<[-\w]+\s)([^>]+?)(?=>)/g,function(e,t,n){return t+n.replace(r,function(e,t,n,r){var a=r[0],i=r[r.length-1],r=r.slice(1,-1);return t+n+"="+a+s.execute(r,o)+i})})},settings:{attrs:["title","placeholder"]},disabled:!0,htmlAttrs:!1},{name:"common/html/quot",queue:"hide-safe-tags",handler:function(e){return e.replace(/&quot;/g,'"')}},{name:"common/html/stripTags",index:"+99",queue:"end",handler:function(e){return e.replace(/<[^>]+>/g,"")},disabled:!0},{name:"common/html/url",queue:"end",handler:function(e,t,n){return n.isHTML?e:e.replace(g,function(e,t,n){n=n.replace(/([^/]+\/?)(\?|#)$/,"$1").replace(/^([^/]+)\/$/,"$1"),"http"===t?n=n.replace(/^([^/]+)(:80)([^\d]|\/|$)/,"$1$3"):"https"===t&&(n=n.replace(/^([^/]+)(:443)([^\d]|\/|$)/,"$1$3"));var r=n,n=t+"://"+n,a='<a href="'+n+'">';return"http"===t||"https"===t?(r=r.replace(/^www\./,""),a+("http"===t?r:t+"://"+r)+"</a>"):a+n+"</a>"})},disabled:!0,htmlAttrs:!1}]),{name:"common/nbsp/afterNumber",handler:function(e,t,n){n=n.getData("char");return e.replace(new RegExp("(^|\\s)(\\d{1,5}) (["+n+"]+)","gi"),"$1$2\xa0$3")},disabled:!0});function _(e,t,n,r){return t+n.replace(/([^\u00A0])\u00A0([^\u00A0])/g,"$1 $2")+r}E.addRules([q,{name:"common/nbsp/afterParagraphMark",handler:function(e){return e.replace(/\xb6 ?(?=\d)/g,"\xb6\xa0")}},{name:"common/nbsp/afterSectionMark",handler:function(e,t,n){n=n.prefs.locale[0];return e.replace(/\xa7[ \u00A0\u2009]?(?=\d|I|V|X)/g,"ru"===n?"\xa7\u202f":"\xa7\xa0")}},{name:"common/nbsp/afterShortWord",handler:function(e,t,n){var t=t.lengthShortWord,r=c["common/quote"],n=n.getData("char"),r=new RegExp("(^|["+(" \xa0(\uf000"+r)+"])(["+n+"]{1,"+t+"}) ","gim");return e.replace(r,"$1$2\xa0").replace(r,"$1$2\xa0")},settings:{lengthShortWord:2}},{name:"common/nbsp/beforeShortLastNumber",handler:function(e,t,n){var r=n.getData("quote"),n=n.getData("char"),a=n.toUpperCase(),n=new RegExp("(["+n+a+"]) (?=\\d{1,"+t.lengthLastNumber+"}[-+\u2212%'\""+r.right+")]?([.!?\u2026]( ["+a+"]|$)|$))","gm");return e.replace(n,"$1\xa0")},live:!1,settings:{lengthLastNumber:2}},{name:"common/nbsp/beforeShortLastWord",handler:function(e,t,n){var n=n.getData("char"),r=n.toUpperCase(),n=new RegExp("(["+n+"\\d]) (["+n+r+"]{1,"+t.lengthLastWord+"}[.!?\u2026])( ["+r+"]|$)","g");return e.replace(n,"$1\xa0$2$3")},settings:{lengthLastWord:3}},{name:"common/nbsp/dpi",handler:function(e){return e.replace(/(\d) ?(lpi|dpi)(?!\w)/,"$1\xa0$2")}},{name:"common/nbsp/nowrap",queue:"end",handler:function(e){return e.replace(/(<nowrap>)(.*?)(<\/nowrap>)/g,_).replace(/(<nobr>)(.*?)(<\/nobr>)/g,_)}},{name:"common/nbsp/replaceNbsp",queue:"utf",live:!1,handler:x,disabled:!0}]);q={name:"common/number/digitGrouping",index:"310",disabled:!0,handler:function(e,a){return e.replace(new RegExp("(^ ?|\\D |".concat(d,")(\\d{1,3}([ \xa0\u202f\u2009]\\d{3})+)(?! ?[\\d-])"),"gm"),function(e,t,n){return t+n.replace(/\s/g,a.space)}).replace(/(\d{5,}([.,]\d+)?)/g,function(e,t){var n=t.match(/[.,]/),t=n?t.split(n):[t],r=t[0],t=t[1],r=r.replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1"+a.space);return n?r+n+t:r})},settings:{space:"\u202f"}},E.addRules([q,{name:"common/number/fraction",handler:function(e){return e.replace(/(^|\D)1\/2(\D|$)/g,"$1\xbd$2").replace(/(^|\D)1\/4(\D|$)/g,"$1\xbc$2").replace(/(^|\D)3\/4(\D|$)/g,"$1\xbe$2")}},{name:"common/number/mathSigns",handler:function(e){return v(e,[[/!=/g,"\u2260"],[/<=/g,"\u2264"],[/(^|[^=])>=/g,"$1\u2265"],[/<=>/g,"\u21d4"],[/<</g,"\u226a"],[/>>/g,"\u226b"],[/~=/g,"\u2245"],[/(^|[^+])\+-/g,"$1\xb1"]])}},{name:"common/number/times",handler:function(e){return e.replace(/(\d)[ \u00A0]?[x\u0445][ \u00A0]?(\d)/g,"$1\xd7$2")}}]),E.addRules([{name:"common/other/delBOM",queue:"start",index:-1,handler:function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}},{name:"common/other/repeatWord",handler:function(e,t,n){var r=c["common/quote"],n=n.getData("char"),r="[;:,.?! \n"+r+"]",n=new RegExp("("+r+"|^)(["+n+"]{"+t.min+",}) \\2("+r+"|$)","gi");return e.replace(n,"$1$2$3")},settings:{min:2},disabled:!0}]),q={name:"common/punctuation/apostrophe",handler:function(e,t,n){n="(["+n.getData("char")+"])",n=new RegExp(n+"'"+n,"gi");return e.replace(n,"$1\u2019$2")}};function A(){this.bufferQuotes={left:"\uf005\uf006\uf007",right:"\uf008\uf009\uf0a0"},this.beforeLeft=" \n\t\xa0[(",this.afterRight=" \n\t\xa0!?.:;#*,\u2026)\\]"}A.prototype.process=function(e){var t,n,r=e.context.text;return this.count(r).total&&(t=e.settings,(n=e.settings.left[0]===e.settings.right[0])&&(e.settings=y(e.settings),e.settings.left=this.bufferQuotes.left.slice(0,e.settings.left.length),e.settings.right=this.bufferQuotes.right.slice(0,e.settings.right.length)),e.settings.spacing&&(r=this.removeSpacing(r,e.settings)),r=this.set(r,e),e.settings.spacing&&(r=this.setSpacing(r,e.settings)),e.settings.removeDuplicateQuotes&&(r=this.removeDuplicates(r,e.settings)),n)&&(r=this.returnOriginalQuotes(r,t,e.settings),e.settings=t),r},A.prototype.returnOriginalQuotes=function(e,t,n){for(var r={},a=0;a<n.left.length;a++)r[n.left[a]]=t.left[a],r[n.right[a]]=t.right[a];return e.replace(new RegExp("["+n.left+n.right+"]","g"),function(e){return r[e]})},A.prototype.count=function(e){var t={total:0};return e.replace(new RegExp("["+c["common/quote"]+"]","g"),function(e){return t[e]||(t[e]=0),t[e]++,t.total++,e}),t},A.prototype.removeDuplicates=function(e,t){var n=t.left[0],r=t.left[1]||n,t=t.right[0];return n!==r?e:e.replace(new RegExp(n+n,"g"),n).replace(new RegExp(t+t,"g"),t)},A.prototype.removeSpacing=function(e,t){for(var n=0,r=t.left.length;n<r;n++){var a=t.left[n],i=t.right[n];e=e.replace(new RegExp(a+"([ \u202f\xa0])","g"),a).replace(new RegExp("([ \u202f\xa0])"+i,"g"),i)}return e},A.prototype.setSpacing=function(e,t){for(var n=0,r=t.left.length;n<r;n++){var a=t.left[n],i=t.right[n];e=e.replace(new RegExp(a+"([^\u202f])","g"),a+"\u202f$1").replace(new RegExp("([^\u202f])"+i,"g"),"$1\u202f"+i)}return e},A.prototype.set=function(e,t){var n=c["common/quote"],r=t.settings.left[0],a=t.settings.left[1]||r,i=t.settings.right[0],s=new RegExp("(^|["+this.beforeLeft+"])(["+n+"]+)(?=[^\\s"+d+"])","gim"),n=new RegExp("([^\\s\uf000])(["+n+"]+)(?=["+this.afterRight+"]|$)","gim");return e=e.replace(s,function(e,t,n){return t+b(r,n.length)}).replace(n,function(e,t,n){return t+b(i,n.length)}),e=this.setAboveTags(e,t),e=r!==a?this.setInner(e,t.settings):e},A.prototype.setAboveTags=function(i,s){var o=this,u=s.settings.left[0],l=s.settings.right[0];return i.replace(new RegExp("(^|.)(["+c["common/quote"]+"])(.|$)","gm"),function(e,t,n,r,a){return t!==d&&r!==d?e:t===d&&r===d?'"'===n?t+o.getAboveTwoTags(i,a+1,s)+r:e:t===d?(n=-1<o.afterRight.indexOf(r),e=s.safeTags.getPrevTagInfo(s.context,i,a-1),n&&e&&"html"===e.group?t+(e.isClosing?l:u)+r:t+(!r||n?l:u)+r):(e=-1<o.beforeLeft.indexOf(t),n=s.safeTags.getNextTagInfo(s.context,i,a+1),e&&n&&"html"===n.group?t+(n.isClosing?l:u)+r:t+(!t||e?u:l)+r)})},A.prototype.getAboveTwoTags=function(e,t,n){var r=n.safeTags.getPrevTagInfo(n.context,e,t),a=n.safeTags.getNextTagInfo(n.context,e,t);if(r&&"html"===r.group){if(!r.isClosing)return n.settings.left[0];if(a&&a.isClosing&&r.isClosing)return n.settings.right[0]}return e[t]},A.prototype.setInner=function(e,t){for(var n=t.left[0],r=t.right[0],a=this.getMaxLevel(e,n,r,t.left.length),i=0,s="",o=0,u=e.length;o<u;o++){var l=e[o];l===n?(s+=t.left[a-1<i?a-1:i],a<++i&&(i=a)):l===r?(--i<0&&(i=0),s+=t.right[i]):('"'===l&&(i=0),s+=l)}return s},A.prototype.getMaxLevel=function(e,t,n,r){e=this.count(e);return e[t]===e[n]?r:Math.min(r,2)};var ee=new A,te={},T=(a.forEach(function(e){te[e]=y(c[e+"/quote"])}),{name:"common/punctuation/quote",handler:function(e,t,n){t=t[n.prefs.locale[0]];return t?ee.process({context:n,settings:t,safeTags:this.safeTags}):e},settings:te}),q=(E.addRules([q,{name:"common/punctuation/delDoublePunctuation",handler:function(e){return e.replace(/(^|[^,]),,(?!,)/g,"$1,").replace(/(^|[^:])::(?!:)/g,"$1:").replace(/(^|[^!?.])\.\.(?!\.)/g,"$1.").replace(/(^|[^;]);;(?!;)/g,"$1;").replace(/(^|[^?])\?\?(?!\?)/g,"$1?")}},{name:"common/punctuation/hellip",handler:function(e,t,n){return"ru"===n.prefs.locale[0]?e.replace(/(^|[^.])\.{3,4}(?=[^.]|$)/g,"$1\u2026"):e.replace(/(^|[^.])\.{3}(\.?)(?=[^.]|$)/g,"$1\u2026$2")}},T,{name:"common/punctuation/quoteLink",queue:"show-safe-tags-html",index:"+5",handler:function(e,t,n){var n=this.getSetting("common/punctuation/quote",n.prefs.locale[0]),r=s.getByUtf(n.left[0]),a=s.getByUtf(n.right[0]),i=(i=s.getByUtf(n.left[1]))?"|"+i:"",n=(n=s.getByUtf(n.right[1]))?"|"+n:"",r=new RegExp("(<[aA]\\s[^>]*?>)("+r+i+")([^]*?)("+a+n+")(</[aA]>)","g");return e.replace(r,"$2$1$3$5$4")}}]),{name:"common/space/beforeBracket",handler:function(e,t,n){n=n.getData("char"),n=new RegExp("(["+n+".!?,;\u2026)])\\(","gi");return e.replace(n,"$1 (")}}),T={name:"common/space/delRepeatN",index:"-1",handler:function(e,t){var t=t.maxConsecutiveLineBreaks,n=new RegExp("\n{".concat(t+1,",}"),"g"),t=b("\n",t);return e.replace(n,t)},settings:{maxConsecutiveLineBreaks:2}},B={name:"common/space/trimLeft",index:"-4",handler:String.prototype.trimLeft?function(e){return e.trimLeft()}:function(e){return e.replace(/^[\s\uFEFF\xA0]+/g,"")}},ne={name:"common/space/trimRight",index:"-3",live:!1,handler:String.prototype.trimRight?function(e){return e.trimRight()}:function(e){return e.replace(/[\s\uFEFF\xA0]+$/g,"")}},re=new RegExp('(\\D):([^)",:.?\\s\\/\\\\\uf000])',"g"),k={name:"common/space/afterColon",handler:function(e){return e.replace(re,"$1: $2")}},L={name:"common/space/afterComma",handler:function(e,t,n){n=n.getData("quote"),n="string"==typeof n?n:n.right;return e.replace(new RegExp('(.),([^)",:.?\\s\\/\\\\\uf000'+n+"])","g"),function(e,t,n){return f(t)&&f(n)?e:t+", "+n})}},ae=new RegExp("\\?([^).\u2026!;?\\s[\\])\uf000"+c["common/quote"]+"])","g"),D={name:"common/space/afterQuestionMark",handler:function(e){return e.replace(ae,"? $1")}},ie=new RegExp("!([^).\u2026!;?\\s[\\])\uf000"+c["common/quote"]+"])","g"),I={name:"common/space/afterExclamationMark",handler:function(e){return e.replace(ie,"! $1")}},se=new RegExp(";([^).\u2026!;?\\s[\\])\uf000"+c["common/quote"]+"])","g"),k=(E.addRules([k,L,D,I,{name:"common/space/afterSemicolon",handler:function(e){return e.replace(se,"; $1")}},q,{name:"common/space/bracket",handler:function(e){return e.replace(/(\() +/g,"(").replace(/ +\)/g,")")}},{name:"common/space/delBeforeDot",handler:function(e){return e.replace(/(^|[^!?:;,.\u2026]) (\.|\.\.\.)(\s|$)/g,"$1$2$3")}},{name:"common/space/delBeforePercent",handler:function(e){return e.replace(/(\d)( |\u00A0)(%|\u2030|\u2031)/g,"$1$3")}},{name:"common/space/delBeforePunctuation",handler:function(e){return e.replace(/(^|[^!?:;,.\u2026]) ([!?:;,])(?!\))/g,"$1$2")}},{name:"common/space/delBetweenExclamationMarks",handler:function(e){return e.replace(/([!?]) (?=[!?])/g,"$1")}},{name:"common/space/delLeadingBlanks",handler:function(e){return e.replace(/^[ \t]+/gm,"")},disabled:!0},T,{name:"common/space/delRepeatSpace",index:"-1",handler:function(e){return e.replace(/([^\n \t])[ \t]{2,}(?![\n \t])/g,"$1 ")}},{name:"common/space/delTrailingBlanks",index:"-3",handler:function(e){return e.replace(/[ \t]+\n/g,"\n")}},{name:"common/space/insertFinalNewline",queue:"end",handler:function(e){return"\n"===e[e.length-1]?e:e+"\n"},live:!1,disabled:!0},{name:"common/space/replaceTab",index:"-5",handler:function(e){return e.replace(/\t/g,"    ")}},{name:"common/space/squareBracket",handler:function(e){return e.replace(/(\[) +/g,"[").replace(/ +\]/g,"]")}},B,ne]),{name:"common/symbols/arrow",handler:function(e){return v(e,[[/(^|[^-])->(?!>)/g,"$1\u2192"],[/(^|[^<])<-(?!-)/g,"$1\u2190"]])}}),L=(E.addRules([k,{name:"common/symbols/cf",handler:function(e){var t=new RegExp('(^|[\\s(\\[+\u2248\xb1\u2212\u2014\u2013\\-])(\\d+(?:[.,]\\d+)?)[ \xa0\u2009]?(C|F)([\\W\\s.,:!?")\\]]|$)',"mg");return e.replace(t,"$1$2\u2009\xb0$3$4")}},{name:"common/symbols/copy",handler:function(e){return v(e,[[/\(r\)/gi,"\xae"],[/(copyright )?\((c|\u0441)\)/gi,"\xa9"],[/\(tm\)/gi,"\u2122"]])}}]),{name:"en-US/dash/main",index:"-5",handler:function(e){var t=c["common/dash"],n="[ ".concat("\xa0","]"),r="[ ".concat("\xa0","\n]"),n=new RegExp("".concat(n,"(").concat(t,")(").concat(r,")"),"g");return e.replace(n,"".concat("\xa0").concat("\u2014","$2"))}}),D=(E.addRules([L]),{name:"ru/dash/centuries",handler:function(e,t){var n=new RegExp("(X|I|V)[ |\xa0]?"+("("+c["common/dash"]+")")+"[ |\xa0]?(X|I|V)","g");return e.replace(n,"$1"+t.dash+"$3")},settings:{dash:"\u2013"}}),I=(E.addRules([D,{name:"ru/dash/daysMonth",handler:function(e,t){var n=new RegExp("(^|\\s)([123]?\\d)("+c["common/dash"]+")([123]?\\d)[ \xa0]("+c["ru/monthGenCase"]+")","g");return e.replace(n,"$1$2"+t.dash+"$4\xa0$5")},settings:{dash:"\u2013"}},{name:"ru/dash/de",handler:function(e){var t=new RegExp("([a-\u044f\u0451]+) \u0434\u0435"+c["ru/dashAfterDe"],"g");return e.replace(t,"$1-\u0434\u0435")},disabled:!0},{name:"ru/dash/decade",handler:function(e,t){var n=new RegExp("(^|\\s)(\\d{3}|\\d)0("+c["common/dash"]+")(\\d{3}|\\d)0(-\u0435[ \xa0])(?=\u0433\\.?[ \xa0]?\u0433|\u0433\u043e\u0434)","g");return e.replace(n,"$1$20"+t.dash+"$40$5")},settings:{dash:"\u2013"}},{name:"ru/dash/directSpeech",handler:function(e){var t=c["common/dash"],n=new RegExp('(["\xbb\u2018\u201c,])[ |\xa0]?('.concat(t,")[ |\xa0]"),"g"),r=new RegExp("(^|".concat(d,")(").concat(t,")( |\xa0)"),"gm"),t=new RegExp("([.\u2026?!])[ \xa0](".concat(t,")[ \xa0]"),"g");return e.replace(n,"$1\xa0\u2014 ").replace(r,"$1\u2014\xa0").replace(t,"$1 \u2014\xa0")}},{name:"ru/dash/izpod",handler:function(e){var t=new RegExp(c["ru/dashBefore"]+"(\u0418|\u0438)\u0437 \u043f\u043e\u0434"+c["ru/dashAfter"],"g");return e.replace(t,"$1$2\u0437-\u043f\u043e\u0434")}},{name:"ru/dash/izza",handler:function(e){var t=new RegExp(c["ru/dashBefore"]+"(\u0418|\u0438)\u0437 \u0437\u0430"+c["ru/dashAfter"],"g");return e.replace(t,"$1$2\u0437-\u0437\u0430")}},{name:"ru/dash/ka",handler:function(e){var t=new RegExp("([a-\u044f\u0451]+) \u043a\u0430(\u0441\u044c)?"+c["ru/dashAfter"],"g");return e.replace(t,"$1-\u043a\u0430$2")}},{name:"ru/dash/koe",handler:function(e){var t=new RegExp(c["ru/dashBefore"]+"([\u041a\u043a]\u043e[\u0435\u0439])\\s([\u0430-\u044f\u0451]{3,})"+c["ru/dashAfter"],"g");return e.replace(t,"$1$2-$3")}},{name:"ru/dash/main",index:"-5",handler:function(e){var t=new RegExp("([ \xa0])("+c["common/dash"]+")([ \xa0\\n])","g");return e.replace(t,"\xa0\u2014$3")}},{name:"ru/dash/month",handler:function(e,t){var n="("+c["ru/month"]+")",r="("+c["ru/monthPreCase"]+")",a=c["common/dash"],n=new RegExp(n+" ?("+a+") ?"+n,"gi"),a=new RegExp(r+" ?("+a+") ?"+r,"gi"),r="$1"+t.dash+"$3";return e.replace(n,r).replace(a,r)},settings:{dash:"\u2013"}},{name:"ru/dash/surname",handler:function(e){var t=new RegExp("([\u0410-\u042f\u0401][\u0430-\u044f\u0451]+)\\s-([\u0430-\u044f\u0451]{1,3})(?![^\u0430-\u044f\u0451]|$)","g");return e.replace(t,"$1\xa0\u2014$2")}},{name:"ru/dash/taki",handler:function(e){var t=new RegExp("(\u0432\u0435\u0440\u043d\u043e|\u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e|\u043e\u043f\u044f\u0442\u044c|\u043f\u0440\u044f\u043c\u043e|\u0442\u0430\u043a|\u0432\u0441[\u0435\u0451]|\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e|\u043d\u0435\u0443\u0436\u0435\u043b\u0438)\\s(\u0442\u0430\u043a\u0438)"+c["ru/dashAfter"],"g");return e.replace(t,"$1-$2")}},{name:"ru/dash/time",handler:function(e,t){var n=new RegExp(c["ru/dashBefore"]+"(\\d?\\d:[0-5]\\d)"+c["common/dash"]+"(\\d?\\d:[0-5]\\d)"+c["ru/dashAfter"],"g");return e.replace(n,"$1$2"+t.dash+"$3")},settings:{dash:"\u2013"}},{name:"ru/dash/to",handler:function(e){var t=new RegExp("(^|[^\u0410-\u042f\u0401\u0430-\u044f\u0451\\w])([\u041e\u043e]\u0442\u043a\u0443\u0434\u0430|[\u041a\u043a]\u0443\u0434\u0430|[\u0413\u0433]\u0434\u0435|[\u041a\u043a]\u043e\u0433\u0434\u0430|[\u0417\u0437]\u0430\u0447\u0435\u043c|[\u041f\u043f]\u043e\u0447\u0435\u043c\u0443|[\u041a\u043a]\u0430\u043a|[\u041a\u043a]\u0430\u043a\u043e[\u0435\u0439\u043c]|[\u041a\u043a]\u0430\u043a\u0430\u044f|[\u041a\u043a]\u0430\u043a\u0438[\u0435\u043c\u0445]|[\u041a\u043a]\u0430\u043a\u0438\u043c\u0438|[\u041a\u043a]\u0430\u043a\u0443\u044e|[\u0427\u0447]\u0442\u043e|[\u0427\u0447]\u0435\u0433\u043e|[\u0427\u0447]\u0435[\u0439\u043c]|[\u0427\u0447]\u044c\u0438\u043c?|[\u041a\u043a]\u0442\u043e|[\u041a\u043a]\u043e\u0433\u043e|[\u041a\u043a]\u043e\u043c\u0443|[\u041a\u043a]\u0435\u043c)( | -|- )(\u0442\u043e|\u043b\u0438\u0431\u043e|\u043d\u0438\u0431\u0443\u0434\u044c)"+c["ru/dashAfter"],"g");return e.replace(t,function(e,t,n,r,a){r=n+r+a;return"\u043a\u0430\u043a \u0442\u043e"===r||"\u041a\u0430\u043a \u0442\u043e"===r?e:t+n+"-"+a})}},{name:"ru/dash/kakto",handler:function(e){var t=new RegExp("(^|[^\u0410-\u042f\u0401\u0430-\u044f\u0451\\w])([\u041a\u043a]\u0430\u043a) \u0442\u043e"+c["ru/dashAfter"],"g");return e.replace(t,"$1$2-\u0442\u043e")}},{name:"ru/dash/weekday",handler:function(e,t){var n="("+c["ru/weekday"]+")",n=new RegExp(n+" ?("+c["common/dash"]+") ?"+n,"gi");return e.replace(n,"$1"+t.dash+"$3")},settings:{dash:"\u2013"}},{name:"ru/dash/years",handler:function(e,i){var t=new RegExp("(\\D|^)(\\d{4})[ \xa0]?("+c["common/dash"]+")[ \xa0]?(\\d{4})(?=[ \xa0]?\u0433)","g");return e.replace(t,function(e,t,n,r,a){return parseInt(n,10)<parseInt(a,10)?t+n+i.dash+a:e})},settings:{dash:"\u2013"}}]),"(-|\\.|\\/)"),q="(-|\\/)",oe=new RegExp("(^|\\D)(\\d{4})"+I+"(\\d{2})"+I+"(\\d{2})(\\D|$)","gi"),ue=new RegExp("(^|\\D)(\\d{2})"+q+"(\\d{2})"+q+"(\\d{4})(\\D|$)","gi"),T=(E.addRules([{name:"ru/date/fromISO",handler:function(e){return e.replace(oe,"$1$6.$4.$2$7").replace(ue,"$1$4.$2.$6$7")}},{name:"ru/date/weekday",handler:function(e){var t=new RegExp("(\\d)( |\xa0)("+c["ru/monthGenCase"]+"),( |\xa0)("+c["ru/weekday"]+")","gi");return e.replace(t,function(e,t,n,r,a,i){return t+n+r.toLowerCase()+","+a+i.toLowerCase()})}}]),{name:"ru/money/currency",handler:function(e){var t="([$\u20ac\xa5\u04b0\xa3\u20a4\u20bd])",n=new RegExp("(^|[\\D]{2})"+t+" ?("+h+"([ \xa0\u2009\u202f]\\d{3})*)([ \xa0\u2009\u202f]?(\u0442\u044b\u0441\\.|\u043c\u043b\u043d|\u043c\u043b\u0440\u0434|\u0442\u0440\u043b\u043d))?","gm"),t=new RegExp("(^|[\\D])("+h+") ?"+t,"gm");return e.replace(n,function(e,t,n,r,a,i,s,o){return t+r+(o?"\xa0"+o:"")+"\xa0"+n}).replace(t,"$1$2\xa0$4")},disabled:!0});function le(e,t,n,r){return"\u0434\u0434"===n&&"\u043c\u043c"===r||-1<["\u0440\u0444","\u0440\u0443","\u0440\u0443\u0441","\u043e\u0440\u0433","\u0443\u043a\u0440","\u0431\u0433","\u0441\u0440\u0431"].indexOf(r)?e:t+n+".\xa0"+r+"."}E.addRules([T,{name:"ru/money/ruble",handler:function(e){var t="$1\xa0\u20bd",n="(\\d+)( |\xa0)?(\u0440|\u0440\u0443\u0431)\\.",r=new RegExp("^"+n+"$","g"),a=new RegExp(n+"(?=[!?,:;])","g"),n=new RegExp(n+"(?=\\s+[A-\u042f\u0401])","g");return e.replace(r,t).replace(a,t).replace(n,t+".")},disabled:!0}]);var ce={2:"\xb2","\xb2":"\xb2",3:"\xb3","\xb3":"\xb3","":""};E.addRules([{name:"ru/nbsp/abbr",handler:function(e){var t=new RegExp("(^|\\s|".concat(d,")([\u0430-\u044f\u0451]{1,3})\\. ?([\u0430-\u044f\u0451]{1,3})\\."),"g");return e.replace(t,le).replace(t,le)}},{name:"ru/nbsp/addr",handler:function(e){return e.replace(/(\s|^)(\u0434\u043e\u043c|\u0434\.|\u043a\u0432\.|\u043f\u043e\u0434\.|\u043f-\u0434) *(\d+)/gi,"$1$2\xa0$3").replace(/(\s|^)(\u043c\u043a\u0440-\u043d|\u043c\u043a-\u043d|\u043c\u043a\u0440\.|\u043c\u043a\u0440\u043d)\s/gi,"$1$2\xa0").replace(/(\s|^)(\u044d\u0442\.) *(-?\d+)/gi,"$1$2\xa0$3").replace(/(\s|^)(\d+) +\u044d\u0442\u0430\u0436([^\u0430-\u044f\u0451]|$)/gi,"$1$2\xa0\u044d\u0442\u0430\u0436$3").replace(/(\s|^)\u043b\u0438\u0442\u0435\u0440\s([\u0410-\u042f]|$)/gi,"$1\u043b\u0438\u0442\u0435\u0440\xa0$2").replace(/(\s|^)(\u043e\u0431\u043b|\u043a\u0440|\u0441\u0442|\u043f\u043e\u0441|\u0441|\u0434|\u0443\u043b|\u043f\u0435\u0440|\u043f\u0440|\u043f\u0440-\u0442|\u043f\u0440\u043e\u0441\u043f|\u043f\u043b|\u0431\u0443\u043b|\u0431-\u0440|\u043d\u0430\u0431|\u0448|\u0442\u0443\u043f|\u043e\u0444|\u043a\u043e\u043c\u043d?|\u0443\u0447|\u0432\u043b|\u0432\u043b\u0430\u0434|\u0441\u0442\u0440|\u043a\u043e\u0440)\. *([\u0430-\u044f\u0451a-z\d]+)/gi,"$1$2.\xa0$3").replace(/(\D[ \u00A0]|^)\u0433\. ?([\u0410-\u042f\u0401])/gm,"$1\u0433.\xa0$2")}},{name:"ru/nbsp/afterNumberSign",handler:function(e){return e.replace(/\u2116[ \u00A0\u2009]?(\d|\u043f\/\u043f)/g,"\u2116\u202f$1")}},{name:"ru/nbsp/beforeParticle",index:"+5",handler:function(e){var t="(\u043b\u0438|\u043b\u044c|\u0436\u0435|\u0436|\u0431\u044b|\u0431)",n=new RegExp("([\u0410-\u042f\u0401\u0430-\u044f\u0451]) "+t+'(?=[,;:?!"\u2018\u201c\xbb])',"g"),t=new RegExp("([\u0410-\u042f\u0401\u0430-\u044f\u0451])[ \xa0]"+t+"[ \xa0]","g");return e.replace(n,"$1\xa0$2").replace(t,"$1\xa0$2 ")}},{name:"ru/nbsp/centuries",handler:function(e){var t=c["common/dash"],n="(^|\\s)([VIX]+)",r='(?=[,;:?!"\u2018\u201c\xbb]|$)',a=new RegExp(n+"[ \xa0]?\u0432\\.?"+r,"gm"),n=new RegExp(n+"("+t+")([VIX]+)[ \xa0]?\u0432\\.?([ \xa0]?\u0432\\.?)?"+r,"gm");return e.replace(a,"$1$2\xa0\u0432.").replace(n,"$1$2$3$4\xa0\u0432\u0432.")}},{name:"ru/nbsp/dayMonth",handler:function(e){var t=new RegExp("(\\d{1,2}) ("+c["ru/shortMonth"]+")","gi");return e.replace(t,"$1\xa0$2")}},{name:"ru/nbsp/initials",handler:function(e){var t=new RegExp("(^|[\xa0\u202f "+c["ru/quote"].left+d+'"])([\u0410-\u042f\u0401])\\.[\xa0\u202f ]?([\u0410-\u042f\u0401])\\.[\xa0\u202f ]?([\u0410-\u042f\u0401][\u0430-\u044f\u0451]+)',"gm");return e.replace(t,"$1$2.\xa0$3.\xa0$4")}},{name:"ru/nbsp/m",index:"+5",handler:function(e){var t=new RegExp("(^|[\\s,.\\(\uf000])(\\d+)[ \xa0]?(\u043c\u043c?|\u0441\u043c|\u043a\u043c|\u0434\u043c|\u0433\u043c|mm?|km|cm|dm)([23\xb2\xb3])?([\\s\\).!?,;\uf000]|$)","gm");return e.replace(t,function(e,t,n,r,a,i){return t+n+"\xa0"+r+ce[a||""]+("\xa0"===i?" ":i)})}},{name:"ru/nbsp/mln",handler:function(e){return e.replace(/(\d) ?(\u0442\u044b\u0441|\u043c\u043b\u043d|\u043c\u043b\u0440\u0434|\u0442\u0440\u043b\u043d)(\.|\s|$)/gi,"$1\xa0$2$3")}},{name:"ru/nbsp/ooo",handler:function(e){return e.replace(/(^|[^a-\u044f\u0451A-\u042f\u0401])(\u041e\u041e\u041e|\u041e\u0410\u041e|\u0417\u0410\u041e|\u041d\u0418\u0418|\u041f\u0411\u041e\u042e\u041b) /g,"$1$2\xa0")}},{name:"ru/nbsp/page",handler:function(e){var t=new RegExp("(^|[)\\s\uf000])(\u0441\u0442\u0440|\u0433\u043b|\u0440\u0438\u0441|\u0438\u043b\u043b?|\u0441\u0442|\u043f|c)\\. *(\\d+)([\\s.,?!;:]|$)","gim");return e.replace(t,"$1$2.\xa0$3$4")}},{name:"ru/nbsp/ps",handler:function(e){var t=new RegExp("(^|\\s|".concat(d,")[p\u0437]\\.[ \xa0]?([p\u0437]\\.[ \xa0]?)?[s\u044b]\\.:? "),"gim");return e.replace(t,function(e,t,n){return t+(n?"P.\xa0P.\xa0S. ":"P.\xa0S. ")})}},{name:"ru/nbsp/rubleKopek",handler:function(e){return e.replace(/(\d) ?(?=(\u0440\u0443\u0431|\u043a\u043e\u043f)\.)/g,"$1\xa0")}},{name:"ru/nbsp/see",handler:function(e){var t=new RegExp("(^|\\s|".concat(d,"|\\()(\u0441\u043c|\u0438\u043c)\\.[ \xa0]?([\u0430-\u044f\u04510-9a-z]+)([\\s.,?!]|$)"),"gi");return e.replace(t,function(e,t,n,r,a){return("\xa0"===t?" ":t)+n+".\xa0"+r+a})}},{name:"ru/nbsp/year",handler:function(e){return e.replace(/(^|\D)(\d{4}) ?\u0433([ ,;.\n]|$)/g,"$1$2\xa0\u0433$3")}},{name:"ru/nbsp/years",index:"+5",handler:function(e){var t=new RegExp("(^|\\D)(\\d{4})("+c["common/dash"]+')(\\d{4})[ \xa0]?\u0433\\.?([ \xa0]?\u0433\\.)?(?=[,;:?!"\u2018\u201c\xbb\\s]|$)',"gm");return e.replace(t,"$1$2$3$4\xa0\u0433\u0433.")}}]);function S(e,t){t=new RegExp('<span class="('+t.join("|")+')">([^]*?)</span>',"g");return e.replace(t,"$2")}function z(e,t){return e.replace(/<title>[^]*?<\/title>/i,function(e){return S(e,t)})}E.addRules([{name:"ru/number/comma",handler:function(e){return e.replace(/(^|\s)(\d+)\.(\d+[\u00A0\u2009\u202F ]*?[%\u2030\xb0\xd7x])/gim,"$1$2,$3")}},{name:"ru/number/ordinals",handler:function(e,t,n){n=n.getData("char"),n=new RegExp("(\\d[%\u2030]?)-(\u044b\u0439|\u043e\u0439|\u0430\u044f|\u043e\u0435|\u044b\u0435|\u044b\u043c|\u043e\u043c|\u044b\u0445|\u043e\u0433\u043e|\u043e\u043c\u0443|\u044b\u043c\u0438)(?!["+n+"])","g");return e.replace(n,function(e,t,n){return t+"-"+{"\u043e\u0439":"\u0439","\u044b\u0439":"\u0439","\u0430\u044f":"\u044f","\u043e\u0435":"\u0435","\u044b\u0435":"\u0435","\u044b\u043c":"\u043c","\u043e\u043c":"\u043c","\u044b\u0445":"\u0445","\u043e\u0433\u043e":"\u0433\u043e","\u043e\u043c\u0443":"\u043c\u0443","\u044b\u043c\u0438":"\u043c\u0438"}[n]})}}]);var pe=["typograf-oa-lbracket","typograf-oa-n-lbracket","typograf-oa-sp-lbracket"],B="ru/optalign/bracket",ne={name:B,queue:"start",handler:function(e){return S(e,pe)},htmlAttrs:!1},k={name:B,queue:"end",handler:function(e){return z(e,pe)},htmlAttrs:!1},ge=["typograf-oa-comma","typograf-oa-comma-sp"],L="ru/optalign/comma",D={name:L,queue:"start",handler:function(e){return S(e,ge)},htmlAttrs:!1},I={name:L,queue:"end",handler:function(e){return z(e,ge)},htmlAttrs:!1},he=["typograf-oa-lquote","typograf-oa-n-lquote","typograf-oa-sp-lquote"],q="ru/optalign/quote",T={name:q,queue:"start",handler:function(e){return S(e,he)},htmlAttrs:!1},fe={name:q,queue:"end",handler:function(e){return z(e,he)},htmlAttrs:!1},C=(E.addRules([{name:B,handler:function(e){return e.replace(/( |\u00A0)\(/g,'<span class="typograf-oa-sp-lbracket">$1</span><span class="typograf-oa-lbracket">(</span>').replace(/^\(/gm,'<span class="typograf-oa-n-lbracket">(</span>')},disabled:!0,htmlAttrs:!1},{name:L,handler:function(e,t,n){n=n.getData("char"),n=new RegExp("(["+n+"\\d\u0301]+), ","gi");return e.replace(n,'$1<span class="typograf-oa-comma">,</span><span class="typograf-oa-comma-sp"> </span>')},disabled:!0,htmlAttrs:!1},{name:q,handler:function(e){var t=this.getSetting("common/punctuation/quote","ru"),t="(["+t.left[0]+(t.left[1]||"")+"])",n=new RegExp("(^|\n\n|\uf000)("+t+")","g"),t=new RegExp("([^\n\uf000])([ \xa0\n])("+t+")","gi");return e.replace(n,'$1<span class="typograf-oa-n-lquote">$2</span>').replace(t,'$1<span class="typograf-oa-sp-lquote">$2</span><span class="typograf-oa-lquote">$3</span>')},disabled:!0,htmlAttrs:!1}]),E.addInnerRules([ne,k,D,I,T,fe]),[]);function de(e){var t,n,r=e[0],a="";if(e.length<8)return me(e);if(10<e.length)if("+"===r){if("7"!==e[1])return e;t=!0,e=e.substr(2)}else"8"===r&&(n=!0,e=e.substr(1));for(var i=8;2<=i;i--){var s=+e.substr(0,i);if(-1<C.indexOf(s)){a=e.substr(0,i),e=e.substr(i);break}}return a||(a=e.substr(0,5),e=e.substr(5)),(t?"+7\xa0":"")+(n?"8\xa0":"")+function(e){var t=+e,n=e.length,r=[e],a=!1;if(3<n)switch(n){case 4:r=[e.substr(0,2),e.substr(2,2)];break;case 5:r=[e.substr(0,3),e.substr(3,3)];break;case 6:r=[e.substr(0,2),e.substr(2,2),e.substr(4,2)]}else a=900<t&&t<=999||495==t||499==t;n=r.join("-");return a?n:"("+n+")"}(a)+"\xa0"+me(e)}function me(e){var t="";return e.length%2&&(t=e[0],t+=e.length<=5?"-":"",e=e.substr(1,e.length-1)),t+e.split(/(?=(?:\d\d)+$)/).join("-")}function $e(e){return e.replace(/[^\d+]/g,"")}[4162,416332,8512,851111,4722,4725,391379,8442,4732,4152,4154451,4154459,4154455,41544513,8142,8332,8612,8622,3525,812,8342,8152,3812,4862,3422,342633,8112,9142,8452,3432,3434,3435,4812,8432,8439,3822,4872,3412,3511,3512,3022,4112,4852,4855,3852,3854,8182,818,90,3472,4741,4764,4832,4922,8172,8202,8722,4932,493,3952,3951,3953,411533,4842,3842,3843,8212,4942,"39131-39179","39190-39199",391,4712,4742,8362,495,499,4966,4964,4967,498,8312,8313,3832,383612,3532,8412,4232,423370,423630,8632,8642,8482,4242,8672,8652,4752,4822,482502,4826300,3452,8422,4212,3466,3462,8712,8352,"901-934","936-939","950-953",958,"960-969","977-989","991-997",999].forEach(function(e){if("string"==typeof e)for(var t=e.split("-"),n=+t[0];n<=+t[1];n++)C.push(n);else C.push(e)});E.addRules([{name:"ru/other/accent",handler:function(e){return e.replace(/([\u0430-\u044f\u0451])([\u0410\u0415\u0401\u0418\u041e\u0423\u042b\u042d\u042e\u042f])([^\u0410-\u042f\u0401\w]|$)/g,function(e,t,n,r){return t+n.toLowerCase()+"\u0301"+r})},disabled:!0},{name:"ru/other/phone-number",live:!1,handler:function(e){var t=new RegExp("(^|,| |\uf000)(\\+7[\\d\\(\\) \xa0-]{10,18})(?=,|;|\uf000|$)","gm");return e.replace(t,function(e,t,n){n=$e(n);return 12===n.length?t+de(n):e}).replace(/(^|[^\u0430-\u044f\u0451])([\u260e\u260f\u2706\ud83d\udce0\ud83d\udcde\ud83d\udcf1]|\u0442\.|\u0442\u0435\u043b\.|\u0444\.|\u043c\u043e\u0431\.|\u0444\u0430\u043a\u0441|\u0441\u043e\u0442\u043e\u0432\u044b\u0439|\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439|\u0442\u0435\u043b\u0435\u0444\u043e\u043d)(:?\s*?)([+\d(][\d \u00A0\-()]{3,}\d)/gi,function(e,t,n,r,a){a=$e(a);return 5<=a.length?t+n+r+de(a):e})}}]);var B={name:"ru/punctuation/ano",handler:function(e){var t=new RegExp("([^\xab\u201e[(!?,:;\\-\u2012\u2013\u2014\\s\uf000])(\\s+)(\u0430|\u043d\u043e)(?= |\xa0|\\n)","g");return e.replace(t,"$1,$2$3")}},be=(E.addRules([B,{name:"ru/punctuation/exclamation",handler:function(e){return e.replace(/(^|[^!])!{2}($|[^!])/gm,"$1!$2").replace(/(^|[^!])!{4}($|[^!])/gm,"$1!!!$2")},live:!1},{name:"ru/punctuation/exclamationQuestion",index:"+5",handler:function(e){var t=new RegExp("(^|[^!])!\\?([^?]|$)","g");return e.replace(t,"$1?!$2")}},{name:"ru/punctuation/hellipQuestion",handler:function(e){return e.replace(/(^|[^.])(\.\.\.|\u2026),/g,"$1\u2026").replace(/(!|\?)(\.\.\.|\u2026)(?=[^.]|$)/g,"$1..")}}]),E.addRules([{name:"ru/space/afterHellip",handler:function(e){return e.replace(/([\u0430-\u044f\u0451])(\.\.\.|\u2026)([\u0410-\u042f\u0401])/g,"$1$2 $3").replace(/([?!]\.\.)([\u0430-\u044f\u0451a-z])/gi,"$1 $2")}},{name:"ru/space/year",handler:function(e,t,n){n=n.getData("char"),n=new RegExp("(^| |\xa0)(\\d{3,4})(\u0433\u043e\u0434([\u0430\u0443\u0435]|\u043e\u043c)?)([^"+n+"]|$)","g");return e.replace(n,"$1$2 $3$5")}}]),E.addRules([{name:"ru/symbols/NN",handler:function(e){return e.replace(/\u2116\u2116/g,"\u2116")}}]),{A:"\u0410",a:"\u0430",B:"\u0412",E:"\u0415",e:"\u0435",K:"\u041a",M:"\u041c",H:"\u041d",O:"\u041e",o:"\u043e",P:"\u0420",p:"\u0440",C:"\u0421",c:"\u0441",T:"\u0422",y:"\u0443",X:"\u0425",x:"\u0445"}),xe=Object.keys(be).join("");return E.addRules([{name:"ru/typo/switchingKeyboardLayout",handler:function(e){var t=new RegExp("(["+xe+"]{1,3})(?=[\u0410-\u042f\u0401\u0430-\u044f\u0451]+?)","g");return e.replace(t,function(e,t){for(var n="",r=0;r<t.length;r++)n+=be[t[r]];return n})}}]),E});

/* ------------------------*/
/* ------------------------*/
/*    ua-parser.min.js     */
/* ------------------------*/
/* ------------------------*/

!function(r,b){"use strict";var u="function",e="undefined",c="object",a="string",i="model",s="name",o="type",n="vendor",t="version",l="architecture",w="console",d="mobile",m="tablet",p="smarttv",f="wearable",h="embedded",g={extend:function(i,s){var e,o={};for(e in i)s[e]&&s[e].length%2==0?o[e]=s[e].concat(i[e]):o[e]=i[e];return o},has:function(i,s){return typeof i==a&&-1!==s.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i==a?i.replace(/[^\d\.]/g,"").split(".")[0]:b},trim:function(i,s){return i=i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof s==e?i:i.substring(0,255)}},v={rgx:function(i,s){for(var e,o,r,a,n,t=0;t<s.length&&!a;){for(var l=s[t],w=s[t+1],d=e=0;d<l.length&&!a;)if(a=l[d++].exec(i))for(o=0;o<w.length;o++)n=a[++e],typeof(r=w[o])==c&&0<r.length?2==r.length?typeof r[1]==u?this[r[0]]=r[1].call(this,n):this[r[0]]=r[1]:3==r.length?typeof r[1]!=u||r[1].exec&&r[1].test?this[r[0]]=n?n.replace(r[1],r[2]):b:this[r[0]]=n?r[1].call(this,n,r[2]):b:4==r.length&&(this[r[0]]=n?r[3].call(this,n.replace(r[1],r[2])):b):this[r]=n||b;t+=2}},str:function(i,s){for(var e in s)if(typeof s[e]==c&&0<s[e].length){for(var o=0;o<s[e].length;o++)if(g.has(s[e][o],i))return"?"===e?b:e}else if(g.has(s[e],i))return"?"===e?b:e;return i}},x={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},k={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[t,[s,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[t,[s,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[s,t],[/opios[\/\s]+([\w\.]+)/i],[t,[s,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[t,[s,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[s,t],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[t,[s,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[t,[s,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[t,[s,"WeChat"]],[/konqueror\/([\w\.]+)/i],[t,[s,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[t,[s,"IE"]],[/yabrowser\/([\w\.]+)/i],[t,[s,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[s,/(.+)/,"$1 Secure Browser"],t],[/focus\/([\w\.]+)/i],[t,[s,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[t,[s,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[t,[s,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[t,[s,"Dolphin"]],[/coast\/([\w\.]+)/i],[t,[s,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[t,[s,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[t,[s,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[s,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[s,/(.+)/,"$1 Browser"],t],[/(comodo_dragon)\/([\w\.]+)/i],[[s,/_/g," "],t],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[s,t],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[s],[/;fbav\/([\w\.]+);/i],[t,[s,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[s,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[s,t],[/\bgsa\/([\w\.]+)\s.*safari\//i],[t,[s,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[t,[s,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[s,"Chrome WebView"],t],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[t,[s,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[s,t],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[t,[s,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[t,s],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[s,[t,v.str,x.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[s,t],[/(navigator|netscape)\/([\w\.-]+)/i],[[s,"Netscape"],t],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[t,[s,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[s,t]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[l,"amd64"]],[/(ia32(?=;))/i],[[l,g.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[l,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[l,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[l,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[l,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[l,/ower/,"",g.lowerize]],[/(sun4\w)[;\)]/i],[[l,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[l,g.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[i,[n,"Samsung"],[o,m]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[i,[n,"Samsung"],[o,d]],[/\((ip(?:hone|od)[\s\w]*);/i],[i,[n,"Apple"],[o,d]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[i,[n,"Apple"],[o,m]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[i,[n,"Huawei"],[o,m]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[i,[n,"Huawei"],[o,d]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[i,/_/g," "],[n,"Xiaomi"],[o,d]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[i,/_/g," "],[n,"Xiaomi"],[o,m]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[i,[n,"OPPO"],[o,d]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[i,[n,"Vivo"],[o,d]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[i,[n,"Realme"],[o,d]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[i,[n,"Motorola"],[o,d]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[i,[n,"Motorola"],[o,m]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[i,[n,"LG"],[o,m]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[i,[n,"LG"],[o,d]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[i,[n,"Lenovo"],[o,m]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[i,/_/g," "],[n,"Nokia"],[o,d]],[/droid.+;\s(pixel\sc)[\s)]/i],[i,[n,"Google"],[o,m]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[i,[n,"Google"],[o,d]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[i,[n,"Sony"],[o,d]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[i,"Xperia Tablet"],[n,"Sony"],[o,m]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[i,[n,"OnePlus"],[o,d]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[i,[n,"Amazon"],[o,m]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[i,"Fire Phone"],[n,"Amazon"],[o,d]],[/\((playbook);[\w\s\),;-]+(rim)/i],[i,n,[o,m]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[i,[n,"BlackBerry"],[o,d]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[i,[n,"ASUS"],[o,m]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[i,[n,"ASUS"],[o,d]],[/(nexus\s9)/i],[i,[n,"HTC"],[o,m]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[n,[i,/_/g," "],[o,d]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[i,[n,"Acer"],[o,m]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[i,[n,"Meizu"],[o,d]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[n,i,[o,d]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[n,i,[o,m]],[/\s(surface\sduo)\s/i],[i,[n,"Microsoft"],[o,m]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[i,[n,"Fairphone"],[o,d]],[/\s(u304aa)\sbuild/i],[i,[n,"AT&T"],[o,d]],[/sie-(\w*)/i],[i,[n,"Siemens"],[o,d]],[/[;\/]\s?(rct\w+)\sbuild/i],[i,[n,"RCA"],[o,m]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[i,[n,"Dell"],[o,m]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[i,[n,"Verizon"],[o,m]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[i,[n,"Barnes & Noble"],[o,m]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[i,[n,"NuVision"],[o,m]],[/;\s(k88)\sbuild/i],[i,[n,"ZTE"],[o,m]],[/;\s(nx\d{3}j)\sbuild/i],[i,[n,"ZTE"],[o,d]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[i,[n,"Swiss"],[o,d]],[/[;\/]\s?(zur\d{3})\sbuild/i],[i,[n,"Swiss"],[o,m]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[i,[n,"Zeki"],[o,m]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[n,"Dragon Touch"],i,[o,m]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[i,[n,"Insignia"],[o,m]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[i,[n,"NextBook"],[o,m]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[n,"Voice"],i,[o,d]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[n,"LvTel"],i,[o,d]],[/;\s(ph-1)\s/i],[i,[n,"Essential"],[o,d]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[i,[n,"Envizen"],[o,m]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[i,[n,"MachSpeed"],[o,m]],[/[;\/]\s?tu_(1491)\sbuild/i],[i,[n,"Rotor"],[o,m]],[/(shield[\w\s]+)\sbuild/i],[i,[n,"Nvidia"],[o,m]],[/(sprint)\s(\w+)/i],[n,i,[o,d]],[/(kin\.[onetw]{3})/i],[[i,/\./g," "],[n,"Microsoft"],[o,d]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[i,[n,"Zebra"],[o,m]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[i,[n,"Zebra"],[o,d]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[n,i,[o,w]],[/droid.+;\s(shield)\sbuild/i],[i,[n,"Nvidia"],[o,w]],[/(playstation\s[345portablevi]+)/i],[i,[n,"Sony"],[o,w]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[i,[n,"Microsoft"],[o,w]],[/smart-tv.+(samsung)/i],[n,[o,p]],[/hbbtv.+maple;(\d+)/i],[[i,/^/,"SmartTV"],[n,"Samsung"],[o,p]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[n,"LG"],[o,p]],[/(apple)\s?tv/i],[n,[i,"Apple TV"],[o,p]],[/crkey/i],[[i,"Chromecast"],[n,"Google"],[o,p]],[/droid.+aft([\w])(\sbuild\/|\))/i],[i,[n,"Amazon"],[o,p]],[/\(dtv[\);].+(aquos)/i],[i,[n,"Sharp"],[o,p]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[n,g.trim],[i,g.trim],[o,p]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[o,p]],[/((pebble))app\/[\d\.]+\s/i],[n,i,[o,f]],[/droid.+;\s(glass)\s\d/i],[i,[n,"Google"],[o,f]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[i,[n,"Zebra"],[o,f]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[n,[o,h]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[i,[o,d]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[i,[o,m]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[o,g.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[i,[n,"Generic"]],[/(phone)/i],[[o,d]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[t,[s,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[t,[s,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[s,t],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[t,s]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[s,t],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[s,[t,v.str,x.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[s,"Windows"],[t,v.str,x.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[t,/_/g,"."],[s,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[s,"Mac OS"],[t,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[s,t],[/\(bb(10);/i],[t,[s,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[t,[s,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[s,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[t,[s,"webOS"]],[/crkey\/([\d\.]+)/i],[t,[s,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[s,"Chromium OS"],t],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[s,t],[/(sunos)\s?([\w\.\d]*)/i],[[s,"Solaris"],t],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[s,t]]},y=function(i,s){if("object"==typeof i&&(s=i,i=b),!(this instanceof y))return new y(i,s).getResult();var e=i||(void 0!==r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=s?g.extend(k,s):k;return this.getBrowser=function(){var i={name:b,version:b};return v.rgx.call(i,e,o.browser),i.major=g.major(i.version),i},this.getCPU=function(){var i={architecture:b};return v.rgx.call(i,e,o.cpu),i},this.getDevice=function(){var i={vendor:b,model:b,type:b};return v.rgx.call(i,e,o.device),i},this.getEngine=function(){var i={name:b,version:b};return v.rgx.call(i,e,o.engine),i},this.getOS=function(){var i={name:b,version:b};return v.rgx.call(i,e,o.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(i){return e=typeof i==a&&255<i.length?g.trim(i,255):i,this},this.setUA(e),this};y.VERSION="0.7.28",y.BROWSER={NAME:s,MAJOR:"major",VERSION:t},y.CPU={ARCHITECTURE:l},y.DEVICE={MODEL:i,VENDOR:n,TYPE:o,CONSOLE:w,MOBILE:d,SMARTTV:p,TABLET:m,WEARABLE:f,EMBEDDED:h},y.ENGINE={NAME:s,VERSION:t},y.OS={NAME:s,VERSION:t},typeof exports!=e?(typeof module!=e&&module.exports&&(exports=module.exports=y),exports.UAParser=y):"function"==typeof define&&define.amd?define(function(){return y}):void 0!==r&&(r.UAParser=y);var S,E=void 0!==r&&(r.jQuery||r.Zepto);E&&!E.ua&&(S=new y,E.ua=S.getResult(),E.ua.get=function(){return S.getUA()},E.ua.set=function(i){S.setUA(i);var s,e=S.getResult();for(s in e)E.ua[s]=e[s]})}("object"==typeof window?window:this);

/* ------------------------*/
/* ------------------------*/
/*      ` main-v13.js      */
/* ------------------------*/
/* ------------------------*/

const body = document.body;
const getPage = () => {
    if (body.classList.contains('is--home-page')) {
	   return 'home';
    }
    if (body.classList.contains('is--on-premise-page')) {
	   return 'on-premise';
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
				if (platform.version.split('.')[0] <= 12) {
					showOldBrowserMsg()
                    document.querySelector('.navbar__old-msg').textContent = platform.os.version.split('.')[0] + platform.name;
				}
				break;
		}
		break;
	case 'Chrome':
		if (platform.version.split('.')[0] <= 87) {
			showOldBrowserMsg()
		}
		break;
	case 'Chrome Mobile':
		if (platform.version.split('.')[0] <= 87) {
			showOldBrowserMsg()
		}
		break;
	case 'Opera':
		if (platform.version.split('.')[0] <= 73) {
			showOldBrowserMsg()
		}
		break;
	case 'Firefox':
		if (platform.version.split('.')[0] <= 73) {
			showOldBrowserMsg()
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

if (['iOS', 'Android', 'Huawei'].indexOf(os) + 1) {
    const ctaDropdowns = document.querySelectorAll('.cta__dropdown');
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

const downloadLinks = document.querySelectorAll('.appstore, .playmarket, .huawei, .macintel, .macapple, .windows, .linuxdeb, .linuxtar, [data-platform="windows"]');
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
window.history.pushState({}, '', url.toString());

Array.prototype.forEach.call(downloadLinks, downloadLink => {
    //Цели яндекс на клик по стору
    downloadLink.addEventListener('click', (e) => {
        if (getPage() !== 'on-premise' && getPage() !== 'download') {
            for (platform in instructionLinks) {
                if (downloadLink.classList.contains(platform)) {
                    console.log(platform);
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
        if (getPage() == 'home') {
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
        const platformDownloadLink = document.querySelector('.' + platformClass)?.getAttribute('href');
        location.href = platformDownloadLink;
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
                        
//Скрываем кнопку при клике на другие платформы
$('.cta__list-other-button').on('click', function() {
    $(this).parent().addClass('is--open');
});

//Закрываем список при клике на ссылку для скачивания
$('.cta__list-item:not(.cta__list-other-button)').on('click', function() {
    $(".w-dropdown").trigger("w-close");
});

//Возвращаем к исходному состоянию
$('.cta__dropdown .w-dropdown-toggle').on('click', function() {
    $('.cta__dd-list-other-wrap').removeClass('is--open');
});

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
		console.log(e);
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
	};

	input.onfocus = function () {
		const requiredIcon = input.closest('.form-row').querySelector('.input-icon');
		if (requiredIcon) {
			requiredIcon.classList.add('display-none');
		}
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

			if (namePattern.test(value.trim())) {
				input.classList.add('input-error');
				isValid = false;
			}


			if (dataset.minLength && value.trim().length < dataset.minLength) {
				input.classList.add('input-error');
				isValid = false;
			}

			if (dataset.maxLength && value.trim().length > dataset.maxLength) {
				input.classList.add('input-error');
				isValid = false;
			}
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

function checkValidationFormOnSubmit(formClassName) {
	const form = document.querySelector(formClassName);
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

	$(formClassName).submit(onSubmitHandler);
}

if ($('#wf-form-Consultation-Form').length) {
	checkValidationFormOnSubmit('#wf-form-Consultation-Form');
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
//Типографируем подгруженные статьи
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

		// The callback passes a `listInstances` array with all the `CMSList` instances on the page.
		const [listInstance] = listInstances;

		// The `renderitems` event runs whenever the list renders items after switching pages.
		listInstance.on('renderitems', (renderedItems) => {
			if ($('.blog-grid__card-title').length) {
				$('.blog-grid__card-title').each(function () {
					$(this).html(tp.execute($(this).html()));
				})
				$('.blog-grid__card-introtext').each(function () {
					$(this).html(tp.execute($(this).html()));
				})
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
        body.style.top = `-${window.scrollY}px`;
        scrollDistance = window.scrollY;
        body.style.position = 'fixed';
        body.style.left = 0;
        body.style.right = 0;
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
        window.scrollTo(0, scrollDistance);
		document.body.style.marginRight = null;
		document.body.style.paddingRight = null;
		document.querySelector('.cookie').style.marhinRight = 0;
		document.querySelector('.w-nav').style.right = 0;
		if (document.getElementById('carrotquest-messenger-collapsed-container'))
			document.getElementById('carrotquest-messenger-collapsed-container').style.right = 0;
		document.body.style.overflowY = null;
	},
};

$('[data-remodal-id="consultation"]').remodal({
    closeOnOutsideClick: false
})

$(document).on('opening', '.remodal', function (e) {
	bodyScrollControls.disable();
	$('html').addClass('remodal-is-locked');
	let currentModal = $('.remodal.remodal-is-opening'),
		modalId = '#' + currentModal.data('remodal-id'),
		iframeInModal = currentModal.find('iframe'),
        formInModal = currentModal.find('form'),
		ScrollElement = currentModal.find('.popup__scroll-content');
	if (['#video-mac-intel', '#video-mac-apple', '#video-linux-deb-standart', '#video-linux-deb-terminal', '#video-linux-tar', '#video-windows', '#video-czech', '#video-detailing-group', '#video-daily', '#video-good-people'].includes(modalId)) {
		$('html').addClass('is--black-overlay is--center-modal is---video-overlay');
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
	$('html').removeClass('is--black-overlay is--white-overlay remodal-is-locked is--center-modal is---video-overlay');
});

//Фикс кнопки назалд и закрытия модального окна
function closeRemodal() {
	if ($('.remodal.remodal-is-opened').length) {
		$('.remodal.remodal-is-opened').find('[data-remodal-action="close"]').trigger('click');
	}
}
window.addEventListener("popstate", (event) => {
	closeRemodal();
});

document.onkeydown = function (evt) {
	if (evt.keyCode == 27) {
		closeRemodal();
	}
};

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

$(".target__section .w-tab-content").swipe({
	swipeStatus: function (event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
		if (phase == 'end' && direction == currentDirection && (direction == 'left' || direction == 'right'))
			tabsSwipeHandler($(this), direction);
	},
	allowPageScroll: "vertical"
});

var allSliders = [];
if ($(window).width() < 768) {
	if ($('.hero__slider').length || $('.target__section .w-tabs').length || $('.blog-hero__filter-button').length > 2) sliderInit();
};
var blogCategorySlider = false;

function sliderInit() {
	if ($('.target__section .w-tabs').length > 0) {
		$('.target__section .w-tabs').each(function (i) {
			let tabsEl = $(this);
			tabsEl.addClass('swiper-container');
			tabsEl.find('.w-tab-menu').addClass('swiper-wrapper');
			tabsEl.find('.w-tab-link:last').addClass('is--last');
			tabsEl.find('.w-tab-link').each(function () {
				$(this).addClass('swiper-slide');
			})
			allSliders[i] = new Swiper(tabsEl[0], {
				slidesPerView: "auto",
				spaceBetween: 0,
				speed: 400
			});
			allSliders[i].on('transitionStart', function () {
				$(allSliders[i].slidesEl).find('.w-tab-link').eq(allSliders[i].snapIndex).trigger('click');
			});
		});
	}
	if ($('.blog-hero__filter').length) {
		$('.blog-hero__filter').addClass('swiper-container');
		$('.blog-hero__filter-track').addClass('swiper-wrapper');
		$('.blog-hero__filter-collection .blog-hero__filter-button').each(function () {
			$('.blog-hero__filter-track').append($(this));
		});
		$('.blog-hero__filter .w-dyn-list').hide();
		$('.blog-hero__filter-button').each(function () {
			$(this).addClass('swiper-slide');
		})
		var currentPageIndex = $('.blog-hero__filter-button').index($('.blog-hero__filter-button.w--current'));

		var blogCategorySlider = new Swiper('.blog-hero__filter', {
			slidesPerView: "auto",
			spaceBetween: 0,
			speed: 400
		});
		if (currentPageIndex > 2)
			blogCategorySlider.slideTo(currentPageIndex);
	}
}

function sliderDisable() {
	if (allSliders.length > 1) {
		allSliders.forEach((swiper) => {
			swiper.destroy(true, true);
		});
	}
	$('.target__section .w-tabs').each(function (i) {
		let tabsEl = $(this);
		tabsEl.removeClass('swiper-container');
		tabsEl.find('.w-tab-menu').removeClass('swiper-wrapper').css({
			transform: 'translate3d(0px, 0, 0)'
		});
		tabsEl.find('.w-tab-link:last').removeClass('is--last');
		tabsEl.find('.w-tab-link').each(function () {
			$(this).removeClass('swiper-slide');
		})
	});
	if ($('.blog-hero__filter').length) {
		if (blogCategorySlider)
			blogCategorySlider.destroy(true, true);
		$('.blog-hero__filter').removeClass('swiper-container');
		$('.blog-hero__filter-track').removeClass('swiper-wrapper');
		$('.blog-hero__filter-button').each(function () {
			$(this).removeClass('swiper-slide');
		})
	}
}
$('.target__tab-menu-block .w-tab-link').on('click', function () {
	let thisEl = $(this),
		tabsEl = $(this).closest('.w-tabs'),
		textEl = thisEl.find('.tab-menu__description'),
		tabContent = thisEl.closest('.w-tabs').find('.w-tab-content'),
		menuWrap = thisEl.parent('.target__tab-menu-block'),
		tabIndex = menuWrap.find('a').index(thisEl),
		tabsElIndex = $('.w-tabs').index(tabsEl);

	if ($(window).width() > 767) {
		textEl.css({
			height: textEl.find('div').outerHeight(),
			opacity: 1
		});
		thisEl.siblings('.w--current').find('.tab-menu__description').css({
			height: 0,
			opacity: 0
		});
	} else {
		if (tabIndex != allSliders[tabsElIndex].activeIndex)
			allSliders[tabsElIndex].slideTo(tabIndex);
		tabContent.css({
			height: tabContent.find('.w-tab-pane').eq(tabIndex).outerHeight()
		});
	}
});

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
	var form = $(this),
		formData = new FormData($(this)[0]),
		currentHost = `${window.location.protocol}//${window.location.host}/`,
		url = currentHost + 'www/getcompass/requestConsultation',
		button = form.find('[type="submit"]'),
		successMessage = form.siblings('.w-form-done'),
		errorMessage = form.siblings('.w-form-fail');
	if (formValidation(form[0])) {
		if (formData.get('team_size') == '')
			formData.set('team_size', 0);
        formData.set('source_id', sourceID);
        formData.set('utm_tag', utmTag);
		button.val(button.data('wait'));
		$.ajax({
			url: url,
			type: "POST",
			dataType: 'text',
			data: formData,
			contentType: false,
			processData: false,
			statusCode: {
				423: function (result) {
					errorMessage.find('div').html('Превышенно количество отправленных заявок. Пожалуйста, попробуйте повторить через 2&nbsp;часа.');
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
                        ym(ymetrikaID, 'reachGoal', '302');
                    } else {
			            ym(ymetrikaID, 'reachGoal', '10');
                        _tmr.push({
						type: 'reachGoal',
						id: 3381982,
						goal: 'Demo'
					});
                    }
					form.closest('.remodal').addClass('is--success').removeClass('is--no-radius');
					//form.closest('.remodal').find('.form__button-close').addClass("is--hidden");
					if ($('html').hasClass('remodal-is-locked')) {
						$('html').removeClass('is--white-overlay');
                        $('html').removeClass('is--disable-bg-close');
					}
				}
			},
			error: function (xhr, resp, text) {
				errorMessage.find('div').html('Возникла ошибка при отправке формы, проверьте интернет-соединение или попробуйте позже.');
                button.val(button.data('btn-default'));
				errorMessage.show();
				setTimeout(function () {
					errorMessage.hide();
				}, 3000)
				form.show();
				console.log(xhr, resp, text);
			}
		});
		return false;
	} else {
        return false;
    }
});

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

window.addEventListener("resize", (event) => {
	setCenterCTAListArrow();
	if ($(window).width() > 767) {
		$('.w-tab-content').each(function () {
			$(this).removeAttr('style');
		})
		$('.article__toc-button').siblings('.article__toc-links').removeAttr('style').removeClass('is--open');
		sliderDisable();
	} else {
		if (!allSliders[0] || allSliders[0].destroyed)
			sliderInit();
	}
	setTimeout(function () {
		$('.target__tab-menu-block .w-tab-link.w--current').each(function () {
			$(this).trigger('click');
		});
	}, 200);

});

//Показываем кнопку "Попробовать бесплатно"
window.addEventListener("scroll", (event) => {
	if ( $('.business__section').length && $(window).scrollTop() + $(window).height() >= $('.business__section').offset().top ) {
        if ( $(window).width() < 768 ) {
            $('.menu-wrapper--is--mobile .cta__dropdown').removeClass('is--hidden');
            $('.menu-wrapper--is--mobile .cta__btn').removeClass('is--hidden');
        }
        $('.navbar__logo-text').addClass('is--visible');
	}
});
document.addEventListener("DOMContentLoaded", function () {
    setCenterCTAListArrow();
    setTimeout(function () {
        //Пользователь на сайте больше минуты
        if ( getPage() == 'home' ) ym(ymetrikaID, 'reachGoal', '4');
    }, 60000);

    var scrollEvent10 = false,
        scrollEvent50 = false,
        scrollEvent75 = false,
        scrollEvent100 = false; // Сообщение ещё не выводилось
    window.onscroll = function () {
        if ($('.w-nav-button').hasClass('w--open'))
                $('.w-nav-button').trigger('click');
        if ( getPage() == 'home' || getPage() == 'download' ) {
            if (!scrollEvent10 && getScrollPercentage() > 10) {
                if ($('.popup__video-iframe').find('iframe').length) {
                    $('.popup__video-iframe').find('iframe').each(function () {
                        $(this).attr('src', $(this).data('src'));
                    });
                }
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

$('.menu__navlink--blog').on('click', function () {
	//переход в блог
	ym(ymetrikaID, 'reachGoal', '61');
});

$('.navbar__button--blog').on('click', function () {
	//переход с блога на сайт
	ym(ymetrikaID, 'reachGoal', '62');
});

$('.article-cta').on('click', function () {
	//переход с блога на сайт по баннеру
	ym(ymetrikaID, 'reachGoal', '63');
});


$('.footer__item-download.appstore, .footer__item-download.playmarket, .footer__item-download.huawei, .blog-footer__link--store').on('click', function () {
	//переходы в сторы в блоге
	ym(ymetrikaID, 'reachGoal', '23');
});

$('.footer__item-contact-link.is--email-link').on('click', function () {
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
	if (!$(this).closest('.price__block').length) {
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

$('.logo-vendor__item').on('click', function () {
    //console.log('Идентификатор 23');
    if (!$(this).hasClass('w-dropdown-toggle')) {
        ym(ymetrikaID, 'reachGoal', '23');
    }
});

$('#carrot-messenger-collapsed-frame').on('click', function () {
	//Идентификатор 5
	ym(ymetrikaID, 'reachGoal', '5');
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

$('a[href*="on-premise"]').on('click', function() {
    if (getPage() == 'home') {
        ym(ymetrikaID, 'reachGoal', '300');
    }
})

$('a[href="/"]').on('click', function() {
    if (getPage() == 'on-premise') {
        ym(ymetrikaID, 'reachGoal', '300');
    }
})

function analyticsModal(hash) {
	switch (hash) {
		case '#consultation':
            if (getPage() == 'on-premise') {
                ym(ymetrikaID, 'reachGoal', '301');
            } else {
			    ym(ymetrikaID, 'reachGoal', '9');
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
