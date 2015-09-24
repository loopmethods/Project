//Check Internet connection Start
var connectionStatus = false;
function checkInternetconnection() {
    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE) {
        alert('No Internet Connection');

    } else {

        alert('Internet Connection there');
    }
}
//<feature name="http://api.phonegap.com/1.0/network"/>
$(document).ready(function () {
    //setInterval(function () {
    //    checkInternetconnection();
    //}, 5000);
});

//$(document).ready(function () {
//    $.ajax({
//        url: "http://www.google.com",
//        context: document.body,
//        error: function (jqXHR, exception) {
//            alert('offline')
//        },
//        success: function () {
//            alert('ONline')
//        }
//    })
//});
//Check Internet connection End

//clearInterval(myInterval);
//logout function Start

var aLogout = "0";
$(document).ready(function () {

    $('.AAlogout').click(function () {
        var res = confirm("Are you sure you want to logout ?");
        if (res == true) {
            aLogout = "0";
            //window.location.href = "#page1";
            //$("#dvHome").removeClass('hidedv').addClass('showdv');
            //$("#dvvDashboard").removeClass('showdv').addClass('hidedv');
            //$("#imgHome").attr("src", "images/home_hover.png");
            //$("#imgMedi").attr("src", "images/media.png");
            showPage("dvHome");
            $(".AAlogout").text('').hide();

        } else {
            aLogout = aLogout;

        }

        //alert(aLogout);
    });
});

//logout function End


//login function Start
try {
    $(document).ready(function () {
        $("#aaLogin").click(function () {

            // LoginFunc();
            // alert(aLogout);
            if (aLogout == "1") {
               
                //window.location.href = "#page15";
                //$("#imgNoti").attr("src", "images/register.png");
                //$("#imgMedi").attr("src", "images/media.png");
                //$("#imgAgenda").attr("src", "images/agenda.png");
                //$("#imgHome").attr("src", "images/home_hover.png");
                //$("#dvMediaList").removeClass('showdv').addClass('hidedv');
                //$("#dvNoti").removeClass('showdv').addClass('hidedv');
                //$("#dvAgenda").removeClass('showdv').addClass('hidedv');
                //$("#dvHome").removeClass('showdv').addClass('hidedv');
                //$("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
                //$("#dvImageList").removeClass('showdv').addClass('hidedv');
                //$("#dvPressRelease").removeClass('showdv').addClass('hidedv');
                //$("#dvvMediaCovrage").removeClass('showdv').addClass('hidedv');
                //$("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
                //$("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
                //$("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
                //$("#dvvDocuments").removeClass('showdv').addClass('hidedv');
                //$("#dvvDashboard").removeClass('hidedv').addClass('showdv');
                //$("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
                //$("#linkBackDocument").removeClass('showdv').addClass('hidedv');
                //$("#dvContactus").removeClass('showdv').addClass('hidedv');

                showPage("dvvDashboard");
				
				

            }
            if (aLogout == "0") {
               
                //window.location.href = "#dvLogin";
                //$("#imgNoti").attr("src", "images/register.png");
                //$("#imgMedi").attr("src", "images/media.png");
                //$("#imgAgenda").attr("src", "images/agenda.png");
                //$("#imgHome").attr("src", "images/home_hover.png");
                //$("#dvMediaList").removeClass('showdv').addClass('hidedv');
                //$("#dvNoti").removeClass('showdv').addClass('hidedv');
                //$("#dvAgenda").removeClass('showdv').addClass('hidedv');
                //$("#dvHome").removeClass('showdv').addClass('hidedv');
                //$("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
                //$("#dvImageList").removeClass('showdv').addClass('hidedv');
                //$("#dvPressRelease").removeClass('showdv').addClass('hidedv');
                //$("#dvvMediaCovrage").removeClass('showdv').addClass('hidedv');
                //$("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
                //$("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
                //$("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
                //$("#dvvDocuments").removeClass('showdv').addClass('hidedv');
                //$("#dvvLogin").removeClass('hidedv').addClass('showdv');
                //$("#dvvDashboard").removeClass('showdv').addClass('hidedv');
                //$("#linkBackDocument").removeClass('showdv').addClass('hidedv');
				// $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
                //$("#dvContactus").removeClass('showdv').addClass('hidedv');
                showPage("dvvLogin");
                aLogout = "0"
            }

        });
    });
}
catch (ex) { }

