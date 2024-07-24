// // Smooth scrolling for navigation links
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Light and dark mode toggle
// const toggleButton = document.getElementById('toggle-mode');
// toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     if (document.body.classList.contains('dark-mode')) {
//         document.documentElement.style.setProperty('--background-color', '#333');
//         document.documentElement.style.setProperty('--text-color', '#fff');
//         document.documentElement.style.setProperty('--header-footer-bg', '#fff');
//         document.documentElement.style.setProperty('--header-footer-color', '#333');
//         document.documentElement.style.setProperty('--section-bg-light', '#2c2c2c');
//         document.documentElement.style.setProperty('--section-bg-dark', '#f4f4f4');
//         document.documentElement.style.setProperty('--link-color', '#fff');
//     } else {
//         document.documentElement.style.setProperty('--background-color', '#f4f4f4');
//         document.documentElement.style.setProperty('--text-color', '#333');
//         document.documentElement.style.setProperty('--header-footer-bg', '#333');
//         document.documentElement.style.setProperty('--header-footer-color', '#fff');
//         document.documentElement.style.setProperty('--section-bg-light', '#fff');
//         document.documentElement.style.setProperty('--section-bg-dark', '#2c2c2c');
//         document.documentElement.style.setProperty('--link-color', '#333');
//     }
// });



// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Light and dark mode toggle
const toggleButton = document.getElementById('toggle-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        document.documentElement.style.setProperty('--background-color', '#333');
        document.documentElement.style.setProperty('--text-color', '#fff');
        document.documentElement.style.setProperty('--header-footer-bg', '#fff');
        document.documentElement.style.setProperty('--header-footer-color', '#333');
        document.documentElement.style.setProperty('--section-bg-light', '#2c2c2c');
        document.documentElement.style.setProperty('--link-color', '#fff');
    } else {
        document.documentElement.style.setProperty('--background-color', '#f4f4f4');
        document.documentElement.style.setProperty('--text-color', '#333');
        document.documentElement.style.setProperty('--header-footer-bg', '#333');
        document.documentElement.style.setProperty('--header-footer-color', '#fff');
        document.documentElement.style.setProperty('--section-bg-light', '#fff');
        document.documentElement.style.setProperty('--link-color', '#333');
    }
});
