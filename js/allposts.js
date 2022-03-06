const divvv = document.getElementById('divvv')

db.collection('posts').get().then(res => {
    res.docs.forEach(doc => {

        dataObj = doc.data()
        console.log(dataObj)

        divvv.innerHTML = divvv.innerHTML + `<tr>
        <td data-label="Firstname">
            <img src="` + dataObj.image + `" width="120px" alt="">
        </td>
        <td data-label="Lastname">` + dataObj.title + `</td>
        <td data-label="Email">` + dataObj.createdAt.toDate().toDateString() + `</td>
        <td data-label="Action">
            <a  href="../dashboard/update.html#${doc.id}" class="edit">Edit</a>
        </td>
        <td>
            <button id="deleteBtn" class="delete" onclick=(btndelete("${doc.id}"))>delete</button>
        </td>
    </tr>`
    })
})

const deleteBtn = document.getElementById("deleteBtn")

deleteBtn.style.background = "blue"

function btndelete(docid) {
    console.log(docid)
    db.collection('posts').doc(docid).delete()
        .then(res => {
            alert("Post deleted");
            location.reload();
        }).catch(err => {
            alert("Error: " + err.message)
        })
}