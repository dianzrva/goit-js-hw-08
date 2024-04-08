'use strict';
{
    let items = document.querySelectorAll('li.item');
    console.log(`categories: ${items.length}`);

    //   for (let item of items) {
    //     showCategoryInfo(item);
    //   }

    items.forEach(item => {
        showCategoryInfo(item);
    });

    function showCategoryInfo(category) {
        let categoryTitle = category.querySelector('h2').textContent;
        let categoryElementsCount = category.querySelectorAll('li').length;

        console.log(`category: ${categoryTitle}`);
        console.log(`elements: ${categoryElementsCount}`);
        //console.log('------------------------'); 
    }
}