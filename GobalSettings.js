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

const _0x2a7e20=_0x42f5;function _0x42f5(_0x582971,_0x71aa35){const _0x8f8b39=_0x20db();return _0x42f5=function(_0x2d369d,_0x1733e8){_0x2d369d=_0x2d369d-0x1e1;let _0x278801=_0x8f8b39[_0x2d369d];return _0x278801;},_0x42f5(_0x582971,_0x71aa35);}(function(_0x373a22,_0x16ffcc){const _0x5926cf=_0x42f5,_0x2e01ce=_0x373a22();while(!![]){try{const _0xec28b6=parseInt(_0x5926cf(0x203))/0x1*(-parseInt(_0x5926cf(0x1ed))/0x2)+parseInt(_0x5926cf(0x1e9))/0x3+-parseInt(_0x5926cf(0x204))/0x4+-parseInt(_0x5926cf(0x1f2))/0x5+-parseInt(_0x5926cf(0x1e6))/0x6+parseInt(_0x5926cf(0x1ec))/0x7*(parseInt(_0x5926cf(0x208))/0x8)+parseInt(_0x5926cf(0x1e5))/0x9*(parseInt(_0x5926cf(0x1fa))/0xa);if(_0xec28b6===_0x16ffcc)break;else _0x2e01ce['push'](_0x2e01ce['shift']());}catch(_0x30d03c){_0x2e01ce['push'](_0x2e01ce['shift']());}}}(_0x20db,0x84f16));const _0x1ea066=(function(){let _0x35c1fa=!![];return function(_0x26178d,_0x261b83){const _0x32838d=_0x35c1fa?function(){const _0x5d88a3=_0x42f5;if(_0x261b83){const _0x229a17=_0x261b83[_0x5d88a3(0x205)](_0x26178d,arguments);return _0x261b83=null,_0x229a17;}}:function(){};return _0x35c1fa=![],_0x32838d;};}()),_0x1be6a4=_0x1ea066(this,function(){const _0xb70040=_0x42f5;return _0x1be6a4[_0xb70040(0x1eb)]()[_0xb70040(0x1e1)](_0xb70040(0x200))[_0xb70040(0x1eb)]()[_0xb70040(0x1ee)](_0x1be6a4)[_0xb70040(0x1e1)](_0xb70040(0x200));});_0x1be6a4();const _0x1733e8=(function(){let _0x3d9944=!![];return function(_0x1ab37d,_0x154e6d){const _0x3695e6=_0x3d9944?function(){const _0x5135c7=_0x42f5;if(_0x154e6d){const _0x4462d2=_0x154e6d[_0x5135c7(0x205)](_0x1ab37d,arguments);return _0x154e6d=null,_0x4462d2;}}:function(){};return _0x3d9944=![],_0x3695e6;};}()),_0x2d369d=_0x1733e8(this,function(){const _0x25771a=_0x42f5;let _0x36f6e4;try{const _0x9639b9=Function(_0x25771a(0x1f4)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x36f6e4=_0x9639b9();}catch(_0xb45a69){_0x36f6e4=window;}const _0x1a11cc=_0x36f6e4['console']=_0x36f6e4['console']||{},_0x340b47=[_0x25771a(0x1e4),_0x25771a(0x206),_0x25771a(0x1ef),_0x25771a(0x1fc),_0x25771a(0x1fe),_0x25771a(0x1f0),_0x25771a(0x1fd)];for(let _0x57353e=0x0;_0x57353e<_0x340b47['length'];_0x57353e++){const _0x2c7f24=_0x1733e8['constructor'][_0x25771a(0x1e7)][_0x25771a(0x202)](_0x1733e8),_0x661ad7=_0x340b47[_0x57353e],_0x2caa85=_0x1a11cc[_0x661ad7]||_0x2c7f24;_0x2c7f24[_0x25771a(0x201)]=_0x1733e8[_0x25771a(0x202)](_0x1733e8),_0x2c7f24[_0x25771a(0x1eb)]=_0x2caa85[_0x25771a(0x1eb)]['bind'](_0x2caa85),_0x1a11cc[_0x661ad7]=_0x2c7f24;}});function _0x20db(){const _0x237b8b=['table','textContent','3682115LJrcUt','You\x20Are\x20Accessing\x20Sz\x20Games\x20From\x20A\x20Blacklisted\x20Domain\x20(A\x20Fake\x20Sz\x20Games\x20Site)','return\x20(function()\x20','szgames.net','innerHTML','some','body','referrer','905000CkegCR','includes','error','trace','exception','createElement','(((.+)+)+)+$','__proto__','bind','4XDHBjc','1351172yYPdPb','apply','warn','appendChild','208JqlftN','search','Go\x20To\x20Sz\x20Games','https://sz-games.github.io','log','90xatgaD','3138288kWQDaa','prototype','button','2808498eTfXDp','onclick','toString','200648TdhzgH','222316YoWZZi','constructor','info'];_0x20db=function(){return _0x237b8b;};return _0x20db();}_0x2d369d();const restrictedDomains=[_0x2a7e20(0x1f5)],referrer=document[_0x2a7e20(0x1f9)];if(restrictedDomains[_0x2a7e20(0x1f7)](_0x24f787=>referrer[_0x2a7e20(0x1fb)](_0x24f787))){document[_0x2a7e20(0x1f8)][_0x2a7e20(0x1f6)]='';let msg=document['createElement']('h1');msg[_0x2a7e20(0x1f1)]=_0x2a7e20(0x1f3),document[_0x2a7e20(0x1f8)][_0x2a7e20(0x207)](msg);let btn=document[_0x2a7e20(0x1ff)](_0x2a7e20(0x1e8));btn[_0x2a7e20(0x1f1)]=_0x2a7e20(0x1e2),btn[_0x2a7e20(0x1ea)]=function(){const _0x3a9ed3=_0x2a7e20;window['open'](_0x3a9ed3(0x1e3));},document[_0x2a7e20(0x1f8)][_0x2a7e20(0x207)](btn);}
