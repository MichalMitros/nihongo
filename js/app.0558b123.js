(function(e){function t(t){for(var n,s,r=t[0],l=t[1],c=t[2],v=0,y=[];v<r.length;v++)s=r[v],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&y.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(y.length)y.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/nihongo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0b78":function(e,t,a){},"0b8c":function(e,t,a){"use strict";var n=a("0b78"),i=a.n(n);i.a},1972:function(e,t){var a=[{part:1,kanji:"人",on:["ジン","ニン klasyfikator osób"],kun:["ひと człowiek"]},{part:1,kanji:"本",on:["ホン książka, kl. długich przedmiotów"],kun:["もと podstawa"]},{part:1,kanji:"日",on:["ジン","ニン klasyfikator osób"],kun:["ひと człowiek"]},{part:1,kanji:"月",on:["ジン","ニン klasyfikator osób"],kun:["ひと człowiek"]},{part:1,kanji:"火",on:["ジン","ニン klasyfikator osób"],kun:["ひと człowiek"]},{part:1,kanji:"水",on:["ジン","ニン klasyfikator osób"],kun:["ひと człowiek"]}],n=[1,2,3,4,5];e.exports.kanji=a,e.exports.activeSets=n},"1a93":function(e,t,a){},"21bb":function(e,t,a){"use strict";var n=a("d63f"),i=a.n(n);i.a},"3e75":function(e,t,a){"use strict";var n=a("69ee"),i=a.n(n);i.a},"514b":function(e,t,a){"use strict";var n=a("1a93"),i=a.n(n);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{to:"/",link:""}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Strona główna")])],1)],1),a("v-list-item",{attrs:{to:"kanji",link:""}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-ideogram-cjk")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Kanji")])],1)],1),a("v-list-item",{attrs:{to:"classifiers",link:""}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-numeric")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Klasyfikatory")])],1)],1),a("v-list-item",{attrs:{to:"dictionary",link:""}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-bookshelf")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Słowniczek")])],1)],1),a("v-list-item",{attrs:{to:"tests",link:""}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-file-edit")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Testy")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"indigo",dark:"","clipped-left":""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("日本語")])],1),a("v-content",{staticClass:"app_content"},[a("router-view")],1)],1)},o=[],s={name:"App",components:{},data:function(){return{drawer:!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}},r=s,l=(a("5c0b"),a("2877")),c=a("6544"),u=a.n(c),v=a("7496"),y=a("40dc"),k=a("5bc1"),d=a("a75b"),p=a("132d"),m=a("8860"),f=a("da13"),_=a("1800"),h=a("5d23"),b=a("f774"),w=a("2a7f"),z=Object(l["a"])(r,i,o,!1,null,null,null),j=z.exports;u()(z,{VApp:v["a"],VAppBar:y["a"],VAppBarNavIcon:k["a"],VContent:d["a"],VIcon:p["a"],VList:m["a"],VListItem:f["a"],VListItemAction:_["a"],VListItemContent:h["a"],VListItemTitle:h["b"],VNavigationDrawer:b["a"],VToolbarTitle:w["a"]});var g=a("8c4f"),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("span",{staticClass:"title"},[e._v("Witaj! ^_^")]),a("br"),a("span",{staticClass:"title"},[e._v("Co dzisiaj robimy?")]),a("v-col",{staticClass:"col"},[a("v-row",{staticClass:"row"},[a("v-btn",{staticClass:"btn",attrs:{"x-large":"",to:"/kanji",color:"primary"}},[a("v-icon",{staticClass:"icn",attrs:{medium:"",color:"white"}},[e._v(" mdi-ideogram-cjk ")]),e._v(" Kanji ")],1),a("v-btn",{staticClass:"btn",attrs:{"x-large":"",to:"/classifiers",color:"primary"}},[a("v-icon",{staticClass:"icn",attrs:{medium:"",color:"white"}},[e._v(" mdi-numeric ")]),e._v(" Klasyfikatory ")],1)],1),a("v-row",[a("v-btn",{staticClass:"btn",attrs:{"x-large":"",to:"/dictionary",color:"primary"}},[a("v-icon",{staticClass:"icn",attrs:{medium:"",color:"white"}},[e._v(" mdi-bookshelf ")]),e._v(" Słowniczek ")],1),a("v-btn",{staticClass:"btn",attrs:{"x-large":"",to:"/tests",color:"primary"}},[a("v-icon",{staticClass:"icn",attrs:{medium:"",color:"white"}},[e._v(" mdi-file-edit ")]),e._v(" Testy ")],1)],1)],1)],1)},x=[],I={name:"Home",components:{}},V=I,T=(a("21bb"),a("8336")),S=a("62ad"),K=a("0fd9"),O=Object(l["a"])(V,C,x,!1,null,null,null),$=O.exports;u()(O,{VBtn:T["a"],VCol:S["a"],VIcon:p["a"],VRow:K["a"]});var E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[a("v-icon",{staticClass:"icn",attrs:{large:"",color:"black"}},[e._v(" mdi-ideogram-cjk ")]),e._v(" Kanji ")],1),a("v-col",{staticClass:"col"},[a("v-row",{staticClass:"row"},[a("v-btn",{staticClass:"btn",attrs:{"x-large":"",color:"primary"},on:{click:function(t){e.showKanji=!0,e.showCompound=!1,e.$vuetify.goTo("#components",{duration:750})}}},[e._v(" Lista kanji ")]),a("v-btn",{staticClass:"btn",attrs:{"x-large":"",color:"primary"},on:{click:function(t){e.showKanji=!1,e.showCompound=!0,e.$vuetify.goTo("#components",{duration:750})}}},[e._v(" Złożenia ")])],1)],1),a("div",{attrs:{id:"components"}},[e.showKanji?a("KanjiComponent"):e._e(),e.showCompound?a("KanjiCompoundComponent"):e._e()],1)],1)},L=[],P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",e._l(e.kanji,(function(t,n){return a("div",{key:n},[0===n||t.part!=e.kanji[n-1].part?a("div",{staticClass:"kanjiPartDivider"},[a("h2",[e._v("Kanji "+e._s(t.part))])]):e._e(),a("h1",{staticClass:"kanjiSign"},[e._v(e._s(n+1)+". "+e._s(t.kanji))]),a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("ON-YOMI")]),a("th",{staticClass:"text-left"},[e._v("KUN-YOMI")])])]),t.on.length>t.kun.length?a("tbody",e._l(t.on,(function(n,i){return a("tr",{key:i},[a("td",[e._v(e._s(n))]),a("td",[i<t.kun.length?a("span",[e._v(e._s(t.kun[i]))]):e._e()])])})),0):a("tbody",e._l(t.kun,(function(n,i){return a("tr",{key:i},[a("td",[i<t.on.length?a("span",[e._v(e._s(t.on[i]))]):e._e()]),a("td",[e._v(e._s(n))])])})),0)])],1)})),0)},B=[],A=a("1972"),R={name:"KanjiComponent",data:function(){return{kanji:A["kanji"]}}},M=R,D=(a("0b8c"),a("a523")),H=a("1f4f"),W=Object(l["a"])(M,P,B,!1,null,null,null),F=W.exports;u()(W,{VContainer:D["a"],VSimpleTable:H["a"]});var Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[e._v(" TODO: implement... ")])},N=[],J={name:"KanjiCompoundsComponent",data:function(){return{}},mounted:function(){}},Y=J,U=Object(l["a"])(Y,Z,N,!1,null,null,null),q=U.exports;u()(U,{VContainer:D["a"]});var G={name:"Kanji",components:{KanjiComponent:F,KanjiCompoundComponent:q},data:function(){return{showKanji:!1,showCompound:!1}},methods:{}},Q=G,X=(a("514b"),Object(l["a"])(Q,E,L,!1,null,null,null)),ee=X.exports;u()(X,{VBtn:T["a"],VCol:S["a"],VIcon:p["a"],VRow:K["a"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h1",[a("v-icon",{staticClass:"icn",attrs:{large:"",color:"black"}},[e._v(" mdi-numeric ")]),e._v(" Klasyfikatory ")],1),a("v-container",{attrs:{fluid:""}},[a("v-data-iterator",{attrs:{items:e.classifiers,"item-key":"classifier","hide-default-footer":""}},[[a("v-switch",{staticClass:"pl-4 mt-0",attrs:{label:"Liczebniki"},on:{change:function(t){e.expandCards=!e.expandCards}}}),a("v-row",e._l(e.classifiers,(function(t){return a("v-col",{key:t.classifier,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-card",[a("v-card-title",[a("h4",[e._v(e._s(t.classifier))])]),a("v-card-subtitle",[a("h4",[a("span",[e._v(e._s(t.meaning))])])]),a("v-divider"),e.expandCards?a("v-list",{attrs:{dense:""}},e._l(t.counters,(function(t){return a("v-list-item",{key:t},[a("v-list-item-content",["*"!=t.charAt(0)?a("b",[e._v(e._s(t))]):e._e(),"*"==t.charAt(0)?a("b",[a("u",[e._v(e._s(t.substring(1)))])]):e._e()])],1)})),1):e._e()],1)],1)})),1)]],2)],1),e.expandCards?a("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"pink"},on:{click:function(t){return e.$vuetify.goTo(-9999,{duration:750})}}},[a("v-icon",[e._v("mdi-chevron-up")])],1):e._e()],1)},ae=[],ne=a("bee3"),ie={name:"Classifiers",components:{},data:function(){return{expandCards:!1,classifiers:ne["classifiers"]}}},oe=ie,se=a("b0af"),re=a("99d9"),le=a("c377"),ce=a("ce7e"),ue=a("b73d"),ve=Object(l["a"])(oe,te,ae,!1,null,null,null),ye=ve.exports;u()(ve,{VBtn:T["a"],VCard:se["a"],VCardSubtitle:re["a"],VCardTitle:re["b"],VCol:S["a"],VContainer:D["a"],VDataIterator:le["a"],VDivider:ce["a"],VIcon:p["a"],VList:m["a"],VListItem:f["a"],VListItemContent:h["a"],VRow:K["a"],VSwitch:ue["a"]});var ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[a("v-icon",{staticClass:"icn",attrs:{large:"",color:"black"}},[e._v(" mdi-bookshelf ")]),e._v(" Słowniczek ")],1),a("v-btn",{staticClass:"categories",attrs:{large:"",to:"categories",color:"primary"}},[e._v(" Kategorie ")]),a("div",{staticClass:"search_field"},[a("v-text-field",{attrs:{outlined:"",label:"Szukana fraza","append-icon":"mdi-magnify"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchedSentence,callback:function(t){e.searchedSentence=t},expression:"searchedSentence"}})],1),e.results&&e.results.length>0?a("div",[a("h3",[e._v("Ilość wyników wyszukiwania: "+e._s(e.results.length))]),a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Kana")]),a("th",{staticClass:"text-left"},[e._v("Kanji")]),a("th",{staticClass:"text-left"},[e._v("Tłumaczenie")])])]),a("tbody",e._l(e.results,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.key))]),a("td",[t.kanji?a("div",[e._v(e._s(t.kanji))]):e._e()]),a("td",[t.comment?a("span",[e._v(" "+e._s(t.comment)+" ")]):e._e(),e._v(" "+e._s(t.value)+" "),t.alternatives?a("span",[e._v(" [ "),e._l(t.alternatives,(function(t){return a("span",{key:t},[e._v(e._s(t)+"; ")])})),e._v("] ")],2):e._e()])])})),0)])],1):e._e(),e.notFound?a("div",[a("h2",[e._v("Brak wyników.")])]):e._e(),!e.notFound&&e.results.length>0?a("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"pink"},on:{click:function(t){return e.$vuetify.goTo(-9999,{duration:750})}}},[a("v-icon",[e._v("mdi-chevron-up")])],1):e._e()],1)},de=[],pe=(a("4160"),a("fb6a"),a("ac1f"),a("841c"),a("159b"),a("7cba")),me={name:"Dictionary",components:{},data:function(){return{searchedSentence:"",results:[],notFound:!1}},methods:{search:function(){var e=this;this.results=[],this.searchedSentence.length>0&&(" "==this.searchedSentence.charAt(this.searchedSentence.length-1)&&(this.searchedSentence=this.searchedSentence.slice(0,this.searchedSentence.length-1)),pe["dictionary"].forEach((function(t){t.forEach((function(t){(t.key.toLowerCase().search(e.searchedSentence.toLowerCase())>-1||t.value.toLowerCase().search(e.searchedSentence.toLowerCase())>-1||void 0!==t.kanji&&t.kanji.length>0&&t.kanji.toLowerCase().search(e.searchedSentence.toLowerCase())>-1)&&e.results.push(t)}))})),0===this.results.length?this.notFound=!0:(this.notFound=!1,this.results.sort((function(e,t){return e.value.toLowerCase().localeCompare(t.value.toLowerCase())}))))}}},fe=me,_e=(a("3e75"),a("8654")),he=Object(l["a"])(fe,ke,de,!1,null,null,null),be=he.exports;u()(he,{VBtn:T["a"],VIcon:p["a"],VSimpleTable:H["a"],VTextField:_e["a"]});var we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[a("v-icon",{staticClass:"icn",attrs:{large:"",color:"black"}},[e._v(" mdi-file-edit ")]),e._v(" Testy ")],1),e._v(" TODO: implement... ")])},ze=[],je={},ge=Object(l["a"])(je,we,ze,!1,null,null,null),Ce=ge.exports;u()(ge,{VIcon:p["a"]});var xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-btn",{staticClass:"mb-4",attrs:{large:"",color:"black",text:"",to:"/dictionary"}},[a("v-icon",{attrs:{color:"black"}},[e._v("mdi-arrow-left")]),e._v(" Powrót ")],1),a("h2",[e._v(" Kategorie: ")]),a("v-col",{staticClass:"col mb-12"},[a("v-row",{staticClass:"row"},[a("v-btn",{staticClass:"btn",attrs:{"x-large":"",color:"primary"},on:{click:function(t){e.showAll(),e.$vuetify.goTo("#res",{duration:750})}}},[e._v(" Wszystkie ")]),a("v-btn",{staticClass:"btn",attrs:{"x-large":"",color:"primary"},on:{click:function(t){e.showIndex=0,e.$vuetify.goTo("#res",{duration:750})}}},[e._v(" Czasowniki ")])],1),a("v-row",[a("v-btn",{staticClass:"btn",attrs:{"x-large":"",color:"primary"},on:{click:function(t){e.showIndex=1,e.$vuetify.goTo("#res",{duration:750})}}},[e._v(" い-przymiotniki ")]),a("v-btn",{staticClass:"btn",attrs:{"x-large":"",color:"primary"},on:{click:function(t){e.showIndex=2,e.$vuetify.goTo("#res",{duration:750})}}},[e._v(" な-przymiotniki ")])],1),a("v-row",[a("v-btn",{staticClass:"btn",attrs:{"x-large":"",color:"primary"},on:{click:function(t){e.showIndex=3,e.$vuetify.goTo("#res",{duration:750})}}},[e._v(" Czas/częstotliwości ")]),a("v-btn",{staticClass:"btn",attrs:{"x-large":"",color:"primary"},on:{click:function(t){e.showIndex=4,e.$vuetify.goTo("#res",{duration:750})}}},[e._v(" Przysłówki ")])],1),a("v-row",[a("v-btn",{staticClass:"btn",attrs:{"x-large":"",color:"primary"},on:{click:function(t){e.showIndex=5,e.$vuetify.goTo("#res",{duration:750})}}},[e._v(" Opis położenia ")]),a("v-btn",{staticClass:"btn",attrs:{"x-large":"",color:"primary"},on:{click:function(t){e.showIndex=6,e.$vuetify.goTo("#res",{duration:750})}}},[e._v(" W sklepie/restauracji ")])],1),a("v-row",[a("v-btn",{staticClass:"btn",attrs:{"x-large":"",color:"primary"},on:{click:function(t){e.showIndex=7,e.$vuetify.goTo("#res",{duration:750})}}},[e._v(" Dni tygodnia ")]),a("v-btn",{staticClass:"btn",attrs:{"x-large":"",color:"primary"},on:{click:function(t){e.showFamily(),e.$vuetify.goTo("#res",{duration:750})}}},[e._v(" Rodzina ")])],1)],1),a("div",{attrs:{id:"res"}}),-1!==e.showIndex?a("div",{staticClass:"mb-12"},[-2===e.showIndex?a("div",[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Kana")]),a("th",{staticClass:"text-left"},[e._v("Kanji")]),a("th",{staticClass:"text-left"},[e._v("Tłumaczenie")])])]),a("tbody",e._l(e.allWords,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.key))]),a("td",[t.kanji?a("div",[e._v(e._s(t.kanji))]):e._e()]),a("td",[t.comment?a("span",[e._v(" "+e._s(t.comment)+" ")]):e._e(),e._v(" "+e._s(t.value)+" "),t.alternatives?a("span",[e._v(" [ "),e._l(t.alternatives,(function(t){return a("span",{key:t},[e._v(e._s(t)+"; ")])})),e._v("] ")],2):e._e()])])})),0)])],1):e._e(),0===e.showIndex?a("div",[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Hiragana")]),a("th",{staticClass:"text-left"},[e._v("Tłumaczenie")])])]),a("tbody",e._l(e.dictionary[e.showIndex],(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.key))]),a("td",[e._v(e._s(t.value))])])})),0)])],1):e._e(),1===e.showIndex?a("div",[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Hiragana")]),a("th",{staticClass:"text-left"},[e._v("Kanji")]),a("th",{staticClass:"text-left"},[e._v("Tłumaczenie")])])]),a("tbody",e._l(e.dictionary[e.showIndex],(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.key))]),a("td",[t.kanji?a("div",[e._v(e._s(t.kanji))]):e._e()]),a("td",[e._v(e._s(t.value))])])})),0)])],1):e._e(),2===e.showIndex?a("div",[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Hiragana")]),a("th",{staticClass:"text-left"},[e._v("Kanji")]),a("th",{staticClass:"text-left"},[e._v("Tłumaczenie")])])]),a("tbody",e._l(e.dictionary[e.showIndex],(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.key))]),a("td",[t.kanji?a("div",[e._v(e._s(t.kanji))]):e._e()]),a("td",[e._v(e._s(t.value))])])})),0)])],1):e._e(),3===e.showIndex?a("div",[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Kana")]),a("th",{staticClass:"text-left"},[e._v("Kanji")]),a("th",{staticClass:"text-left"},[e._v("Tłumaczenie")])])]),a("tbody",e._l(e.dictionary[e.showIndex],(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.key))]),a("td",[t.kanji?a("div",[e._v(e._s(t.kanji))]):e._e()]),a("td",[e._v(e._s(t.value))])])})),0)])],1):e._e(),4===e.showIndex?a("div",[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Hiragana")]),a("th",{staticClass:"text-left"},[e._v("Kanji")]),a("th",{staticClass:"text-left"},[e._v("Tłumaczenie")])])]),a("tbody",e._l(e.dictionary[e.showIndex],(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.key))]),a("td",[t.kanji?a("div",[e._v(e._s(t.kanji))]):e._e()]),a("td",[e._v(e._s(t.value))])])})),0)])],1):e._e(),5===e.showIndex?a("div",[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Hiragana")]),a("th",{staticClass:"text-left"},[e._v("Kanji")]),a("th",{staticClass:"text-left"},[e._v("Tłumaczenie")])])]),a("tbody",e._l(e.dictionary[e.showIndex],(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.key))]),a("td",[t.kanji?a("div",[e._v(e._s(t.kanji))]):e._e()]),a("td",[e._v(e._s(t.value))])])})),0)])],1):e._e(),6===e.showIndex?a("div",[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Hiragana")]),a("th",{staticClass:"text-left"},[e._v("Tłumaczenie")])])]),a("tbody",e._l(e.dictionary[e.showIndex],(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.key))]),a("td",[e._v(e._s(t.value))])])})),0)])],1):e._e(),7===e.showIndex?a("div",[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Hiragana")]),a("th",{staticClass:"text-left"},[e._v("Kanji")]),a("th",{staticClass:"text-left"},[e._v("Tłumaczenie")])])]),a("tbody",e._l(e.dictionary[e.showIndex],(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.key))]),a("td",[t.kanji?a("div",[e._v(e._s(t.kanji))]):e._e()]),a("td",[e._v(e._s(t.value))])])})),0)])],1):e._e(),8===e.showIndex?a("div",[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"}),a("th",{staticClass:"text-left"},[e._v("Moja")]),a("th",{staticClass:"text-left"},[e._v("Czyjaś")])])]),a("tbody",e._l(e.family,(function(t,n){return a("tr",{key:n},[a("td",[a("b",[e._v(e._s(t.key))])]),a("td",[e._v(e._s(t.value1))]),a("td",[e._v(e._s(t.value2))])])})),0)])],1):e._e()]):e._e(),-1!==e.showIndex?a("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"pink"},on:{click:function(t){return e.$vuetify.goTo(-9999,{duration:750})}}},[a("v-icon",[e._v("mdi-chevron-up")])],1):e._e()],1)},Ie=[],Ve={name:"Categories",components:{},data:function(){return{showIndex:-1,dictionary:pe["dictionary"],allWords:[],family:[]}},methods:{showAll:function(){var e=this;void 0!==this.allWords&&0!==this.allWords.length||(pe["dictionary"].forEach((function(t){t.forEach((function(t){e.allWords.push(t)}))})),this.allWords.sort((function(e,t){return e.value.localeCompare(t.value)}))),this.showIndex=-2},showFamily:function(){if(void 0===this.family||0===this.family.length)for(var e=0;e<pe["dictionary"][8].length;e+=2)this.family.push({key:pe["dictionary"][8][e].value,value1:pe["dictionary"][8][e].key,value2:pe["dictionary"][8][e+1].key});this.showIndex=8}}},Te=Ve,Se=(a("5d9b"),Object(l["a"])(Te,xe,Ie,!1,null,null,null)),Ke=Se.exports;u()(Se,{VBtn:T["a"],VCol:S["a"],VIcon:p["a"],VRow:K["a"],VSimpleTable:H["a"]});var Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-btn",{staticClass:"mb-4",attrs:{large:"",color:"black",text:""},on:{click:function(t){return e.goBack()}}},[a("v-icon",{attrs:{color:"black"}},[e._v("mdi-arrow-left")]),e._v(" Powrót ")],1),a("h3",[a("v-icon",{staticClass:"icn",attrs:{large:"",color:"black"}},[e._v(" mdi-format-list-checks ")]),e._v(" Zakres Kanji ")],1),a("v-container",{attrs:{fluid:""}},e._l(e.kanjiSets,(function(t){return a("v-checkbox",{key:t,attrs:{label:"Kanji "+t,value:t},on:{change:function(t){return e.save()}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})})),1)],1)},$e=[],Ee=(a("caad"),a("a9e3"),a("25eb"),a("2532"),a("1276"),{name:"Range",components:{},data:function(){return{kanjiSets:[],selected:[]}},methods:{goBack:function(){De.go(-1)},save:function(){this.selected.sort((function(e,t){return e>t})),sessionStorage.setItem("kanjisets",this.selected)}},mounted:function(){var e=this;A["kanji"].forEach((function(t){e.kanjiSets.includes(t.part)||e.kanjiSets.push(t.part)}));var t=sessionStorage.getItem("kanjisets").split(",");t.forEach((function(t){e.selected.push(Number.parseInt(t))}))}}),Le=Ee,Pe=a("ac7c"),Be=Object(l["a"])(Le,Oe,$e,!1,null,null,null),Ae=Be.exports;u()(Be,{VBtn:T["a"],VCheckbox:Pe["a"],VContainer:D["a"],VIcon:p["a"]}),n["a"].use(g["a"]);var Re=[{path:"/",name:"Home",component:$},{path:"/kanji",name:"Kanji",component:ee},{path:"/classifiers",name:"Classifiers",component:ye},{path:"/dictionary",name:"Dictionary",component:be},{path:"/tests",name:"Tests",component:Ce},{path:"/categories",name:"Categories",component:Ke},{path:"/range",name:"Range",component:Ae}],Me=new g["a"]({mode:"history",base:"/nihongo/",routes:Re}),De=Me,He=a("f309"),We=a("fcf4");n["a"].use(He["a"]);var Fe=new He["a"]({theme:{themes:{light:{primary:We["a"].indigo,secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"},dark:{primary:We["a"].indigo,secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}});n["a"].config.productionTip=!1,new n["a"]({router:De,vuetify:Fe,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("7694"),i=a.n(n);i.a},"5d9b":function(e,t,a){"use strict";var n=a("c1f8"),i=a.n(n);i.a},"69ee":function(e,t,a){},7694:function(e,t,a){},"7cba":function(e,t){var a=[[{key:"たべる",value:"jeść"},{key:"おきる",value:"wstawać"},{key:"ねる",value:"spać"},{key:"みる",value:"oglądać"},{key:"いく",value:"iść, jechać"},{key:"かえる",value:"wracać"},{key:"はなす",value:"rozmawiać, mówić"},{key:"かく",value:"pisać"},{key:"よむ",value:"czytać"},{key:"きく",value:"słuchać"},{key:"のむ",value:"pić"},{key:"かう",value:"kupować"},{key:"あう",value:"spotykać się"},{key:"とる",value:"robić (zdjęcia)"},{key:"まつ",value:"czekać"},{key:"わかる",value:"rozumieć"},{key:"つくる",value:"przygotowywać (posiłek)"},{key:"すう",value:"palić (papierosy)"},{key:"する",value:"robić"},{key:"べんきょうする",value:"uczyć się"},{key:"しゅくだいをする",value:"odrabiać pracę domową"},{key:"サッカーをする",value:"grać w piłkę"},{key:"しごとをする",value:"pracować"},{key:"かいものをする",value:"robić zakupy"},{key:"りょうりをつくる",value:"gotować"},{key:"(と)あう",value:"spotkać się z kimś"},{key:"(に)あう",value:"spotkać kogoś"},{key:"うたう",value:"śpiewać"},{key:"りょこう​をする",value:"podróżować"},{key:"りょこうにいく",value:"jechać w podróż"},{key:"でんわ​をする",value:"dzwonić"},{key:"そうじ​をする",value:"sprzątać"},{key:"うんどう​をする",value:"ćwiczyć"},{key:"りょうり​をする",value:"gotować"},{key:"はをみがく",value:"myć zęby"},{key:"おけしょうをする",value:"robić makijaż"},{key:"ひげをそる",value:"golić się"},{key:"ふくをきる",value:"ubierać się"},{key:"シャワーをおびる",value:"brać prysznic"},{key:"おふろにはいる",value:"kąpać się"},{key:"はなしをする",value:"rozmawiać"},{key:"いえをでる",value:"wychodzić z domu"},{key:"でかげる",value:"wychodzić z domu"},{key:"はじまる",value:"zaczynać się"},{key:"おわる",value:"kończyć się"},{key:"さんぽする",value:"spacerować"},{key:"さんぽにいく",value:"iść na spacer"},{key:"のる",value:"wsiadać"},{key:"ならう",value:"uczyć się (trenować)"},{key:"アルバイトをする",value:"pracować dorywczo"},{key:"おくる",value:"wysyłać"},{key:"およぐ",value:"pływać"},{key:"おしえる",value:"uczyć (kogoś)"},{key:"(に) でる",value:"występować"},{key:"つかれる",value:"męczyć się"},{key:"ちゅうもんする",value:"zamawiać"},{key:"つく",value:"docierać"}],[{key:"いい",value:"dobry"},{key:"かっこいい",value:"super, przystojny"},{key:"やさしい",value:"miły, łagodny, łatwy"},{key:"あたらしい",value:"nowy"},{key:"ふるい",value:"stary (o rzeczach)"},{key:"おおきい",value:"duży"},{key:"ちいさい",value:"mały"},{key:"たかい",value:"drogi, wysoki"},{key:"やすい",value:"tani"},{key:"ひくい",value:"niski"},{key:"せがたかい",value:"wysoki (u ludzi)"},{key:"せがひくい",value:"niski (u ludzi)"},{key:"あたまがいい",value:"mądry"},{key:"おもしろい",value:"ciekawy"},{key:"つまらない",value:"nudny"},{key:"おいしい",value:"smaczny"},{key:"まずい",value:"niesmaczny"},{key:"はやい",value:"szybki, wczesny"},{key:"おそい",value:"powolny, późny"},{key:"むずかしい",value:"trudny"},{key:"あつい",value:"gorący"},{key:"さむい",value:"zimny (atm.)"},{key:"つめたい",value:"zimny (w dotyku)"},{key:"あたたかい",value:"ciepły"},{key:"いそがしい",value:"zajęty, zapracowany"},{key:"こわい",value:"straszny"},{key:"きたない",value:"brudny"},{key:"うるさい",value:"głośny, hałaśliwy"},{key:"あぶない",value:"niebezpieczny"},{key:"すごい",value:"niesamowity, super"},{key:"たのしい",value:"fajny, radosny"},{key:"かわいい",value:"śliczny, słodki"},{key:"ながい",value:"długi"},{key:"みじかい",value:"krótki"},{key:"きもちいい",value:"przyjemny (fizycznie)"},{key:"かなしい",value:"smutny"}],[{key:"きれい",value:"ładny, czysty"},{key:"しんせつ",value:"serdeczny, uprzejmy"},{key:"ゆうめい",value:"sławny, znany"},{key:"ひま",value:"wolny (czas)"},{key:"たいへん",value:"straszny, ciężki"},{key:"べんり",value:"użyteczny, wygodny"},{key:"ふべん",value:"niedogodny"},{key:"しずか",value:"cichy, spokojny"},{key:"にぎやか",value:"głośny, gwarny"},{key:"げんき",value:"zdrowy, energiczny"},{key:"たいせつ",value:"ważny, cenny"},{key:"かんたん",value:"łatwy, prosty"},{key:"すき",value:"ulubiony"}],[{key:"まいにち",value:"codziennie"},{key:"いつも",value:"zawsze"},{key:"たいてい",value:"zazwyczaj"},{key:"よく",value:"często"},{key:"ときどき",value:"czasami"},{key:"あまり",value:"rzadko, raczej nie"},{key:"ぜんぜん",value:"wcale nie"},{key:"きょう",value:"dzisiaj",kanji:"今日"},{key:"あした",value:"jutro"},{key:"あさって",value:"pojutrze"},{key:"いま",value:"teraz",kanji:"今"},{key:"いつ",value:"kiedy?"},{key:"あさ",value:"rano"},{key:"ひる",value:"w południe"},{key:"ごご",value:"popołudnie",kanji:"午後"},{key:"ゆうがた",value:"późne popołudnie"},{key:"よる",value:"wieczorem"},{key:"けさ",value:"dziś rano"},{key:"こんや",value:"dziś wieczorem"},{key:"まいしゅう",value:"co tydzień"},{key:"まいつき",value:"co miesiąc"},{key:"まいとし",value:"co rok"},{key:"まいばん",value:"co wieczór"},{key:"まいあさ",value:"codziennie rano"},{key:"タベ ゆうべ",value:"wczoraj wieczorem"},{key:"きのう",value:"wczoraj"},{key:"せんしゅう",value:"zeszły tydzień"},{key:"せんげつ",value:"zeszły miesiąc"},{key:"きょねん",value:"zeszły rok"},{key:"こんしゅう",value:"ten tydzień",kanji:"今週"},{key:"こんげつ",value:"ten miesiąc",kanji:"今月"},{key:"ことし",value:"ten rok",kanji:"今年"},{key:"らいしゅう",value:"przyszły tydzień"},{key:"らいげつ",value:"przyszły miesiąc"},{key:"らいねん",value:"przyszły rok"},{key:"そして",value:"następnie, później"},{key:"それから",value:"następnie, później"},{key:"そのあと",value:"następnie, później"},{key:"そのあと",value:"następnie, później"},{key:"そぐ",value:"zaraz, od razu"},{key:"はる",value:"wiosna"},{key:"なつ",value:"lato"},{key:"あき",value:"jesień"},{key:"ふゆ",value:"zima"},{key:"しゅうまつ",value:"weekend",kanji:"週末"}],[{key:"とても",value:"bardzo"},{key:"すごく",value:"bardzo"},{key:"すこし",value:"trochę"},{key:"ちょっと",value:"trochę"},{key:"あまり",value:"zbyt"},{key:"ぜんぜん",value:"wcale"}],[{key:"うえ",value:"na, nad",kanji:"上"},{key:"した",value:"pod",kanji:"下"},{key:"なか",value:"w",kanji:"中"},{key:"そと",value:"na zewnątrz",kanji:"外"},{key:"よこ",value:"obok"},{key:"そば",value:"przy"},{key:"となり",value:"obok, w sąsiedztwie"},{key:"みぎ",value:"po prawej",kanji:"右"},{key:"ひだり",value:"po lewej",kanji:"左"},{key:"まえ",value:"przed",kanji:"前"},{key:"うしろ",value:"za",kanji:"後"},{key:"あいだ",value:"pomiędzy",kanji:"間"},{key:"ちかく",value:"blisko"},{key:"むこう",value:"po drugiej stronie"},{key:"うら",value:"za (o budynkach)"},{key:"むかい",value:"naprzeciwko"}],[{key:"RZをください",value:"poproszę RZ"},{key:"いらっしゃいませ",value:"dzień dobry (do klienta)"},{key:"RZをどうぞ",value:"proszę, oto RZ"},{key:"あと",value:"a jeszcze"},{key:"も",value:"też"},{key:"かしこまりました",value:"oczywiście"},{key:"いじょうです",value:"to wszystko"},{key:"ぜんぶで",value:"za wszystko"},{key:"いじょうでよろしいですか",value:"czy to wszystko?"},{key:"いくら",value:"ile (koszt)"}],[{key:"げつようび",value:"poniedziałek",kanji:"月曜日"},{key:"かようび",value:"wtorek",kanji:"火曜日"},{key:"すいようび",value:"środa",kanji:"水曜日"},{key:"もくようび",value:"czwartek",kanji:"木曜日"},{key:"きんようび",value:"piątek",kanji:"金曜日"},{key:"どようび",value:"sobota",kanji:"土曜日"},{key:"にちようび",value:"niedziela",kanji:"日曜日"},{key:"なんようび",value:"który dzień tygodnia",kanji:"何曜日"}],[{key:"はは",value:"mama",comment:"moja"},{key:"おかあさん",value:"mama",comment:"czyjaś"}]];e.exports.dictionary=a},bee3:function(e,t){var a=[{classifier:"まい",meaning:"Przedmioty płaskie",counters:["いちまい","にまい","さんまい","よんまい","ごまい","ろくまい","ななまい","はちまい","きゅうまい","じゅうまい","なんまい？"]},{classifier:"だい",meaning:"Maszyny, urządzenia, duże meble",counters:["いちだい","にだい","さんだい","よんだい","ごだい","ろくだい","ななだい","はちだい","きゅうだい","じゅうだい","なんまい？"]},{classifier:"ほん",meaning:"Przedmioty podłużne, długie i cienkie",counters:["*いっぽん","にほん","*さんぼん","よんほん","ごほん","*ろっぽん","ななほん","*はっぽん","きゅうほん","*じゅっぽん","*なんぼん？"]}];e.exports.classifiers=a},c1f8:function(e,t,a){},d63f:function(e,t,a){}});
//# sourceMappingURL=app.0558b123.js.map