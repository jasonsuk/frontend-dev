const filter = document.getElementById('filter');
const postSection = document.getElementById('post');
const loader = document.getElementById('loader');

let limit = 3;
let page = 1;

async function fetchPost() {
    const baseUrl = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`;

    const response = await fetch(baseUrl);
    const data = await response.json();

    return data;
}

async function displayPosts() {
    const posts = await fetchPost();

    posts.forEach((post) => {
        const postNum = post.id;
        const postHeading = post.title;
        const postPara = post.body;

        const article = document.createElement('div');
        article.classList.add('post__container');
        article.innerHTML = `
            <div class="post__number">${postNum}</div>
            <div class="post__info">
                <h2 class="post__heading">${postHeading}</h2>
                <p class="post__paragraph">${postPara}</p>
            </div>
        `;
        postSection.appendChild(article);
    });
}

displayPosts();

function showLoader() {
    loader.classList.add('show');
}

window.addEventListener('scroll', (e) => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight > scrollHeight - 1) {
        showLoader();
        setTimeout(() => {
            loader.classList.remove('show');

            setTimeout(() => {
                page++;
                displayPosts();
            }, 500);
        }, 1000);
    }
});

filter.addEventListener('input', (e) => {
    const searchInput = e.target.value;
    const posts = document.querySelectorAll('.post__container');

    posts.forEach((post) => {
        const heading = post.querySelector('.post__heading').innerText;
        const para = post.querySelector('.post__paragraph').innerText;

        if (
            heading.indexOf(searchInput) > -1 ||
            para.indexOf(searchInput) > -1
        ) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});