function GetDashboard(sUserId) {
    //alert(sUserId);


    $.ajax({
        type: "post",
        dataType: "json",
        url: "http://constantdesign.com/samples/indian-african/api/getDashboard.php",
        data: 'user_id=' + sUserId + '',
        success: function (res) {

            //e.preventDefault();
            var sJsonData1 = res.data

            var a22 = sJsonData1[0].title;
            var aa = sJsonData1.length;

            if (aa > 1) {

                //$.each(sJsonData1, function (parindex1, paritem1) {                                            
                //alert(sJsonData1[0].title);

                //var row = "<div  class='press-release'><a href='" + paritem1.url + "'><p class='lead-font'>" + paritem1.title + "</p></a></div>";
                //$("#P1").html(sJsonData1[0].title);
                //$("#dba1").attr("href", sJsonData1[0].url);
                //$("#P2").html(sJsonData1[1].title);
                //$("#dba2").attr("href", sJsonData1[1].url);
                //$("#P3").html(sJsonData1[2].title);
                //$("#P4").html(sJsonData1[3].title);
                //$("#P5").html(sJsonData1[4].title);
                //$("#P6").html(sJsonData1[5].title);
                //$("#P7").html(sJsonData1[6].title);
                //$("#P8").html(sJsonData1[7].title);
                //$('#dvDashboardd').show().removeAttr('display', 'block');
                //window.location.href = "#page15";

                //$("#imgNoti").attr("src", "images/register.png");
                //$("#imgMedi").attr("src", "images/media.png");
                //$("#imgAgenda").attr("src", "images/agenda.png");
                //$("#imgHome").attr("src", "images/home_hover.png");
                //$("#dvMediaList").removeClass('showdv').addClass('hidedv');
                //$("#dvNoti").removeClass('showdv').addClass('hidedv');
                //$("#dvAgenda").removeClass('showdv').addClass('hidedv');
                //$("#dvHome").removeClass('showdv').addClass('hidedv');
                //$("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
                //$("#dvImageList").removeClass('showdv').addClass('hidedv');
                //$("#dvPressRelease").removeClass('showdv').addClass('hidedv');
                //$("#dvvMediaCovrage").removeClass('showdv').addClass('hidedv');
                //$("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
                //$("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
                //$("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
                //$("#dvvDocuments").removeClass('showdv').addClass('hidedv');
                //$("#dvvLogin").removeClass('showdv').addClass('hidedv');
                //$("#dvvDashboard").removeClass('hidedv').addClass('showdv');
				//$("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
		        //$("#dvContactus").removeClass('showdv').addClass('hidedv');
                showPage("dvvDashboard");
            }
            else {

                //$('#dvResult').text("You are not a valid user. Try again.");
                $('#dvDashboarddd').text("Data is not available.").removeAttr('display', 'block');;
                alert('Data is not available.');
                //window.location.href = "#dvLogin";
                //$("#imgNoti").attr("src", "images/register.png");
                //$("#imgMedi").attr("src", "images/media.png");
                //$("#imgAgenda").attr("src", "images/agenda.png");
                //$("#imgHome").attr("src", "images/home_hover.png");
                //$("#dvMediaList").removeClass('showdv').addClass('hidedv');
                //$("#dvNoti").removeClass('showdv').addClass('hidedv');
                //$("#dvAgenda").removeClass('showdv').addClass('hidedv');
                //$("#dvHome").removeClass('showdv').addClass('hidedv');
                //$("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
                //$("#dvImageList").removeClass('showdv').addClass('hidedv');
                //$("#dvPressRelease").removeClass('showdv').addClass('hidedv');
                //$("#dvvMediaCovrage").removeClass('showdv').addClass('hidedv');
                //$("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
                //$("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
                //$("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
                //$("#dvvDocuments").removeClass('showdv').addClass('hidedv');
                //$("#dvvLogin").removeClass('hidedv').addClass('showdv');
                //$("#dvvDashboard").removeClass('showdv').addClass('hidedv');
                $("#txtUserId").focus();


            }
        },
        error: function (xhr, textStatus, error) {

            //Show error message(if occured)
            //$('#dvResult').text("Error: " + error);
            //alert("Error: " + error);
            aLogout = "0";
            alert('You are not a valid user. Try again.');
            $("#txtUserId").focus();


        }
    });

}

