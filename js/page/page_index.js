$(document).ready(function(){
  if($(".js-indexContent").length > 0){
    if($(".__h2").length > 1){
      $(".__h2").each(function(id){
        var idName = "index_" + id;
        var indexTitle = $(this).text();
        var addList = '<li class="__item"><a class="__jump-btn js-jumpBtn" href="#' + idName + '">' + indexTitle + ' </a></li>'
        $(this).attr("id", idName);
        $(".js-indexList").append(addList)
      });
      $(document).on("click", ".js-jumpBtn", function(e){
        var speed = 400;
        var href= $(e.target).attr("href");
        var targetHref = $(href == "#" || href == "" ? 'html' : href);
        if($("body.is-mobile").length > 0){
          var headerHeight =  $("header").height();
          var position = targetHref.offset().top - headerHeight;
          console.log(position)
        }else{
          var position = targetHref.offset().top;
        }
        $("body,html").animate({scrollTop:position}, speed, 'swing');
        return false;
      });
      $(".js-indexToggleBtn").on("click", function(){
        if($(".js-indexBody").css("display") =="none"){
          $(".js-indexBody").slideDown();
          $(this).removeClass("fa-angle-down");
          $(this).addClass("fa-angle-up");
          $(".js-indexHeader").css("border-bottom-left-radius", "0");
          $(".js-indexHeader").css("border-bottom-right-radius", "0");
        }else{
          $(".js-indexBody").slideUp();
          $(this).removeClass("fa-angle-up");
          $(this).addClass("fa-angle-down");
          $(".js-indexHeader").css("border-bottom-left-radius", "5px");
          $(".js-indexHeader").css("border-bottom-right-radius", "5px");
        }
      });
    }else{
      $(".js-indexContent").hide();
    };
  };
});