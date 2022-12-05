// atagories
// let catag_arr = ['shawarma', 'flafil', 'rice'];

let categories = document.querySelectorAll('#products');
let btns = document.querySelectorAll('.main_nav li');


let change_catag = (ele) => {
    let recent = document.querySelector('#products.active');
    recent.classList.add("hide");
    setTimeout(() => {
        btns.forEach((btn) => btn.classList.remove('active'));
        ele.classList.add('active');
        let categ_name = ele.getAttribute('data-catag');
        let categ_to_active = document.querySelector(`#products.${categ_name}`);
        categories.forEach((categs) => {
            categs.classList.remove('active');
            categs.classList.remove('hide');
        });
        categ_to_active.classList.add('active');
    }, 400);
}