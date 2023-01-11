const wrapper = document.querySelector(".comments__wrapper");

const container = document.createElement("div");
container.classList.add("comments-history__container");
wrapper.appendChild(container);

function displayComment(commentList) {
    const commentContainer = document.querySelector(".comments-history__container");
    commentContainer.innerHTML = "";

    for(let i = 0; i < commentList.length; i++) {
        const article = document.createElement("article");
        article.classList.add("comments__list");
        
        const img = document.createElement("div");
        img.classList.add("comments__list__img");

        const commentContent = document.createElement("div");
        commentContent.classList.add("comments__list__content");

        const userName = document.createElement("h3");
        userName.classList.add("comments__list__content__name");
        userName.innerText = commentList[i].name;

        const commentTime = document.createElement("p");
        commentTime.classList.add("comments__list__content__date");
        commentTime.innerText = new Date (commentList[i].timestamp).toLocaleDateString(); 

        const commentText = document.createElement("p");
        commentText.classList.add("comments__list__content__comment");
        commentText.innerText = commentList[i].comment;
        
        commentContainer.appendChild(article);
        article.append(img, commentContent);
        commentContent.append(userName, commentTime, commentText);
    };
};

const form = document.querySelector(".comments__card");

form.addEventListener("submit", newPost => {
    newPost.preventDefault();
                
    const newComment = axios.post(api + 'comments' + apiKey,
    {name: newPost.target.name.value,
    comment: newPost.target.comment.value});
    
    newComment.then(result => {
        const commentList = axios.get(api + 'comments' + apiKey)
        commentList.then(result=> {
            displayComment(result.data.reverse());
        });
    });
    
    form.reset();
});

const api = `https://project-1-api.herokuapp.com/`;
const apiKey = "?api_key=db1690a5-b9b9-4a90-a674-a9f6912c02d1";

const commentList = axios.get(api + 'comments' + apiKey)
commentList.then(result => {
    displayComment(result.data.reverse());
});
