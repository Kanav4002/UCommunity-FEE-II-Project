const slides = document.querySelector('.carousel-slides');
const totalSlides = document.querySelectorAll('.carousel-slide').length;
let index = 0;

function updateCarousel() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.control-prev').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

document.querySelector('.control-next').addEventListener('click', () => {
  index = (index + 1) % totalSlides; 
  updateCarousel();
});


const nameInput = document.querySelector('#name-input');
const commentInput = document.querySelector('#add-comment');
const updateButton = document.querySelector('#update-button');
const removeCommentsButton = document.querySelector('#remove-comments-button');

const commentList = document.querySelector('#comment-list');
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => {
        const newCommentItem = document.createElement('li');
        newCommentItem.textContent = `${comment.name}: ${comment.text}`;
        commentList.appendChild(newCommentItem);
    });
}

function saveComment(name, comment) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ name, text: comment });
    localStorage.setItem('comments', JSON.stringify(comments));
}

function clearComments() {
    localStorage.removeItem('comments');localStorage
    commentList.innerHTML = '';
}
loadComments();
updateButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    if (name && comment) {
        const newCommentItem = document.createElement('li');
        newCommentItem.textContent = `${name}: ${comment}`;
        commentList.appendChild(newCommentItem);

        saveComment(name, comment);

        nameInput.value = "";
        commentInput.value = "";
    }
});
removeCommentsButton.addEventListener('click', clearComments);



const joinButtons = document.querySelectorAll('.js-event-join-btn');
joinButtons.forEach(button => {
  button.addEventListener('click', join);
});

function join(){
  const buttonElement = this;

  if (buttonElement.innerText === 'Join') {
    buttonElement.innerHTML = 'Joined';
  } else {
    buttonElement.innerHTML = 'Join';
  }
}
