function updateContainerClass() {
    const container = document.getElementById('myContainer');
    if (window.innerWidth < 992) {
        container.className = 'container-fluid';
    } else {
        container.className = 'container';
    }
}

// Initial check
updateContainerClass();

// Add event listener for window resize
window.addEventListener('resize', updateContainerClass);


const buttons = document.querySelectorAll('.tab_btn');
const slider = document.querySelector('.slider');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        document.querySelector('.tab_btn.active').classList.remove('active');
        button.classList.add('active');

        // Move slider to the active button position
        slider.style.left = `calc(2% + ${index * 48}%)`;
    });
});


// Select all menu links
const menuLinks = document.querySelectorAll('.menu_list a');

// Add click event listener to each link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        menuLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});
