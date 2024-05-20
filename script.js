let dataLikes = [123, 228, 911,1488]; 
let dataTexts = [ "папа вернись в семью", "мама вернись в семью","неудачный ракурс","йа растрилял дитей в рфмш"] 
let dataImgs = [ "mama.jpeg", "papa.jpeg", "birdcrazy.jpeg", "jail.jpeg"] 
let dataAvas= [ "mamaava.jpeg", "papaava.jpeg", "bird.jpeg", "out.jpeg"]
let datanick= [ "мама", "папа", "энгри бердс", "животное"]
let datanick2= [ "опарыш", "опарыш", "энгри бердс", "настя_крутая2012"]
let dataAvas2= [ "child.jpeg", "child.jpeg", "bird.jpeg", "girl.jpeg"]
let datacoms = [ "памагите", "памагите","о пасхалко","отпустите он же кросивый"] 
 
let korobkaPostov = document.getElementById("postsBox"); 
let originalPost = document.getElementById("firstPost"); 
 
for(let i = 0; i < 100; i++){ 
    let newPost = originalPost.cloneNode(true); 
 
    let img = newPost.getElementsByClassName("img")[0]; 
    img.setAttribute("src", dataImgs[i%4]); 
 
    let numberOfLikes = newPost.getElementsByClassName("numberOfLikes")[0] 
    numberOfLikes.innerHTML = dataLikes[i%4]; 
 
    let postText = newPost.getElementsByClassName("postText")[0] 
    postText.innerHTML = dataTexts[i%4]; 

    let ava = newPost.getElementsByClassName("ava")[0] 
    ava.setAttribute("src", dataAvas[i%4]); 

    let postnick = newPost.getElementsByClassName("postnick")[0] 
    postnick.innerHTML = datanick[i%4];

    let postnick2 = newPost.getElementsByClassName("postnick2")[0] 
    postnick2.innerHTML = datanick2[i%4]; 

    let ava2 = newPost.getElementsByClassName("ava2")[0] 
    ava2.setAttribute("src", dataAvas2[i%4]); 

    let comText = newPost.getElementsByClassName("comText")[0] 
    comText.innerHTML = datacoms[i%4]; 

 
    let likeBtn = newPost.getElementsByClassName("likeBtn")[0] 
    likeBtn.setAttribute("onclick", "likes(" + i + ")") 
 
    korobkaPostov.appendChild(newPost); 
} 
document.addEventListener('DOMContentLoaded', (event) => {
    const image = document.getElementById('clickableImage');
    const numberElement = document.getElementById('number');
    
    image.addEventListener('click', () => {
        let currentValue = parseInt(numberElement.innerText);
        numberElement.innerText = currentValue + 1;
    });
});


// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('commentsContainer');

    const submitComment = () => {
        // Получаем текст комментария
        const commentText = commentInput.value.trim();

            // Создаем новый элемент для комментария
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerText = commentText;

            // Добавляем новый комментарий в контейнер
            commentsContainer.appendChild(commentElement);

            // Очищаем поле ввода
            commentInput.value = '';
    };

    commentInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Предотвращаем добавление новой строки в textarea
            submitComment();
        }
    });
});



 