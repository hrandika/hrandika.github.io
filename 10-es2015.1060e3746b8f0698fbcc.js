(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{whJU:function(t,n,e){"use strict";e.r(n),e.d(n,"PostModule",(function(){return v}));var o=e("ofXK"),c=e("YUcS"),a=e("NFeN"),i=e("lR5k"),s=e("tyNb"),r=e("foPq"),l=e("9lff"),u=e("fXoL"),p=e("AcyG"),b=e("jhN1"),g=e("znSr"),d=e("XiUz"),m=e("bTqV");function h(t,n){1&t&&(u.ac(0,"button",8),u.Vb(1,"mat-icon",9),u.Zb())}function f(t,n){1&t&&(u.ac(0,"button",8),u.Vb(1,"mat-icon",10),u.Zb())}const w=function(t){return{background:t,"background-repeat":"no-repeat","background-size":"cover"}},y=[{path:"",component:(()=>{class t{constructor(t,n,e){this.store=t,this.activatedRoute=n,this.meta=e,this.store.selectOnce(r.a.post).subscribe(t=>{if(this.post=t,!t){const t=this.activatedRoute.snapshot.params.id;this.post=Object(l.b)(t)}this.addSocialMeta(this.post)})}ngOnInit(){}addSocialMeta(t){this.meta.addTags([{name:"og:title",content:t.title},{name:"og:description",content:t.description},{name:"og:image",content:t.image},{name:"og:url",content:"https://hrandika.github.io/post/"+t.url},{name:"twitter:card",content:"summary_large_image"}])}}return t.\u0275fac=function(n){return new(n||t)(u.Ub(p.i),u.Ub(s.a),u.Ub(b.c))},t.\u0275cmp=u.Ob({type:t,selectors:[["app-post"]],decls:11,vars:9,consts:[[3,"ngStyle"],["fxLayoutAlign","center center","fxLayout","column",2,"width","100%","height","100vh"],[1,"mat-display-3","white","center"],[1,"mat-display-1","white","center"],["fxLayoutGap","2vw"],["mat-icon-button","","class","large white",4,"ngIf"],["fxLayoutAlign","center center",1,"post"],["fxFlex","50","fxFlex.xs","95","lineNumbers","",3,"src","start"],["mat-icon-button","",1,"large","white"],["svgIcon","app:github"],["svgIcon","app:youtube"]],template:function(t,n){1&t&&(u.ac(0,"div",0),u.ac(1,"div",1),u.ac(2,"h1",2),u.Gc(3),u.Zb(),u.ac(4,"h2",3),u.Gc(5),u.Zb(),u.ac(6,"div",4),u.Ec(7,h,2,0,"button",5),u.Ec(8,f,2,0,"button",5),u.Zb(),u.Zb(),u.Zb(),u.ac(9,"div",6),u.Vb(10,"markdown",7),u.Zb()),2&t&&(u.qc("ngStyle",u.tc(7,w,"linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.90)),url("+(null==n.post?null:n.post.image)+")")),u.Jb(3),u.Hc(null==n.post?null:n.post.title),u.Jb(2),u.Ic("",null==n.post?null:n.post.description," "),u.Jb(2),u.qc("ngIf",n.post.github),u.Jb(1),u.qc("ngIf",n.post.youtube),u.Jb(2),u.qc("src",null==n.post?null:n.post.markdown)("start",5))},directives:[o.m,g.c,d.b,d.c,d.d,o.l,i.a,d.a,m.b,a.a],styles:[".post[_ngcontent-%COMP%]{margin:4vh 0}.white[_ngcontent-%COMP%]{color:#fff}.center[_ngcontent-%COMP%]{width:50%;text-align:center}.mat-icon-button.large[_ngcontent-%COMP%], .mat-icon-button.large[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{width:48px;height:48px;line-height:48px}.mat-icon-button.large[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:48px}@media screen and (min-width:0px) and (max-width:599.99px){.mat-display-3[_ngcontent-%COMP%]{font-size:40px}.mat-display-1[_ngcontent-%COMP%]{font-size:20px}.center[_ngcontent-%COMP%]{width:90%}}"]}),t})()}];let x=(()=>{class t{}return t.\u0275mod=u.Sb({type:t}),t.\u0275inj=u.Rb({factory:function(n){return new(n||t)},imports:[[s.e.forChild(y)],s.e]}),t})(),v=(()=>{class t{}return t.\u0275mod=u.Sb({type:t}),t.\u0275inj=u.Rb({factory:function(n){return new(n||t)},imports:[[o.c,i.b,c.a,x,a.b,m.c]]}),t})()}}]);