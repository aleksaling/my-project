let commentbox = [];  

function sendComment() {
let userInputStr = document.getElementById('comment').value;
commentbox.push(userInputStr);
let userCommentStr = "";
for (comment of commentbox) {
    userCommentStr += `<div class="display-comment">${comment}</div>`;
    userCommentStr = userCommentStr.replace(/viagra|xxx/i, '***');
}
document.getElementById('comment').value = "";
document.getElementById('output__container').innerHTML = userCommentStr;
}