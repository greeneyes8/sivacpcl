

$(function(){
//alert(newurl);


	$("#newpatad").click(function(){
	$('#pidget').show();
	$('#doc_app').hide();
	$('#doc_can').hide();
	});
	$("#makap").click(function(){
		$('#pidget').hide();
		$('#doc_app').show();
		$('#doc_can').hide();
	});
	$("#canap").click(function(){
		$('#pidget').hide();
		$('#doc_app').hide();
		$('#doc_can').show();
	});

        //code start here.

	function updated(msg){
	$("#toast").effect("highlight", {}, 3000);
	$("#toast").text(msg);
	$("#toast").slideUp(300);
	}

var valedid = "Please Select A Patient";

/*
*	Display the Screen Width
*/
$("#dimensions").text($(window).width());
$("#width").text($(window).height());
//alert("first size"+$(window).width());
$(window).resize(function()
{
//alert("width-"+$(window).width()+"-height- "+$(window).height());
	//$("#dimensions").text($(window).width());

	//$("#width").text($(window).height());
});

//var size = $(window).width();
//$("#Logout").text(size);



$('#headline').text("Dash board");
$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
$("#bdet_sm").hide();
$("#mgmt_sm").hide();
$("#med_sm").hide();

$("#cur_med_das").hide();

$("div[id='Dashboard']").addClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');

$("div[id='Referral']").removeClass('clicked');
$("#prog1").hide();
$("#dash-dis1").show();
$("#pagefull").hide();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").hide();
$("#div1").hide();
$("#div2").hide();
$("#inv-body").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();

$("#Dashboard").click(function(){
$("#div2ex").hide();
$("#progchar").hide();
$("#pagefull").hide();
$("#progobj").hide();
$("#bdet_sm").hide();
$("#mgmt_sm").hide();
$("#med_sm").hide();

$("#cur_med_das").hide();
$("#headline").text("Dashboard");
$("#bdet_sm").hide();
$("#med_sm").hide();

$("div[id='Dashboard']").removeClass('blue');
$(this).addClass('clicked');
$("#prog1").hide();
$("#cc_sm").hide();
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").hide();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
/*-----*/
$("#dash-dis1").show();
$("#dashboard").hide();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();
$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").hide();
$("#div1").hide();
$("#div2").hide();
$("#inv-body").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#logoutcontent").hide();

});


$("#pd_tb").click(function(){
$(this).addClass('clicked');
$("div[id='sh_tb']").removeClass('clicked');
$("div[id='cc_tb']").removeClass('clicked');
$("div[id='occ_tb']").removeClass('clicked');

$("#div1").show();
$("#div2").show();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();

$("#basic-dis1").show();
$("#basic-dis2").show();
$("#cc_sm").hide();
$("#cur_med_das").hide();

});


$("#occ_tb").click(function(){
	$(this).addClass('clicked');
$("div[id='cc_tb']").removeClass('clicked');
$("div[id='pd_tb']").removeClass('clicked');
$("div[id='sh_tb']").removeClass('clicked');
$("#div1").hide();
$("#div2").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#cc_sm").hide();
$("#occupation1").show();
$("#occupation2").show();
//$("#preempocc").show();
$("#pagefull").show();
$("#dasprevemp").show();





});

$("#sh_tb").click(function(){
$(this).addClass('clicked');
$("div[id='cc_tb']").removeClass('clicked');
$("div[id='pd_tb']").removeClass('clicked');
$("div[id='occ_tb']").removeClass('clicked');

$("#div1").show();
$("#div2").show();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
$("#dashsubhd").show();
$("#dasprevjhd").show();
$("#Pers-dis1").show();
$("#Pers-dis2").show();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#cc_sm").hide();

});

$("#cc_tb").click(function(){
$(this).addClass('clicked');
$("div[id='pd_tb']").removeClass('clicked');
$("div[id='sh_tb']").removeClass('clicked');
$("div[id='occ_tb']").removeClass('clicked');

$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#div1").hide();
$("#div2").hide();
$("#cc_sm").show();
$("#pagefull").hide();


});

$("#n1").click(function(){
	$('#Histsche').show();
	$('#visitpat').hide();
	$('#Histdis').hide();
   $('#Histschetoday').hide();

//-------------------------------------------------------------//
var lognam = $("#u_name").val();

$("#Hist_sche").dataTable({

	"bJQueryUI"	: true,
	"bProcessing"	: false,
	"bFilter"	: false,
	"bPaginate"	: true,
	"bDestroy"	: true,
	"sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getHistsche',
	'fnServerData'	: function(sSource, aoData, fnCallback){
		aoData.push( { "name": "my_field", "value": lognam } );


		$.ajax({
			'dataType': 'json',
			'type'    : 'POST',
			'url'     : sSource,
			'data'    : aoData,
			'success' : fnCallback
		});
		},
	"aoColumns"	:
	[{ "sTitle"	: "ID","aTargets":[0]},
	{ "sTitle"	: "Date","aTargets":[1]},
	 { "sTitle": "Time","aTargets":[2]}],
	"sDom": '<"subtoolbar">frtip'



});
//-------------------------------------------------------------//





});

$("#n2").click(function(){
		$('#Histsche').hide();
	   $('#visitpat').hide();
	   $('#Histdis').hide();
	  	$('#Histschetoday').show();

//-------------------------------------------------------------//
var lognam = $("#u_name").val();

$("#Hist_sche_today").dataTable({

	"bJQueryUI"	: true,
	"bProcessing"	: false,
	"bFilter"	: false,
	"bPaginate"	: true,
	"bDestroy"	: true,
	"sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getHistschetoday',
	'fnServerData'	: function(sSource, aoData, fnCallback){
		aoData.push( { "name": "my_field", "value": lognam } );


		$.ajax({
			'dataType': 'json',
			'type'    : 'POST',
			'url'     : sSource,
			'data'    : aoData,
			'success' : fnCallback
		});
		},
	"aoColumns"	:
	[{ "sTitle"	: "ID","aTargets":[0]},
	{ "sTitle"	: "Date","aTargets":[1]},
	 { "sTitle": "Time","aTargets":[2]}],
	"sDom": '<"subtoolbar">frtip'



});
//-------------------------------------------------------------//

});


$("#n3").click(function(){
	 $('#Histsche').hide();
	 $('#visitpat').show();
    $('#Histdis').hide();
	 $('#Histschetoday').hide();

//-------------------------------------------------------------//

var lognam = $("#u_name").val();

$("#Histdoc").dataTable({

	"bJQueryUI"	: true,
	"bProcessing"	: false,
	"bFilter"	: false,
	"bPaginate"	: true,
	"bDestroy"	: true,
	"sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getHistDatadoc1',
	'fnServerData'	: function(sSource, aoData, fnCallback){
		aoData.push( { "name": "my_field", "value": lognam } );
		$.ajax({
			'dataType': 'json',
			'type'    : 'POST',
			'url'     : sSource,
			'data'    : aoData,
			'success' : fnCallback
		});
		},
	"aoColumns"	:
	[{ "sTitle"	: "ID","aTargets":[0]},
	{ "sTitle"	: "Checkup Date","aTargets":[1]},
	 { "sTitle": "Doctor Name","aTargets":[2]}],
	"sDom": '<"subtoolbar">frtip'



});
//-------------------------------------------------------------//

});


$("#Basic-details").click(function(){


var eid= $("#empId").val();
if(eid=="")
{
//alert("Please Enter Patient ID");

updated(valedid);
$("#empId").focus();
}
else
{

	$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
$("div[id='pd_tb']").addClass('clicked');
$("div[id='sh_tb']").removeClass('clicked');
$("div[id='cc_tb']").removeClass('clicked');
$("div[id='occ_tb']").removeClass('clicked');
$("#bdet_sm").show();
$("#mgmt_sm").hide();
$("#med_sm").hide();

$("#cc_sm").hide();
$("#cur_med_das").hide();

var name_img = $("#name").val();
if (name_img=='') {
$("#pat_cap_img").show();
$("#camcapimg").show();
$("#cap_hd_pat").hide();
}
else {
$("#pat_cap_img").hide();
$("#camcapimg").hide();
$("#cap_hd_pat").show();

}
$("#headline").text("Basic details");
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('blue');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
$(this).addClass('clicked');
$("#prog1").hide();
/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#dash-dis1").show();
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
/*-----*/

$("#dash-dis1").hide();
$("#basic-dis1").show();
$("#basic-dis2").show();
//$("#Pers-dis1").hide();
//$("#Pers-dis2").hide();

$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").hide();
$("#div1").show();
$("#div2").show();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
$("#inv-body").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();


}


});

$("#Personal-History").click(function(){
var eid= $("#empId").val();
if(eid=="")
{
//alert("Please Enter Patient ID");
updated(valedid);

$("#empId").focus();}
else
{
	$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
$("#bdet_sm").hide();
$("#mgmt_sm").hide();
$("#med_sm").hide();

$("#cur_med_das").hide();
$("#cc_sm").hide();
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('blue');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$(this).addClass('clicked');
$("#prog1").hide();
$("#headline").text("Personal History");
$("div[id='Referral']").removeClass('clicked');


$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").show();
$("#Pers-dis2").show();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").hide();
$("#div1").show();
$("#div2").show();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
$("#inv-body").hide();
$("#in_vest").hide();
$("#daspreshd").hide();


$("#dashsubhd").show();
$("#dasprevjhd").show();

/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#dash-dis1").hide();
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
/*-----*/
}
});

$("#Medical-History").click(function(){
var eid= $("#empId").val();
if(eid=="")
{
updated(valedid);
$("#empId").focus();}
else
{
	$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
$("#mh_tb").addClass('clicked');

$("#bdet_sm").hide();

$("#mgmt_sm").hide();
	$("#med_sm").show();
	$("#obh_sm").hide();

	$("#cur_med_das").hide();
	$("div[id='obh_tb']").removeClass('clicked');

$("#cc_sm").hide();
$("div[id='Medical-History']").removeClass('blue');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
$(this).addClass('clicked');
$("#prog1").hide();
$("#headline").text("Medical History");
$("#dash-dis1").hide();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").show();
$("#medi-dis2").show();
$("#Cur-dis1").show();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").hide();
$("#div1").show();
$("#div2").show();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
$("#inv-body").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();

/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
}
/*-----*/


$("#mh_tb").click(function(){
$(this).addClass('clicked');
$("div[id='obh_tb']").removeClass('clicked');

$("#div1").show();
$("#div2").show();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
$("#Medi-dis1").show();
$("#medi-dis2").show();
$("#Cur-dis1").show();
$("#cur_med_das").hide();
//$("#daspreshd").show();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();


});

if($("#gend").val()=="Female")
{
//alert($("#gend").val());

$("#obh_tb").show();
$("#mh_tb").show();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();

	//$("#Gyna-sys").show();
	$("#div1").show();
$("#div2").show();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
}
if($("#gend").val()=="Male")
{
//alert($("#gend").val());

$("#obh_tb").hide();
$("#mh_tb").hide();
	$("#OBGyn-dis1").hide();
	$("#OBGyn-dis2").hide();
	$("#Gyna-sys").hide();
	$("#div1").show();
$("#div2").show();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
}

$("#obh_tb").click(function(){
$(this).addClass('clicked');
$("div[id='mh_tb']").removeClass('clicked');

//$("#OBGyn-dis1").show();
//$("#OBGyn-dis2").show();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#daspreshd").hide();

	$("#OBGyn-dis1").show();
	$("#OBGyn-dis2").show();
	$("#cur_med_das").hide();
});


});

$("#OB-Gyn-History").click(function(){
var eid= $("#empId").val();
if(eid=="")
{
updated(valedid);
$("#empId").focus();}
else
{
	$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
$("#bdet_sm").hide();
$("#mgmt_sm").hide();
$("#med_sm").hide();
$("#cc_sm").hide();
$("#cur_med_das").hide();
$("div[id='OB-Gyn-History']").removeClass('blue');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
$(this).addClass('clicked');

if($("#gend").val()=="Female")
{
//alert($("#gend").val());
	$("#OBGyn-dis1").show();
	$("#OBGyn-dis2").show();
	$("#Gyna-sys").show();
}
if($("#gend").val()=="Male")
{
//alert($("#gend").val());
	$("#OBGyn-dis1").hide();
	$("#OBGyn-dis2").hide();
	$("#Gyna-sys").hide();
}

$("#prog1").hide();
$("#headline").text("OB/Gyn History");
$("#dash-dis1").hide();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
//$("#OBGyn-dis1").show();
//$("#OBGyn-dis2").show();

$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").hide();
$("#div1").show();
$("#div2").show();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
$("#inv-body").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
}
/*-----*/
});

$("#General-Exam").click(function(){

		var eid= $("#empId").val();
		if(eid=="")
		{

		updated(valedid);
		$("#empId").focus();}
		else
		{
				$("#div2ex").hide();
				$("#progchar").hide();
				$("#progobj").hide();
				$("#bdet_sm").hide();
				$("#mgmt_sm").hide();
				$("#med_sm").hide();
				$("#cc_sm").hide();

				$("#cur_med_das").hide();
				$("div[id='se_tb']").removeClass('clicked');
				$("div[id='General-Exam']").removeClass('blue');
				$("div[id='Dashboard']").removeClass('clicked');
				$("div[id='Basic-details']").removeClass('clicked');
				$("div[id='Personal-History']").removeClass('clicked');
				$("div[id='OB-Gyn-History']").removeClass('clicked');
				$("div[id='Medical-History']").removeClass('clicked');
				$("div[id='Systemic-Exam']").removeClass('clicked');
				$("div[id='Investigations']").removeClass('clicked');
				$("div[id='Provisional-Report']").removeClass('clicked');
				$("div[id='Prescription']").removeClass('clicked');
				$("div[id='Final-Report']").removeClass('clicked');
				$("div[id='Medical-Certi']").removeClass('clicked');
				$("div[id='Management']").removeClass('clicked');
				$("div[id='Progress']").removeClass('clicked');
				$("div[id='Fitness-Certificate']").removeClass('clicked');
				$("div[id='Referral']").removeClass('clicked');
				$("div[id='Settings']").removeClass('clicked');
				$("div[id='Logout']").removeClass('clicked');
				$(this).addClass('clicked');
				$("div[id='0']").addClass('clicked');
				$("#prog1").hide();
				$("#headline").text("Systemic Exam");
				$("#syst-dis").show();
				$("#sys-bdy").show();
				$("#genex-sys").show();
				$("#dash-dis1").hide();
				$("#basic-dis1").hide();
				$("#basic-dis2").hide();
				$("#Pers-dis1").hide();
				$("#Pers-dis2").hide();
				$("#Medi-dis1").hide();
				$("#medi-dis2").hide();
				$("#Cur-dis1").hide();
				$("#OBGyn-dis1").hide();
				$("#OBGyn-dis2").hide();
				//$("#Gen-dis1").show();
				//$("#Gen-dis2").show();
				//$("#syst-dis").hide();
				$("#inve_system").hide();
				$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
				$("#mgmt1").hide();
				$("#medi-cert1").hide();
				$("#final-rep1").hide();
				$("#referal1").hide();
				$("#provi-rep1").hide();
				$("#div1").hide();
				$("#div2").hide();
				$("#occupation1").hide();
				$("#dasprevemp").hide();
				$("#pagefull").hide();
				$("#occupation2").hide();
				$("#inv-body").hide();
				$("#in_vest").hide();
				$("#daspreshd").hide();
				$("#dashsubhd").hide();
				$("#dasprevjhd").hide();
				/*-----*/
				$("div[id='1']").removeClass('clicked');
				$("div[id='2']").removeClass('clicked');
				$("div[id='3']").removeClass('clicked');
				$("div[id='4']").removeClass('clicked');
				$("div[id='5']").removeClass('clicked');
				$("div[id='6']").removeClass('clicked');
				$("div[id='7']").removeClass('clicked');
				$("div[id='8']").removeClass('clicked');
				$("div[id='9']").removeClass('clicked');
				$("div[id='10']").removeClass('clicked');
				$("div[id='11']").removeClass('clicked');
				$("#card-sys").hide();
				$("#Res-sys").hide();
				$("#Abdo-sys").hide();
				$("#Eye-sys").hide();
				$("#ENT-sys").hide();
				$("#Musc-sys").hide();
				$("#Skin-sys").hide();
				$("#Cent-sys").hide();
				$("#Gyna-sys").hide();
				$("#Inju-sys").hide();
				$("#Burn-sys").hide();
				$("#logoutcontent").hide();
		}
		/*-----*/
});
$("#se_tb").click(function(){
var eid= $("#empId").val();
if(eid=="")
{

updated(valedid);
$("#empId").focus();}
else
{
$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();

$("#bdet_sm").hide();
$("#mgmt_sm").hide();
$("#med_sm").hide();
$("#cc_sm").hide();
$("div[id='Systemic-Exam']").removeClass('blue');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
//$("div[id='General-Exam']").removeClass('clicked');

$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
$("div[id='0']").addClass('clicked');
$(this).addClass('clicked');
$("#prog1").hide();

$("#dash-dis1").hide();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();


$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").hide();
$("#div1").hide();
$("#div2").hide();
$("#inv-body").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#card-sys").hide();

/*-----*/
$("div[id='1']").removeClass('clicked');
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#genex-sys").show();
$("#card-sys").hide();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
/*-----*/
}
});

$("#Investigations").click(function(){
var eid= $("#empId").val();
if(eid=="")
{

updated(valedid);
$("#empId").focus();
$("#two2").hide();}
else
{
	$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
$("#bdet_sm").hide();
$("#mgmt_sm").hide();
$("#med_sm").hide();

$("#cur_med_das").hide();
$("#cc_sm").hide();
$("div[id='Investigations']").removeClass('blue');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
$(this).addClass('clicked');
$("#prog1").hide();
$("#headline").text("Investigations");
$("#dash-dis1").hide();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").show();
$("#div1").hide();
$("#div2").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").hide();
$("#in_vest").show();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#inv-body").hide();
$("#showTsts").hide();
$("#viewRslts").show();
$("#one1").show();
/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
/*-----*/
}
});

$("#Provisional-Report").click(function(){
var eid= $("#empId").val();
if(eid=="")
{

updated(valedid);
$("#empId").focus();}
else
{
	$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
	$("#bdet_sm").hide();
$("#mgmt_sm").hide();
	$("#med_sm").hide();

	$("#cur_med_das").hide();
	$("#cc_sm").hide();
$("div[id='Provisional-Report']").removeClass('blue');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
$(this).addClass('clicked');
$("#prog1").hide();
$("#headline").text("Reports");
$("#dash-dis1").hide();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").show();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#inv-body").hide();
$("#div1").show();
$("#div2").show();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();

/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
/*-----*/
	$("#provi-rep1").show();
	$("#final-rep1").show();

}
});


$("#Referral").click(function(){
var eid= $("#empId").val();
if(eid=="")
{
//alert("Please Enter Patient ID");

updated(valedid);
$("#empId").focus();}
else
{
	$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
	$("#bdet_sm").hide();
$("#mgmt_sm").hide();
	$("#med_sm").hide();

	$("#cur_med_das").hide();
	$("#cc_sm").hide();
$("div[id='Referral']").removeClass('blue');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$(this).addClass('clicked');
$("#prog1").hide();
$("#headline").text("Referral");
$("#dash-dis1").hide();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").show();
$("#provi-rep1").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#inv-body").hide();
/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
/*-----*/
}
});

$("#Prescription").click(function(){
var eid= $("#empId").val();
if(eid=="")
{
//alert("Please Enter Patient ID");

updated(valedid);
$("#empId").focus();}
else
{




$("#cur_med_das").hide();
$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
$("#bdet_sm").hide();
$("#mgmt_sm").hide();
$("#med_sm").hide();

$("#cc_sm").hide();
$("div[id='Prescription']").removeClass('blue');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
$(this).addClass('clicked');
$("#prog1").hide();
$("#headline").text("Prescription");
$("#dash-dis1").hide();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").hide();
$("#in_vest").hide();
$("#daspreshd").show();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#inv-body").hide();
$("#div1").hide();
$("#div2").hide();

/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
/*-----*/
}
});
$("#Final-Report").click(function(){
var eid= $("#empId").val();
if(eid=="")
{
//alert("Please Enter Patient ID");

updated(valedid);
$("#empId").focus();}
else
{
$("#cur_med_das").hide();
	$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
	$("#bdet_sm").hide();
$("#mgmt_sm").hide();
	$("#med_sm").hide();

	$("#cc_sm").hide();
$("div[id='Final-Report']").removeClass('blue');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
$(this).addClass('clicked');
$("#headline").text("Final Report");
$("#dash-dis1").hide();
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").show();
$("#referal1").hide();
$("#prog1").hide();
$("#provi-rep1").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#inv-body").hide();
/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
/*-----*/
}
});

$("#mc_tb").click(function(){
var eid= $("#empId").val();
if(eid=="")
{
//alert("Please Enter Patient ID");

updated(valedid);
$("#empId").focus();}
else
{
$("#mgmt-repo1").hide();$("#dash-repo1").hide();
	$("#bdet_sm").hide();
$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
	$("#med_sm").hide();

	$("#cc_sm").hide();
	$("#cur_med_das").hide();
$("div[id='Medical-Certi']").removeClass('blue');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='mg_tb']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='fc_tb']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
$(this).addClass('clicked');
$("#div1").hide();
$("#div2").hide();
$("#prog1").hide();
$("#dash-dis1").hide();
//$("#headline").text("Medical Certi");

$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").show();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#inv-body").hide();
/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
	$("div[id='re_tb']").removeClass('clicked');
}
/*-----*/

});

