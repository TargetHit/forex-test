(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[7078],{259142:function(e,t){var n,a,l;a=[t],n=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var a={get passive(){n=!0}};window.addEventListener("testPassive",null,a),window.removeEventListener("testPassive",null,a)}var l="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),i=[],o=!1,s=-1,r=void 0,c=void 0,m=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},h=function(e){var t=e||window.event;return!!m(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)},d=function(){setTimeout((function(){void 0!==c&&(document.body.style.paddingRight=c,c=void 0),void 0!==r&&(document.body.style.overflow=r,r=void 0)}))};e.disableBodyScroll=function(e,a){if(l){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!i.some((function(t){return t.targetElement===e}))){var d={targetElement:e,options:a||{}};i=[].concat(t(i),[d]),e.ontouchstart=function(e){1===e.targetTouches.length&&(s=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var n,a,l,i;1===t.targetTouches.length&&(a=e,i=(n=t).targetTouches[0].clientY-s,!m(n.target)&&(a&&0===a.scrollTop&&0<i||(l=a)&&l.scrollHeight-l.scrollTop<=l.clientHeight&&i<0?h(n):n.stopPropagation()))},o||(document.addEventListener("touchmove",h,n?{passive:!1}:void 0),o=!0)}}else{p=a,setTimeout((function(){if(void 0===c){var e=!!p&&!0===p.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(c=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===r&&(r=document.body.style.overflow,document.body.style.overflow="hidden")}));var u={targetElement:e,options:a||{}};i=[].concat(t(i),[u])}var p},e.clearAllBodyScrollLocks=function(){l?(i.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),o&&(document.removeEventListener("touchmove",h,n?{passive:!1}:void 0),o=!1),i=[],s=-1):(d(),i=[])},e.enableBodyScroll=function(e){if(l){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,i=i.filter((function(t){return t.targetElement!==e})),o&&0===i.length&&(document.removeEventListener("touchmove",h,n?{passive:!1}:void 0),o=!1)}else 1===i.length&&i[0].targetElement===e?(d(),i=[]):i=i.filter((function(t){return t.targetElement!==e}))}},void 0===(l="function"==typeof n?n.apply(t,a):n)||(e.exports=l)},147461:e=>{e.exports={backButton:"backButton-pbr_BOzj"}},221703:e=>{e.exports={wrapper:"wrapper-a7Y2yl3G",container:"container-a7Y2yl3G",tab:"tab-a7Y2yl3G",active:"active-a7Y2yl3G",title:"title-a7Y2yl3G",
icon:"icon-a7Y2yl3G",titleText:"titleText-a7Y2yl3G",nested:"nested-a7Y2yl3G",isTablet:"isTablet-a7Y2yl3G",isMobile:"isMobile-a7Y2yl3G"}},80556:e=>{e.exports={"tablet-normal-breakpoint":"screen and (max-width: 768px)","tablet-small-breakpoint":"screen and (max-width: 430px)",withSidebar:"withSidebar-E5yydi0j",content:"content-E5yydi0j",tabContent:"tabContent-E5yydi0j",applyToAllButton:"applyToAllButton-E5yydi0j"}},101117:e=>{e.exports={themesButtonText:"themesButtonText-hJtL5aqJ",themesButtonIcon:"themesButtonIcon-hJtL5aqJ",defaultsButtonText:"defaultsButtonText-hJtL5aqJ",defaultsButtonItem:"defaultsButtonItem-hJtL5aqJ"}},982850:(e,t,n)=>{"use strict";n.d(t,{DialogSidebarContainer:()=>m,DialogSidebarWrapper:()=>h,DialogSidebarItem:()=>d});var a=n(50959),l=n(497754),i=n.n(l),o=n(72571),s=n(568648),r=n(221703);function c(e){return{isMobile:"mobile"===e,isTablet:"tablet"===e}}function m(e){const{mode:t,className:n,...l}=e,{isMobile:o,isTablet:s}=c(t),m=i()(r.container,s&&r.isTablet,o&&r.isMobile,n);return a.createElement("div",{...l,className:m,"data-role":"dialog-sidebar"})}function h(e){return a.createElement("div",{className:r.wrapper,...e})}function d(e){const{mode:t,title:n,icon:l,isActive:m,onClick:h,...d}=e,{isMobile:u,isTablet:p}=c(t);return a.createElement("div",{...d,className:i()(r.tab,p&&r.isTablet,u&&r.isMobile,m&&r.active),onClick:h},a.createElement(o.Icon,{className:r.icon,icon:l}),!p&&a.createElement("span",{className:r.title},a.createElement("span",{className:r.titleText},n),u&&a.createElement(o.Icon,{className:r.nested,icon:s})))}},61358:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GeneralChartPropertiesDialogRenderer:()=>Z});var a=n(509806),l=n(50959),i=n(500962),o=n(805184),s=n(340935),r=n(976669),c=n(633064),m=n(835117),h=n(870122),d=n.n(h),u=n(497612),p=n(930052),g=n(72571),b=n(299120),y=n(192063),v=n(917850),f=n(9316),C=(n(603605),n(153055));const _=a.t(null,void 0,n(40837));var T=n(753327),S=n(21218),k=n(72621),A=n(32133),w=n(921258),E=n(972535),P=n(101117);function B(e){const{themeName:t,chartWidgetCollection:n,onRemove:a,manager:i}=e,[o,s]=(0,w.useHover)(),r=l.useCallback((()=>function(e,t,n){window.is_authenticated&&(0,C.showConfirm)({text:_.format({name:e}),onConfirm:({dialogClose:n})=>{(0,f.removeTheme)(e),t&&t(e),n()}},n)}(t,a,i)),[t,a,i]),c=l.useCallback((()=>{(0,f.loadTheme)(n,{themeName:t,standardTheme:!1}).then((()=>{n.readOnly()||window.saver.saveChartSilently(),(0,A.trackEvent)("GUI","Switch to custom theme")}))}),[t,n]);return l.createElement("div",{...s},l.createElement(y.PopupMenuItem,{className:P.defaultsButtonItem,isActive:!1,label:t,onClick:c,toolbox:l.createElement(k.RemoveButton,{hidden:!E.mobiletouch&&!o,onClick:r})}))}var M=n(844996);const D=a.t(null,void 0,n(419611)),x=a.t(null,void 0,n(473169)),z=((0,S.appendEllipsis)(a.t(null,void 0,n(309908))),a.t(null,void 0,n(775819)));class I extends l.PureComponent{constructor(e){super(e),this._manager=null,this._handleApplyDefaults=()=>{const{model:e,chartWidgetCollection:t}=this.props;e.restorePreferences();const n=(0,
f.getCurrentTheme)().name;(0,f.loadTheme)(t,{themeName:n,standardTheme:!0,applyOverrides:!0,onlyActiveChart:!0})},this._handleSaveAs=()=>{0},this._handleRemoveTheme=e=>{this.setState({themes:this.state.themes.filter((t=>t!==e))})},this._syncThemeList=()=>{0},this.state={themes:[]},this._syncThemeList()}render(){return l.createElement(T.SlotContext.Consumer,null,(e=>(this._manager=e,l.createElement(p.MatchMedia,{rule:"screen and (max-width: 768px)"},(e=>l.createElement(b.ControlDisclosure,{id:"series-theme-manager",className:!e&&P.themesButtonText,hideArrowButton:e,"data-name":"theme-select",buttonChildren:this._getPlaceHolderItem(e)},this._getThemeItems(e)))))))}_getPlaceHolderItem(e){return e?l.createElement(g.Icon,{className:P.themesButtonIcon,icon:M}):D}_getThemeItems(e){const{isApplyToAllVisible:t,chartWidgetCollection:n,applyToAllCallback:a}=this.props,{themes:i}=this.state;return l.createElement(l.Fragment,null,e&&t&&l.createElement(y.PopupMenuItem,{className:P.defaultsButtonItem,isActive:!1,label:z,onClick:a}),l.createElement(y.PopupMenuItem,{className:P.defaultsButtonItem,isActive:!1,label:x,onClick:this._handleApplyDefaults}),!1,i.length>0&&l.createElement(l.Fragment,null,l.createElement(v.PopupMenuSeparator,{key:"separator"}),i.map((e=>l.createElement(B,{key:e,themeName:e,onRemove:this._handleRemoveTheme,chartWidgetCollection:n,manager:this._manager})))))}}var L=n(370981),N=n(653898),W=n(996038),V=n(982850),R=n(742554);const q={areaSymbolMinTick:"normal",areaSymbolTimezone:"normal",barSymbolMinTick:"normal",barSymbolTimezone:"normal",baselineSymbolMinTick:"normal",baselineSymbolTimezone:"normal",candleSymbolMinTick:"normal",candleSymbolTimezone:"normal",dateFormat:"normal",haSymbolMinTick:"normal",haSymbolTimezone:"normal",hiloSymbolMinTick:"normal",hiloSymbolTimezone:"normal",hollowCandleSymbolMinTick:"normal",hollowCandleSymbolTimezone:"normal",kagiAtrLength:"normal",kagiReversalAmount:"normal",kagiStyle:"normal",kagiSymbolMinTick:"normal",kagiSymbolTimezone:"normal",lineSymbolMinTick:"normal",lineSymbolTimezone:"normal",sessionId:"normal",lockScale:"normal",mainSeriesSymbolAreaPriceSource:"normal",mainSeriesSymbolBaseLevelPercentage:"normal",mainSeriesSymbolBaseLinePriceSource:"normal",mainSeriesSymbolLinePriceSource:"normal",mainSeriesSymbolStyleType:"normal",navButtons:"big",paneButtons:"big",scalesCurrencyUnit:"big",pbLb:"normal",pbSymbolMinTick:"normal",pbSymbolTimezone:"normal",pnfAtrLength:"normal",pnfBoxSize:"normal",pnfReversalAmount:"normal",pnfSources:"normal",pnfStyle:"normal",pnfSymbolMinTick:"normal",pnfSymbolTimezone:"normal",rangeSymbolMinTick:"normal",rangeSymbolTimezone:"normal",renkoAtrLength:"normal",renkoBoxSize:"normal",renkoStyle:"normal",renkoSymbolMinTick:"normal",renkoSymbolTimezone:"normal",scalesPlacement:"normal",symbolLastValueLabel:"big",symbolTextSource:"normal"};var G=n(380132),Y=n(147461);function j(e){return l.createElement(G.BackButton,{className:Y.backButton,size:"medium","aria-label":a.t(null,{context:"input"},n(716936)),preservePaddings:!0,...e})}var H=n(80556)
;const O="properties_dialog.last_page_id";class J extends l.PureComponent{constructor(e){var t;super(e),this._renderChildren=({requestResize:e,isSmallWidth:t})=>(this._requestResize=e,l.createElement("div",{className:H.content},this._renderTabs(t),this._renderTabContent(t))),this._renderApplyToAllButton=()=>l.createElement(p.MatchMedia,{rule:W.DialogBreakpoints.TabletNormal},(e=>this._renderApplyToAll(e))),this._renderFooterLeft=()=>{const{model:e,chartWidgetCollection:t}=this.props,{isApplyToAllVisible:n}=this.state;return l.createElement(I,{model:e,isApplyToAllVisible:n,applyToAllCallback:this._handleApplyToAll,chartWidgetCollection:t})},this._createTabClickHandler=e=>()=>this._selectPage(e),this._selectPage=(e,t)=>{const{activePage:n}=this.state;e!==n&&(n&&n.definitions.unsubscribe(this._onChangeActivePageDefinitions),null!==e&&(t||d().setValue(O,e.id),e.definitions.subscribe(this._onChangeActivePageDefinitions)),this.setState({activePage:e,tableKey:Date.now()},(()=>{this._requestResize&&this._requestResize()})))},this._onChangeActivePageDefinitions=()=>{N.logger.logNormal("Definition collection was updated"),this.setState({tableKey:Date.now()},(()=>{this._requestResize&&this._requestResize()}))},this._onTabVisibilityChanged=()=>{const e=this.props.pages.filter((e=>e.visible.value()));this.setState({visiblePages:e});const t=this.state.activePage;null===t||e.includes(t)||this._selectPage(0===e.length?null:e[0],!0)},this._handleCancel=()=>{this.props.onCancel(),this.props.onClose()},this._handleSubmit=()=>{this.props.onSubmit(),this.props.onClose()},this._handleScroll=()=>{L.globalCloseDelegate.fire()},this._handleApplyToAll=()=>{const{chartWidgetCollection:e,model:t}=this.props,{isApplyToAllVisible:n}=this.state;n&&e.applyPreferencesToAllCharts(t)},this._syncApplyToAllVisibility=()=>{const{chartWidgetCollection:e}=this.props;this.setState({isApplyToAllVisible:(0,u.isMultipleLayout)(e.layout.value())})},this._handleBackClick=()=>{const{activePage:e}=this.state;e&&e.definitions.unsubscribe(this._onChangeActivePageDefinitions),this.setState({activePage:null})};const{pages:n,activePageId:a}=e,i=n.filter((e=>e.visible.value()));let o=null!==(t=i.find((e=>e.id===a)))&&void 0!==t?t:null;if(!o){const e=d().getValue(O),t=i.find((t=>t.id===e));o=t||(i.length>0?i[0]:null)}this.state={activePage:o,visiblePages:i,isApplyToAllVisible:(0,u.isMultipleLayout)(e.chartWidgetCollection.layout.value()),tableKey:Date.now()}}componentDidMount(){const{chartWidgetCollection:e,pages:t}=this.props,{activePage:n}=this.state;e.layout.subscribe(this._syncApplyToAllVisibility),n&&n.definitions.subscribe(this._onChangeActivePageDefinitions),t.forEach((e=>e.visible.subscribe(this._onTabVisibilityChanged)))}componentWillUnmount(){const{chartWidgetCollection:e,pages:t}=this.props,{activePage:n}=this.state;n&&n.definitions.unsubscribe(this._onChangeActivePageDefinitions),e.layout.unsubscribe(this._syncApplyToAllVisibility),t.forEach((e=>e.visible.unsubscribe(this._onTabVisibilityChanged)))}render(){
const{isOpened:e,onClose:t}=this.props,{activePage:i}=this.state;return l.createElement(p.MatchMedia,{rule:W.DialogBreakpoints.TabletSmall},(o=>l.createElement(r.AdaptiveConfirmDialog,{className:H.withSidebar,dataName:"series-properties-dialog",onClose:t,isOpened:e,title:null!==i&&o?i.title:a.t(null,void 0,n(274207)),footerLeftRenderer:this._renderFooterLeft,additionalButtons:this._renderApplyToAllButton(),additionalHeaderElement:null!==i&&o?l.createElement(j,{onClick:this._handleBackClick}):void 0,onSubmit:this._handleSubmit,onCancel:this._handleCancel,render:this._renderChildren,submitOnEnterKey:!1})))}_renderTabContent(e){const{pages:t}=this.props,n=this._getCurrentPage(e);if(n){const e=t.find((e=>e.id===n.id)),a=e?e.definitions.value():[];return l.createElement(R.TouchScrollContainer,{className:H.tabContent,onScroll:this._handleScroll},l.createElement(c.ControlCustomWidthContext.Provider,{value:q},l.createElement(m.PropertyTable,{key:this.state.tableKey},a.map((e=>l.createElement(s.Section,{key:e.id,definition:e}))))))}return null}_renderTabs(e){const{activePage:t,visiblePages:n}=this.state;if(t&&e)return null;const a=this._getCurrentPage(e);return l.createElement(p.MatchMedia,{rule:W.DialogBreakpoints.TabletNormal},(e=>l.createElement(p.MatchMedia,{rule:W.DialogBreakpoints.TabletSmall},(t=>{const i=t?"mobile":e?"tablet":void 0;return l.createElement(V.DialogSidebarContainer,{mode:i,onScroll:this._handleScroll},n.map((e=>l.createElement(V.DialogSidebarItem,{key:e.id,mode:i,"data-name":e.id,title:e.title,icon:e.icon,onClick:this._createTabClickHandler(e),isActive:a?e.id===a.id:void 0}))))}))))}_renderApplyToAll(e){const{isApplyToAllVisible:t}=this.state;return!e&&t&&l.createElement("span",{className:H.applyToAllButton},l.createElement(o.Button,{appearance:"stroke",onClick:this._handleApplyToAll},a.t(null,void 0,n(775819))))}_getCurrentPage(e){const{pages:t}=this.props,{activePage:n}=this.state;let a=null;return n?a=n:!e&&t.length&&(a=t[0]),a}}var U=n(559410),F=n(231605);const K=a.t(null,void 0,n(274207));class Z extends F.DialogRenderer{constructor(e){super(),this._handleClose=()=>{i.unmountComponentAtNode(this._container),this._setVisibility(!1),this._onClose&&this._onClose()},this._handleSubmit=()=>{},this._handleCancel=()=>{this._model.undoToCheckpoint(this._checkpoint)},this._propertyPages=e.propertyPages,this._model=e.model,this._activePageId=e.activePageId,this._onClose=e.onClose,this._chartWidgetCollection=e.chartWidgetCollection,this._checkpoint=this._ensureCheckpoint(e.undoCheckPoint)}hide(e){e?this._handleCancel():this._handleSubmit(),this._handleClose()}isVisible(){return this.visible().value()}show(){i.render(l.createElement(J,{title:K,isOpened:!0,onSubmit:this._handleSubmit,onClose:this._handleClose,onCancel:this._handleCancel,pages:this._propertyPages,model:this._model,activePageId:this._activePageId,chartWidgetCollection:this._chartWidgetCollection}),this._container),this._setVisibility(!0),U.emit("edit_object_dialog",{objectType:"mainSeries",scriptTitle:this._model.mainSeries().title()})}
_ensureCheckpoint(e){return void 0===e&&(e=this._model.createUndoCheckpoint()),e}}},568648:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>'},274207:e=>{e.exports={ar:["إعدادات الرسم البياني"],ca_ES:["Configuració de gràfics"],cs:"Chart settings",de:["Chart Einstellungen"],el:"Chart settings",en:"Chart settings",es:["Configuración del gráfico"],fa:"Chart settings",fr:["Paramètres du graphique"],he_IL:["הגדרות גרף"],hu_HU:"Chart settings",id_ID:["Pengaturan chart"],it:["Impostazioni grafico"],ja:["チャート設定"],ko:["차트 세팅"],ms_MY:["Tetapan Carta"],nl_NL:"Chart settings",pl:["Ustawienia wykresu"],pt:["Configurações do gráfico"],ro:"Chart settings",ru:["Настройки графика"],sv:["Diagraminställningar"],th:["การตั้งค่าชาร์ต"],tr:["Grafik ayarları"],vi:["Cài đặt biểu đồ"],zh:["图表设置"],zh_TW:["圖表設定"]}},775819:e=>{e.exports={ar:["تفعيل على الكل"],ca_ES:["Aplica-ho a tot"],cs:"Apply to all",de:["Auf alle Anwenden"],el:"Apply to all",en:"Apply to all",es:["Aplica a todo"],fa:"Apply to all",fr:["Appliquer à tous"],he_IL:["החל על הכל"],hu_HU:"Apply to all",id_ID:["Terapkan ke seluruh"],it:["Applica su tutti"],ja:["すべてに適用"],ko:["모두 적용"],ms_MY:["Tertakluk untuk semua"],nl_NL:"Apply to all",pl:["Zastosuj do wszystkich"],pt:["Aplicar a todos"],ro:"Apply to all",ru:["Применить ко всем"],sv:["Använd för alla"],th:["ดำเนินการกับทั้งหมด"],tr:["Hepsine uygula"],vi:["Áp dụng cho tất cả"],zh:["应用至全部"],zh_TW:["全部套用"]}},40837:e=>{e.exports={ar:['هل تريد حقًا حذف قالب الرسم البياني "{name}"؟'],ca_ES:["De debò que voleu eliminar la plantilla de gràfic '{name}'?"],cs:"Do you really want to delete Chart Template '{name}' ?",de:["Möchten Sie die Chart-Vorlage '{name}' wirklich löschen?"],el:"Do you really want to delete Chart Template '{name}' ?",en:"Do you really want to delete Chart Template '{name}' ?",es:["¿Está seguro de que desea eliminar la plantilla de gráfico '{name}'?"],fa:"Do you really want to delete Chart Template '{name}' ?",fr:['Voulez-vous vraiment supprimer le modèle de graphique "{name}"?'],he_IL:["האם אתה באמת רוצה למחוק את תבנית הגרף '{name}'?"],hu_HU:"Do you really want to delete Chart Template '{name}' ?",id_ID:["Apakah anda benar-benar ingin menghapus Template Chart '{name}' ?"],it:["Si vuole davvero cancellare il modello del grafico '{name}'?"],ja:["本当にチャートテンプレート '{name}' を削除しますか？"],ko:["차트 템플릿 '{name}'를 정말 삭제하시겠습니까?"],ms_MY:["Adakah anda benar-benar ingin memadamkan Templat Carta '{name}' ?"],nl_NL:"Do you really want to delete Chart Template '{name}' ?",pl:["Czy na pewno chcesz usunąć szablon wykresu „{name}”?"],pt:["Você realmente quer apagar o Template '{name}' do Gráfico?"],ro:"Do you really want to delete Chart Template '{name}' ?",ru:['Вы действительно хотите удалить шаблон графика "{name}"?'],sv:['Vill du verkligen radera diagrammall "{name}"?'],th:["คุณต้องการลบเทมเพลตแผนภูมิ '{name}' หรือไม่"],tr:["'{name}' Grafik Taslağını gerçekten silmek istiyor musunuz?"],
vi:["Bạn có thực sự muốn xoá Mẫu Biểu đồ '{name}' không?"],zh:["您真的要删除图表模板'{name}'吗？"],zh_TW:["您真的要刪除圖表模板'{name}'嗎？"]}}}]);