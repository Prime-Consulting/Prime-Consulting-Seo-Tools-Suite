function seohi() {
	var editor = CKEDITOR.instances['edit-body-en-0-value'];
	var ckbody = editor.document.$.body.innerHTML

	var stopwords = ['di','a','da','in','con','su','per','tra','fra','il','lo','l','la','i','gli','le','un','uno','una','del','dello','della','dei','degli','delle','al','allo','all','ai','agli','alla','alle','dal','dallo','dalle','dai','dagli','dalla','dall','dalle','nel','nello','nell','nei','negli','nella','nelle','sul','sullo','sull','sui','sugli','sulla','sulle','pei','e','o','ed','od'];
	var chkpt = document.getElementById('edit-field-kpb-und'); 
	var chkpk = document.getElementById('edit-field-focus-keyword-und-0-value'); 
	var chkst = document.getElementById('edit-field-ksb-und'); 
	var chksk = document.getElementById('edit-field-keyword-secondaria-und-0-value'); 
	var chk1t = document.getElementById('edit-field-k1b-und'); 
	var chk1k = document.getElementById('edit-field-kc1-und-0-value'); 
	var chk2t = document.getElementById('edit-field-k2b-und'); 
	var chk2k = document.getElementById('edit-field-kc-2-und-0-value'); 
	var chk3t = document.getElementById('edit-field-k3b-und'); 
	var chk3k = document.getElementById('edit-field-kc-3-und-0-value'); 
	var chk4t = document.getElementById('edit-field-k4b-und'); 
	var chk4k = document.getElementById('edit-field-kc-4-und-0-value'); 
	var chk5t = document.getElementById('edit-field-k5b-und'); 
	var chk5k = document.getElementById('edit-field-kc-5-und-0-value'); 
	var chk6t = document.getElementById('edit-field-k6b-und'); 
	var chk6k = document.getElementById('edit-field-kc-6-und-0-value'); 
	var chk7t = document.getElementById('edit-field-k7b-und'); 
	var chk7k = document.getElementById('edit-field-kc-7-und-0-value'); 
	var chk8t = document.getElementById('edit-field-k8b-und'); 
	var chk8k = document.getElementById('edit-field-kc-8-und-0-value'); 
	var lunghehi = document.getElementById('lunghehi'); 
	var cortehi = document.getElementById('cortehi'); 
	var ckhtml = ckbody;
	var words = [];
	var wordssplit = [];
	var wordsexp = [];
	var hrefexp = [];
	var j = 0;
	
	// clear all hightlights
	var seohidel = '<span class="marker">';
	var spanhidel = '</span>';
	var strpos = 0
	while (ckbody.indexOf(seohidel, strpos) > -1) {			
		var startp = ckbody.indexOf(seohidel, strpos);
		var endp = startp + 21;
		if (startp == 0) {
			ckbody = ckbody.substr(21);
			if (ckbody.indexOf(spanhidel, startp) > -1) {
				var spanstart = ckbody.indexOf(spanhidel, startp);
				var spanend = spanstart + 7;
				if (startp == 0) {
					ckbody = ckbody.substr(7);
				}
				else {
				var textLeft = ckbody.substr(0,spanstart)
				var textRight = ckbody.substr(spanend)
				ckbody = textLeft + textRight;
				}
			}
		}
		else {
			var textLeft = ckbody.substr(0,startp);
			var textRight = ckbody.substr(endp);
			ckbody = textLeft + textRight;
			if (ckbody.indexOf(spanhidel, startp) > -1) {
				var spanstart = ckbody.indexOf(spanhidel, startp);
				var spanend = spanstart + 7;
				if (startp == 0) {
					ckbody = ckbody.substr(7);
				}
				else {
					var textLeft = ckbody.substr(0,spanstart)
					var textRight = ckbody.substr(spanend)
					ckbody = textLeft + textRight;
				}
			}
		strpos = startp + 28;
		}
	
	}
	editor.document.$.body.innerHTML = ckbody;
	// end clear hightlights

	if ((chkpt.checked == true) && (chkpk.value !="")) {
			words[j] = chkpk.value;
			j++
	}
		
	if ((chkst.checked == true) && (chksk.value !="")) {
		words[j] = chksk.value;
		j++
	}
		
	if ((chk1t.checked == true) && (chk1k.value !="")) {
		words[j] = chk1k.value;
		j++
	}
		
	if ((chk2t.checked == true) && (chk2k.value !="")) {
		words[j] = chk2k.value;
		j++
	}
		
	if ((chk3t.checked == true) && (chk3k.value !="")) {
		words[j] = chk3k.value;
		j++
	}
		
	if ((chk4t.checked == true) && (chk4k.value !="")) {
		words[j] = chk4k.value;
		j++
	}
		
	if ((chk5t.checked == true) && (chk5k.value !="")) {
		words[j] = chk5k.value;
		j++
	}
		
	if ((chk6t.checked == true) && (chk6k.value !="")) {
		words[j] = chk6k.value;
		j++
	}
		
	if ((chk7t.checked == true) && (chk7k.value !="")) {
		words[j] = chk7k.value;
		j++
	}
		
	if ((chk8t.checked == true) && (chk8k.value !="")) {
		words[j] = chk8k.value;
		j++
	}
	if (j < 1) {
	lunghehi.checked = false;
	cortehi.checked = false;
	}
	for (var s = 0; s < words.length; s++) {
		for (var i = 0; i < stopwords.length; i++) {
			rr = " " + stopwords[i] + " ";
			words[s] = words[s].replace(rr,' ');
		}
	}
	for (var k = 0; k < words.length; k++) {
		words[k] = words[k].toLowerCase();	
		wordssplit[k] = words[k].split(" ");
	}
	for (var k = 0; k < words.length; k++) {
		for (var w = 0; w < wordssplit[k].length; w++) {
			if ((w == 0) && (wordssplit[k].length == 1)) {
				var thisword = wordssplit[k][w];
				var thislength = thisword.length - 1
				wordsexp[k] = thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)\\w*'; //start regular expression
				hrefexp[k] = '<a{1}.*' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)\\w*\\W*\\s*>{1}'; //start regular expression
			}
			else if ((w == 0) && (wordssplit[k].length > 1))  {
				var thisword = wordssplit[k][w];
				var thislength = thisword.length - 1
				wordsexp[k] = thisword.substr(0,thislength); //start regular expression
				hrefexp[k] = '<a{1}.*' + thisword.substr(0,thislength); //start regular expression
			}
			else if (w < (wordssplit[k].length - 1)) {
				var thisword = wordssplit[k][w];
				var thislength = thisword.length - 1
				wordsexp[k] += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
				hrefexp[k] += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
			}
			else {
				var thisword = wordssplit[k][w];
				var thislength = thisword.length - 1
				wordsexp[k] += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
				hrefexp[k] += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)\\w*\\W*\\s*>{1}";	
			}
		}
	}	
	for (var z = 0; z < words.length; z++) {
		var fuzzyregex = new RegExp(wordsexp[z],"gim"); // close regular expression
		var hrefregex = new RegExp(hrefexp[z],"gim"); // close regular expression
		fuzzyregex.lastIndex = 0;
		hrefregex.lastIndex = 0;
		var savelastindex = 0
		var savehrefindex = 0
		while (fuzzyregex.exec(ckbody) != null) {
			fuzzyregex.lastIndex = savelastindex;
			hrefregex.lastIndex = savelastindex;
			var match = fuzzyregex.exec(ckbody)
			var hreftmatch = hrefregex.exec(ckbody)
			var matchword = match[0];
			if (hreftmatch != null) {
				var hrefmatchword = hreftmatch[0];
				var hreftmatchlength = hrefmatchword.length
			}
			else {
				hreftmatchlength = 0
			}
			var matchlength = matchword.length
			var pos = match.index;
			if (hreftmatch != null) {
			var hrefpos = hreftmatch.index;
			}
			else {
			hrefpos = pos
			}
			var textLeft = ckbody.substr(0,pos)
			var textRight = ckbody.substr(pos + matchlength)
			var checkrepeat = ckbody.substr(pos + matchlength,7)
			var spanLeft = '<span class="marker">';
			var spanRight = '</span>';
			fuzzyregex.lastIndex = pos + 28 + matchlength;
			savelastindex = fuzzyregex.lastIndex
			if ((hrefpos < pos) && (savelastindex < (hrefpos + hreftmatchlength + 28))) {
				ckbody = textLeft + matchword + textRight;
				fuzzyregex.lastIndex = fuzzyregex.lastIndex - 28
				savelastindex = fuzzyregex.lastIndex
			}
			else if(checkrepeat != spanRight) {
				ckbody = textLeft + spanLeft + matchword + spanRight + textRight;
			}
		}
	}
	editor.document.$.body.innerHTML = ckbody;
}
function sentencehi() {
	var editor = CKEDITOR.instances['edit-body-en-0-value'];
	var ckbody = editor.document.$.body.innerHTML
    var tempdiv =  document.createElement('div')
	var chkpt = document.getElementById('edit-field-kpb-und'); 
	var chkst = document.getElementById('edit-field-ksb-und'); 
	var chk1t = document.getElementById('edit-field-k1b-und'); 
	var chk2t = document.getElementById('edit-field-k2b-und'); 
	var chk3t = document.getElementById('edit-field-k3b-und'); 
	var chk4t = document.getElementById('edit-field-k4b-und'); 
	var chk5t = document.getElementById('edit-field-k5b-und'); 
	var chk6t = document.getElementById('edit-field-k6b-und'); 
	var chk7t = document.getElementById('edit-field-k7b-und'); 
	var chk8t = document.getElementById('edit-field-k8b-und'); 
	var lunghehi = document.getElementById('lunghehi'); 
	var cortehi = document.getElementById('cortehi'); 
	var ckhtml = ckbody;
	var ckhi = "";
	var words = [];
	var wordssplit = [];
	var wordsexp = [];
	var hrefexp = [];
	var j = 0;
	var snippets = [];
	
	// clear all hightlights
	var seohidel = '<span class="marker">';
	var spanhidel = '</span>';
	var strpos = 0
	while (ckbody.indexOf(seohidel, strpos) > -1) {			
		var startp = ckbody.indexOf(seohidel, strpos);
		var endp = startp + 21;
		if (startp == 0) {
			ckbody = ckbody.substr(21);
			if (ckbody.indexOf(spanhidel, startp) > -1) {
				var spanstart = ckbody.indexOf(spanhidel, startp);
				var spanend = spanstart + 7;
				if (startp == 0) {
					ckbody = ckbody.substr(7);
				}
				else {
				var textLeft = ckbody.substr(0,spanstart)
				var textRight = ckbody.substr(spanend)
				ckbody = textLeft + textRight;
				}
			}
		}
		else {
			var textLeft = ckbody.substr(0,startp);
			var textRight = ckbody.substr(endp);
			ckbody = textLeft + textRight;
			if (ckbody.indexOf(spanhidel, startp) > -1) {
				var spanstart = ckbody.indexOf(spanhidel, startp);
				var spanend = spanstart + 7;
				if (startp == 0) {
					ckbody = ckbody.substr(7);
				}
				else {
					var textLeft = ckbody.substr(0,spanstart)
					var textRight = ckbody.substr(spanend)
					ckbody = textLeft + textRight;
				}
			}
		strpos = startp + 28;
		}
	
	}
	editor.document.$.body.innerHTML = ckbody;
	// end clear hightlights

	if ((lunghehi.checked == true) || (cortehi.checked == true)) {
		chkpt.checked = false;
		chkst.checked = false;
		chk1t.checked = false;
		chk2t.checked = false;
		chk3t.checked = false;
		chk4t.checked = false;
		chk5t.checked = false;
		chk6t.checked = false;
		chk7t.checked = false;
		chk8t.checked = false;	
	}
    // start snippets
	var ckbody = document.getElementById('edit-body-en-0-value');
	var ahtml = ckbody.value;
	var headings = [["<p","<\/p>"],["<h1","<\/h1>"],["<h2","<\/h2>"],["<h3","<\/h3>"],["<h4","<\/h4>"],["<h5","<\/h5>"],["<h6","<\/h6>"],["<ul","<\/ul>"],["<ol","<\/ol>"],["<table","<\/table>"]]
	var snippetcounter = 0
	var z = 0
	for (var k = 0; k < headings.length; k++) {
		var strpos = 0
		var letmesee = headings[k];
		while (ahtml.indexOf(letmesee[0], strpos) > -1) {
			var startp = ahtml.indexOf(letmesee[0], strpos);
			if (k == 0) {
				var endp = ahtml.indexOf(letmesee[1], strpos) + 4;
            }
            else if (k < 9) {
				var endp = ahtml.indexOf(letmesee[1], strpos) + 5;
            }
            else if (k == 9) {
				var endp = ahtml.indexOf(letmesee[1], strpos) + 8;
            }							
			var snilength = endp - startp
			var snippet = ahtml.substr(startp,snilength);	
			if (k == 0) {
				if (snippet.match(/(<a|<img|a>)/gi) != null) {
            		tempdiv.innerHTML = snippet;
					var justwords = tempdiv.innerText;
					paragraph = justwords;
					var justlength = justwords.match(/\S+/g).length;
					strpos = endp;
					snippets[snippetcounter] = [startp,endp,snippet,justlength,k];
					snippetcounter++
				}
				else {
					tempdiv.innerHTML = snippet;
					var justwords = tempdiv.innerText;
					paragraph = justwords;
					if ((justwords.match(/\S+/g)) && (justwords != "" )) {
						var justlength = justwords.match(/\S+/g).length;
						if (snippet.match(/(\.|\.\.\.|\?\s|\!\s)/gi) != null) {
							// start addition
							var justsentences2 = snippet.match(/(\.{1,3}|\?\s|\!\s)/gi)
							var startp2 = 0
							var templ = 0 
							var f2 = 0
							var fc2 = 0
							var fok2 = 0
							var endpos2 = 0
							var startp2 = 0
							for (var g = 0; g < justsentences2.length; g++) {
								var endpos2 = snippet.indexOf(justsentences2[g], startp2)
								var endlength = justsentences2[g].length
								var justlength2 = endpos2 - startp2 + endlength
								justsentences2[g] = snippet.substr(startp2,justlength2)
								var thesewords = justsentences2[g].match(/\S+/g).length
								justsentences2[g] = thesewords;
								templ += justsentences2[g]
								if ((justsentences2[g] > 25) && (lunghehi.checked == true)) {
									if (startp2 == 0) { 
										var textmiddle = '<p><span class="marker">' + snippet.substr((startp2+3),(justlength2 - endlength - 2)) + '</span>'
										var textright = snippet.substr((startp2 + justlength2))
										snippet = textmiddle + textright + '<\/p>'
										endpos2 = endpos2 + 28
										endp = endp + 28	
									}
									else {
										var textmiddle = '<span class="marker">' + snippet.substr((startp2+endlength),(justlength2 - endlength)) + '</span>'
										var textright = snippet.substr((startp2 + justlength2))
										var textleft = snippet.substr(0,startp2+endlength)
										snippet = textleft + textmiddle + textright + '<\/p>'
										endpos2 = endpos2 + 28
										endp = endp + 28	
									}	
								}
								if ((justsentences2[g] < 10) && (cortehi.checked == true)) {
									if (startp2 == 0) { 
										var textmiddle = '<p><span class="marker">' + snippet.substr((startp2+3),(justlength2 - endlength - 2)) + '</span>'
										var textright = snippet.substr((startp2 + justlength2))
										snippet = textmiddle + textright + '<\/p>'
										endpos2 = endpos2 + 28
										endp = endp + 28	
									}
									else {
										var textmiddle = '<span class="marker">' + snippet.substr((startp2+endlength),(justlength2 - endlength)) + '</span>'
										var textright = snippet.substr((startp2 + justlength2))
										var textleft = snippet.substr(0,startp2+endlength)
										snippet = textleft + textmiddle + textright + '<\/p>'
										endpos2 = endpos2 + 28
										endp = endp + 28	
									}							
								}
								endpos2++
								startp2 = endpos2
							}
						}
					}	
				snippet.replace('<\/p><\/p>','<\/p>')
				snippets[snippetcounter] = [startp,endp,snippet];
				snippetcounter++;
				strpos = endp;
				}
			}
			else if ((k > 0) && (k<7)){
				strpos = endp;
				snippets[snippetcounter] = [startp,endp,snippet,justlength,k];
				snippetcounter++;
			}
			else if ((k > 6) && (k<9)){
				strpos = endp;
				snippets[snippetcounter] = [startp,endp,snippet,justlength,k];
				snippetcounter++;
			}
			else if (k == 9){
				strpos = endp;
				snippets[snippetcounter] = [startp,endp,snippet,justlength,k];
				snippetcounter++;
			}
		}
	}
	snippets = snippets.sort(function(a,b) {
		return a[0] - b[0];
	});

	// end snippets
	for (var k = 0; k < snippets.length; k++) {
        ckhi += snippets[k][2]
    }

   
	editor.document.$.body.innerHTML = ckhi;
}

