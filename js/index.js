var features = 'toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,status=no,left=,top=,width=,height=';
function searchPage(features)
{
   var element = document.getElementById('SiteSearch2');
   window.open('sitesearch2-results.html?q='+encodeURIComponent(element.value), '', features);
   return false;
}
document.addEventListener('DOMContentLoaded', function(event)
{
   var Carousel2 = new bootstrap.Carousel('#Carousel2', {interval: 3000, pause: false});
   var Carousel1 = new bootstrap.Carousel('#Carousel1', {interval: 3000, pause: 'hover'});
});
$(document).ready(function()
{
   $("#wb_ResponsiveMenu1 ul li a").click(function(event)
   {
      $("#wb_ResponsiveMenu1 input").prop("checked", false);
   });
   $("a[href*='#Bookmark1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_Bookmark1').offset().top }, 600, 'linear');
   });
   $("a[data-rel='SlideShow1']").attr('rel', 'SlideShow1');
   $("#SlideShow1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='SlideShow17']").attr('rel', 'SlideShow17');
   $("a[rel^='SlideShow17']").fancybox({});
   $("a[data-rel='SlideShow14']").attr('rel', 'SlideShow14');
   $("a[rel^='SlideShow14']").fancybox({});
   $("a[data-rel='SlideShow13']").attr('rel', 'SlideShow13');
   $("a[rel^='SlideShow13']").fancybox({});
   $("a[data-rel='SlideShow12']").attr('rel', 'SlideShow12');
   $("a[rel^='SlideShow12']").fancybox({});
   $("a[data-rel='SlideShow11']").attr('rel', 'SlideShow11');
   $("a[rel^='SlideShow11']").fancybox({});
   $("a[data-rel='SlideShow10']").attr('rel', 'SlideShow10');
   $("a[rel^='SlideShow10']").fancybox({});
   $("a[data-rel='SlideShow9']").attr('rel', 'SlideShow9');
   $("a[rel^='SlideShow9']").fancybox({});
   $("a[data-rel='SlideShow8']").attr('rel', 'SlideShow8');
   $("a[rel^='SlideShow8']").fancybox({});
   $("a[data-rel='SlideShow7']").attr('rel', 'SlideShow7');
   $("a[rel^='SlideShow7']").fancybox({});
   $("a[data-rel='SlideShow6']").attr('rel', 'SlideShow6');
   $("a[rel^='SlideShow6']").fancybox({});
   $("a[data-rel='SlideShow3']").attr('rel', 'SlideShow3');
   $("a[rel^='SlideShow3']").fancybox({});
   $("a[data-rel='SlideShow4']").attr('rel', 'SlideShow4');
   $("a[rel^='SlideShow4']").fancybox({});
   $("a[data-rel='SlideShow5']").attr('rel', 'SlideShow5');
   $("a[rel^='SlideShow5']").fancybox({});
   $("a[data-rel='SlideShow2']").attr('rel', 'SlideShow2');
   $("#SlideShow2").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='SlideShow16']").attr('rel', 'SlideShow16');
   $("#SlideShow16").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='SlideShow18']").attr('rel', 'SlideShow18');
   $("#SlideShow18").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='SlideShow19']").attr('rel', 'SlideShow19');
   $("#SlideShow19").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='SlideShow20']").attr('rel', 'SlideShow20');
   $("#SlideShow20").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='SlideShow21']").attr('rel', 'SlideShow21');
   $("#SlideShow21").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='SlideShow22']").attr('rel', 'SlideShow22');
   $("#SlideShow22").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='SlideShow23']").attr('rel', 'SlideShow23');
   $("#SlideShow23").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='SlideShow24']").attr('rel', 'SlideShow24');
   $("#SlideShow24").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='SlideShow26']").attr('rel', 'SlideShow26');
   $("#SlideShow26").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='SlideShow27']").attr('rel', 'SlideShow27');
   $("#SlideShow27").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   searchParseURL('SiteSearch2');
   searchAutoComplete('SiteSearch2', 0, '_parent');
   $("a[href*='#LayoutGrid60']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid60').offset().top }, 600, 'easeInCubic');
   });
   if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {$('#preloader').remove();}
});
$(window).on('load', function()
{
   $('#preloader').remove();
});
$(document).ready(function()
{
  $('#wb_Carousel2').owlCarousel( { margin: 10, stagePadding: 10, autoplay: true, rewind: true, dotsEach: true, responsive : { 0: { items : 1 }, 480: { items : 3}, 768: { items : 4}, 970: { items : 5}}});
});
$(document).ready(function()
{
  $('#wb_Carousel2').owlCarousel( { margin: 10, stagePadding: 10, autoplay: true, rewind: true, dotsEach: true, responsive : { 0: { items : 1 }, 480: { items : 3}, 768: { items : 4}, 970: { items : 5}}});
});
$(document).ready(function()
{
  $('#wb_Carousel2').owlCarousel( { margin: 10, stagePadding: 10, autoplay: true, rewind: true, dotsEach: true, responsive : { 0: { items : 1 }, 480: { items : 3}, 768: { items : 4}, 970: { items : 5}}});
});
$(document).ready(function()
{
  $('#wb_Carousel1').owlCarousel( { margin: 10, stagePadding: 10, autoplay: true, rewind: true, responsive : { 0: { items : 1 }, 480: { items : 3}, 768: { items : 4}, 970: { items : 5}}});
});
