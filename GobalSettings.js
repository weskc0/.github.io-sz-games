    function getCookie(name) {
        const cookieName = name + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return '';
    }


     
    
    //alert('hi')
    let Setting14b = getCookie("PagePrevent");

    function checkPageClose(event) {
      
        
            event.returnValue = "Prevent Page Close Is Active, You Can Click Off Of This";
      
       
     
    }
    function checkPageClose2() {
        if(Setting14b==="true") {
        
            window.onbeforeunload = function(event) {
                // return a string to prevent the page from closing
                event.preventDefault();
                return "Prevent Page Close Is Active, You Can Click Off Of This";
            };
            window.addEventListener("beforeunload", checkPageClose);

        } 
        if(Setting14b==="false") {
        
        }
    }
    console.log('CookiePAGE Value: ' + Setting14b + "SzGames-Scripts Loaded")
    checkPageClose2()


    //CLOAK

    let tabData = {};
const tab = localStorage.getItem("tab");

if (tab) {
  try {
    tabData = JSON.parse(tab);
  } catch (e) {
    console.log("Error parsing tab data from localStorage", e);
  }
} else {

}

const settingsDefaultTab = {
  title: "Settings - Sz Games",
  icon: "https://github.com/sz-games/home/blob/main/G.png?raw=true",
};

const setTitle = (title = "") => {
  document.title = title || settingsDefaultTab.title;
  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }
  localStorage.setItem("tab", JSON.stringify(tabData));
};

