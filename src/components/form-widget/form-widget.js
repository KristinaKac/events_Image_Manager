export default class FormWidget {
  constructor(element, createImg) {
    if (typeof element === 'string') {
      this.element = document.querySelector(element);
    } else {
      this.element = element;
    }
    this.createImg = createImg;
    this.img = '';
    this.errorMessage = this.element.querySelector('.message-error');

    this.onClick = this.onClick.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);

    this.element.addEventListener('submit', this.onClick);
  }

  onClick(e) {
    e.preventDefault();

    const input = this.element.querySelector('.input-link');
    const url = input.value;

    this.img = document.createElement('img');
    this.img.src = url;

    this.img.addEventListener('load', this.onLoad);
    this.img.addEventListener('error', this.onError);
  }

  onLoad() {
    this.createImg(this.img);
    this.errorMessage.classList.add('hidden');
    this.element.reset();
  }

  onError() {
    this.errorMessage.classList.remove('hidden');
    this.errorMessage.innerText = 'Неверный URL изображения';
  }
}
