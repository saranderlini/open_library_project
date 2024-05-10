function searchReset(){
    document.getElementById('header').addEventListener('click', (event) => {
        if (event.target.id === 'navBar' || event.target.id === 'searchInfo') {
            document.getElementById('header').classList.remove('headerOnSearch');
            document.getElementById('responseDiv').innerHTML = '';
            document.querySelector('div.formDiv').classList.remove('invisible');
            let category = document.getElementById('category');
            category.value = '';
            // Remove the navBar and searchInfo elements
            event.target.remove();
        }
    });
}


export default searchReset;