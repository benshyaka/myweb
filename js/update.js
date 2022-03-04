const updatePost = document.getElementById('updatePost');
const title = document.getElementById('title');
const body = document.getElementById('body');

const id = location.hash.slice(1);
console.log(id)
db.collection('posts').doc(id).get().then(res => {
    console.log(res.data())
    title.value = res.data().title;
    body.value = res.data().body;
})

updatePost.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('posts').doc(blogid).update({
        author: "SHYAKA Benjamin",
        body: body.value,
        updateAt: new Date(),
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
        title: title.value
    }).then(res => {
        title.value = "";
        body.value = "";
        alert("Post updated");
        location.href = "../dashboard/allblogs.html";
    }).catch(err => {
        alert("Error: " + err.message)
    })
})