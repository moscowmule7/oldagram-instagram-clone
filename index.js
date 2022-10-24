import { posts } from '/data.js'

const postContent = document.getElementById('post-content')

function getPostContent(){
    let postContentHtml = ``
    posts.forEach(function(item){
        postContentHtml += `
        <div class="user-info">
                        <img class="avatar" src="${item.avatar}">
                        <div class="user-info-texts">
                            <h1>${item.name}</h1>
                            <h2>${item.location}</h2>
                        </div>
                    </div>
                    <div class="post-image">
                        <img class="post-img" src="${item.post}" >
                    </div>
                    <div class="post-body">
                        <div class="post-body-icons">
                            <button class="btn like-btn" data></button>
                            <button class="btn comment-btn"></button>
                            <button class="btn share-btn"></button>
                        </div>
                        <h3>${item.likes} likes</h3>
                        <h4><span class="user-name">${item.username}</span> ${item.comment}</h4>
                    </div>
                    <div class="divider">
                    </div>
        `
    })
    postContent.innerHTML = postContentHtml
}

getPostContent()


