"use strict";(self.webpackChunkclinic_internship_app=self.webpackChunkclinic_internship_app||[]).push([[455],{4455:(pe,E,r)=>{r.r(E),r.d(E,{DoctorModule:()=>le});var g=r(6814),_=r(4190),e=r(5879),y=r(2296),b=r(2651);let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-doctor-dashboard"]],decls:14,vars:0,consts:[[1,"container"],["mode","side","opened","",1,"container__side-nav"],["mat-stroked-button","","routerLink","current","routerLinkActive","activeNav"],["mat-stroked-button","","routerLink","history","routerLinkActive","activeNav"],["mat-stroked-button","","routerLink","details","routerLinkActive","activeNav"],[1,"container__content"]],template:function(t,i){1&t&&(e.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1)(2,"ul")(3,"li")(4,"a",2),e._uU(5,"Calendar Programari "),e.qZA()(),e.TgZ(6,"li")(7,"a",3),e._uU(8,"Istoric Programari"),e.qZA()(),e.TgZ(9,"li")(10,"a",4),e._uU(11,"Informatiile Mele"),e.qZA()()()(),e.TgZ(12,"mat-drawer-content",5),e._UZ(13,"router-outlet"),e.qZA()())},dependencies:[_.lC,_.rH,_.Od,y.zs,b.jA,b.kh,b.LW],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:92%}.container__cards[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex-basis:100%}.container__side-nav[_ngcontent-%COMP%]{background-color:#e1ebee;padding:2%;width:300px}.container__side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.container__side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:15px}.container__side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#fff;width:100%}.container__side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.activeNav[_ngcontent-%COMP%]{color:#3f51b5}.container__content[_ngcontent-%COMP%]{padding:2%;height:auto;overflow-x:hidden;overflow-y:auto}.container__content__header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.container__content__header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#189b18;color:#fff}"]}),n})();var c=r(6223),C=r(7700),D=r(304),j=r(2365),q=r(498),T=r(1175),v=r(4170),I=r(2032),M=r(7466);function R(n,o){if(1&n&&e._UZ(0,"img",19),2&n){const t=e.oxw();e.Q6J("src",t.doctorImage,e.LSH)}}function B(n,o){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Telefon Invalid"),e.qZA())}function L(n,o){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Email Invalid"),e.qZA())}function Y(n,o){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"*"),e.qZA())}let Q=(()=>{class n{constructor(t,i,a,s,l){this.doctor=t,this.dialogRef=i,this.authService=a,this.doctorService=s,this.imageUploadService=l,this.doctorImage="",this.hasSelection=new e.vpe,this.doctorForm=new c.cw({displayName:new c.NI("",c.kI.required),phone:new c.NI("",[c.kI.required,c.kI.pattern("^((\\+91-?)|0)?[0-9]{3}( ?)[0-9]{3}( ?)[0-9]{4}$")]),email:new c.NI("",[c.kI.required,c.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),gender:new c.NI("",{nonNullable:!0,validators:c.kI.required}),imageUrl:new c.NI("")}),this.authService.user$.subscribe(u=>{this.doctor=u}),this.getDoctor()}getDoctor(){this.authService.user$.subscribe(t=>{t&&(this.doctor=t,this.autocompleteForm())})}autocompleteForm(){this.doctor&&(this.doctorImage=this.doctor.imageUrl,this.doctorForm.patchValue({email:this.doctor.email,displayName:this.doctor.displayName,phone:this.doctor.phone,gender:this.doctor.gender}))}onSubmit(){if(this.doctorForm.valid){this.hasSelection.emit(!1);const t=this.doctorForm.value;t.uid=this.doctor.uid,this.doctorService.updateDoctor(this.doctor.uid,t),this.doctorService.updateImage(this.doctor.uid,this.doctorImage),this.close(!0)}event&&this.uploadImage(event)}close(t){this.dialogRef.close(t)}uploadImage(t){const i=(t?.target).files?.[0];i&&this.imageUploadService.uploadImage(i,"doctors").subscribe(a=>{this.doctorImage=a})}closeDialog(){this.dialogRef.close()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.WI),e.Y36(C.so),e.Y36(D.e),e.Y36(j.O),e.Y36(q.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-doctor-edit-info-dialog"]],outputs:{hasSelection:"hasSelection"},decls:40,vars:5,consts:[[1,"form-container"],[1,"example-form",3,"formGroup","ngSubmit"],[1,"imageContainer"],["alt","Imagine Doctor Neincarcata","width","50%","height","50%",3,"src",4,"ngIf"],["for","fileInput",1,"fileLabel"],["type","file","accept",".png,.jpg","formControlName","imageUrl","id","fileInput",3,"change"],[1,"example-full-width"],["matInput","","formControlName","displayName","placeholder","Numele tau"],["matSuffix",""],["type","tel","matInput","","placeholder","0712 345 678","formControlName","phone"],[4,"ngIf"],["type","email","matInput","","placeholder","nume@mail.com","required","","formControlName","email"],["formControlName","gender"],["value","Masculin"],["value","Feminin"],["value","Altul"],[1,"submit"],["mat-stroked-button","","color","primary","type","submit"],["mat-button","","color","primary",3,"click"],["alt","Imagine Doctor Neincarcata","width","50%","height","50%",3,"src"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(2,"div",2),e.YNc(3,R,1,1,"img",3),e.TgZ(4,"label",4),e._uU(5," Incarca o imagine "),e.qZA(),e.TgZ(6,"input",5),e.NdJ("change",function(s){return i.uploadImage(s)}),e.qZA()(),e.TgZ(7,"mat-form-field",6)(8,"mat-label"),e._uU(9,"Nume"),e.qZA(),e._UZ(10,"input",7),e.TgZ(11,"mat-icon",8),e._uU(12,"person"),e.qZA()(),e.TgZ(13,"mat-form-field",6)(14,"mat-label"),e._uU(15,"Telefon"),e.qZA(),e._UZ(16,"input",9),e.TgZ(17,"mat-icon",8),e._uU(18,"mode_edit"),e.qZA(),e.YNc(19,B,2,0,"mat-error",10),e.qZA(),e.TgZ(20,"mat-form-field",6)(21,"mat-label"),e._uU(22,"Introduce Emailul"),e.qZA(),e._UZ(23,"input",11),e.TgZ(24,"mat-icon",8),e._uU(25,"alternate_email"),e.qZA(),e.YNc(26,L,2,0,"mat-error",10),e.qZA(),e.TgZ(27,"mat-radio-group",12),e.YNc(28,Y,2,0,"mat-error",10),e.TgZ(29,"mat-radio-button",13),e._uU(30,"Masculin"),e.qZA(),e.TgZ(31,"mat-radio-button",14),e._uU(32,"Feminin"),e.qZA(),e.TgZ(33,"mat-radio-button",15),e._uU(34,"Altul"),e.qZA()(),e.TgZ(35,"div",16)(36,"button",17),e._uU(37,"Confirm\u0103"),e.qZA(),e.TgZ(38,"button",18),e.NdJ("click",function(){return i.closeDialog()}),e._uU(39,"\xcenchide"),e.qZA()()()()),2&t){let a,s,l;e.xp6(1),e.Q6J("formGroup",i.doctorForm),e.xp6(2),e.Q6J("ngIf",i.doctorImage),e.xp6(16),e.Q6J("ngIf",null==(a=i.doctorForm.get("phone"))?null:a.hasError("pattern")),e.xp6(7),e.Q6J("ngIf",null==(s=i.doctorForm.get("email"))?null:s.hasError("pattern")),e.xp6(2),e.Q6J("ngIf",null==(l=i.doctorForm.get("gender"))?null:l.hasError("required"))}},dependencies:[g.O5,y.lW,T.Hw,v.KE,v.hX,v.TO,v.R9,c._Y,c.Fj,c.JJ,c.JL,c.Q7,I.Nt,c.sg,c.u,M.VQ,M.U0],styles:[".form-container[_ngcontent-%COMP%]{margin:20px}"]}),n})();var m=r(5195);let J=(()=>{class n{constructor(t,i){this.authDoct=t,this.dialog=i,this.authDoct.user$.subscribe(a=>{this.doctor=a})}openDialog(){this.dialog.open(Q,{data:this.doctor})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(D.e),e.Y36(C.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-doctor-details"]],decls:25,vars:5,consts:[[1,"information"],[1,"details-card"],[1,"details-card__text"],[1,"light-text"],["mat-button","","color","primary",3,"click"],[1,"details-card__img"],["alt","imaginea de profil a doctorului",3,"src"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Informa\u021biile dumneavoastr\u0103:"),e.qZA(),e.TgZ(3,"mat-card",1)(4,"div",2)(5,"h4"),e._uU(6,"Nume \u0219i prenume:"),e.qZA(),e.TgZ(7,"p",3),e._uU(8),e.qZA(),e.TgZ(9,"h4"),e._uU(10,"Telefon:"),e.qZA(),e.TgZ(11,"p",3),e._uU(12),e.qZA(),e.TgZ(13,"h4"),e._uU(14,"Email:"),e.qZA(),e.TgZ(15,"p",3),e._uU(16),e.qZA(),e.TgZ(17,"h4"),e._uU(18,"Gen"),e.qZA(),e.TgZ(19,"p"),e._uU(20),e.qZA(),e.TgZ(21,"button",4),e.NdJ("click",function(){return i.openDialog()}),e._uU(22,"Editeaz\u0103 Informa\u021bii"),e.qZA()(),e.TgZ(23,"div",5),e._UZ(24,"img",6),e.qZA()()()),2&t&&(e.xp6(8),e.Oqu(null==i.doctor?null:i.doctor.displayName),e.xp6(4),e.Oqu(null==i.doctor?null:i.doctor.phone),e.xp6(4),e.Oqu(null==i.doctor?null:i.doctor.email),e.xp6(4),e.Oqu(null==i.doctor?null:i.doctor.gender),e.xp6(4),e.s9C("src",null==i.doctor?null:i.doctor.imageUrl,e.LSH))},dependencies:[m.a8,y.lW],styles:[".details-card[_ngcontent-%COMP%]{padding:2%;display:flex;flex-direction:row;justify-content:space-between;height:55vh}.details-card__text[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:space-between}.details-card__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .details-card__text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;padding:0}.details-card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:280px;width:280px;object-fit:cover}"]}),n})();var S=r(2572),z=r(4664),$=r(7398),P=r(3680),O=r(8760),Z=r(5147),w=r(7311),N=r(2305),U=r(8034);function X(n,o){if(1&n&&(e.TgZ(0,"mat-card",7)(1,"mat-card-header")(2,"mat-card-title"),e._uU(3),e.qZA(),e.TgZ(4,"mat-card-subtitle"),e._uU(5),e.qZA()(),e.TgZ(6,"mat-card-content")(7,"p")(8,"b"),e._uU(9," Telefon:"),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"p")(12,"b"),e._uU(13),e.qZA(),e._uU(14),e.qZA(),e.TgZ(15,"p")(16,"b"),e._uU(17,"Serviciul: "),e.qZA(),e._uU(18),e.qZA(),e.TgZ(19,"p")(20,"b"),e._uU(21," Pre\u021b:"),e.qZA(),e._uU(22),e.qZA(),e.TgZ(23,"p")(24,"b"),e._uU(25," Fi\u0219iere Ata\u0219ate:"),e.qZA(),e.TgZ(26,"a",8),e._uU(27),e.qZA()()()()),2&n){const t=o.$implicit;e.xp6(3),e.hij("Pacient: ",t.patient.displayName," "),e.xp6(2),e.hij("Ora: ",t.timeSlot,""),e.xp6(5),e.hij(" ",t.patient.phone,""),e.xp6(3),e.hij(" ",t.clinic.name," "),e.xp6(1),e.hij(" - ",t.clinic.address," "),e.xp6(4),e.hij(" ",t.service.name,""),e.xp6(4),e.hij(" ",t.service.price,""),e.xp6(4),e.s9C("href",t.extraDetails.file.url,e.LSH),e.xp6(1),e.Oqu(t.extraDetails.file.name)}}function K(n,o){if(1&n&&(e.TgZ(0,"div",5),e.YNc(1,X,28,9,"mat-card",6),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.appointmentsText)}}function V(n,o){if(1&n&&(e.TgZ(0,"div",5)(1,"h3"),e._uU(2),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.hij("Nicio programare \xeen data de ",t.dateSelected?t.localDateSelected:t.currentLocalDate,"")}}function G(n,o){if(1&n&&(e.TgZ(0,"mat-card",4)(1,"mat-card-header")(2,"mat-card-title"),e._uU(3),e.qZA(),e.TgZ(4,"mat-card-subtitle"),e._uU(5),e.qZA()(),e.TgZ(6,"mat-card-content")(7,"p")(8,"b"),e._uU(9," Telefon:"),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"p")(12,"b"),e._uU(13),e.qZA(),e._uU(14),e.qZA(),e.TgZ(15,"p")(16,"b"),e._uU(17,"Serviciul: "),e.qZA(),e._uU(18),e.qZA(),e.TgZ(19,"p")(20,"b"),e._uU(21," Pre\u021b:"),e.qZA(),e._uU(22),e.qZA(),e.TgZ(23,"p")(24,"b"),e._uU(25," Fi\u0219iere Ata\u0219ate: "),e.qZA(),e.TgZ(26,"a",5),e._uU(27),e.qZA()()()()),2&n){const t=o.$implicit;e.xp6(3),e.hij("Pacient: ",t.patient.displayName," "),e.xp6(2),e.AsE("Data: ",t.localDate,", ",t.timeSlot,""),e.xp6(5),e.hij(" ",t.patient.phone,""),e.xp6(3),e.hij(" ",t.clinic.name," "),e.xp6(1),e.hij(" - ",t.clinic.address," "),e.xp6(4),e.hij(" ",t.service.name,""),e.xp6(4),e.hij(" ",t.service.price,""),e.xp6(4),e.s9C("href",t.extraDetails.file.url,e.LSH),e.xp6(1),e.Oqu(t.extraDetails.file.name)}}function ee(n,o){if(1&n&&(e.ynx(0),e.YNc(1,G,28,10,"mat-card",3),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.appointmentsText)}}function te(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1,"Nu au existat programari"),e.qZA())}const ne=[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:F,children:[{path:"details",component:J},{path:"current",component:(()=>{class n{constructor(t,i,a,s,l,u){this.dateAdapter=t,this.appointmentService=i,this.authService=a,this.clinicService=s,this.specialtyService=l,this.servicesService=u,this.appointments=[],this.appointmentsText=[],this.currentDate=new Date,this.currentLocalDate=this.formatDate(this.currentDate),this.selected=new Date,this.dateSelected=null,this.myFilter=A=>{const d=(A||new Date).getDay();return 0!==d&&6!==d}}formatDate(t){return t.toLocaleDateString("ro-Ro",{day:"numeric",month:"short",year:"numeric"})}sortAppointmentsByTime(t){return t.sort((i,a)=>{const s=i.timeSlot.split(":")[0],l=a.timeSlot.split(":")[0];return i.date-a.date||s-l})}ngOnInit(){this.dateAdapter.setLocale("ro-RO"),this.dateAdapter.getFirstDayOfWeek=()=>1,this.authService.user$.subscribe(t=>{null!==t&&void 0!==t.uid&&(this.doctorId=t.uid,this.getAppointmentsByDate(this.currentLocalDate))})}onClickDate(){this.dateSelected=this.selected,this.dateSelected&&(this.localDateSelected=this.formatDate(this.dateSelected),this.getAppointmentsByDate(this.localDateSelected))}getAppointmentsByDate(t){this.appointments=[],this.appointmentService.queryAppointments(this.doctorId,t).pipe((0,z.w)(i=>{this.appointments=i;const a=this.appointments.map(s=>(0,S.a)({clinic:this.clinicService.getClinic(s.clinicId),specialty:this.specialtyService.getSpecialty(s.specialtyId),service:this.servicesService.getService(s.serviceId)}).pipe((0,$.U)(l=>({clinic:l.clinic.data(),specialty:l.specialty.data(),service:l.service.data(),localDate:s.localDate,timeSlot:s.timeSlot,extraDetails:s.extraDetails,patient:s.patient}))));return(0,S.a)(a)})).subscribe(i=>{this.appointmentsText=this.sortAppointmentsByTime(i),0===this.appointmentsText.length&&(this.appointments=[])})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(P._A),e.Y36(O.H),e.Y36(D.e),e.Y36(Z.j),e.Y36(w.Y),e.Y36(N.r))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-doctor-current"]],decls:8,vars:6,consts:[[1,"container"],[1,"container__date"],[1,"demo-inline-calendar-card"],[3,"selected","dateFilter","minDate","startAt","selectedChange","click"],["class","cards",4,"ngIf"],[1,"cards"],["class","example-card",4,"ngFor","ngForOf"],[1,"example-card"],[3,"href"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-calendar",3),e.NdJ("selectedChange",function(s){return i.selected=s})("click",function(){return i.onClickDate()}),e.qZA()()()(),e.TgZ(4,"h2"),e._uU(5,"Program\u0103rile tale:"),e.qZA(),e.YNc(6,K,2,1,"div",4),e.YNc(7,V,3,1,"div",4)),2&t&&(e.xp6(3),e.Q6J("selected",i.selected)("dateFilter",i.myFilter)("minDate",i.currentDate)("startAt",i.currentDate),e.xp6(3),e.Q6J("ngIf",0!==i.appointments.length),e.xp6(1),e.Q6J("ngIf",0===i.appointments.length))},dependencies:[g.sg,g.O5,m.a8,m.dn,m.dk,m.$j,m.n5,U._H],styles:[".cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:auto}.example-card[_ngcontent-%COMP%]{width:auto;background-color:#fff;margin-bottom:25px}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.container__date[_ngcontent-%COMP%]{display:flex;justify-content:center}.container__date[_ngcontent-%COMP%]   .demo-inline-calendar-card[_ngcontent-%COMP%]{width:300px}"]}),n})()},{path:"history",component:(()=>{class n{constructor(t,i,a,s,l){this.appointmentService=t,this.authService=i,this.clinicService=a,this.specialtyService=s,this.serviceService=l,this.appointmentsText=[],this.todayDate=new Date,this.authService.user$.subscribe(u=>{null!==u&&void 0!==u.uid&&this.appointmentService.dashboardQueryDoctor(u.uid).subscribe(A=>{this.doctorAppointments=A,this.doctorAppointments.sort((d,f)=>{const h=d.timeSlot.split(":")[0],x=f.timeSlot.split(":")[0];return f.date-d.date||h-x}),this.todayDate.setHours(0,0,0,0),this.doctorAppointments.forEach(d=>{if(d.date.toDate()<this.todayDate){const h={clinic:{},date:new Date,localDate:"",service:{},specialty:{},patient:d.patient,timeSlot:"",extraDetails:{}};this.clinicService.getClinic(d.clinicId).subscribe(x=>h.clinic=x.data()),this.specialtyService.getSpecialty(d.specialtyId).subscribe(x=>h.specialty=x.data()),this.serviceService.getService(d.serviceId).subscribe(x=>h.service=x.data()),h.date=d.date.toDate().toString().split(" ").slice(0,4).join(" "),h.timeSlot=d.timeSlot,h.extraDetails=d.extraDetails,h.localDate=d.localDate,this.appointmentsText.push(h)}})})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(O.H),e.Y36(D.e),e.Y36(Z.j),e.Y36(w.Y),e.Y36(N.r))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-doctor-history"]],decls:6,vars:2,consts:[[1,"cards"],[4,"ngIf","ngIfElse"],["noAppointments",""],["class","example-card",4,"ngFor","ngForOf"],[1,"example-card"],[3,"href"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Program\u0103rile tale:"),e.qZA(),e.YNc(3,ee,2,1,"ng-container",1),e.YNc(4,te,2,0,"ng-template",null,2,e.W1O),e.qZA()),2&t){const a=e.MAs(5);e.xp6(3),e.Q6J("ngIf",i.appointmentsText.length>0)("ngIfElse",a)}},dependencies:[g.sg,g.O5,m.a8,m.dn,m.dk,m.$j,m.n5],styles:[".cards[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]{width:auto;background-color:#fff;margin-bottom:25px}"]}),n})()}]}];let ie=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[_.Bz.forChild(ne),_.Bz]}),n})();var k=r(5313);let oe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})();var ae=r(8484);r(6825);let re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,P.BQ,oe,ae.eL]}),n})();var se=r(4104),ce=r(5940),de=r(1476);let le=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,ie,m.QW,y.ot,T.Ps,v.lN,c.u5,k.p0,I.c,U.FA,P.XK,re,k.p0,se.Nh,b.SJ,ce.Cq,de.TU,C.Is,c.UX,M.Fk]}),n})()}}]);