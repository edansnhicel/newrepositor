(function (root, factory) {
	"use strict";
	if (typeof define === 'function' && define.amd) {
		define(['jquery', 'tabulator', 'jquery-ui'], factory);
	}
	else if(typeof module !== 'undefined' && module.exports) {
		module.exports = factory(
			require('jquery'),
			require('tabulator'),
			require('jquery-ui')
		);
	}

 else {
		factory(root.jQuery, root.Tabulator);
	}
}(this, function ($, Tabulator) {

	$.widget("ui.tabulator", {
		_create:function(){
			var options = Object.assign({}, this.options);
			var props = [];

			delete options.create;
			delete options.disabled;
//yes
for(let key of props){
				if(typeof this.table[key] === "function" && key.charAt(0) !== "_"){
					this[key] = this.table[key].bind(this.table);
				}
			}
		},