function ktchange() {
	var chktb = document.getElementById('edit-field-ktb-und'); 
	if (chktb.checked == true) {
			var chkpt = document.getElementById('edit-field-kpb-und'); 
		var chkpk = document.getElementById('edit-field-focus-keyword-und-0-value'); 
		if (chkpk.value !="") {
			chkpt.checked = true;
		}
		else {
			chkpt.checked = false;	
		}
		
		var chkst = document.getElementById('edit-field-ksb-und'); 
		var chksk = document.getElementById('edit-field-keyword-secondaria-und-0-value'); 
		if (chksk.value !="") {
			chkst.checked = true;
		}
		else {
			chkst.checked = false;	
		}
		
		var chk1t = document.getElementById('edit-field-k1b-und'); 
		var chk1k = document.getElementById('edit-field-kc1-und-0-value'); 
		if (chk1k.value !="") {
			chk1t.checked = true;
		}
		else {
			chk1t.checked = false;	
		}
		
		var chk2t = document.getElementById('edit-field-k2b-und'); 
		var chk2k = document.getElementById('edit-field-kc-2-und-0-value'); 
		if (chk2k.value !="") {
			chk2t.checked = true;
		}
		else {
			chk2t.checked = false;	
		}
		
		var chk3t = document.getElementById('edit-field-k3b-und'); 
		var chk3k = document.getElementById('edit-field-kc-3-und-0-value'); 
		if (chk3k.value !="") {
			chk3t.checked = true;
		}
		else {
			chk3t.checked = false;	
		}
		
		var chk4t = document.getElementById('edit-field-k4b-und'); 
		var chk4k = document.getElementById('edit-field-kc-4-und-0-value'); 
		if (chk4k.value !="") {
			chk4t.checked = true;
		}
		else {
			chk4t.checked = false;	
		}
		
		var chk5t = document.getElementById('edit-field-k5b-und'); 
		var chk5k = document.getElementById('edit-field-kc-5-und-0-value'); 
		if (chk5k.value !="") {
			chk5t.checked = true;
		}
		else {
			chk5t.checked = false;	
		}
		
		var chk6t = document.getElementById('edit-field-k6b-und'); 
		var chk6k = document.getElementById('edit-field-kc-6-und-0-value'); 
		if (chk6k.value !="") {
			chk6t.checked = true;
		}
		else {
		chk6t.checked = false;	
		}
		
		var chk7t = document.getElementById('edit-field-k7b-und'); 
		var chk7k = document.getElementById('edit-field-kc-7-und-0-value'); 
		if (chk7k.value !="") {
			chk7t.checked = true;
		}
		else {
			chk7t.checked = false;	
		}
		
		var chk8t = document.getElementById('edit-field-k8b-und'); 
		var chk8k = document.getElementById('edit-field-kc-8-und-0-value'); 
		if (chk8k.value !="") {
			chk8t.checked = true;
		}
		else {
			chk8t.checked = false;	
		}
	}
	else {
		var chkpt = document.getElementById('edit-field-kpb-und'); 
		chkpt.checked = false;
		var chkst = document.getElementById('edit-field-ksb-und'); 
		chkst.checked = false;
		var chk1t = document.getElementById('edit-field-k1b-und'); 
		chk1t.checked = false;
		var chk2t = document.getElementById('edit-field-k2b-und'); 
		chk2t.checked = false;
		var chk3t = document.getElementById('edit-field-k3b-und'); 
		chk3t.checked = false;
		var chk4t = document.getElementById('edit-field-k4b-und'); 
		chk4t.checked = false;
		var chk5t = document.getElementById('edit-field-k5b-und'); 
		chk5t.checked = false;
		var chk6t = document.getElementById('edit-field-k6b-und'); 
		chk6t.checked = false;
		var chk7t = document.getElementById('edit-field-k7b-und'); 
		chk7t.checked = false;
		var chk8t = document.getElementById('edit-field-k8b-und'); 
		chk8t.checked = false;	
	}
	seohi();
}

