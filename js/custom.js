$(document).ready(function(){$("a.transition").click(function(event){event.preventDefault();linkLocation=this.href;$("body").fadeOut(500, redirectPage);});function redirectPage(){window.location=linkLocation;}});$(function(){$('#search').on('keyup', function(){var pattern=$(this).val(); $('.searchable-container .search-items').hide(); $('.searchable-container .search-items').filter(function(){return $(this).text().match(new RegExp(pattern, 'i'));}).show();});}); $("document").ready(function($){var nav=$('#nextprviewsoptions'); $(window).scroll(function (){if ($(this).scrollTop() > 2){nav.addClass("f-nav");}else{nav.removeClass("f-nav"); document.getElementById('nextprviewsoptions').style.Display='none';}});}); $(document).ready(function(){var overlay=$('.sidebar-overlay'); $('.sidebar-toggle').on('click', function(){var sidebar=$('#sidebar'); sidebar.toggleClass('open'); if ((sidebar.hasClass('sidebar-fixed-left') || sidebar.hasClass('sidebar-fixed-right')) && sidebar.hasClass('open')){overlay.addClass('active');}else{overlay.removeClass('active');}}); overlay.on('click', function(){$(this).removeClass('active'); $('#sidebar').removeClass('open');});});$(document).ready(function(){var sidebar=$('#sidebar'); var sidebarHeader=$('#sidebar .sidebar-header'); var toggleButtons=$('.sidebar-toggle'); $('#sidebar-position').change(function(){var value=$( this ).val(); sidebar.removeClass('sidebar-fixed-left sidebar-fixed-right sidebar-stacked').addClass(value).addClass('open'); if (value=='sidebar-fixed-left' || value=='sidebar-fixed-right'){$('.sidebar-overlay').addClass('active');}});});

$(document).ready(function () {
    $('.material-button-toggle').click(function () {
        $(this).toggleClass('open');
        $('.option').toggleClass('scale-on');
    });
});