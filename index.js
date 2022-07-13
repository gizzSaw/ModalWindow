let fruits = [
    { id: 1, title: 'Яблоки', price: 20, img: 'images/apple.jpeg' },
    { id: 2, title: 'Апельсины', price: 30, img: 'images/orange.jpg' },
    { id: 3, title: 'Манго', price: 40, img: 'images/mango.jpg' },
];

const toHTML = fruit => `
    <div class="col">
        <div class="card">
            <img class="card-img-top" style="height: 300px" src="${fruit.img}" alt="${fruit.title}"/>
            <div class="card-body">
            <h5 class="card-title">${fruit.title}</h5>
            <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
            <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
            </div>
        </div>
    </div>
`;

function render() {
    const html = fruits.map(toHTML).join('');
    document.querySelector('#fruits').innerHTML = html;
}


// const modal = $.modal({
//     title: 'Saveliy',
//     closable: true,
//     content: `
//         <h4>Modal is working</h4>
//         <p>Lorem ipsum dolor sti.</p> 
//     `,
//     width: '400px',
//     footerButtons: [
//         {
//             text: 'Ok', type: 'primary', handler() {
//                 console.log('primary btn clicked');
//                 modal.close();
//             }
//         },
//         {
//             text: 'Cancel', type: 'danger', handler() {
//                 console.log('danger btn clicked');
//                 modal.close();
//             }
//         },
//     ]
// });

const priceModal = $.modal({
    title: 'Цена на товар',
    closable: true,
    width: '400px',
    footerButtons: [
        {
            text: 'Закрыть', type: 'primary', handler() {
                modal.close();
            }
        },
    ]
});

render();

document.addEventListener('click', event => {
    event.preventDefault();
    const btnType = event.target.dataset.btn;
    const id = +event.target.dataset.id;
    const fruit = fruits.find(f => f.id === id);

    if (btnType === 'price') {
        priceModal.setContent(`
        <p>Цена на ${fruit.title} <strong>${fruit.price}$</strong></p>
        `);
        priceModal.open();
    } else if (btnType === 'remove') {
        $.confirm({
            title: 'Вы уверены?',
            content: `<p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>`
        }).then(() => {
            fruits = fruits.filter(f => f.id !== id);
            console.log('Remove');
            render();
        }).catch(() => {
            console.log('Cancel');
        })
    }
});