function kpchange() {
	var chktb = document.getElementById('edit-field-ktb-und'); 
	var chkpt = document.getElementById('edit-field-kpb-und'); 
	if ((chkpt.checked == false) && (chktb.checked == true))  {
		chkpt.checked = false;
		chktb.checked = false;
	}
	if ((chkpt.checked == false) && (chktb.checked == true)) {
		chktb.checked = false;
	}				
	if (chkpt.checked == true) {
		var chkpk = document.getElementById('edit-field-focus-keyword-und-0-value'); 
		if (chkpk.value !="") {
			chkpt.checked = true;
		}
		else {
			chkpt.checked = false;
	    }	
	}
	seohi();
}

function kschange() {
	var chktb = document.getElementById('edit-field-ktb-und'); 
	var chkst = document.getElementById('edit-field-ksb-und'); 
	if ((chkst.checked == false) && (chktb.checked == true))  {
		chkst.checked = false;
		chktb.checked = false;
	}
	if ((chkst.checked == false) && (chktb.checked == true)) {
		chktb.checked = false;
	}				
	if (chkst.checked == true) {
		var chksk = document.getElementById('edit-field-keyword-secondaria-und-0-value'); 
		if (chksk.value !="") {
			chkst.checked = true;
		}
		else {
			chkst.checked = false;
	    }	
	}
	seohi();
}	

