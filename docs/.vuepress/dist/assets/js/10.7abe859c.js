(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{69:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[this._m(0),s("iframe",{staticStyle:{width:"100vw",height:"75vw","max-width":"100%","max-height":"600px"},attrs:{src:this.$withBase("/builds/scrollingsprite/index.html"),width:"800",height:"600",frameBorder:"0"}}),this._m(1),this._m(2)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"scrolling-sprite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrolling-sprite","aria-hidden":"true"}},[this._v("#")]),this._v(" Scrolling Sprite")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-haxe"}},[n("code",[t._v("package"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Screen"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Assets"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("systems"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("draw"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DrawSystem"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("components"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("draw"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ScrollingSpriteComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Game "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//add the draw system")]),t._v("\n        Gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScene"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addSystem")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DrawSystem"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//Load the sprites")]),t._v("\n        Assets"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("load")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"images/opengameart/mountain.png"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"images/opengameart/carbon_fiber.png"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _onLoadAssets"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("start")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//create an entity with a scrolling-component using spritename, position and size")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_createScrollingSprite")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sprite"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Float"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Float"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Float"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Float"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ScrollingSpriteComponent "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//create a new entity in the currentScene")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" entity "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Gecko"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentScene"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createEntity")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//set his position in the screen")]),t._v("\n        entity"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//add the ScrollingComponent using the width and height passed and return the component")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" entity"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScrollingSpriteComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sprite"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_onLoadAssets")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//create a scrollingSprite using the spriteName, position, and size")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scroll1 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_createScrollingSprite")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"images/opengameart/mountain.png"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Screen"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("centerX"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Screen"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("centerY"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Screen"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Screen"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        scroll1"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("speed"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("20")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scroll2 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_createScrollingSprite")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"images/opengameart/carbon_fiber.png"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("150")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Screen"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("centerY"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("200")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("500")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        scroll2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("speed"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("30")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scroll3 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_createScrollingSprite")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"images/opengameart/carbon_fiber.png"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("550")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Screen"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("centerY"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("400")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("300")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        scroll3"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("speed"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("20")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("20")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        scroll3"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scale"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("0.5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0.5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"https://github.com/Nazariglez/Gecko2D/tree/master/examples/scrollingsprite",target:"_blank",rel:"noopener noreferrer"}},[this._v("Source Code")])])}],!1,null,null,null);s.default=o.exports}}]);