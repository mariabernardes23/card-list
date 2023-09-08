const likeButtons = document.querySelectorAll('.buttonLike');

likeButtons.forEach((button) => {
    let qtdeLike = 0; 
    const likesElement = button.querySelector('.numberLike');

    button.addEventListener('click', () => {
        qtdeLike++; 
        likesElement.textContent = qtdeLike; 
        button.classList.add('like');
    });
});
