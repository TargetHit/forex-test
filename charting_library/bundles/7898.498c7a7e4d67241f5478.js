"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[7898],{244e3:(t,e,s)=>{s.d(e,{changeDescription:()=>f,create:()=>h,exact:()=>m,exclude:()=>y,getListById:()=>g,getListIds:()=>L,getListsMap:()=>I,insert:()=>u,put:()=>b,reducer:()=>T,remove:()=>S,rename:()=>p,replace:()=>d,setup:()=>c});var o=s(64482);function n(t,e){if(t.length!==e.length)return!1;for(let s=0;s<t.length;++s)if(t[s]!==e[s])return!1;return!0}const i=Symbol();const r={lists:{ids:[],byId:{}},timestamp:null};function l(t,e){t.lists.ids.push(e.id),t.lists.byId[e.id]={id:e.id,name:e.name,description:e.description,symbols:[...e.symbols],shared:e.shared}}const a=(0,o.createSlice)({name:"custom-lists",initialState:r,reducers:{setup:(t,e)=>{const{lists:s,timestamp:o}=e.payload,n={lists:{ids:[],byId:{}},timestamp:null};for(const t of s)l(n,t);return n.timestamp=o,n},insert:(t,e)=>{const{id:s,symbols:o,before:r}=e.payload,{lists:l}=t,a=l.byId[s];if(void 0===a)return;const c=new Set(o);let u;if(void 0!==r&&c.has(r)){u=i;for(let t=a.symbols.indexOf(r);t>=0;--t)if(!c.has(a.symbols[t])){u=a.symbols[t];break}}const d=a.symbols.filter((t=>!c.has(t))),m=function(t,e,s){const o=void 0===s?void 0!==e?t.indexOf(e):void 0:s===i?0:t.indexOf(s)+1;return-1!==o?o:void 0}(d,r,u);void 0===m?d.push(...c):d.splice(m,0,...c),n(d,a.symbols)||(a.symbols=d)},replace:(t,e)=>{const{id:s,current:o,next:n}=e.payload,{lists:i}=t,r=i.byId[s];if(void 0===r)return;if(o===n)return;let l=!1,a=!1;const c=[];for(const t of r.symbols){if(t===n){a=!0;break}t===o?(c.push(n),l=!0):c.push(t)}l&&!a&&(r.symbols=c)},exact:(t,e)=>{const{id:s,symbols:o}=e.payload,{lists:i}=t,r=i.byId[s];if(void 0===r)return;const l=[...new Set(o)];n(l,r.symbols)||(r.symbols=l)},exclude:(t,e)=>{const{id:s,symbols:o}=e.payload,{lists:i}=t,r=i.byId[s];if(void 0===r)return;const l=new Set(o),a=r.symbols.filter((t=>!l.has(t)));n(a,r.symbols)||(r.symbols=a)},remove:(t,e)=>{const{id:s}=e.payload,{lists:o}=t;if(void 0===o.byId[s])return;const n=o.ids.filter((t=>t!==s));o.ids=n,delete o.byId[s]},create:(t,e)=>{const{id:s,name:o,symbols:n}=e.payload,{lists:i}=t;void 0===i.byId[s]&&l(t,{id:s,name:o,symbols:n,shared:!1,description:null})},put:(t,e)=>{const{id:s,name:o,description:n,symbols:i,shared:r}=e.payload,{lists:a}=t;void 0===a.byId[s]?l(t,{id:s,name:o,description:n,symbols:i,shared:r}):a.byId[s]={id:s,name:o,description:n,shared:r,symbols:[...i]}},rename:(t,e)=>{const{id:s,name:o}=e.payload,{lists:n}=t,i=n.byId[s];void 0!==i&&i.name!==o&&(i.name=o)},changeDescription:(t,e)=>{const{id:s,description:o}=e.payload,{lists:n}=t,i=n.byId[s];void 0!==i&&i.description!==o&&(i.description=o)},share:(t,e)=>{const{id:s,shared:o}=e.payload,{lists:n}=t,i=n.byId[s];void 0!==i&&i.shared!==o&&(i.shared=o)}}}),{setup:c,insert:u,replace:d,exact:m,exclude:y,remove:S,create:h,put:b,rename:p,changeDescription:f,share:_}=a.actions,{reducer:T}=a;function I(t){return t.lists.byId}function g(t,e){var s;return null!==(s=I(t)[e])&&void 0!==s?s:null}function L(t){return t.lists.ids}},173850:(t,e,s)=>{s.d(e,{
SEPARATOR_PREFIX:()=>o});const o="###"},37914:(t,e,s)=>{s.d(e,{quoteSessionAdapters:()=>l});var o=s(650151),n=s(588163),i=s(398171);class r{constructor(t,e,s="watchlist"){this._symbolDataHandlers=new Map,this._fastSymbols=new Set,this._subscribedSymbols=new Set,this._subscriptionSet=new Set,this._cancelSubscriptionSet=new Set,this._quoteSessionDataHandler=t=>{const e=(0,o.ensureDefined)(t.symbolname),{filtered:s,keepSubscription:n}=this._applyDataFilters(t);n||this._unsubscribeSymbols([e]),this._setSymbolDataCache(e,s);const i=this._symbolDataHandlers.get(e);i&&i(s)},this._clientId=t,this._quoteSession=(0,n.getQuoteSessionInstance)(s),this._lastSymbolData=e||new Map}destroy(){const t=Array.from(this._subscribedSymbols);this._unsubscribeSymbols(t)}addFastSymbol(t){this._fastSymbols.has(t)||!this._subscribedSymbols.has(t)||(0,i.isSeparatorItem)(t)||(this._fastSymbols.add(t),this._quoteSession.setFastSymbols(this._clientId,Array.from(this._fastSymbols)))}removeFastSymbol(t){this._fastSymbols.has(t)&&(this._fastSymbols.delete(t),this._quoteSession.setFastSymbols(this._clientId,Array.from(this._fastSymbols)))}addSymbolDataHandler(t,e){(0,i.isSeparatorItem)(t)||this._symbolDataHandlers.set(t,e)}removeSymbolDataHandler(t){this._symbolDataHandlers.delete(t)}addToSubscriptionSet(t){t.forEach((t=>{(0,i.isSeparatorItem)(t)||this._subscriptionSet.add(t)}))}clearSubscriptionSet(){this._subscriptionSet.clear()}addToCancelSubscriptionSet(t){t.forEach((t=>{(0,i.isSeparatorItem)(t)||this._cancelSubscriptionSet.add(t)}))}commitSubscriptionChanges(){Array.from(this._subscriptionSet).forEach((t=>{this._cancelSubscriptionSet.has(t)&&(this._subscriptionSet.delete(t),this._cancelSubscriptionSet.delete(t))})),this._subscribeSymbols(Array.from(this._subscriptionSet)),this._subscriptionSet.clear(),this._unsubscribeSymbols(Array.from(this._cancelSubscriptionSet)),this._cancelSubscriptionSet.clear(),this._quoteSession.setFastSymbols(this._clientId,Array.from(this._fastSymbols))}getLastSymbolData(t){return this._lastSymbolData.get(t)}_subscribeSymbols(t){this._quoteSession.subscribe(this._clientId,t,this._quoteSessionDataHandler),t.forEach((t=>this._subscribedSymbols.add(t)))}_unsubscribeSymbols(t){this._quoteSession.unsubscribe(this._clientId,t,this._quoteSessionDataHandler),t.forEach((t=>{this._subscribedSymbols.delete(t)}))}_setSymbolDataCache(t,e){var s;const o=(null===(s=this._lastSymbolData.get(t))||void 0===s?void 0:s.values)||{};this._lastSymbolData.set(t,{...e,values:{...o,...e.values}})}_applyDataFilters(t){return{filtered:t,keepSubscription:!0}}}const l=new class{constructor(){this._adaptersMap=new Map,this._lastSymbolData=new Map}destroy(){this._adaptersMap.forEach((t=>{t.forEach((t=>t.destroy()))})),this._lastSymbolData.clear()}get(t,e="watchlist"){let s;const o=this._adaptersMap.get(t);if(o){const n=o.get(e);n?s=n:(s=new r(t,this._lastSymbolData,e),o.set(e,s))}else{s=new r(t,this._lastSymbolData,e);const o=new Map;o.set(e,s),this._adaptersMap.set(t,o)}return s}}},219769:(t,e,s)=>{s.r(e),s.d(e,{selectNextAvailableSymbol:()=>n,
showContextMenu:()=>i,initWidget:()=>r,updateWidget:()=>l,updateWidgetOptions:()=>a,selectAllSymbols:()=>c,addOrUpdateSymbolList:()=>u,removeSymbolList:()=>d,setSymbolLists:()=>m,selectHotlist:()=>y,updatePosition:()=>S,updateBulkPositions:()=>h,updateActiveList:()=>b});var o=s(70644);const n=(t,e,s,n)=>({type:o.SELECT_NEXT_AVAILABLE_SYMBOL,widgetId:t,currentSymbol:e,keyboardAction:s,cancelSetOnChart:n}),i=(t,e,s,n)=>({type:o.SHOW_CONTEXT_MENU,symbol:e,position:p(s),widgetId:t,size:n}),r=(t,e,s,n)=>({type:o.INIT_WIDGET,options:n,id:t,columns:s,tickerType:e}),l=(t,e)=>({type:o.UPDATE_WIDGET,widgetId:t,widget:e}),a=(t,e)=>({type:o.UPDATE_WIDGET_OPTIONS,widgetId:t,options:e}),c=t=>({type:o.SELECT_ALL_SYMBOLS,widgetId:t}),u=t=>({type:o.ADD_OR_UPDATE_SYMBOL_LIST,symbolList:t}),d=t=>({type:o.REMOVE_SYMBOL_LIST,id:t}),m=t=>({type:o.SET_SYMBOL_LISTS,symbolLists:t}),y=(t,e,s)=>({type:o.SELECT_HOTLIST,widgetId:t,exchange:e,group:s}),S=(t,e)=>({type:o.UPDATE_POSITIONS,symbol:t,position:e}),h=t=>({type:o.UPDATE_BULK_POSITIONS,map:t}),b=t=>({type:o.UPDATE_ACTIVE_LIST,id:t});function p(t){var e;const s=null===(e=t.touches)||void 0===e?void 0:e.map((t=>({clientX:t.clientX,clientY:t.clientY})));return{clientX:t.clientX,clientY:t.clientY,touches:s,attachToXBy:t.attachToXBy,attachToYBy:t.attachToYBy,boxHeight:t.boxHeight}}},70644:(t,e,s)=>{s.d(e,{SELECT_NEXT_AVAILABLE_SYMBOL:()=>n,UPDATE_POSITIONS:()=>i,UPDATE_BULK_POSITIONS:()=>r,INIT_WIDGET:()=>l,SHOW_CONTEXT_MENU:()=>a,UPDATE_WIDGET:()=>c,UPDATE_WIDGET_OPTIONS:()=>u,SELECT_ALL_SYMBOLS:()=>d,ADD_OR_UPDATE_SYMBOL_LIST:()=>m,SET_SYMBOL_LISTS:()=>y,REMOVE_SYMBOL_LIST:()=>S,SELECT_HOTLIST:()=>h,UPDATE_ACTIVE_LIST:()=>b});const o=(0,s(215078).createActionTypeFactory)("WATCHLISTS"),n=o("SELECT_NEXT_AVAILABLE_SYMBOL"),i=o("UPDATE_POSITIONS"),r=o("UPDATE_BULK_POSITIONS"),l=o("INIT_WIDGET"),a=o("SHOW_CONTEXT_MENU"),c=o("UPDATE_WIDGET"),u=o("UPDATE_WIDGET_OPTIONS"),d=o("SELECT_ALL_SYMBOLS"),m=o("ADD_OR_UPDATE_SYMBOL_LIST"),y=o("SET_SYMBOL_LISTS"),S=o("REMOVE_SYMBOL_LIST"),h=o("SELECT_HOTLIST"),b=o("UPDATE_ACTIVE_LIST")},363940:(t,e,s)=>{s.r(e),s.d(e,{addWatchlistSymbolsThunk:()=>v,createWatchlistThunk:()=>T,getActiveWatchlistThunk:()=>O,getCustomWatchlistsThunk:()=>I,putCustomWatchlistsThunk:()=>g,removeWatchlistSymbolsThunk:()=>A,removeWatchlistThunk:()=>D,renameWatchlistThunk:()=>L,replaceWatchlistSymbolsThunk:()=>E,setActiveWatchlistThunk:()=>C,symbolListRepositorySaga:()=>p,validateWatchListSymbols:()=>f});var o=s(336349),n=s(244e3),i=s(509806),r=s(33290),l=s(131148),a=s(219769),c=s(817808),u=s(153055),d=s(159537),m=s(601373),y=s(979359),S=s(697169);function*h(){for(yield(0,o.put)((0,S.asAction)(O(null)));;){yield(0,o.take)([n.remove,n.setup]);const t=yield(0,o.select)();null===(0,m.getCurrentViewableListByWidgetId)(t,y.WATCHLIST_WIDGET_ID)&&(yield(0,o.put)((0,S.asAction)(O(null))))}}const b=(0,c.getLogger)("Platform.Model.SymbolLists");function*p(){yield(0,o.fork)(h)}function f(t){return new Promise((e=>{resolveSymbolNameForAllDistinct(t).then((t=>{e(t)}))}))}function _(t,e,o){(0,
u.showWarning)({title:e||i.t(null,void 0,s(33115)),text:t},o)}function T(t){const e=(0,r.service)(l.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);return async(s,o)=>{try{const o=await e.createWatchList(t);return null===o?null:(s((0,n.create)({id:o.id,name:o.name,symbols:o.symbols})),o.id)}catch(t){return _(t.message),null}}}const I=(0,d.respectLatest)((function(t){const e=(0,r.service)(l.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);return async(s,o)=>{try{const o=await(0,d.respectAbort)(t,e.getCustomWatchLists());s((0,n.setup)({lists:o.map((t=>({id:t.id,name:t.name,description:t.description,symbols:t.symbols,shared:t.shared}))),timestamp:Date.now()}))}catch(t){(0,d.skipAbortError)(t)}}}));function g(t,e){const s=(0,r.service)(l.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);return async(o,i)=>{try{const i=await(0,d.respectAbort)(t,s.putWatchList(e));o((0,n.put)({id:i.id,name:i.name,description:i.description,symbols:i.symbols,shared:i.shared}))}catch(t){(0,d.rethrowAbortError)(t),_(t.message)}}}function L(t,e,s){const o=(0,r.service)(l.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);return async(i,r)=>{i((0,n.rename)({id:e.id,name:s})),await(0,d.respectAbort)(t,o.renameWatchList(e,s))}}function E(t,e,s,o){const i=(0,r.service)(l.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);return async(o,r)=>{"custom"===e.type?(o((0,n.exact)({id:e.id,symbols:s})),await(0,d.respectAbort)(t,i.replaceSymbols(e,s))):b.logWarn("Trying to modify not a custom watchlist")}}function v(t,e,s,o){const i=(0,r.service)(l.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);return async(r,l)=>{if("custom"===e.type){r((0,n.insert)({id:e.id,symbols:s}));try{await(0,d.respectAbort)(t,i.addSymbols(e,s))}catch(t){if((0,d.isAbortError)(t))throw t;const i=e.symbols.filter((t=>!s.includes(t)));r((0,n.exact)({id:e.id,symbols:i})),_(t.message,void 0,o)}}else b.logWarn("Trying to modify not a custom watchlist")}}function A(t,e,s){const o=(0,r.service)(l.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);return async(i,r)=>{i((0,n.exclude)({id:e.id,symbols:s})),await(0,d.respectAbort)(t,o.removeSymbols(e,s))}}function D(t,e){const s=(0,r.service)(l.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);return async(o,i)=>{await(0,d.respectAbort)(t,s.removeWatchList(e)),o((0,n.remove)({id:e.id}))}}function C(t,e){const s=(0,r.service)(l.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);return async(o,n)=>{o((0,a.updateActiveList)(e)),await(0,d.respectAbort)(t,s.setActive(e))}}const O=(0,d.respectLatest)((function(t){const e=(0,r.service)(l.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE);return async(s,o)=>{try{const o=await(0,d.respectAbort)(t,e.getActive());"custom"!==o.type||s((0,n.put)({id:o.id,name:o.name,description:o.description,symbols:o.symbols,shared:o.shared})),s((0,a.updateActiveList)("custom"===o.type?o.id:o.color))}catch(t){(0,d.skipAbortError)(t)}}}))},697169:(t,e,s)=>{function o(t){return t}s.d(e,{asAction:()=>o})},601373:(t,e,s)=>{s.d(e,{columnsSelector:()=>b,getCurrentViewableListByWidgetId:()=>v,getCustomListById:()=>L,getCustomLists:()=>T,getCustomListsMap:()=>g,getGlobalActiveID:()=>u,getGlobalActiveSymbolList:()=>E,
getIsReadyCustomLists:()=>I,highlightedSymbolsSelector:()=>h,isLoadingSelector:()=>A,makeGetIsContainedByMultiSelection:()=>C,positionSelector:()=>D,scrollToIdSelector:()=>y,selectedSymbolsSelector:()=>m,shouldDisplayPositionsSelector:()=>_,sortingSelector:()=>S,tickerTypeSelector:()=>p,widgetOptionsSelector:()=>f,widgetSelector:()=>d});var o=s(377145),n=s(650151),i=s(244e3);function r(t){return{type:"custom",id:t.id,name:t.name,description:t.description,symbols:t.symbols,shared:t.shared}}function l(t){return t.customLists}const a=t=>t.widgets,c=(t,e)=>e,u=t=>t.activeSymbolList,d=(0,o.createSelector)([a,c],((t,e)=>t[e]||{})),m=(0,o.createSelector)(d,(t=>t.selectedSymbols||[])),y=(0,o.createSelector)(d,(t=>t.scrollToId)),S=(0,o.createSelector)(d,(t=>t.sorting||null)),h=(0,o.createSelector)(d,(t=>t.highlightedSymbols||null)),b=(0,o.createSelector)(d,(t=>t.columns)),p=(0,o.createSelector)(d,(t=>t.tickerType)),f=(0,o.createSelector)(d,(t=>t.options||{})),_=(0,o.createSelector)([f,t=>t.isAuthenticated],((t,e)=>t.shouldDisplayPositions&&!0)),T=(0,o.createSelector)(l,(t=>(0,i.getListIds)(t).map((e=>r((0,n.ensureNotNull)((0,i.getListById)(t,e))))))),I=(0,o.createSelector)([l],(t=>null!==t.timestamp)),g=(0,o.createSelector)([l],i.getListsMap),L=(0,o.createSelector)([l,(t,e)=>e],((t,e)=>{const s=(0,i.getListById)(t,e);return null===s?null:r(s)})),E=(0,o.createSelector)([l,()=>null,u],((t,e,s)=>{if(null===s)return null;{const e=(0,i.getListById)(t,s);return null===e?null:r(e)}})),v=(0,o.createSelector)([()=>null,l,()=>null,a,c],((t,e,s,o,n)=>{const l=o[n];if(void 0===l)return null;const a=l.listId;if(null===a)return null;const c=(0,i.getListById)(e,a);return null!==c?r(c):null}));const A=(0,o.createSelector)([d,v],((t,e)=>null===e||t.isLoading||!1)),D=(0,o.createSelector)([t=>t.positions,(t,e)=>e],((t,e)=>t[e]));function C(){const t=(0,o.createSelector)([(t,e)=>e.widgetId,t=>t.widgets],((t,e)=>e[t])),e=(0,o.createSelector)(t,(t=>t.selectedSymbols||[])),s=(0,o.createSelector)(e,(t=>new Set(t)));return(0,o.createSelector)([s,(t,e)=>e.symbol],((t,e)=>t.size>1&&t.has(e)))}},607898:(t,e,s)=>{s.r(e),s.d(e,{reorderSymbolsThunk:()=>b,sortSymbolsThunk:()=>p,removeSelectedSymbolsThunk:()=>f,markSymbolsThunk:()=>T,removeSymbolsThunk:()=>I,addSymbolsThunk:()=>g,renameSymbolListThunk:()=>v,clearSymbolListThunk:()=>A,findInWatchlistThunk:()=>D,updateScrollToIdThunk:()=>C,addSymbolsToCustomListThunk:()=>O,moveSymbolsToCustomListThunk:()=>W,insertSymbolBeforeThunk:()=>w,selectSymbolListThunk:()=>B,userCreateWatchlistThunk:()=>k,saveListAsThunk:()=>R,changeDescriptionThunk:()=>N});var o=s(650151),n=s(244e3),i=s(509806),r=(s(32133),s(219769)),l=s(601373),a=s(398171),c=s(706474),u=s(979359),d=s(363940),m=s(159537),y=s(626800),S=s(153055),h=s(354364);function b(t,e){return(s,o)=>{const n=o(),{isMovable:i}=(0,l.widgetOptionsSelector)(n,t);if(!i)return;const r=(0,l.getCurrentViewableListByWidgetId)(n,t);if(null!==r&&"hot"!==r.type)if("custom"===r.type){const t={...r,symbols:e};s((0,d.replaceWatchlistSymbolsThunk)(null,t,e))}else 0}}
function p(t,e,s){return(i,a)=>{const u=a(),m=(0,l.getCurrentViewableListByWidgetId)(u,t);if(null===m)return;if("hot"===m.type)return;const{symbolsBeforeSorting:y}=(0,l.widgetSelector)(u,t),S=(0,l.sortingSelector)(u,t),h=m.symbols;let b;if(null===e)b=(0,o.ensureNotNull)(y);else{const{column:o,direction:n}=e;b=(0,c.sortSymbols)(t,h,o,n,s)}"custom"===m.type&&(i((0,n.exact)({id:m.id,symbols:b})),i((0,d.replaceWatchlistSymbolsThunk)(null,m,b))),i((0,r.updateWidget)(t,{symbolsBeforeSorting:null===S?[...h]:y,sortingListId:m.id,sorting:e}))}}function f(t){return(e,s)=>{const o=s(),n=(0,l.getCurrentViewableListByWidgetId)(o,t);if(null===n)return;if("hot"===n.type)return;const{isDeletable:i}=(0,l.widgetOptionsSelector)(o,t);if(!i)return;const a=(0,l.selectedSymbolsSelector)(o,t);if(0===a.length)return;const u=a[a.length-1],d=n.symbols[n.symbols.length-1],m=n.symbols.some((t=>t===u)),y=()=>{e(m&&u!==d?(0,r.selectNextAvailableSymbol)(t,u,"next",!0):(0,r.updateWidget)(t,{selectedSymbols:[]})),"custom"===n.type&&e(_(a,n)),(0,c.trackRemoveEvent)(a.length>1)};if(1===a.length)return void y();const h=document.activeElement;(0,S.showConfirm)({text:(0,c.createConfirmRemoveText)(a.length),onConfirm:({dialogClose:t})=>{y(),t()},onClose:()=>{null==h||h.focus()}})}}function _(t,e){return(s,o)=>{if("custom"!==e.type);else{const o={...e,symbols:e.symbols.filter((e=>!t.includes(e)))};s((0,d.removeWatchlistSymbolsThunk)(null,o,t))}}}function T(t,e,s,o){return(t,e)=>{}}function I(t,e,s,o){return(n,i)=>{const r=i(),a=s?(0,l.getCustomListById)(r,s):(0,l.getCurrentViewableListByWidgetId)(r,t);if(null===a)return;if("hot"===a.type)return;const u=new Set((0,l.selectedSymbolsSelector)(r,t)),m=u.has(e)&&!o?Array.from(u):[e],y=()=>{"custom"===a.type&&n((0,d.removeWatchlistSymbolsThunk)(null,a,m)),(0,c.trackRemoveEvent)(m.length>1),n((a.id,(t,e)=>{e()}))};if(1===m.length||Boolean(s))return void y();const h=document.activeElement;(0,S.showConfirm)({text:(0,c.createConfirmRemoveText)(m.length),onConfirm:({dialogClose:t})=>{y(),t()},onClose:()=>{null==h||h.focus()}})}}function g(t,e,s){return(o,n)=>{const i=n(),r=(0,l.getCurrentViewableListByWidgetId)(i,t);if(null===r)return;if("hot"===r.type)return;Promise.resolve(e).then((e=>{var n;let i;"custom"===r.type&&o(E(e,r,s)),i||(i=null!==(n=e[e.length-1])&&void 0!==n?n:null),o(L(t,e,i))}))}}function L(t,e,s){return(o,n)=>{e=e.slice(0,10),(0,h.expandWatchlist)(),(t!==u.WATCHLIST_WIDGET_ID||n().widgets[u.WATCHLIST_WIDGET_ID])&&(o((0,r.updateWidget)(t,{highlightedSymbols:[...e],scrollToId:s?{id:s}:null})),setTimeout((()=>o((0,r.updateWidget)(t,{highlightedSymbols:null}))),500))}}function E(t,e,s,o){return(n,i)=>{const r=new Set(e.symbols),l=t.filter((t=>!r.has(t)&&!r.has((0,y.safeShortName)(t))));if(l.length){const t=[...e.symbols],i=s?e.symbols.indexOf(s):-1;-1===i?t.push(...l):t.splice(i+1,0,...l);const r={...e,symbols:t};n(-1===i?(0,d.addWatchlistSymbolsThunk)(null,r,l,o):(0,d.replaceWatchlistSymbolsThunk)(null,r,t,o))}}}function v(t,e){return(s,n)=>{const i=n();{const n=(0,o.ensureNotNull)((0,
l.getCustomListById)(i,t));s((0,d.renameWatchlistThunk)(null,n,e))}}}function A(t){return(e,s)=>{const o=s(),n=(0,l.getCustomListById)(o,t);if(null!==n&&0!==n.symbols.length){if("colored"===n.type){e(remove({color:n.color,symbols:n.symbols}))}else e((0,d.replaceWatchlistSymbolsThunk)(null,{...n,symbols:[]},[]));e((n.symbols,(t,e)=>{e()}))}}}function D(t,e){return L(t,[e],e)}function C(t,e){return(s,o)=>{const n=o(),i=(0,l.getCurrentViewableListByWidgetId)(n,t);if(!i)return;const{symbols:a}=i;a.includes(e)&&s((0,r.updateWidget)(t,{scrollToId:{id:e}}))}}function O(t,e,s,o){return(n,i)=>{var r;const c=i(),u=(0,l.getCustomListById)(c,e);if(u){const i=s.filter((t=>!(0,a.isSeparatorItem)(t)));if(n(E(i,u,void 0,o)),(0,l.getGlobalActiveID)(c)===e){const e=null!==(r=i[i.length-1])&&void 0!==r?r:null;n(L(t,i,e))}}}}function W(t,e,s){return async(o,n)=>{const i=n(),r=(0,l.getCustomListById)(i,e),c=s.filter((t=>!(0,a.isSeparatorItem)(t)));r&&o(E(c,r));const u=(0,l.getCustomListById)(i,t);u&&o((0,d.removeWatchlistSymbolsThunk)(null,u,s))}}function w(t,e,s){return(o,n)=>{const i=n(),r=(0,l.getCurrentViewableListByWidgetId)(i,t);if(null===r)return;if("hot"===r.type)return;const{symbols:a}=r;if(!a.includes(s))if("custom"===r.type){const t=a.indexOf(e),n=[...a.slice(0,t),s,...a.slice(t)],i={...r,symbols:n};o((0,d.replaceWatchlistSymbolsThunk)(null,i,n))}else 0}}const B=(0,m.respectLatest)((function(t,e){return async(t,s)=>{try{const n=(0,o.ensureNotNull)((0,l.getCustomListById)(s(),e));if(t((0,d.setActiveWatchlistThunk)(null,"custom"===n.type?n.id:n.color)),!s().widgets[u.WATCHLIST_WIDGET_ID])return void(0,h.expandWatchlist)();t((0,r.updateWidget)(u.WATCHLIST_WIDGET_ID,{isLoading:!1,listId:n.id,sorting:null,symbolsBeforeSorting:null,sortingListId:null,selectedSymbols:[],scrollToId:null})),(0,h.expandWatchlist)()}catch(t){(0,m.skipAbortError)(t)}}}));const k=(0,m.respectLatest)((function(t,e,n,r){return async(a,u)=>{try{if(!(0,c.canUseMultipleLists)())return;if(!e||void 0===e.name){const o=await(0,m.respectAbort)(t,(0,c.createSaveRenameDialog)(i.t(null,void 0,s(279984)),void 0,r)());e={name:o,symbols:(null==e?void 0:e.symbols)||[]}}0;const y=(0,d.createWatchlistThunk)(e),S=await(0,m.respectAbort)(t,a(y));if(null===S)return;if(a(B(null,S)),n){const t=(0,l.getCustomListById)(u(),n);if(!t)return;await a(_((0,o.ensureDefined)(e.symbols),(0,o.ensureDefined)(t)))}}catch(t){(0,m.skipAbortError)(t)}}}));function R(t,e,n=!0,r){return async(t,a)=>{if(!(0,c.canUseMultipleLists)())return;const m=await(0,c.createSaveRenameDialog)(i.t(null,void 0,s(799217)),r)();if(!e){const t=(0,o.ensureNotNull)((0,l.getCurrentViewableListByWidgetId)(a(),u.WATCHLIST_WIDGET_ID));e=t.symbols}const y=(0,d.createWatchlistThunk)({name:m,symbols:e}),S=await t(y);null!==S&&n&&t(B(null,S))}}function N(t,e){return async(t,e)=>{}}},706474:(t,e,s)=>{s.d(e,{isValidSeparatorItem:()=>S,separatorValToDisplayVal:()=>h,canUseMultipleLists:()=>b,isImportDataValid:()=>p,createSaveRenameDialog:()=>f,sortSymbols:()=>T,createWatchList:()=>L,compareSymbols:()=>E,toPositionRecord:()=>v,
isEqualRecords:()=>A,getSymbolFromList:()=>D,findNextAvailableSymbol:()=>C,trackRemoveEvent:()=>O,createConfirmRemoveText:()=>W});var o=s(650151),n=s(509806),i=s(484727),r=s(153055),l=s(662654),a=s(37914),c=s(9136),u=s(398171),d=s(173850),m=s(32133),y=s(626800);function S(t){return(0,u.isSeparatorItem)(t)}function h(t){return t.replace(d.SEPARATOR_PREFIX,"")}function b(){return i.enabled("multiple_watchlists")&&!0}function p(t){return"string"==typeof t&&!/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/.test(t)&&!/^[\r\n\t,]*$/.test(t)}function f(t,e,o){return()=>new Promise((i=>{(0,r.showRename)({title:t,initValue:e,text:n.t(null,void 0,s(83796))+":",maxLength:128,onRename:({newValue:t,dialogClose:e})=>{i(t),e()}},o)}))}function _(t){return t.replace("−","-")}function T(t,e,s,n,i){const r=function(t){const e=[],s=[];t.forEach(((t,e)=>{(0,u.isSeparatorItem)(t)&&s.push(e)}));let o=0;s.forEach((s=>{e.push({values:t.slice(o,s),separator:t[s]}),o=s+1}));const n=s[s.length-1],i=t.slice(n+1);return i.length>0&&e.push({values:i,separator:null}),e}(e);return r.forEach((e=>{e.values.sort(((e,r)=>{const u=a.quoteSessionAdapters.get(t).getLastSymbolData(e),d=a.quoteSessionAdapters.get(t).getLastSymbolData(r),m=I(u),S=I(d),h=(t,e)=>{if(!t||"flag"===s)return;var o;return"error"===t.status?void 0:i===l.TickerType.Description&&"short_name"===s?(o=t.values,(0,c.getTranslatedSymbolDescription)(o)||(0,y.safeShortName)(e)):t.values[s]},b=h(u,e),p=h(d,r);return function(t,e){const s=-1===e?-1/0:1/0;return(n,i,r,l)=>{if("rchp"!==t){if(void 0===n&&void 0===i)return 0;if(void 0===n)return-e;if(void 0===i)return e}switch(t){case"short_name":return e*(n===i?0:(0,o.ensure)(n)<(0,o.ensure)(i)?-1:1);case"rchp":return r!==l?r>l?-1:1:(r||(n=void 0),l||(i=void 0),g(n,i,e,s));case"last_price":case"change":case"change_percent":return g(n,i,e,s);case"volume":{const t=(0,o.ensure)(n)>=1e100?s:Number(n),r=(0,o.ensure)(i)>=1e100?s:Number(i);return e*(t-r)}default:return(0,o.ensure)(n)>(0,o.ensure)(i)?-1:1}}}(s,n)(b,p,m,S)}))})),function(t){const e=[];return t.forEach((({values:t,separator:s})=>{e.push(...t),null!==s&&e.push(s)})),e}(r)}function I(t){if(!t)return!1;const e="pre_market"===t.values.current_session,s="post_market"===t.values.current_session;return e||s}function g(t,e,s,o){let n=parseFloat(_(String(t))),i=parseFloat(_(String(e)));return n=isNaN(n)?o:n,i=isNaN(i)?o:i,s*(n-i)}function L(t,e,s){return{type:"custom",id:t,name:e,description:null,symbols:s,shared:!1}}function E(t,e){return t===e||(0,y.safeShortName)(t)===e}function v(t){return{symbol:t.symbol,side:t.side,qty:t.qty,avgPrice:t.avgPrice}}function A(t,e){return t===e||void 0!==t&&void 0!==e&&(t.side===e.side&&t.qty===e.qty&&t.avgPrice===e.avgPrice&&t.symbol===e.symbol)}function D(t,e){if(e.includes(t))return t;{const s=(0,y.safeShortName)(t);if(e.includes(s))return s}}function C(t,e,s){const o="next"===s;for(let s=t;o?s<e.length:s>=0;o?s++:s--)if(!(0,u.isSeparatorItem)(e[s])&&s!==t)return e[s];for(let s=o?0:e.length-1;o?s<t:s>t;o?s++:s--)if(!(0,u.isSeparatorItem)(e[s]))return e[s]}function O(t){
t?(0,m.trackEvent)("Watchlist","Multi select","Remove"):(0,m.trackEvent)("Watchlist","Remove")}function W(t){return n.t(null,{plural:"Do you really want to delete {count} selected symbols?",context:"symbols_and_drawings_count",count:t,replace:{count:t.toString()}},s(222045))}},398171:(t,e,s)=>{function o(t){return!1}s.d(e,{isSeparatorItem:()=>o})},626800:(t,e,s)=>{s.d(e,{safeShortName:()=>n});var o=s(373728);function n(t){try{return(0,o.shortName)(t)}catch(e){return t}}}}]);