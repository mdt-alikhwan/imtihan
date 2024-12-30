window.onload = function() {
            // Menonaktifkan scroll
        document.body.style.overflow = 'hidden';
        document.querySelector('.nav-indicator').style.display = 'none';
        document.querySelector('.nav-indicator').style.position = '-webkit-sticky';
};
    
    
    document.getElementById("fullscreenBtn").onclick = function() {
        // Memeriksa metode fullscreen yang didukung browser
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen(); // Browser modern
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(); // Safari
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen(); // Internet Explorer / Edge
        }

        document.body.style.overflow = '';
        // Menuju ke section1 dan menampilkan nav-indicator
        document.querySelector('#section1').classList.add('active');
        document.querySelector('.coverundangan').classList.remove('active');
        document.querySelector('.nav-indicator').style.display = 'flex';
        document.querySelector('.nav-indicator').style.position = 'fixed';
        document.querySelector('.nav-indicator').style.bottom = '0';


    };

document.querySelectorAll('.nav-indicator .btn').forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetSection = document.querySelector(targetId);
        const activeSection = document.querySelector('.section.active');

        if (targetSection && activeSection !== targetSection) {
            activeSection.classList.remove('active');
            targetSection.classList.add('active');
        }
    });
});