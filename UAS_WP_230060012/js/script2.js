document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown_230060012');
    const dropdownContent = document.querySelector('.dropdown-content_230060012');

    dropdown.addEventListener('click', function () {
        const isVisible = window.getComputedStyle(dropdownContent).display === 'block';
        dropdownContent.style.display = isVisible ? 'none' : 'block';
    });

   
    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});