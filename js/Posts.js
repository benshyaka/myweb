const blog_sect = document.getElementById("blog_sect")

db.collection('posts').get().then(res => {
    res.docs.forEach(doc => {
        blog_sect.innerHTML = blog_sect.innerHTML + `
        <div id="blog_index">
        <h4>` + doc.data().title + `</h4>
        <img src="` + doc.data().image + `" class="img-blog" alt="UI/UX Desing">
        <div class="blog-text">
            <span> <strong>Blog by ` + doc.data().author + ` on ` + doc.data().createdAt.toDate().toDateString() + `</strong></span><br><br>
            <span class="">` + doc.data().body + `</span>
            <a href="../pages/blog.html#${doc.id}">Read more</a>
        </div>
        </div>`
    })
})