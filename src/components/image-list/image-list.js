export default class ImageList {
    constructor(element) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        this.element = element;
        this.createImg = this.createImg.bind(this);

        this.onCloseClick = this.onCloseClick.bind(this);

        this.element.addEventListener('click', this.onCloseClick);
    }
    createImg(img) {

        const li = document.createElement('li');
        li.className = 'image-item';

        const close = document.createElement('div');
        close.className = 'close';
        close.innerText = 'x'

        li.appendChild(img);
        li.appendChild(close);
        this.element.appendChild(li);
    }
    onCloseClick(e) {
        if (!e.target.classList.contains('close')) {
            return;
        }
        const item = e.target.closest('.image-item');
        this.element.removeChild(item);
    }
}