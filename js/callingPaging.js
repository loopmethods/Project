var notiVal = 0;

$(document).ready(function () {
	
	$("a").click(function(){
		$(this).css('color','#333');
	});
		
    //Contact us
    $("#dvHome").removeClass('hidedv').addClass('showdv');
    $("#imgHome").attr("src", "images/home_hover.png");
    $("#imgMedi").attr("src", "images/media.png");
    $("#dvvDashboard").removeClass('showdv').addClass('hidedv');
    $("#imgContact").click(function () {
        $("#imgNoti").attr("src", "images/register_hover.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home.png");
        $("#dvContactus").removeClass('hidedv').addClass('showdv');
		 $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
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
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  
    });
    //Media List
    $("#imgMedi").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media_hover.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home.png");
        $("#dvMediaList").removeClass('hidedv').addClass('showdv');
        $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
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
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');


    });
    //Agenda
    $("#imgAgenda").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda_hover.png");
        $("#imgHome").attr("src", "images/home.png");
        $("#dvMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('hidedv').addClass('showdv');
        $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
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
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');

    });
    //About us
    $("#imgHome").click(function () {
        showPage("dvHome");
    });
	
	
	
    //Image Gallry
    $("#AnchorPhotoGallary").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
        $("#dvMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('hidedv').addClass('showdv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
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
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('hidedv').addClass('showdv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');

    });
    //Back Link
    $("#linkBackMediaList").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media_hover.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home.png");
        $("#dvMediaList").removeClass('hidedv').addClass('showdv');
        $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');

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
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });
    //Press Release
    $("#AnchorPresssRelease").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
        $("#dvMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('hidedv').addClass('showdv');
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
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('hidedv').addClass('showdv');

        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    //Media Coverage
    $("#AnchorMediaCoverage").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
        $("#dvMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaCovrage").removeClass('hidedv').addClass('showdv');
        $("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
        $("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvDashboard").removeClass('showdv').addClass('hidedv');
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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

        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('hidedv').addClass('showdv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');

    });
    //Media Advisory
    $("#AnchorMediaAdvisory").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
        $("#dvMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaCovrage").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaAdvisory").removeClass('hidedv').addClass('showdv');
        $("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
        $("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvDashboard").removeClass('showdv').addClass('hidedv');
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
        $("#page19").removeClass('showdv').addClass('hidedv');

        //Hide all
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page30").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
       

        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('hidedv').addClass('showdv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    //Speeches Statements
    $("#AnchorSpeechStatement").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
        $("#dvMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaCovrage").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvSpeechesStatements").removeClass('hidedv').addClass('showdv');
        $("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvDashboard").removeClass('showdv').addClass('hidedv');
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('hidedv').addClass('showdv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    //Document
    $("#AnchorDocument").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvDocuments").removeClass('hidedv').addClass('showdv');
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvDashboard").removeClass('showdv').addClass('hidedv');
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('hidedv').addClass('showdv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    //Login
   

    //Dashboard
    $("#btnSubmit").click(function () {
		// GetDashboard(uid);
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
      
        //$("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
        //$("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        //$("#dvvLogin").removeClass('showdv').addClass('hidedv');
        //$("#dvvDashboard").removeClass('hidedv').addClass('showdv');
        //$("#dvvVenue").removeClass('showdv').addClass('hidedv');
        //$("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        //$("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        //$("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        //$("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        //$("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        //$("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
        //$("#page19").removeClass('showdv').addClass('hidedv');

        ////Hide all
        //$("#page27").removeClass('showdv').addClass('hidedv');
        //$("#page28").removeClass('showdv').addClass('hidedv');
        //$("#page29").removeClass('showdv').addClass('hidedv');
        //$("#page30").removeClass('showdv').addClass('hidedv');
        //$("#page31").removeClass('showdv').addClass('hidedv');
        //$("#page32").removeClass('showdv').addClass('hidedv');
        //$("#page33").removeClass('showdv').addClass('hidedv');
        //$("#page34").removeClass('showdv').addClass('hidedv');
        //$("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        //$("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        //$("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        //$("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        //$("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
    });

    //Venue
    $("#P9").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvVenue").removeClass('hidedv').addClass('showdv');
        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
       
    });

    //For Venue from Home
    $("#loc").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvVenue").removeClass('hidedv').addClass('showdv');
        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');

    });


    //Travel India
    $("#P3").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvTravelIndia").removeClass('hidedv').addClass('showdv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    //Travel Africa
    $("#P4").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvTravelAfrica").removeClass('hidedv').addClass('showdv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    //Visa Advisory
    $("#P5").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('hidedv').addClass('showdv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });



    //City Guide
    $("#P6").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvCityGuide").removeClass('hidedv').addClass('showdv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');


    });

    //Form Required
    $("#P7").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('hidedv').addClass('showdv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');


    });


    //Yellow Fever
    $("#P8").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('hidedv').addClass('showdv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');

    });




    //Visa Advisory
    $("#P5").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvVisaAdvisory").removeClass('hidedv').addClass('showdv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });



    //Visa Advisory
    $("#P5").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvVisaAdvisory").removeClass('hidedv').addClass('showdv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });



    //Visa Advisory
    $("#P5").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvVisaAdvisory").removeClass('hidedv').addClass('showdv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    //Hotel List
    $("#P10").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#page19").removeClass('hidedv').addClass('showdv');

        //Hide all
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page30").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');

    });


    $("#Anchor27").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#page27").removeClass('hidedv').addClass('showdv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page30").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');
        $("#linkBackHotelList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    $("#Anchor28").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#page27").removeClass('showdv').addClass('hidedv');


        $("#page28").removeClass('hidedv').addClass('showdv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page30").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');
        $("#linkBackHotelList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });


    $("#Anchor29").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page30").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('hidedv').addClass('showdv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');
        $("#linkBackHotelList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    $("#Anchor30").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');

        $("#page30").removeClass('hidedv').addClass('showdv');
        $("#linkBackHotelList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    $("#Anchor31").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page30").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');

        $("#page31").removeClass('hidedv').addClass('showdv');
        $("#linkBackHotelList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    $("#Anchor32").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page30").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');

        $("#page32").removeClass('hidedv').addClass('showdv');
        $("#linkBackHotelList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });


    $("#Anchor33").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page30").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');

        $("#page33").removeClass('hidedv').addClass('showdv');
        $("#linkBackHotelList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		 
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
		  
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    $("#Anchor34").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page30").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');

        $("#page34").removeClass('hidedv').addClass('showdv');
        $("#linkBackHotelList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		 
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });


    $("#Anchor35").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('hidedv').addClass('showdv');
        $("#page34").removeClass('showdv').addClass('hidedv');
        $("#linkBackHotelList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		 
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });
    

    $("#Anchor36").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('hidedv').addClass('showdv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');
        $("#linkBackHotelList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		 
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });

    //Back Link Dashboard
    $("#linkBackDashboardList").click(function () {
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
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
        $("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvDashboard").removeClass('hidedv').addClass('showdv');
        
        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');		 
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');

    });


    //Back Link Hotel List
    $("#linkBackHotelList").click(function () {
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
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
        $("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvDashboard").removeClass('showdv').addClass('hidedv');

        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
        $("#page19").removeClass('hidedv').addClass('showdv');
        //Hide all
        $("#page27").removeClass('showdv').addClass('hidedv');
        $("#page28").removeClass('showdv').addClass('hidedv');
        $("#page29").removeClass('showdv').addClass('hidedv');
        $("#page30").removeClass('showdv').addClass('hidedv');
        $("#page31").removeClass('showdv').addClass('hidedv');
        $("#page32").removeClass('showdv').addClass('hidedv');
        $("#page33").removeClass('showdv').addClass('hidedv');
        $("#page34").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('hidedv').addClass('showdv');
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		 
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });



    //Back Link Press Release
    $("#linkBackPressRelease").click(function () {
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
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
        $("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvDashboard").removeClass('showdv').addClass('hidedv');

        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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

        $("#linkBackMediaList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('hidedv').addClass('showdv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		 
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });



    //Back Link Document
    $("#linkBackDocument").click(function () {
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
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
        //$("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvDashboard").removeClass('showdv').addClass('hidedv');

        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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

        $("#linkBackMediaList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#dvvDocuments").removeClass('hidedv').addClass('showdv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });
	//IAFS Logos
    $("#IAFS_logo").click(function () {
        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
        $("#dvMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('hidedv').addClass('showdv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
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
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		 $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
    });
	$("#iQuiz").click(function(){
	    alert('Page Under Construction…');
	});
	//Notification Link
	
	$("#imgNoti").click(function () {
	    try {
	        //alert('notifi calling click event.');
	        //debugger;
	        notiVal = "1";
	        if (aLogout == "0") {
	            //debugger;
	            alert('You are not logged in, Please log on first.');
	            showPage("dvvLogin");
	            //debugger;
	        }
	        if (aLogout == "1") {
	            //debugger;
	            showPage("dvNoti");
	            //debugger;
	        }
	    }
	    catch (ex) { ex.message }
		 
    });
	
	
	//Back Link ImgGallry
    $("#linkBackImgGallry").click(function () {
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
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvMediaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvSpeechesStatements").removeClass('showdv').addClass('hidedv');
        //$("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvDashboard").removeClass('showdv').addClass('hidedv');

        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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

        $("#linkBackMediaList").removeClass('hidedv').addClass('showdv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
		$("#dvvDocuments").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('hidedv').addClass('showdv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
		$("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
		  $("#dvContactus").removeClass('showdv').addClass('hidedv');
		  
		
    });
	
});


function showPage(val) {
   
    if (val == "dvNoti") {

        $("#imgNoti").attr("src", "images/register_hover.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home.png");
        $("#dvNoti").removeClass('hidedv').addClass('showdv');
        $("#dvMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('showdv').addClass('hidedv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
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
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
        $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
        $("#dvContactus").removeClass('showdv').addClass('hidedv');
    }
    else if (val == "dvHome") {

        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
        $("#dvMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvNoti").removeClass('showdv').addClass('hidedv');
        $("#dvAgenda").removeClass('showdv').addClass('hidedv');
        $("#dvHome").removeClass('hidedv').addClass('showdv');
        $("#dvPhotoGallary").removeClass('showdv').addClass('hidedv');
        $("#dvImageList").removeClass('showdv').addClass('hidedv');
        $("#dvPressRelease").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
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
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
        $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
        $("#dvContactus").removeClass('showdv').addClass('hidedv');
    }

    else if (val == "dvvDashboard") {

        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvLogin").removeClass('showdv').addClass('hidedv');
        $("#dvvDashboard").removeClass('hidedv').addClass('showdv');
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
        $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
        $("#dvContactus").removeClass('showdv').addClass('hidedv');
    }

    else if (val == "dvvLogin") {

        $("#imgNoti").attr("src", "images/register.png");
        $("#imgMedi").attr("src", "images/media.png");
        $("#imgAgenda").attr("src", "images/agenda.png");
        $("#imgHome").attr("src", "images/home_hover.png");
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
        $("#dvvLogin").removeClass('hidedv').addClass('showdv');
        $("#dvvDashboard").removeClass('showdv').addClass('hidedv');
        $("#dvvVenue").removeClass('showdv').addClass('hidedv');
        $("#dvvTravelIndia").removeClass('showdv').addClass('hidedv');
        $("#dvTravelAfrica").removeClass('showdv').addClass('hidedv');
        $("#dvvVisaAdvisory").removeClass('showdv').addClass('hidedv');
        $("#dvvCityGuide").removeClass('showdv').addClass('hidedv');
        $("#dvvYelllowFever").removeClass('showdv').addClass('hidedv');
        $("#dvvFormRequired").removeClass('showdv').addClass('hidedv');
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
        $("#linkBackHotelList").removeClass('showdv').addClass('hidedv');
        $("#linkBackDashboardList").removeClass('showdv').addClass('hidedv');
        $("#linkBackMediaList").removeClass('showdv').addClass('hidedv');
        $("#dvPRDescription").removeClass('showdv').addClass('hidedv');
        $("#dvDocumentDescription").removeClass('showdv').addClass('hidedv');
        $("#page36").removeClass('showdv').addClass('hidedv');
        $("#page35").removeClass('showdv').addClass('hidedv');
        $("#linkBackPressRelease").removeClass('showdv').addClass('hidedv');
        $("#linkBackDocument").removeClass('showdv').addClass('hidedv');
        $("#linkBackImgGallry").removeClass('showdv').addClass('hidedv');
        $("#dvContactus").removeClass('showdv').addClass('hidedv');
    }

}