document.addEventListener('DOMContentLoaded', function() {
    const homeElement = document.querySelector('.home');
    if (!homeElement) {
        console.error('Home element not found');
    }
    const mainBox = document.querySelector('.main-box');
    const buttons = document.querySelectorAll('.tech, .qualifications, .service, .AI');
    const toggleCss = document.getElementById('toggle-css');
    const mainStylesheet = document.getElementById('main-stylesheet');
    let timeoutId;

    function showElements() {
        mainBox.classList.add('show-elements');
        mainBox.classList.remove('hide-elements');
        buttons.forEach(button => {
            button.style.animation = '';
        });
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    }

    function hideElements() {
        timeoutId = setTimeout(() => {
            buttons.forEach((button, index) => {
                setTimeout(() => {
                    button.style.animation = `hide-${button.className} 1s forwards`;
                }, index * 100);
            });
        }, 2000);
    }

    if (homeElement) {
        homeElement.addEventListener('mouseenter', showElements);
        homeElement.addEventListener('mouseleave', hideElements);
        homeElement.addEventListener('touchstart', showElements);
        homeElement.addEventListener('touchend', hideElements);

        document.addEventListener('visibilitychange', function() {
            if (document.visibilityState === 'visible' && homeElement.matches(':hover')) {
                showElements();
            } else if (document.visibilityState === 'hidden') {
                hideElements();
            }
        });
    }

    function toggleCSS() {
        const currentPage = window.location.pathname.split('/').pop().split('?')[0].split('#')[0];
        const alternateStyles = {
            'service.html': 'otherStyle/service.css',
            'index.html': 'otherStyle/home.css',
            'portfolio.html': 'otherStyle/projects.css',
            'qualifications.html': 'otherStyle/qualification.css',
        };
        const mainStyles = {
            'index.html': 'home/style.css',
            'service.html': 'service/service.css',
            'portfolio.html': 'portfolio/portstyle.css',
            'qualifications.html': 'qualifications/qualifications.css'
        };

        if (toggleCss.checked) {
            mainStylesheet.href = alternateStyles[currentPage] || mainStylesheet.href;
        } else {
            mainStylesheet.href = mainStyles[currentPage] || mainStylesheet.href;
        }
    }

    if (localStorage.getItem('cssToggle') === 'alternate') {
        toggleCss.checked = true;
    } else {
        toggleCss.checked = false;
    }
    toggleCSS();

    toggleCss.addEventListener('change', function() {
        toggleCSS();
        if (toggleCss.checked) {
            localStorage.setItem('cssToggle', 'alternate');
        } else {
            localStorage.setItem('cssToggle', 'main');
        }
    });

    document.getElementById('toggle-css').addEventListener('change', function() {
        document.body.classList.toggle('disable-css', this.checked);
    });

    const trapdoors = document.querySelectorAll('.trapdoor, .trapdoor2, .trapdoor3');
    trapdoors.forEach(trapdoor => {
        trapdoor.addEventListener('touchstart', function() {
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 3000);
        });
    });

    const githubButton = document.querySelector('.github-button');
    const instagramButton = document.querySelector('.instagram-button');
    const linkedinButton = document.querySelector('.linkedin-button');

    function openLink(url) {
        window.open(url, '_blank');
    }

    githubButton.addEventListener('click', function() {
        openLink('https://github.com/HomeoStasis-0');
    });

    instagramButton.addEventListener('click', function() {
        openLink('https://www.instagram.com/homeo._.stasis/');
    });

    linkedinButton.addEventListener('click', function() {
        openLink('https://www.linkedin.com/in/javier-betancourt-1100b2268/');
    });

    githubButton.addEventListener('touchstart', function() {
        openLink('https://github.com/HomeoStasis-0');
    });

    instagramButton.addEventListener('touchstart', function() {
        openLink('https://www.instagram.com/homeo._.stasis/');
    });

    linkedinButton.addEventListener('touchstart', function() {
        openLink('https://www.linkedin.com/in/javier-betancourt-1100b2268/');
    });
});