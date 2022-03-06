const id = location.hash.slice(1);

console.log(id);

const title = document.getElementById('title');
const createdAt = document.getElementById('createdt');
const image = document.getElementById('image');
const body = document.getElementById('body');

db.collection("posts").doc(id)
    .get()
    .then(res => {
        console.log(res.data())
        title.value = res.data().title;
        image.value = res.data().image
        body.value = res.data().body;
    })