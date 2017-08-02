$(document).ready(function(){
	/*toggle方法*/
	$.fn.toggle = function( fn, fn2 ) {
		var args = arguments,guid = fn.guid || $.guid++,i=0,
		toggle = function( event ) {
			var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			$._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
			event.preventDefault();
			return args[ lastToggle ].apply( this, arguments ) || false;
		};
		toggle.guid = guid;
		while ( i < args.length ) {
			args[ i++ ].guid = guid;
		}
		return this.click( toggle );
	};

	$(".sosuo_text,.sosuo_btn").focus(function(){
		$(".bg_div").css({"opacity":"0.4","transition":"0.5s"});
	});
	$(".sosuo_text").blur(function(){
		$(".bg_div").css({"opacity":"1","transition":"0.5s"});
	});
	$("#i_id1").toggle(function(){
		$(".fa-wechat").css({"opacity":"1","right":"310px","transition":"0.5s"});
		$(".fa-github").css({"opacity":"1","right":"370px","transition":"0.5s"});
		$("#i_id1").removeClass("fa fa-angle-double-left fa-3x");
		$("#i_id1").addClass("fa fa-angle-double-right fa-3x");
	},function(){
		$(".fa-wechat,.fa-github").css({"opacity":"0","right":"220px","transition":"0.5s"});
		$("#i_id1").removeClass("fa fa-angle-double-right fa-3x");
		$("#i_id1").addClass("fa fa-angle-double-left fa-3x");
	});
	/*背景切换*/
	$("#left").click(function(){
		var img = $(".bg_div").css("background-image").split("bg_")[1].split(".")[0];
		if(img==3){
			alert("没有图片了哦！");
		}else{
			img++;
			$(".bg_div").css({"background-image":"url(img/bg_"+img+".jpg)","transition":"1s"});
		}
	});
	$("#right").click(function(){
		var img = $(".bg_div").css("background-image").split("bg_")[1].split(".")[0];
		if(img==1){
			alert("没有图片了哦！");
		}else{
			img--;
			$(".bg_div").css({"background-image":"url(img/bg_"+img+".jpg)","transition":"1s"});
		}
	});
	/*github地址*/
	$(".fa-github").click(function(){
		window.open("https://github.com/zhangjianbang","_new");
	});
	/*音乐播放*/
	$(document).ready(function(){
		$("#ico").toggle(function(){
			$("#music")[0].play();
			$("#ico").css({"animation-play-state":"running","animation-name":"music_dh","animation-duration":"5s","animation-timing-function":"linear","animation-iteration-count":"infinite"});
		},function(){
			$("#music")[0].pause();
			$("#ico").css({"animation-play-state":"paused"});
		});
	});
	/*音乐切换*/
	var mp3 = $("#music").attr("src").split("music")[1].split(".")[0];
	$("#left_music").click(function(){
		if(mp3==1){
			alert("没有歌曲了orz");
		}else{
			mp3--;
			$("#music").attr("src","mp3/music"+mp3+".mp3");
			$("#music")[0].play();
		}
	});
	$("#right_music").click(function(){
		if(mp3==4){
			alert("没有歌曲了orz");
		}else{
			mp3++;
			$("#music").attr("src","mp3/music"+mp3+".mp3");
			$("#music")[0].play();
		}
	});
});
