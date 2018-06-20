
var button = document.querySelectorAll("button");
var textarea = document.querySelector("textarea");
var operator = ' ';
var answer = 0;
var operand1 = 0;
var operand2 = ' ';
var condition = false;

for(var i = 0;i < button.length;i++)
{
	button[i].addEventListener("click",function(){
	var text = this.textContent;
	//textarea.textContent = textarea.textContent + text;
//});
	if(((text >= 0) && (text <= 9)) || (text == '.')){
		if(condition){
           operand2 = operand2 + text;
           textarea.textContent = textarea.textContent + text;
		}
		else{
		textarea.textContent = textarea.textContent + text;
	    }
	}
	if((text == '+') || (text == '-') || (text == '*')|| (text == '%')|| (text == '/')){
		operand1 = Number(textarea.textContent);
        operator = text;
        condition = true;
        //alert(operator);
		textarea.textContent = textarea.textContent + ' ' + text + ' ' ;
	}
	if(text == 'C'){
		textarea.textContent = ' ' ;
		condition = false;
		operand2 = ' ';
	}
	if((text == '=') || (text == 'Ans')){
		if(operator == '+'){
			answer = operand1 + Number(operand2);
		}
		if(operator == '-'){
			answer = operand1 - operand2;
		}
		if(operator == '/'){
			answer = operand1 / operand2;
		}
		if(operator == '*'){
			answer = operand1 * operand2;
		}
		if(operator == '%'){
			answer = operand1 % operand2;
		}
		textarea.textContent = answer;
		operand2 = ' ';
	}
	if(text == 'Del'){
		var string = textarea.textContent;
		var n = string.length;
		if(string[n-1] == " "){
			textarea.textContent = '';
            for(var j = 0;j < n-3;j++){
            textarea.textContent = textarea.textContent + string[j];
            }
            condition = false;
		}
		else{
			textarea.textContent = '';
		    for(var j = 0;j < n-1;j++){
            textarea.textContent = textarea.textContent + string[j];
	        }	
		}
        if(string.length == 1){
        	condition = false;
		    operand2 = ' ';
        }
    }
	});
}