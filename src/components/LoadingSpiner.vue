<template lang="pug">
  #bowlG
    #bowl_ringG
      .ball_holderG
        .ballG
</template>

<style>
#bowlG{
	position:relative;
	width:68px;
	height:68px;
	margin:auto;
  margin-top: 300px;
}

#bowl_ringG{
	position:absolute;
	width:68px;
	height:68px;
	border:6px solid rgb(133,220,255);
	border-radius:68px;
		-o-border-radius:68px;
		-ms-border-radius:68px;
		-webkit-border-radius:68px;
		-moz-border-radius:68px;
}

.ball_holderG{
	position:absolute;
	width:18px;
	height:68px;
	left:25px;
	top:0px;
	animation-name:ball_moveG;
		-o-animation-name:ball_moveG;
		-ms-animation-name:ball_moveG;
		-webkit-animation-name:ball_moveG;
		-moz-animation-name:ball_moveG;
	animation-duration:1.5s;
		-o-animation-duration:1.5s;
		-ms-animation-duration:1.5s;
		-webkit-animation-duration:1.5s;
		-moz-animation-duration:1.5s;
	animation-iteration-count:infinite;
		-o-animation-iteration-count:infinite;
		-ms-animation-iteration-count:infinite;
		-webkit-animation-iteration-count:infinite;
		-moz-animation-iteration-count:infinite;
	animation-timing-function:linear;
		-o-animation-timing-function:linear;
		-ms-animation-timing-function:linear;
		-webkit-animation-timing-function:linear;
		-moz-animation-timing-function:linear;
}

.ballG{
	position:absolute;
	left:0px;
	top:-16px;
	width:27px;
	height:27px;
	background:rgb(133,220,255);
	border-radius:23px;
		-o-border-radius:23px;
		-ms-border-radius:23px;
		-webkit-border-radius:23px;
		-moz-border-radius:23px;
}



@keyframes ball_moveG{
	0%{
		transform:rotate(0deg)
	}

	100%{
		transform:rotate(360deg)
	}
}

@-o-keyframes ball_moveG{
	0%{
		-o-transform:rotate(0deg)
	}

	100%{
		-o-transform:rotate(360deg)
	}
}

@-ms-keyframes ball_moveG{
	0%{
		-ms-transform:rotate(0deg)
	}

	100%{
		-ms-transform:rotate(360deg)
	}
}

@-webkit-keyframes ball_moveG{
	0%{
		-webkit-transform:rotate(0deg)
	}

	100%{
		-webkit-transform:rotate(360deg)
	}
}

@-moz-keyframes ball_moveG{
	0%{
		-moz-transform:rotate(0deg)
	}

	100%{
		-moz-transform:rotate(360deg)
	}
}
</style>

