AUI.add("aui-form-select",function(b){var d=b.Lang,e=d.isArray,h=d.isObject,c=b.ClassNameManager.getClassName,i="select",f=c(i),g='<select {multiple} class="{cssClass}" id="{id}" name="{name}"></select>';var a=b.Component.create({NAME:i,ATTRS:{multiple:{value:false},options:{value:[],setter:"_setOptions"},selectedIndex:{value:-1}},UI_ATTRS:["multiple","options","selectedIndex"],EXTENDS:b.Field,HTML_PARSER:{node:"select"},prototype:{FIELD_TEMPLATE:g,FIELD_TYPE:i,_setOptions:function(k){var j=this;if(!e(k)){k=[k];}return k;},_uiSetMultiple:function(k){var j=this;j.get("node").attr("multiple",k);},_uiSetOptions:function(q){var r=this;var l=[];var n;var o;var p;var k=0;for(var m=0;m<q.length;m++){n=q[m];o=n.labelText||n;p=n.value||n;if(n.selected){k=m;}l.push('<option value="'+p+'">'+o+"</option>");}var j=r.get("node");j.all("option").remove(true);j.append(l.join(""));r.set("selectedIndex",k);},_uiSetSelectedIndex:function(k){var j=this;if(k>-1){j.get("node").attr("selectedIndex",k);}}}});b.Select=a;},"@VERSION@",{requires:["aui-form-field"]});