function LoginFunc() {
  
    if (aLogout == "1") {
        //window.location.href = "#page15";

        //$("#imgNoti").attr("src", "images/register.png");
        //$("#imgMedi").attr("src", "images/media.png");
        //$("#imgAgenda").attr("src", "images/agenda.png");
        //$("#imgHome").attr("src", "images/home_hover.png");
        //$("#dvMediaList").removeClass('showdv').addClass('hidedv');
        //$("#dvNoti").removeClass('showdv').addClass('hidedv');
        //$("#dvAgenda").removeClass('showdv').addClass('hidedv');
        //$("#dvHome").removeClass('showdv').addClass('hidedv');
        //$("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        //$("#dvImageList").removeClass('showdv').addClass('hidedv');
        //$("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        //$("#dvvMediaCovrage").removeClass('showdv').addClass('hidedv');
        //$("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
        //$("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        //$("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
        //$("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        //$("#dvvLogin").removeClass('showdv').addClass('hidedv');
        //$("#dvvDashboard").removeClass('hidedv').addClass('showdv');
        //$("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        //$("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		//$("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        //$("#dvContactus").removeClass('showdv').addClass('hidedv');
        showPage("dvvLogin");
    }
    else {
        var sJsonData = "[]";
        //e.preventDefault();
        //e.stopPropagation();
        //Get control's values
        var sUserId = $("#txtUserId").val();
        var sPwd = $("#txtPassword").val();

        var msg = "";
        //check for validation
        if (sUserId == '') {
            msg = "Please enter User-Id.";
            alert(msg);
            $("#txtUserId").focus();
            return false;
        }
        if (sPwd == '') {
            msg = "Please enter password";
            alert(msg);
            $("#txtPassword").focus();
            return false;
        }
       
        if (msg.length == 0) {
            //Jquery ajax call to server side method
            $.ajax({
                type: "post",
                dataType: "json",
                url: "http://constantdesign.com/samples/indian-african/api/getLogin.php",
                data: 'user_name=' + sUserId + '&password=' + sPwd,
                //data: '{"user_name":' + sUserId + ', "password":' + sPwd + '}',
                //data: '{"country":"India"}',

                success: function (res) {

                    //e.preventDefault();

                    //$(".AAlogout").text('Logout').show();

                    sJsonData = res.data;
                    var sStatus = sJsonData[0].status;

                    var aa = sJsonData.length;
                    //console.log(aa);
                   

                    if (sStatus == 1) {
                        aLogout = "1";
                        $(".AAlogout").html('<img src="images/logout.png" width="25" height="25" style="cursor:pointer;">').show();
                        //Set message
                        //$('#dvResult').text("Your are successfully login.");
                        //Reset controls                          
                        $('#txtUserId').val('');
                        $('#txtPassword').val('');
                        alert('You are successfully logged in.');
                        var uid = sJsonData[0].user_id;
                        GetDashboard(uid);

                        //window.location.href = "#page15";

                    }
                    else {
                        aLogout = "0";
                        $(".AAlogout").html('<img src="images/logout.png" width="25" height="25">').hide();
                        //$('#dvResult').text("You are not a valid user. Try again.");
                        alert('You are not a valid user. Try again.');
                        $("#txtUserId").focus();
                    }
                    //Fade Out to disappear message after 6 seconds
                    //$('#dvResult').fadeOut(6000);
                },
                error: function (xhr, textStatus, error) {
                    //Show error message(if occured)
                    //$('#dvResult').text("Error: " + error);
                    alert('You are not a valid user. Try again.');
                    $("#txtUserId").focus();

                }
            });
        }
        else {
            //Validation failure message
            $('#dvResult').html('');
            $('#dvResult').html(msg);
        }
        $('#dvResult').fadeIn();
    }
}

