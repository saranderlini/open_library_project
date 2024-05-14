function searchReset(){
    document.getElementById('header').addEventListener('click', (event) => {
        if (event.target.id === 'navBar' || event.target.id == 'lensSearch') {
            document.getElementById('header').classList.remove('headerOnSearch');
            document.getElementById('label').classList.add('d-none');
            document.getElementById('label').innerHTML = '';
            document.getElementById('responseDiv').innerHTML = '';
            document.querySelector('div.formDiv').classList.remove('d-none');
            let category = document.getElementById('category');
            category.value = '';
            // Remove the navBar and searchInfo elements
            event.target.remove();
        }

        if(document.getElementById('lensSearch') == null && document.getElementById('searchInfo')) {
            document.getElementById('navBar').remove(document.getElementById('searchInfo'));
        }
    });
}


export default searchReset;