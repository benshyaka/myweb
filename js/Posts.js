const renderPosts = (doc) => {
    const postsContainer = document.querySelector('.posts');

    const postDiv = document.createElement('div');
    postDiv.setAttribute('class', 'post');

    const postImage = document.createElement('img');
    postImage.src = doc.data().image;

    const postData = document.createElement('div');
    postData.className = 'blog-summary';

    const postTitle = document.createElement('p');
    postTitle.className = 'title';
    postTitle.textContent = doc.data().title;

    const postSummary = document.createElement('p');
    postSummary.textContent = doc.data().body.substring(0, 100);

    const readMore = document.createElement('button');
    readMore.textContent = "Read More";

    readMore.addEventListener('click', (e) => {
        e.preventDefault();
        location.href = "info.html#" + doc.id;
    })

    postData.appendChild(postTitle);
    postData.appendChild(postSummary);
    postData.appendChild(readMore);

    postDiv.appendChild(postImage);
    postDiv.appendChild(postData);

    postsContainer.appendChild(postDiv);
}

const blog_index = document.getElementById("blog_index")

db.collection('posts').get().then(res => {
    res.docs.forEach(doc => {

        blog_index.innerHTML = blog_index.innerHTML + `<img src="./images/blog1.png" class="img-blog" alt="UI/UX Desing">
        <div class="blog-text">
            <span> <strong>By SHYAKA Benjamin on 02 feb 2022</strong></span><br><br>
            <span class="">Bass is thick and highs avoid that crinkly crunch, making them ideal for appreciating sound design in movies and discovering new parts</span>
            <a href="">Read more</a>
        </div>`

    })
})