$("#Management").click(function(){
var eid= $("#empId").val();
if(eid=="")
{
//alert("Please Enter Patient ID");

updated(valedid);
$("#empId").focus();}
else
{
	$("#cur_med_das").show();
	$("#div2ex").hide();
   $("#progchar").hide();
   $("#progobj").hide();
	$("#bdet_sm").hide();
	$("#med_sm").hide();
$("#mgmt-repo1").hide();$("#dash-repo1").hide();
	$("#cc_sm").hide();
	$("#cur_med_das").show();

	$("div[id='mc_tb']").removeClass('clicked');
	$("div[id='fc_tb']").removeClass('clicked');
$("div[id='Management']").removeClass('blue');
$("div[id='mg_tb']").addClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
$("div[id='re_tb']").removeClass('clicked');
$(this).addClass('clicked');
$("#mgmt_sm").show();
$("#div1").show();
$("#div2").show();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
$("#dash-dis1").hide();
$("#headline").text("Management");
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#prog1").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").show();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").show();
$("#provi-rep1").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#inv-body").hide();

/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
/*-----*/
}
$("#mg_tb").click(function(){
	$(this).addClass('clicked');
	$("div[id='mc_tb']").removeClass('clicked');
	$("div[id='fc_tb']").removeClass('clicked');
	$("div[id='re_tb']").removeClass('clicked');


$("#div1").show();
$("#div2").show();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
$("#referal1").show();
$("#mgmt1").show();
$("#medi-cert1").hide();
$("#fitnes-cert1").hide();
$("#provi-rep1").hide();
$("#final-rep1").hide();
$("#cur_med_das").show();
$("#mgmt-repo1").hide();$("#dash-repo1").hide();
});

$("#re_tb").click(function(){
$(this).addClass('clicked');
$("div[id='mc_tb']").removeClass('clicked');
$("div[id='fc_tb']").removeClass('clicked');
$("div[id='mg_tb']").removeClass('clicked');
$("#div1").hide();
$("#div2").hide();
$("#mgmt-repo1").show();
$("#cur_med_das").hide();
$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
$("#provi-rep1").show();
$("#final-rep1").show();
$("#referal1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#fitnes-cert1").hide();$("#dash-repo1").hide();

});


});

