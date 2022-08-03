(function(){var e={82:function(e,t,i){"use strict";var r=i(963),a=i(252);const s={class:"wrapper"},n={class:"router"};function o(e,t,i,r,o,l){const c=(0,a.up)("header-block"),d=(0,a.up)("router-view"),_=(0,a.up)("footer-block");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(c),(0,a._)("div",n,[(0,a.Wm)(d)]),(0,a.Wm)(_)])}var l=i(577),c=i.p+"img/Search.c521f0e8.svg",d=i.p+"img/Favorites.f8ed2323.svg",_=i.p+"img/Cart.379774ea.svg";const u=e=>((0,a.dD)("data-v-30ca5e3d"),e=e(),(0,a.Cn)(),e),m={class:"header"},p={class:"header__wrapper"},g={class:"header__container _container"},v={class:"header__body"},f={class:"header__main"},w=u((()=>(0,a._)("a",{href:"",class:"header__logo title"},"Funiro.",-1))),b={key:0,class:"header__menu menu"},h={class:"menu__body"},E={class:"menu__list"},y={class:"header__search search"},R={class:"search__body"},T={type:"button",class:"search__icon"},S=u((()=>(0,a._)("button",{type:"button",class:"search__btn"},[(0,a._)("img",{src:c,alt:"search"})],-1))),O=u((()=>(0,a._)("input",{type:"text",placeholder:"search",class:"search__input"},null,-1))),D=[S,O],C={class:"header__icons icons"},k=u((()=>(0,a._)("div",{class:"icons__favorites"},[(0,a._)("img",{src:d,alt:"favorites"})],-1))),I={class:"icons__cart"},M={class:"icons__cart-quantity"},x=u((()=>(0,a._)("div",null,[(0,a._)("img",{src:_,alt:"cart"})],-1)));function j(e,t,i,s,n,o){const d=(0,a.up)("router-link"),_=(0,a.up)("burger-menu"),u=(0,a.up)("header-menu-item-list");return(0,a.wg)(),(0,a.iD)("header",m,[(0,a._)("div",p,[(0,a._)("div",g,[(0,a._)("div",v,[(0,a._)("div",f,[(0,a.Wm)(d,{to:{name:"main"}},{default:(0,a.w5)((()=>[w])),_:1}),(0,a.Wm)(_),(0,a.Wm)(r.uT,{name:"fade"},{default:(0,a.w5)((()=>[e.WIDTH>767.98||e.ISBURGERMENUOPEN?((0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("nav",h,[(0,a._)("ul",E,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.MENULIST,((e,t)=>((0,a.wg)(),(0,a.j4)(u,{key:t,menu_item:e},null,8,["menu_item"])))),128))])])])):(0,a.kq)("",!0)])),_:1})]),(0,a._)("div",y,[(0,a._)("div",R,[(0,a._)("button",T,[(0,a._)("img",{src:c,alt:"search",onClick:t[0]||(t[0]=e=>n.isSearchOpen=!n.isSearchOpen)})]),(0,a._)("form",{action:"#",class:(0,l.C_)(["search__form",{search__form_active:n.isSearchOpen}])},D,2)])]),(0,a._)("div",C,[k,(0,a._)("div",I,[(0,a._)("span",M,(0,l.zw)(o.totalQuantity),1),(0,a.Wm)(d,{to:{name:"cart"}},{default:(0,a.w5)((()=>[x])),_:1})])])])])])])}var U=i.p+"img/Arrow-down.498487df.svg";const A={class:"menu__name-item"},N={href:"",class:"menu__link"},L={key:0,class:"menu__sub-list"},P={href:"#",class:"menu__sub-link"};function q(e,t,i,s,n,o){return(0,a.wg)(),(0,a.iD)("li",{class:"menu__item",onMouseleave:t[1]||(t[1]=e=>(n.isMenuListVisible=!1,n.isRotate=!1))},[(0,a._)("div",A,[(0,a._)("a",N,(0,l.zw)(i.menu_item.title),1),(0,a.wy)((0,a._)("button",{class:(0,l.C_)(["menu__btn",{menu__btnrotate:n.isRotate}])},[(0,a._)("img",{src:U,alt:"Arrow-down",onMousemove:t[0]||(t[0]=e=>(n.isMenuListVisible=!0,n.isRotate=!0))},null,32)],2),[[r.F8,i.menu_item.list]])]),(0,a.Wm)(r.W3,{name:"list"},{default:(0,a.w5)((()=>[n.isMenuListVisible?((0,a.wg)(),(0,a.iD)("ul",L,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.menu_item.list,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{class:"menu__sub-item",key:t},[(0,a._)("a",P,(0,l.zw)(e),1)])))),128))])):(0,a.kq)("",!0)])),_:1})],32)}var H={name:"HeaderMenuItemList",props:{menu_item:{type:Object,required:!0}},data(){return{isMenuListVisible:!1,isRotate:!1}},methods:{}},W=i(744);const B=(0,W.Z)(H,[["render",q],["__scopeId","data-v-33876090"]]);var F=B;const z=e=>((0,a.dD)("data-v-08d8bf46"),e=e(),(0,a.Cn)(),e),V=z((()=>(0,a._)("span",null,null,-1))),Z=[V];function G(e,t,i,r,s,n){return(0,a.wg)(),(0,a.iD)("div",{class:(0,l.C_)(["burgerMenu",{burgerMenu_active:s.isBurgerPush}]),onClick:t[0]||(t[0]=e=>(s.isBurgerPush=!s.isBurgerPush,n.burgerMenuOpen()))},Z,2)}var K=i(907),Y={data(){return{isBurgerPush:!1}},computed:{...(0,K.Se)(["ISBURGERMENUOPEN"])},methods:{...(0,K.nv)(["MAKE_BURGER_MENU_OPEN"]),burgerMenuOpen(){this.MAKE_BURGER_MENU_OPEN()}}};const $=(0,W.Z)(Y,[["render",G],["__scopeId","data-v-08d8bf46"]]);var Q=$,J={name:"HeaderBlock",components:{HeaderMenuItemList:F,BurgerMenu:Q},data(){return{isSearchOpen:!1}},methods:{},computed:{...(0,K.Se)(["WIDTH","HEIGHT","ISBURGERMENUOPEN","CART","MENULIST"]),totalQuantity(){return 0==this.CART.length?0:this.CART.map((e=>e.quantity)).reduce(((e,t)=>e+t),0)}}};const X=(0,W.Z)(J,[["render",j],["__scopeId","data-v-30ca5e3d"]]);var ee=X,te=i.p+"img/Send.aa10a082.svg";const ie=e=>((0,a.dD)("data-v-34f93c16"),e=e(),(0,a.Cn)(),e),re={class:"footer"},ae={class:"footer__container _container"},se={class:"footer__body"},ne=ie((()=>(0,a._)("div",{class:"footer__main"},[(0,a._)("a",{href:"#",class:"footer__logo footer__title title"},"Funiro."),(0,a._)("div",{class:"footer__text"}," Worldwide furniture store since 2020. We sell over 1000+ branded products on our website "),(0,a._)("div",{class:"footer__contacts"},[(0,a._)("a",{href:"",class:"footer__contacts-item footer__contacts-item_geo"}," Sawojajar Malang, Indonesia "),(0,a._)("a",{href:"tel:+62894563455",class:"footer__contacts-item footer__contacts-item_tel"}," +6289 456 3455 "),(0,a._)("a",{href:"https://www.funiro.com",targen:"_blank",class:"footer__contacts-item"}," www.funiro.com ")])],-1))),oe={class:"footer__menu menu"},le={class:"footer__subscribe subscribe"},ce=ie((()=>(0,a._)("div",{class:"subscribe__title footer__title title"}," Stay Updated ",-1))),de={action:"#",class:"subscribe__form"},_e=ie((()=>(0,a._)("img",{src:te,alt:"submit"},null,-1))),ue=[_e],me={key:0,class:"footer__error"};function pe(e,t,i,s,n,o){const l=(0,a.up)("footer-item-list");return(0,a.wg)(),(0,a.iD)("footer",re,[(0,a._)("div",ae,[(0,a._)("div",se,[ne,(0,a._)("div",oe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.FOOTERLIST,((e,t)=>((0,a.wg)(),(0,a.j4)(l,{key:t,menu_item:e},null,8,["menu_item"])))),128))]),(0,a._)("div",le,[ce,(0,a._)("form",de,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Enter your email",class:"subscribe__input","onUpdate:modelValue":t[0]||(t[0]=e=>n.inputValue=e)},null,512),[[r.nr,n.inputValue]]),(0,a._)("button",{type:"submit",class:"subscribe__submitbtn",onClick:t[1]||(t[1]=(0,r.iM)(((...e)=>o.emailTest&&o.emailTest(...e)),["prevent"])),onKeypress:t[2]||(t[2]=(...t)=>e.enter&&e.enter(...t))},ue,32)]),n.errorVisible?((0,a.wg)(),(0,a.iD)("div",me," Invalid email entered ")):(0,a.kq)("",!0)])])])])}const ge={class:"menu__column"},ve={class:"menu__title footer__title title"},fe={key:0,class:"menu__list"},we={href:"#",class:"menu__link"};function be(e,t,i,s,n,o){return(0,a.wg)(),(0,a.iD)("div",ge,[(0,a._)("div",ve,[(0,a._)("div",null,(0,l.zw)(i.menu_item.title),1),e.WIDTH<479.98?((0,a.wg)(),(0,a.iD)("button",{key:0,class:(0,l.C_)(["menu__btn",{menu__btnrotate:n.isRotate}])},[(0,a._)("img",{src:U,alt:"Arrow-down",onClick:t[0]||(t[0]=e=>(n.isRotate=!n.isRotate,n.isMenuListOpen=!n.isMenuListOpen))})],2)):(0,a.kq)("",!0)]),(0,a.Wm)(r.W3,{name:"list"},{default:(0,a.w5)((()=>[e.WIDTH>479.98||n.isMenuListOpen?((0,a.wg)(),(0,a.iD)("ul",fe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.menu_item.list,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{class:"menu__item",key:t},[(0,a._)("a",we,(0,l.zw)(e),1)])))),128))])):(0,a.kq)("",!0)])),_:1})])}var he={name:"FooterItemList",props:{menu_item:{type:Object,required:!0}},data(){return{isMenuListOpen:!1,isRotate:!1}},methods:{},computed:{...(0,K.Se)(["WIDTH","HEIGHT"])}};const Ee=(0,W.Z)(he,[["render",be],["__scopeId","data-v-0bbee0ab"]]);var ye=Ee,Re={name:"FooterBlock",components:{FooterItemList:ye},data(){return{inputValue:"",errorVisible:!1}},computed:{...(0,K.Se)(["FOOTERLIST"])},methods:{emailTest(){/^\w+([.-]?\w+)*@\w([.-]?\w+)*(\.\w{2,8})+$/.test(this.inputValue)?this.errorVisible=!1:this.errorVisible=!0}}};const Te=(0,W.Z)(Re,[["render",pe],["__scopeId","data-v-34f93c16"]]);var Se=Te,Oe={components:{HeaderBlock:ee,FooterBlock:Se},created(){window.addEventListener("resize",this.handleResize)},mounted(){setInterval((()=>{this.ibg()}),200),this.handleResize()},unmounted(){window.removeEventListener("resize",this.handleResize)},methods:{...(0,K.nv)(["MAKE_RESIZE_WIDTH","MAKE_RESIZE_HEIGHT"]),handleResize(){this.MAKE_RESIZE_WIDTH(),this.MAKE_RESIZE_HEIGHT()},ibg(){let e=document.querySelectorAll(".ibg");for(let t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}}};const De=(0,W.Z)(Oe,[["render",o]]);var Ce=De,ke=i(119);const Ie={class:"main"};function Me(e,t,i,r,s,n){const o=(0,a.up)("section-main-slider"),l=(0,a.up)("section-advantages"),c=(0,a.up)("section-catalog"),d=(0,a.up)("section-rooms-slider"),_=(0,a.up)("section-tips-slider");return(0,a.wg)(),(0,a.iD)("main",Ie,[(0,a.Wm)(o),(0,a.Wm)(l),(0,a.Wm)(c),(0,a.Wm)(d),(0,a.Wm)(_)])}const xe=e=>((0,a.dD)("data-v-1e0b3501"),e=e(),(0,a.Cn)(),e),je={class:"catalog"},Ue={class:"catalog__container _container"},Ae=xe((()=>(0,a._)("h2",{class:"catalog__title"},"Our Products",-1))),Ne={class:"catalog__list"};function Le(e,t,i,s,n,o){const l=(0,a.up)("catalog-item");return(0,a.wg)(),(0,a.iD)("section",je,[(0,a._)("div",Ue,[Ae,(0,a._)("div",Ne,[(0,a.Wm)(r.W3,{name:"list"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.products,(e=>((0,a.wg)(),(0,a.j4)(l,{key:e.id,product_item:e,onAddToCart:o.addToCart},null,8,["product_item","onAddToCart"])))),128))])),_:1})]),n.products.length<e.PRODUCTS.length?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"catalog__button btn",onClick:t[0]||(t[0]=(...e)=>o.loadMore&&o.loadMore(...e))}," Show More ")):(0,a.kq)("",!0)])])}var Pe=i.p+"img/Like.7446fba9.svg";const qe=e=>((0,a.dD)("data-v-aabd932a"),e=e(),(0,a.Cn)(),e),He={class:"catalog__item catalog-item"},We={href:"#",class:"catalog-item__image ibg"},Be=["src"],Fe={class:"catalog-item__body"},ze={class:"catalog-item__content"},Ve={class:"catalog-item__title"},Ze={class:"catalog-item__text"},Ge={class:"catalog-item__prices"},Ke={class:"catalog-item__price"},Ye={key:0,class:"catalog-item__price catalog-item__price_old"},$e={class:"catalog-item__actions"},Qe=qe((()=>(0,a._)("a",{class:"catalog-item__likebtn btn"},[(0,a._)("img",{src:Pe,alt:"like"}),(0,a._)("div",{href:""},"Like")],-1)));function Je(e,t,s,n,o,c){return(0,a.wg)(),(0,a.iD)("article",He,[(0,a._)("a",We,[(0,a._)("img",{src:i(104)("./"+s.product_item.image),alt:"image"},null,8,Be)]),(0,a._)("div",Fe,[(0,a._)("div",ze,[(0,a._)("h3",Ve,(0,l.zw)(s.product_item.title),1),(0,a._)("div",Ze,(0,l.zw)(s.product_item.text),1)]),(0,a._)("div",Ge,[(0,a._)("div",Ke,"Rp "+(0,l.zw)(s.product_item.price),1),s.product_item.priceOld?((0,a.wg)(),(0,a.iD)("div",Ye," Rp "+(0,l.zw)(s.product_item.priceOld),1)):(0,a.kq)("",!0)]),(0,a._)("div",$e,[(0,a._)("a",{href:"#",class:"catalog-item__addbtn btn",onClick:t[0]||(t[0]=(0,r.iM)(((...e)=>c.addToCart&&c.addToCart(...e)),["prevent"]))}," Add to cart "),Qe])])])}var Xe={name:"CatalogItem",props:{product_item:{type:Object,required:!0}},methods:{addToCart(){this.$emit("addToCart",this.product_item)}}};const et=(0,W.Z)(Xe,[["render",Je],["__scopeId","data-v-aabd932a"]]);var tt=et,it={name:"SectionCatalog",data(){return{products:[],num:0}},components:{CatalogItem:tt},methods:{...(0,K.nv)(["ADD_TO_CART"]),addToCart(e){this.ADD_TO_CART(e)},loadMore(){return this.num+=4,this.products.push(...this.PRODUCTS.slice(this.num,this.num+4))}},computed:{...(0,K.Se)(["PRODUCTS","CART"])},mounted(){this.products=this.PRODUCTS.slice(this.num,this.num+4)}};const rt=(0,W.Z)(it,[["render",Le],["__scopeId","data-v-1e0b3501"]]);var at=rt,st=i.p+"img/Arrow-slider-white.550c2f64.svg";const nt=e=>((0,a.dD)("data-v-7267a6c5"),e=e(),(0,a.Cn)(),e),ot={class:"main-slider"},lt={class:"main-slider__wrapper"},ct={class:"main-slider__container _container"},dt={class:"main-slider__body"},_t={class:"main-slider__content content"},ut=nt((()=>(0,a._)("div",{class:"content__title"}," High-Quality Furniture Just For You ",-1))),mt=nt((()=>(0,a._)("div",{class:"content__text"}," Our furniture is made from selected and best quality materials that are suitable for your dream home ",-1))),pt={class:"main-slider__slider slider-main"},gt=(0,a.uE)('<div class="slider-main__controls controls-slider-main" data-v-7267a6c5><div class="controls-slider-main__dotts" data-v-7267a6c5></div><div class="controls-slider-main__arrows slider-arrows" data-v-7267a6c5><button type="button" class="slider-arrow slider-arrow_prev" data-v-7267a6c5><img src="'+st+'" alt="arrow_prev" data-v-7267a6c5></button><button type="button" class="slider-arrow slider-arrow_next" data-v-7267a6c5><img src="'+st+'" alt="arrow_next" data-v-7267a6c5></button></div></div>',1),vt={class:"slider-main__slide"},ft={class:"slider-main__image ibg"},wt=["src"],bt={href:"#","data-swiper-parallax-opacity":"0","data-swiper-parallax-x":"-100%",class:"slider-main__content"},ht={class:"slider-main__title"},Et={class:"slider-main__text"},yt={class:"slider-main__price"};function Rt(e,t,s,n,o,c){const d=(0,a.up)("swiper-slide"),_=(0,a.up)("swiper");return(0,a.wg)(),(0,a.iD)("section",ot,[(0,a._)("div",lt,[(0,a._)("div",ct,[(0,a._)("div",dt,[(0,a._)("div",_t,[ut,mt,(0,a._)("a",{href:"",class:"content__button btn",onClick:t[0]||(t[0]=(0,r.iM)((()=>{}),["prevent"]))},"Shop Now")]),(0,a._)("div",pt,[gt,(0,a.Wm)(_,{class:"slider-main__body",slidesPerView:1,spaceBetween:32,parallax:!0,loop:!0,speed:800,loopAdditionalSlides:5,pagination:{el:".controls-slider-main__dotts",clickable:!0},navigation:{nextEl:".slider-main .slider-arrow_next",prevEl:".slider-main .slider-arrow_prev"},modules:n.modules},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.MAINSLIDER,(e=>((0,a.wg)(),(0,a.j4)(d,{key:e.id},{default:(0,a.w5)((()=>[(0,a._)("div",vt,[(0,a._)("div",ft,[(0,a._)("img",{src:i(85)("./"+e.image),alt:"Image"},null,8,wt)]),(0,a._)("a",bt,[(0,a._)("div",ht,(0,l.zw)(e.title),1),(0,a._)("div",Et,(0,l.zw)(e.text),1),(0,a._)("div",yt,(0,l.zw)(e.price),1)])])])),_:2},1024)))),128))])),_:1},8,["pagination","navigation","modules"])])])])])])}var Tt=i(181),St=i(911),Ot={name:"SectionMainSlider",components:{Swiper:Tt.tq,SwiperSlide:Tt.o5},computed:{...(0,K.Se)(["MAINSLIDER"])},setup(){return{modules:[St.tl,St.W_,St.VS]}}};const Dt=(0,W.Z)(Ot,[["render",Rt],["__scopeId","data-v-7267a6c5"]]);var Ct=Dt;const kt={class:"advantages"},It={class:"advantages__container _container"},Mt={class:"advantages__icon"},xt=["src"],jt={class:"advantages__title"},Ut={class:"advantages__text"};function At(e,t,r,s,n,o){return(0,a.wg)(),(0,a.iD)("section",kt,[(0,a._)("div",It,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.ADVANTAGES,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"advantages__item",key:e.id},[(0,a._)("div",Mt,[(0,a._)("img",{src:i(947)("./"+e.image),alt:"image"},null,8,xt)]),(0,a._)("h4",jt,(0,l.zw)(e.title),1),(0,a._)("div",Ut,(0,l.zw)(e.text),1)])))),128))])])}var Nt={name:"SectionAdvantages",computed:{...(0,K.Se)(["ADVANTAGES"])}};const Lt=(0,W.Z)(Nt,[["render",At],["__scopeId","data-v-e9835932"]]);var Pt=Lt,qt=i.p+"img/Arrow-white.90e23cd0.svg";const Ht=e=>((0,a.dD)("data-v-b652be44"),e=e(),(0,a.Cn)(),e),Wt={class:"rooms"},Bt={class:"rooms__container _container"},Ft={class:"rooms__body"},zt=Ht((()=>(0,a._)("h2",{class:"rooms__title"},"50+ Beautiful rooms inspiration",-1))),Vt=Ht((()=>(0,a._)("div",{class:"rooms__text"}," Our designer already made a lot of beautiful prototipe of rooms that inspire you ",-1))),Zt={class:"rooms__slider slider-rooms"},Gt={class:"slider-rooms__slide"},Kt={class:"slider-rooms__image ibg"},Yt=["src"],$t={href:"#",class:"slider-rooms__info","data-swiper-parallax-opacity":"0","data-swiper-parallax-y":"-100%"},Qt={class:"slider-rooms__content"},Jt={class:"slider-rooms__label label"},Xt={class:"label__number"},ei=Ht((()=>(0,a._)("div",{class:"label__line"},null,-1))),ti={class:"label__text"},ii={class:"slider-rooms__title"},ri=Ht((()=>(0,a._)("div",{class:"slider-rooms__arrow btn"},[(0,a._)("img",{src:qt,alt:"arrow"})],-1))),ai=(0,a.uE)('<div class="slider-rooms__arrows slider-arrows" data-v-b652be44><button type="button" class="slider-arrow slider-arrow_prev" data-v-b652be44><img src="'+st+'" alt="arrow_prev" data-v-b652be44></button><button type="button" class="slider-arrow slider-arrow_next" data-v-b652be44><img src="'+st+'" alt="arrow_next" data-v-b652be44></button></div><div class="slider-rooms__dotts" data-v-b652be44></div>',2);function si(e,t,s,n,o,c){const d=(0,a.up)("swiper-slide"),_=(0,a.up)("swiper");return(0,a.wg)(),(0,a.iD)("section",Wt,[(0,a._)("div",Bt,[(0,a._)("div",Ft,[zt,Vt,(0,a._)("a",{href:"",class:"rooms__button btn",onClick:t[0]||(t[0]=(0,r.iM)((()=>{}),["prevent"]))}," Explore More ")]),(0,a._)("div",Zt,[(0,a.Wm)(_,{class:"slider-rooms__body",observer:!0,observeParents:!0,slidesPerView:e.auto,spaceBetween:24,watchOverflow:!0,preloadImages:!1,parallax:!0,loop:!0,speed:800,loopAdditionalSlides:5,pagination:{el:".slider-rooms__dotts",clickable:!0},navigation:{nextEl:".slider-rooms .slider-arrow_next",prevEl:".slider-rooms .slider-arrow_prev"},modules:n.modules},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.ROOMSSLIDER,(e=>((0,a.wg)(),(0,a.j4)(d,{key:e.id},{default:(0,a.w5)((()=>[(0,a._)("div",Gt,[(0,a._)("div",Kt,[(0,a._)("img",{src:i(594)("./"+e.image),alt:"Image"},null,8,Yt)]),(0,a._)("a",$t,[(0,a._)("div",Qt,[(0,a._)("div",Jt,[(0,a._)("div",Xt,(0,l.zw)(e.number),1),ei,(0,a._)("div",ti,(0,l.zw)(e.text),1)]),(0,a._)("div",ii,(0,l.zw)(e.title),1)]),ri])])])),_:2},1024)))),128))])),_:1},8,["slidesPerView","pagination","navigation","modules"]),ai])])])}var ni={name:"SectionRoomsSlider",components:{Swiper:Tt.tq,SwiperSlide:Tt.o5},computed:{...(0,K.Se)(["ROOMSSLIDER"])},setup(){return{modules:[St.tl,St.W_,St.VS]}}};const oi=(0,W.Z)(ni,[["render",si],["__scopeId","data-v-b652be44"]]);var li=oi;const ci=e=>((0,a.dD)("data-v-13c91f91"),e=e(),(0,a.Cn)(),e),di={class:"tips"},_i={class:"tips__container _container"},ui=ci((()=>(0,a._)("h2",{class:"tips__title"},"Tips & Tricks",-1))),mi={class:"tips__slider slider-tips"},pi={class:"slider-tips__slide"},gi={class:"slider-tips__image ibg"},vi=["src"],fi={class:"slider-tips__content"},wi={class:"slider-tips__title"},bi={class:"slider-tips__text"},hi=(0,a.uE)('<div class="slider-tips__dotts" data-v-13c91f91></div><div class="slider-tips__arrows slider-arrows" data-v-13c91f91><button type="button" class="slider-arrow slider-arrow_prev" data-v-13c91f91><img src="'+st+'" alt="arrow_prev" data-v-13c91f91></button><button type="button" class="slider-arrow slider-arrow_next" data-v-13c91f91><img src="'+st+'" alt="arrow_next" data-v-13c91f91></button></div>',2);function Ei(e,t,r,s,n,o){const c=(0,a.up)("swiper-slide"),d=(0,a.up)("swiper");return(0,a.wg)(),(0,a.iD)("section",di,[(0,a._)("div",_i,[ui,(0,a._)("div",mi,[(0,a.Wm)(d,{class:"slider-tips__body",observer:!0,observeParents:!0,slidesPerView:3,spaceBetween:32,watchOverflow:!0,loop:!0,speed:800,pagination:{el:".slider-tips__dotts",clickable:!0},navigation:{nextEl:".slider-tips .slider-arrow_next",prevEl:".slider-tips .slider-arrow_prev"},modules:s.modules,breakpoints:{320:{slidesPerView:1.1,spaceBetween:15},768:{slidesPerView:2,spaceBetween:20},992:{slidesPerView:3,spaceBetween:32}}},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.TIPSSLIDER,(e=>((0,a.wg)(),(0,a.j4)(c,{key:e.id},{default:(0,a.w5)((()=>[(0,a._)("div",pi,[(0,a._)("a",gi,[(0,a._)("img",{src:i(53)("./"+e.image),alt:"Image"},null,8,vi)]),(0,a._)("div",fi,[(0,a._)("a",wi,(0,l.zw)(e.title),1),(0,a._)("div",bi,(0,l.zw)(e.text),1)])])])),_:2},1024)))),128))])),_:1},8,["pagination","navigation","modules","breakpoints"]),hi])])])}var yi={name:"SectionTipsSlider",components:{Swiper:Tt.tq,SwiperSlide:Tt.o5},computed:{...(0,K.Se)(["TIPSSLIDER"])},setup(){return{modules:[St.tl,St.W_]}}};const Ri=(0,W.Z)(yi,[["render",Ei],["__scopeId","data-v-13c91f91"]]);var Ti=Ri,Si={name:"MainBlock",components:{SectionCatalog:at,SectionMainSlider:Ct,SectionAdvantages:Pt,SectionRoomsSlider:li,SectionTipsSlider:Ti}};const Oi=(0,W.Z)(Si,[["render",Me],["__scopeId","data-v-53bc8fd2"]]);var Di=Oi;const Ci=e=>((0,a.dD)("data-v-1bb33fb5"),e=e(),(0,a.Cn)(),e),ki={class:"cart"},Ii={class:"cart__container _container"},Mi=Ci((()=>(0,a._)("h2",{class:"cart__title"},"Cart",-1))),xi={key:0,class:"title"},ji={class:"cart__total"},Ui=Ci((()=>(0,a._)("p",null,"Total:",-1)));function Ai(e,t,i,r,s,n){const o=(0,a.up)("cart-item");return(0,a.wg)(),(0,a.iD)("section",ki,[(0,a._)("div",Ii,[Mi,0===e.CART.length?((0,a.wg)(),(0,a.iD)("p",xi," No products in the cart... ")):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.CART,((e,t)=>((0,a.wg)(),(0,a.j4)(o,{key:e.id,cart_item_data:e,onDeleteFromCart:e=>n.deleteFromCart(t),onIncrement:e=>n.increment(t),onDecrement:e=>n.decrement(t)},null,8,["cart_item_data","onDeleteFromCart","onIncrement","onDecrement"])))),128)),(0,a._)("div",ji,[Ui,(0,a._)("p",null,(0,l.zw)(n.cartTotalCost),1)])])])}const Ni=e=>((0,a.dD)("data-v-14d6adfc"),e=e(),(0,a.Cn)(),e),Li={class:"cart__item cart-item"},Pi={href:"#",class:"cart-item__image"},qi=["src"],Hi={class:"cart-item__content"},Wi={class:"cart-item__body"},Bi={class:"cart-item__title"},Fi={class:"cart-item__text"},zi={class:"cart-item__prices"},Vi={class:"cart-item__price"},Zi={key:0,class:"cart-item__price cart-item__price_old"},Gi={class:"cart-item__quantity"},Ki=Ni((()=>(0,a._)("p",null,"Quantity:",-1)));function Yi(e,t,s,n,o,c){return(0,a.wg)(),(0,a.iD)("article",Li,[(0,a._)("a",Pi,[(0,a._)("img",{src:i(104)("./"+s.cart_item_data.image),alt:"image"},null,8,qi)]),(0,a._)("div",Hi,[(0,a._)("div",Wi,[(0,a._)("div",null,[(0,a._)("h3",Bi,(0,l.zw)(s.cart_item_data.title),1),(0,a._)("div",Fi,(0,l.zw)(s.cart_item_data.text),1)]),(0,a._)("div",zi,[(0,a._)("div",Vi,"Rp "+(0,l.zw)(s.cart_item_data.price),1),s.cart_item_data.priceOld?((0,a.wg)(),(0,a.iD)("div",Zi," Rp "+(0,l.zw)(s.cart_item_data.priceOld),1)):(0,a.kq)("",!0)])]),(0,a._)("div",Gi,[Ki,(0,a._)("div",null,[(0,a._)("span",{class:"cart-item__change-quantity",onClick:t[0]||(t[0]=(...e)=>c.decrement&&c.decrement(...e))},"-"),(0,a.Uk)(" "+(0,l.zw)(s.cart_item_data.quantity)+" ",1),(0,a._)("span",{class:"cart-item__change-quantity",onClick:t[1]||(t[1]=(...e)=>c.increment&&c.increment(...e))},"+")])]),(0,a._)("a",{class:"cart-item__deletebtn btn",onClick:t[2]||(t[2]=(0,r.iM)(((...e)=>c.deleteFromCart&&c.deleteFromCart(...e)),["prevent"]))}," Delete ")])])}var $i={props:{cart_item_data:{type:Object}},methods:{increment(){this.$emit("increment")},decrement(){this.$emit("decrement")},deleteFromCart(){this.$emit("deleteFromCart")}},mounted(){}};const Qi=(0,W.Z)($i,[["render",Yi],["__scopeId","data-v-14d6adfc"]]);var Ji=Qi,Xi={components:{CartItem:Ji},computed:{...(0,K.Se)(["CART"]),cartTotalCost(){let e=[];if(this.CART.length){for(let t of this.CART)e.push(+t.price.replace(/\./g,"")*t.quantity);return e=e.reduce(((e,t)=>e+t),0),e.toString().split(/(?=(?:\d{3})+$)/).join(".")}return 0}},methods:{...(0,K.nv)(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM"]),deleteFromCart(e){this.DELETE_FROM_CART(e)},increment(e){this.INCREMENT_CART_ITEM(e)},decrement(e){this.DECREMENT_CART_ITEM(e)}}};const er=(0,W.Z)(Xi,[["render",Ai],["__scopeId","data-v-1bb33fb5"]]);var tr=er;const ir=[{path:"/",name:"main",component:Di},{path:"/cart",name:"cart",component:tr}],rr=(0,ke.p7)({history:(0,ke.r5)(),routes:ir});var ar=rr,sr={ADD_TO_CART({commit:e},t){e("SET_CART",t)},MAKE_BURGER_MENU_OPEN({commit:e}){e("BURGER_MENU_OPEN")},MAKE_RESIZE_WIDTH({commit:e}){e("RESIZE_WIDTH")},MAKE_RESIZE_HEIGHT({commit:e}){e("RESIZE_HEIGHT")},DELETE_FROM_CART({commit:e},t){e("REMOVE_FROM_CART",t)},INCREMENT_CART_ITEM({commit:e},t){e("INCREMENT",t)},DECREMENT_CART_ITEM({commit:e},t){e("DECREMENT",t)}},nr={SET_CART(e,t){let i=!1;e.cart.length?(e.cart.map((function(e){e.id===t.id&&(i=!0,e.quantity++)})),i||(e.cart.push(t),t.quantity++)):(e.cart.push(t),t.quantity++)},BURGER_MENU_OPEN(e){e.isBurgerMenuOpen=!e.isBurgerMenuOpen},RESIZE_WIDTH(e){e.width=window.innerWidth},RESIZE_HEIGHT(e){e.height=window.innerHeight},REMOVE_FROM_CART(e,t){e.cart.splice(t,1)},INCREMENT(e,t){e.cart[t].quantity++},DECREMENT(e,t){e.cart[t].quantity>1&&e.cart[t].quantity--}},or={PRODUCTS(e){return e.products},CART(e){return e.cart},ISBURGERMENUOPEN(e){return e.isBurgerMenuOpen},WIDTH(e){return e.width},HEIGHT(e){return e.height},MENULIST(e){return e.menuList},MAINSLIDER(e){return e.mainSlider},ADVANTAGES(e){return e.advantages},ROOMSSLIDER(e){return e.roomsSlider},TIPSSLIDER(e){return e.tipsSlider},FOOTERLIST(e){return e.footerList}},lr=(0,K.MT)({state:{products:[{id:1,url:"#",title:"Syltherine",text:"Stylish cafe chair",labels:"",image:"1.jpg",price:"2.500.000",priceOld:"3.500.000",shareUrl:"",likeUrl:"",quantity:0},{id:2,url:"#",title:"Leviosa",text:"Stylish cafe chair",labels:"",image:"2.jpg",price:"2.500.000",priceOld:"",shareUrl:"",likeUrl:"",quantity:0},{id:3,url:"#",title:"Lolito",text:"Luxury big sofa",labels:"",image:"3.jpg",price:"7.000.000",priceOld:"14.000.000",shareUrl:"",likeUrl:"",quantity:0},{id:4,url:"#",title:"Respira",text:"Minimalist fan",labels:"",image:"4.jpg",price:"500.000",priceOld:"",shareUrl:"",likeUrl:"",quantity:0},{id:5,url:"#",title:"Grifo",text:"Night lamp",labels:"",image:"5.jpg",price:"1.500.000",priceOld:"",shareUrl:"",likeUrl:"",quantity:0},{id:6,url:"#",title:"Muggo",text:"Small mug",labels:[{type:"sale",value:"-50%"},{type:"new",value:"New"}],image:"6.jpg",price:"150.000",priceOld:"",shareUrl:"",likeUrl:"",quantity:0},{id:7,url:"#",title:"Pingky",text:"Cute bed set",labels:[{type:"sale",value:"-50%"}],image:"7.jpg",price:"7.000.000",priceOld:"14.500.000",shareUrl:"",likeUrl:"",quantity:0},{id:8,url:"#",title:"Potty",text:"Minimalist flower pot",labels:[{type:"new",value:"New"}],image:"8.jpg",price:"500.000",priceOld:"",shareUrl:"",likeUrl:"",quantity:0},{id:1,url:"#",title:"Syltherine",text:"Stylish cafe chair",labels:"",image:"1.jpg",price:"2.500.000",priceOld:"3.500.000",shareUrl:"",likeUrl:"",quantity:0},{id:2,url:"#",title:"Leviosa",text:"Stylish cafe chair",labels:"",image:"2.jpg",price:"2.500.000",priceOld:"",shareUrl:"",likeUrl:"",quantity:0},{id:3,url:"#",title:"Lolito",text:"Luxury big sofa",labels:"",image:"3.jpg",price:"7.000.000",priceOld:"14.000.000",shareUrl:"",likeUrl:"",quantity:0},{id:4,url:"#",title:"Respira",text:"Minimalist fan",labels:"",image:"4.jpg",price:"500.000",priceOld:"",shareUrl:"",likeUrl:"",quantity:0},{id:5,url:"#",title:"Grifo",text:"Night lamp",labels:"",image:"5.jpg",price:"1.500.000",priceOld:"",shareUrl:"",likeUrl:"",quantity:0},{id:6,url:"#",title:"Muggo",text:"Small mug",labels:[{type:"sale",value:"-50%"},{type:"new",value:"New"}],image:"6.jpg",price:"150.000",priceOld:"",shareUrl:"",likeUrl:"",quantity:0},{id:7,url:"#",title:"Pingky",text:"Cute bed set",labels:[{type:"sale",value:"-50%"}],image:"7.jpg",price:"7.000.000",priceOld:"14.500.000",shareUrl:"",likeUrl:"",quantity:0},{id:8,url:"#",title:"Potty",text:"Minimalist flower pot",labels:[{type:"new",value:"New"}],image:"8.jpg",price:"500.000",priceOld:"",shareUrl:"",likeUrl:"",quantity:0}],cart:[],isBurgerMenuOpen:!1,width:0,height:0,menuList:[{title:"Products",list:["Product 1","Product 2","Product 3","Product 4","Product 5","Product 6"]},{title:"Rooms",list:["Room 1","Room 2","Room 3"]},{title:"Inspirations"}],mainSlider:[{id:1,title:"Bohauss",text:"Luxury big sofa 2-seat",price:"Rp 17.000.000",image:"1.jpg"},{id:2,title:"Bohauss 2",text:"Luxury big sofa 2-seat",price:"Rp 17.000.000",image:"2.jpg"},{id:3,title:"Bohauss 3",text:"Luxury big sofa 2-seat",price:"Rp 17.000.000",image:"3.jpg"}],advantages:[{id:1,title:"High Quality",text:"Crafted from top materials",image:"1.svg"},{id:2,title:"Warrany Protection",text:"Over 2 years",image:"2.svg"},{id:3,title:"Free Shipping",text:"Order over 150 $",image:"3.svg"},{id:4,title:"24 / 7 Support",text:"Dedicated support",image:"4.svg"}],roomsSlider:[{id:1,number:"01",text:"Bed Room",title:"Inner Peace",image:"1.jpg"},{id:2,number:"02",text:"Bed Room",title:"Inner Peace",image:"2.jpg"},{id:3,number:"03",text:"Bed Room",title:"Inner Peace",image:"3.jpg"}],tipsSlider:[{id:1,title:"How to create a living room to love",text:"20 jan 2020",image:"1.jpg"},{id:2,title:"Solution for clean look working space",text:"10 jan 2020",image:"2.jpg"},{id:3,title:"Make your cooking activity more fun with good setup",text:"20 jan 2020",image:"3.jpg"}],footerList:[{title:"Menu",list:["Products","Rooms","Inspirations","About Us","Terms & Policy"]},{title:"Account",list:["My Account","Checkout","My Cart","My catalog"]},{title:"Stay Connected",list:["Facebook","Instagram","Twitter"]}]},getters:or,mutations:nr,actions:sr,modules:{}});(0,r.ri)(Ce).use(lr).use(ar).mount("#app")},947:function(e,t,i){var r={"./1.svg":540,"./2.svg":67,"./3.svg":554,"./4.svg":412};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=947},85:function(e,t,i){var r={"./1.jpg":397,"./2.jpg":484,"./3.jpg":378};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=85},104:function(e,t,i){var r={"./1.jpg":436,"./2.jpg":685,"./3.jpg":565,"./4.jpg":437,"./5.jpg":345,"./6.jpg":500,"./7.jpg":553,"./8.jpg":696};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=104},594:function(e,t,i){var r={"./1.jpg":258,"./2.jpg":469,"./3.jpg":210};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=594},53:function(e,t,i){var r={"./1.jpg":799,"./2.jpg":623,"./3.jpg":368};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=53},540:function(e,t,i){"use strict";e.exports=i.p+"img/1.efcd2e9f.svg"},67:function(e,t,i){"use strict";e.exports=i.p+"img/2.9e3e1caf.svg"},554:function(e,t,i){"use strict";e.exports=i.p+"img/3.2e0a2153.svg"},412:function(e,t,i){"use strict";e.exports=i.p+"img/4.73a78172.svg"},397:function(e,t,i){"use strict";e.exports=i.p+"img/1.9c52663a.jpg"},484:function(e,t,i){"use strict";e.exports=i.p+"img/2.9be6d4ef.jpg"},378:function(e,t,i){"use strict";e.exports=i.p+"img/3.ef11ccf3.jpg"},436:function(e,t,i){"use strict";e.exports=i.p+"img/1.1d58f5cb.jpg"},685:function(e,t,i){"use strict";e.exports=i.p+"img/2.a76d1dcc.jpg"},565:function(e,t,i){"use strict";e.exports=i.p+"img/3.7a8ddd19.jpg"},437:function(e,t,i){"use strict";e.exports=i.p+"img/4.1f098589.jpg"},345:function(e,t,i){"use strict";e.exports=i.p+"img/5.6999f83e.jpg"},500:function(e,t,i){"use strict";e.exports=i.p+"img/6.bbcd285c.jpg"},553:function(e,t,i){"use strict";e.exports=i.p+"img/7.bf87a32f.jpg"},696:function(e,t,i){"use strict";e.exports=i.p+"img/8.42bdff53.jpg"},258:function(e,t,i){"use strict";e.exports=i.p+"img/1.d4ac8475.jpg"},469:function(e,t,i){"use strict";e.exports=i.p+"img/2.c17e8102.jpg"},210:function(e,t,i){"use strict";e.exports=i.p+"img/3.20b1c40b.jpg"},799:function(e,t,i){"use strict";e.exports=i.p+"img/1.aa495db8.jpg"},623:function(e,t,i){"use strict";e.exports=i.p+"img/2.3ab6431a.jpg"},368:function(e,t,i){"use strict";e.exports=i.p+"img/3.154b5033.jpg"}},t={};function i(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,r,a,s){if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],s=e[d][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||n>=s)&&Object.keys(i.O).every((function(e){return i.O[e](r[l])}))?r.splice(l--,1):(o=!1,s<n&&(n=s));if(o){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,a,s]}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/funiro-shop/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,s,n=r[0],o=r[1],l=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(a in o)i.o(o,a)&&(i.m[a]=o[a]);if(l)var d=l(i)}for(t&&t(r);c<n.length;c++)s=n[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(d)},r=self["webpackChunkfurniture_shop"]=self["webpackChunkfurniture_shop"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(82)}));r=i.O(r)})();
//# sourceMappingURL=app.8013be8e.js.map