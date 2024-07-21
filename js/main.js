$(document).ready(function () {
    $(".loading-screen").fadeOut(500);
    $(".inner-load-sceen").fadeOut(300);
});

let navWidth = $('.nav-left').outerWidth();

$('.open-btn').on('click', function() {
    if ($('.nav-left').css('left') == '0px') {
        $('.nav-left').animate({left: -navWidth}, 500);
        $('.nav-right').animate({left: '0'}, 500);
        $('.open-btn').removeClass("fa-x").addClass("fa-align-justify");
        $('.nav-left-top li').animate({top: '700px'}, 500);
    } else {
        $('.nav-left').animate({left: '0'}, 500);
        $('.nav-right').animate({left: navWidth + 'px'}, 500);
        $('.open-btn').removeClass('fa-align-justify').addClass("fa-x");
        for (let i = 0; i < 5; i++) {
            $('.nav-left-top li').eq(i).animate({top: '0'}, (i + 5) * 100);
        }
    }
});

let result = [];

async function fetchMovies() {
        let response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=c0e3dce119c012eb1a963ca6dca39e0c');
        let data = await response.json();
        result = data.results;
        display(result);
}

fetchMovies();

function search(inputValue) {
if(inputValue.value==''){
    display(result);
}
else{
    let cartona = "";
    for (let i = 0; i < result.length; i++) {
        let title = result[i].title || result[i].original_title || "";
        if (title.toLowerCase().includes(inputValue.toLowerCase())) {
            cartona += `
                <div class="col-md-4">
                    <div class="film rounded-2" id="demo">
                        <img src="https://image.tmdb.org/t/p/w500/${result[i].poster_path}" alt="" height="500" class="w-100 rounded">
                        <div class="film-layer rounded p-2">
                            <h1 class="p-3">${title}</h1>
                            <p>${result[i].overview}</p>
                            <p>Release Date <span>: ${result[i].release_date}</span></p>
                            <h3>${result[i].vote_average}</h3>
                            <h4>${result[i].vote_average}</h4>
                            <div class="fil-layer-bottom"></div>
                        </div>
                    </div>
                </div>`;
        }
    }
    document.getElementById('row').innerHTML = cartona;
}
}

function display(data) {
    let cartona = "";
    for (let i = 0; i < data.length; i++) {
        cartona += `
            <div class="col-md-4">
                <div class="film rounded-2" id="demo">
                    <img src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" alt="" height="500" class="w-100 rounded">
                    <div class="film-layer rounded p-2">
                        <h1 class="p-3">${data[i].title || data[i].original_title || ""}</h1>
                        <p>${data[i].overview}</p>
                        <p>Release Date <span>: ${data[i].release_date}</span></p>
                        <h3>${data[i].vote_average}</h3>
                        <h4>${data[i].vote_average}</h4>
                        <div class="fil-layer-bottom"></div>
                    </div>
                </div>
            </div>`;
    }
    document.getElementById('row').innerHTML = cartona;
}

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
        $('#btnUp').fadeIn();
    } else {
        $('#btnUp').fadeOut();
    }
})
    $('#btnUp').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    

    })

    document.addEventListener('DOMContentLoaded', function() {
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const phoneInput = document.querySelector('#phone');
        const ageInput = document.querySelector('#age');
        const passwordInput = document.querySelector('#password');
        const rePasswordInput = document.querySelector('#rePassword');
        const submitBtn = document.querySelector('#submitBtn');
    
        // Improved regex patterns
        const nameRegex = /^[a-zA-Z\s\-]+$/;  // Allows letters, spaces, and hyphens
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // Valid email format
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;  // Valid phone number format, allowing international codes
        const ageRegex = /^\d+$/;  // Only digits, allows empty string
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;  // At least 8 characters with letters and numbers
    
        submitBtn.addEventListener('click', function() {
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const phone = phoneInput.value.trim();
            const age = ageInput.value.trim();
            const password = passwordInput.value.trim();
            const rePassword = rePasswordInput.value.trim();
    
            if (!nameRegex.test(name)) {
                alert('Invalid name. Only letters, spaces, and hyphens are allowed.');
                nameInput.focus();
                return;
            }
            if (!emailRegex.test(email)) {
                alert('Invalid email address.');
                emailInput.focus();
                return;
            }
            if (!phoneRegex.test(phone)) {
                alert('Invalid phone number. It should start with a "+" and be followed by digits.');
                phoneInput.focus();
                return;
            }
            if (!ageRegex.test(age) || age < 1) {
                alert('Invalid age. Please enter a positive number.');
                ageInput.focus();
                return;
            }
            if (!passwordRegex.test(password)) {
                alert('Invalid password. Must be at least 8 characters long and contain both letters and numbers.');
                passwordInput.focus();
                return;
            }
            if (password !== rePassword) {
                alert('Passwords do not match.');
                rePasswordInput.focus();
                return;
            }
    
            // If all validations pass
            alert('Form submitted successfully!');
            // Clear fields or perform other actions
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            ageInput.value = '';
            passwordInput.value = '';
            rePasswordInput.value = '';
        });
    });
    