(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{whJU:function(t,e,n){"use strict";n.r(e),n.d(e,"PostModule",(function(){return f}));var o=n("ofXK"),s=n("tyNb"),i=n("foPq"),c=n("9lff"),a=n("fXoL"),r=n("AcyG"),l=n("jhN1"),b=n("znSr"),p=n("XiUz"),u=n("lR5k");const d=function(t){return{background:t,"background-repeat":"no-repeat","background-size":"100%"}},h=[{path:"",component:(()=>{class t{constructor(t,e,n){this.store=t,this.activatedRoute=e,this.meta=n,this.store.selectOnce(i.a.post).subscribe(t=>{if(this.post=t,!t){const t=this.activatedRoute.snapshot.params.id;this.post=Object(c.b)(t)}this.addFacebookMeta(this.post)})}ngOnInit(){}addFacebookMeta(t){this.meta.addTags([{name:"og:image",content:t.image},{name:"og:description",content:t.description}])}}return t.\u0275fac=function(e){return new(e||t)(a.Ub(r.i),a.Ub(s.a),a.Ub(l.c))},t.\u0275cmp=a.Ob({type:t,selectors:[["app-post"]],decls:8,vars:7,consts:[[3,"ngStyle"],["fxLayoutAlign","center center","fxLayout","column",2,"width","100%","height","100vh"],[1,"mat-display-3","white"],[1,"mat-display-1","white","center"],["fxLayoutAlign","center center",1,"post"],["fxFlex","50","lineNumbers","",3,"src","start"]],template:function(t,e){1&t&&(a.Zb(0,"div",0),a.Zb(1,"div",1),a.Zb(2,"h1",2),a.Dc(3),a.Yb(),a.Zb(4,"h2",3),a.Dc(5),a.Yb(),a.Yb(),a.Yb(),a.Zb(6,"div",4),a.Vb(7,"markdown",5),a.Yb()),2&t&&(a.oc("ngStyle",a.rc(5,d,"linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.90)),url("+(null==e.post?null:e.post.image)+")")),a.Jb(3),a.Ec(null==e.post?null:e.post.title),a.Jb(2),a.Fc("",null==e.post?null:e.post.description," "),a.Jb(2),a.oc("src",null==e.post?null:e.post.markdown)("start",5))},directives:[o.l,b.b,p.b,p.c,u.a,p.a],styles:[".tint-image[_ngcontent-%COMP%]{background-size:100%;min-height:100vh}.post[_ngcontent-%COMP%]{margin:4vh 0}.center[_ngcontent-%COMP%]{width:50%;text-align:center}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=a.Sb({type:t}),t.\u0275inj=a.Rb({factory:function(e){return new(e||t)},imports:[[s.e.forChild(h)],s.e]}),t})();var m=n("YUcS");let f=(()=>{class t{}return t.\u0275mod=a.Sb({type:t}),t.\u0275inj=a.Rb({factory:function(e){return new(e||t)},imports:[[o.b,u.b,m.a,g]]}),t})()}}]);