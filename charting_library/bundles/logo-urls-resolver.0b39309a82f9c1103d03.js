"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[802],{118737:(o,r,n)=>{n.r(r),n.d(r,{resolveLogoUrls:()=>c,getLogoUrlsHook:()=>u,removeUsdAndStableCoinFromCryptoPairLogos:()=>i});var e=n(99357);const t=(0,e.getLogoUrlResolver)();function c(o,r=e.LogoSize.Medium){const n=o.logoid,c=o["base-currency-logoid"],u=o["currency-logoid"],i=n&&t.getSymbolLogoUrl(n,r);if(i)return[i];const l=c&&t.getSymbolLogoUrl(c,r),g=u&&t.getSymbolLogoUrl(u,r);return l&&g?[l,g]:l?[l]:g?[g]:[]}function u(o,r){let n=!1;return(e,t,u)=>{const l=e["currency-logoid"]&&e["base-currency-logoid"];if(!n&&(e.logoid||l||u)){n=!0;const t=i(c({logoid:e.logoid,"base-currency-logoid":e["base-currency-logoid"],"currency-logoid":e["currency-logoid"]},r));o(t)}}}function i(o){return 2!==o.length?o:function(o){return o.some((o=>l(o)))}(o)&&!function(o){return o.some((o=>o.includes("country")&&!l(o)))}(o)?o.filter((o=>!l(o))):function(o){return o.some((o=>s(o)))}(o)&&function(o){return o.some((o=>g(o)))}(o)?o.filter((o=>g(o))):o}function l(o){return o.includes("country/US")}function g(o){return o.includes("crypto")&&!s(o)}function s(o){return!1}}}]);