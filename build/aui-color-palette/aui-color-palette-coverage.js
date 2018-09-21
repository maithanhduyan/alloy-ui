if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-color-palette/aui-color-palette.js']) {
   __coverage__['build/aui-color-palette/aui-color-palette.js'] = {"path":"build/aui-color-palette/aui-color-palette.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":48}}},"2":{"name":"(anonymous_2)","line":49,"loc":{"start":{"line":49,"column":27},"end":{"line":49,"column":38}}},"3":{"name":"(anonymous_3)","line":50,"loc":{"start":{"line":50,"column":19},"end":{"line":50,"column":65}}},"4":{"name":"(anonymous_4)","line":75,"loc":{"start":{"line":75,"column":19},"end":{"line":75,"column":35}}},"5":{"name":"(anonymous_5)","line":79,"loc":{"start":{"line":79,"column":39},"end":{"line":79,"column":54}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":167,"column":3}},"2":{"start":{"line":10,"column":0},"end":{"line":152,"column":7}},"3":{"start":{"line":50,"column":12},"end":{"line":64,"column":14}},"4":{"start":{"line":51,"column":16},"end":{"line":52,"column":40}},"5":{"start":{"line":54,"column":16},"end":{"line":63,"column":18}},"6":{"start":{"line":76,"column":12},"end":{"line":77,"column":23}},"7":{"start":{"line":79,"column":12},"end":{"line":93,"column":15}},"8":{"start":{"line":80,"column":16},"end":{"line":81,"column":26}},"9":{"start":{"line":83,"column":16},"end":{"line":90,"column":17}},"10":{"start":{"line":84,"column":20},"end":{"line":84,"column":47}},"11":{"start":{"line":86,"column":20},"end":{"line":89,"column":22}},"12":{"start":{"line":92,"column":16},"end":{"line":92,"column":27}},"13":{"start":{"line":95,"column":12},"end":{"line":95,"column":35}},"14":{"start":{"line":97,"column":12},"end":{"line":97,"column":26}},"15":{"start":{"line":154,"column":0},"end":{"line":154,"column":30}}},"branchMap":{"1":{"line":59,"type":"cond-expr","locations":[{"start":{"line":59,"column":54},"end":{"line":59,"column":79}},{"start":{"line":59,"column":82},"end":{"line":59,"column":84}}]},"2":{"line":83,"type":"if","locations":[{"start":{"line":83,"column":16},"end":{"line":83,"column":16}},{"start":{"line":83,"column":16},"end":{"line":83,"column":16}}]}},"code":["(function () { YUI.add('aui-color-palette', function (A, NAME) {","","/**"," * The Color Picker Component"," *"," * @module aui-color-picker"," * @submodule aui-color-palette"," */","","var AArray = A.Array,","    AColor = A.Color,","    Lang = A.Lang,","","    getClassName = A.getClassName,","","    CSS_PALETTE_ITEM = getClassName('palette-item'),","    CSS_PALETTE_ITEM_INNER = getClassName('palette-item-inner'),","    CSS_PALETTE_ITEM_SELECTED = getClassName('palette-item-selected'),","","    /**","     * A base class for `ColorPalette`.","     *","     * @class A.ColorPalette","     * @extends Widget","     * @uses A.Palette, A.WidgetCssClass, A.WidgetToggle","     * @param {Object} config Object literal specifying widget configuration","     *     properties.","     * @constructor","     * @include http://alloyui.com/examples/color-picker/basic-markup.html","     * @include http://alloyui.com/examples/color-picker/basic.js","     */","    ColorPalette = A.Base.create('color-palette', A.Widget, [","    A.Palette,","    A.WidgetCssClass,","    A.WidgetToggle","], {","        ITEM_TEMPLATE: '<li class=\"' + CSS_PALETTE_ITEM +","            ' {selectedClassName}\" data-column={column} data-index={index} data-row={row} data-value=\"{value}\">' +","            '<a href=\"\" class=\"' + CSS_PALETTE_ITEM_INNER +","            '\" style=\"background-color:{value}\" onclick=\"return false;\" title=\"{title}\"></a>' + '</li>',","","        /**","         * Provides a default value (Function) to the `formatter` property.","         *","         * @method _valueFormatterFn","         * @return {Function} The formatter function","         * @protected","         */","        _valueFormatterFn: function() {","            return function(items, index, row, column, selected) {","                var instance = this,","                    item = items[index];","","                return Lang.sub(","                    instance.ITEM_TEMPLATE, {","                        column: column,","                        index: index,","                        row: row,","                        selectedClassName: selected ? CSS_PALETTE_ITEM_SELECTED : '',","                        title: item.name,","                        value: item.value","                    }","                );","            };","        },","","        /**","         * Sets `items` attribute of the `ColorPalette` instance.","         *","         * @method _setItems","         * @param {Array} value","         * @return {Object}","         * @protected","         */","        _setItems: function(value) {","            var instance = this,","                result;","","            result = AArray.map(value, function(item) {","                var tmp = item,","                    color;","","                if (Lang.isString(item)) {","                    color = AColor.toHex(item);","","                    tmp = {","                        name: color,","                        value: color","                    };","                }","","                return tmp;","            });","","            instance._items = null;","","            return result;","        }","    }, {","","        /**","         * Static property provides a string to identify the CSS prefix.","         *","         * @property CSS_PREFIX","         * @type {String}","         * @static","         */","        CSS_PREFIX: getClassName('color-palette'),","","        /**","         * Static property provides a string to identify the class.","         *","         * @property NAME","         * @type {String}","         * @static","         */","        NAME: 'color-palette',","","        /**","         * Static property used to define the default attribute","         * configuration for the `ColorPalette`.","         *","         * @property ATTRS","         * @type {Object}","         * @static","         */","        ATTRS: {","","            /**","             * Colors available to the `ColorPalette`.","             *","             * @attribute items","             * @type {Array}","             */","            items: {","                setter: '_setItems',","                value: [","                '#9FC6E7',","                '#5484ED',","                '#A4BDFC',","                '#51B749',","                '#FBD75B',","                '#FFB878',","                '#FF887C',","                '#DC2127',","                '#DBADFF',","                '#E1E1E1'","            ]","","            }","        }","    });","","A.ColorPalette = ColorPalette;","","","}, '3.0.3-deprecated.80', {","    \"requires\": [","        \"array-extras\",","        \"aui-palette\",","        \"color-base\",","        \"node-core\",","        \"aui-widget-cssclass\",","        \"aui-widget-toggle\"","    ],","    \"skinnable\": true","});","","}());"]};
}
var __cov_0qJbk46HQ3KvaTG75uhgqg = __coverage__['build/aui-color-palette/aui-color-palette.js'];
__cov_0qJbk46HQ3KvaTG75uhgqg.s['1']++;YUI.add('aui-color-palette',function(A,NAME){__cov_0qJbk46HQ3KvaTG75uhgqg.f['1']++;__cov_0qJbk46HQ3KvaTG75uhgqg.s['2']++;var AArray=A.Array,AColor=A.Color,Lang=A.Lang,getClassName=A.getClassName,CSS_PALETTE_ITEM=getClassName('palette-item'),CSS_PALETTE_ITEM_INNER=getClassName('palette-item-inner'),CSS_PALETTE_ITEM_SELECTED=getClassName('palette-item-selected'),ColorPalette=A.Base.create('color-palette',A.Widget,[A.Palette,A.WidgetCssClass,A.WidgetToggle],{ITEM_TEMPLATE:'<li class="'+CSS_PALETTE_ITEM+' {selectedClassName}" data-column={column} data-index={index} data-row={row} data-value="{value}">'+'<a href="" class="'+CSS_PALETTE_ITEM_INNER+'" style="background-color:{value}" onclick="return false;" title="{title}"></a>'+'</li>',_valueFormatterFn:function(){__cov_0qJbk46HQ3KvaTG75uhgqg.f['2']++;__cov_0qJbk46HQ3KvaTG75uhgqg.s['3']++;return function(items,index,row,column,selected){__cov_0qJbk46HQ3KvaTG75uhgqg.f['3']++;__cov_0qJbk46HQ3KvaTG75uhgqg.s['4']++;var instance=this,item=items[index];__cov_0qJbk46HQ3KvaTG75uhgqg.s['5']++;return Lang.sub(instance.ITEM_TEMPLATE,{column:column,index:index,row:row,selectedClassName:selected?(__cov_0qJbk46HQ3KvaTG75uhgqg.b['1'][0]++,CSS_PALETTE_ITEM_SELECTED):(__cov_0qJbk46HQ3KvaTG75uhgqg.b['1'][1]++,''),title:item.name,value:item.value});};},_setItems:function(value){__cov_0qJbk46HQ3KvaTG75uhgqg.f['4']++;__cov_0qJbk46HQ3KvaTG75uhgqg.s['6']++;var instance=this,result;__cov_0qJbk46HQ3KvaTG75uhgqg.s['7']++;result=AArray.map(value,function(item){__cov_0qJbk46HQ3KvaTG75uhgqg.f['5']++;__cov_0qJbk46HQ3KvaTG75uhgqg.s['8']++;var tmp=item,color;__cov_0qJbk46HQ3KvaTG75uhgqg.s['9']++;if(Lang.isString(item)){__cov_0qJbk46HQ3KvaTG75uhgqg.b['2'][0]++;__cov_0qJbk46HQ3KvaTG75uhgqg.s['10']++;color=AColor.toHex(item);__cov_0qJbk46HQ3KvaTG75uhgqg.s['11']++;tmp={name:color,value:color};}else{__cov_0qJbk46HQ3KvaTG75uhgqg.b['2'][1]++;}__cov_0qJbk46HQ3KvaTG75uhgqg.s['12']++;return tmp;});__cov_0qJbk46HQ3KvaTG75uhgqg.s['13']++;instance._items=null;__cov_0qJbk46HQ3KvaTG75uhgqg.s['14']++;return result;}},{CSS_PREFIX:getClassName('color-palette'),NAME:'color-palette',ATTRS:{items:{setter:'_setItems',value:['#9FC6E7','#5484ED','#A4BDFC','#51B749','#FBD75B','#FFB878','#FF887C','#DC2127','#DBADFF','#E1E1E1']}}});__cov_0qJbk46HQ3KvaTG75uhgqg.s['15']++;A.ColorPalette=ColorPalette;},'3.0.3-deprecated.80',{'requires':['array-extras','aui-palette','color-base','node-core','aui-widget-cssclass','aui-widget-toggle'],'skinnable':true});