function k1change() {
	var chktb = document.getElementById('edit-field-ktb-und'); 
	var chk1t = document.getElementById('edit-field-k1b-und'); 
	if ((chk1t.checked == false) && (chktb.checked == true))  {
		chk1t.checked = false;
		chktb.checked = false;
	}
	if ((chk1t.checked == false) && (chktb.checked == true)) {
		chktb.checked = false;
	}				
	if (chk1t.checked == true) {
		var chk1k = document.getElementById('edit-field-kc1-und-0-value'); 
		if (chk1k.value !="") {
			chk1t.checked = true;
		}
		else {
			chk1t.checked = false;
	    }	
	}
	seohi();
}

function k2change() {
	var chktb = document.getElementById('edit-field-ktb-und'); 
	var chk2t = document.getElementById('edit-field-k2b-und'); 
	if ((chk2t.checked == false) && (chktb.checked == true))  {
		chk2t.checked = false;
		chktb.checked = false;
	}
	if ((chk2t.checked == false) && (chktb.checked == true)) {
		chktb.checked = false;
	}				
	if (chk2t.checked == true) {
		var chk2k = document.getElementById('edit-field-kc-2-und-0-value'); 
		if (chk2k.value !="") {
			chk2t.checked = true;
		}
		else {
			chk2t.checked = false;
	    }	
	}
	seohi();
}

