const imgBox = document.querySelector("#container > img");

imgBox.addEventListener("mouseover", function() {
  imgBox.src = "img2/KakaoTalk_20240117_233609665.jpg";
});
imgBox.addEventListener("mouseout", function() {
  imgBox.src="img2/KakaoTalk_20240111_203933282.jpg";
});