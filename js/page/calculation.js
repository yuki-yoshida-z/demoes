$(".js-culcBtn").on("click", function(){
  var totalPrice = $(".js-inputPrice").val()
  console.log("totalPrice:" + totalPrice)
  var num = $(".js-inputNum").val()
  console.log("num:" + num)
  var price = totalPrice / num
  console.log("price:" + price)
  $(".js-answerNum").text(price)

});