function k3change() {
	var chktb = document.getElementById('edit-field-ktb-und'); 
	var chk3t = document.getElementById('edit-field-k3b-und'); 
	if ((chk3t.checked == false) && (chktb.checked == true))  {
		chk3t.checked = false;
		chktb.checked = false;
	}
	if ((chk3t.checked == false) && (chktb.checked == true)) {
		chktb.checked = false;
	}				
	if (chk3t.checked == true) {
		var chk3k = document.getElementById('edit-field-kc-3-und-0-value'); 
		if (chk3k.value !="") {
			chk3t.checked = true;
		}
		else {
			chk3t.checked = false;
	    }	
	}
	seohi();
}

function k4change() {
	var chktb = document.getElementById('edit-field-ktb-und'); 
	var chk4t = document.getElementById('edit-field-k4b-und'); 
	if ((chk4t.checked == false) && (chktb.checked == true))  {
		chk4t.checked = false;
		chktb.checked = false;
	}
	if ((chk4t.checked == false) && (chktb.checked == true)) {
		chktb.checked = false;
	}				
	if (chk4t.checked == true) {
		var chk4k = document.getElementById('edit-field-kc-4-und-0-value'); 
		if (chk4k.value !="") {
			chk4t.checked = true;
		}
			else {
			chk4t.checked = false;
	    }	
	}
	seohi();
}

