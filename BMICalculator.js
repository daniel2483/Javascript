	// Highcharts ***************************************************************

	var gaugeOptions = {

		chart: {
			type: 'gauge',
			plotBackgroundColor: null,
			plotBackgroundImage: null,
			plotBorderWidth: 0,
			plotShadow: false
		},

		title: null,

		pane: {
			center: ['50%', '90%'],
			size: '180%',
			startAngle: -70,
			endAngle: 70,
			background: {
				backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
				innerRadius: '70%',
				outerRadius: '100%',
				shape: 'arc'
			}
		},

		tooltip: {
			enabled: false
		},

		// the value axis
		yAxis: {
			minorTickInterval: 'auto',
			minorTickWidth: 1,
			minorTickLength: 10,
			minorTickPosition: 'inside',
			minorTickColor: '#666',

			tickPixelInterval: 60,
			tickWidth: 2,
			tickPosition: 'inside',
			tickLength: 10,
			tickColor: '#FFF',
			lineWidth: 0,

			title: {
				y: -70
			},
			labels: {
				y: 16
			},
			plotBands: [{
            from: 0,
            to: 18.5,
            color: 'blue' // green
        }, {
            from: 18.5,
            to: 25,
            color: 'green' // yellow
        }, {
            from: 25,
            to: 30,
            color: 'orange' // red
        }, {
            from: 30,
            to: 50,
            color: 'red' // red
        }]
		},

		plotOptions: {
			gauge: {
				dataLabels: {
					y: null,
					borderWidth: null,
					useHTML: true
				}
			}
		}
	};

	// BMI grafico
	var chartBMI = Highcharts.chart('container-bmi', Highcharts.merge(gaugeOptions, {
		yAxis: {
			min: 0,
			max: 50,
			title: {
				text: ''
			}
		},

		credits: {
			enabled: false
		},

		series: [{
			name: 'BMI',
			data: [0],
			dataLabels: {
				format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
					   '<center><span style="font-size:12px;color:silver">Indice de Masa Corporal<br><b>(IMC o BMI por siglas en Ingles)</b></span></center></div>'
			},
			tooltip: {
				valueSuffix: ' BMI'
			}
		}]

	}));
	

	
	
	// Calculadora *******************************************
	var peso = 0;
	var estatura = 1;
	var resultado = 0;
	var strUser = "kg";
	var libras = 2.204623;
	var pulgadas = 2.54;
	var dotHeight = 0;
	var dotWeight = 0;
	var units_weight="";
	var units_height="";
	
	


	function ingresoData () {
	
	
	peso = document.getElementById("peso").value;
	estatura = document.getElementById("estatura").value;

	var e = document.getElementById("options1");
	var str1 = e.options[e.selectedIndex].value;

	var label = document.getElementById("resultado");

	var e = document.getElementById("options2");
	var str2 = e.options[e.selectedIndex].value;
	
	var recommended_max_weight=0;
	var recommended_min_weight=0;
	var lost_weight_min = 0;
	
	var label3 = "";
	var label4 = "";
	var label5 = "";
	var label6 = "";
	var label7 = "";
	
	
	// Unidades de medida en los inputs
	if(str1 === "lb (libra)" ){
		label6 = document.getElementById("units_weight");
		label6.innerHTML = "lb";
	}
	
	if(str1 === "kg (kilogramo)" ){
		label6 = document.getElementById("units_weight");
		label6.innerHTML = "kg";
	}
	
	if(str2 === "cm (centimetro)" ){
		label7 = document.getElementById("units_height");
		label7.innerHTML = "cm";
	}
	
	if(str2 === "m (metro)" ){
		label7 = document.getElementById("units_height");
		label7.innerHTML = "m";
	}
	
	if(str2 === "pulg (pulgada)" ){
		label7 = document.getElementById("units_height");
		label7.innerHTML = "pulg";
	}	
	
	
	// Calculo del BMI segun la unidad de medida
	if( peso !== "" && estatura !== "" && estatura !== "0"){

		//alert( str1 + ' ' + str2 );
		document.getElementById("container-bmi").style.display = "block";
		document.getElementById("recommendations").style.display = "block";

		if ( str1 === "lb (libra)" && str2 === "cm (centimetro)"){
		calculo = peso/(libras*(estatura/100)*(estatura/100));
		calculo = calculo.toFixed(2);
		//alert(calculo);
	
		recommended_max_weight = estatura * estatura * (25/10000)*libras;
		recommended_min_weight = estatura * estatura * (18.5/10000)*libras;
		lost_weight_min.toFixed(2) = peso - recommended_max_weight;
		
		console.log(estatura);
		
		recommended_max_weight = recommended_max_weight.toFixed(2);
		recommended_min_weight = recommended_min_weight.toFixed(2);
			
		label3 = document.getElementById("recommended_max_weight"); //.innerHTML("&nbsp; Tiene Obesidad");
		label3.innerHTML = recommended_max_weight + " Kg";
		
		label4 = document.getElementById("recommended_min_weight"); //.innerHTML("&nbsp; Tiene Obesidad");
		label4.innerHTML = recommended_min_weight + " Kg";
		
		label5 = document.getElementById("lost_weight_min"); //.innerHTML("&nbsp; Tiene Obesidad");
		label5.innerHTML = lost_weight_min + " lb";
		
		
		}
		if ( str1 === "lb (libra)" && str2 === "m (metro)"){
		calculo = peso/(libras*(estatura)*(estatura));
		calculo = calculo.toFixed(2);
		//alert(calculo);
		}
		if ( str1 === "lb (libra)" && str2 === "pulg (pulgada)"){
		calculo = peso/(libras*(estatura/100*pulgadas)*(estatura/100*pulgadas));
		calculo = calculo.toFixed(2);
		//alert(calculo);
		}
		if ( str1 === "kg (kilogramo)" && str2 === "cm (centimetro)"){
		calculo = peso/((estatura/100)*(estatura/100));
		calculo = calculo.toFixed(2);
		//alert(calculo);
		var recommended_max_weight=0;
		var recommended_min_weight=0;
		var lost_weight_min = 0;
	
		recommended_max_weight = estatura * estatura * 25/10000;
		recommended_min_weight = estatura * estatura * 18.5/10000;
		lost_weight_min = peso - recommended_max_weight;
		lost_weight_min = lost_weight_min.toFixed(2);
		
		console.log(estatura);
		
		recommended_max_weight = recommended_max_weight.toFixed(2);
		recommended_min_weight = recommended_min_weight.toFixed(2);
		
		var label3 = "";
		var label4 = "";
		var label5 = "";
		
		label3 = document.getElementById("recommended_max_weight"); //.innerHTML("&nbsp; Tiene Obesidad");
		label3.innerHTML = recommended_max_weight + " Kg";
		
		label4 = document.getElementById("recommended_min_weight"); //.innerHTML("&nbsp; Tiene Obesidad");
		label4.innerHTML = recommended_min_weight + " Kg";
		
		label5 = document.getElementById("lost_weight_min"); //.innerHTML("&nbsp; Tiene Obesidad");
		label5.innerHTML = lost_weight_min + " Kg";
		
		}
		if ( str1 === "kg (kilogramo)" && str2 === "m (metro)"){
		calculo = peso/((estatura)*(estatura));
		calculo = calculo.toFixed(2);
		//alert(calculo);
		}
		if ( str1 === "kg (kilogramo)" && str2 === "pulg (pulgada)"){
		calculo = peso/((estatura/100*pulgadas)*(estatura/100*pulgadas));
		calculo = calculo.toFixed(2);
		//alert(calculo);
		}

		//alert(calculo);
		if ( calculo > 30){
		//&nbsp;
		document.getElementById("resultado").style.color = 'red';
		label2 = document.getElementById("mensaje"); //.innerHTML("&nbsp; Tiene Obesidad");
		label2.innerHTML = "&nbsp; Persona con Obesidad";
		}
		
		if ( calculo > 25 && calculo <= 30){
		document.getElementById("resultado").style.color = 'orange';
		label2 = document.getElementById("mensaje"); //.innerHTML("&nbsp; Tiene Obesidad");
		label2.innerHTML = "&nbsp; Sobrepeso";
		}
		
		if ( calculo > 18.5 && calculo <= 25){
		document.getElementById("resultado").style.color = 'green';
		label2 = document.getElementById("mensaje"); //.innerHTML("&nbsp; Tiene Obesidad");
		label2.innerHTML = "&nbsp; Peso Normal";
		}
		
		if ( calculo <= 18.5){
		document.getElementById("resultado").style.color = 'blue';
		label2 = document.getElementById("mensaje"); //.innerHTML("&nbsp; Tiene Obesidad");
		label2.innerHTML = "&nbsp; Peso inferior al normal";
		}
		
		
		label.innerHTML = calculo;
		if ( calculo > 60){
		calculo =60;
		}
		point = chartBMI.series[0].points[0];
		point.update(parseFloat(calculo));
		//console.log(calculo);
		
	}

	if ( estatura === "0" || peso === "0"){
		label.innerHTML = 0;
		point = chartBMI.series[0].points[0];
		point.update(0);
		
		document.getElementById("resultado").style.color = 'black';
		label2 = document.getElementById("mensaje"); //.innerHTML("&nbsp; Tiene Obesidad");
		label2.innerHTML = "&nbsp;";
		
		document.getElementById("container-bmi").style.display = "none";
		document.getElementById("recommendations").style.display = "none";
	}	
	
	

	}
	
	// Limiting 2 decimal numbers in inputs
	
	$(document).on('keydown', 'input[pattern]', function(e){
		  var input = $(this);
		  var oldVal = input.val();
		  var regex = new RegExp(input.attr('pattern'), 'g');

		  setTimeout(function(){
			var newVal = input.val();
			if(!regex.test(newVal)){
			  input.val(oldVal); 
			}
		  }, 0);
		});
	
	
	// Function to uncheck radio button from gender and only leave one active
	var grd = function(){
	  $("input[type='radio']").click(function() {
		var previousValue = $(this).attr('previousValue');
		//console.log(previousValue);
		var name = $(this).attr('name');
		
		//console.log(name);
		
		if (previousValue == 'checked') {
		  $(this).removeAttr('checked');
		  $(this).attr('previousValue', false);
		} else {
		  $("input[name="+name+"]:radio").attr('previousValue', false);
		  $(this).attr('previousValue', 'checked');
		}
	  });
	};

	grd('gender');
	
		function dotInNumber(){
		  var number = document.getElementById("estatura").value;
		  var numberToString = number.toString(2);
		  //console.log('Number: ' + numberToString);
		  //console.log('Residuo? ' + number % 1 != 0); // indexOf('.')
		  //console.log('El string posee punto? ' + numberToString.indexOf('.'));
			if(number.indexOf('.') !== -1)
			{
			  // would be true. Period found in file name
			  //console.log("Found . in number")
			}

			else
			{
			  // would be false. No period found in directory name. This won't run.
			  //console.log("Not Found . in number")
			}	
		};
	
	// Limit to numbers and one dot Height input
       function isNumberKeyHeight(evt,input)
       {
		  
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		console.log("Key: " + charCode + evt);
		  
		if ((charCode != 46 && charCode > 31 
			&& (charCode < 48 || charCode > 57)) ||  (dotHeight == 1 && charCode == 46))
			{
				
				if ( dotHeight == 1){
					console.log("A dot is already in the expression Height...");
				}
				else{
					console.log("Is not a number ...");
				}
				return false;
			}
		  
		if (charCode == 46 )
			{
				dotHeight=1;
			}
		  
		var inputValue = document.getElementById(input);
		var number = document.getElementById(input).value;
		var stringNumber = number.toString(2);
		var n = stringNumber.length;
		var lastChar = stringNumber[n -1];

		inputValue.onkeydown = function() {
			var key = event.keyCode || event.charCode;

			if( key == 8 || key == 46 ){
				number = document.getElementById(input).value;
				stringNumber = number.toString(2);
				n = stringNumber.length;
				lastChar = stringNumber[n - 1];
				console.log("Deleting... Size of "+ input + ": " + n + " Ultimo caracter: " + lastChar);
					
				if (lastChar == '.'){
						dotHeight = 0;
				}
			return true;
			}
		};
		  
		return true;
		  
		}

		

	// Limit to numbers and one dot Weight input
       function isNumberKeyWeight(evt,input)
       {
		  
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		console.log("Key: " + charCode + evt);
		  
		if ((charCode != 46 && charCode > 31 
			&& (charCode < 48 || charCode > 57)) ||  (dotWeight == 1 && charCode == 46))
			{
				
				if ( dotWeight == 1){
					console.log("A dot is already in the expression Weight...");
				}
				else{
					console.log("Is not a number ...");
				}
				return false;
			}
		  
		if (charCode == 46 )
			{
				dotWeight=1;
			}
		  
		var inputValue = document.getElementById(input);
		var number = document.getElementById(input).value;
		var stringNumber = number.toString(2);
		var n = stringNumber.length;
		var lastChar = stringNumber[n -1];

		inputValue.onkeydown = function() {
			var key = event.keyCode || event.charCode;

			if( key == 8 || key == 46 ){
				number = document.getElementById(input).value;
				stringNumber = number.toString(2);
				n = stringNumber.length;
				lastChar = stringNumber[n - 1];
				console.log("Deleting... Size of "+ input + ": " + n + " Ultimo caracter: " + lastChar);
					
				if (lastChar == '.'){
						dotWeight = 0;
				}
			return true;
			}
		};
		  
		return true;
		  
		}
		