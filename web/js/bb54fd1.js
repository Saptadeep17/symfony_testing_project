/*
 HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);

/*
	Autonomy by TEMPLATED
    templated.co @templatedco
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
skel.init({
	prefix: 'css/style',
	resetCSS: true,
	boxModel: 'border',
	grid: {
		gutters: 50
	},
	breakpoints: {
		'mobile': {
			range: '-480',
			lockViewport: true,
			containers: 'fluid',
			grid: {
				collapse: true,
				gutters: 10
			}
		},
		'desktop': {
			range: '481-',
			containers: 1200
		},
		'1000px': {
			range: '481-1200',
			containers: 960
		}
	}
}, {
	panels: {
		panels: {
			navPanel: {
				breakpoints: 'mobile',
				position: 'left',
				style: 'reveal',
				size: '80%',
				html: '<div data-action="navList" data-args="nav"></div>'
			}
		},
		overlays: {
			titleBar: {
				breakpoints: 'mobile',
				position: 'top-left',
				height: 44,
				width: '100%',
				html: '<span class="toggle" data-action="togglePanel" data-args="navPanel"></span>' +
 '<span class="title" data-action="copyHTML" data-args="logo"></span>'
			}
		}
	}
	
	
});
/* skelJS v0.4.9 | (c) n33 | skeljs.org | MIT licensed */
skel.registerPlugin("panels",function(){var e="cache",t="activePanel",n="_skel_panels_close",r="pageWrapper",i="_skel_panels_translateOrigin",s="position",o="_skel_panels_resume",u="scrollTop",f="_skel_panels_translate",l="fixedWrapper",c="width",h="css",p="_skel_panels_suspend",d="originalEvent",v="config",m="_skel_panels_promote",g="stopPropagation",y="_skel_panels_demote",b="setTimeout",w="preventDefault",E="_skel_panels_resetForms",S="skel-panels-panel-position",x="left",T="height",N="_skel_panels_open",C="window",k="children",L=null,A="deviceType",O="_skel_panels_init",M="top",_="50%",D="scroll.lock",P="right",H="-webkit-tap-highlight-color",B="overflow-y",j="skel-panels-overlay-position",F="padding-bottom",I="z-index",q="vars",R="-webkit-overflow-scrolling",U="skel_panels_defaultWrapper",z='<div id="skel-panels-tmp-',W="recalcW",X="touches",V="-ms-autohiding-scrollbar",$="-webkit-",J="skel_panels_fixedWrapper",K="length",Q="bottom",G="registerLocation",Y="100%",Z=!1,et="orientationchange.lock",tt="_skel_panels_initializeCell",nt="isTouch",rt="overflow-x",it="attr",st="defaultWrapper",ot="-ms-overflow-style",ut="skel-panels-panel-",at="speed",ft="addClass",lt="iterate",ct="_skel_panels_expandCell",ht="#skel-panels-tmp-",pt="recalcH",dt="_skel_panels_scrollPos",vt="string",mt="auto",gt="rgba(0,0,0,0)",yt="-moz-",bt="touchstart.lock",wt="positions",Et="overlay",St=!0,xt="push",Tt="transformBreakpoints",Nt="visible",Ct="click",kt="resetScroll",Lt="initialized",At="unbind",Ot="-ms-",Mt="hidden",_t="appendTo",Dt="top-left",Pt="resetForms",Ht="unlockView",Bt="baseZIndex",jt="_skel_panels_xcss",Ft="resize.lock",It="touchstart",qt="click.lock",Rt="pointer",Ut="touchmove",zt="cell-size",Wt="overflow-",Xt="_zIndex",Vt="body",$t="-o-",Jt="0px",Kt="bind",Qt="relative",Gt="DOMReady",Yt="lockView",Zt="overlays",en="android",tn="find",nn="#",rn={config:{baseZIndex:1e4,useTransform:St,transformBreakpoints:L,speed:250,panels:{},overlays:{}},cache:{panels:{},overlays:{},body:L,window:L,pageWrapper:L,defaultWrapper:L,fixedWrapper:L,activePanel:L},eventType:Ct,positions:{panels:{top:[M,x],right:[M,P],bottom:[Q,x],left:[M,x]},overlays:{"top-left":{top:0,left:0},"top-right":{top:0,right:0},top:{top:0,left:_},"top-center":{top:0,left:_},"bottom-left":{bottom:0,left:0},"bottom-right":{bottom:0,right:0},bottom:{bottom:0,left:_},"bottom-center":{bottom:0,left:_},left:{top:_,left:0},"middle-left":{top:_,left:0},right:{top:_,right:0},"middle-right":{top:_,right:0}}},presets:{standard:{panels:{navPanel:{breakpoints:"mobile",position:x,style:xt,size:"80%",html:'<div data-action="navList" data-args="nav"></div>'}},overlays:{titleBar:{breakpoints:"mobile",position:Dt,width:Y,height:44,html:'<span class="toggle" data-action="togglePanel" data-args="navPanel"></span><span class="title" data-action="copyHTML" data-args="logo"></span>'}}}},defaults:{config:{panel:{breakpoints:"",position:L,style:L,size:"80%",html:"",resetScroll:St,resetForms:St,swipeToClose:St},overlay:{breakpoints:"",position:L,width:0,height:0,html:""}}},recalcW:function(e){var t=parseInt(e);return typeof e==vt&&e.charAt(e[K]-1)=="%"&&(t=Math.floor(jQuery(window)[c]()*(t/100))),t},recalcH:function(e){var t=parseInt(e);return typeof e==vt&&e.charAt(e[K]-1)=="%"&&(t=Math.floor(jQuery(window)[T]()*(t/100))),t},getHalf:function(e){var t=parseInt(e);return typeof e==vt&&e.charAt(e[K]-1)=="%"?Math.floor(t/2)+"%":Math.floor(t/2)+"px"},parseSuspend:function(e){var t=e.get(0);t[p]&&t[p]()},parseResume:function(e){var t=e.get(0);t[o]&&t[o]()},parseInit:function(r){var i,s,u=r.get(0),a=r[it]("data-action"),f=r[it]("data-args"),l,d;a&&f&&(f=f.split(","));switch(a){case"togglePanel":case"panelToggle":r[h](H,gt)[h]("cursor",Rt),i=function(r){r[w](),r[g]();if(rn[e][t])return rn[e][t][n](),Z;var i=jQuery(this),s=rn[e].panels[f[0]];s.is(":visible")?s[n]():s[N]()},rn._[q][A]==en||rn._[q][A]=="wp"?r[Kt](Ct,i):r[Kt](rn.eventType,i);break;case"navList":l=jQuery(nn+f[0]),i=l[tn]("a"),s=[],i.each(function(){var e=jQuery(this),t;t=Math.max(0,e.parents("li")[K]-1),s[xt]('<a class="link depth-'+t+'" href="'+e[it]("href")+'"><span class="indent-'+t+'"></span>'+e.text()+"</a>")}),s[K]>0&&r.html("<nav>"+s.join("")+"</nav>"),r[tn](".link")[h]("cursor",Rt)[h]("display","block");break;case"copyText":l=jQuery(nn+f[0]),r.html(l.text());break;case"copyHTML":l=jQuery(nn+f[0]),r.html(l.html());break;case"moveElementContents":l=jQuery(nn+f[0]),u[o]=function(){l[k]().each(function(){r.append(jQuery(this))})},u[p]=function(){r[k]().each(function(){l.append(jQuery(this))})},u[o]();break;case"moveElement":l=jQuery(nn+f[0]),u[o]=function(){jQuery(z+l[it]("id")+'" />').insertBefore(l),r.append(l)},u[p]=function(){jQuery(ht+l[it]("id")).replaceWith(l)},u[o]();break;case"moveCell":l=jQuery(nn+f[0]),d=jQuery(nn+f[1]),u[o]=function(){jQuery(z+l[it]("id")+'" />').insertBefore(l),r.append(l),l[h](c,mt),d&&d[ct]()},u[p]=function(){jQuery(ht+l[it]("id")).replaceWith(l),l[h](c,""),d&&d[h](c,"")},u[o]();break;default:}},lockView:function(i){rn[e][C][dt]=rn[e][C][u](),rn._[q][nt]&&rn[e][Vt][h](Wt+i,Mt),rn[e][r][Kt](bt,function(r){r[w](),r[g](),rn[e][t]&&rn[e][t][n]()}),rn[e][r][Kt](qt,function(r){r[w](),r[g](),rn[e][t]&&rn[e][t][n]()}),rn[e][r][Kt](D,function(r){r[w](),r[g](),rn[e][t]&&rn[e][t][n]()}),rn[e][C][Kt](et,function(r){rn[e][t]&&rn[e][t][n]()}),rn._[q][nt]||(rn[e][C][Kt](Ft,function(r){rn[e][t]&&rn[e][t][n]()}),rn[e][C][Kt](D,function(r){rn[e][t]&&rn[e][t][n]()}))},unlockView:function(t){rn._[q][nt]&&rn[e][Vt][h](Wt+t,Nt),rn[e][r][At](bt),rn[e][r][At](qt),rn[e][r][At](D),rn[e][C][At](et),rn._[q][nt]||(rn[e][C][At](Ft),rn[e][C][At](D))},resumeElement:function(t){var n=rn[e][t.type+"s"][t.id];n[tn]("*").each(function(){rn.parseResume(jQuery(this))})},suspendElement:function(t){var n=rn[e][t.type+"s"][t.id];n[i](),n[tn]("*").each(function(){rn.parseSuspend(jQuery(this))})},initElement:function(o){var a=o[v],p=jQuery(o.object),D;rn[e][o.type+"s"][o.id]=p,p[O](),p[tn]("*").each(function(){rn.parseInit(jQuery(this))});switch(o.type){case"panel":p[ft]("skel-panels-panel")[h](I,rn[v][Bt])[h](s,"fixed").hide(),p[tn]("a")[h](H,gt)[Kt]("click.skel-panels",function(r){var i=jQuery(this);if(rn[e][t]&&!i.hasClass("skel-panels-ignore")){r[w](),r[g]();var s=i[it]("href"),o=i[it]("target");rn[e][t][n](),i.hasClass("skel-panels-ignoreHref")||window[b](function(){o=="_blank"&&rn._[q][A]!="wp"?window.open(s):window.location.href=s},rn[v][at]+10)}}),rn._[q][A]=="ios"&&p[tn]("input,select,textarea").focus(function(n){var r=jQuery(this);n[w](),n[g](),window[b](function(){var n=rn[e][C][dt],i=rn[e][C][u]()-n;rn[e][C][u](n),rn[e][t][u](rn[e][t][u]()+i),r.hide(),window[b](function(){r.show()},0)},100)});switch(a[s]){case M:case Q:var F=a[s]==Q?"-":"";p[ft](ut+a[s]).data(S,a[s])[h](T,rn[pt](a.size))[u](0),rn._[q][nt]?p[h](B,"scroll")[h](ot,V)[h](R,"touch")[Kt](It,function(e){p._posY=e[d][X][0].pageY,p._posX=e[d][X][0].pageX})[Kt](Ut,function(e){var t=p._posX-e[d][X][0].pageX,n=p._posY-e[d][X][0].pageY,r=p.outerHeight(),i=p.get(0).scrollHeight-p[u]();if(p[u]()==0&&n<0||i>r-2&&i<r+2&&n>0)return Z}):p[h](B,mt);switch(a.style){case"reveal":case xt:default:p[N]=function(){p[m]()[u](0)[h](x,Jt)[h](a[s],"-"+rn[pt](a.size)+"px")[h](T,rn[pt](a.size))[h](c,Y).show(),a[kt]&&p[u](0),a[Pt]&&p[E](),rn[Yt]("y"),window[b](function(){p.add(rn[e][l][k]()).add(rn[e][r])[f](0,F+rn[pt](a.size)),rn[e][t]=p},100)},p[n]=function(){p[tn]("*").blur(),p.add(rn[e][r]).add(rn[e][l][k]())[i](),window[b](function(){rn[Ht]("y"),p[y]().hide(),rn[e][t]=L},rn[v][at]+50)}}break;case x:case P:var F=a[s]==P?"-":"";p[ft](ut+a[s]).data(S,a[s])[h](c,rn[W](a.size))[u](0),rn._[q][nt]?p[h](B,"scroll")[h](ot,V)[h](R,"touch")[Kt](It,function(e){p._posY=e[d][X][0].pageY,p._posX=e[d][X][0].pageX})[Kt](Ut,function(e){var t=p._posX-e[d][X][0].pageX,r=p._posY-e[d][X][0].pageY,i=p.outerHeight(),o=p.get(0).scrollHeight-p[u]();if(a.swipeToClose&&r<20&&r>-20&&(a[s]==x&&t>50||a[s]==P&&t<-50))return p[n](),Z;if(p[u]()==0&&r<0||o>i-2&&o<i+2&&r>0)return Z}):p[h](B,mt);switch(a.style){case xt:default:p[N]=function(){p[m]()[u](0)[h](M,Jt)[h](a[s],"-"+rn[W](a.size)+"px")[h](c,rn[W](a.size))[h](T,Y).show(),a[kt]&&p[u](0),a[Pt]&&p[E](),rn[Yt]("x"),window[b](function(){p.add(rn[e][l][k]()).add(rn[e][r])[f](F+rn[W](a.size),0),rn[e][t]=p},100)},p[n]=function(){p[tn]("*").blur(),p.add(rn[e][l][k]()).add(rn[e][r])[i](),window[b](function(){rn[Ht]("x"),p[y]().hide(),rn[e][t]=L},rn[v][at]+50)};break;case"reveal":p[N]=function(){rn[e][l][m](2),rn[e][r][m](1),p[u](0)[h](M,Jt)[h](a[s],Jt)[h](c,rn[W](a.size))[h](T,Y).show(),a[kt]&&p[u](0),a[Pt]&&p[E](),rn[Yt]("x"),window[b](function(){rn[e][r].add(rn[e][l][k]())[f](F+rn[W](a.size),0),rn[e][t]=p},100)},p[n]=function(){p[tn]("*").blur(),rn[e][r].add(rn[e][l][k]())[i](),window[b](function(){rn[Ht]("x"),p.hide(),rn[e][r][y](),rn[e][r][y](),rn[e][t]=L},rn[v][at]+50)}}break;default:}break;case Et:p[h](I,rn[v][Bt])[h](s,"fixed")[ft]("skel-panels-overlay"),p[h](c,a[c])[h](T,a[T]),(D=rn[wt][Zt][a[s]])||(a[s]=Dt,D=rn[wt][Zt][a[s]]),p[ft]("skel-panels-overlay-"+a[s]).data(j,a[s]),rn._[lt](D,function(e){p[h](e,D[e]),D[e]==_&&(e==M?p[h]("margin-top","-"+rn.getHalf(a[T])):e==x&&p[h]("margin-left","-"+rn.getHalf(a[c])))});break;default:}},initElements:function(e){var t,n,r,i,s=[],o;rn._[lt](rn[v][e+"s"],function(n){t={},rn._.extend(t,rn.defaults[v][e]),rn._.extend(t,rn[v][e+"s"][n]),rn[v][e+"s"][n]=t,r=rn._.newDiv(t.html),r.id=n,r.className="skel-panels-"+e,t.html||(s[n]=r),t.breakpoints?i=t.breakpoints.split(","):i=rn._.breakpointList,rn._[lt](i,function(s){var o=rn._.cacheBreakpointElement(i[s],n,r,e==Et?J:U,2);o[v]=t,o[Lt]=Z,o.type=e,o.onAttach=function(){this[Lt]?rn.resumeElement(this):(rn.initElement(this),this[Lt]=St)},o.onDetach=function(){rn.suspendElement(this)}})}),rn._[Gt](function(){var e,t,n;rn._[lt](s,function(n){e=jQuery(nn+n),t=jQuery(s[n]),e[k]()[_t](t),e.remove()})})},initJQueryUtilityFuncs:function(){jQuery.fn[m]=function(e){return this[Xt]=this[h](I),this[h](I,rn[v][Bt]+(e?e:1)),this},jQuery.fn[y]=function(){return this[Xt]&&(this[h](I,this[Xt]),this[Xt]=L),this},jQuery.fn._skel_panels_xcssValue=function(e,t){return jQuery(this)[h](e,t)[h](e,yt+t)[h](e,$+t)[h](e,$t+t)[h](e,Ot+t)},jQuery.fn._skel_panels_xcssProperty=function(e,t){return jQuery(this)[h](e,t)[h](yt+e,t)[h]($+e,t)[h]($t+e,t)[h](Ot+e,t)},jQuery.fn[jt]=function(e,t){return jQuery(this)[h](e,t)[h](yt+e,yt+t)[h]($+e,$+t)[h]($t+e,$t+t)[h](Ot+e,Ot+t)},jQuery.fn[E]=function(){var e=jQuery(this);return jQuery(this)[tn]("form").each(function(){this.reset()}),e},jQuery.fn[tt]=function(){var e=jQuery(this);e[it]("class").match(/(\s+|^)([0-9]+)u(\s+|$)/)&&e.data(zt,parseInt(RegExp.$2))},jQuery.fn[ct]=function(){var e=jQuery(this),t=e.parent(),n=12;t[k]().each(function(){var e=jQuery(this),t=e[it]("class");t&&t.match(/(\s+|^)([0-9]+)u(\s+|$)/)&&(n-=parseInt(RegExp.$2))}),n>0&&(e[tt](),e[h](c,(e.data(zt)+n)/12*100+"%"))};if(rn[v].useTransform&&rn._[q].IEVersion>=10&&(!rn[v][Tt]||rn._.hasActive(rn[v][Tt].split(","))))jQuery.fn[i]=function(){return jQuery(this)[f](0,0)},jQuery.fn[f]=function(e,t){return jQuery(this)[h]("transform","translate("+e+"px, "+t+"px)")},jQuery.fn[O]=function(){return jQuery(this)[h]("backface-visibility",Mt)[h]("perspective","500")[jt]("transition","transform "+rn[v][at]/1e3+"s ease-in-out")};else{var t,n=[];rn[e][C].resize(function(){if(rn[v][at]!=0){var e=rn[v][at];rn[v][at]=0,window[b](function(){rn[v][at]=e,n=[]},e)}}),jQuery.fn[i]=function(){for(var t=0;t<this[K];t++){var i=this[t],s=jQuery(i);n[i.id]&&s.animate(n[i.id],rn[v][at],"swing",function(){rn._[lt](n[i.id],function(e){s[h](e,n[i.id][e])}),rn[e][Vt][h](rt,Nt),rn[e][r][h](c,mt)[h](F,0)})}return jQuery(this)},jQuery.fn[f]=function(t,i){var o,u,f,l;t=parseInt(t),i=parseInt(i),t!=0?(rn[e][Vt][h](rt,Mt),rn[e][r][h](c,rn[e][C][c]())):f=function(){rn[e][Vt][h](rt,Nt),rn[e][r][h](c,mt)},i<0?rn[e][r][h](F,Math.abs(i)):l=function(){rn[e][r][h](F,0)};for(o=0;o<this[K];o++){var p=this[o],d=jQuery(p),m;if(!n[p.id])if(m=rn[wt][Zt][d.data(j)])n[p.id]=m;else if(m=rn[wt].panels[d.data(S)]){n[p.id]={};for(u=0;m[u];u++)n[p.id][m[u]]=parseInt(d[h](m[u]))}else m=d[s](),n[p.id]={top:m[M],left:m[x]};a={},rn._[lt](n[p.id],function(e){var r;switch(e){case M:r=rn[pt](n[p.id][e])+i;break;case Q:r=rn[pt](n[p.id][e])-i;break;case x:r=rn[W](n[p.id][e])+t;break;case P:r=rn[W](n[p.id][e])-t}a[e]=r}),d.animate(a,rn[v][at],"swing",function(){f&&f(),l&&l()})}return jQuery(this)},jQuery.fn[O]=function(){return jQuery(this)[h](s,"absolute")}}},initObjects:function(){rn[e][C]=jQuery(window),rn[e][C].load(function(){rn[e][C][u]()==0&&window.scrollTo(0,1)}),rn._[Gt](function(){rn[e][Vt]=jQuery(Vt),rn[e][Vt].wrapInner('<div id="skel-panels-pageWrapper" />'),rn[e][r]=jQuery("#skel-panels-pageWrapper"),rn[e][r][h](s,Qt)[h](x,"0")[h](P,"0")[h](M,"0")[O](),rn[e][st]=jQuery('<div id="skel-panels-defaultWrapper" />')[_t](rn[e][Vt]),rn[e][st][h](T,Y),rn[e][l]=jQuery('<div id="skel-panels-fixedWrapper" />')[_t](rn[e][Vt]),rn[e][l][h](s,Qt),jQuery(".skel-panels-fixed")[_t](rn[e][l]),rn._[G](U,rn[e][st][0]),rn._[G](J,rn[e][l][0]),rn._[G]("skel_panels_pageWrapper",rn[e][r][0]),jQuery("[autofocus]").focus()})},initIncludes:function(){rn._[Gt](function(){jQuery(".skel-panels-include").each(function(){rn.parseInit(jQuery(this))})})},init:function(){rn.eventType=rn._[q][nt]?"touchend":Ct;if(rn._[q][A]==en&&rn._[q].deviceVersion<4||rn._[q][A]=="wp")rn[v].useTransform=Z;rn.initObjects(),rn.initJQueryUtilityFuncs(),rn.initElements(Et),rn.initElements("panel"),rn.initIncludes(),rn._.updateState()}};return rn}());
/* skelJS v0.4.9 | (c) n33 | skeljs.org | MIT licensed */
var skel=function(){var _={config:{prefix:null,preloadStyleSheets:!1,pollOnce:!1,resetCSS:!1,normalizeCSS:!1,boxModel:null,useOrientation:!1,useRTL:!1,pollOnLock:!1,usePerpetualLock:!0,useDomainLock:!0,containers:960,grid:{collapse:!1,gutters:40},breakpoints:{all:{range:"*",hasStyleSheet:!1}},events:{}},isConfigured:!1,isInit:!1,lockState:null,stateId:"",me:null,breakpoints:[],breakpointList:[],events:[],plugins:{},cache:{elements:{},states:{}},locations:{html:null,head:null,body:null},vars:{},lsc:"_skel_lock",sd:" ",css:{r:"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}",n:'article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{background:#fff;color:#000;font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"C" "D" "8" "9"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}'},presets:{"default":{},standard:{breakpoints:{mobile:{range:"-480",lockViewport:!0,containers:"fluid",grid:{collapse:1,gutters:10}},desktop:{range:"481-",containers:1200},"1000px":{range:"481-1200",containers:960}}}},defaults:{breakpoint:{test:null,config:null,elements:null},config_breakpoint:{range:"",containers:960,lockViewport:!1,viewportWidth:!1,viewport:"",hasStyleSheet:!0,grid:{}}},DOMReady:null,getElementsByClassName:null,indexOf:null,iterate:null,extend:function(e,t){var n="object",r;_.iterate(t,function(r){typeof t[r]==n?(typeof e[r]!=n&&(e[r]={}),_.extend(e[r],t[r])):e[r]=t[r]})},parseMeasurement:function(e){var t,n;if(typeof e!="string")t=[e,"px"];else if(e=="fluid")t=[100,"%"];else{var n;n=e.match(/([0-9\.]+)([^\s]*)/),n.length<3||!n[2]?t=[parseFloat(e),"px"]:t=[parseFloat(n[1]),n[2]]}return t},getDevicePixelRatio:function(){var e="deviceType",t="devicePixelRatio",n="matchMedia",r=navigator.userAgent;if(_.vars[e]=="ios"||_.vars[e]=="mac"||_.vars[e]=="windows"||_.vars[e]=="android"&&r.match(/Safari\/([0-9]+)/)&&parseInt(RegExp.$1)>=537)return 1;if(window[t]!==undefined&&!r.match(/(Firefox; Mobile)/))return window[t];if(window[n]){if(window[n]("(-webkit-min-device-pixel-ratio: 2),(min--moz-device-pixel-ratio: 2),(-o-min-device-pixel-ratio: 2/1),(min-resolution: 2dppx)").matches)return 2;if(window[n]("(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)").matches)return 1.5}return 1},getLevel:function(e){return typeof e=="boolean"?e?1:0:parseInt(e)},getViewportWidth:function(){var e="orientation",t="width",n="height",r,i,s;return r=document.documentElement.clientWidth,i=window[e]!==undefined?Math.abs(window[e]):!1,s=_.getDevicePixelRatio(),screen[t]<r&&(r=screen[t]),i!==!1&&(_.config.useOrientation?i===90?r=Math.max(screen[t],screen[n]):r=Math.min(screen[t],screen[n]):r=Math.min(screen[t],screen[n])),r/=s,r},unlock:function(){_.lockState=null,document.cookie=_.lsc+"=;expires=Thu, 1 Jan 1970 12:00:00 UTC; path="+(_.config.useDomainLock?"/":window.location.pathname),_.config.pollOnLock?_.poll():window.location.reload()},lock:function(e){_.lockState=e,document.cookie=_.lsc+"="+e+";expires="+(_.config.usePerpetualLock?"Thu, 1 Jan 2077 12:00:00 UTC":0)+"; path="+(_.config.useDomainLock?"/":window.location.pathname),_.config.pollOnLock?_.poll():window.location.reload()},getLock:function(){return _.lockState},isLocked:function(){return!!_.lockState},hasActive:function(e){var t=!1;return _.iterate(e,function(n){t=t||_.isActive(e[n])}),t},isActive:function(e){return _.indexOf(_.stateId,_.sd+e)!==-1},wasActive:function(e){return _.indexOf(_.vars.lastStateId,_.sd+e)!==-1},canUse:function(e){return _.breakpoints[e]&&_.breakpoints[e].test(_.getViewportWidth())},unreverseRows:function(){var e="_skel_isReversed",t=_.getElementsByClassName("row");_.iterate(t,function(n){if(n==="length")return;var r=t[n];if(!r[e])return;var i=r.children,s;for(s=1;s<i.length;s++)r.insertBefore(i[s],i[0]);r[e]=!1})},reverseRows:function(e){var t="_skel_isReversed",n=_.getElementsByClassName("row");_.iterate(n,function(r){if(r==="length")return;var i=n[r];if(i[t]||e>0&&i.className.match(/\bno-collapse-([0-9])\b/)&&parseInt(RegExp.$1)>=e)return;var s=i.children,o;for(o=1;o<s.length;o++)i.insertBefore(s[o],s[0]);i[t]=!0})},bind:function(e,t){_.events[e]||(_.events[e]=[]),_.events[e].push(t)},trigger:function(e){var t="events";if(!_[t][e]||_[t][e].length==0)return;var n;_.iterate(_[t][e],function(n){_[t][e][n]()})},onStateChange:function(e){_.bind("stateChange",e),_.isInit&&e()},registerLocation:function(e,t){var n="_skel_attach",r="appendChild";e=="head"?t[n]=function(e){this===_.me.parentNode?this.insertBefore(e,_.me):this[r](e)}:t[n]=function(e){this[r](e)},_.locations[e]=t},cacheElement:function(e,t,n,r){return _.cache.elements[e]={id:e,object:t,location:n,priority:r}},cacheBreakpointElement:function(e,t,n,r,i){var s="breakpoints",o=_.getCachedElement(t);return o||(o=_.cacheElement(t,n,r,i)),_[s][e]&&_[s][e].elements.push(o),o},getCachedElement:function(e){return _.cache.elements[e]?_.cache.elements[e]:null},detachAllElements:function(){var e="elements",t="cache",n="parentNode",r,i;_.iterate(_[t][e],function(r){i=_[t][e][r].object;if(!i[n]||i[n]&&!i[n].tagName)return;i[n].removeChild(i),_[t][e][r].onDetach&&_[t][e][r].onDetach()})},attachElements:function(e){var t="iterate",n="priority",r="_skel_attach",i="onAttach",s=[],o=[],u,a,f;_[t](e,function(t){s[e[t][n]]||(s[e[t][n]]=[]),s[e[t][n]].push(e[t])}),_[t](s,function(e){if(s[e].length==0)return;_[t](s[e],function(t){a=_.locations[s[e][t].location],a?(a[r](s[e][t].object),s[e][t][i]&&s[e][t][i]()):o.push(s[e][t])})}),o.length>0&&_.DOMReady(function(){_[t](o,function(e){a=_.locations[o[e].location],a&&(a[r](o[e].object),o[e][i]&&o[e][i]())})})},poll:function(){var e="breakpoints",t="stateId",n="className",r="locations",i,s,o="";_.lockState?s=_.lockState:s=_.getViewportWidth(),_.vars.viewportWidth=s,_.vars.devicePixelRatio=_.getDevicePixelRatio(),_.iterate(_[e],function(t){_[e][t].test(s)&&(o+=_.sd+t)}),o===""&&(o=_.sd),o!==_[t]&&(_[r].html[n]=_[r].html[n].replace(_[t],""),_.changeState(o),_[r].html[n]=_[r].html[n]+_[t])},updateState:function(){var e="elements",t,n,r,i=[],s=_.stateId.substring(1).split(_.sd);_.iterate(s,function(n){t=_.breakpoints[s[n]];if(t[e].length==0)return;_.iterate(t[e],function(n){_.cache.states[_.stateId][e].push(t[e][n]),i.push(t[e][n])})}),i.length>0&&_.attachElements(i)},changeState:function(e){var t="vars",n="stateId",r="states",i="cache",s="config",o="iterate",u="breakpoints",a="getCachedElement",f="cacheElement",l="newInline",c="head",h="push",p="elements",d="prefix",v="newStyleSheet",m=".css",g="viewport",y="viewportWidth",b=",",w="lockViewport",E="parseMeasurement",S="containers",x="}",T="gutters",N="grid",C=" 0 0 ",k="collapse",L=".row",A="length",O="{display:none!important}",M="parentNode",D="hasOwnProperty",P=!1,H="insertBefore",B,j,F,I,q,R,U,z;_[t].lastStateId=_[n],_[n]=e;if(!_[i][r][_[n]]){_[i][r][_[n]]={config:{},elements:[],values:{}},F=_[i][r][_[n]],_[n]===_.sd?B=[]:B=_[n].substring(1).split(_.sd),_.extend(F[s],_.defaults.config_breakpoint),_[o](B,function(e){_.extend(F[s],_[u][B[e]][s])}),_[s].boxModel&&(R="iBM",(q=_[a](R))||(q=_[f](R,_[l]("*,*:before,*:after{-moz-@;-webkit-@;@}".replace(/@/g,"box-sizing:"+_[s].boxModel+"-box")),c,3)),F[p][h](q)),_[s].resetCSS?(R="iR",(q=_[a](R))||(q=_[f](R,_[l](_.css.r),c,2)),F[p][h](q)):_[s].normalizeCSS&&(R="iN",(q=_[a](R))||(q=_[f](R,_[l](_.css.n),c,2)),F[p][h](q)),_[s][d]&&(R="ssB",(q=_[a](R))||(q=_[f](R,_[v](_[s][d]+m),c,4)),F[p][h](q)),U=F[s][g],F[s][y]?U+=(U!=""?b:"")+"width="+F[s][y]:F[s][w]&&(U+=(U!=""?b:"")+"width=device-width"),F[s][w]&&(U+=(U!=""?b:"")+"initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"),U!=""&&(R="mV"+_[n],(q=_[a](R))||(q=_[f](R,_.newMeta(g,U),c,1)),F[p][h](q)),_[t].IEVersion>=10&&(R="mVIE"+_[n],(q=_[a](R))||(q=_[f](R,_[l]("@-ms-viewport{width: device-width}"),c,2)),F[p][h](q));var W,X;I=_[E](F[s][S]),W=I[0],X=I[1],F.values[S]=W+X,R="iC"+W+X;if(!(q=_[a](R))){var V,$,J;V=W*.75+X,$=W+X,J=W*1.25+X,q=_[f](R,_[l]("body{min-width:"+$+x+".container{margin-left:auto;margin-right:auto;width:"+$+x+".container.small{width:"+V+x+".container.big{width:100%;max-width:"+J+";min-width:"+$+x),c,3)}F[p][h](q),R="iG",(q=_[a](R))||(q=_[f](R,_[l](".\\31 2u{width:100%}.\\31 1u{width:91.6666666667%}.\\31 0u{width:83.3333333333%}.\\39 u{width:75%}.\\38 u{width:66.6666666667%}.\\37 u{width:58.3333333333%}.\\36 u{width:50%}.\\35 u{width:41.6666666667%}.\\34 u{width:33.3333333333%}.\\33 u{width:25%}.\\32 u{width:16.6666666667%}.\\31 u{width:8.3333333333%}.\\-11u{margin-left:91.6666666667%}.\\-10u{margin-left:83.3333333333%}.\\-9u{margin-left:75%}.\\-8u{margin-left:66.6666666667%}.\\-7u{margin-left:58.3333333333%}.\\-6u{margin-left:50%}.\\-5u{margin-left:41.6666666667%}.\\-4u{margin-left:33.3333333333%}.\\-3u{margin-left:25%}.\\-2u{margin-left:16.6666666667%}.\\-1u{margin-left:8.3333333333%}"),c,3)),F[p][h](q),R="iGR",(q=_[a](R))||(q=_[f](R,_[l](".row>*{float:left;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.row:after{content:'';display:block;clear:both;height:0}.row:first-child>*{padding-top:0!important}"),c,3)),F[p][h](q),R="iGG"+F[s][N][T];if(!(q=_[a](R))){var K,Q,G,Y,Z,et,tt;I=_[E](F[s][N][T]),K=I[0],Q=I[1],G=K+Q,Y=K/2+Q,Z=K/4+Q,et=K*1.5+Q,tt=K*2+Q,q=_[f]("iGG"+F[s][N][T],_[l](".row.flush{margin-left:0}.row.flush>*{padding:0!important}.row>*{padding-left:"+G+x+".row+.row>*{padding:"+G+C+G+x+".row{margin-left:-"+G+x+".row.half>*{padding-left:"+Y+x+".row+.row.half>*{padding:"+Y+C+Y+x+".row.half{margin-left:-"+Y+x+".row.quarter>*{padding-left:"+Z+x+".row+.row.quarter>*{padding:"+Z+C+Z+x+".row.quarter{margin-left:-"+Z+x+".row.oneandhalf>*{padding-left:"+et+x+".row+.row.oneandhalf>*{padding:"+et+C+et+x+".row.oneandhalf{margin-left:-"+et+x+".row.double>*{padding-left:"+tt+x+".row+.row.double>*{padding:"+tt+C+tt+x+".row.double{margin-left:-"+tt+x),c,3)}F[p][h](q);if(F[s][N][k]){var nt=_.getLevel(F[s][N][k]);R="iGC"+nt;if(!(q=_[a](R))){U=":not(.no-collapse)";switch(nt){case 4:break;case 3:U+=":not(.no-collapse-3)";break;case 2:U+=":not(.no-collapse-2):not(.no-collapse-3)";break;case 1:default:U+=":not(.no-collapse-1):not(.no-collapse-2):not(.no-collapse-3)"}I=_[E](F[s][N][T]),z=I[0]/2+I[1],q=_[f](R,_[l](L+U+"{margin-left:0}"+L+U+">*{float:none!important;width:100%!important;margin-left:0!important}"+".row:not(.flush)"+U+">*{padding:"+z+" 0 "+z+" 0!important;}"+".container{max-width:none!important;min-width:0!important;width:"+F.values[S]+"!important}"),c,3)}F[p][h](q)}R="iCd"+_[n];if(!(q=_[a](R))){U=[],z=[],_[o](_[u],function(e){_.indexOf(B,e)!==-1?U[h](".not-"+e):z[h](".only-"+e)});var rt=(U[A]>0?U.join(b)+O:"")+(z[A]>0?z.join(b)+O:"");q=_[f](R,_[l](rt.replace(/\.([0-9])/,".\\3$1 ")),c,3),F[p][h](q)}_[o](B,function(e){_[u][B[e]][s].hasStyleSheet&&_[s][d]&&(R="ss"+B[e],(q=_[a](R))||(q=_[f](R,_[v](_[s][d]+"-"+B[e]+m),c,5)),F[p][h](q)),_[u][B[e]][p][A]>0&&_[o](_[u][B[e]][p],function(t){F[p][h](_[u][B[e]][p][t])})})}else F=_[i][r][_[n]];_.detachAllElements(),_.attachElements(F[p]),_.DOMReady(function(){var e,n,r,i=_.getLevel(F[s][N][k]);_[s].useRTL&&(_.unreverseRows(),i>0&&_.reverseRows(i)),_[t].IEVersion>8&&(n="_skel_cell_important_placeholder",e=_.getElementsByClassName("skel-cell-important"),e&&e[A]>0&&_[o](e,function(t){if(t===A)return;var r=e[t],s=r[M],o;if(!s)return;s.className.match(/no-collapse-([0-9])/)?o=parseInt(RegExp.$1):s.className.match(/no-collapse/)?o=100:o=0;if(o<i){if(r[D](n)&&r[n]!==P)return;s=document.createElement("div"),s.innerHTML="",s.style.display="none",r[M][H](s,r.nextSibling),r[M][H](r,r[M].firstChild),r[n]=s}else r[D](n)||(r[n]=P),s=r[n],s!==P&&(r[M][H](r,s),r[M].removeChild(s),r[n]=P)}))}),_[t].state=_[i][r][_[n]],_[t][n]=_[n],_.trigger("stateChange")},newMeta:function(e,t){var n=document.createElement("meta");return n.name=e,n.content=t,n},newStyleSheet:function(e){var t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,t},newInline:function(e){var t="createElement",n;return _.vars.IEVersion<=8?(n=document[t]("span"),n.innerHTML='&nbsp;<style type="text/css">'+e+"</style>"):(n=document[t]("style"),n.type="text/css",n.innerHTML=e),n},newDiv:function(e){var t=document.createElement("div");return t.innerHTML=e,t},registerPlugin:function(e,t){_.plugins[e]=t,t._=this,_.isConfigured&&(_.initPluginConfig(e,_.plugins[e]),t.init())},initPluginConfig:function(id,o){var s,k="_skel_"+id+"_config";window[k]?s=window[k]:(s=document.getElementsByTagName("script"),s=s[s.length-1].innerHTML.replace(/^\s+|\s+$/g,""),s&&(s=eval("("+s+")"))),typeof s=="object"&&(s.preset&&o.presets[s.preset]?(_.extend(o.config,o.presets[s.preset]),_.extend(o.config,s)):_.extend(o.config,s))},initConfig:function(){function buildTest(e,t){var n="-",r;return typeof t!="string"&&(r=function(e){return!1}),t=="*"?r=function(e){return!0}:t.charAt(0)==n?(fArgs[e]=parseInt(t.substring(1)),r=function(t){return t<=fArgs[e]}):t.charAt(t.length-1)==n?(fArgs[e]=parseInt(t.substring(0,t.length-1)),r=function(t){return t>=fArgs[e]}):_.indexOf(t,n)!=-1?(t=t.split(n),fArgs[e]=[parseInt(t[0]),parseInt(t[1])],r=function(t){return t>=fArgs[e][0]&&t<=fArgs[e][1]}):(fArgs[e]=parseInt(t),r=function(t){return t==fArgs[e]}),r}var c,b,s,f,fArgs=[],preloads=[];window._skel_config?s=window._skel_config:(s=_.me.innerHTML.replace(/^\s+|\s+$/g,""),s&&(s=eval("("+s+")"))),function(){var e="object",t="preset",n="breakpoints",r="config",i="extend",o="config_breakpoint",u="defaults",a="containers";typeof s==e&&(s[t]&&_.presets[s[t]]?(_[r][n]={},_[i](_[r],_.presets[s[t]]),_[i](_[r],s)):(s[n]&&(_[r][n]={}),_[i](_[r],s))),_[i](_[u][o].grid,_[r].grid),_[u][o][a]=_[r][a],_.iterate(_[r][n],function(t){typeof _[r][n][t]!=e&&(_[r][n][t]={range:_[r][n][t]}),c={},_[i](c,_[u][o]),_[i](c,_[r][n][t]),_[r][n][t]=c,b={},_[i](b,_[u].breakpoint),b[r]=_[r][n][t],b.test=buildTest(t,b[r].range),b.elements=[],_[n][t]=b,_[r].preloadStyleSheets&&b[r].hasStyleSheet&&preloads.push(_[r].prefix+"-"+t+".css"),_.breakpointList.push(t)}),_.iterate(_[r].events,function(e){_.bind(e,_[r].events[e])})}(),preloads.length>0&&window.location.protocol!="file:"&&_.DOMReady(function(){var e,t=document.getElementsByTagName("head")[0],n=new XMLHttpRequest;_.iterate(preloads,function(e){n.open("GET",preloads[e],!1),n.send("")})})},initEvents:function(){var e;_.config.pollOnce||(window.onresize=function(){_.poll()},_.config.useOrientation&&(window.onorientationchange=function(){_.poll()}))},initUtilityMethods:function(){var e="addEventListener",t="domready",n="DOMContentLoaded",r="readyState",i="removeEventListener",s="getElementsByClassName",o="querySelectorAll",u="indexOf";document[e]?!function(e,t){_.DOMReady=t()}(t,function(){function t(e){f=1;while(e=s.shift())e()}var s=[],o,u=document,a=n,f=/^loaded|^c/.test(u[r]);return u[e](a,o=function(){u[i](a,o),t()}),function(e){f?e():s.push(e)}}):!function(e,t){_.DOMReady=t()}(t,function(t){function s(e){E=1;while(e=o.shift())e()}var o=[],u,a=!1,f=document,l=f.documentElement,c=l.doScroll,h=n,p=e,d="onreadystatechange",m=r,b=c?/^loaded|^c/:/^loaded|c/,E=b.test(f[m]);return f[p]&&f[p](h,u=function(){f[i](h,u,a),s()},a),c&&f.attachEvent(d,u=function(){/^c/.test(f[m])&&(f.detachEvent(d,u),s())}),t=c?function(e){self!=top?E?e():o.push(e):function(){try{l.doScroll("left")}catch(n){return setTimeout(function(){t(e)},50)}e()}()}:function(e){E?e():o.push(e)}}),document[s]?_[s]=function(e){return document[s](e)}:_[s]=function(e){var t=document;return t[o]?t[o](("."+e.replace(" "," .")).replace(/\.([0-9])/,".\\3$1 ")):[]},Array.prototype[u]?_[u]=function(e,t){return e[u](t)}:_[u]=function(e,t){if(typeof e=="string")return e[u](t);var n,r=t?t:0,i;if(!this)throw new TypeError;i=this.length;if(i===0||r>=i)return-1;r<0&&(r=i-Math.abs(r));for(n=r;n<i;n++)if(this[n]===e)return n;return-1},Object.keys?_.iterate=function(e,t){if(!e)return[];var n,r=Object.keys(e);for(n=0;r[n];n++)t(r[n])}:_.iterate=function(e,t){if(!e)return[];var n;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n)}},initAPI:function(){var e="vars",t="match",n="deviceType",r="replace",i="_",s,o,u=navigator.userAgent;_[e].IEVersion=u[t](/MSIE ([0-9]+)\./)?RegExp.$1:99,_[e][n]="other",o={ios:"(iPad|iPhone|iPod)",android:"Android",mac:"Macintosh",wp:"Windows Phone",windows:"Windows NT"},_.iterate(o,function(r){u[t](new RegExp(o[r],"g"))&&(_[e][n]=r)});switch(_[e][n]){case"ios":u[t](/([0-9_]+) like Mac OS X/),s=parseFloat(RegExp.$1[r](i,".")[r](i,""));break;case"android":u[t](/Android ([0-9\.]+)/),s=parseFloat(RegExp.$1);break;case"mac":u[t](/Mac OS X ([0-9_]+)/),s=parseFloat(RegExp.$1[r](i,".")[r](i,""));break;case"wp":u[t](/IEMobile\/([0-9\.]+)/),s=parseFloat(RegExp.$1);break;case"windows":u[t](/Windows NT ([0-9\.]+)/),s=parseFloat(RegExp.$1);break;default:s=99}_[e].deviceVersion=s,_[e].isTouch=_[e][n]=="wp"?navigator.msMaxTouchPoints>0:"ontouchstart"in window,s=document.cookie.split(";"),_.iterate(s,function(e){var t=s[e].split("=");if(t[0][r](/^\s+|\s+$/g,"")==_.lsc){_.lockState=t[1];return}})},init:function(e,t){var n="registerLocation",r="html",i="getElementsByTagName",s="head",o="body",u="plugins";_.initUtilityMethods(),_.initAPI(),e&&(window._skel_config=e);if(t){var a;_.iterate(t,function(e){window["_skel_"+e+"_config"]=t[e]})}_.initConfig(),_[n](r,document[i](r)[0]),_[n](s,document[i](s)[0]),_.DOMReady(function(){_[n](o,document[i](o)[0])}),_.initEvents(),_.poll();var a;_.iterate(_[u],function(e){_.initPluginConfig(e,_[u][e]),_[u][e].init()}),_.isInit=!0},preInit:function(){var e="getElementsByTagName",t="script",n="isConfigured",r=document[e](t);_.me=r[r.length-1],window._skel_config?_[n]=!0:(s=document[e](t),s=s[s.length-1].innerHTML.replace(/^\s+|\s+$/g,""),s&&(_[n]=!0)),_[n]&&_.init()}};return _.preInit(),_}();