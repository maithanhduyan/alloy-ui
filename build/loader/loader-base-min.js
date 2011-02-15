/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.3.0
build: nightly
*/
YUI.add("loader-base",function(D){if(!YUI.Env[D.version]){(function(){var i=D.version,e="/build/",f=i+e,d=D.Env.base,a="gallery-2010.12.16-18-24",c="2in3",b="4",Z="2.8.2",g=d+"combo?",h={version:i,root:f,base:D.Env.base,comboBase:g,skin:{defaultSkin:"sam",base:"assets/skins/",path:"skin.css",after:["cssreset","cssfonts","cssgrids","cssbase","cssreset-context","cssfonts-context"]},groups:{},patterns:{}},Y=h.groups,X=function(k,l){var j=c+"."+(k||b)+"/"+(l||Z)+e;Y.yui2.base=d+j;Y.yui2.root=j;},L=function(j){var k=(j||a)+e;Y.gallery.base=d+k;Y.gallery.root=k;};Y[i]={};Y.gallery={ext:false,combine:true,comboBase:g,update:L,patterns:{"gallery-":{},"gallerycss-":{type:"css"}}};Y.yui2={combine:true,ext:false,comboBase:g,update:X,patterns:{"yui2-":{configFn:function(j){if(/-skin|reset|fonts|grids|base/.test(j.name)){j.type="css";j.path=j.path.replace(/\.js/,".css");j.path=j.path.replace(/\/yui2-skin/,"/assets/skins/sam/yui2-skin");}}}}};L();X();YUI.Env[i]=h;}());}var F={},C=[],N=(D.UA.ie)?2048:8192,A=YUI.Env,Q=A._loaded,R="css",K="js",W="intl",T=D.version,V="",E=D.Object,S=E.each,J=D.Array,H=A._loaderQueue,U=A[T],B="skin-",I=D.Lang,O=A.mods,M,P,G=function(X,Y,Z,L){var a=X+"/"+Y;if(!L){a+="-min";}a+="."+(Z||R);return a;};D.Env.meta=U;D.Loader=function(Y){var X=U.modules,L=this;M=U.md5;L.context=D;L.base=D.Env.meta.base;L.comboBase=D.Env.meta.comboBase;L.combine=Y.base&&(Y.base.indexOf(L.comboBase.substr(0,20))>-1);L.maxURLLength=N;L.root=D.Env.meta.root;L.timeout=0;L.forceMap={};L.allowRollup=true;L.filters={};L.required={};L.patterns={};L.moduleInfo={};L.groups=D.merge(D.Env.meta.groups);L.skin=D.merge(D.Env.meta.skin);L.conditions={};L.config=Y;L._internal=true;P=A._renderedMods;if(P){S(P,function(a,Z){L.moduleInfo[Z]=D.merge(a);});P=A._conditions;S(P,function(a,Z){L.conditions[Z]=D.merge(a);});}else{S(X,L.addModule,L);}if(!A._renderedMods){A._renderedMods=D.merge(L.moduleInfo);A._conditions=D.merge(L.conditions);}L._inspectPage();L._internal=false;L._config(Y);L.sorted=[];L.loaded=Q[T];L.dirty=true;L.inserted={};L.skipped={};L.tested={};};D.Loader.prototype={FILTER_DEFS:{RAW:{"searchExp":"-min\\.js","replaceStr":".js"},DEBUG:{"searchExp":"-min\\.js","replaceStr":"-debug.js"}},_inspectPage:function(){S(O,function(Y,X){if(Y.details){var L=this.moduleInfo[X],a=Y.details.requires,Z=L&&L.requires;if(L){if(!L._inspected&&a&&Z.length!=a.length){delete L.expanded;}}else{L=this.addModule(Y.details,X);}L._inspected=true;}},this);},_requires:function(c,b){var Y,a,d,e,L=this.moduleInfo,X=L[c],Z=L[b];if(!X||!Z){return false;}a=X.expanded_map;d=X.after_map;if(d&&(b in d)){return true;}d=Z.after_map;if(d&&(c in d)){return false;}e=L[b]&&L[b].supersedes;if(e){for(Y=0;Y<e.length;Y++){if(this._requires(c,e[Y])){return true;}}}e=L[c]&&L[c].supersedes;if(e){for(Y=0;Y<e.length;Y++){if(this._requires(b,e[Y])){return false;}}}if(a&&(b in a)){return true;}if(X.ext&&X.type==R&&!Z.ext&&Z.type==R){return true;}return false;},_config:function(c){var Y,X,b,Z,a,d,L=this;if(c){for(Y in c){if(c.hasOwnProperty(Y)){b=c[Y];if(Y=="require"){L.require(b);}else{if(Y=="skin"){D.mix(L.skin,c[Y],true);}else{if(Y=="groups"){for(X in b){if(b.hasOwnProperty(X)){d=X;a=b[X];L.addGroup(a,d);}}}else{if(Y=="modules"){S(b,L.addModule,L);}else{if(Y=="gallery"){this.groups.gallery.update(b);}else{if(Y=="yui2"||Y=="2in3"){this.groups.yui2.update(c["2in3"],c.yui2);}else{if(Y=="maxURLLength"){L[Y]=Math.min(N,b);}else{L[Y]=b;}}}}}}}}}}Z=L.filter;if(I.isString(Z)){Z=Z.toUpperCase();L.filterName=Z;L.filter=L.FILTER_DEFS[Z];if(Z=="DEBUG"){L.require("yui-log","dump");}}},formatSkin:function(Y,L){var X=B+Y;if(L){X=X+"-"+L;}return X;},_addSkin:function(e,c,d){var b,a,L,Z=this.moduleInfo,X=this.skin,Y=Z[c]&&Z[c].ext;if(c){L=this.formatSkin(e,c);if(!Z[L]){b=Z[c];a=b.pkg||c;this.addModule({name:L,group:b.group,type:"css",after:X.after,path:(d||a)+"/"+X.base+e+"/"+c+".css",ext:Y});}}return L;},addGroup:function(Z,X){var Y=Z.modules,L=this;X=X||Z.name;Z.name=X;L.groups[X]=Z;if(Z.patterns){S(Z.patterns,function(b,a){b.group=X;L.patterns[a]=b;});}if(Y){S(Y,function(b,a){b.group=X;L.addModule(b,a);},L);}},addModule:function(p,x){x=x||p.name;p.name=x;if(!p||!p.name){return null;}if(!p.type){p.type=K;}if(!p.path&&!p.fullpath){p.path=G(x,x,p.type);}p.supersedes=p.supersedes||p.use;p.ext=("ext" in p)?p.ext:(this._internal)?false:true;p.requires=p.requires||[];var u=p.submodules,t,q,L,h,Y,n,X,r,k,f,c,a,Z,w,v,g,b,d,e=this.conditions,m;this.moduleInfo[x]=p;if(!p.langPack&&p.lang){k=J(p.lang);for(r=0;r<k.length;r++){w=k[r];f=this.getLangPackName(w,x);Y=this.moduleInfo[f];if(!Y){Y=this._addLangPack(w,p,f);}}}if(u){L=p.supersedes||[];q=0;for(t in u){if(u.hasOwnProperty(t)){h=u[t];h.path=h.path||G(x,t,p.type);h.pkg=x;h.group=p.group;if(h.supersedes){L=L.concat(h.supersedes);}Y=this.addModule(h,t);L.push(t);if(Y.skinnable){p.skinnable=true;g=this.skin.overrides;if(g&&g[t]){for(r=0;r<g[t].length;r++){b=this._addSkin(g[t][r],t,x);L.push(b);}}b=this._addSkin(this.skin.defaultSkin,t,x);L.push(b);}if(h.lang&&h.lang.length){k=J(h.lang);for(r=0;r<k.length;r++){w=k[r];f=this.getLangPackName(w,x);c=this.getLangPackName(w,t);Y=this.moduleInfo[f];if(!Y){Y=this._addLangPack(w,p,f);}a=a||J.hash(Y.supersedes);if(!(c in a)){Y.supersedes.push(c);}p.lang=p.lang||[];Z=Z||J.hash(p.lang);if(!(w in Z)){p.lang.push(w);}f=this.getLangPackName(V,x);c=this.getLangPackName(V,t);Y=this.moduleInfo[f];if(!Y){Y=this._addLangPack(w,p,f);}if(!(c in a)){Y.supersedes.push(c);}}}q++;}}p.supersedes=E.keys(J.hash(L));p.rollup=(q<4)?q:Math.min(q-1,4);}n=p.plugins;if(n){for(t in n){if(n.hasOwnProperty(t)){X=n[t];X.pkg=x;X.path=X.path||G(x,t,p.type);X.requires=X.requires||[];X.group=p.group;this.addModule(X,t);if(p.skinnable){this._addSkin(this.skin.defaultSkin,t,x);}}}}if(p.condition){m=p.condition.trigger;d=p.condition.when;e[m]=e[m]||{};e[m][x]=p.condition;if(d&&d!="after"){if(d=="instead"){p.supersedes=p.supersedes||[];p.supersedes.push(m);}else{}}else{p.after=p.after||[];p.after.push(m);}}if(p.after){p.after_map=J.hash(p.after);
}if(p.configFn){v=p.configFn(p);if(v===false){delete this.moduleInfo[x];p=null;}}return p;},require:function(X){var L=(typeof X==="string")?arguments:X;this.dirty=true;D.mix(this.required,J.hash(L));},getRequires:function(s){if(!s||s._parsed){return C;}var k,f,h,a,Z,u,v=s.name,Y,g,t=O[v]&&O[v].details,n,b,p,c,X,q,e=s.lang||s.intl,l=this.moduleInfo,L;if(s.temp&&t){p=s;s=this.addModule(t,v);s.group=p.group;s.pkg=p.pkg;delete s.expanded;}if(s.expanded&&(!this.lang||s.langCache===this.lang)){return s.expanded;}n=[];L={};b=s.requires;c=s.optional;s._parsed=true;for(k=0;k<b.length;k++){if(!L[b[k]]){n.push(b[k]);L[b[k]]=true;f=this.getModule(b[k]);if(f){a=this.getRequires(f);e=e||(f.expanded_map&&(W in f.expanded_map));for(h=0;h<a.length;h++){n.push(a[h]);}}}}b=s.supersedes;if(b){for(k=0;k<b.length;k++){if(!L[b[k]]){if(s.submodules){n.push(b[k]);}L[b[k]]=true;f=this.getModule(b[k]);if(f){a=this.getRequires(f);e=e||(f.expanded_map&&(W in f.expanded_map));for(h=0;h<a.length;h++){n.push(a[h]);}}}}}if(c&&this.loadOptional){for(k=0;k<c.length;k++){if(!L[c[k]]){n.push(c[k]);L[c[k]]=true;f=l[c[k]];if(f){a=this.getRequires(f);e=e||(f.expanded_map&&(W in f.expanded_map));for(h=0;h<a.length;h++){n.push(a[h]);}}}}}Y=this.conditions[v];if(Y){S(Y,function(i,d){if(!L[d]){g=i&&((i.ua&&D.UA[i.ua])||(i.test&&i.test(D,b)));if(g){L[d]=true;n.push(d);f=this.getModule(d);if(f){a=this.getRequires(f);for(h=0;h<a.length;h++){n.push(a[h]);}}}}},this);}if(s.skinnable){q=this.skin.overrides;if(q&&q[v]){for(k=0;k<q[v].length;k++){X=this._addSkin(q[v][k],v);n.push(X);}}else{X=this._addSkin(this.skin.defaultSkin,v);n.push(X);}}s._parsed=false;if(e){if(s.lang&&!s.langPack&&D.Intl){u=D.Intl.lookupBestLang(this.lang||V,s.lang);s.langCache=this.lang;Z=this.getLangPackName(u,v);if(Z){n.unshift(Z);}}n.unshift(W);}s.expanded_map=J.hash(n);s.expanded=E.keys(s.expanded_map);return s.expanded;},getProvides:function(X){var L=this.getModule(X),Z,Y;if(!L){return F;}if(L&&!L.provides){Z={};Y=L.supersedes;if(Y){J.each(Y,function(a){D.mix(Z,this.getProvides(a));},this);}Z[X]=true;L.provides=Z;}return L.provides;},calculate:function(X,L){if(X||L||this.dirty){if(X){this._config(X);}if(!this._init){this._setup();}this._explode();if(this.allowRollup){this._rollup();}this._reduce();this._sort();}},_addLangPack:function(b,L,a){var Y=L.name,X,Z=this.moduleInfo[a];if(!Z){X=G((L.pkg||Y),a,K,true);this.addModule({path:X,intl:true,langPack:true,ext:L.ext,group:L.group,supersedes:[]},a,true);if(b){D.Env.lang=D.Env.lang||{};D.Env.lang[b]=D.Env.lang[b]||{};D.Env.lang[b][Y]=true;}}return this.moduleInfo[a];},_setup:function(){var c=this.moduleInfo,Z,a,Y,L,X,b;for(Z in c){if(c.hasOwnProperty(Z)){L=c[Z];if(L){L.requires=E.keys(J.hash(L.requires));if(L.lang&&L.lang.length){b=this.getLangPackName(V,Z);this._addLangPack(null,L,b);}}}}X={};if(!this.ignoreRegistered){D.mix(X,A.mods);}if(this.ignore){D.mix(X,J.hash(this.ignore));}for(Y in X){if(X.hasOwnProperty(Y)){D.mix(X,this.getProvides(Y));}}if(this.force){for(a=0;a<this.force.length;a++){if(this.force[a] in X){delete X[this.force[a]];}}}D.mix(this.loaded,X);this._init=true;},getLangPackName:function(X,L){return("lang/"+L+((X)?"_"+X:""));},_explode:function(){var a=this.required,L,Z,X={},Y=this;Y.dirty=false;S(a,function(b,c){if(!X[c]){X[c]=true;L=Y.getModule(c);if(L){var d=L.expound;if(d){a[d]=Y.getModule(d);Z=Y.getRequires(a[d]);D.mix(a,J.hash(Z));}Z=Y.getRequires(L);D.mix(a,J.hash(Z));}}});},getModule:function(b){if(!b){return null;}var a,Z,X,L=this.moduleInfo[b],Y=this.patterns;if(!L){for(X in Y){if(Y.hasOwnProperty(X)){a=Y[X];if(b.indexOf(X)>-1){Z=a;break;}}}if(Z){if(a.action){a.action.call(this,b,X);}else{L=this.addModule(D.merge(Z),b);L.temp=true;}}}return L;},_rollup:function(){},_reduce:function(b){b=b||this.required;var Y,X,a,L,Z=this.loadType;for(Y in b){if(b.hasOwnProperty(Y)){L=this.getModule(Y);if(((this.loaded[Y]||O[Y])&&!this.forceMap[Y]&&!this.ignoreRegistered)||(Z&&L&&L.type!=Z)){delete b[Y];}a=L&&L.supersedes;if(a){for(X=0;X<a.length;X++){if(a[X] in b){delete b[a[X]];}}}}}return b;},_finish:function(Y,X){H.running=false;var L=this.onEnd;if(L){L.call(this.context,{msg:Y,data:this.data,success:X});}this._continue();},_onSuccess:function(){var Y=this,X=D.merge(Y.skipped),a,L=[],Z=Y.requireRegistration,c,b;S(X,function(d){delete Y.inserted[d];});Y.skipped={};S(Y.inserted,function(e,d){var f=Y.getModule(d);if(f&&Z&&f.type==K&&!(d in YUI.Env.mods)){L.push(d);}else{D.mix(Y.loaded,Y.getProvides(d));}});a=Y.onSuccess;b=(L.length)?"notregistered":"success";c=!(L.length);if(a){a.call(Y.context,{msg:b,data:Y.data,success:c,failed:L,skipped:X});}Y._finish(b,c);},_onFailure:function(Y){var L=this.onFailure,X="failure: "+Y.msg;if(L){L.call(this.context,{msg:X,data:this.data,success:false});}this._finish(X,false);},_onTimeout:function(){var L=this.onTimeout;if(L){L.call(this.context,{msg:"timeout",data:this.data,success:false});}this._finish("timeout",false);},_sort:function(){var h=E.keys(this.required),d={},L=0,Y,g,f,c,Z,e,X;for(;;){Y=h.length;e=false;for(c=L;c<Y;c++){g=h[c];for(Z=c+1;Z<Y;Z++){X=g+h[Z];if(!d[X]&&this._requires(g,h[Z])){f=h.splice(Z,1);h.splice(c,0,f[0]);d[X]=true;e=true;break;}}if(e){break;}else{L++;}}if(!e){break;}}this.sorted=h;},partial:function(L,Y,X){this.sorted=L;this.insert(Y,X,true);},_insert:function(Z,a,Y,X){if(Z){this._config(Z);}if(!X){this.calculate(a);}this.loadType=Y;if(!Y){var L=this;this._internalCallback=function(){var c=L.onCSS,e,d,b;if(this.insertBefore&&D.UA.ie){e=D.config.doc.getElementById(this.insertBefore);d=e.parentNode;b=e.nextSibling;d.removeChild(e);if(b){d.insertBefore(e,b);}else{d.appendChild(e);}}if(c){c.call(L.context,D);}L._internalCallback=null;L._insert(null,null,K);};this._insert(null,null,R);return;}this._loading=true;this._combineComplete={};this.loadNext();},_continue:function(){if(!(H.running)&&H.size()>0){H.running=true;H.next()();}},insert:function(Z,X,Y){var L=this,a=D.merge(this);delete a.require;delete a.dirty;H.add(function(){L._insert(a,Z,X,Y);
});this._continue();},loadNext:function(a){if(!this._loading){return;}var h,t,r,p,Z,e,b,o,d,g,q,L,c,n,Y,f,u,v,l=this,X=l.loadType,w=function(i){l.loadNext(i.data);},k=function(s){l._combineComplete[X]=true;var m,j=f.length;for(m=0;m<j;m++){l.inserted[f[m]]=true;}w(s);};if(l.combine&&(!l._combineComplete[X])){f=[];l._combining=f;h=l.sorted;t=h.length;v=l.comboBase;Z=v;u=[];n={};for(r=0;r<t;r++){c=v;p=l.getModule(h[r]);g=p&&p.group;if(g){d=l.groups[g];if(!d.combine){p.combine=false;continue;}p.combine=true;if(d.comboBase){c=d.comboBase;}if(d.root){p.root=d.root;}}n[c]=n[c]||[];n[c].push(p);}for(q in n){if(n.hasOwnProperty(q)){Z=q;Y=n[q];t=Y.length;for(r=0;r<t;r++){p=Y[r];if(p&&(p.type===X)&&(p.combine||!p.ext)){L=(p.root||l.root)+p.path;if((Z!==q)&&(r<(t-1))&&((L.length+Z.length)>l.maxURLLength)){u.push(l._filter(Z));Z=q;}Z+=L;if(r<(t-1)){Z+="&";}f.push(p.name);}}if(f.length&&(Z!=q)){u.push(l._filter(Z));}}}if(f.length){if(X===R){e=D.Get.css;o=l.cssAttributes;}else{e=D.Get.script;o=l.jsAttributes;}e(u,{data:l._loading,onSuccess:k,onFailure:l._onFailure,onTimeout:l._onTimeout,insertBefore:l.insertBefore,charset:l.charset,attributes:o,timeout:l.timeout,autopurge:false,context:l});return;}else{l._combineComplete[X]=true;}}if(a){if(a!==l._loading){return;}l.inserted[a]=true;if(l.onProgress){l.onProgress.call(l.context,{name:a,data:l.data});}}h=l.sorted;t=h.length;for(r=0;r<t;r=r+1){if(h[r] in l.inserted){continue;}if(h[r]===l._loading){return;}p=l.getModule(h[r]);if(!p){if(!l.skipped[h[r]]){b="Undefined module "+h[r]+" skipped";l.skipped[h[r]]=true;}continue;}d=(p.group&&l.groups[p.group])||F;if(!X||X===p.type){l._loading=h[r];if(p.type===R){e=D.Get.css;o=l.cssAttributes;}else{e=D.Get.script;o=l.jsAttributes;}Z=(p.fullpath)?l._filter(p.fullpath,h[r]):l._url(p.path,h[r],d.base||p.base);e(Z,{data:h[r],onSuccess:w,insertBefore:l.insertBefore,charset:l.charset,attributes:o,onFailure:l._onFailure,onTimeout:l._onTimeout,timeout:l.timeout,autopurge:false,context:l});return;}}l._loading=null;e=l._internalCallback;if(e){l._internalCallback=null;e.call(l);}else{l._onSuccess();}},_filter:function(Y,X){var a=this.filter,L=X&&(X in this.filters),Z=L&&this.filters[X];if(Y){if(L){a=(I.isString(Z))?this.FILTER_DEFS[Z.toUpperCase()]||null:Z;}if(a){Y=Y.replace(new RegExp(a.searchExp,"g"),a.replaceStr);}}return Y;},_url:function(Y,L,X){return this._filter((X||this.base||"")+Y,L);}};},"3.3.0",{requires:["get"]});