(function(){"use strict";var t={410:function(t,e,a){var r=a(6369),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HeaderView",{attrs:{msg:"내 운명의 고양이 찾기"}}),e("router-view")],1)},s=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header p-2 pt-4"},[e("h1",{on:{click:t.moveToHome}},[t._v(t._s(t.msg))])])},o=[],c=(a(7658),{name:"HeaderView",props:{msg:String},methods:{moveToHome(){this.$router.push("/")}}}),l=c,u=a(1001),d=(0,u.Z)(l,i,o,!1,null,null,null),h=d.exports,p={name:"HomeView",components:{HeaderView:h}},f=p,m=(0,u.Z)(f,n,s,!1,null,null,null),v=m.exports,_=a(2631),b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content container"},[e("h4",{staticClass:"my-4"},[t._v("당신의 운명의 고양이를 만나보세요!")]),e("a",{staticClass:"mb-4 btn btn-outline-dark",on:{click:t.getRandomNumber}},[t._v("새로운 고양이 보기")]),e("router-view")],1)},g=[],C={name:"ContentView",data(){return{randomNumber:-1,catDataSize:0,disabled:!0}},components:{},created(){this.$on("getCatDataSize",(t=>(console.log(t),this.setRandomNumber(t))))},methods:{setRandomNumber(t){console.log(t),this.catDataSize=t,!0===this.disabled&&(this.disabled=!1),this.getRandomNumber()},getRandomNumber(){console.log(this.catDataSize),this.randomNumber=Math.floor(Math.random()*this.catDataSize),console.log(this.randomNumber),this.$router.push({name:"detail",params:{idx:this.randomNumber}})}}},w=C,y=(0,u.Z)(w,b,g,!1,null,null,null),S=y.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container detail"},[e("h2",[t._v(t._s(t.curCat.name))]),e("div",{staticClass:"container text-center"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"cat-image col"},[e("img",{staticClass:"img-thumbnail",attrs:{src:t.curCat.image.url,alt:"cat"}})]),e("div",{staticClass:"cat-info col"},[e("table",{staticClass:"table table-borderless"},[e("tbody",[e("tr",[e("th",{attrs:{scope:"row"}},[t._v("묘종")]),e("th",[t._v(t._s(t.curCat.name))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("원산지")]),e("th",[t._v(t._s(t.curCat.origin))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("수명")]),e("th",[t._v(t._s(t.curCat.life_span)+"년")])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("애교")]),e("td",[t._v(t._s(t.getStars(t.curCat.affection_level)))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("그루밍 실력")]),e("th",[t._v(t._s(t.getStars(t.curCat.grooming)))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("친화력")]),e("th",[t._v(t._s(t.getStars(t.curCat.stranger_friendly)))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("지능")]),e("th",[t._v(t._s(t.getStars(t.curCat.intelligence)))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("털갈이")]),e("th",[t._v(t._s(t.getStars(t.curCat.shedding_level)))])])])]),e("div",{staticClass:"d-flex justify-content-around"},[e("router-link",{staticClass:"btn btn-outline-info",attrs:{to:{name:"photos",params:{breed:t.curCat.id}}}},[t._v("사진 더보기")])],1)])])])])},O=[],N={data(){return{API_KEY:"live_Sg1bFlOA8xFv2UNUnejFusKtGS0TI77zxsNMvVOthi406eOsiuNE21GUQ5yCyfAN",catData:[],curCat:""}},props:{idx:Number},created(){fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":this.API_KEY}}).then((t=>t.json())).then((t=>{this.catData=t})).then((()=>this.sendCatDataSize()))},methods:{sendCatDataSize(){console.log(this.catData.length),this.$parent.$emit("getCatDataSize",this.catData.length)},getStars(t){const e="⭐".repeat(t);return console.log(e),e}},watch:{idx(t){return this.curCat=this.catData[t]}}},D=N,j=(0,u.Z)(D,x,O,!1,null,null,null),k=j.exports,P=function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"mb-3"},[t._v(t._s(t.catData[0].breeds[0].name)+"의 사진모음")]),e("div",{staticClass:"container text-center"},[e("div",{staticClass:"row row-cols-3"},t._l(t.catData,(function(t){return e("div",{key:t.id,staticClass:"col"},[e("img",{staticClass:"img-fluid mb-3",attrs:{src:t.url,alt:t.id}})])})),0)])])},z=[],T={data(){return{API_KEY:"live_Sg1bFlOA8xFv2UNUnejFusKtGS0TI77zxsNMvVOthi406eOsiuNE21GUQ5yCyfAN",catData:[]}},created(){console.log(this.breed),fetch(`https://api.thecatapi.com/v1/images/search?limit=15&breed_ids=${this.breed}`,{headers:{"x-api-key":this.API_KEY}}).then((t=>t.json())).then((t=>{this.catData=t}))},props:{breed:String}},A=T,V=(0,u.Z)(A,P,z,!1,null,null,null),Z=V.exports;r["default"].use(_.ZP);const E=[{path:"/",name:"contentView",component:S,children:[{name:"detail",path:"detail/:idx",component:k,props:!0},{name:"photos",path:"photos/:breed",component:Z,props:!0}]}],F=new _.ZP({mode:"history",base:"/cat-api-project/",routes:E});var M=F,$=a(6882);a(7024);r["default"].config.productionTip=!1,r["default"].use($.ZPm),new r["default"]({router:M,render:t=>t(v)}).$mount("#app")}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,s){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],s=t[u][2];for(var o=!0,c=0;c<r.length;c++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[c])}))?r.splice(c--,1):(o=!1,s<i&&(i=s));if(o){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,s,i=r[0],o=r[1],c=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(c)var u=c(a)}for(e&&e(r);l<i.length;l++)s=i[l],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},r=self["webpackChunkcat_api_project"]=self["webpackChunkcat_api_project"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(410)}));r=a.O(r)})();
//# sourceMappingURL=app.97a51733.js.map