//login function End

//PressReleases Start



$(document).ready(function () {
    var xJsonData = "[]";
    //var jsonList = "PressReleases.json";
    var jsonList = "http://iafs.in/api/getPressReleases.php";
    $.getJSON(jsonList, function (r) {
        xJsonData = r.data;
        console.log(r.data);
        var items = [];
        $("#dvpressRelease").html("");
        var block = "<div>";
        $.each(xJsonData, function (index, item) {
            var row = "<div class='press-release'>";
            row += "<a class='PRDesc' href='#dvPRDescription' data-id=" + item.archive_id + ">";
            row += "<p class='lead-font'>" + item.title1 + "</p></a>";
            row += "</div>";
            block += row;
        });
        block += '</div>';
        $('#dvpressRelease').html(block);
        $("#dvpressRelease").slideDown("slow");

    });

    $("#dvpressRelease").on("click", "a.PRDesc", function () {

        var sArchiveId = $(this).attr("data-id");
        $("#dvPressReleaseDrp").html("");
        var block = "<div>";
        $.each(xJsonData, function (parindex, paritem) {
            if (paritem.archive_id === sArchiveId) {
                //console.log(paritem.archive_id);
                //alert(paritem.archive_id);
                var row = "<div id='box-press-release-link'>";
                row += "";
                row += "<div id='dv_Title1' class='press-release'><p class='lead-font'>" + paritem.title1 + "</p></div>";
                row += "<div id='dv_Description' class='press-release-desc'><p class='lead-font'>" + paritem.description + "</p></div>";
                block += row;
                //$.each(paritem.images, function (childindex, childitem) {
                //    $("#children").append("<img class='img' data-id='" + childitem.gallery_media_id + "' tite='" + childitem.gallery_media_id + "' src='http://iafs.in/images/gallery/" + childitem.url + "' />");
                //});
            }
        });
        block += '</div>';
        $('#dvPressReleaseDrp').html(block);
        $("#dvPressReleaseDrp").slideDown("slow");

        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media_hover.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home.png");
        $("#dvMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaCovrage").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
        $("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvDashboard").removeClass('showdv').addClass('hidedv');
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#page19").removeClass('showdv').addClass('hidedv');

        //Hide all
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page30").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');

        $("#dvPRDescription").removeClass('hidedv').addClass('showdv');
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('hidedv').addClass('showdv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		$("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		$("#dvContactus").removeClass('showdv').addClass('hidedv');
    });
});
//PressReleases End



//START Media Coverage
$(document).ready(function () {
    //var jsonList = "mediaCovrage.json";
    var jsonList = "http://constantdesign.com/samples/indian-african/api/getMediaCoverage.php";
    var json = $.getJSON(jsonList, function (data) {
        //alert(data.data[0].title1);
        var block = "<div>";

        for (var i = 0; i < data.data.length; i++) {
            //alert(data.data[i].archive_id);
            //console.log(data.data[i].title2);

            var row = "<div class='press-release'>";
            row += '<a href="' + data.data[i].url + '" target="_blank">';
            row += "<p class='lead-font'>" + data.data[i].title1 + "</p></a>";
            row += '</div>';
            block += row;
        }
        block += '</div>';
        $('#dvMediaCovrage').html(block);
        $("#dvMediaCovrage").slideDown("slow");

    });
    //alert(json);
});
//end Media Coverage

//end Media Archive
$(document).ready(function () {
    var jsonList = "http://constantdesign.com/samples/indian-african/api/getMediaArchive.php";
    var json = $.getJSON(jsonList, function (data) {
        //alert(data.data[0].title1);
        var block = "<div>";

        for (var i = 0; i < data.data.length; i++) {
            //alert(data.data[i].archive_id);
            //console.log(data.data[i].title2);

            var row = "<div class='press-release'>";
            row += '<a href="#" target="_blank">';
            row += "<p class='lead-font'>" + data.data[i].title1 + "</p></a>";
            row += '</div>';
            block += row;
        }
        block += '</div>';
        $('#dvMediaAdvisory').html(block);
        $("#dvMediaAdvisory").slideDown("slow");
    });
    //alert(json);
});
//end Media Archive


//Start Speeches & Statements
$(document).ready(function () {
    //var jsonList = "mediaCovrage.json";
    var jsonList = "http://constantdesign.com/samples/indian-african/api/getSpeeches.php";
    var json = $.getJSON(jsonList, function (data) {
        //alert(data.data[0].title1);
        var block = "<div>";

        for (var i = 0; i < data.data.length; i++) {
            //alert(data.data[i].archive_id);
            //console.log(data.data[i].title2);

            var row = "<div class='press-release'>";
            //row += '<a href="' + data.data[i].url + '" target="_blank">';
            row += "<p class='lead-font'>" + data.data[i].title1 + "</p></div>";
            row += "<p class='lead-font'>" + data.data[i].description + "</p>";

            block += row;
        }
        block += '</div>';
        $('#dvSpeeches').html(block);
        $("#dvSpeeches").slideDown("slow");

    });
    //alert(json);
});
//End Speeches & Statements

//End getProgramme
$(document).ready(function () {
    var xJsonData = "[]";
    //var jsonList = "Aganda.json";
    var jsonListAganda = "http://constantdesign.com/samples/indian-african/api/getProgramme.php";
    $.getJSON(jsonListAganda, function (r) {
        xJsonData = r.data;
        console.log(r.data);
        var items = [];
        var block = "<div class='sizee'>";
        $.each(xJsonData, function (index, item) {
            var scheduleidd = item.schedule_id;
            //if (scheduleidd === 1) {
            //    alert(item.location);

            //}
            //alert(data.data[i].archive_id);
            //console.log(data.data[i].title2);
            //alert(item.archive_id);
            var row = "<div class='press-release'>";
            row += "<h1 style='display: block; text-align: left; width: 100%; font-size: 22px; font-family: 'Roboto', sans-serif;'><b>" + item.schedule_name + "</b></h1>";
            row += "<div style='display: block; text-align: left; width: 100%;'>";
            row += "<i class='fa fa-calendar' style='display: inline-block;'></i><div style='display: inline-block; font-size: 15.5px; margin-left:10px; font-family: 'Roboto', sans-serif;'>" + item.time + "</div>";
            row += "</div>";
            row += "<p class='lead-font'>" + item.location + "</p>";
            row += "</div>";
            block += row;
        });
        block += '</div>';
        $('#dvSummitAgenda').html(block);
        $("#dvSummitAgenda").slideDown("slow");

    });
});

//End getProgramme



//Start Documents
$(document).ready(function () {
    var xJsonData = "[]";
    var jsonList = "http://constantdesign.com/samples/indian-african/api/getMediaArchive.php";
    $.getJSON(jsonList, function (r) {
        xJsonData = r.data;
        console.log(r.data);
        var items = [];
        var block = "<div>";
        $.each(xJsonData, function (index, item) {
            //alert(item.archive_id);
            var row = "<div class='press-release'>";
            row += "<a class='DDesc' href='#page14' data-id=" + item.archive_id + ">";
            row += "<p class='lead-font'>" + item.title1 + "</p></a>";
            row += "</div>";
            block += row;
        });
        block += '</div>';
        $('#dvDocument').html(block);
        $("#dvDocument").slideDown("slow");

    });

    $("#dvDocument").on("click", "a.DDesc", function () {

        var sArchiveId = $(this).attr("data-id");
        $("#dvDocumentDesc").html("");
        var block = "<div>";
        $.each(xJsonData, function (parindex, paritem) {
            if (paritem.archive_id === sArchiveId) {
                //console.log(paritem.archive_id);
                //alert(paritem.archive_id);
                var row = "<div id='box-press-release-link'>";
                row += "";
                row += "<div id='dv_Title1' class='press-release'><p class='lead-font'>" + paritem.title1 + "</p></div>";
                row += "<div id='dv_Description' class='press-release-desc'><p class='lead-font'>" + paritem.description + "</p></div>";
                block += row;
                //$.each(paritem.images, function (childindex, childitem) {
                //    $("#children").append("<img class='img' data-id='" + childitem.gallery_media_id + "' tite='" + childitem.gallery_media_id + "' src='http://iafs.in/images/gallery/" + childitem.url + "' />");
                //});
            }
        });
        block += '</div>';
        $('#dvDocumentDesc').html(block);
        $("#dvDocumentDesc").slideDown("slow");


        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media_hover.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home.png");
        $("#dvMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaCovrage").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
        $("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvDashboard").removeClass('showdv').addClass('hidedv');
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#page19").removeClass('showdv').addClass('hidedv');

        //Hide all
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page30").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');

        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');

        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('hidedv').addClass('showdv');
        $("#dvDocumentDescription").removeClass('hidedv').addClass('showdv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
		$("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
		 

    });
});
//End Documents


//End Photo Gallary
try {
    var xJsonData = "[]";
    $(function () {
        var jsonListPhotoGallery = "http://constantdesign.com/samples/indian-african/api/getImageGallery.php";
        //var jsonListPhotoGallery = "ImageGallary.json";
        $.getJSON(jsonListPhotoGallery, function (r) {
            xJsonData = r.data;
            console.log(r.data);
            var items = [];
            var block = "<div class='ocarouselwl-' style='padding-bottom:80px'>";
            $.each(xJsonData, function (index, item) {
                //alert(item.gallery_id);
                var row = "<a href='#dvImageList'>";
                row += "<div class='item'>";
                row += "<img class='img' data-id=" + item.gallery_id + " src='" + item.thumb + "' alt='Owl Image'/>";
                row += "<p style='font-size:14px; line-height:18px; margin:10px 5px'>" + item.title1 + "</p>";
                row += "</div>";
                row += "</a>";
                block += row;
            });
            block += '</div>';
            $('#myImgGallary').html(block);
        });


        $("#myImgGallary").on("click", "img.img", function () {

            var xParID = $(this).attr("data-id");
            $("#dvPhotoList").html("");
            var block = "<div id='owl-demo' class='ocarouselwl-' style='padding-bottom:80px'>";
           
            $.each(xJsonData, function (parindex, paritem) {
                if (paritem.gallery_id === xParID) {
                    console.log(paritem.images);
                    //alert(paritem.images);
                    $.each(paritem.images, function (childindex, childitem) {
                        var row = "<div class='item'>";
                        row += "<img class='img' title=" + childitem.gallery_media_id + " src='http://iafs.in/images/gallery/" + childitem.url + "' alt='Owl Image'/>";
                        row += "<p style='font-size:14px; line-height:18px; margin:10px 5px'>" + childitem.caption + "</p>";
                        row += "</div>";
                        block += row;

                        //$("#dvPhotoList").append("<img class='img' data-id='" + childitem.gallery_media_id + "' tite='" + childitem.gallery_media_id + "' src='http://iafs.in/images/gallery/" + childitem.url + "' />");
                    });
                    block += '</div>';
                    $('#dvPhotoList').html(block);
                    $("#dvPhotoList").slideDown("slow");
                  

                    $("#imgNoti").attr("src", "images/register.png");
                    $("#imgMedi").attr("src", "images/media_hover.png");
                    $("#imgAgenda").attr("src", "images/agenda.png");
                    $("#imgHome").attr("src", "images/home.png");
                    $("#dvMediaList").removeClass('showdv').addClass('hidedv');
                    $("#dvNoti").removeClass('showdv').addClass('hidedv');
                    $("#dvAgenda").removeClass('showdv').addClass('hidedv');
                    $("#dvHome").removeClass('showdv').addClass('hidedv');
                    $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
                    $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
                    $("#dvvMediaCovrage").removeClass('showdv').addClass('hidedv');
                    $("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
                    $("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
                    $("#dvvDocuments").removeClass('showdv').addClass('hidedv');
                    $("#dvvLogin").removeClass('showdv').addClass('hidedv');
                    $("#dvvDashboard").removeClass('showdv').addClass('hidedv');
                    $("#dvvVenue").removeClass('showdv').addClass('hidedv');
                    $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
                    $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
                    $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
                    $("#page19").removeClass('showdv').addClass('hidedv');

                    //Hide all
                    $("#page27").removeClass('showdv').addClass('hidedv');
                    $("#page28").removeClass('showdv').addClass('hidedv');
                    $("#page29").removeClass('showdv').addClass('hidedv');
                    $("#page30").removeClass('showdv').addClass('hidedv');
                    $("#page31").removeClass('showdv').addClass('hidedv');
                    $("#page32").removeClass('showdv').addClass('hidedv');
                    $("#page33").removeClass('showdv').addClass('hidedv');
                    $("#page34").removeClass('showdv').addClass('hidedv');

                    $("#dvPRDescription").removeClass('showdv').addClass('hidedv');

                    $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
                    $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
                    $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
					 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
                    $("#dvImageList").removeClass('hidedv').addClass('showdv');
					 $("#linkBackImgGallry").removeClass('hidedv').addClass('showdv');
                    $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
                    $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
                    $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
                    
                }
            });
        });
    });
}
catch (ex) { ex.message; }
//End Photo Gallary



//Notification      

//function myNotify(sType, sTitle, sMessage) {
//    notify({
//        type: sType, //alert | success | error | warning | info
//        title: sTitle,
//        theme: "default",//Orange-theme  |  default
//        //autoHide: true, //true | false
//        //delay: 30000, //number ms
//        position: {
//            x: "right", //right | left | center
//            y: "top" //top | bottom | center
//        },
//        spacing: 10, //number px
//        //icon: '<img src="images/info.png" />',
//        message: sMessage
//    });
//}

////$(document).ready(function () {
////    setInterval(function () {
////        myNotify3('info', 'Notice', 'Hare Krishna');
////    }, 7000);
////});

//function myFunctionCalling(sType, sTitle, sMessage) {
//    $(document).ready(function () {
//        setInterval(function () {
//            //myNotify3('info', 'Notice', 'Hare Krishna');
//            myNotify(sType, sTitle, sMessage);
//        }, 2000);
//    });
//}
//function myFunctionCalling1(sType, sTitle, sMessage) {
//    $(document).ready(function () {
//        myNotify(sType, sTitle, sMessage);
//    });
//}
$(document).ready(function () {
    //$(".callNotification").click(function () {
    var xJsonNotification = "[]";
    var sNotificationid = "";
    var sTitle = "";
    var sNotification = "";
    var sisdisplay = "";

    var jsonList = "http://constantdesign.com/samples/indian-african/api/getNotification.php";

    var json = $.getJSON(jsonList, function (data) {
        //alert($.now());
        xJsonNotification = data.data;
        var sLength = xJsonNotification.length;

        if (sLength > 0) {

            //for (var i = 0; i < data.data.length; i++) {

            //sNotificationid = data.data[i].notification_id;
            //sTitle = data.data[i].title;
            //sNotification = data.data[i].notification;
            //sisdisplay = data.data[i].is_display;

            //if (sisdisplay == "1") {
            //    myFunctionCalling1("info", sTitle, sNotification);
            //}
            //    debugger;
            //}

            $("#dvNotification").html("");
            var block = "<div>";
            $.each(xJsonNotification, function (index, item) {

                sNotificationid = item.notification_id;
                sTitle = item.title;
                sNotification = item.notification;
                sisdisplay = item.is_display;

                //if (sisdisplay == "1") {
                //    myFunctionCalling1("alert", sTitle, sNotification);
                //}
                if (sisdisplay == "1") {
                    var row = "<div class='notifyOrange'>";
                    row += "<h1 style='color:#fff;'>" + item.title + "</h1>";
                    row += "<p class='lead-font'>" + item.notification + "</p>";
                    row += "</div>";
                    block += row;
                }

            });
            block += '</div>';
            $('#dvNotification').html(block);
            $("#dvNotification").slideDown("slow");
        }
        //});
    });
});


$(document).ready(function () {
    $(window).load(function () {
        var jsonList = "http://constantdesign.com/samples/indian-african/api/getNotification.php";

        var json = $.getJSON(jsonList, function (data) {
            //alert($.now());
            xJsonNotification = data.data;

            //alert(xJsonNotification[0].title);
            var sLength = xJsonNotification.length;
            if (sLength > 0) {
                $(".circle").text(sLength);
            }
        });
    });
});


//Notification


//Loading Page
$(window).load(function () {
    try {
        //$("#pageloaddiv").fadeOut(5000);
        $(".loader").fadeOut(100);
    }
    catch (ex) { ex.message; }
});

//Loading Page

//Read more End

function closeMore() {
    //alert('calling foucs.');
    $('.about_profile').animate({ height: startHieght }, 500);
    $('#more').text('Read More...');
    cc = 1;
}
//Read more End




//START logo-concept
//$(document).ready(function () {
//    try{
//        var jsonList = "http://constantdesign.com/samples/indian-african/api/getCMS.php";
//        var json = $.getJSON(jsonList, function (r) {
//            var aaJson = r.data;
//            alert(data.data[0].cms_title);
//            debugger;
//            for (var i = 0; i < r.data.length; i++) {
//                var sCmsId = r.data[i].cms_id;
//                debugger;
//                if (sCmsId == 3) {
//                    debugger;
//                    $("#h2LogoConceptTitle").html(r.data[i].cms_title);
//                    $("#imgLogo").attr("src", r.data[i].image).attr("title", r.data[i].caption);
//                    $("#dvLogoConceptContent").html(r.data[i].cms_content);

//                }
//                //alert(data.data[i].archive_id);
//                //console.log(data.data[i].title2);
//            }
//        });
//    }
//    catch (ex)
//    { ex.message;}
//});
//end logo-concept

//About us Start


$(document).ready(function () {
    var jsonList = "http://constantdesign.com/samples/indian-african/api/getAboutUs.php";
    var json = $.getJSON(jsonList, function (data) {

        $("#h1Aboutus").text(data.data[0].title);

        //var aa = (data.data[0].paragraph1.toString().substring(5, 40).css('font-weight', 'bold'));

        $("#pAboutus").html(data.data[0].paragraph1.substring(0, 94)) + "...";
        var aa = data.data[0].paragraph1.length;
        //alert(aa);
        $("#p1Aboutus").html(data.data[0].paragraph1.substring(94, aa - 1) + "<br><br>");
        $("#p2Aboutus").html(data.data[0].paragraph2 + "<br><br>");
        $("#p3Aboutus").html(data.data[0].paragraph3 + "");


    });
});

$(document).ready(function () {
    $("#anchorReadmore").click(function () {
        $(this).hide(100);
        $("#dvAboutusBlock").slideDown().removeAttr('inherit');
        $("#a1CloseAbout").show(function () {
            $("#anchorReadmore").hide();
        });
    });
    $("#a1CloseAbout").click(function () {
        $(this).hide();
        $("#anchorReadmore").show();
        $("#dvAboutusBlock").slideUp().Attr('display', 'none');
        
    });
});

//About us End