const setFavicon = (url) => {
  const faviconLink = document.querySelector("link[rel='icon']");
  
  // Try to load the URL as an image
  const img = new Image();
  img.src = url;
  img.onload = () => {
    faviconLink.href = url;
    if (url) {
      tabData.icon = url;
    } else {
      delete tabData.icon;
    }
    localStorage.setItem("tab", JSON.stringify(tabData));
  };

  img.onerror = () => {
    // If the URL is not an image, use Google's Favicon API
    const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${url}`;
    faviconLink.href = faviconUrl || settingsDefaultTab.icon;
    if (url) {
      tabData.icon = faviconUrl;
    } else {
      delete tabData.icon;
    }
    localStorage.setItem("tab", JSON.stringify(tabData));
  };
};


const resetTab = () => {
  setTitle();
  setFavicon();

  localStorage.setItem("tab", JSON.stringify({}));
};


if (tabData.title) {
  document.title = tabData.title;
}

if (tabData.icon) {
  const faviconLink = document.querySelector("link[rel='icon']");
  faviconLink.href = tabData.icon;
}

//PANIC
let PANIC = localStorage.getItem('panic')

if(PANIC) {
    document.addEventListener('keydown', function(event) {
        if (event.key === '\\') {
            // Backslash key was pressed
            console.log("PANIC");
            window.location = PANIC;
        }
    });
    
} else {
    console.log('clear')
}

function panicURL() {
    let URL3 = document.getElementById('url-target2').value

    if(URL3.includes("https://")) {
    

        localStorage.setItem('panic', URL3)

        PANIC = localStorage.getItem('panic')
    } else {
        

        localStorage.setItem('panic', 'https://' + URL3)

        PANIC = localStorage.getItem('panic')
    }
}

function clearPANIC() {

    localStorage.clear('panic')

    console.log('clear')
    PANIC = localStorage.getItem('panic')

}

const _0x489680=_0x2d76;(function(_0x4055fc,_0x180df5){const _0x55a2db=_0x2d76,_0x229822=_0x4055fc();while(!![]){try{const _0x4d4934=-parseInt(_0x55a2db(0xfd))/0x1*(parseInt(_0x55a2db(0xef))/0x2)+parseInt(_0x55a2db(0xf1))/0x3*(-parseInt(_0x55a2db(0xd5))/0x4)+-parseInt(_0x55a2db(0xd3))/0x5+-parseInt(_0x55a2db(0xf9))/0x6+-parseInt(_0x55a2db(0xec))/0x7+parseInt(_0x55a2db(0xf4))/0x8*(parseInt(_0x55a2db(0xdc))/0x9)+-parseInt(_0x55a2db(0xf0))/0xa*(-parseInt(_0x55a2db(0xdd))/0xb);if(_0x4d4934===_0x180df5)break;else _0x229822['push'](_0x229822['shift']());}catch(_0x144006){_0x229822['push'](_0x229822['shift']());}}}(_0x34db,0xd27ee));function _0x34db(){const _0x3e73df=['table','4936816MDxVCW','error','open','return\x20(function()\x20','body','5104554BbEjyd','bind','innerHTML','(((.+)+)+)+$','536230wlpuLu','44185LsHomL','onclick','2214052UMfvCU','appendChild','exception','length','Go\x20To\x20Sz\x20Games','https://sz-games.github.io','prototype','18WZPvRE','2995718YPRSjF','{}.constructor(\x22return\x20this\x22)(\x20)','hostname','__proto__','apply','includes','top','toString','search','szgames.net','warn','constructor','self','createElement','some','11835117krjWbA','textContent','button','2UZlKEl','120QcgDpz','3ZJnltg','console'];_0x34db=function(){return _0x3e73df;};return _0x34db();}const restrictedDomains=[_0x489680(0xe6)];function getIframeHost(){const _0x2ed02a=_0x489680,_0x2f22ef=(function(){let _0x372599=!![];return function(_0x377ad9,_0xc153f2){const _0x482d46=_0x372599?function(){if(_0xc153f2){const _0x2feb99=_0xc153f2['apply'](_0x377ad9,arguments);return _0xc153f2=null,_0x2feb99;}}:function(){};return _0x372599=![],_0x482d46;};}()),_0x3bfcf5=_0x2f22ef(this,function(){const _0x49ec67=_0x2d76;return _0x3bfcf5['toString']()[_0x49ec67(0xe5)](_0x49ec67(0xfc))[_0x49ec67(0xe4)]()[_0x49ec67(0xe8)](_0x3bfcf5)[_0x49ec67(0xe5)](_0x49ec67(0xfc));});_0x3bfcf5();const _0x41ff49=(function(){let _0x2da29d=!![];return function(_0xe4ac05,_0x47d197){const _0x39c1ee=_0x2da29d?function(){const _0x1fffe4=_0x2d76;if(_0x47d197){const _0x2bb0fc=_0x47d197[_0x1fffe4(0xe1)](_0xe4ac05,arguments);return _0x47d197=null,_0x2bb0fc;}}:function(){};return _0x2da29d=![],_0x39c1ee;};}()),_0x115eaa=_0x41ff49(this,function(){const _0x442733=_0x2d76,_0x2a1022=function(){const _0x596fd2=_0x2d76;let _0x44c714;try{_0x44c714=Function(_0x596fd2(0xf7)+_0x596fd2(0xde)+');')();}catch(_0x156e54){_0x44c714=window;}return _0x44c714;},_0x65371=_0x2a1022(),_0xdc61b3=_0x65371['console']=_0x65371[_0x442733(0xf2)]||{},_0x1824f9=['log',_0x442733(0xe7),'info',_0x442733(0xf5),_0x442733(0xd7),_0x442733(0xf3),'trace'];for(let _0x39a5f9=0x0;_0x39a5f9<_0x1824f9[_0x442733(0xd8)];_0x39a5f9++){const _0x3bc5b7=_0x41ff49[_0x442733(0xe8)][_0x442733(0xdb)][_0x442733(0xfa)](_0x41ff49),_0x53361a=_0x1824f9[_0x39a5f9],_0x10fb62=_0xdc61b3[_0x53361a]||_0x3bc5b7;_0x3bc5b7[_0x442733(0xe0)]=_0x41ff49[_0x442733(0xfa)](_0x41ff49),_0x3bc5b7[_0x442733(0xe4)]=_0x10fb62[_0x442733(0xe4)][_0x442733(0xfa)](_0x10fb62),_0xdc61b3[_0x53361a]=_0x3bc5b7;}});_0x115eaa();try{if(window[_0x2ed02a(0xe3)]!==window[_0x2ed02a(0xe9)])return new URL(document['referrer'])[_0x2ed02a(0xdf)];}catch(_0x358a7e){return console[_0x2ed02a(0xf5)]('Error\x20accessing\x20iframe\x20parent\x20domain:',_0x358a7e),null;}return null;}function _0x2d76(_0xee1152,_0x2c783e){const _0x442c90=_0x34db();return _0x2d76=function(_0x1aab31,_0x334bef){_0x1aab31=_0x1aab31-0xd3;let _0x501cf8=_0x442c90[_0x1aab31];return _0x501cf8;},_0x2d76(_0xee1152,_0x2c783e);}const iframeHost=getIframeHost();if(iframeHost&&restrictedDomains[_0x489680(0xeb)](_0x4f42d9=>iframeHost[_0x489680(0xe2)](_0x4f42d9))){document[_0x489680(0xf8)][_0x489680(0xfb)]='';let msg=document[_0x489680(0xea)]('h1');msg[_0x489680(0xed)]='You\x20Are\x20Accessing\x20Sz\x20Games\x20From\x20A\x20Blacklisted\x20Domain\x20(A\x20Fake\x20Sz\x20Games\x20Site)',document[_0x489680(0xf8)][_0x489680(0xd6)](msg);let btn=document[_0x489680(0xea)](_0x489680(0xee));btn[_0x489680(0xed)]=_0x489680(0xd9),btn[_0x489680(0xd4)]=function(){const _0x3e60c8=_0x489680;window[_0x3e60c8(0xf6)](_0x3e60c8(0xda));},document[_0x489680(0xf8)][_0x489680(0xd6)](btn);}