$("#Progress").click(function(){
var eid= $("#empId").val();
if(eid=="")
{
//alert("Please Enter Patient ID");

updated(valedid);
$("#empId").focus();}
else
{
	$("#cur_med_das").hide();
	$("#div1").show();
	$("#div2").show();
	$("#occupation1").hide();$("#dasprevemp").hide(); $("#pagefull").hide();$("#occupation2").hide();
	$("#div2ex").show();
	$("#progchar").show();
	$("#progobj").show()
	$("#mgmt_sm").hide();
	$("#bdet_sm").hide();
	$("#med_sm").hide();

	$("#cc_sm").hide();
$("div[id='Progress']").removeClass('blue');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
$(this).addClass('clicked');
$("#dash-dis1").hide();
$("#headline").text("Progress");
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#prog1").show();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#inv-body").hide();
/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
/*-----*/
fnGetTempTrend();
	fnGetBPTrend();
	fnGetPulseTrend();

function fnGetTempTrend()
{
	var empid = $('#empId').val();
	var ticks = ['97','98', '99', '100', '101', '102','103','104'];

	$.ajax
	({
		url: 'http://greenocean.in/rest-tst/index.php/api/example/getERTempTrend',
		dataType: 'json',
		type: 'POST',
		data: {data: empid },
		success: function(data)
		{
			//alert(data.temperature);
			if(data.response =='true')
			{
				plot1 = $.jqplot('chart1', [data.reference,data.temperature ],
				{
					title:'Temperature Trend',
					seriesDefaults:
					{
						trendline:{show:true},
						pointLabels: { show: false },
						showMarker:false
					},
					axes:
					{
					xaxis:
					{
						renderer: $.jqplot.CategoryAxisRenderer,
						ticks: data.time,
						tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
						tickOptions:
						{
							show:false,
							enableFontSupport: true,
							fontFamily: 'Georgia',
							fontSize: '10pt'
						}
						},
						yaxis:
						{
							ticks:ticks
						},
						y2axis:
						{
							ticks:ticks
						}
					},
					series:[{},{yaxis:'y2axis',pointLabels:{show:true},showMarker:true}],
					highlighter:
					{
					show: false
					}
				}).replot();
			}
			else
			{
				document.getElementById("chart1").innerHTML = data.message;
			}
		}
	});
}

function fnGetPulseTrend()
{
	var empid = $('#empId').val();
	var ticks = ['0','20', '40', '60', '80', '100','120','140'];
	$.ajax
	({
		url: 'http://greenocean.in/rest-tst/index.php/api/example/getERPulseTrend',
		dataType: 'json',
		type: 'POST',
		data: {data: empid },
		success: function(data)
		{
			if(data.response =='true')
			{
				plot1 = $.jqplot('PulseChart', [data.reference,data.pulse, ],
				{
					seriesDefaults:
					{
						trendline:{show:true},
						pointLabels: { show: false },
						showMarker:false
					},
					axes:
					{
						xaxis:
						{
						renderer: $.jqplot.CategoryAxisRenderer,
						ticks: data.time,
						tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
						tickOptions:
						{
						show:false,
						enableFontSupport: true,
						fontFamily: 'Georgia',
						fontSize: '10pt'
						}
						},
						yaxis:
						{
						ticks:ticks
						},
						y2axis:
						{
						ticks:ticks
						}
					},
					title:'Pulse Trend',
					series:[{},{yaxis:'y2axis',pointLabels:{show:true},showMarker:true}],
					highlighter:
					{
					show: false
					}
				}).replot();
			}
			else
			{
			document.getElementById("PulseChart").innerHTML = data.message;
			}
		}
	});
}

function fnGetBPTrend()
{
	var empid = $('#empId').val();
	var ticks = ['0', '40',  '80', '120','160'];
	$.ajax
	({
		url: 'http://greenocean.in/rest-tst/index.php/api/example/getERBPTrend',
		dataType: 'json',
		type: 'POST',
		data: {data: empid },
		success: function(data)
		{
			if(data.response =='true')
			{
				plot1 = $.jqplot('BPChart', [data.systolic,data.diastolic, ],
				{
					seriesDefaults:
					{
						renderer:$.jqplot.BarRenderer,
						rendererOptions:{barPadding:0, barMargin:10,barWidth:20},
						pointLabels: { show: true },
						showMarker:true
					},
					axes:
					{
						xaxis:
						{
							renderer: $.jqplot.CategoryAxisRenderer,
							ticks: data.time,
							tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
							tickOptions:
							{
								show:false,
								enableFontSupport: true,
								fontFamily: 'Georgia',
								fontSize: '10pt'

							}
						},
						yaxis:
						{
						ticks:ticks
						},
						y2axis:
						{
						ticks:ticks
						}
					},
					title:'BP Trend',
					series:[{},{yaxis:'y2axis',pointLabels:{show:true},showMarker:true}],
					highlighter:
					{
					show: false
					}
				}).replot();
			}
			else
			{
			document.getElementById("BPChart").innerHTML = data.message;
			}
		}
	});
}
}
});