function k5change() {
	var chktb = document.getElementById('edit-field-ktb-und'); 
	var chk5t = document.getElementById('edit-field-k5b-und'); 
	if ((chk5t.checked == false) && (chktb.checked == true))  {
		chk5t.checked = false;
		chktb.checked = false;
	}
	if ((chk5t.checked == false) && (chktb.checked == true)) {
		chktb.checked = false;
	}				
	if (chk5t.checked == true) {
		var chk5k = document.getElementById('edit-field-kc-5-und-0-value'); 
		if (chk5k.value !="") {
			chk5t.checked = true;
		}
		else {
			chk5t.checked = false;
	    }	
	}
	seohi();
}

function k6change() {
	var chktb = document.getElementById('edit-field-ktb-und'); 
	var chk6t = document.getElementById('edit-field-k6b-und'); 
	if ((chk6t.checked == false) && (chktb.checked == true))  {
		chk6t.checked = false;
		chktb.checked = false;
	}
	if ((chk6t.checked == false) && (chktb.checked == true)) {
		chktb.checked = false;
	}				
	if (chk6t.checked == true) {
		var chk6k = document.getElementById('edit-field-kc-6-und-0-value'); 
		if (chk6k.value !="") {
			chk6t.checked = true;
		}
		else {
			chk6t.checked = false;
	    }	
	}
	seohi();
}

