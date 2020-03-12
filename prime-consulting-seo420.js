function seohiclear() {
		var chktb = document.getElementById('edit-field-ktb-und'); 
		chktb.checked = false;
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
		seohi();
		
}


function primeseo() {
	window.addEventListener('load', function() {
		
        var editsaveedit = document.getElementById('edit-save-edit');
					editsaveedit.addEventListener( 'click', function() {
					seohiclear();
				});
		var editsubit = document.getElementById('edit-submit');
					editsubit.addEventListener( 'click', function() {
					seohiclear();
				});
		
		
        var deadline = document.getElementById('edit-field-deadline-und-0-value-datepicker-popup-0');
		deadline.labels[0].innerText = 'Deadline';
		//deadline.disabled = true;
		
		var messagelog = document.createElement("div");
		divmessaggi = document.getElementById('field-messaggi-add-more-wrapper')
		messagelog.setAttribute('id','messagelog')
		divmessaggi.appendChild(messagelog);
		var n = 0;
		var p = 0;
		var f = 0;
		var fc = 0;
		var pg = 0;
		var kpn = 0;
		var kpd = 0;
		var ksn = 0;
		var ksd = 0;
		var k1n = 0;
		var k1d = 0;
		var k2n = 0;
		var k2d = 0;
		var k3n = 0;
		var k3d = 0;
		var k4n = 0;
		var k4d = 0;
		var k5n = 0;
		var k5d = 0;
		var k6n = 0;
		var k6d = 0;
		var k7n = 0;
		var k7d = 0;
		var k8n = 0;
		var k8d = 0;
		var ktn = 0;
		var ktd = 0;
		var kkk = 0;
		var kh2 = 0;	
		var kh2t = 0;	
		var imgs = 0;
		var firstpn	= 0;
		var img0alt = null
		var img0title = null
		var img1alt = null
		var img1title = null
		var img2alt = null
		var img2title = null
		var img3alt = null
		var img3title = null
		var img4alt = null
		var img4title = null
		var img5alt = null
		var img5title = null
		var img6alt = null
		var img6title = null
		var img7alt = null
		var img7title = null
		var eg0alt = null
		var eg0title = null
		var eg1alt = null
		var eg1title = null
		var eg2alt = null
		var eg2title = null
		var eg3alt = null
		var eg3title = null
		var eg4alt = null
		var eg4title = null
		var eg5alt = null
		var eg5title = null
		var eg6alt = null
		var eg6title = null
		var eg7alt = null
		var eg7title = null
		var eg8alt = null
		var eg8title = null
		var eg9alt = null
		var eg9title = null
		var tablecounter = 0;
		var videocounter = 0
		var m = ""
		var stopword = ''
		var words = []
		var wordscounter = 0;
		var currentNode = ''
		var pcounter = 0
		var frcounter = 0
		var h1counter = 0
		var h2counter = 0
		var h3counter = 0
		var h4counter = 0
		var h5counter = 0
		var h6counter = 0
		var acounter = 0
		var lunghezza = 0
		var nofollowcounter = 0
		var listcounter = 0
		var inlineimg = 0
		var fttp = 0 
		var ftts = 0 
		var ftt1 = 0 
		var ftt2 = 0 
		var ftt3 = 0
		var ftt4 = 0
		var ftt5 = 0
		var ftt6 = 0
		var ftt7 = 0
		var ftt8 = 0
		var ttp = 0 
		var tts = 0 
		var tt1 = 0 
		var tt2 = 0 
		var tt3 = 0
		var tt4 = 0
		var tt5 = 0
		var tt6 = 0
		var tt7 = 0
		var tt8 = 0
		var stopwords = ['di','a','da','in','con','su','per','tra','fra','il','lo','l','la','i','gli','le','un','uno','una','del','dello','della','dei','degli','delle','al','allo','all','ai','agli','alla','alle','dal','dallo','dalle','dai','dagli','dalla','dall','dalle','nel','nello','nell','nei','negli','nella','nelle','sul','sullo','sull','sui','sugli','sulla','sulle','pei','e','ed','è','é','però','più','ad'];
		var tt = document.getElementById('edit-field-titolo-articolo-und-0-value').value;
		var kp = document.getElementById('edit-field-focus-keyword-und-0-value').value;
		var ks = document.getElementById('edit-field-keyword-secondaria-und-0-value').value;
		var k1 = document.getElementById('edit-field-kc1-und-0-value').value;
		var k2 = document.getElementById('edit-field-kc-2-und-0-value').value;
		var k3 = document.getElementById('edit-field-kc-3-und-0-value').value;
		var k4 = document.getElementById('edit-field-kc-4-und-0-value').value;
		var k5 = document.getElementById('edit-field-kc-5-und-0-value').value;
		var k6 = document.getElementById('edit-field-kc-6-und-0-value').value;
		var k7 = document.getElementById('edit-field-kc-7-und-0-value').value;
		var k8 = document.getElementById('edit-field-kc-8-und-0-value').value;
		var lun = document.getElementById('edit-field-numero-parole-target-und');
		var slug = document.getElementById('edit-field-url-slug-und-0-value');
		var meta = document.getElementById('edit-field-meta-description-und-0-value');
		var mmessages = document.getElementById('edit-field-messaggi-und-0-value');
		var kpcell = document.getElementById('edit-field-kp-und-0-value');
		var kpdcell = document.getElementById('edit-field-kpd-und-0-value');
		var kscell = document.getElementById('edit-field-ks-und-0-value');
		var ksdcell = document.getElementById('edit-field-ksd-und-0-value');
		var k1cell = document.getElementById('edit-field-k1-und-0-value');
        var k1dcell = document.getElementById('edit-field-k1d-und-0-value');
		var k2cell = document.getElementById('edit-field-k2-und-0-value');
        var k2dcell = document.getElementById('edit-field-k2d-und-0-value');
		var k3cell = document.getElementById('edit-field-k3-und-0-value');
        var k3dcell = document.getElementById('edit-field-k3d-und-0-value');
		var k4cell = document.getElementById('edit-field-k4-und-0-value');
        var k4dcell = document.getElementById('edit-field-k4d-und-0-value');
		var k5cell = document.getElementById('edit-field-k5-und-0-value');
        var k5dcell = document.getElementById('edit-field-k5d-und-0-value');
		var k6cell = document.getElementById('edit-field-k6-und-0-value');
        var k6dcell = document.getElementById('edit-field-k6d-und-0-value');
		var k7cell = document.getElementById('edit-field-k7-und-0-value');
        var k7dcell = document.getElementById('edit-field-k7d-und-0-value');
		var k8cell = document.getElementById('edit-field-k8-und-0-value');
        var k8dcell = document.getElementById('edit-field-k8d-und-0-value');
		var ktcell = document.getElementById('edit-field-kt-und-0-value');
	    var ktdcell = document.getElementById('edit-field-ktd-und-0-value');
		var seoscore = document.getElementById('edit-field-seo-score-und-0-value');
		var artvalue = document.getElementById('edit-field-valore-und-0-value');
		ttc = tt.toLowerCase();
		kpc = kp.toLowerCase();
		ksc = ks.toLowerCase();
		k1c = k1.toLowerCase();
		k2c = k2.toLowerCase();
		k3c = k3.toLowerCase();
		k4c = k4.toLowerCase();
		k5c = k5.toLowerCase();
		k6c = k6.toLowerCase();
		k7c = k7.toLowerCase();
		k8c = k8.toLowerCase();
		var ttr = ttc;
		ttr = ttr.trim();
		var kpr = kpc;
		kpr = kpr.trim();
		var ksr = ksc;
		ksr = ksr.trim();
		var k1r = k1c;
		k1r = k1r.trim();
		var k2r = k2c;
		k2r = k2r.trim();
		var k3r = k3c;
		k3r = k3r.trim();
		var k4r = k4c;
		k4r = k4r.trim();
		var k5r = k5c;
		k5r = k5r.trim();
		var k6r = k6c;
		k6r = k6r.trim();
		var k7r = k7c;
		k7r = k7r.trim();
		var k8r = k8c;
		k8r = k8r.trim();

		// CHECK Lunghezza titolo
		if (tt.length > 66) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Il titolo è troppo lungo, deve essere compreso fra 35 e 66 carattari. (-20)</p>';
			n = n + 20
		}
		if ((tt.length > 34) && (tt.length < 66)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Perfetto, il titolo è compreso fra 35 e 65 caratteri. (+20)</p>';		
			p = p + 20;
		}
		if (tt.length < 35) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Il titolo è troppo corto, deve essere compreso fra 35 e 66 caratteri. (-20)</p>';		
			n = n + 20
		}
		// Keywords epurate
		
		if (ttr != "") {
			for (var i = 0; i < stopwords.length; i++) {
				rr = stopwords[i] + " ";
				if (ttr.indexOf(stopwords[i]) > -1) {
					var pos = ttr.indexOf(stopwords[i])
					if (pos.index == 0) {
						ttr = ttr.replace(rr,'');
						pos= -1
				}
				}
				rr = " " + stopwords[i] + " ";
				ttr = ttr.replace(rr,' ');
				rr = '(\s\w{1,2}\s|\s\w{1,3}\W|\W|\d)';
				var rrexp = new RegExp(rr,"gi");
				ttr = ttr.replace(rr,' ');
				rr = '\\s+';
				rrexp = new RegExp(rr,"gi");
				ttr = ttr.replace(rr,' ');
			}
		}
		if (kpr !="") {
			for (var i = 0; i < stopwords.length; i++) {
				rr = stopwords[i] + " ";
				if (kpr.indexOf(stopwords[i]) > -1) {
					var pos = kpr.indexOf(stopwords[i])
					if (pos.index == 0) {
						kpr = kpr.replace(rr,'');
						pos = -1 
					}
				}
				rr = " " + stopwords[i] + " ";
				kpr = kpr.replace(rr,' ');
				rr = '(\s\w{1,2}\s|\s\w{1,3}\W|\W|\d)';
				var rrexp = new RegExp(rr,"gi");
				kpr = kpr.replace(rr,' ');
				rr = '\\s+';
				rrexp = new RegExp(rr,"gi");
				kpr = kpr.replace(rr,' ');
			}
		kkk++;
		}
		if (ksr !="") {
			for (var i = 0; i < stopwords.length; i++) {
				rr = stopwords[i] + " ";
				if (ksr.indexOf(stopwords[i]) > -1) {
					var pos = ksr.indexOf(stopwords[i])
					if (pos.index == 0) {
						ksr = ksr.replace(rr,'');
					}
				}
				rr = " " + stopwords[i] + " ";
				ksr = ksr.replace(rr,' ');
				rr = '(\s\w{1,2}\s|\s\w{1,3}\W|\W|\d)';
				var rrexp = new RegExp(rr,"gi");
				ksr = ksr.replace(rr,' ');
				rr = '\\s+';
				rrexp = new RegExp(rr,"gi");
				ksr = ksr.replace(rr,' ');
			}
		kkk++;
		}
		if (k1r !="") {
			for (var i = 0; i < stopwords.length; i++) {
				rr = stopwords[i] + " ";
				if (k1r.indexOf(stopwords[i]) > -1) {
					var pos = k1r.indexOf(stopwords[i])
					if (pos.index == 0) {
						k1r = k1r.replace(rr,'');
					}
				}
				rr = " " + stopwords[i] + " ";
				k1r = k1r.replace(rr,' ');
				rr = '(\s\w{1,2}\s|\s\w{1,3}\W|\W|\d)';
				var rrexp = new RegExp(rr,"gi");
				k1r = k1r.replace(rr,' ');
				rr = '\\s+';
				rrexp = new RegExp(rr,"gi");
				k1r = k1r.replace(rr,' ');
		}
		kkk++;
		}
		if (k2r !="") {
			for (var i = 0; i < stopwords.length; i++) {
				rr = stopwords[i] + " ";
				if (k2r.indexOf(stopwords[i]) > -1) {
					var pos = k2r.indexOf(stopwords[i])
					if (pos.index == 0) {
						k2r = k2r.replace(rr,'');
					}
				}
				rr = " " + stopwords[i] + " ";
				k2r = k2r.replace(rr,' ');
				rr = '(\s\w{1,2}\s|\s\w{1,3}\W|\W|\d)';
				var rrexp = new RegExp(rr,"gi");
				k2r = k2r.replace(rr,' ');
				rr = '\\s+';
				rrexp = new RegExp(rr,"gi");
				k2r = k2r.replace(rr,' ');
			}
		kkk++;
		}
		if (k3r !="") {
			for (var i = 0; i < stopwords.length; i++) {
				rr = stopwords[i] + " ";
				if (k3r.indexOf(stopwords[i]) > -1) {
					var pos = k3r.indexOf(stopwords[i])
					if (pos.index == 0) {
						k3r = k3r.replace(rr,'');
					}
				}
				rr = " " + stopwords[i] + " ";
				k3r = k3r.replace(rr,' ');
				rr = '(\s\w{1,2}\s|\s\w{1,3}\W|\W|\d)';
				var rrexp = new RegExp(rr,"gi");
				k3r = k3r.replace(rr,' ');
				rr = '\\s+';
				rrexp = new RegExp(rr,"gi");
				k3r = k3r.replace(rr,' ');
			}
		kkk++;
		}
		if (k4r !="") {
			for (var i = 0; i < stopwords.length; i++) {
				rr = stopwords[i] + " ";
				if (k4r.indexOf(stopwords[i]) > -1) {
					var pos = k4r.indexOf(stopwords[i])
					if (pos.index == 0) {
						k4r = k4r.replace(rr,'');
					}
				}
				rr = " " + stopwords[i] + " ";
				k4r = k4r.replace(rr,' ');
				rr = '(\s\w{1,2}\s|\s\w{1,3}\W|\W|\d)';
				var rrexp = new RegExp(rr,"gi");
				k4r = k4r.replace(rr,' ');
				rr = '\\s+';
				rrexp = new RegExp(rr,"gi");
				k4r = k4r.replace(rr,' ');
			}
		kkk++;
		}
		if (k5r !="") {
			for (var i = 0; i < stopwords.length; i++) {
				rr = stopwords[i] + " ";
				if (k5r.indexOf(stopwords[i]) > -1) {
					var pos = k5r.indexOf(stopwords[i])
					if (pos.index == 0) {
						k5r = k5r.replace(rr,'');
					}
				}
				rr = " " + stopwords[i] + " ";
				k5r = k5r.replace(rr,' ');
				rr = '(\s\w{1,2}\s|\s\w{1,3}\W|\W|\d)';
				var rrexp = new RegExp(rr,"gi");
				k5r = k5r.replace(rr,' ');
				rr = '\\s+';
				rrexp = new RegExp(rr,"gi");
				k5r = k5r.replace(rr,' ');
			}
		kkk++;
		}
		if (k6r !="") {
			for (var i = 0; i < stopwords.length; i++) {
				rr = stopwords[i] + " ";
				if (k6r.indexOf(stopwords[i]) > -1) {
					var pos = k6r.indexOf(stopwords[i])
					if (pos.index == 0) {
						k6r = k6r.replace(rr,'');
					}
				}
				rr = " " + stopwords[i] + " ";
				k6r = k6r.replace(rr,' ');
				rr = '(\s\w{1,2}\s|\s\w{1,3}\W|\W|\d)';
				var rrexp = new RegExp(rr,"gi");
				k6r = k6r.replace(rr,' ');
				rr = '\\s+';
				rrexp = new RegExp(rr,"gi");
				k6r = k6r.replace(rr,' ');
			}
		kkk++;
		}
		if (k7r !="") {
			for (var i = 0; i < stopwords.length; i++) {
				rr = stopwords[i] + " ";
				if (k7r.indexOf(stopwords[i]) > -1) {
					var pos = k7r.indexOf(stopwords[i])
					if (pos.index == 0) {
						k7r = k7r.replace(rr,'');
					}
				}
				rr = " " + stopwords[i] + " ";
				k7r = k7r.replace(rr,' ');
				rr = '(\s\w{1,2}\s|\s\w{1,3}\W|\W|\d)';
				var rrexp = new RegExp(rr,"gi");
				k7r = k7r.replace(rr,' ');
				rr = '\\s+';
				rrexp = new RegExp(rr,"gi");
				k7r = k7r.replace(rr,' ');
			}
		kkk++;
		}
		if (k8r !="") {
			for (var i = 0; i < stopwords.length; i++) {
				rr = stopwords[i] + " ";
				if (k8r.indexOf(stopwords[i]) > -1) {
					var pos = k8r.indexOf(stopwords[i])
					if (pos.index == 0) {
						k8r = k8r.replace(rr,'');
					}
				}
				rr = " " + stopwords[i] + " ";
				k8r = k8r.replace(rr,' ');
				rr = '(\s\w{1,2}\s|\s\w{1,3}\W|\W|\d)';
				var rrexp = new RegExp(rr,"gi");
				k8r = k8r.replace(rr,' ');
				rr = '\\s+';
				rrexp = new RegExp(rr,"gi");
				k8r = k8r.replace(rr,' ');
			}
		kkk++;
		}

		if (kkk == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Devi ipostare almeno la keyword principale ed arrichire l\'articolo una keyword secondaria/correlata ogni 300-500 parole di testo.(-40)</p>';
			n = n + 40;	
		}

	// count images
		if ((document.getElementById('edit-field-img-und-0-upload-button') == null) && (document.getElementById('edit-field-img-und-0-alt') != null)) {
			img0alt = document.getElementById('edit-field-img-und-0-alt').value;
			img0title = document.getElementById('edit-field-img-und-0-title').value;
			imgs++
		}
		if ((document.getElementById('edit-field-img-und-1-upload-button') == null) && (document.getElementById('edit-field-img-und-1-alt') != null)) {
			img1alt = document.getElementById('edit-field-img-und-1-alt').value;
			img1title = document.getElementById('edit-field-img-und-1-title').value;
			imgs++
		}
		if ((document.getElementById('edit-field-img-und-2-upload-button') == null) && (document.getElementById('edit-field-img-und-2-alt') != null)) {
			img2alt = document.getElementById('edit-field-img-und-2-alt').value;
			img2title = document.getElementById('edit-field-img-und-2-title').value;
			imgs++
		}
		if ((document.getElementById('edit-field-img-und-3-upload-button') == null) && (document.getElementById('edit-field-img-und-3-alt') != null)) {
			img3alt = document.getElementById('edit-field-img-und-3-alt').value;
			img3title = document.getElementById('edit-field-img-und-3-title').value;
			imgs++
		}
		if ((document.getElementById('edit-field-img-und-4-upload-button') == null) && (document.getElementById('edit-field-img-und-4-alt') != null)) {
			img4alt = document.getElementById('edit-field-img-und-4-alt').value;
			img4title = document.getElementById('edit-field-img-und-4-title').value;
			imgs++
		}
		if ((document.getElementById('edit-field-img-und-5-upload-button') == null) && (document.getElementById('edit-field-img-und-5-alt') != null)) {
			img5alt = document.getElementById('edit-field-img-und-5-alt').value;
			img5title = document.getElementById('edit-field-img-und-5-title').value;
			imgs++
		}
		if ((document.getElementById('edit-field-img-und-6-upload-button') == null) && (document.getElementById('edit-field-img-und-6-alt') != null)) {
			img6alt = document.getElementById('edit-field-img-und-6-alt').value;
			img6title = document.getElementById('edit-field-img-und-6-title').value;
			imgs++
		}
		if ((document.getElementById('edit-field-img-und-7-upload-button') == null) && (document.getElementById('edit-field-img-und-7-alt') != null)) {
			img7alt = document.getElementById('edit-field-img-und-7-alt').value;
			img7title = document.getElementById('edit-field-img-und-7-title').value;
			imgs++
		}
		// conta elementi grafici
		if ((document.getElementById('field_elementi_grafici_und_0_upload_button') == null) && (document.getElementById('edit-field-elementi-grafici-und-0-alt') != null)) {
			eg0alt = document.getElementById('edit-field-elementi-grafici-und-0-alt').value;
			eg0title = document.getElementById('edit-field-elementi-grafici-und-0-title').value;
			imgs++
		}
		if ((document.getElementById('field_elementi_grafici_und_1_upload_button') == null) && (document.getElementById('edit-field-elementi-grafici-und-1-alt') != null)) {
			eg1alt = document.getElementById('edit-field-elementi-grafici-und-1-alt').value;
			eg1title = document.getElementById('edit-field-elementi-grafici-und-1-title').value;
			imgs++
		}
		if ((document.getElementById('field_elementi_grafici_und_2_upload_button') == null) && (document.getElementById('edit-field-elementi-grafici-und-2-alt') != null)) {
			eg2alt = document.getElementById('edit-field-elementi-grafici-und-2-alt').value;
			eg2title = document.getElementById('edit-field-elementi-grafici-und-2-title').value;
			imgs++
		}
		if ((document.getElementById('field_elementi_grafici_und_3_upload_button') == null) && (document.getElementById('edit-field-elementi-grafici-und-3-alt') != null)) {
			eg3alt = document.getElementById('edit-field-elementi-grafici-und-3-alt').value;
			eg3title = document.getElementById('edit-field-elementi-grafici-und-3-title').value;
			imgs++
		}
		if ((document.getElementById('field_elementi_grafici_und_4_upload_button') == null) && (document.getElementById('edit-field-elementi-grafici-und-4-alt') != null)) {
			eg4alt = document.getElementById('edit-field-elementi-grafici-und-4-alt').value;
			eg4title = document.getElementById('edit-field-elementi-grafici-und-4-title').value;
			imgs++
		}
		if ((document.getElementById('field_elementi_grafici_und_5_upload_button') == null) && (document.getElementById('edit-field-elementi-grafici-und-5-alt') != null)) {
			eg5alt = document.getElementById('edit-field-elementi-grafici-und-5-alt').value;
			eg5title = document.getElementById('edit-field-elementi-grafici-und-5-title').value;
			imgs++
		}
		if ((document.getElementById('field_elementi_grafici_und_6_upload_button') == null) && (document.getElementById('field_elementi_grafici_und_6_upload_button') != null)) {
			eg6alt = document.getElementById('edit-field-elementi-grafici-und-6-alt').value;
			eg6title = document.getElementById('edit-field-elementi-grafici-und-6-title').value;
			imgs++
		}
		if ((document.getElementById('field_elementi_grafici_und_7_upload_button') == null) && (document.getElementById('field_elementi_grafici_und_7_upload_button') != null)) {
			eg7alt = document.getElementById('edit-field-elementi-grafici-und-7-alt').value;
			eg7title = document.getElementById('edit-field-elementi-grafici-und-7-title').value;
			imgs++
		}
		if ((document.getElementById('field_elementi_grafici_und_8_upload_button') == null) && (document.getElementById('field_elementi_grafici_und_8_upload_button') != null)) {
			eg8alt = document.getElementById('edit-field-elementi-grafici-und-8-alt').value;
			eg8title = document.getElementById('edit-field-elementi-grafici-und-8-title').value;
			imgs++
		}
		if ((document.getElementById('field_elementi_grafici_und_9_upload_button') == null) && (document.getElementById('field_elementi_grafici_und_9_upload_button') != null)) {
			eg9alt = document.getElementById('edit-field-elementi-grafici-und-9-alt').value;
			eg9title = document.getElementById('edit-field-elementi-grafici-und-9-title').value;
			imgs++
		}

		document.getElementById('edit-field-immagini-und-0-value').value = Math.round(imgs);
		document.getElementById('edit-field-immagini-und-0-value').disabled = true;
	
	
		// check keywords
		if (lun.value == 1000) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Un articolo di sole 1000 parole avrà bassa probabilità di indicizzarsi bene, ti consigliamo articoli da 2000 o più parole ma se è una commessa segui le linee guida. (0)</p>';
			if (kkk == 2) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza la keyword principale ed una secondaria sono adeguati. (+10)</p>';
				p = p + 10;	
			}
			if (kkk == 1) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza utilizza almento la keyword principale ed una keyword secondaria salvo diverse indicazioni nelle specifiche. (0)</p>';	
			}
			if (kkk > 3) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza ti consigliamo di utilizzare solo la keyword principale ed una keyword secondaria salvo diverse indicazioni nelle specifiche. (0)</p>';
				
			}
			if (imgs == 0) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza fornisci 2 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-20)</p>';	
			n = n + 20;	
			}
			if (imgs == 1) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire una seconda immagine compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-10)</p>';	
			n = n + 10;	
			}
			if (imgs == 2) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Il Numero di immagini che hai fornito soddisfa o supera i requisiti minimi. (+20)</p>';	
                m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Puoi fornire un numero maggiore di immagini per arricchire l\'articolo e/o fornire più scelta all\'editor o committente.</p>';	
				p = p + 20;	
			}
			if (imgs > 3) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Ottima scelta di aggiungere immagini aggiuntive. (-' + (imgs - 2) * 5 +')</p>';	
				p = p + (imgs - 2) * 5
			}
		}
		if ((lun.value > 1000) && (lun.value < 1501)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Un articolo di questa lunghezza farà fatica contro la concorrenza, ti consigliamo articoli da 2000 o più parole ma se è una commessa segui le linee guida. (0)</p>';

			if ((kkk > 2) && (kkk < 5)) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza scegliere la keyword principale, la keyword secondaria ed una o due keywords correllate è adeguato. (+10)</p>';
				p = p + 10;	
			}
			if (kkk < 3) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza utilizza almento la keyword principale, la keyword secondaria ed una o due keyword correlate salvo diverse indicazioni nelle specifiche. (0)</p>';
				
			}
			if (kkk > 5) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo dei questa lunghezza utilizza ti suggerieamo di limitarti alla la keyword principale, la keyword secondaria ed una o due keyword correlate salvo diverse indicazioni nelle specifiche. (0)</p>';
			
			}
			if (imgs == 0) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza fornisci 3 o più immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-30)</p>';	
			n = n + 30;	
			}
			if (imgs == 1) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire altre 2 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-20)</p>';	
			n = n + 20;	
			}
			if (imgs == 2) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire un\'altra immagine compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-10)</p>';	
			n = n + 10;	
			}
			if (imgs == 3) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Il numero di immagini che hai fornito soddisfa o supera i requisiti minimi. (+20)</p>';	
                m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Puoi fornire un numero maggiore di immagini per arricchire l\'articolo e/o fornire più scelta all\'editor o committente.</p>';	
			p = p + 20;	
			}
			if (imgs > 3) {
				m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Ottima scelta di aggiungere immagini aggiuntive. (-' + (imgs - 3) * 5 +')</p>';	
				p = p + (imgs - 3) * 5 + 20
			}
		}
	if (lun.value == 1750) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Ti consigliamo di scrivere un articolo di almeno 2000 parole ma se è una commessa segui le linee guida. (0)</p>';

		if ((kkk > 3) && (kkk < 6)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza scegliere la keyword principale, la keyword secondaria e due o tre keywords correlate è adeguato. (+10) </p>';
			p = p + 10;	
		}
		if (kkk < 4) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza utilizza almento la keyword principale, la keyword secondaria e due o tre keyword correlate salvo diverse indicazioni nelle specifiche. (0)</p>';
			
		}
		if (kkk > 6) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo dei questa lunghezza utilizza ti suggerieamo di limitarti alla la keyword principale, la keyword secondaria e due o tre keyword correlate salvo diverse indicazioni nelle specifiche. (0)</p>';
	
		}
		if (imgs == 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza fornisci almeno 3 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-35)</p>';	
		n = n + 35;	
		}
		if (imgs == 1) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire altre 2 o 3 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-25)</p>';	
		n = n + 25;	
		}
		if (imgs == 2) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire ancora 1 o 2 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-15)</p>';	
		n = n + 15;	
		}
		if (imgs == 3) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza hai fornito il numero minimo di immagini richieste, se ce l\'hai caricane ancora una. (-5)</p>';	
		n = n + 5;	
		}
		if (imgs == 4) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Il numero di immagini che hai fornito soddisfa o supera i requisiti minimi. (+20)</p>';	
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Puoi fornire un numero maggiore di immagini per arricchire l\'articolo e/o fornire più scelta all\'editor o committente.</p>';	
		p = p + 20;	
		}
		if (imgs > 4) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Ottima scelta di aggiungere immagini aggiuntive. (+' + (imgs - 4) * 5 + ')</p>';	
		p = p + (imgs - 4) * 5 + 20 
		}
	}
	if ((lun.value > 1751) && (lun.value < 2501)) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Una lunghezza target di almeno 2000 parole è solitamente efficace per l\'indicizzazione ma confrontati con la concorrenza. (+20)</p>';
		p = p + 20;
		if ((kkk > 4) && (kkk < 7)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza scegliere la keyword principale, la keyword secondaria e tre o quattro keyword correlate è adeguato. (+10)</p>';
			p = p + 10;	
		}
		if (kkk < 5) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza utilizza almento la keyword principale, la keyword secondaria e tre o quattro keyword correlate salvo diverse indicazioni nelle specifiche. (0)</p>';

		}
		if (kkk > 7) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo dei questa lunghezza ti suggerieamo di limitarti alla la keyword principale, la keyword secondaria e tre o quattro keyword correlate salvo diverse indicazioni nelle specifiche. (0)</p>';

		}
		if (imgs == 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza fornisci almeno 4 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-45)</p>';	
		n = n + 45;	
		}
		if (imgs == 1) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire altre 3 o 4 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-35)</p>';	
		n = n + 35;	
		}
		if (imgs == 2) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire ancora 2 o 3 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-25)</p>';	
		n = n + 25;	
		}
		if (imgs == 3) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza fornisci almeno un\'altra immagine. (-15)</p>';	
		n = n + 15;	
		}
		if (imgs == 4) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza hai fornito il numero minimo di immagini richieste, se ce l\'hai caricane ancora una per offrire scelta all\'editor. (-5)</p>';	
		n = n + 5;	
		}
		if (imgs == 5) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Il numero di immagini che hai fornito soddisfa o supera i requisiti minimi. (+20)</p>';	
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Puoi fornire un numero maggiore di immagini per arricchire l\'articolo e/o fornire più scelta all\'editor o committente.</p>';	
		p = p + 20;	
		}
		if (imgs > 5) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Ottima scelta di aggiungere immagini aggiuntive. (+' + (imgs - 5) * 5 + ')</p>';	
		p = p + (imgs - 5) * 5 + 20 
		}
	}
	if ((lun.value > 2749) && (lun.value < 3251)) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Questa è già una lunghezza target importante ed è una cosa positiva, ma assicurati di non ripeterti o diluire inutilmente l\'articolo. (+40)</p>';
		p = p + 40;
		if ((kkk > 5) && (kkk < 8)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza scegliere la keyword principale, la keyword secondaria e quattro o cinque keyword correlate è adeguato. (+10)</p>';
			p = p + 10;	
		}
		if (kkk < 6) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza utilizza almento la keyword principale, la keyword secondaria e quattro o cinque keyword correlate salvo diverse indicazioni nelle specifiche.(0)</p>';

		}
		if (kkk > 8) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo dei questa lunghezza utilizza ti suggerieamo di limitarti alla la keyword principale, la keyword secondaria e quattro o cinque keyword correlate salvo diverse indicazioni nelle specifiche. (0)</p>';
		}
		if (imgs == 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza fornisci 5 o 6 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-55)</p>';	
		n = n + 55;	
		}
		if (imgs == 1) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire altre 4 o 5 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-45)</p>';	
		n = n + 45;	
		}
		if (imgs == 2) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire ancora 3 o 4 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-35)</p>';	
		n = n + 35;	
		}
		if (imgs == 3) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire ancora 2 o 3 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-25)</p>';	
		n = n + 25;	
		}
		if (imgs == 4) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza fornisci almeno un\'altra immagine. (-15)</p>';	
		n = n + 15;	
		}
		if (imgs == 5) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza hai fornito il numero minimo di immagini richieste, se ce l\'hai caricane ancora una per offrire scelta all\'editor. (-5)</p>';	
		n = n + 5;	
		}
		if (imgs == 6) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Il numero di immagini che hai fornito soddisfa o supera i requisiti minimi. (+20)</p>';	
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Puoi fornire un numero maggiore di immagini per arricchire l\'articolo e/o fornire più scelta all\'editor o committente.</p>';	
		p = p + 20;	
		}
		if (imgs > 6) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Ottima scelta di aggiungere immagini aggiuntive. (+' + (imgs - 6) * 5 + ')</p>';	
		p = p + (imgs - 6) * 5 + 20
		}
	}
	if (lun.value > 3251) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per articoli lunghi o guide assicurati di non ripeterti o sbrodolare inutilmente ma aggiungere valore con ogni paragrafo. (+50)</p>';
		p = p + 50;
		if (kkk > 6) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza scegliere la keyword principale, la keyword secondaria e dalle cinque keyword correlate in sù. (+10)</p>';
			p = p + 10;	
		}
		if (kkk < 7) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza utilizza almeno la keyword principale, la keyword secondaria e dalle cinque keyword correlate in sù salvo diverse indicazioni nelle specifiche. (0)</p>';

		}
		if (imgs == 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza fornisci 7 o 8 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-75)</p>';	
		n = n + 75;	
		}
		if (imgs == 1) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire altre 6 o 7 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-65)</p>';	
		n = n + 65;	
		}
		if (imgs == 2) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire ancora 5 o 6 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-55)</p>';	
		n = n + 55;	
		}
		if (imgs == 3) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire ancora 4 o 5 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-45)</p>';	
		n = n + 45;	
		}
		if (imgs == 4) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire ancora 3 o 4 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-35)</p>';	
		n = n + 35;	
		}
		if (imgs == 5) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza dovresti fornire ancora 2 o 3 immagini compilando i campi ALT e TITLE sfruttando keywords principali, secondarie e correlate. (-25)</p>';	
		n = n + 25;	
		}
		if (imgs == 6) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza fornisci almeno un\'altra immagine. (-15)</p>';	
		n = n + 15;	
		}
		if (imgs == 7) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un testo di questa lunghezza hai fornito il numero minimo di immagini richieste, se ce l\'hai caricane ancora una per offrire scelta all\'editor. (-5)</p>';	
		n = n + 5;	
		}
		if (imgs > 7) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Il numero di immagini che hai fornito soddisfa i requisiti. (+'+ ((imgs - 7) * 5) + ')</p>';	
		p = p + (imgs - 7) * 5 + 20
		}
	}
	//k0
	if ((img0alt !=null) && (img0alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT della prima immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img0alt !=null) && (img0alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT della prima immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((img0title !=null) && (img0title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE della prima immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img0title !=null) && (img0title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE della prima immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// k1
	if ((img1alt !=null) && (img1alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT della seconda immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img1alt !=null) && (img1alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT della seconda immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((img1title !=null) && (img1title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE della seconda immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img1title !=null) && (img1title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE della seconda immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// k2
	if ((img2alt !=null) && (img2alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE della terza immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img2alt !=null) && (img2alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE della terza immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((img2title !=null) && (img2title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT della terza immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img2title !=null) && (img2title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT della terza immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	//k3
	if ((img3alt !=null) && (img3alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE della quarta immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img3alt !=null) && (img3alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE della quarta immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((img3title !=null) && (img3title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE della quarta immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img3title !=null) && (img3title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE della quarta immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// k4
	if ((img4alt !=null) && (img4alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT della quinta immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img4alt !=null) && (img4alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT della quinta immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((img4title !=null) && (img4title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE della quinta immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img4title !=null) && (img4title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE della quinta immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// k5
	if ((img5alt !=null) && (img5alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT della sesta immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img5alt !=null) && (img5alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT della sesta immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((img5title !=null) && (img5title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE della sesta immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img5title !=null) && (img5title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE della sesta immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// k6
	if ((img6alt !=null) && (img6alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT della settima immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img6alt !=null) && (img6alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT della settima immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((img6title !=null) && (img6title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE della settima immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img6title !=null) && (img6title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE della settima immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// k7
	if ((img7alt !=null) && (img7alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT della ottava immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img7alt !=null) && (img7alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT della ottava immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((img7title !=null) && (img7title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE della ottava immagine. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((img7title !=null) && (img7title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE della ottava immagine, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// elementi grafici
	if ((eg0alt !=null) && (eg0alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT del primo elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg0alt !=null) && (eg0alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT del primo elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((eg0title !=null) && (eg0title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE del primo elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg0title !=null) && (eg0title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE del primo elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	//2
	if ((eg1alt !=null) && (eg1alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT del secondo elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg1alt !=null) && (eg1alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT del secondo elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((eg1title !=null) && (eg1title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE del secondo elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg1title !=null) && (eg1title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE del secondo elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// 3
		if ((eg2alt !=null) && (eg2alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT del terzo elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg2alt !=null) && (eg2alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT del terzo elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((eg2title !=null) && (eg2title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE del terzo elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg2title !=null) && (eg2title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE del terzo elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// 4
	if ((eg3alt !=null) && (eg3alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT del quarto elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg3alt !=null) && (eg3alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT del quarto elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((eg3title !=null) && (eg3title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE del quarto elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg3title !=null) && (eg3title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE del quarto elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// 5
	if ((eg4alt !=null) && (eg4alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT del quinto elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg4alt !=null) && (eg4alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT del quinto elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((eg4title !=null) && (eg4title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE del quinto elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg4title !=null) && (eg4title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE del quinto elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// 6
	if ((eg5alt !=null) && (eg5alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT del sesto elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg5alt !=null) && (eg5alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT del sesto elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((eg5title !=null) && (eg5title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE del sesto elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg5title !=null) && (eg5title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE del sesto elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// 7
	if ((eg6alt !=null) && (eg6alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT del settimo elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg6alt !=null) && (eg6alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT del settimo elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((eg6title !=null) && (eg6title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE del settimo elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg6title !=null) && (eg6title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE del settimo elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// 8
	if ((eg7alt !=null) && (eg7alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT dell\'ottavo elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg7alt !=null) && (eg7alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT dell\'ottavo elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((eg7title !=null) && (eg7title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE dell\'ottavo elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg7title !=null) && (eg7title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE del ottavo\'elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	//9
	if ((eg8alt !=null) && (eg8alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT del nono elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg8alt !=null) && (eg8alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT del nono elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((eg8title !=null) && (eg8title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE del nono elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg8title !=null) && (eg8title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE del nono elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
    // 10
	if ((eg9alt !=null) && (eg9alt == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo ALT del decimo elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg9alt !=null) && (eg9alt != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo ALT del decimo elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	if ((eg9title !=null) && (eg9title == "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai compilato il campo TITLE del decimo elemento grafico. Distribuisci le keyword fra le varie immagini nei campi ALT e TITLE. (-5)</p>';	
        n = n + 5;
	}
	if ((eg9title !=null) && (eg9title != "")) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai compilato il campo TITLE del decimo elemento grafico, se non lo hai già fatto distribuisci tutte le keyword fra le varie immagini nei campi ALT e TITLE. (+5)</p>';	
		p = p + 5;
	}
	// Slug
	if ((slug.value != "") && (slug.value.length < 35)) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>L\'URL Slug è impostato e non è troppo lungo, ottimo. (+20)</p>';	
		p = p + 20;
	}
	if ((slug.value != "") && (slug.value.length > 34)) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>L\'URL Slug è troppo lungo, accorcialo portandolo a meno di 35 caratteri se possibile. (-5)</p>';	
		n = n + 5;
	}  
	if (slug.value == "") {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai impostasto un URL Slug, lo abbiamo precompilato controllalo. (-20)</p>';	
		slugbits = kpr.split(" ");
		n = n + 20;
		if (slugbits.length > 1) {
			for (var i = 0; i < slugbits.length; i++) {
				if (i == 0) {
					slug.value = slugbits[i];
				}
				else {
					slug.value = slug.value + "-" + slugbits[i];
				}
			}
		}
	}
		// Meta descritption
	if (meta.value == "") {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non hai impostasto una meta description, deve essere lunga fra 120 e 156 caratteri. (-50)</p>';	
		n = n + 50;
	}
	if ((meta.value != "") && (meta.value.length < 120)) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La tua meta description è meno di 120 caratteri, hai ha disposizione fino a 156 caratteri, scegli una frase riassuntiva e accattivante. (-30)</p>';	
		n = n + 30;
	}
	if ((meta.value != "") && (meta.value.length > 119) && (meta.value.length < 157)){
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Ottimo, la tua Meta description è fra 120 e 156 caratteri, assicurati che sia significativa, riassuntiva ed accattivante. (+20)</p>';	
		p = p + 20;
	}  
	if ((meta.value != "") && (meta.value.length > 156)) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La tua Meta description supera i 156 e verrà troncanta nelle sulle pagine Google, accorciala e assicurati che sia significativa, riassuntiva ed accattivante. (-20)</p>';	
		n = n + 20;
	}	
	var test2 = ttr.search(kpr);
	// CHECK Keyword in titolo
	if (test2 > -1) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Il titolo contiene la tua keyword principale. (+20)</p>';	
	    p = p + 20;
		var ttn = 1
	}
	// CHECK Keyword inizio titolo
	if ((test2 > 1) && ((ttr.length/2) - (test2 + kpr.length)) > 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La keyword principale è nella prima parte del titolo (+5)</p>';	
	    p = p + 5;
	}
	if ((test2 > 1) && ((ttr.length/2) - (test2 + kpr.length)) <= 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La keyword principale dovrebbe apparire all\'inizio del titolo. (0)</p>';	
	    n = n + 10;
	}

	if (test2 == 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La keyword principale compare all\'inizio del titolo. (+10)</p>';	
	    p = p + 20;
	}
	if (test2 == -1) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La keyword principale non compare nel titolo. Anche se il titolo ti è stato assegnato va cambiato. (-50)</p>';	
	    n = n + 50;
	}
	// Get the body as text ad as HTML for processing
	var ckbody = document.getElementById('edit-body-it-0-value');
	var process = document.getElementById('processor');
	process.innerHTML = ckbody.value;
	var atext = process.innerText;
	process.innerHTML = '';
	var ahtml = ckbody.value;
	if (ahtml.match(/<a/gi) != null) {acounter = ahtml.match(/<a/gi).length}
	if (ahtml.match(/nofollow/gi) != null) {nofollowcounter = ahtml.match(/nofollow/g).length}
	if (ahtml.match(/<p/gi) != null) {pcounter = ahtml.match(/<p/gi).length}
	if (ahtml.match(/<h1/gi) != null) {h1counter = ahtml.match(/<h1/gi).length}
	if (ahtml.match(/<h2/gi) != null) {h2counter = ahtml.match(/<h2/gi).length}
	if (ahtml.match(/<h3/gi) != null) {h3counter = ahtml.match(/<h3/gi).length}
	if (ahtml.match(/<h4/gi) != null) {h4counter = ahtml.match(/<h4/gi).length}
	if (ahtml.match(/<h5/gi) != null) {h5counter = ahtml.match(/<h5/gi).length}
	if (ahtml.match(/<h6/gi) != null) {h6counter = ahtml.match(/<h6/gi).length}
	if (ahtml.match(/<table/gi) != null) {tablecounter = ahtml.match(/<table/gi).length}
	if (ahtml.match(/<iframe/gi) != null) {videocounter = ahtml.match(/<iframe/gi).length}
	if (ahtml.match(/<li/gi) != null) {listcounter = ahtml.match(/<li/gi).length}
	if (ahtml.match(/<img/gi) != null) {inlineimg = ahtml.match(/<img/gi).length}
	if (ahtml.match(/\n+/gi) != null) {frcounter = ahtml.match(/\n+/gi).length}
	var subcounter = h2counter + h3counter + h4counter + h5counter + h6counter
	// CHECK Sottotitoli
	if (subcounter == 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non compaiono sottitoli (H2, H3, etc) nel testo. Ogni sezione non deve superare le 300 parole. (-50)</p>';	
	    n = n + 50;
		subcounter++;
    } 
	if (h2counter == 1) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Compare un solo sottotitolo H2 nel testo, usane almeno uno ogni 1000 parole. (-10)</p>';	
	    n = n + 10;
    }	
	var h1c = document.getElementById('edit-field-h1-und-0-value');
	var h2c = document.getElementById('edit-field-h2-und-0-value');
	var h3c = document.getElementById('edit-field-h3-und-0-value');
	var h4c = document.getElementById('edit-field-h4-und-0-value');
	var h5c = document.getElementById('edit-field-h5-und-0-value');
	var h6c = document.getElementById('edit-field-h6-und-0-value');
	var frc = document.getElementById('edit-field-frasi-und-0-value');
	var pac = document.getElementById('edit-field-paragrafi-und-0-value');
	var sec = document.getElementById('edit-field-sezioni-und-0-value');
	var lic = document.getElementById('edit-field-links-und-0-value');
	var noc = document.getElementById('edit-field-nofollow-links-und-0-value');
	h1c.value = h1counter + 1;
		if (h1counter > 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non devono comparire titoli H1 nel testo, il tag H1 è riservato al titolo. (-50)</p>';	
	    n = n + 50;
		}
	h2c.value = h2counter;
	h3c.value = h3counter;
	h4c.value = h4counter;
	h5c.value = h5counter;
	h6c.value = h6counter;
	pac.value = pcounter;
	sec.value = subcounter;
	frc.value = frcounter;
	lic.value = acounter;
	noc.value = nofollowcounter
	var linksmissing = - Math.round((((acounter - nofollowcounter) * 1000) - lun.value)/1000) 
	if (acounter == 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non compaiono link esterni nel testo, inseriscine almeno uno ogni 1000 parole. (-20)</p>';	
	    n = n + 20;
    }
	if (nofollowcounter > 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai usato link Nofollow, nel corpo dell\'articolo fallo solo se hai ragioni specifiche. (-5)</p>';	
		m = m + '(-) \r\n';
		n = n + 5;
    }
	if ((acounter == nofollowcounter) && (acounter > 0)){
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Tutti i tuoi link esterni sono "Nofollow", aggiungi dei link normali, anche in aggiunta agli altri link. (-20)</p>';	
	    n = n + 20;
    }
	if (linksmissing > 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Ti suggeriamo di aggiungere almeno ' + linksmissing + ' link esterno/i al testo. (-' + linksmissing * 10 + ')</p>';	
		n = linksmissing * 10;
	
	}
	if (inlineimg > 0) {
		m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai inserito ' + inlineimg + ' una o più immagini o elementi grafici in linea col testo, tuttavia questi devono essere allegate al fondo. (-'  + inlineimg * 10 + ')</p>';	
		n = n + (inlineimg * 10)
	
	}
	
	// # Document Structure
	    var nowdoctructure = document.createElement("div");
		divmessaggi = document.getElementById('field-messaggi-add-more-wrapper')
		nowdoctructure.setAttribute('id','nowdoctructure')
		divmessaggi.appendChild(nowdoctructure);
		var tempdiv =  document.createElement('div')
		var sentencemedia = 0
		var snippets = []
		var h2headings = []
		var firstp = ""
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
					tempdiv.innerHTML = snippet;
					var justwords = tempdiv.innerText;
					paragraph = justwords;
					if ((firstp == "") && (justwords.length > 1)) {
						firstp = justwords; 
					}
					if (justwords.match(/\S+/g)) {
						var justlength = justwords.match(/\S+/g).length;
						if (justwords.match(/(\.|\.\.\.|\?\s|\!\s|\:\s)/gi) != null) {
						var justsentences = justwords.match(/(\.|\.\.\.|\?\s|\!\s|\:\s)/gi).length
						// start addition
						var justsentences2 = justwords.match(/(\.{1,3}|\?\s|\!\s|\:\s)/gi)
						var startp2 = 0
						var templ = 0 
						var f2 = 0
						var fc2 = 0
						var fok2 = 0
						var endpos2 = 0
						var startp2 = 0
						for (var g = 0; g < justsentences2.length; g++) {
							var endpos2 = justwords.indexOf(justsentences2[g], startp2)
							var justlength2 = endpos2 - startp2
							justsentences2[g] = justwords.substr(startp2,justlength2)
							if (justsentences2[g].match(/\S+/g) != null) {
								var thesewords = justsentences2[g].match(/\S+/g).length
								justsentences2[g] = thesewords;
								templ += justsentences2[g]
								if (justsentences2[g] > 25) {
									f2++
								}
								if (justsentences2[g] < 10) {
									fc2++
								}
								if ((justsentences2[g] > 9) && (justsentences2[g] < 26)){
									fok2++
								}
								startp2 = endpos2 + 1
							}
							else {
								startp2 = endpos2 + 1
							}
						}	
						// end addition
						sentencemedia = Math.round(templ / justsentences)
						snippet = '<div class="paragrafo"><p>Paragrafo: ' + templ + ' Parole. ' + justsentences + ' Frase/i. Lunghezza media ' + sentencemedia + ' parole. '
						if (templ > 150) {
							snippet = snippet + '<img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />Il paragrafo supera le 150 parole. Accorcialo o dividilo in due o più paragrafi. (-' + (Math.round(templ/150) * 5) + ')';
							n = n + Math.round(templ/150) * 5;
						}
						if (f2 == 1) {
							snippet = snippet + '<img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />Una Frase lunga. (-5)';
							n = n + 5;
						}
						if (f2 > 1) {
							snippet = snippet + '<img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />' + f2 + ' Frasi Lunghe. (-' + (f2 * 5) + ')';
							n = n + (f2 * 5);
						}
						if (fc2 == 1) {
							snippet = snippet + '<img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />Una frase corta. (-1)'
							n = n + 1;
						}
						if (fc2 > 1) {
							snippet = snippet + '<img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />' + fc2 + ' Frasi troppo corte. (-' + fc2 + ')';
							n = n + fc2;
						}
						if (fok2 > 0) {
							snippet = snippet + '<img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />' + fok2 + ' Frasi nel range. (+' + fok2 + ')';
							p = p + (fok2);
						}
						snippet = snippet + '</p></div>';
						}
						else {
						
						snippet = '<div class="paragrafo"><p>Paragrafo: ' + justlength + ' Parole. 1 Frase. Lunghezza ' + justlength + ' parole. '
						if (justlength > 150) {
							snippet = snippet + '<img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />Il paragrafo supera le 150 parole. Accorcialo o dividilo in due o più paragrafi. (-' + (Math.round(justlength/150) * 5) + ')';
							n = n + Math.round(justlength/150) * 5;
						}
						snippet = snippet + '</p></div>';
						}
						snippets[snippetcounter] = [startp,endp,snippet,justlength,k,paragraph];
						snippetcounter++;
					}	
					strpos = endp;
				}
				else if ((k > 0) && (k<7)){
					tempdiv.innerHTML = snippet;
					var justwords = tempdiv.innerText;
					if (k == 2) {h2headings[z] = justwords; z++;}
					if (justwords.match(/\S+/gi)) {
						var justlength = justwords.match(/\S+/gi).length;
					}
				strpos = endp;
				snippets[snippetcounter] = [startp,endp,snippet,justlength,k];
				snippetcounter++;
				}
				else if ((k > 6) && (k<9)){
					tempdiv.innerHTML = snippet;
					var justwords = tempdiv.innerText;
					if (k == 2) {h2headings[z] = justwords; z++;}
					if (justwords.match(/\S+/gi)) {
						var justlength = justwords.match(/\S+/gi).length;
					}
					snippet = '<h3>Lista: ' + justlength + ' Parole.</h3>'

				strpos = endp;
				snippets[snippetcounter] = [startp,endp,snippet,justlength,k,justwords];
				snippetcounter++;
				}
				else if (k == 9){
				tempdiv.innerHTML = snippet;
				var justwords = tempdiv.innerText;
				if (k == 2) {h2headings[z] = justwords; z++;}
				if (justwords.match(/\S+/gi)) {
				var justlength = justwords.match(/\S+/gi).length;
				}
				snippet = '<h3>Tabella: ' + justlength + ' Parole. </h3>'

				strpos = endp;
				snippets[snippetcounter] = [startp,endp,snippet,justlength,k,justwords];
				snippetcounter++;
				}
			}
		}
			
			
       snippets = snippets.sort(function(a,b) {
			return a[0] - b[0];
		});
        var docstructure = "";
		var section = 0;
		var totalwords = 0;
		var totalparagraphs = 0;
		var kpnsnippet = "";
		var ksnsnippet = "";
		var k1nsnippet = "";
		var k2nsnippet = "";
		var k3nsnippet = "";
		var k4nsnippet = "";
		var k5nsnippet = ""; 
		var k6nsnippet = "";
		var k7nsnippet = "";
		var k8nsnippet = "";
		var kpnstr = 0;
		var ksnstr = 0;
		var k1nstr = 0;
		var k2nstr = 0;
		var k3nstr = 0;
		var k4nstr = 0;
		var k5nstr = 0;
		var k6nstr = 0;
		var k7nstr = 0;
		var k8nstr = 0;
		var kpnsnippet2 = "";
		var ksnsnippet2 = "";
		var k1nsnippet2 = "";
		var k2nsnippet2 = "";
		var k3nsnippet2 = "";
		var k4nsnippet2 = "";
		var k5nsnippet2 = ""; 
		var k6nsnippet2 = "";
		var k7nsnippet2 = "";
		var k8nsnippet2 = "";
		var kpnstr2 = 0;
		var ksnstr2 = 0;
		var k1nstr2 = 0;
		var k2nstr2 = 0;
		var k3nstr2 = 0;
		var k4nstr2 = 0;
		var k5nstr2 = 0;
		var k6nstr2 = 0;
		var k7nstr2 = 0;
		var k8nstr2 = 0;
		var keysnippet2 = "";
		var parkeycount2 = 0
		var keysnippet = "";
		var parkeycount = 0
		var matches1a = [];
		var matches2a = [];
		var matches3a = [];
		var matches4a = [];
		var matches5a = [];
		var matches6a = [];
		var matches7a = [];
		var matches8a = [];
		var matches9a = [];
		var matches10a = [];
		var justwordsx = "";
		var justwords2 = "";
		var matches1 = [];
		var matches2 = [];
		var matches3 = [];
		var matches4 = [];
		var matches5 = [];
		var matches6 = [];
		var matches7 = [];
		var matches8 = [];
		var matches9 = [];
		var matches10 = [];

		for (var w = 0; w < snippets.length; w++) {
			justwordsx = "";
		    justwords2 = "";
			keysnippet = "";
			keysnippet2 = "";
			kpnsnippet = "";
			ksnsnippet = "";
			k1nsnippet = "";
			k2nsnippet = "";
			k3nsnippet = "";
			k4nsnippet = "";
			k5nsnippet = ""; 
			k6nsnippet = "";
			k7nsnippet = "";
			k8nsnippet = "";
			kpnstr = 0;
			ksnstr = 0;
			k1nstr = 0;
			k2nstr = 0;
			k3nstr = 0;
			k4nstr = 0;
			k5nstr = 0;
			k6nstr = 0;
			k7nstr = 0;
			k8nstr = 0;
			kpnsnippet2 = "";
			ksnsnippet2 = "";
			k1nsnippet2 = "";
			k2nsnippet2 = "";
			k3nsnippet2 = "";
			k4nsnippet2 = "";
			k5nsnippet2 = ""; 
			k6nsnippet2 = "";
			k7nsnippet2 = "";
			k8nsnippet2 = "";
			kpnstr2 = 0;
			ksnstr2 = 0;
			k1nstr2 = 0;
			k2nstr2 = 0;
			k3nstr2 = 0;
			k4nstr2 = 0;
			k5nstr2 = 0;
			k6nstr2 = 0;
			k7nstr2 = 0;
			k8nstr2 = 0;
			parkeycount2 = 0
			keysnippet = "";
			parkeycount = 0
			matches1a = [];
			matches2a = [];
			matches3a = [];
			matches4a = [];
			matches5a = [];
			matches6a = [];
			matches7a = [];
			matches8a = [];
			matches9a = [];
			matches10a = [];
			matches1 = [];
			matches2 = [];
			matches3 = [];
			matches4 = [];
			matches5 = [];
			matches6 = [];
			matches7 = [];
			matches8 = [];
			matches9 = [];
			matches10 = [];
			var linevar = snippets[w];
	
			if ((linevar[4] == 0) || (linevar[4] > 6)) {
			section += linevar[3]
				totalparagraphs++;

						// inizio esperimento
						justwordsx = linevar[5]
						if (kpr != "") {
							var thisfuzzyarray = kpr.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}"	+ thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwordsx.match(thisfuzzyregex) != null) {
								var matches1a = justwordsx.match(thisfuzzyregex);	
								kpnstr = matches1a.length;
								kpnsnippet = kp + '(' + kpnstr + ') '
							}	
							if ((ttc.match(thisfuzzyregex) != null) && fttp == 0) {
								var matchtt = ttc.match(thisfuzzyregex);	
								ttp = matchtt.length;
								fttp = 1
							}
                        }

						if (ksr != "") {
							var thisfuzzyarray = ksr.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwordsx.match(thisfuzzyregex) != null) {
								var matches2a = justwordsx.match(thisfuzzyregex);	
								ksnstr = matches2a.length;
								ksnsnippet = ks + '(' + ksnstr + ') '
							}	
							if ((ttc.match(thisfuzzyregex) != null) && ftts == 0) {
								var matchtt = ttc.match(thisfuzzyregex);	
								tts = matchtt.length;
								ftts = 1
							}
                        }

						if (k1r != "") {
							var thisfuzzyarray = k1r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwordsx.match(thisfuzzyregex) != null) {
								var matches3a = justwordsx.match(thisfuzzyregex);	
								k1nstr = matches3a.length;
								k1nsnippet = k1 + '(' + k1nstr + ') '
							}	
							if ((ttc.match(thisfuzzyregex) != null) && ftt1 == 0) {
								var matchtt = ttc.match(thisfuzzyregex);	
								tt1 = matchtt.length;
								ftt1 = 1
							}
                        }

						if (k2r != "") {
							var thisfuzzyarray = k2r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwordsx.match(thisfuzzyregex) != null) {
								var matches4a = justwordsx.match(thisfuzzyregex);	
								k2nstr = matches4a.length;
								k2nsnippet = k2 + '(' + k2nstr + ') '
							}	
							if ((ttc.match(thisfuzzyregex) != null) && ftt2 == 0) {
								var matchtt = ttc.match(thisfuzzyregex);	
								tt2 = matchtt.length;
								ftt2 = 1
							}
                        }

						if (k3r != "") {
							var thisfuzzyarray = k3r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwordsx.match(thisfuzzyregex) != null) {
								var matches5a = justwordsx.match(thisfuzzyregex);	
								k3nstr = matches5a.length;
								k3nsnippet = k3 + '(' + k3nstr + ') '
							}	
							if ((ttc.match(thisfuzzyregex) != null) && ftt3 == 0) {
								var matchtt = ttc.match(thisfuzzyregex);	
								tt3 = matchtt.length;
								ftt3 = 1
							}
                        }

						if (k4r != "") {
							var thisfuzzyarray = k4r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwordsx.match(thisfuzzyregex) != null) {
								var matches6a = justwordsx.match(thisfuzzyregex);	
								k4nstr = matches6a.length;
								k4nsnippet = k4 + '(' + k4nstr + ') '
							}	
							if ((ttc.match(thisfuzzyregex) != null) && ftt4 == 0) {
								var matchtt = ttc.match(thisfuzzyregex);	
								tt4 = matchtt.length;
								ftt4 = 1
							}
                        }

						if (k5r != "") {
							var thisfuzzyarray = k5r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwordsx.match(thisfuzzyregex) != null) {
								var matches7a = justwordsx.match(thisfuzzyregex);	
								k5nstr = matches7a.length;
								k5nsnippet = k5 + '(' + k5nstr + ') '
							}	
							if ((ttc.match(thisfuzzyregex) != null) && ftt5 == 0) {
								var matchtt = ttc.match(thisfuzzyregex);	
								tt5 = matchtt.length;
								ftt5 = 1
							}
                        }

						if (k6r != "") {
							var thisfuzzyarray = k6r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwordsx.match(thisfuzzyregex) != null) {
								var matches8a = justwordsx.match(thisfuzzyregex);	
								k6nstr = matches8a.length;
								k6nsnippet = k6 + '(' + k6nstr + ') '
							}	
							if ((ttc.match(thisfuzzyregex) != null) && ftt6 == 0) {
								var matchtt = ttc.match(thisfuzzyregex);	
								tt6 = matchtt.length;
								ftt6 = 1
							}
                        }

						if (k7r != "") {
							var thisfuzzyarray = k7r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwordsx.match(thisfuzzyregex) != null) {
								var matches9a = justwordsx.match(thisfuzzyregex);	
								k7nstr = matches9a.length;
								k7nsnippet = k7 + '(' + k7nstr + ') '
							}	
							if ((ttc.match(thisfuzzyregex) != null) && ftt7 == 0) {
								var matchtt = ttc.match(thisfuzzyregex);	
								tt7 = matchtt.length;
								ftt7 = 1
							}
                        }

						if (k8r != "") {
							var thisfuzzyarray = k8r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwordsx.match(thisfuzzyregex) != null) {
								var matches10a = justwordsx.match(thisfuzzyregex);	
								k8nstr = matches10a.length;
								k8nsnippet = k8 + '(' + k8nstr + ') '
							}	
							if ((ttc.match(thisfuzzyregex) != null)  && ftt8 == 0) {
								var matchtt = ttc.match(thisfuzzyregex);	
								tt8 = matchtt.length;
								ftt8 = 1
							}
                        }

			
						
					// fine esperimento
							if (kpnsnippet !== "") {
								keysnippet = kpnsnippet
								parkeycount += kpnstr
							}
							if (ksnsnippet !== "") {
								keysnippet += ksnsnippet
								parkeycount += ksnstr
							}
							if (k1nsnippet !== "") {
								keysnippet += k1nsnippet
								parkeycount += k1nstr
							}
							if (k2nsnippet !== "") {
								keysnippet += k2nsnippet
								parkeycount += k2nstr
							}
							if (k3nsnippet !== "") {
								keysnippet += k3nsnippet
								parkeycount += k3nstr
							}
							if (k4nsnippet !== "") {
								keysnippet += k4nsnippet
								parkeycount += k4nstr
							}
							if (k5nsnippet !== "") {
								keysnippet += k5nsnippet
								parkeycount += k5nstr
							}
							if (k6nsnippet !== "") {
								keysnippet += k6nsnippet
								parkeycount += k6nstr
							}
							if (k7nsnippet !== "") {
								keysnippet += k7nsnippet
								parkeycount += k7nstr
							}
							if (k8nsnippet !== "") {
								keysnippet += k8nsnippet
								parkeycount += k8nstr
							}
							if (keysnippet != "") {
								keysnippet = '<div class="keywords"><p>Kewords: ' + keysnippet + '</p></div>'
								parkeycount = kpnstr + ksnstr + k1nstr + k2nstr + k3nstr + k4nstr + k5nstr + k6nstr + k7nstr + k8nstr
							}
							var expectedkeys = Math.round(linevar[3]/50)
							if (expectedkeys == 0) {
									expectedkeys++;
							}
							if (parkeycount > (expectedkeys + 1)) {
								keysnippet = keysnippet + '<div class="commentx"><p><img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />Attenzione a non esagerare con le keyword per paragrafo. (-1)</p></div>'
								n = n + 1;
							}
							else if ((parkeycount < (expectedkeys - 2)) && (parkeycount > 0)) {
								keysnippet = keysnippet + '<div class="commentx"><p><img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />Forse puoi aggiungere qualche keyword qui. (0)</p></div>'
							
							}
							else {
								if (parkeycount > 0){
									keysnippet = keysnippet + '<div class="commentx"><p><img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />Numero keywords nella norma. (+' + parkeycount + ')</p></div>'
									p = p + parkeycount;
								}
								if (parkeycount == 0){
									keysnippet = keysnippet + '<div class="commentx"><p><img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />Non compare alcuna keyword in questo paragrafo. (0)</p></div>'
								}
							}

				}
			else {
				if (w > 0) {
					
				docstructure += '<p class="section">Totale Sezione: ' + section + ' parole. ';
                if (section > 300) {
						docstructure += '<img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />La sezione supera le 300 parole. Spezza la sezione con un sottotitolo. (-' + ((Math.round(section/300)) * 20) + ')';
						pg++;
						n = n + Math.round(section/300) * 20;
				}
				snippet = snippet + '</p>';
				section = 0;
				}
				// inizio esperimento
				        var newdiv =  document.createElement('div')
						newdiv.innerHTML = linevar[2];
					    justwords2 = newdiv.innerText;
						if (kpr != "") {
							var thisfuzzyarray = kpr.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwords2.match(thisfuzzyregex) != null) {
								var matches1 = justwords2.match(thisfuzzyregex);	
								kpnstr2 = matches1.length;
								kpnsnippet2 = kp + '(' + kpnstr2 + ') '
							}	
                        }

						if (ksr != "") {
							var thisfuzzyarray = ksr.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwords2.match(thisfuzzyregex) != null) {
								var matches2 = justwords2.match(thisfuzzyregex);	
								ksnstr2 = matches2.length;
								ksnsnippet2 = ks + '(' + ksnstr2 + ') '
							}	
                        }

						if (k1r != "") {
							var thisfuzzyarray = k1r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwords2.match(thisfuzzyregex) != null) {
								var matches3 = justwords2.match(thisfuzzyregex);	
								k1nstr2 = matches3.length;
								k1nsnippet2 = k1 + '(' + k1nstr2 + ') '
							}	
                        }

						if (k2r != "") {
							var thisfuzzyarray = k2r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwords2.match(thisfuzzyregex) != null) {
								var matches4 = justwords2.match(thisfuzzyregex);	
								k2nstr2 = matches4.length;
								k2nsnippet2 = k2 + '(' + k2nstr2 + ') '
							}	
                        }

						if (k3r != "") {
							var thisfuzzyarray = k3r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwords.match(thisfuzzyregex) != null) {
								var matches5 = justwords.match(thisfuzzyregex);	
								k3nstr2 = matches5.length;
								k3nsnippet2 = k3 + '(' + k3nstr2 + ') '
							}	
                        }

						if (k4r != "") {
							var thisfuzzyarray = k4r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwords2.match(thisfuzzyregex) != null) {
								var matches6 = justwords2.match(thisfuzzyregex);	
								k4nstr2 = matches6.length;
								k4nsnippet2 = k4 + '(' + k4nstr2 + ') '
							}	
                        }

						if (k5r != "") {
							var thisfuzzyarray = k5r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwords2.match(thisfuzzyregex) != null) {
								var matches7 = justwords2.match(thisfuzzyregex);	
								k5nstr2 = matches7.length;
								k5nsnippet2 = k5 + '(' + k5nstr2 + ') '
							}	
                        }

						if (k6r != "") {
							var thisfuzzyarray = k6r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwords2.match(thisfuzzyregex) != null) {
								var matches8 = justwords2.match(thisfuzzyregex);	
								k6nstr2 = matches8.length;
								k6nsnippet2 = k6 + '(' + k6nstr2 + ') '
							}	
                        }

						if (k7r != "") {
							var thisfuzzyarray = k7r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwords2.match(thisfuzzyregex) != null) {
								var matches9 = justwords2.match(thisfuzzyregex);	
								k7nstr2 = matches9.length;
								k7nsnippet2 = k7 + '(' + k7nstr2 + ') '
							}	
                        }

						if (k8r != "") {
							var thisfuzzyarray = k8r.split(" ");
							var thisfuzzyexpression = ""
							for (var k = 0; k < thisfuzzyarray.length; k++) {
								if ((k == 0) && (thisfuzzyarray.length == 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
								}
								else if ((k == 0) && (thisfuzzyarray.length > 1))  {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
								}
								else if (k < (thisfuzzyarray.length - 1)) {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
								}
								else {
									var thisword = thisfuzzyarray[k];
									var thislength = thisword.length - 1
									thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
								}
							}
							var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
							if (justwords2.match(thisfuzzyregex) != null) {
								var matches10 = justwords2.match(thisfuzzyregex);	
								k8nstr2 = matches10.length;
								k8nsnippet2 = k8 + '(' + k8nstr2 + ') '
							}	
                        }

			
						
					// fine esperimento

							if (kpnsnippet2 !== "") {
								keysnippet2 = kpnsnippet2
								parkeycount2 += kpnstr2
							}
							if (ksnsnippet2 !== "") {
								keysnippet2 += ksnsnippet2
								parkeycount2 += ksnstr2
							}
							if (k1nsnippet2 !== "") {
								keysnippet2 += k1nsnippet2
								parkeycount2 += k1nstr2
							}
							if (k2nsnippet2 !== "") {
								keysnippet2 += k2nsnippet2
								parkeycount2 += k2nstr2
							}
							if (k3nsnippet2 !== "") {
								keysnippet2 += k3nsnippet2
								parkeycount2 += k3nstr2
							}
							if (k4nsnippet2 !== "") {
								keysnippet2 += k4nsnippet2
								parkeycount2 += k4nstr2
							}
							if (k5nsnippet2 !== "") {
								keysnippet2 += k5nsnippet2
								parkeycount2 += k5nstr2
							}
							if (k6nsnippet2 !== "") {
								keysnippet2 += k6nsnippet2
								parkeycount2 += k6nstr2
							}
							if (k7nsnippet2 !== "") {
								keysnippet2 += k7nsnippet2
								parkeycount2 += k7nstr2
							}
							if (k8nsnippet2 !== "") {
								keysnippet2 += k8nsnippet2
								parkeycount2 += k8nstr2
							}
							if (keysnippet2 != "") {
								keysnippet2 = '<div class="keywords"><p>Kewords: ' + keysnippet2 + '</p></div>'
								parkeycount2 = kpnstr2 + ksnstr2 + k1nstr2 + k2nstr2 + k3nstr2 + k4nstr2 + k5nstr2 + k6nstr2 + k7nstr2 + k8nstr2
							}
							var expectedkeys = Math.round(linevar[3]/50)
							if (expectedkeys == 0) {
								expectedkeys++;
							}
							if (parkeycount2 > (expectedkeys + 1)) {
									keysnippet = keysnippet + '<div class="commentx"><p><img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />Attenzione a non esagerare con le keyword per paragrafo. (-1)</p></div>'
									n = n + 1;
							}
							if ((parkeycount2 < (expectedkeys - 2)) && (parkeycount > 0)) {
									keysnippet2 = keysnippet2 + '<div class="commentx"><p><img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />Forse puoi aggiungere qualche keyword qui. (0)</p></div>'
							
							}
							else if ((parkeycount2 > 0) && (parkeycount2 >= (expectedkeys - 2))){
										keysnippet2 = keysnippet2 + '<div class="commentx"><p><img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />Numero keywords nella norma. (+' + parkeycount2 + ')</p></div>'
										p = p + parkeycount2;
							}
							else if (parkeycount2 == 0){
										keysnippet2 = keysnippet2 + '<div class="commentx"><p><img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />Non compare alcuna keyword in questo paragrafo. (0)</p></div>'
										
							}
							
							
			
			}
			totalwords += linevar[3]
			docstructure += linevar[2] + keysnippet + keysnippet2;
			keysnippet = "";
			keysnippet2 = "";

		}
		docstructure += '<p class="section">Totale Sezione: ' + section + ' parole.'
		    if (section > 300) {
		     	docstructure += '<img class="icon2" src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" />La sezione supera le 300 parole. Inserisci un sottotitolo. (-' + ((Math.round(justlength/300)) * 20) + ')';
				n = n + Math.round(justlength/300) * 20;
				}
		docstructure = docstructure + '</p>';
		justlength = tt.match(/\S+/g).length;
		var finaltot = totalwords + justlength;
		docstructure += '<p class="section">Totale Articolo: ' + finaltot +' parole, di cui ' + justlength + ' nel titolo.</p>';
        nowdoctructure.innerHTML = '<h3 id="structuretitle">Struttura Articolo</h3><h1>H1: ' + tt + '</h1>' + docstructure;

        var npa = document.getElementById('edit-field-parole-und-0-value');
        npa.value = totalwords + justlength;		
		var scritto = Math.round(((totalwords + justlength) / Number(lun.value))* 100);
		if (scritto < 50) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non sei ancora arrivato a metà del tuo target di parole, coraggio. (-50)</p>';	
			n = n + 200;
		}
		if ((scritto > 49) && (scritto < 60)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai superato la metà, avanti così. (-40)</p>';	
			n = n + 100;
		}
		if ((scritto > 59) && (scritto < 75)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Sei quasi a tre quarti del tuo articolo, bene. (-30)</p>';	
			n = n + 75;
		}	
	    if ((scritto > 74) && (scritto < 85)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Ci sei quasi, ancora poche frasi per finire il lavoro, bene. (-20)</p>';	
			n = n + 50;
		}	
	    if ((scritto > 84) && (scritto < 95)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Sei in dirittura d\'arrivo, controlla che le keyword siano state usate tutte e siano ben distribuite. (-10)</p>';	
			n = n + 20;
		}	
		if ((scritto > 94) && (scritto < 97)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Bene! Rivedi le tue frasi e raggiungi il target di parole richiesto! (-5)</p>';	
			n = n + 5;
		}
		if ((scritto > 96) && (scritto < 108)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Obbiettivo raggiunto, il tuo articolo rispetta il target di parole richieste. (+20)</p>';	
		p = p + 20;
		}
		if ((scritto > 107) && (scritto < 111)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Attenzione, stai sforando il target di parole, se intendi scrivere un articolo più lungo modifica il target se sei il committente o hai il suo accordo. (+5)</p>';	
		p = p + 25;
		}
		if ((scritto > 110) && (scritto < 120)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Attenzione hai superato la lunghezza target di oltre il 10%. (0)</p>';
		p = p + 20;
		}
		if ((scritto > 119) && (scritto < 130)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Attenzione hai superato la lunghezza target di oltre il 20%. (0)</p>';
		p = p + 20;
		}
		if ((scritto > 129) && (scritto < 150)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Attenzione hai superato la lunghezza target di oltre il 30%. (0)</p>';
		p = p + 20;
		}
    	
	    
        // primary keyword
		if (kpr != "") {
		var thisfuzzyarray = kpr.split(" ");
		var thisfuzzyexpression = ""
		for (var k = 0; k < thisfuzzyarray.length; k++) {
			if ((k == 0) && (thisfuzzyarray.length == 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
			}
			else if ((k == 0) && (thisfuzzyarray.length > 1))  {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
			}
			else if (k < (thisfuzzyarray.length - 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
			}
			else {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
			}

		}
		var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
			if (atext.match(thisfuzzyregex) != null) {
				var matches = atext.match(thisfuzzyregex);	
				kpn = matches.length;
			}	
		var kpd = Math.round(((kpn + ttp)/totalwords)*10000)/100;
		kpcell.value = Math.round(kpn + ttp) ;
		var tempkpd = parseFloat(kpd).toFixed(2);
		kpdcell.value = tempkpd.replace('.', ',');
		if ((kpn + ttp) == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai specificato la keyword principale "' + kp + '" ma non compare da nessuna parte nel testo. (-50)</p>';
			n = n + 50;
			kpcell.value = 0
			kpdcell.value = "0,00"
		}	
		if (kpd < 0.75) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La tua keyword principale "' + kp + '" dovrebbe comparire con una densità consigliata indicativa fra 0,75% e 1,5%. (-30)</p>';
			n = n + 30;
		}	
		if ((kpd > 0.74) && (kpd < 1.51)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La tua keyword principale "' + kp + '" compare con una densità consigliata indicativa fra con una densità fra 0,75% e 1,5%. (+20)</p>';
			p = p + 20;
		}	
		if (kpd > 1.75) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La tua keyword principale "' + kp + '" compare troppe volte, la una densità consigliata indicativa deve essere fra 0,75% e 1,5% max. (-20)</p>';
			n = n + 20;
		}	
		}
		//Key word in first paragrafph
		if (kpr != "") {
		var thisfuzzyarray = kpr.split(" ");
		var thisfuzzyexpression = ""
		for (var k = 0; k < thisfuzzyarray.length; k++) {
			if ((k == 0) && (thisfuzzyarray.length == 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
			}
			else if ((k == 0) && (thisfuzzyarray.length > 1))  {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
			}
			else if (k < (thisfuzzyarray.length - 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
			}
			else {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
			}
		}
		var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
			if (firstp.match(thisfuzzyregex) != null) {
				var matches = firstp.match(thisfuzzyregex);	
				firstpn = matches.length;
			}	
		var firstpd = Math.round((firstpn/totalwords)*10000)/100;
		var tempfirstpd = parseFloat(kpd).toFixed(2);
		var tempfirstpd2 = tempfirstpd.replace('.', ',');
		if (firstpn == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La tua keyword principale non compare nel primo paragrafo del tuo testo. Inseriscila una volta. (-20)</p>';
			n = n + 20;
		}	
		}

		
		
		// secondary keyword
		if (ksr != "") {
		var thisfuzzyarray = ksr.split(" ");
		var thisfuzzyexpression = ""
		for (var k = 0; k < thisfuzzyarray.length; k++) {
			if ((k == 0) && (thisfuzzyarray.length == 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
			}
			else if ((k == 0) && (thisfuzzyarray.length > 1))  {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
			}
			else if (k < (thisfuzzyarray.length - 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);								
			}
			else {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
			}
		}
		var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
			if (atext.match(thisfuzzyregex) != null) {
				var matches = atext.match(thisfuzzyregex);	
				ksn = matches.length;
			}	
		var ksd = Math.round(((ksn + tts)/totalwords)*10000)/100;
		kscell.value = Math.round(ksn + tts);
		var tempksd = parseFloat(ksd).toFixed(2)
		ksdcell.value = tempksd.replace('.', ',')
		if ((ksn + tts) == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai specificato una keyword secondaria "' + ks + '" ma non compare da nessuna parte nel testo. (-20)</p>';
			n = n + 20;
			kscell.value = 0
			ksdcell.value = "0,00"
		}	
		if (ksd < 0.50) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La tua keyword secondaria "' + ks + '" dovrebbe comparire con una densità consigliata indicativa fra 0,50% e 1,00%. (-10)</p>';
			n = n + 10;
		}	
		if ((ksd > 0.49) && (kpd < 1.01)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La tua keyword secondaria "' + ks + '" compare con una densità consigliata indicativa fra 0,50% e 1,00%. (+20)</p>';
			p = p + 20;
		}	
		if (ksd > 1.15) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La tua keyword secondaria "' + ks + '" compare troppe volte, la una densità consigliata indicativa deve essere fra 0,50% e 1,00% max. (-10)</p>';
			n = n + 10;
		}	
		}
		
		if (k1r != "") {
		var thisfuzzyarray = k1r.split(" ");
		var thisfuzzyexpression = ""
		for (var k = 0; k < thisfuzzyarray.length; k++) {
			if ((k == 0) && (thisfuzzyarray.length == 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
			}
			else if ((k == 0) && (thisfuzzyarray.length > 1))  {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
			}
			else if (k < (thisfuzzyarray.length - 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
			}
			else {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
			}
		}
		var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
			if (atext.match(thisfuzzyregex) != null) {
				var matches = atext.match(thisfuzzyregex);	
				k1n = matches.length;
			}	
		var k1d = Math.round(((k1n + tt1)/totalwords)*10000)/100;
		k1cell.value = Math.round(k1n + tt1);
		var tempk1d = parseFloat(k1d).toFixed(2)
		k1dcell.value = tempk1d.replace('.', ',')
		if ((k1n + tt1) == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai specificato la keyword "' + k1 + '" ma non compare mai nel testo o nei titoli o sottotitoli. (-20)</p>';
			n = n + 20;
			k1cell.value = 0
			k1dcell.value = "0,00"
		}
		}
	
		
		if (k2r != "") {
		var thisfuzzyarray = k2r.split(" ");
		var thisfuzzyexpression = ""
		for (var k = 0; k < thisfuzzyarray.length; k++) {
			if ((k == 0) && (thisfuzzyarray.length == 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
			}
			else if ((k == 0) && (thisfuzzyarray.length > 1))  {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
			}
			else if (k < (thisfuzzyarray.length - 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
			}
			else {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
			}
		}
		var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
			if (atext.match(thisfuzzyregex) != null) {
				var matches = atext.match(thisfuzzyregex);	
				k2n = matches.length;
			}	
		var k2d = Math.round(((k2n + tt2)/totalwords)*10000)/100;
		k2cell.value = Math.round(k2n + tt2);
		var tempk2d = parseFloat(k2d).toFixed(2)
		k2dcell.value = tempk2d.replace('.', ',')
		if ((k2n + tt2) == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai specificato la keyword "' + k2 + '" ma non compare mai nel testo o nei titoli o sottotitoli. (-20)</p>';
			n = n + 20;
			k2cell.value = 0
			k2dcell.value = "0,00"
		}
		}
		
		if (k3r != "") {
		var thisfuzzyarray = k3r.split(" ");
		var thisfuzzyexpression = ""
		for (var k = 0; k < thisfuzzyarray.length; k++) {
			if ((k == 0) && (thisfuzzyarray.length == 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
			}
			else if ((k == 0) && (thisfuzzyarray.length > 1))  {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
			}
			else if (k < (thisfuzzyarray.length - 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
			}
			else {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
			}
		}
		var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
			if (atext.match(thisfuzzyregex) != null) {
				var matches = atext.match(thisfuzzyregex);	
				k3n = matches.length;
			}	
		var k3d = Math.round(((k3n + tt3)/totalwords)*10000)/100;
		k3cell.value = Math.round(k3n + tt3);
		var tempk3d = parseFloat(k3d).toFixed(2)
		k3dcell.value = tempk3d.replace('.', ',')
		if ((k3n + tt3) == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai specificato la keyword "' + k3 + '" ma non compare mai nel testo o nei titoli o sottotitoli. (-10)</p>';
			n = n + 10;
			k3cell.value = 0
			var k3d = Math.round((k3n/totalwords)*10000)/100;
			k3dcell.value = "0,00"
		}
		}
		
		if (k4r != "") {
		var thisfuzzyarray = k4r.split(" ");
		var thisfuzzyexpression = ""
		for (var k = 0; k < thisfuzzyarray.length; k++) {
			if ((k == 0) && (thisfuzzyarray.length == 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
			}
			else if ((k == 0) && (thisfuzzyarray.length > 1))  {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
			}
			else if (k < (thisfuzzyarray.length - 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
			}
			else {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
			}
		}
		var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
			if (atext.match(thisfuzzyregex) != null) {
				var matches = atext.match(thisfuzzyregex);	
				k4n = matches.length;
			}	
		var k4d = Math.round(((k4n + tt4)/totalwords)*10000)/100;
		k4cell.value = Math.round(k4n + tt4);
		var tempk4d = parseFloat(k4d).toFixed(2)
		k4dcell.value = tempk4d.replace('.', ',')
		if ((k4n + tt4) == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai specificato la keyword "' + k4 + '" ma non compare mai nel testo o nei titoli o sottotitoli. (-10)</p>';
			n = n + 10;
			k4cell.value = 0
			k4dcell.value = "0,00"
		}
		}

		if (k5r != "") {
		var thisfuzzyarray = k5r.split(" ");
		var thisfuzzyexpression = ""
		for (var k = 0; k < thisfuzzyarray.length; k++) {
			if ((k == 0) && (thisfuzzyarray.length == 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
			}
			else if ((k == 0) && (thisfuzzyarray.length > 1))  {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
			}
			else if (k < (thisfuzzyarray.length - 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
			}
			else {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
			}
		}
		var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
			if (atext.match(thisfuzzyregex) != null) {
				var matches = atext.match(thisfuzzyregex);	
				k5n = matches.length;
			}	
		var k5d = Math.round(((k5n + tt5)/totalwords)*10000)/100;
		k5cell.value = Math.round(k5n + tt5);
		var tempk5d = parseFloat(k5d).toFixed(2)
		k5dcell.value = tempk5d.replace('.', ',')
		if ((k5n + tt5) == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai specificato la keyword "' + k5 + '" ma non compare mai nel testo o nei titoli o sottotitoli. (-10)</p>';
			n = n + 10;
			k5cell.value = 0
			k5dcell.value = "0,00"
		}
		}
		if (k6r != "") {
		var thisfuzzyarray = k6r.split(" ");
		var thisfuzzyexpression = ""
		for (var k = 0; k < thisfuzzyarray.length; k++) {
			if ((k == 0) && (thisfuzzyarray.length == 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
			}
			else if ((k == 0) && (thisfuzzyarray.length > 1))  {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
			}
			else if (k < (thisfuzzyarray.length - 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
			}
			else {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
			}
		}
		var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
			if (atext.match(thisfuzzyregex) != null) {
				var matches = atext.match(thisfuzzyregex);	
				k6n = matches.length;
			}	
		var k6d = Math.round(((k6n + tt6)/totalwords)*10000)/100;
		k6cell.value = Math.round(k6n + tt6);
		var tempk6d = parseFloat(k6d).toFixed(2)
		k6dcell.value = tempk6d.replace('.', ',')
		if ((k6n + tt6) == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai specificato la keyword "' + k6 + '" ma non compare mai nel testo o nei titoli o sottotitoli. (-10)</p>';
			n = n + 10;
			k6cell.value = 0
			k6dcell.value = "0,00"
		}
		}

		if (k7r != "") {
		var thisfuzzyarray = k7r.split(" ");
		var thisfuzzyexpression = ""
		for (var k = 0; k < thisfuzzyarray.length; k++) {
			if ((k == 0) && (thisfuzzyarray.length == 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
			}
			else if ((k == 0) && (thisfuzzyarray.length > 1))  {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
			}
			else if (k < (thisfuzzyarray.length - 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
			}
			else {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
			}
		}
		var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
			if (atext.match(thisfuzzyregex) != null) {
				var matches = atext.match(thisfuzzyregex);	
				k7n = matches.length;
			}	
		var k7d = Math.round(((k7n + tt7)/totalwords)*10000)/100;
		k7cell.value = Math.round(k7n + tt7);
		var tempk7d = parseFloat(k7d).toFixed(2)
		k7dcell.value = tempk7d.replace('.', ',')
		if ((k7n + tt7) == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai specificato la keyword "' + k7 + '" ma non compare mai nel testo o nei titoli o sottotitoli. (-10)</p>';
			n = n + 10;
			k7cell.value = 0
			k7dcell.value = "0,00"
		}
		}
		
		if (k8r != "") {
		var thisfuzzyarray = k8r.split(" ");
		var thisfuzzyexpression = ""
		for (var k = 0; k < thisfuzzyarray.length; k++) {
			if ((k == 0) && (thisfuzzyarray.length == 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
			}
			else if ((k == 0) && (thisfuzzyarray.length > 1))  {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
			}
			else if (k < (thisfuzzyarray.length - 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
			}
			else {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
			}
		}
		var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
			if (atext.match(thisfuzzyregex) != null) {
				var matches = atext.match(thisfuzzyregex);	
				k8n = matches.length;
			}	
		var k8d = Math.round(((k8n + ftt8)/totalwords)*10000)/100;
		k8cell.value = Math.round(k8n + ftt8);
		var tempk8d = parseFloat(k8d).toFixed(2)
		k8dcell.value = tempk8d.replace('.', ',')
		if ((k8n + ftt8) == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Hai specificato la keyword "' + k8 + '" ma non compare mai nel testo o nei titoli o sottotitoli. (-10)</p>';
			n = n + 10;
			var k8cell = document.getElementById('edit-field-k8-und-0-value');
			k8cell.value = 0
			var k8dcell = document.getElementById('edit-field-k8d-und-0-value');
			k8dcell.value = "0,00"
		}
		}
		// keyword principale in headings
		if (kpr != "") {
		var thisfuzzyarray = kpr.split(" ");
		for (var j = 0; j < h2headings.length; j++) {
		var thisfuzzyexpression = ""
		for (var k = 0; k < thisfuzzyarray.length; k++) {
			if ((k == 0) && (thisfuzzyarray.length == 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength) + '{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)'; //start regular expression
			}
			else if ((k == 0) && (thisfuzzyarray.length > 1))  {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression = '[^\\w]' + thisword.substr(0,thislength); //start regular expression
			}
			else if (k < (thisfuzzyarray.length - 1)) {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength);	
			}
			else {
				var thisword = thisfuzzyarray[k];
				var thislength = thisword.length - 1
				thisfuzzyexpression += "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)(\\w*\\W*){1,3}" + thisword.substr(0,thislength) + "{1}([à,á,è,é,ì,í,ò,ó,ù,ú]|\\w)";	
			}
		}
		var thisfuzzyregex = new RegExp(thisfuzzyexpression,"gi"); // close regular expression
			if (h2headings[j].match(thisfuzzyregex) != null) {
				var matches = h2headings[j].match(thisfuzzyregex);	
				kh2 = matches.length;
			}	
		kh2t += kh2;
		kh2 = 0;
		}
		kh2t = (kh2t*1000)/lun.value;
		if (kh2t < 0.5) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La keyword principale dovrebbe comparire in almeno un titolo H2 ogni circa 900-1000 parole complessivamente, sia ad inizio che nella seconda metà del testo. (-20)</p>';
			n = n + 20;
		}
		if ((kh2t > 0.49) && (kh2t < 0.76)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La keyword principale dovrebbe comparire in almeno un titolo H2 ogni circa 900-1000 parole complessivamente, sia ad inizio che nella seconda metà del testo. (-10)</p>';
			n = n + 10;
		}
		if ((kh2t > 0.74) && (kh2t < 1.26)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La keyword principale compare in un numero adeguato di sottotitoli H2. (+20)</p>';
			p = p + 5;
		}
		if ((kh2t > 1.25) && (kh2t < 1.51)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non esagerare con la ripetizione della keyword principale nei sottotitoli H2, sostituiscine una con la keyword secondaria o una correlata. (-5)</p>';
			n = n + 5;
		}
		if ((kh2t > 1.5) && (kh2t < 2.51)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Stai usando la keyword principale troppe volte nei sottotitoli H2, fai delle variazioni con la keyword secondaria e le keyword correlate. (-10)</p>';
			n = n + 10;
		}
		if (kh2t > 2.5) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Stai usando la keyword principale troppe volte nei sottotitoli H2, fai delle variazioni con la keyword secondaria e le keyword correlate. (-20)</p>';
			n = n + 20;
		}
		}
		
		
		
        ktn = kpn + ksn + k1n + k2n + k3n + k4n + k5n + k6n + k7n + k8n + ttp + ftts + tt1 + tt2 + tt3+ tt4 + tt5 + tt6 + tt7 + tt8
		if (ktn == 0) {ktn=1;}
		var ktd = Math.round((ktn/totalwords)*10000)/100;
		var tempktd = parseFloat(ktd).toFixed(2)
		tempktd = tempktd.replace('.', ',')
		if (ktd < 0.5) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/NOK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La densità complessiva delle tue keyword è di ' + tempktd + '%, decisamente troppo bassa, dovrebbe aggirarsi intorno a 1-3% complessivo fra tutte le parole. (-40)</p>';
			n = n + 40;
		}
		if ((ktd > 0.49) && (ktd < 0.76)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La densità complessiva delle tue keyword è di ' + tempktd + '%, dovrebbe aggirarsi intorno a 1-3% complessivo fra tutte le parole. (-30)</p>';
			n = n + 30;
		}
		if ((ktd > 0.75) && (ktd < 1)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La densità complessiva delle tue keyword è di ' + tempktd + '%, raggiungi 1-3% complessivo fra tutte le parole. (-10)</p>';
			n = n + 10;
		}
		if ((ktd > 1) && (ktd < 1.51)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La densità complessiva delle tue keyword è di ' + tempktd + '%, adeguata, ma puoi valutare di aumentare il numero complessivo senza esagerare con la primaria. (+20)</p>';
			p = p + 20;
		}
		if ((ktd > 1.5) && (ktd < 2.51)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La densità complessiva delle tue keyword è di ' + tempktd + '%, verifica bene la loro distribuzione ma il numero è adeguato. (+40)</p>';
			p = p + 40;
		}
		if ((ktd > 2.5) && (ktd < 3.01)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La densità complessiva delle tue keyword è di ' + tempktd + '%, questo è il range massimo, accettabile se le keyword correlate sono eterogenee. (+20)</p>';
			p = p + 40;
		}
		if ((ktd > 3) && (ktd < 3.51)) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La densità complessiva delle tue keyword è di ' + tempktd + '%, non è detto che sia già penalizzante ma ti consigliamo di stare sotto il 3% complessivo. (-5)</p>';
		    n = n + 5
		}
		if (ktd > 3.51) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/E.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>La densità complessiva delle tue keyword è di ' + tempktd + '%, è eccessiva e rischia di penalizzare il tuo articolo per "keywords stuffing". (-20)</p>';
		    n = n + 20
		}
		if (listcounter == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Non compaiono liste numerate e o a punti, valuta se un riepilogo a punti degli argomenti può arricchire l\'articolo. (0)</p>';
		
		}
		if (listcounter > 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Ottimo, hai usato una o più liste, che possono rendere l\'articolo più chiaro ed aiutare con l\'indicizzazione e ranking dell\'articolo. (+20)</p>';
		    p = p + 20
		}
		if (tablecounter == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Se l\'articolo si presta, perchè non aggiungere una tabella informativa. (0)</p>';
		}
		if (tablecounter > 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Ottimo, hai aggiunto una o più tabelle, che possono aiutare nell\'indicizzazione e ranking dell\'articolo. (+20)</p>';
		    p = p + 20
		}
		if (videocounter == 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/Q.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Per un articolo veramente top, aggiungi con l\'embed un Video YouTube tuo o magari fornito dal committente. (0)</p>';
		
		}
		if (videocounter > 0) {
			m = m + '<div class="icon"><img src="https://strumenti.primeconsult.it/sites/default/files/OK.png" alt="Prime Consulting SEO" title="Prime Consulting SEO" /></div><p>Ottimo, hai aggiunto uno o più video, che possono aiutare nell\'indicizzazione e ranking dell\'articolo. (+40)</p>';
		    p = p + 40
		}
		ktcell.value = Math.round(ktn);
		var tempktd = parseFloat(ktd).toFixed(2)
		if (isNaN(tempktd)) {
			ktdcell.value = "0,00";
		}
		else {
			ktdcell.value = tempktd.replace('.', ',')
		}	
		m = m + '<br><p>Punti positivi (+): ' + p + '</p>' + '<p>Punti negativi (-): ' + n + '</p>'; 
		var seotot = p - n;
		if (seotot < 0) {
		var tempseo = 3.5 * (Math.round((p/n)*100)/100);
		tempseo = parseFloat(tempseo).toFixed(2)
		tempseo = tempseo.replace('.', ',')
		seoscore.value = tempseo
	    artvalue.value = "0,00"
		}
		if (seotot >= 0) {
		var tempseo = 3.5 + 6.5 * Math.round((seotot/390)*1000)/1000;
		tempseo = parseFloat(tempseo).toFixed(2)
		if (tempseo > 10) {
			tempseo = 10.00
		}	
		tempseo = parseFloat(tempseo).toFixed(2)
		tempseo = tempseo.replace('.', ',')
		seoscore.value = tempseo
		tempseo = 3.5 + 6.5 * Math.round((seotot/390)*1000)/1000;
		if (tempseo > 10) {
			tempseo = 10.00
		}
		var thesewords = 0
		if (finaltot > lun.value) {
			thesewords = lun.value
		}
		else {
			thesewords = finaltot
		}
		var tempvalue = (thesewords * tempseo)/800
		tempvalue = parseFloat(tempvalue).toFixed(2)
		tempvalue = tempvalue.replace('.', ',')
	    artvalue.value = tempvalue
		}
		messagelog.innerHTML = m + '<br><p>Tool Ottimizzazione SEO. © 2020 <a href="https://primeconsult.it" >Prime Consulting</a>. Tutti i diritti riservati. PrimeSEO- Tool v.4.09 - PrimeSEO-Hi v.1.40 - PrimeSEO-Util v.0.44</p><br>';
	    h1c.disabled = true;
		h2c.disabled = true;
		h3c.disabled = true;
		h4c.disabled = true;
		h5c.disabled = true;
		h6c.disabled = true;
		frc.disabled = true;
		pac.disabled = true;
		sec.disabled = true;
		lic.disabled = true;
		noc.disabled = true;
		//npa.disabled = true;
		kpcell.disabled = true;
		kpdcell.disabled = true;
		kscell.disabled = true;
		ksdcell.disabled = true;
		k1cell.disabled = true;
		k1dcell.disabled = true;
		k2cell.disabled = true;
		k2dcell.disabled = true;
		k3cell.disabled = true;
		k3dcell.disabled = true;
		k4cell.disabled = true;
		k4dcell.disabled = true;
		k5cell.disabled = true;
		k5dcell.disabled = true;
		k6cell.disabled = true;
		k6dcell.disabled = true;
		k7cell.disabled = true;
		k7dcell.disabled = true;
		k8cell.disabled = true;
		k8dcell.disabled = true;
		//ktcell.disabled = true;
		//ktdcell.disabled = true;
		//artvalue.disabled = true;
		//seoscore.disabled = true;
		document.getElementById('edit-field-categoria-und').disabled = true;
})
}
