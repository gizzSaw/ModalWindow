const modal = $.modal({
    title: 'Saveliy',
    closable: true,
    content: `
        <h4>Modal is working</h4>
        <p>Lorem ipsum dolor sti.</p> 
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('primary btn clicked');
            modal.close();
        }},
        {text: 'Cancel', type: 'danger', handler() {
            console.log('danger btn clicked');
            modal.close();
        }},
    ]
});


modal.open();