function k7change() {
	var chktb = document.getElementById('edit-field-ktb-und'); 
	var chk7t = document.getElementById('edit-field-k7b-und'); 
	if ((chk7t.checked == false) && (chktb.checked == true))  {
		chk7t.checked = false;
		chktb.checked = false;
	}
	if ((chk7t.checked == false) && (chktb.checked == true)) {
		chktb.checked = false;
	}				
		if (chk7t.checked == true) {
		var chk7k = document.getElementById('edit-field-kc-7-und-0-value'); 
		if (chk7k.value !="") {
			chk7t.checked = true;
		}
		else {
			chk7t.checked = false;
	    }	
	}
	seohi();
}

function k8change() {
	var chktb = document.getElementById('edit-field-ktb-und'); 
	var chk8t = document.getElementById('edit-field-k8b-und'); 
	if ((chk8t.checked == false) && (chktb.checked == true))  {
		chk8t.checked = false;
		chktb.checked = false;
	}
	if ((chk8t.checked == false) && (chktb.checked == true)) {
		chktb.checked = false;
	}				
	if (chk8t.checked == true) {
		var chk8k = document.getElementById('edit-field-kc-8-und-0-value'); 
		if (chk8k.value !="") {
			chk8t.checked = true;
		}
		else {
			chk8t.checked = false;
	    }	
	}
	seohi();
}

