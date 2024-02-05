$(document).ready(function() {

	// final call

	var llamadafinal = true; // En false para desactivarlo

	var count = 0;

	// Response time

	var tmres = 2500;

	//var tmres = 0;

	$('#enviar').bind('click', function() {

		var mensaje = $('#msjaqui').val();

		if(mensaje!=''){

			$('#chat').append('<p class="yo">'+mensaje+horaspan+'</p>');

			$('#msjaqui').val('');

			setTimeout(function(){

				$('.nombre h1').removeClass('mt10');

				$('.nombre h2').html('typing...');

				$('#chat p.yo span.hora').addClass('visto');

			},1500);

			setTimeout(function() {

				$('.nombre h2').html('online');

				$('#chat p.yo span.hora').addClass('vistoc');

				respuesta(count);

			}, tmres);

		}

	});

	$('#msjaqui').keyup(function(event) {

		if (event.keyCode == 13) {

			$('#enviar').click();

		}

	});

	// Avatar

	var avtimgs = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'];

	var avtimg = avtimgs[Math.floor(Math.random()*avtimgs.length)];

	// Name

	var nomswsp = ['نسرين','سلمى','رميساء لطفي','سارة','شروق'];

	var nomwsp = nomswsp[Math.floor(Math.random()*nomswsp.length)];

	// First message

	var msjs1 = [

		'أزيك عامل ايه أنا 27 سنة عايزة اتعرف عليك من ساعة ما سجلت معانا في الصفحة هبعتلك فيديو ليا شوفه لو عجبك نتكلم كتير ماشي ؟ 🥰️',

		'ازيك انا عندي 25 سنة كنت هموت واكلمك من ساعة ما بعت للصفحة اقولك هصور فديو وابعتهولك تشوفه عشان تشوفني قبل ما نتكلم ماشي يمكن معجبكش؟ 😗',

		'هاي ازيك انا نفسي فيك اوي من ساعة ما كلمتنا على الصفحة بص هبعتلك فديو تشوفني فيه عشان نتعرف ؟ 😍'

	];

	var msj1 = msjs1[Math.floor(Math.random()*msjs1.length)];

	// Second message

	var msjs2 = [

		'انت لسه مش فتحت الفديو ولا اشتركت يلا بقى انا تعبانة اوي وعايزة اتكلم معاك قدامك دقيقة لازم تشترك معايا من الفديو عشان الشات هيتقفل معاك 😥',

		'انت لسه مش فتحت الفديو ولا اشتركت افتح واشترك يا راجل هموت عليك نفسي اكلمك  قدامك دقيقة لازم تشترك معايا من الفديو عشان الشات هيتقفل معاك 😇',

		'انت لسه مش فتحت الفديو ولا اشتركت يلا بقى بسرعة تعبانة نفسي فيك اوي انت شكلك حنين جداً وده النوع اللي بحبه قدامك دقيقة لازم تشترك معايا من الفديو عشان الشات هيتقفل معاك 😉'

	];

	var msj2 = msjs2[Math.floor(Math.random()*msjs2.length)];

	// Third message

	var msjs3 = [

		'لما تشغل الفديو هتروح علي موقع الاشتراك وحط رقمك هناك ولما تضغط اشتراك اللي تحت هتلاقي الفديو اشتغل 💋💋',

		'لما تشغل الفديو هتروح علي موقع الاشتراك وحط رقمك هناك ولما تضغط اشتراك اللي تحت هتلاقي الفديو اشتغل 🥰️💓',

		'لما تشغل الفديو هتروح علي موقع الاشتراك وحط رقمك هناك ولما تضغط اشتراك اللي تحت هتلاقي الفديو اشتغل 😳'

	];

	var msj3 = msjs3[Math.floor(Math.random()*msjs3.length)];

	// Final message

	var msjsf = [

		'أنتهى الوقت المخصص للتسجيل حدث الصفحة وأشترك وسجل من تاني بس أسرع من كده لأن الشات بينتهي لو مسجلتش بسرعه معلش يا حبيبي ده نظام الموقع 😘',

		'يا حبيبي الوقت خلص واشتراكك مكتملش حدث الصفحة يا روحي وجرب تاني هتفتح معاك يلا بقى هتجنن عليك 😘😘',

		'أنتهى الوقت المخصص للتسجيل حدث الصفحة وأشترك وسجل من تاني بس أسرع من كده لأن الشات بينتهي لو مسجلتش بسرعه معلش يا روح قلبي ده نظام الموقع بس أوعدك لما تسجل أنا هدلعك أخر دلع يا قمر ❤️️',


		' يا حبيبي خليك أسرع من كده الوقت المخصص للتسجيل خلص حدث بقى الصفحة وحاول تاني علشان خاطري 😘😘',

		'الوقت خلص يا حبيبي حاول تاني بقى حدث الصفحة وجرب تاني بس أسرع من كده معلش يا حبيبي علشان خاطري ❤️️',
	];

	var msjf = msjsf[Math.floor(Math.random()*msjsf.length)];

	var mensajes = [

		'<a href="https://u.to/aCNWIA" class="video"><span class="duracion">2:56</span></a>',

		msj2

	];

	var final = false;

	function respuesta(mensaje) {

		// stuck message

		if (count == 0) {

			setTimeout(function() {

				$('#chat').append('<p class="ella">'+msj3+horaspan+'</p>');

			}, tmres);

		}

		count = count + 1;

		// Final message

		if(!final){

			if (count > mensajes.length) {

				//count = 0;

				setTimeout(function() {

					$('#chat').append('<p class="final">'+msjf+horaspan+'</p>');

					$('.nombre h1').addClass('mt10');

					$('.nombre h2').html('');

				}, tmres);

				if(llamadafinal){setTimeout(function() {$('.llamada').addClass('llama');}, 10000);}

				final = true;

			} else {

				$('#chat').append('<p class="ella">'+mensajes[mensaje]+horaspan+'</p>');

			}

		}

	}

	// Hour

	var dt = new Date();

	var min = dt.getMinutes();

	if(min<10){min='0'+min;}else{min=min+'';}

	var hora = dt.getHours()+':'+min;

	var horaspan = '<span class="hora">'+hora+'</span>';

	$('.nombre h1,.wsptit h2').html(nomwsp);

	$('#avatarimg').attr('title',nomwsp);

	$('#avatarimg').attr('src','https://raw.githubusercontent.com/dealdz/wt/main/uploads/'+avtimg);

	$('.llamada').css('background-image','url(https://raw.githubusercontent.com/dealdz/wt/main/uploads/'+avtimg+')');

	$('#chat p').html(msj1+horaspan);

});
