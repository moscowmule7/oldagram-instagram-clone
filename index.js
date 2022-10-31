import { posts } from '/data.js'

const postContent = document.getElementById('post-content')

function getPostContent(){
    let postContentHtml = ``
    posts.forEach(function(item){

        
        let likeIconClass = ''
        if (item.isLiked) {
            likeIconClass = 'like-btn-liked'
        } else {
            likeIconClass = 'like-btn'
        }


        postContentHtml += `
                    <div class="user-info">
                        <img class="avatar" src="${item.avatar}">
                        <div class="user-info-texts">
                            <h1>${item.name}</h1>
                            <h2>${item.location}</h2>
                        </div>
                    </div>
                    <div class="post-image">
                        <img class="post-img" src="${item.post}" data-img="${item.postId}">
                    </div>
                    <div class="post-body">
                        <div class="post-body-icons">
                            <button class="btn ${likeIconClass}" data-like="${item.postId}" id="like-btn"></button>
                            <button class="btn comment-btn"></button>
                            <button class="btn share-btn"></button>
                        </div>
                        <h3>${item.likes} likes</h3>
                        <h4><span class="user-name">${item.username}</span> ${item.comment}</h4>
                    </div>
        `
    })
    postContent.innerHTML = postContentHtml
}

getPostContent()

document.addEventListener('click', function(e){
    let targetPostObjTwo = []
    if(e.target.dataset.like) {
        targetPostObjTwo = posts.filter(function(post){
            return post.postId === e.target.dataset.like
        })[0]
        if (targetPostObjTwo.isLiked === false){
            targetPostObjTwo.likes++
            targetPostObjTwo.isLiked = !targetPostObjTwo.isLiked
            
        } else {
            targetPostObjTwo.likes--
            targetPostObjTwo.isLiked = !targetPostObjTwo.isLiked
        }
    }
    getPostContent()
})


document.addEventListener('dblclick', function(e){
    let targetPostObj = []
    if(e.target.dataset.img) {
        targetPostObj = posts.filter(function(post){
            return post.postId === e.target.dataset.img
        })[0]
        if (targetPostObj.isLiked === false){
            targetPostObj.likes++
            targetPostObj.isLiked = !targetPostObj.isLiked
        } else {
            targetPostObj.likes--
            targetPostObj.isLiked = !targetPostObj.isLiked
        }
        
    }
    
    getPostContent()
})

/*document.addEventListener('dblclick', function(e){
    let targetPostObj = []
    if(e.target.dataset.img) {
        targetPostObj = posts.filter(function(post){
            return post.postId === e.target.dataset.img
        })[0]
        if (targetPostObj.isLiked === false){
            targetPostObj.likes++
            targetPostObj.isLiked = !targetPostObj.isLiked
        } else {
            targetPostObj.likes--
            targetPostObj.isLiked = !targetPostObj.isLiked
        }
        
    }
    
    getPostContent()
})


document.addEventListener('click', function(e){
    let targetPostObjTwo = []
    if(e.target.dataset.like) {
        targetPostObjTwo = posts.filter(function(post){
            return post.postId === e.target.dataset.like
        })[0]
        if (targetPostObjTwo.isLiked === false){
            targetPostObjTwo.likes++
            targetPostObjTwo.isLiked = !targetPostObjTwo.isLiked
        } else {
            targetPostObjTwo.likes--
            targetPostObjTwo.isLiked = !targetPostObjTwo.isLiked
        }
    }
    getPostContent()
})
*/