function lunghec() {
	var lunghehi = document.getElementById('lunghehi'); 	
	if (lunghehi.checked == true) {
		var chkpt = document.getElementById('edit-field-kpb-und'); 
		chkpt.checked = false;
		var chkst = document.getElementById('edit-field-ksb-und'); 
		chkst.checked = false;
		var chk1t = document.getElementById('edit-field-k1b-und'); 
		chk1t.checked = false;
		var chk2t = document.getElementById('edit-field-k2b-und'); 
		chk2t.checked = false;
		var chk3t = document.getElementById('edit-field-k3b-und'); 
		chk3t.checked = false;
		var chk4t = document.getElementById('edit-field-k4b-und'); 
		chk4t.checked = false;
		var chk5t = document.getElementById('edit-field-k5b-und'); 
		chk5t.checked = false;
		var chk6t = document.getElementById('edit-field-k6b-und'); 
		chk6t.checked = false;
		var chk7t = document.getElementById('edit-field-k7b-und'); 
		chk7t.checked = false;
		var chk8t = document.getElementById('edit-field-k8b-und'); 
		chk8t.checked = false;	
	}
	sentencehi();
}
function cortec() {
	var cortehi = document.getElementById('lunghehi'); 	
	if (cortehi.checked == true) {
		var chkpt = document.getElementById('edit-field-kpb-und'); 
		chkpt.checked = false;
		var chkst = document.getElementById('edit-field-ksb-und'); 
		chkst.checked = false;
		var chk1t = document.getElementById('edit-field-k1b-und'); 
		chk1t.checked = false;
		var chk2t = document.getElementById('edit-field-k2b-und'); 
		chk2t.checked = false;
		var chk3t = document.getElementById('edit-field-k3b-und'); 
		chk3t.checked = false;
		var chk4t = document.getElementById('edit-field-k4b-und'); 
		chk4t.checked = false;
		var chk5t = document.getElementById('edit-field-k5b-und'); 
		chk5t.checked = false;
		var chk6t = document.getElementById('edit-field-k6b-und'); 
		chk6t.checked = false;
		var chk7t = document.getElementById('edit-field-k7b-und'); 
		chk7t.checked = false;
		var chk8t = document.getElementById('edit-field-k8b-und'); 
		chk8t.checked = false;	
	}
	sentencehi();
}

function primeseohi() {
window.addEventListener('load', function() {
	var shktb = document.getElementById('edit-field-ktb-und'); 
				shktb.addEventListener( 'change', function() {
					ktchange();
				});
	var shkpt = document.getElementById('edit-field-kpb-und'); 
				shkpt.addEventListener( 'change', function() {
					kpchange();
				});
	var shkst = document.getElementById('edit-field-ksb-und'); 
				shkst.addEventListener( 'change', function() {
					kschange();
				});
	var shk1t = document.getElementById('edit-field-k1b-und'); 
				shk1t.addEventListener( 'change', function() {
					k1change();
				});
	var shk2t = document.getElementById('edit-field-k2b-und'); 
				shk2t.addEventListener( 'change', function() {
					k2change();
				});
	var shk3t = document.getElementById('edit-field-k3b-und'); 
				shk3t.addEventListener( 'change', function() {
					k3change();
				});
	var shk4t = document.getElementById('edit-field-k4b-und'); 
				shk4t.addEventListener( 'change', function() {
					k4change();
				});
	var shk5t = document.getElementById('edit-field-k5b-und'); 
				shk5t.addEventListener( 'change', function() {
					k5change();
				});
	var shk6t = document.getElementById('edit-field-k6b-und'); 
				shk6t.addEventListener( 'change', function() {
					k6change();
				});
	var shk7t = document.getElementById('edit-field-k7b-und'); 
				shk7t.addEventListener( 'change', function() {
					k7change();
				});
	var shk8t = document.getElementById('edit-field-k8b-und'); 
				shk8t.addEventListener( 'change', function() {
					k8change();
				});
	var lunghehi = document.getElementById('lunghehi'); 
				lunghehi.addEventListener( 'change', function() {
				lunghec();
				});
	var cortehi = document.getElementById('cortehi'); 
				cortehi.addEventListener( 'change', function() {
				cortec();
				});
// end of file
})
}