$("#fc_tb").click(function(){
var eid= $("#empId").val();
if(eid=="")
{
//alert("Please Enter Patient ID");

updated(valedid);
$("#empId").focus();}
else
{
	$("#mgmt-repo1").hide();$("#dash-repo1").hide();
	$("#cur_med_das").hide();
	$("#div1").hide();
$("#div2").hide();
$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
	$("#bdet_sm").hide();
$("#med_sm").hide();

	$("#cc_sm").hide();
$("div[id='Fitness-Certificate']").removeClass('blue');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Provisional-Report']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='mc_tb']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='mg_tb']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Settings']").removeClass('clicked');
$("div[id='Logout']").removeClass('clicked');
$("div[id='Referral']").removeClass('clicked');
$(this).addClass('clicked');
$("#dash-dis1").hide();
//$("#headline").text("Fitness-Certificate");

$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#prog1").hide();
$("#fitnes-cert1").show();
$("#mgmt1").hide();
$("#medi-cert1").hide();
$("#final-rep1").hide();
$("#referal1").hide();
$("#provi-rep1").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#inv-body").hide();
/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
$("#logoutcontent").hide();
	$("div[id='re_tb']").removeClass('clicked');
/*-----*/
}
});



$("#Settings").click(function(){

    var eid= $("#empId").val();
    if(eid=="")
    {
    //alert("Please Enter Patient ID");
    updated(valedid);
    $("#empId").focus();
    }
    else
    {
    	$("#cur_med_das").hide();
    	$("#div2ex").hide();
$("#progchar").hide();
$("#progobj").hide();
    	$("#mgmt_sm").hide();
    	$("#bdet_sm").hide();
    	$("#med_sm").hide();

    	$("#cc_sm").hide();
$("div[id='Settings']").removeClass('blue');
$("div[id='Dashboard']").removeClass('clicked');
$("div[id='Basic-details']").removeClass('clicked');
$("div[id='Personal-History']").removeClass('clicked');
$("div[id='OB-Gyn-History']").removeClass('clicked');
$("div[id='Medical-History']").removeClass('clicked');
$("div[id='General-Exam']").removeClass('clicked');
$("div[id='Systemic-Exam']").removeClass('clicked');
$("div[id='Investigations']").removeClass('clicked');
$("div[id='Prescription']").removeClass('clicked');
$("div[id='Final-Report']").removeClass('clicked');
$("div[id='Medical-Certi']").removeClass('clicked');
$("div[id='Management']").removeClass('clicked');
$("div[id='Progress']").removeClass('clicked');
$("div[id='Referral']").removeClass('blue');
$("div[id='Fitness-Certificate']").removeClass('clicked');
$(this).addClass('clicked');
$("#dash-dis1").hide();
$("#headline").text("Settings");
$("#basic-dis1").hide();
$("#basic-dis2").hide();
$("#div1").hide();
$("#div2").hide();
$("#Pers-dis1").hide();
$("#Pers-dis2").hide();
$("#Medi-dis1").hide();
$("#medi-dis2").hide();
$("#Cur-dis1").hide();
$("#OBGyn-dis1").hide();
$("#OBGyn-dis2").hide();
$("#Gen-dis1").hide();
$("#Gen-dis2").hide();
$("#prog1").hide();
$("#syst-dis").hide();
$("#inve_system").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#inv-body").hide();
$("#provi-rep1").hide();
$("#referal1").hide();
$("#final-rep1").hide();
$("#medi-cert1").hide();
$("#mgmt1").hide();
$("#fitnes-cert1").hide(); $("#mgmt-repo1").hide();$("#dash-repo1").hide();
$("#logoutcontent").show();
var eid =$("#empId").val();
var valueId =$("#uid").val(eid);
$("#bluth").show();


/*-----*/
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();
/*-----*/}
});

