import ImageList from "../components/image-list/image-list";
import FormWidget from "../components/form-widget/form-widget";

const imageList = new ImageList('.image-list');
const formWidget = new FormWidget('.form', imageList.createImg);
