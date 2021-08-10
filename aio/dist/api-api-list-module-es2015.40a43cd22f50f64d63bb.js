(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{dth9:function(t,e,i){"use strict";i.r(e),i.d(e,"ApiListModule",function(){return O});var s=i("ofXK"),a=i("tk/3"),c=i("PCNd"),r=i("jtHE"),n=i("itXk"),o=i("lJxs"),l=i("fXoL"),u=i("XNiG"),h=i("1G5W"),p=i("vkgz"),b=i("jn67"),f=i("vHPH");let y=(()=>{class t{constructor(t,e){this.http=t,this.logger=e,this.apiBase=b.b+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new u.a,this.sectionsSubject=new r.a(1),this._sections=this.sectionsSubject.pipe(Object(h.a)(this.onDestroy))}get sections(){return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe(t=>this.logger.log(`ApiService got API ${t.length} section(s)`))),this._sections.pipe(Object(p.a)(t=>{t.forEach(t=>{t.deprecated=!!t.items&&t.items.every(t=>"deprecated"===t.stability)})}))}ngOnDestroy(){this.onDestroy.next()}fetchSections(t){const e=this.apiBase+(t||this.apiListJsonDefault);this.http.get(e).pipe(Object(h.a)(this.onDestroy),Object(p.a)(()=>this.logger.log("Got API sections from "+e))).subscribe(t=>this.sectionsSubject.next(t),t=>{throw this.logger.error(t),t})}}return t.\u0275fac=function(e){return new(e||t)(l.Xb(a.a),l.Xb(f.a))},t.\u0275prov=l.Kb({token:t,factory:t.\u0275fac}),t})();var S=i("/lUL"),d=i("x4lQ");const g=["filter"];function v(t,e){if(1&t&&(l.Tb(0,"h2"),l.Tb(1,"a",11),l.Ac(2),l.Sb(),l.Sb()),2&t){const t=l.ec().$implicit;l.Cb(1),l.Gb("deprecated-api-item",t.deprecated),l.jc("href",t.path,l.uc),l.Cb(1),l.Bc(t.title)}}function m(t,e){if(1&t&&(l.Rb(0),l.Tb(1,"li",13),l.Tb(2,"a",11),l.Pb(3,"span"),l.Ac(4),l.Sb(),l.Sb(),l.Qb()),2&t){const t=e.$implicit;l.Cb(2),l.Gb("deprecated-api-item","deprecated"===t.stability),l.jc("href",t.path,l.uc),l.Cb(1),l.Fb("symbol ",t.docType,""),l.Cb(1),l.Cc(" ",t.title," ")}}function j(t,e){if(1&t&&(l.Tb(0,"ul",12),l.zc(1,m,5,7,"ng-container",8),l.Sb()),2&t){const t=l.ec().$implicit;l.Cb(1),l.jc("ngForOf",t.items)}}function C(t,e){if(1&t&&(l.Tb(0,"div"),l.zc(1,v,3,4,"h2",9),l.zc(2,j,2,1,"ul",10),l.Sb()),2&t){const t=e.$implicit;l.Cb(1),l.jc("ngIf",t.items),l.Cb(1),l.jc("ngIf",t.items&&t.items.length)}}class T{constructor(){this.query="",this.status="all",this.type="all"}}let w=(()=>{class t{constructor(t,e){this.apiService=t,this.locationService=e,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new r.a(1),this.searchCriteria=new T,this.types=[{value:"all",title:"All"},{value:"class",title:"Class"},{value:"const",title:"Const"},{value:"decorator",title:"Decorator"},{value:"directive",title:"Directive"},{value:"enum",title:"Enum"},{value:"function",title:"Function"},{value:"interface",title:"Interface"},{value:"pipe",title:"Pipe"},{value:"ngmodule",title:"NgModule"},{value:"type-alias",title:"Type alias"},{value:"package",title:"Package"}],this.statuses=[{value:"all",title:"All"},{value:"stable",title:"Stable"},{value:"deprecated",title:"Deprecated"},{value:"security-risk",title:"Security Risk"}]}ngOnInit(){this.filteredSections=Object(n.a)([this.apiService.sections,this.criteriaSubject]).pipe(Object(o.a)(t=>({sections:t[0],criteria:t[1]})),Object(o.a)(t=>t.sections.map(e=>Object.assign(Object.assign({},e),{items:this.filterSection(e,t.criteria)})))),this.initializeSearchCriteria()}setQuery(t){this.setSearchCriteria({query:(t||"").toLowerCase().trim()})}setStatus(t){this.toggleStatusMenu(),this.status=t,this.setSearchCriteria({status:t.value})}setType(t){this.toggleTypeMenu(),this.type=t,this.setSearchCriteria({type:t.value})}toggleStatusMenu(){this.showStatusMenu=!this.showStatusMenu}toggleTypeMenu(){this.showTypeMenu=!this.showTypeMenu}filterSection(t,{query:e,status:i,type:s}){const a=!e||-1!==t.name.indexOf(e),c=(t.items||[]).filter(t=>(t=>"all"===s||s===t.docType)(t)&&(t=>"all"===i||i===t.stability||"security-risk"===i&&t.securityRisk)(t)&&(t=>a||-1!==t.name.indexOf(e))(t));return c.length?c:a&&"package"===s?[]:null}initializeSearchCriteria(){const{query:t,status:e,type:i}=this.locationService.search(),s=(t||"").toLowerCase();this.queryEl.nativeElement.value=s,this.status=this.statuses.find(t=>t.value===e)||this.statuses[0],this.type=this.types.find(t=>t.value===i)||this.types[0],this.searchCriteria={query:s,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)}setLocationSearch(){const{query:t,status:e,type:i}=this.searchCriteria;this.locationService.setSearch("API Search",{query:t||void 0,status:"all"!==e?e:void 0,type:"all"!==i?i:void 0})}setSearchCriteria(t){this.criteriaSubject.next(Object.assign(this.searchCriteria,t)),this.setLocationSearch()}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(y),l.Ob(S.a))},t.\u0275cmp=l.Ib({type:t,selectors:[["aio-api-list"]],viewQuery:function(t,e){if(1&t&&l.Ec(g,3),2&t){let t;l.oc(t=l.bc())&&(e.queryEl=t.first)}},decls:11,vars:9,consts:[[1,"l-flex-wrap","api-filter"],["label","Type:",3,"options","selected","showSymbol","change"],["label","Status:",3,"options","selected","disabled","change"],[1,"form-search"],["placeholder","Filter","aria-label","Filter Search",3,"input"],["filter",""],[1,"material-icons"],[1,"api-list-container"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","api-list",4,"ngIf"],[3,"href"],[1,"api-list"],[1,"api-item"]],template:function(t,e){1&t&&(l.Tb(0,"div",0),l.Tb(1,"aio-select",1),l.ac("change",function(t){return e.setType(t.option)}),l.Sb(),l.Tb(2,"aio-select",2),l.ac("change",function(t){return e.setStatus(t.option)}),l.Sb(),l.Tb(3,"div",3),l.Tb(4,"input",4,5),l.ac("input",function(t){return e.setQuery(t.target.value)}),l.Sb(),l.Tb(6,"i",6),l.Ac(7,"search"),l.Sb(),l.Sb(),l.Sb(),l.Tb(8,"article",7),l.zc(9,C,3,2,"div",8),l.fc(10,"async"),l.Sb()),2&t&&(l.Cb(1),l.jc("options",e.types)("selected",e.type)("showSymbol",!0),l.Cb(1),l.jc("options",e.statuses)("selected",e.status)("disabled","package"===e.type.value),l.Cb(7),l.jc("ngForOf",l.gc(10,7,e.filteredSections)))},directives:[d.a,s.j,s.k],pipes:[s.b],encapsulation:2}),t})(),O=(()=>{class t{constructor(){this.customElementComponent=w}}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(e){return new(e||t)},providers:[y],imports:[[s.c,c.a,a.b]]}),t})()}}]);
//# sourceMappingURL=api-api-list-module-es2015.40a43cd22f50f64d63bb.js.map