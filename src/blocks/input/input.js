import './input.scss'


showLoadedFile()
// показываем в инпуте название выбранного файла
function showLoadedFile() {
	document.querySelectorAll('input[type="file"]').forEach((input)=> {
		input.addEventListener('change', function () {
			if (this.files[0]) {
				this.closest('.load-input').querySelector('.load-input__text').textContent = this.files[0].name
			} else {
				this.closest('.load-input').querySelector('.load-input__text').textContent = 'Загрузить изображение'
			}
		})
	})
}