$("#Logout").click(function(){
	if(confirm('Are you sure you want to logout?'))
	{
		$("#container").show();
		$("#lonly").hide();
   	$("div[id='submit']").removeClass('clicked');
   	window.location.reload(true);
	}

});

$("#makap").click(function(){
$("#doc_app").show();
});

$("#0").click(function(){
$(this).addClass('clicked');
$("div[id='0']").removeClass('blue');
$("div[id='1']").removeClass('clicked');
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');


$("#genex-sys").show();
$("#card-sys").hide();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();

});

$("#1").click(function(){
$("div[id='1']").removeClass('blue');
$(this).addClass('clicked');
$("div[id='0']").removeClass('clicked');
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');

$("#genex-sys").hide();
$("#card-sys").show();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();

});

$("#2").click(function(){
$("div[id='2']").removeClass('blue');
$(this).addClass('clicked');
$("div[id='0']").removeClass('clicked');
$("div[id='1']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#genex-sys").hide();
$("#card-sys").hide();
$("#Res-sys").show();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();

});
$("#3").click(function(){
$("div[id='3']").removeClass('blue');
$(this).addClass('clicked');
$("div[id='0']").removeClass('clicked');
$("div[id='2']").removeClass('clicked');
$("div[id='1']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#genex-sys").hide();
$("#card-sys").hide();
$("#Res-sys").hide();
$("#Abdo-sys").show();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();

});
$("#4").click(function(){
$("div[id='4']").removeClass('blue');
$(this).addClass('clicked');
$("div[id='0']").removeClass('clicked');
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='1']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#genex-sys").hide();
$("#card-sys").hide();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").show();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();

});
$("#5").click(function(){
$("div[id='5']").removeClass('blue');
$(this).addClass('clicked');
$("div[id='0']").removeClass('clicked');
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='1']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#genex-sys").hide();
$("#card-sys").hide();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").show();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();

});
$("#6").click(function(){
$("div[id='6']").removeClass('blue');
$(this).addClass('clicked');
$("div[id='0']").removeClass('clicked');
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='1']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#genex-sys").hide();
$("#card-sys").hide();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").show();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();

});
$("#7").click(function(){
$("div[id='7']").removeClass('blue');
$(this).addClass('clicked');
$("div[id='0']").removeClass('clicked');
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='1']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#genex-sys").hide();
$("#card-sys").hide();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").show();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();

});
$("#8").click(function(){
$("div[id='8']").removeClass('blue');
$(this).addClass('clicked');
$("div[id='0']").removeClass('clicked');
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='1']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#genex-sys").hide();
$("#card-sys").hide();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").show();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();

});
$("#9").click(function(){
$("div[id='9']").removeClass('blue');
$(this).addClass('clicked');
$("div[id='0']").removeClass('clicked');
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='1']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#genex-sys").hide();
$("#card-sys").hide();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
//$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").hide();

if($("#gend").val()=="Female")
{
	//alert($("#gend").val());
		$("#Gyna-sys").show();
}
});
$("#10").click(function(){
$("div[id='10']").removeClass('blue');
$(this).addClass('clicked');
$("div[id='0']").removeClass('clicked');
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='1']").removeClass('clicked');
$("div[id='11']").removeClass('clicked');
$("#genex-sys").hide();
$("#card-sys").hide();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").show();
$("#Burn-sys").hide();

});
$("#11").click(function(){
$("div[id='11']").removeClass('blue');
$(this).addClass('clicked');
$("div[id='0']").removeClass('clicked');
$("div[id='2']").removeClass('clicked');
$("div[id='3']").removeClass('clicked');
$("div[id='4']").removeClass('clicked');
$("div[id='5']").removeClass('clicked');
$("div[id='6']").removeClass('clicked');
$("div[id='7']").removeClass('clicked');
$("div[id='8']").removeClass('clicked');
$("div[id='9']").removeClass('clicked');
$("div[id='10']").removeClass('clicked');
$("div[id='1']").removeClass('clicked');
$("#genex-sys").hide();
$("#card-sys").hide();
$("#Res-sys").hide();
$("#Abdo-sys").hide();
$("#Eye-sys").hide();
$("#ENT-sys").hide();
$("#Musc-sys").hide();
$("#Skin-sys").hide();
$("#Cent-sys").hide();
$("#Gyna-sys").hide();
$("#Inju-sys").hide();
$("#Burn-sys").show();

});
    $("button").button();
    $("#radio" ).buttonset();
    $("#malerfemale" ).buttonset();
    $("#famplan" ).buttonset();
    $("#educate" ).buttonset();
    $("#diet" ).buttonset();
    $("#dhand" ).buttonset();
    $("#in_vest" ).buttonset();
     $("#nowbtn" ).buttonset();



