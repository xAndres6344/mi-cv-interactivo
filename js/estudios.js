// js/estudios.js
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.study-tab');
    const panes = document.querySelectorAll('.study-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});