/*! For license information please see 6750.95095023.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_mtes_mct_monitor_ui_root=self.webpackChunk_mtes_mct_monitor_ui_root||[]).push([[6750],{"./node_modules/@tanstack/react-virtual/build/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _rollupPluginBabelHelpers_extends(){return _rollupPluginBabelHelpers_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_rollupPluginBabelHelpers_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{MG:()=>useVirtualizer});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");function _virtual_rollupPluginBabelHelpers_extends(){return _virtual_rollupPluginBabelHelpers_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_virtual_rollupPluginBabelHelpers_extends.apply(this,arguments)}function memo(getDeps,fn,opts){var _opts$initialDeps,result,deps=null!=(_opts$initialDeps=opts.initialDeps)?_opts$initialDeps:[];return function(){var depTime;opts.key&&null!=opts.debug&&opts.debug()&&(depTime=Date.now());var resultTime,newDeps=getDeps();if(!(newDeps.length!==deps.length||newDeps.some((function(dep,index){return deps[index]!==dep}))))return result;if(deps=newDeps,opts.key&&null!=opts.debug&&opts.debug()&&(resultTime=Date.now()),result=fn.apply(void 0,newDeps),opts.key&&null!=opts.debug&&opts.debug()){var depEndTime=Math.round(100*(Date.now()-depTime))/100,resultEndTime=Math.round(100*(Date.now()-resultTime))/100,resultFpsPercentage=resultEndTime/16,pad=function pad(str,num){for(str=String(str);str.length<num;)str=" "+str;return str};console.info("%c⏱ "+pad(resultEndTime,5)+" /"+pad(depEndTime,5)+" ms","\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl("+Math.max(0,Math.min(120-120*resultFpsPercentage,120))+"deg 100% 31%);",null==opts?void 0:opts.key)}return null==opts||null==opts.onChange||opts.onChange(result),result}}function notUndefined(value,msg){if(void 0===value)throw new Error("Unexpected undefined"+(msg?": "+msg:""));return value}var defaultKeyExtractor=function defaultKeyExtractor(index){return index},defaultRangeExtractor=function defaultRangeExtractor(range){for(var start=Math.max(range.startIndex-range.overscan,0),end=Math.min(range.endIndex+range.overscan,range.count-1),arr=[],_i=start;_i<=end;_i++)arr.push(_i);return arr},observeElementRect=function observeElementRect(instance,cb){var element=instance.scrollElement;if(element){var handler=function handler(rect){var width=rect.width,height=rect.height;cb({width:Math.round(width),height:Math.round(height)})};handler(element.getBoundingClientRect());var observer=new ResizeObserver((function(entries){var entry=entries[0];if(null!=entry&&entry.borderBoxSize){var box=entry.borderBoxSize[0];if(box)return void handler({width:box.inlineSize,height:box.blockSize})}handler(element.getBoundingClientRect())}));return observer.observe(element,{box:"border-box"}),function(){observer.unobserve(element)}}},observeElementOffset=function observeElementOffset(instance,cb){var element=instance.scrollElement;if(element){var handler=function handler(){cb(element[instance.options.horizontal?"scrollLeft":"scrollTop"])};return handler(),element.addEventListener("scroll",handler,{passive:!0}),function(){element.removeEventListener("scroll",handler)}}},measureElement=function measureElement(element,entry,instance){if(null!=entry&&entry.borderBoxSize){var box=entry.borderBoxSize[0];if(box)return Math.round(box[instance.options.horizontal?"inlineSize":"blockSize"])}return Math.round(element.getBoundingClientRect()[instance.options.horizontal?"width":"height"])},elementScroll=function elementScroll(offset,_ref2,instance){var _instance$scrollEleme3,_instance$scrollEleme4,_ref2$adjustments=_ref2.adjustments,adjustments=void 0===_ref2$adjustments?0:_ref2$adjustments,behavior=_ref2.behavior,toOffset=offset+adjustments;null==(_instance$scrollEleme3=instance.scrollElement)||null==_instance$scrollEleme3.scrollTo||_instance$scrollEleme3.scrollTo(((_instance$scrollEleme4={})[instance.options.horizontal?"left":"top"]=toOffset,_instance$scrollEleme4.behavior=behavior,_instance$scrollEleme4))},Virtualizer=function Virtualizer(_opts){var _ro,get,_this=this;this.unsubs=[],this.scrollElement=null,this.isScrolling=!1,this.isScrollingTimeoutId=null,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollDirection=null,this.scrollAdjustments=0,this.measureElementCache=new Map,this.observer=(_ro=null,get=function get(){return _ro||("undefined"!=typeof ResizeObserver?_ro=new ResizeObserver((function(entries){entries.forEach((function(entry){_this._measureElement(entry.target,entry)}))})):null)},{disconnect:function disconnect(){var _get;return null==(_get=get())?void 0:_get.disconnect()},observe:function observe(target){var _get2;return null==(_get2=get())?void 0:_get2.observe(target,{box:"border-box"})},unobserve:function unobserve(target){var _get3;return null==(_get3=get())?void 0:_get3.unobserve(target)}}),this.range=null,this.setOptions=function(opts){Object.entries(opts).forEach((function(_ref3){var key=_ref3[0];void 0===_ref3[1]&&delete opts[key]})),_this.options=_virtual_rollupPluginBabelHelpers_extends({debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:defaultKeyExtractor,rangeExtractor:defaultRangeExtractor,onChange:function onChange(){},measureElement,initialRect:{width:0,height:0},scrollMargin:0,scrollingDelay:150,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1},opts)},this.notify=function(sync){null==_this.options.onChange||_this.options.onChange(_this,sync)},this.maybeNotify=memo((function(){return _this.calculateRange(),[_this.isScrolling,_this.range?_this.range.startIndex:null,_this.range?_this.range.endIndex:null]}),(function(isScrolling){_this.notify(isScrolling)}),{key:!1,debug:function debug(){return _this.options.debug},initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=function(){_this.unsubs.filter(Boolean).forEach((function(d){return d()})),_this.unsubs=[],_this.scrollElement=null},this._didMount=function(){return _this.measureElementCache.forEach(_this.observer.observe),function(){_this.observer.disconnect(),_this.cleanup()}},this._willUpdate=function(){var scrollElement=_this.options.getScrollElement();_this.scrollElement!==scrollElement&&(_this.cleanup(),_this.scrollElement=scrollElement,_this._scrollToOffset(_this.scrollOffset,{adjustments:void 0,behavior:void 0}),_this.unsubs.push(_this.options.observeElementRect(_this,(function(rect){_this.scrollRect=rect,_this.maybeNotify()}))),_this.unsubs.push(_this.options.observeElementOffset(_this,(function(offset){_this.scrollAdjustments=0,_this.scrollOffset!==offset&&(null!==_this.isScrollingTimeoutId&&(clearTimeout(_this.isScrollingTimeoutId),_this.isScrollingTimeoutId=null),_this.isScrolling=!0,_this.scrollDirection=_this.scrollOffset<offset?"forward":"backward",_this.scrollOffset=offset,_this.maybeNotify(),_this.isScrollingTimeoutId=setTimeout((function(){_this.isScrollingTimeoutId=null,_this.isScrolling=!1,_this.scrollDirection=null,_this.maybeNotify()}),_this.options.scrollingDelay))}))))},this.getSize=function(){return _this.scrollRect[_this.options.horizontal?"width":"height"]},this.memoOptions=memo((function(){return[_this.options.count,_this.options.paddingStart,_this.options.scrollMargin,_this.options.getItemKey]}),(function(count,paddingStart,scrollMargin,getItemKey){return _this.pendingMeasuredCacheIndexes=[],{count,paddingStart,scrollMargin,getItemKey}}),{key:!1}),this.getFurthestMeasurement=function(measurements,index){for(var furthestMeasurementsFound=new Map,furthestMeasurements=new Map,m=index-1;m>=0;m--){var measurement=measurements[m];if(!furthestMeasurementsFound.has(measurement.lane)){var previousFurthestMeasurement=furthestMeasurements.get(measurement.lane);if(null==previousFurthestMeasurement||measurement.end>previousFurthestMeasurement.end?furthestMeasurements.set(measurement.lane,measurement):measurement.end<previousFurthestMeasurement.end&&furthestMeasurementsFound.set(measurement.lane,!0),furthestMeasurementsFound.size===_this.options.lanes)break}}return furthestMeasurements.size===_this.options.lanes?Array.from(furthestMeasurements.values()).sort((function(a,b){return a.end-b.end}))[0]:void 0},this.getMeasurements=memo((function(){return[_this.memoOptions(),_this.itemSizeCache]}),(function(_ref4,itemSizeCache){var count=_ref4.count,paddingStart=_ref4.paddingStart,scrollMargin=_ref4.scrollMargin,getItemKey=_ref4.getItemKey,min=_this.pendingMeasuredCacheIndexes.length>0?Math.min.apply(Math,_this.pendingMeasuredCacheIndexes):0;_this.pendingMeasuredCacheIndexes=[];for(var measurements=_this.measurementsCache.slice(0,min),_i2=min;_i2<count;_i2++){var key=getItemKey(_i2),furthestMeasurement=1===_this.options.lanes?measurements[_i2-1]:_this.getFurthestMeasurement(measurements,_i2),start=furthestMeasurement?furthestMeasurement.end:paddingStart+scrollMargin,measuredSize=itemSizeCache.get(key),size="number"==typeof measuredSize?measuredSize:_this.options.estimateSize(_i2),end=start+size,lane=furthestMeasurement?furthestMeasurement.lane:_i2%_this.options.lanes;measurements[_i2]={index:_i2,start,size,end,key,lane}}return _this.measurementsCache=measurements,measurements}),{key:!1,debug:function debug(){return _this.options.debug}}),this.calculateRange=memo((function(){return[_this.getMeasurements(),_this.getSize(),_this.scrollOffset]}),(function(measurements,outerSize,scrollOffset){return _this.range=measurements.length>0&&outerSize>0?function calculateRange(_ref9){var measurements=_ref9.measurements,outerSize=_ref9.outerSize,scrollOffset=_ref9.scrollOffset,count=measurements.length-1,getOffset=function getOffset(index){return measurements[index].start},startIndex=findNearestBinarySearch(0,count,getOffset,scrollOffset),endIndex=startIndex;for(;endIndex<count&&measurements[endIndex].end<scrollOffset+outerSize;)endIndex++;return{startIndex,endIndex}}({measurements,outerSize,scrollOffset}):null}),{key:!1,debug:function debug(){return _this.options.debug}}),this.getIndexes=memo((function(){return[_this.options.rangeExtractor,_this.calculateRange(),_this.options.overscan,_this.options.count]}),(function(rangeExtractor,range,overscan,count){return null===range?[]:rangeExtractor(_virtual_rollupPluginBabelHelpers_extends({},range,{overscan,count}))}),{key:!1,debug:function debug(){return _this.options.debug}}),this.indexFromElement=function(node){var attributeName=_this.options.indexAttribute,indexStr=node.getAttribute(attributeName);return indexStr?parseInt(indexStr,10):(console.warn("Missing attribute name '"+attributeName+"={index}' on measured element."),-1)},this._measureElement=function(node,entry){var item=_this.measurementsCache[_this.indexFromElement(node)];if(item&&node.isConnected){var prevNode=_this.measureElementCache.get(item.key);prevNode!==node&&(prevNode&&_this.observer.unobserve(prevNode),_this.observer.observe(node),_this.measureElementCache.set(item.key,node));var measuredItemSize=_this.options.measureElement(node,entry,_this);_this.resizeItem(item,measuredItemSize)}else _this.measureElementCache.forEach((function(cached,key){cached===node&&(_this.observer.unobserve(node),_this.measureElementCache.delete(key))}))},this.resizeItem=function(item,size){var _this$itemSizeCache$g,delta=size-(null!=(_this$itemSizeCache$g=_this.itemSizeCache.get(item.key))?_this$itemSizeCache$g:item.size);0!==delta&&(item.start<_this.scrollOffset&&_this._scrollToOffset(_this.scrollOffset,{adjustments:_this.scrollAdjustments+=delta,behavior:void 0}),_this.pendingMeasuredCacheIndexes.push(item.index),_this.itemSizeCache=new Map(_this.itemSizeCache.set(item.key,size)),_this.notify(!1))},this.measureElement=function(node){node&&_this._measureElement(node,void 0)},this.getVirtualItems=memo((function(){return[_this.getIndexes(),_this.getMeasurements()]}),(function(indexes,measurements){for(var virtualItems=[],k=0,len=indexes.length;k<len;k++){var measurement=measurements[indexes[k]];virtualItems.push(measurement)}return virtualItems}),{key:!1,debug:function debug(){return _this.options.debug}}),this.getVirtualItemForOffset=function(offset){var measurements=_this.getMeasurements();return notUndefined(measurements[findNearestBinarySearch(0,measurements.length-1,(function(index){return notUndefined(measurements[index]).start}),offset)])},this.getOffsetForAlignment=function(toOffset,align){var size=_this.getSize();"auto"===align&&(align=toOffset<=_this.scrollOffset?"start":toOffset>=_this.scrollOffset+size?"end":"start"),"start"===align||("end"===align?toOffset-=size:"center"===align&&(toOffset-=size/2));var scrollSizeProp=_this.options.horizontal?"scrollWidth":"scrollHeight",maxOffset=(_this.scrollElement?"document"in _this.scrollElement?_this.scrollElement.document.documentElement[scrollSizeProp]:_this.scrollElement[scrollSizeProp]:0)-_this.getSize();return Math.max(Math.min(maxOffset,toOffset),0)},this.getOffsetForIndex=function(index,align){void 0===align&&(align="auto"),index=Math.max(0,Math.min(index,_this.options.count-1));var measurement=notUndefined(_this.getMeasurements()[index]);if("auto"===align)if(measurement.end>=_this.scrollOffset+_this.getSize()-_this.options.scrollPaddingEnd)align="end";else{if(!(measurement.start<=_this.scrollOffset+_this.options.scrollPaddingStart))return[_this.scrollOffset,align];align="start"}var toOffset="end"===align?measurement.end+_this.options.scrollPaddingEnd:measurement.start-_this.options.scrollPaddingStart;return[_this.getOffsetForAlignment(toOffset,align),align]},this.isDynamicMode=function(){return _this.measureElementCache.size>0},this.cancelScrollToIndex=function(){null!==_this.scrollToIndexTimeoutId&&(clearTimeout(_this.scrollToIndexTimeoutId),_this.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(toOffset,_temp){var _ref5=void 0===_temp?{}:_temp,_ref5$align=_ref5.align,align=void 0===_ref5$align?"start":_ref5$align,behavior=_ref5.behavior;_this.cancelScrollToIndex(),"smooth"===behavior&&_this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),_this._scrollToOffset(_this.getOffsetForAlignment(toOffset,align),{adjustments:void 0,behavior})},this.scrollToIndex=function(index,_temp2){var _ref6=void 0===_temp2?{}:_temp2,_ref6$align=_ref6.align,initialAlign=void 0===_ref6$align?"auto":_ref6$align,behavior=_ref6.behavior;index=Math.max(0,Math.min(index,_this.options.count-1)),_this.cancelScrollToIndex(),"smooth"===behavior&&_this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");var _this$getOffsetForInd=_this.getOffsetForIndex(index,initialAlign),toOffset=_this$getOffsetForInd[0],align=_this$getOffsetForInd[1];_this._scrollToOffset(toOffset,{adjustments:void 0,behavior}),"smooth"!==behavior&&_this.isDynamicMode()&&(_this.scrollToIndexTimeoutId=setTimeout((function(){(_this.scrollToIndexTimeoutId=null,_this.measureElementCache.has(_this.options.getItemKey(index)))?function approxEqual(a,b){return Math.abs(a-b)<1}(_this.getOffsetForIndex(index,align)[0],_this.scrollOffset)||_this.scrollToIndex(index,{align,behavior}):_this.scrollToIndex(index,{align,behavior})})))},this.scrollBy=function(delta,_temp3){var behavior=(void 0===_temp3?{}:_temp3).behavior;_this.cancelScrollToIndex(),"smooth"===behavior&&_this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),_this._scrollToOffset(_this.scrollOffset+delta,{adjustments:void 0,behavior})},this.getTotalSize=function(){var _this$getMeasurements;return((null==(_this$getMeasurements=_this.getMeasurements()[_this.options.count-1])?void 0:_this$getMeasurements.end)||_this.options.paddingStart)-_this.options.scrollMargin+_this.options.paddingEnd},this._scrollToOffset=function(offset,_ref8){var adjustments=_ref8.adjustments,behavior=_ref8.behavior;_this.options.scrollToFn(offset,{behavior,adjustments},_this)},this.measure=function(){_this.itemSizeCache=new Map,_this.notify(!1)},this.setOptions(_opts),this.scrollRect=this.options.initialRect,this.scrollOffset=this.options.initialOffset,this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach((function(item){_this.itemSizeCache.set(item.key,item.size)})),this.maybeNotify()},findNearestBinarySearch=function findNearestBinarySearch(low,high,getCurrentValue,value){for(;low<=high;){var middle=(low+high)/2|0,currentValue=getCurrentValue(middle);if(currentValue<value)low=middle+1;else{if(!(currentValue>value))return middle;high=middle-1}}return low>0?low-1:0};var useIsomorphicLayoutEffect="undefined"!=typeof document?react.useLayoutEffect:react.useEffect;function useVirtualizerBase(options){var rerender=react.useReducer((function(){return{}}),{})[1],resolvedOptions=_rollupPluginBabelHelpers_extends({},options,{onChange:function onChange(instance,sync){sync?(0,react_dom.flushSync)(rerender):rerender(),null==options.onChange||options.onChange(instance,sync)}}),instance=react.useState((function(){return new Virtualizer(resolvedOptions)}))[0];return instance.setOptions(resolvedOptions),react.useEffect((function(){return instance._didMount()}),[]),useIsomorphicLayoutEffect((function(){return instance._willUpdate()})),instance}function useVirtualizer(options){return useVirtualizerBase(_rollupPluginBabelHelpers_extends({observeElementRect,observeElementOffset,scrollToFn:elementScroll},options))}}}]);