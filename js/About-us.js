var features = 'toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,status=no,left=,top=,width=,height=';
function searchPage(features)
{
   var element = document.getElementById('SiteSearch2');
   window.open('sitesearch2-results.html?q='+encodeURIComponent(element.value), '', features);
   return false;
}
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
  $('#wb_Carousel1').owlCarousel( { margin: 10, stagePadding: 10, autoplay: true, rewind: true, responsive : { 0: { items : 1 }, 480: { items : 3}, 768: { items : 4}, 970: { items : 5}}});
});
