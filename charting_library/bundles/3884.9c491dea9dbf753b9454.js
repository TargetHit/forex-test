(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[3884],{752108:e=>{e.exports={wrapper:"wrapper-XOMs_LoN",text:"text-XOMs_LoN"}},604406:(e,t,r)=>{"use strict";r.d(t,{splitThousands:()=>i});var n=r(150335);function i(e,t="&nbsp;"){let r=e+"";-1!==r.indexOf("e")&&(r=function(e){return(0,n.fixComputationError)(e).toFixed(10).replace(/\.?0+$/,"")}(Number(e)));const i=r.split(".");return i[0].replace(/\B(?=(\d{3})+(?!\d))/g,t)+(i[1]?"."+i[1]:"")}},496038:(e,t,r)=>{"use strict";r.d(t,{OfflineScreen:()=>a,renderOfflineScreen:()=>u});var n=r(50959),i=r(500962),o=r(509806),s=r(752108);function a(){return n.createElement("div",{className:s.wrapper},n.createElement("p",{className:s.text},o.t(null,void 0,r(394021))))}function u(e){i.render(n.createElement(a,null),e)}},971204:(e,t,r)=>{"use strict";var n;r.d(t,{StopType:()=>n}),function(e){e[e.StopLoss=0]="StopLoss",e[e.TrailingStop=1]="TrailingStop"}(n||(n={}))},257596:(e,t,r)=>{"use strict";r.d(t,{DisconnectError:()=>s,extractDisconnectionInfoAndConnectionStatus:()=>a});var n=r(122621),i=r(696546),o=r(52346);class s extends o.UserFriendlyError{constructor({disconnectInfo:e,...t}){super(t),this.name="DisconnectError",this.disconnectInfo=e}}function a(e){const t=function(e){const t={message:(0,i.getErrorMessage)(e)};e instanceof s&&(t.disconnectType=e.disconnectInfo.disconnectType);return t}(e);let r=4;return void 0!==t.disconnectType&&[n.DisconnectType.CancelAuthorization,n.DisconnectType.TimeOutForAuthorization].includes(t.disconnectType)&&(r=3),{disconnectionInfo:t,connectionStatus:r}}},52346:(e,t,r)=>{"use strict";function n(e){return e instanceof i}r.d(t,{isUserFriendlyError:()=>n,UserFriendlyError:()=>i});class i extends Error{constructor({detailedErrorMessage:e,userFriendlyMessage:t,cause:r}){super(t),this.name="UserFriendlyError",this.detailedErrorMessage=e,this.cause=r}}},696546:(e,t,r)=>{"use strict";r.d(t,{orderStatusToText:()=>k,sideToText:()=>x,orderTypeToText:()=>b,findArraysDifferences:()=>D,formatNumber:()=>O,isOrderOrPositionMessageType:()=>M,roundToStepByPriceTypeAndSide:()=>E,TasksWithTermination:()=>w,roundDownToPowerOf10:()=>_,isFinalOrderStatus:()=>F,positionSideToText:()=>C,makeNonTradableSymbolText:()=>N,getErrorMessage:()=>L,getLoggerMessage:()=>I,getErrorCauses:()=>A});var n=r(509806),i=r(960521),o=r(122621),s=r(971204),a=r(604406),u=r(486028),c=r(817808),d=r(652945),l=r(52346),p=r(257596);const f={2:{},1:{}},m={2:{},1:{}},T={},g={},y={};let v=!1;const h=(0,c.getLogger)("Trading.Utils");function k(e){return S(),y[e]}function S(){v||(v=!0,f[2][2]=n.t(null,{context:"Market order"},r(610952)),f[2][1]=n.t(null,{context:"Limit order"},r(382377)),f[2][3]=n.t(null,{context:"order"},r(608921)),f[2][4]=n.t(null,{context:"Stop limit order"},r(779062)),f[1][2]=n.t(null,void 0,r(359758)),f[1][1]=n.t(null,void 0,r(398157)),f[1][3]=n.t(null,{context:"order"},r(7122)),f[1][4]=n.t(null,void 0,r(900853)),m[2][o.BracketType.TakeProfit]=n.t(null,{context:"Take profit order"},r(347947)),m[2][o.BracketType.StopLoss]=n.t(null,{context:"Stop loss order"
},r(15307)),m[2][o.BracketType.TrailingStop]=n.t(null,{context:"Trailing stop order"},r(154462)),m[1][o.BracketType.TakeProfit]=n.t(null,void 0,r(129266)),m[1][o.BracketType.StopLoss]=n.t(null,void 0,r(241648)),m[1][o.BracketType.TrailingStop]=n.t(null,void 0,r(86430)),T[1]=n.t(null,{context:"trading"},r(63470)),T[-1]=n.t(null,{context:"trading"},r(742259)),g[1]=n.t(null,{context:"trading"},r(274771)),g[-1]=n.t(null,{context:"trading"},r(951219)),y[2]=n.t(null,void 0,r(885323)),y[1]=n.t(null,void 0,r(767207)),y[6]=n.t(null,void 0,r(328231)),y[3]=n.t(null,void 0,r(614841)),y[4]=n.t(null,void 0,r(373425)),y[5]=n.t(null,void 0,r(442060)))}function x(e,t){S();const r=T[e];return t?r.toUpperCase():r}function b(e){const{orderType:t,uppercase:r,shorten:n,parentId:i,stopType:a}=e;S();const u=n?2:1;let c=f,d=t;return void 0!==i&&(c=m,3===t&&(d=a===s.StopType.TrailingStop?o.BracketType.TrailingStop:o.BracketType.StopLoss),1===t&&(d=o.BracketType.TakeProfit)),r?c[u][d].toUpperCase():c[u][d]}function D(e,t,r,n,i){const o={added:[],modified:[],removed:[]},s=e.slice(0);return t.forEach((t=>{const a=e.findIndex((e=>e[r]===t[r]));if(-1===a)return void o.added.push(t);s[a]=null;const c=e[a];for(const e of n){let r=!0;if(null===c[e]||"object"!=typeof c[e]?r=c[e]===t[e]:i&&(r=(0,u.deepEquals)(c[e],t[e])[0]),!r)return void o.modified.push(t)}})),s.forEach((e=>{e&&o.removed.push(e)})),o}function O(e){return Math.abs(e||0)<.001?"0.00":(0,a.splitThousands)((e||0).toFixed(2))}function M(e){return-1!==Object.keys(o.OrderOrPositionMessageType).map((e=>o.OrderOrPositionMessageType[e])).indexOf(e)}function E(e,t,r,n){const o=(0,i.Big)(e).div(t);return 1===r&&1===n||2===r&&-1===n?o.round(0,0).mul(t).toNumber():1===r&&-1===n||2===r&&1===n?o.round(0,3).mul(t).toNumber():0}const B=n.t(null,void 0,r(609372));class w{constructor(e){this._isFinished=!1,this._isTerminated=!1,this._tasks=e}execute(){return this._isTerminated=!1,this._isExecuted()&&!this._isFinished?this.terminate().then((()=>this._execution=this._execute())):this._execution=this._execute()}async terminate(){if(this._isExecuted()&&!this._isFinished){this._isTerminated=!0;try{await this._execution}catch(e){return void h.logWarn(e)}}}_isExecuted(){return!!this._execution}async _execute(){for(const e of this._tasks){if(this._isTerminated)throw new Error("Login tasks are terminated");try{await e()}catch(e){this._isFinished=!0;const t={detailedErrorMessage:`${B}${P(I(e))}`,userFriendlyMessage:`${B}${P(L(e))}`};throw e instanceof p.DisconnectError?new p.DisconnectError({...t,disconnectInfo:e.disconnectInfo}):new l.UserFriendlyError(t)}}this._isFinished=!0}}function P(e){return void 0===e||""===e?"":`: ${e}`}function _(e){return(0,i.Big)(10).pow(Math.floor(Math.log10(e))).toNumber()}function F(e){return-1!==[2,1,5].indexOf(e)}function C(e){return S(),g[e]}function N(e,t){return n.t(null,void 0,r(221456)).replace("{symbol}",e).replace("{broker}",t)}function L(e){if(void 0===e)return n.t(null,void 0,r(328523));let t
;return t=e instanceof Error?e.message:"object"==typeof e?JSON.stringify(e):e.toString(),(0,d.removeTags)(t)}function I(e){return e instanceof l.UserFriendlyError?(0,d.removeTags)(e.detailedErrorMessage):L(e)}o.BracketType.StopLoss,n.t(null,void 0,r(241648)),o.BracketType.TakeProfit,n.t(null,void 0,r(129266)),o.BracketType.TrailingStop,n.t(null,void 0,r(86430)),o.BracketType.StopLoss,o.BracketType.TakeProfit,o.BracketType.TrailingStop;new Set(["date","dateOrDateTime","default","fixed","variablePrecision","formatQuantity","formatPrice","formatPriceForexSup","integerSeparated","localDate","localDateOrDateTime","percentage","pips","profit","profitInInstrumentCurrency","side","positionSide","status","symbol","text","type","marginPercent","empty"]);function A(e){return(0,l.isUserFriendlyError)(e)&&void 0!==e.cause?[...A(e.cause),e.cause]:[e]}},842974:(e,t,r)=>{"use strict";r.d(t,{bottomTradingTabClassName:()=>d,orderStatusToText:()=>c.orderStatusToText,brokersListFromPlans:()=>p,isOAuthAuthType:()=>m,executionText:()=>T,convertActionDescriptionsToActions:()=>g,isOrderActive:()=>y,makeBrokerSideMaintananceFeatureToggleName:()=>v,makeMaintananceFeatureToggleName:()=>h,getCurrency:()=>k,isModifyOrderSupported:()=>x,isMoveOrderSupported:()=>b,isBatsQuotes:()=>D,isDefined:()=>O,makeDatePlus24UTCHours:()=>M,findDurationMetaInfo:()=>E,getOrderDuration:()=>B,makeInitialOrderDuration:()=>w,makeOrderDuration:()=>P,filterDurationsBySymbolDurations:()=>_,filterDurationsByOrderType:()=>F,getTimestamp:()=>C,adjustSavedCustomFieldsValues:()=>N,getDefaultOrderType:()=>L,isMintickMultiple:()=>I,getAsk:()=>A,getBid:()=>U,getLast:()=>$,isNoQuotes:()=>j,getQuotePrice:()=>q,getPriceStep:()=>Q,roundToStepRequired:()=>H});var n=r(960521),i=r(650151),o=r(486028),s=r(971204),a=r(710567),u=r(79581),c=r(696546);const d="js-bottom-trading-tab";const l=["Paper"];function p(e,t){const r=e.map((e=>e.id)),n=t.map((e=>e.slug_name)),i=t.filter((e=>r.includes(e.slug_name))).map((t=>({metainfo:f(e,t.slug_name),brokerPlan:t}))),o=e.filter((e=>!n.includes(e.id)&&!l.includes(e.id))).map((e=>({metainfo:e}))),s=l.map((t=>({metainfo:f(e,t)})));return s.length>0&&i.splice(0,0,...s),[...i,...o]}function f(e,t){return(0,i.ensureDefined)(e.find((e=>e.id.toLowerCase()===t.toLowerCase())))}function m(e){return void 0!==e&&["oauth","oauth2-implicit-flow","oauth2-code-flow"].includes(e)}function T(e,t){const r=(0,c.sideToText)(e.side)+" "+e.qty+" @ "+t.format(e.price);return r.substring(0,1).toUpperCase()+r.substring(1).toLowerCase()}function g(e){return e?e.map((e=>"-"===e.text||e.separator?new a.Separator:new a.Action({actionId:"Trading.CustomActionId",name:e.name,checkable:e.checkable,checked:e.checked,disabled:void 0!==e.enabled&&!e.enabled,label:e.text,statName:e.statName,icon:e.icon,onExecute:t=>{const r=t.getState();e.action({checkable:r.checkable,checked:r.checked,enabled:!r.disabled,text:r.label})}}))):[]}function y(e){return 6===e||3===e}function v(e){return`${e}-brokers-side-maintenance`.toLowerCase()}function h(e){return`${e}-maintenance`.toLowerCase()}
function k(e,t){return!t&&e.currencySign||e.currency||""}function S(e,t){return Boolean(void 0!==e.parentId&&t.supportModifyBrackets&&(t.supportTrailingStop&&t.supportModifyTrailingStop||e.stopType!==s.StopType.TrailingStop))}function x(e,t){const r=2!==e.type&&void 0===e.parentId&&(t.supportModifyOrderPrice||t.supportEditAmount||t.supportModifyBrackets),n=S(e,t);return Boolean(r||n)}function b(e,t){const r=void 0===e.parentId&&t.supportModifyOrderPrice,n=S(e,t);return Boolean(r||n)}function D(e){var t;return"BATS"===(null===(t=e.originalName)||void 0===t?void 0:t.split(":")[0])}function O(e){return null!=e}function M(){const e=new Date;return e.setUTCHours(e.getUTCHours()+24),e}function E(e,t){return e.find((e=>e.value===t))}function B(e){const{orderDuration:t,orderType:r,savedDuration:n,orderDurations:i,symbolDurations:o}=e;if(void 0!==t)return t;const s=function(e){const{duration:t,orderDurations:r,orderType:n,symbolDurations:i}=e;if(null===t||void 0===r)return null;const o=_(r,i),s=E(F(o,null!=n?n:null),t.type);if(void 0===s)return null;if(void 0!==t.datetime&&(s.hasDatePicker||s.hasTimePicker)){const e=864e5,r=s.hasTimePicker?t.datetime<Date.now():Math.floor((t.datetime-Date.now())/e)<0;t.datetime=r?M().getTime():t.datetime}return t}({duration:n,orderType:r,orderDurations:i,symbolDurations:o});return null!==s?{...s}:w(r,i,o)}function w(e,t,r){var n;if(void 0===t)return null;const i=F(_(t,r),e);if(0===i.length)return null;return P(null!==(n=i.find((e=>e.default)))&&void 0!==n?n:i[0])}function P(e){const t={type:e.value};return Boolean(e.hasTimePicker||e.hasDatePicker)&&(t.datetime=C(M())),t}function _(e,t){return 0===e.length||void 0===t||0===t.length?e:e.filter((({value:e})=>t.includes(e)))}function F(e,t){const r=[1,3,4];return e.filter((e=>{var n;const i=null!==(n=e.supportedOrderTypes)&&void 0!==n?n:r;return null===t||i.includes(t)}))}function C(e){return e.valueOf()}function N(e,t){if(void 0===t.customFields)return{};const r={};return t.customFields.forEach((t=>{var n;const i="ComboBox"===t.inputType;if(i&&t.forceUserEnterInitialValue)return;const o=i?t.items[0].value:t.value,s=null!==(n=e[t.id])&&void 0!==n?n:o;void 0!==s&&(r[t.id]=s)})),r}function L(e){return e.supportLimitOrders?1:e.supportMarketOrders?2:e.supportStopLimitOrders?4:e.supportStopOrders?3:void 0}function I(e,t){if(0===t)return!1;const r=Math.round(1e12*t)/1e12,i=new n.Big(e),o=new n.Big(r);return i.mod(o).eq(0)}function A(e){return(0,o.isNumber)(e.ask)?e.ask:(0,o.isNumber)(e.trade)?e.trade:0}function U(e){return(0,o.isNumber)(e.bid)?e.bid:(0,o.isNumber)(e.trade)?e.trade:0}function $(e){return(0,o.isNumber)(e.trade)?e.trade:0}function j(e){return null===e||void 0===e.ask||void 0===e.bid}function q(e,t){return 1===t?A(e):U(e)}function Q(e){const{price:t,priceType:r,variableMinTickData:n,minTick:i,limitPriceStep:o,stopPriceStep:s}=e;return 1===r&&void 0!==o?o:2===r&&void 0!==s?s:void 0!==n?(0,u.getMinTick)({minTick:i,price:t,variableMinTickData:n}):i}function H(e){const{priceType:t,minTick:r,limitPriceStep:n,stopPriceStep:i}=e
;return 1===t&&void 0!==n?n!==r:2===t&&void 0!==i&&i!==r}}}]);