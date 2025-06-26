// 檢查結果
function checkResult() {
	const q1=document.querySelector(`input[name=q1]:checked`);
	const q2=document.querySelector(`input[name=q2]:checked`);
	const q3=document.querySelector(`input[name=q3]:checked`);
	const q4=document.querySelector(`input[name=q4]:checked`);
	const q5=document.querySelector(`input[name=q5]:checked`);
	
	if(!(q1&&q2&&q3&&q4&&q5)){
		alert('情完成所有題目!');
		return;
	}
	const scores={'紅色':0,'藍色':0,'綠色':0,'黃色':0};
	const colorMap={'A':'紅色','B':'藍色','C':'綠色','D':'黃色'};
	[q1,q2,q3,q4,q5].forEach(q=>{
		scores[colorMap[q.value]]+=1;
	});
	
	//alert(scores['紅色']);
	
	let maxScore=-1;
	let maxColor=null;
	
	for(const color in scores){
		if(scores[color]>maxScore)
			maxScore=scores[color];
			maxColor=color;
	}
	//alert('最高分的顏色:'+maxColor);
	const descriptions={
		'紅色':'熱情、行動派、有衝勁、喜歡挑戰、積極主動',
		'藍色':'理性、冷靜、思考型、邏輯強、重視計畫與分析',
		'綠色':'友善、和平、重視和諧、關心他人、喜歡團隊合作',
		'黃色':'樂觀、創意、喜歡自由、幽默風趣、善於表達'
		
	}
	const result='你是一個'+descriptions[maxColor]+"的人";
	document.getElementById('result').innerHTML=result;
	
	
	}