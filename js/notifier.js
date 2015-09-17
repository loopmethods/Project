/** Created by **

Author : Soufiane boukdir 
Website : http://www.bouksou.com

**/


//$(document).ready(function () {
//    var jsonList = "http://constantdesign.com/samples/indian-african/api/getNotification.php";
//    var json = $.getJSON(jsonList, function (data) {

//        for (var i = 0; i < data.data.length; i++) {
//            var isDisplay = data.data[i].is_display;
//            alert(data.data[i].title);
//            //$("#dvNotiTitle").text(data.data[i].notification_id);
//            $(".dvNotiTitlecxzcxz").text(data.data[i].title);
//            $(".dvNotiCondasdastent").text(data.data[i].notification);
           

//            //var row = "<tr>";
//            //row += '<td>' + data.data[i].notification_id + '</td>';
//            //row += '<td>' + data.data[i].title + '</td>';
//            //row += '<td>' + data.data[i].notification + '</td>';
//            //row += '<td>' + data.data[i].is_display + '</td>';
//            //row += '</tr>';
//            //table += row;
//        }

//        alert($("#dvNotiTitle").text());
//    });
//    //alert(json);
//});

$(document).ready(function ($) {
    var id = 1;
    var jsonList = "http://constantdesign.com/samples/indian-african/api/getNotification.php";
    var json = $.getJSON(jsonList, function (data) {
        var ssLength = data.data.length;
        //alert(ssLength);
        if (ssLength > 0) {
            $(".circle").text(ssLength);
        }
        for (var i = 0; i < data.data.length; i++) {
            var isDisplay = data.data[i].is_display;
            //alert(data.data[i].title);
            //$("#dvNotiTitle").text(data.data[i].notification_id);
            //$(".dvNotiTitlecxzcxz").text(data.data[i].title);
            //$(".dvNotiCondasdastent").text(data.data[i].notification);

            $.extend({
                notifier: function (options) {
                    var defaults = {
                        "type": "error",
                        "title": "notification title",
                        "text": "This is to notify that.",
                        "positionY": "bottom",
                        "positionX": "right",
                        "delay": 4000,
                        "fadeOutdelay": 4000,
                        "number": 2,
                        "animationIn": 'shake',
                        "animationIn_duration": 'slow',
                        "animationOut": 'drop',
                        "animationOut_duration": 'slow'
                    }
                    var positions;
                    var parameters = $.extend(defaults, options);

                    if (parameters.positionY == 'top' && parameters.positionX == 'right') {
                        positions = 'top:17px;right:10px';
                        pos = 'tr';
                    }
                    else if (parameters.positionY == 'top' && parameters.positionX == 'left') {
                        positions = 'top:17px;left:10px';
                        pos = 'tl';
                    }
                    else if (parameters.positionY == 'bottom' && parameters.positionX == 'right') {
                        positions = 'bottom:100px;right:10px';
                        pos = 'br';
                    }
                    else if (parameters.positionY == 'bottom' && parameters.positionX == 'left') {
                        positions = 'bottom:100px;left:10px';
                        pos = 'bl';
                    }


                    if (!$('#notifier').length > 0 || $('#notifier').attr('class') != parameters.positionY.charAt(0) + parameters.positionX.charAt(0)) {
                        $('#notifier').remove();
                        $('#page26').append('<ul id="notifier" class="' + pos + '" style="' + positions + '">');
                    }

                    if ($('.notif').length > parameters.number) {
                        $('.notif').first().remove();
                    }

                    //$('#notifier').append('<div id="box' + id + '" class="notif ' + parameters.type + '"><div class="icon"></div><div class="notifContent"><div class="dvNotiTitlecxzcxz" class="notifyTitle"></div><div id="dvNotiCondasdastent"></div></div><div class="close" data-id="' + id + '"></div></div');
                    $('#notifier').append('<div id="box' + id + '" class="notif ' + parameters.type + '"><div class="icon"></div><div class="notifContent"><div class="notifyTitle">' + parameters.title.substring(0, 30) + '</div><div>' + parameters.text.substring(0, 100) + '...</div></div><div class="close" data-id="' + id + '"></div></div');

                    $('#box' + id).css('margin-bottom', '15px').effect(parameters.animationIn, parameters.animationIn_duration).delay(parameters.delay).effect(parameters.animationOut, parameters.animationOut_duration, function () {
                        this.remove();
                    });

                    $('.notif .close').click(function () {
                        var id = $(this).data('id');
                        $('#box' + id).remove();
                    });

                    id++;
                }
            });
        }
    });

});