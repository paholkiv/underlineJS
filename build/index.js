!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Underline=t()}}(function(){var t;return function e(t,i,n){function s(r,h){if(!i[r]){if(!t[r]){var a="function"==typeof require&&require;if(!h&&a)return a(r,!0);if(o)return o(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var u=i[r]={exports:{}};t[r][0].call(u.exports,function(e){var i=t[r][1][e];return s(i?i:e)},u,u.exports,e,t,i,n)}return i[r].exports}for(var o="function"==typeof require&&require,r=0;r<n.length;r++)s(n[r]);return s}({1:[function(e,i,n){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(e,o){"function"==typeof t&&t.amd?t("baselineRatio",[],function(){return e.baselineRatio=o()}):"object"===("undefined"==typeof n?"undefined":s(n))?i.exports=o():e.baselineRatio=o()}(void 0,function(){var t=function(t){t=t||document.body;var e=document.createElement("div");e.style.display="block",e.style.position="absolute",e.style.bottom="0",e.style.right="0",e.style.width="0px",e.style.height="0px",e.style.margin="0",e.style.padding="0",e.style.visibility="hidden",e.style.overflow="hidden";var i=document.createElement("span"),n=document.createElement("span");i.style.fontSize="0px",n.style.fontSize="2000px",i.innerHTML="X",n.innerHTML="X",e.appendChild(i),e.appendChild(n),console.log(t),t.appendChild(e);var s=i.getBoundingClientRect(),o=n.getBoundingClientRect();t.removeChild(e);var r=s.top-o.top,h=o.height;return 1-r/h};return t})},{}],2:[function(e,i,n){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(e,o){"function"==typeof t&&t.amd?t("guitarString",[],function(){return e.guitarString=o()}):"object"===("undefined"==typeof n?"undefined":s(n))?i.exports=o():e.GuitarString=o()}(void 0,function(){function t(t){for(var e=0;e<o.length;e++){var i=new Date;if(o[e].finished<i.getTime()){o[e].finished=i.getTime()+1e3*document.getElementById(t).duration,o[e].channel.src=document.getElementById(t).src,o[e].channel.load(),o[e].channel.play();break}}}function i(t,e,i,s,o,r){this.ctx=t,this.canvas=t.canvas,this.startPoint=e,this.endPoint=i,this.strokeWidth=s,this.strokeColor=o,this.ratio=r,this.level=u(this.startPoint,this.endPoint,this.ratio),this.maxGrabDistance=2*this.strokeWidth,this.maxControlDistance=6*this.strokeWidth,this.ctx.lineWidth=this.strokeWidth,this.ctx.strokeStyle=this.strokeColor,this.ctx.beginPath(),this.ctx.moveTo(this.startPoint.x,this.startPoint.y),this.ctx.lineTo(this.endPoint.x,this.endPoint.y),this.ctx.globalCompositeOperation="source-over",this.ctx.stroke(),this.currentMouseX,this.currentMouseY,this.lastMouseX,this.lastMouseY,this.waveInitX=(this.startPoint.x+this.endPoint.x)/2,this.waveInitY=this.startPoint.y-this.maxControlDistance,this.waveCount=0,this.damping=.9,this.thirdPoint=new n((this.startPoint.x+this.endPoint.x)/2,this.startPoint.y),this.userInControl=!1,this.userPlucked=!1,this.waveInControl=!1,this.waveFinished=!1,this.initState=!0,this.lastRedraw=!1,this.redrawActive=!1;var h=this;this.canvas.addEventListener("mouseover",function(t){h.mouseOver(h,t)},!1),this.canvas.addEventListener("mousemove",function(t){h.mouseMove(h,t)},!1),this.canvas.addEventListener("mouseleave",function(t){h.mouseLeave(h,t)},!1),this.canvas.addEventListener("mouseout",function(t){h.mouseOut(h,t)},!1),this.canvas.addEventListener("touchstart",function(t){h.touchDown(h,t)},!1),this.canvas.addEventListener("touchmove",function(t){h.touchXY(h,t)},!1),this.canvas.addEventListener("touchend",function(t){h.touchUp(h,t)},!1)}for(var n=e("./point"),s=(navigator.userAgent.toLowerCase().indexOf("chrome")>-1,10),o=new Array,r=0;s>r;r++)o[r]=new Array,o[r].channel=new Audio,o[r].finished=-1;var h=function(t,e,i){var n=e.y-t.y,s=e.x-t.x,o=i.y-e.y,r=i.x-e.x,h=n/s,l=o/r,u=(h*l*(t.y-i.y)+l*(t.x+e.x)-h*(e.x+i.x))/(2*(l-h)),d=-1*(u-(t.x+e.x)/2)/h+(t.y+e.y)/2,c=a(u,d,t.x,t.y);return{x:u,y:d,r:c}},a=function(t,e,i,n){return Math.sqrt((t-=i)*t+(e-=n)*e)},l=function(t,e,i,n,s,o,r,h){var a,l,u;return a=(i-t)*(h-o)-(r-s)*(n-e),0===a?!1:(u=((h-o)*(r-t)+(s-r)*(h-e))/a,l=((e-n)*(r-t)+(i-t)*(h-e))/a,u>0&&1>u&&l>0&&1>l)},u=function(t,e,i){var n=a(t.x,t.y,e.x,e.y)/i,s=Math.floor(n/30);return s>19&&(s=19),s=19-s,10>s&&(s="0"+s),s};return i.prototype.mouseOver=function(t,e){this.currentMouseX=e.layerX*this.ratio,this.currentMouseX=e.layerY*this.ratio},i.prototype.mouseMove=function(e,i){this.lastMouseX=this.currentMouseX,this.lastMouseY=this.currentMouseY,this.currentMouseX=i.layerX*this.ratio,this.currentMouseY=i.layerY*this.ratio;var s=h(new n(this.startPoint.x,this.startPoint.y),new n(this.currentMouseX,this.currentMouseY),new n(this.endPoint.x,this.endPoint.y)).r,o=s-Math.sqrt(Math.pow(s,2)-Math.pow(Math.abs(this.endPoint.x-this.startPoint.x)/2,2)),r=h(new n(this.startPoint.x,this.startPoint.y),new n(this.lastMouseX,this.lastMouseY),new n(this.endPoint.x,this.endPoint.y)).r,a=r-Math.sqrt(Math.pow(r,2)-Math.pow(Math.abs(this.endPoint.x-this.startPoint.x)/2,2)),u=o<this.maxGrabDistance&&this.currentMouseX>this.startPoint.x&&this.currentMouseX<this.endPoint.x,d=!(a<this.maxGrabDistance&&this.lastMouseX>this.startPoint.x&&this.lastMouseX<this.endPoint.x),c=!(o<this.maxControlDistance&&this.currentMouseX>this.startPoint.x&&this.currentMouseX<this.endPoint.x),y=a<this.maxControlDistance&&this.lastMouseX>this.startPoint.x&&this.lastMouseY<this.endPoint.x,f=l(this.lastMouseX,this.lastMouseY,this.currentMouseX,this.currentMouseY,this.startPoint.x,this.startPoint.y,this.endPoint.x,this.endPoint.y);u&&d&&!this.userInControl?(this.initState=!1,this.userInControl=!0,this.waveInControl=!1,this.waveFinished=!1,this.redrawActive=!0):c&&y&&this.userInControl&&(this.initState=!1,this.userInControl=!1,this.waveInControl=!0,this.waveFinished=!1,this.waveCount=0,this.waveInitX=(this.startPoint.x+this.endPoint.x)/2,this.waveInitY=this.endPoint.y+this.maxControlDistance,t("audio"+this.level)),!this.userInControl&&f&&(this.initState=!1,this.userInControl=!1,this.waveInControl=!0,this.waveFinished=!1,this.redrawActive=!0,this.waveCount=0,this.waveInitX=(this.startPoint.x+this.endPoint.y)/2,this.waveInitY=this.endPoint.y+2*this.maxGrabDistance/3)},i.prototype.mouseLeave=function(t,e){this.userInControl&&(this.initState=!1,this.userInControl=!1,this.waveInControl=!0,this.waveFinished=!1,this.redrawActive=!0,this.waveCount=0,this.waveInitX=e.layerX*this.ratio,this.waveInitY=e.layerY*this.ratio)},i.prototype.mouseOut=function(t,e){},i.prototype.touchDown=function(t,e){this.currentMouseX=e.layerX*this.ratio,this.currentMouseX=e.layerY*this.ratio},i.prototype.touchXY=function(e,i){this.lastMouseX=this.currentMouseX,this.lastMouseY=this.currentMouseY,this.currentMouseX=i.layerX*this.ratio,this.currentMouseY=i.layerY*this.ratio;var s=h(new n(this.startPoint.x,this.startPoint.y),new n(this.currentMouseX,this.currentMouseY),new n(this.endPoint.x,this.endPoint.y)).r,o=s-Math.sqrt(Math.pow(s,2)-Math.pow(Math.abs(this.endPoint.x-this.startPoint.x)/2,2)),r=h(new n(this.startPoint.x,this.startPoint.y),new n(this.lastMouseX,this.lastMouseY),new n(this.endPoint.x,this.endPoint.y)).r,a=r-Math.sqrt(Math.pow(r,2)-Math.pow(Math.abs(this.endPoint.x-this.startPoint.x)/2,2)),u=o<this.maxGrabDistance&&this.currentMouseX>this.startPoint.x&&this.currentMouseX<this.endPoint.x,d=!(a<this.maxGrabDistance&&this.lastMouseX>this.startPoint.x&&this.lastMouseX<this.endPoint.x),c=!(o<this.maxControlDistance&&this.currentMouseX>this.startPoint.x&&this.currentMouseX<this.endPoint.x),y=a<this.maxControlDistance&&this.lastMouseX>this.startPoint.x&&this.lastMouseY<this.endPoint.x,f=l(this.lastMouseX,this.lastMouseY,this.currentMouseX,this.currentMouseY,this.startPoint.x,this.startPoint.y,this.endPoint.x,this.endPoint.y);u&&d&&!this.userInControl?(this.initState=!1,this.userInControl=!0,this.waveInControl=!1,this.waveFinished=!1,this.redrawActive=!0):c&&y&&this.userInControl&&(this.initState=!1,this.userInControl=!1,this.waveInControl=!0,this.waveFinished=!1,this.waveCount=0,this.waveInitX=(this.startPoint.x+this.endPoint.x)/2,this.waveInitY=this.endPoint.y+this.maxControlDistance,t("audio"+this.level)),!this.userInControl&&f&&(this.initState=!1,this.userInControl=!1,this.waveInControl=!0,this.waveFinished=!1,this.redrawActive=!0,this.waveCount=0,this.waveInitX=(this.startPoint.x+this.endPoint.y)/2,this.waveInitY=this.endPoint.y+2*this.maxGrabDistance/3)},i.prototype.touchUp=function(t,e){this.userInControl&&(this.initState=!1,this.userInControl=!1,this.waveInControl=!0,this.waveFinished=!1,this.redrawActive=!0,this.waveCount=0,this.waveInitX=e.layerX*this.ratio,this.waveInitY=e.layerY*this.ratio)},i.prototype.clear=function(){},i.prototype.update=function(){if(this.userInControl&&(this.thirdPoint=new n(this.currentMouseX,this.currentMouseY)),this.waveInControl){var t=this.waveInitX,e=this.startPoint.y+(this.waveInitY-this.startPoint.y)*Math.cos(this.waveCount/5*Math.PI)*Math.pow(this.damping,this.waveCount);Math.pow(this.damping,this.waveCount)>.03?(this.thirdPoint=new n(t,e),this.waveCount++):(this.waveInControl=!1,this.waveFinished=!0,this.lastRedraw=!0,this.thirdPoint=new n(t,e))}},i.prototype.draw=function(){this.lastRedraw?(this.drawLine(),this.lastRedraw=!1,this.redrawActive=!1):this.drawArc(this.startPoint,this.thirdPoint,this.endPoint)},i.prototype.drawLine=function(){this.ctx.lineWidth=this.strokeWidth,this.ctx.strokeStyle=this.strokeColor,this.ctx.beginPath(),this.ctx.moveTo(this.startPoint.x,this.startPoint.y),this.ctx.lineTo(this.endPoint.x,this.endPoint.y),this.ctx.globalCompositeOperation="source-over",this.ctx.stroke()},i.prototype.drawArc=function(t,e,i){var s=this.ctx;s.lineWidth=this.strokeWidth,s.strokeStyle=this.strokeColor;var o=h(new n(t.x,t.y),new n(e.x,e.y),new n(i.x,i.y)),r=o.x,a=o.y,l=o.r,u=Math.atan2(r-t.x,a-t.y);u?u>Math.PI/2?(s.beginPath(),s.arc(r,a,l,1.5*Math.PI-u,1.5*Math.PI+u,!0)):(s.beginPath(),s.arc(r,a,l,1.5*Math.PI-u,1.5*Math.PI+u,!1)):(s.beginPath(),s.moveTo(t.x,t.y),s.lineTo(i.x,i.y)),s.globalCompositeOperation="source-over",s.stroke()},i})},{"./point":7}],3:[function(e,i,n){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(e,o){"function"==typeof t&&t.amd?t("underline",[],function(){return e.underline=o()}):"object"===("undefined"==typeof n?"undefined":s(n))?i.exports=o():e.Underline=o()}(void 0,function(){function t(t){var e=t,i=n(t),s=parseFloat(window.getComputedStyle(e,null).getPropertyValue("line-height")),o=window.getComputedStyle(e,null).getPropertyValue("font-family"),r=window.getComputedStyle(e,null).getPropertyValue("font-size"),h=window.getComputedStyle(e,null).getPropertyValue("font-style"),a=e.getBoundingClientRect().width,l=e.getBoundingClientRect().height,u=e.parentNode.getBoundingClientRect().width,d=e.offsetLeft,c=e.parentNode.offsetLeft,y=c-d,f=d-c;return{lineHeight:s,width:a,height:l,parentWidth:u,fontFamily:o,fontSize:r,fontStyle:h,baselinePositionRatio:i,canvasLeft:y,textIndent:f}}function i(e,i){this.underlines=[],e||console.error("No element defined!");var n={"text-underline-color":i.color||"#000","text-underline-position":i.position||"auto","text-underline-skip":i.skip||!0,"text-underline-width":i.width||"auto"};e="string"==typeof e?document.querySelectorAll(e):e,[].forEach.call(e,function(e){var i,r=t(e);i=r.height>r.lineHeight?new s(e,n,r):new o(e,n,r),this.underlines.push(i)}.bind(this))}var n=e("./baseline-ratio"),s=e("./multiple-underline"),o=e("./single-underline"),r=function(t){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();return i.prototype.animate=function(){this.underlines.forEach(function(t){t.clear(),t.update(),t.draw()}.bind(this)),r(this.animate)},i})},{"./baseline-ratio":1,"./multiple-underline":4,"./single-underline":8}],4:[function(e,i,n){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(e,o){"function"==typeof t&&t.amd?t("multipleUnderline",[],function(){return e.multipleUnderline=o()}):"object"===("undefined"==typeof n?"undefined":s(n))?i.exports=o():e.MultipleUnderline=o()}(void 0,function(){function t(t,e,h){this.element=t,this.text=this.element.textContent,this.underlineStyles=e,this.elementStyles=h,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.ratio=window.devicePixelRatio,this.canvas.width=this.elementStyles.width*this.ratio,this.canvas.height=this.elementStyles.height*this.ratio,this.canvas.style.left=this.elementStyles.canvasLeft+"px",this.element.appendChild(this.canvas),this.canvas.style.width=this.elementStyles.width+"px",this.ctx.font=this.font=this.elementStyles.fontStyle+" "+i(this.elementStyles.fontSize,this.ratio)+" "+this.elementStyles.fontFamily,this.multipleRedrawActive=!1,r?this.elementStyles.lineHeight=this.elementStyles.lineHeight*this.ratio:this.elementStyles.lineHeight=this.elementStyles.lineHeight*this.ratio;var a=this.ctx.measureText(".").width;if("auto"==this.underlineStyles["text-underline-width"]?this.strokeWidth=a/12:(this.strokeWidth=this.underlineStyles["text-underline-width"],this.strokeWidth=parseFloat(this.strokeWidth)*this.ratio),"auto"==this.underlineStyles["text-underline-position"])this.underlinePosition=parseFloat(this.elementStyles.fontSize)*this.ratio*(1-this.elementStyles.baselinePositionRatio+.4*this.elementStyles.baselinePositionRatio)+this.strokeWidth/2;else{var l=parseFloat(this.underlineStyles["text-underline-position"]);this.underlinePosition=parseFloat(this.elementStyles.fontSize)*this.ratio*(1-this.elementStyles.baselinePositionRatio+this.elementStyles.baselinePositionRatio*l)+this.strokeWidth/2}var u=n(this.strokeWidth,this.underlinePosition);this.strokeWidth=u.strokeWidth,this.underlinePosition=u.posY,this.lines=[],this.myStrings=[];for(var d=this.text.match(/[^\s-]+-?\s?/g),c="",y=0,f=0,p=0;p<d.length;p++){if(d[p].match(/\s+$/)){var m=d[p].replace(/\s+$/,""),x=c+m,v=this.ctx.measureText(x),w=v.width;x+=" "}else var x=c+d[p],v=this.ctx.measureText(x),w=v.width;if(f)if(w>this.elementStyles.parentWidth*this.ratio&&p>0){if(c.match(/\s+$/))var P=this.ctx.measureText(c.replace(/\s+$/,"")),S=P.width;else var P=this.ctx.measureText(c),S=P.width;var g={lineText:c,lineTextIndent:-.2,linePositionY:y,lineMeasureWidth:S};this.lines.push(g),c=d[p],y+=this.elementStyles.lineHeight}else c=x;else if(w+this.elementStyles.textIndent*this.ratio>this.elementStyles.parentWidth*this.ratio&&p>0){if(c.match(/\s+$/))var P=this.ctx.measureText(c.replace(/\s+$/,"")),S=P.width;else var P=this.ctx.measureText(c),S=P.width;var g={lineText:c,lineTextIndent:this.elementStyles.textIndent*this.ratio-.2,linePositionY:y,lineMeasureWidth:S};this.lines.push(g),c=d[p],y+=this.elementStyles.lineHeight,f++}else c=x}if(c.match(/\s+$/))var P=this.ctx.measureText(c.replace(/\s+$/,"")),S=P.width;else var P=this.ctx.measureText(c),S=P.width;var g={lineText:c,lineTextIndent:-.2,linePositionY:y,lineMeasureWidth:S};this.lines.push(g);for(var b=0;b<this.lines.length;b++){var g=this.lines[b],M=new s(this.ctx,new o(g.lineTextIndent,g.linePositionY+this.underlinePosition),new o(g.lineTextIndent+g.lineMeasureWidth,g.linePositionY+this.underlinePosition),this.strokeWidth,this.underlineStyles["text-underline-color"],this.ratio);this.myStrings.push(M)}this.drawUnderline(),this.drawHoles()}var i=e("./multiply-value"),n=e("./optimal-stroke-width-pos"),s=e("./guitar-string"),o=e("./point"),r=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;return t.prototype.drawUnderline=function(){for(var t=0;t<this.myStrings.length;t++){var e=this.myStrings[t];e.update(),e.draw()}},t.prototype.drawHoles=function(){for(var t=0;t<this.lines.length;t++){var e=this.lines[t];this.ctx.globalCompositeOperation="destination-out",this.ctx.font=this.font,this.ctx.fillStyle="green",this.ctx.textBaseline="top",this.ctx.fillText(e.lineText,e.lineTextIndent,e.linePositionY),this.ctx.lineWidth=2*this.ratio+3.6*this.strokeWidth,this.ctx.strokeStyle="blue",this.ctx.strokeText(e.lineText,e.lineTextIndent,e.linePositionY)}},t.prototype.clear=function(){this.multipleRedrawActive;this.multipleRedrawActive=!1;for(var t=0;t<this.myStrings.length;t++){var e=this.myStrings[t];e.redrawActive&&(this.multipleRedrawActive=!0)}this.multipleRedrawActive&&(console.log("clear now!"),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height))},t.prototype.update=function(){},t.prototype.draw=function(){this.multipleRedrawActive&&(this.drawUnderline(),this.drawHoles())},t})},{"./guitar-string":2,"./multiply-value":5,"./optimal-stroke-width-pos":6,"./point":7}],5:[function(e,i,n){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(e,o){"function"==typeof t&&t.amd?t("multiplyValue",[],function(){return e.multiplyValue=o()}):"object"===("undefined"==typeof n?"undefined":s(n))?i.exports=o():e.MultiplyValue=o()}(void 0,function(){var t=function(t,e){var i=t,n=e,s=i.match(/(\d*\.?\d*)(.*)/);return s[1]*n+s[2]};return t})},{}],6:[function(e,i,n){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(e,o){"function"==typeof t&&t.amd?t("optimalStrokeWidthPos",[],function(){return e.optimalStrokeWidthPos=o()}):"object"===("undefined"==typeof n?"undefined":s(n))?i.exports=o():e.OptimalStrokeWidthPos=o()}(void 0,function(){var t=function(t,e){return 1>t?e=Math.round(e-.5)+.5:t>=1&&(t=Math.round(t),e=t%2?Math.round(e-.5)+.5:Math.round(e)),{strokeWidth:t,posY:e}};return t})},{}],7:[function(e,i,n){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(e,o){"function"==typeof t&&t.amd?t("point",[],function(){return e.point=o()}):"object"===("undefined"==typeof n?"undefined":s(n))?i.exports=o():e.Point=o()}(void 0,function(){var t=function(t,e){this.x=t,this.y=e};return t})},{}],8:[function(e,i,n){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(e,o){"function"==typeof t&&t.amd?t("singleUnderline",[],function(){return e.singleUnderline=o()}):"object"===("undefined"==typeof n?"undefined":s(n))?i.exports=o():e.SingleUnderline=o()}(void 0,function(){function t(t,e,r){this.element=t,this.text=this.element.textContent,this.underlineStyles=e,this.elementStyles=r,this.redrawActive=!1,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.ratio=window.devicePixelRatio,this.canvas.width=this.elementStyles.width*this.ratio,this.canvas.height=this.elementStyles.height*this.ratio,this.element.appendChild(this.canvas),this.canvas.style.width=this.elementStyles.width+"px",this.ctx.font=this.font=this.elementStyles.fontStyle+" "+i(this.elementStyles.fontSize,this.ratio)+" "+this.elementStyles.fontFamily;var h=this.ctx.measureText(".").width;if("auto"==this.underlineStyles["text-underline-width"]?this.strokeWidth=h/12:(this.strokeWidth=this.underlineStyles["text-underline-width"],this.strokeWidth=parseFloat(this.strokeWidth)*this.ratio),"auto"==this.underlineStyles["text-underline-position"])this.underlinePosition=parseFloat(this.elementStyles.height)*this.ratio*(1-this.elementStyles.baselinePositionRatio+.4*this.elementStyles.baselinePositionRatio)+this.strokeWidth/2;else{var a=parseFloat(this.underlineStyles["text-underline-position"]);this.underlinePosition=parseFloat(this.elementStyles.height)*this.ratio*(1-this.elementStyles.baselinePositionRatio+this.elementStyles.baselinePositionRatio*a)+this.strokeWidth/2}var l=n(this.strokeWidth,this.underlinePosition);this.strokeWidth=l.strokeWidth,this.underlinePosition=l.posY;var u=this.ctx.measureText(this.text).width;this.myString=new s(this.ctx,new o(0,this.underlinePosition),new o(u,this.underlinePosition),this.strokeWidth,this.underlineStyles["text-underline-color"],this.ratio),this.drawHoles()}var i=e("./multiply-value"),n=e("./optimal-stroke-width-pos"),s=e("./guitar-string"),o=e("./point");return t.prototype.drawUnderline=function(){this.myString.draw()},t.prototype.drawHoles=function(){this.ctx.font=this.font,this.ctx.textBaseline="top",this.ctx.globalCompositeOperation="destination-out",this.ctx.lineWidth=2*this.ratio+3.6*this.strokeWidth,this.ctx.strokeStyle="blue",this.ctx.beginPath(),this.ctx.strokeText(this.text,-.2,0),this.ctx.fillStyle="green",this.ctx.beginPath(),this.ctx.fillText(this.text,-.2,0)},t.prototype.clear=function(){this.redrawActive=this.myString.redrawActive,this.myString.redrawActive&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.update=function(){this.myString.redrawActive&&this.myString.update()},t.prototype.draw=function(){this.redrawActive&&(this.drawUnderline(),this.drawHoles())},t})},{"./guitar-string":2,"./multiply-value":5,"./optimal-stroke-width-pos":6,"./point":7}]},{},[3])(3)});
//# sourceMappingURL=index.js.map
