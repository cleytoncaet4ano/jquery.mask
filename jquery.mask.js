	$.fn.mask = function (format) {
		return this.on('input', function () {
			let inputValue = $(this).val().replace(/\D/g, '');
			let formattedValue = '';
			let j = 0;
			
			for (let i = 0; i < format.length; i++) {
				if (format[i] === '0' && inputValue[j]) {
					formattedValue += inputValue[j];
					j++;
				} else if (format[i] !== '0') {
					formattedValue += format[i];
				}
				
				if (j >= inputValue.length) {
					break;
				}
			}
			
			$(this).val(formattedValue);
		});
	};