/*investication*/

$('#viewRslts').click(function(){
$("#two2").show();
$("#one1").hide();
$("#in_vest").hide();
$("#daspreshd").hide();
$("#dashsubhd").hide();
$("#dasprevjhd").hide();
$("#inv-body").show();
$("#showTsts").show();

if (cbc.checked==true)
{
$("#cbc1").show();
$("#atid").show();
$("#srfid").show();


}
else
$("#cbc1").hide();

if (bc.checked==true)
$("#bc1").show();
else
$("#bc1").hide();

if (pft.checked==true)
$("#pf1").show();
else
$("#pf1").hide();

if (aud.checked==true)
$("#aud1").show();
else
$("#aud1").hide();

if (ps.checked==true)
$("#peri_sme1").show();
else
$("#peri_sme1").hide();

if (lft.checked==true)
$("#lft1").show();
else
$("#lft1").hide();

if (uc.checked==true)
$("#uc1").show();
else
$("#uc1").hide();

if (gtt.checked==true)
$("#gtt1").show();
else
$("#gtt1").hide();

if (se.checked==true)
$("#se1").show();
else
$("#se1").hide();

if (lp.checked==true)
$("#lp1").show();
else
$("#lp1").hide();

if (sc.checked==true)
$("#sc1").show();
else
$("#sc1").hide();

if (bu.checked==true)
$("#bu1").show();
else
$("#bu1").hide();

if (hiv.checked==true)
$("#hiv1").show();
else
$("#hiv1").hide();

if (ecg.checked==true)
$("#ecg1").show();
else
$("#ecg1").hide();

if (bsf.checked==true)
$("#bsf1").show();
else
$("#bsf1").hide();

if (hba.checked==true)
$("#hba1").show();
else
$("#hba1").hide();

if (ur.checked==true)
$("#ur1").show();
else
$("#ur1").hide();

if (scn.checked==true)
$("#scn1").show();
else
$("#scn1").hide();

if (ech.checked==true)
$("#ech1").show();
else
$("#ech1").hide();

if (xr.checked==true)
$("#xr1").show();
else
$("#xr1").hide();

if (bspp.checked==true)
$("#bspp1").show();
else
$("#bspp1").hide();

if (bsr.checked==true)
$("#bsr1").show();
else
$("#bsr1").hide();

if (ua.checked==true)
$("#ua1").show();
else
$("#ua1").hide();


if (sr.checked==true)
$("#sr1").show();
else
$("#sr1").hide();

 });

$('#showTsts').click(function(){

$("#in_vest").show();
$("#one1").show();
$("#two2").hide();
$("#cbc1").hide();
$("#bc1").hide();
$("#pf1").hide();
$("#aud1").hide();
$("#inv-body").hide();
$("#sidebar_invest").hide();
$("#peri_sme1").hide();
$("#lft1").hide();
$("#uc1").hide();
$("#gtt1").hide();
$("#se1").hide();
$("#lp1").hide();
$("#sc1").hide();
$("#bu1").hide();
$("#hiv1").hide();
$("#ecg1").hide();
$("#bsf1").hide();
$("#hba1").hide();
$("#ur1").hide();
$("#scn1").hide();
$("#ech1").hide();
$("#xr1").hide();
$("#bspp1").hide();
$("#bsr1").hide();
$("#ua1").hide();
$("#sr1").hide();
});
/*investication*/

        //code end here.




});

