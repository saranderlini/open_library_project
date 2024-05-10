function searchReset(){
    let newSearchBtn = document.getElementById('navBar');
    newSearchBtn.addEventListener('click', () => {
        document.getElementById('responseDiv').innerHTML = '';
        document.querySelector('div.formDiv').classList.remove('invisible');
        document.getElementById('header').removeChild(navBar);
        document.getElementById('header').classList.remove('headerOnSearch');
        let category = document.getElementById('category');
        category.value = '';
    })
}


export default searchReset;