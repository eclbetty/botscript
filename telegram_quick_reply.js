// url: https://web.telegram.org/*

(async function () {

	let chatbox = document.querySelector('body > div.page_wrap > div.im_page_wrap.clearfix > div > div.im_history_col_wrap.noselect.im_history_loaded > div.im_history_selected_wrap > div > div.im_bottom_panel_wrap > div.im_send_panel_wrap.noselect > div > div > div > form > div.im_send_field_wrap.hasselect > div.composer_rich_textarea');
	let keywordsObj = await loadFromSheet();
	let replaced = false; 
	
	async function loadFromSheet() {
		
		let keywordsObj = {};
		try {
			let result = await fetch('https://spreadsheets.google.com/feeds/cells/1n2gO3TOmn3gQsuHpMAl33_IEP0QGGNfNU0F1ZvboHls/1/public/full?alt=json');
			let json = await result.json();
			let keys = [];
			let values = [];
			json.feed.entry.forEach((e) => {
				if (e['gs$cell'].col == 1) {
					keys[e['gs$cell'].row] = e['gs$cell'].inputValue;
				} else {
					values[e['gs$cell'].row] = e['gs$cell'].inputValue;
				}
			});
			
			keys.forEach((e, index) => {
				keywordsObj[e] = values[index]; 
			})
			
			return keywordsObj;
			
		} catch (e) {
			console.log(e);
		}
	}
		
	function includeKeyword(str) {
		return document.querySelector('body > div.page_wrap > div.im_page_wrap.clearfix > div > div.im_history_col_wrap.noselect.im_history_loaded > div.im_history_selected_wrap > div > div.im_bottom_panel_wrap > div.im_send_panel_wrap.noselect > div > div > div > form > div.im_send_field_wrap.hasselect > div.composer_rich_textarea').textContent.includes(str);
	}
	
	function replaceText(str) {
		let chatbox = document.querySelector('body > div.page_wrap > div.im_page_wrap.clearfix > div > div.im_history_col_wrap.noselect.im_history_loaded > div.im_history_selected_wrap > div > div.im_bottom_panel_wrap > div.im_send_panel_wrap.noselect > div > div > div > form > div.im_send_field_wrap.hasselect > div.composer_rich_textarea');
		chatbox.textContent = str;
		replaced = true;
	}
	
	
	document.onkeyup = function(e) {
		
		if ((e.keyCode == 46) || (e.keyCode == 8) || (e.keyCode == 13)) {
			console.log('replaced is false');
			replaced = false;
		}
		
		for (const key in keywordsObj) {
			if (includeKeyword(key)) {
				console.log(keywordsObj[key]);
				if (!replaced) {
					replaceText(keywordsObj[key]); 
				}
			}
		}
	}
})();
