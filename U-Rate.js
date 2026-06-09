//const means constant, it cant be changed
// this grabs the form and lists by container
console.log('JS IS WORKING');

const form = document.getElementById('add-form');
const list = document.getElementById('list');

// when the form is submitted this is what runs
form.addEventListener('submit', function(event) {
    // this prevents the page from refreshing
    event.preventDefault();

    // grabs what the user entered
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;
    const rating = document.getElementById('rating').value;

    //dont let em fill it empty
    if (!title || !url) {
        alert('ERR WRONG');
        return;
    }

    // creates card container
    const item = document.createElement('div');
    item.className = 'item';

    // create title link
    const titleLink = document.createElement('a');
    titleLink.className = 'title';
    titleLink.href = url;
    titleLink.textContent = title;
    titleLink.target = '_blank';

    //create the url display
    const urlText = document.createElement('div');
    urlText.className = 'url';
    urlText.textContent = url;

    // create the rating display
    const ratingNum = document.createElement('div');
    ratingNum.claaName = 'rating';
    ratingNum.textContent = rating ? rating + '/6' : '-';

    // create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', function() {
        item.remove();
    });

    //assemble the card: put all pieces inside them
    item.appendChild(titleLink);
    item.appendChild(urlText);
    item.appendChild(ratingNum);
    item.appendChild(deleteBtn);

    // put final card on the page
    list.appendChild(item);

    // clear the form for the next entry
    form.reset();
});

    