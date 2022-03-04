const id = location.hash.slice(1);

console.log(id);

const title = document.getElementById('title');
const authorDate = document.getElementById('author-date');
const image = document.getElementById('image');
const body = document.getElementById('post-body');

db.collection('posts').doc(id).get().then(res=> {
    title.innerHTML = res.data().title;
    authorDate.innerHTML = res.data().author + " --- " + res.data().createdAt
    image.src = res.data().image
    body.innerHTML = res.data().body

})