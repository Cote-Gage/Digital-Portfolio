document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('header nav a');
    const logoLink = document.querySelector('.logo')
    const sections = document.querySelectorAll('section');
    const menuIcon = document.querySelector('#menu-icon')
    const navbar = document.querySelector('header nav')
    const header = document.querySelector('header')
    const barsBox = document.querySelector('.bars-animation')

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x')
        navbar.classList.toggle('active')
    })

    const activePage = () => {
        header.classList.remove('active')
        setTimeout(() => {
            header.classList.add('active')
        }, 1100)

        navLinks.forEach(link => {
            link.classList.remove('active');
        })

        sections.forEach(section => {
            section.classList.remove('active');
        })

        menuIcon.classList.remove('bx-x')
        navbar.classList.remove('active')
    }

    barsBox.classList.add('active')
    activePage()
    navLinks[0].classList.add('active');

    navLinks.forEach((link, idx) => {
        link.addEventListener('click', () => {
            sections.forEach(section => {
                section.classList.remove('active');
                section.classList.add('inactive');
            })

            if (!link.classList.contains('active')) {
                activePage()

                barsBox.classList.remove('active')
                setTimeout(() => {
                    barsBox.classList.add('active')
                }, 1000)

                link.classList.add('active');

                setTimeout(() => {
                    sections[idx].classList.add('active')
                    sections[idx].classList.remove('inactive')
                }, 1100)
            }
        });
    });

    logoLink.addEventListener('click', () => {
        sections.forEach(section => {
            section.classList.remove('active');
            section.classList.add('inactive');
        })

        if (!navLinks[0].classList.contains('active')) {
            activePage()

            barsBox.classList.remove('active')
            setTimeout(() => {
                barsBox.classList.add('active')
            }, 1000)

            navLinks[0].classList.add('active')

            setTimeout(() => {
                sections[0].classList.add('active')
                sections[0].classList.remove('inactive')
            }, 1100)
        }
    })

    const resumeBtns = document.querySelectorAll('.resume-btn');

    resumeBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            const resumeDetails = document.querySelectorAll('.resume-detail')

            resumeBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            btn.classList.add('active');

            resumeDetails.forEach(detail => {
                detail.classList.remove('active');
            });
            resumeDetails[idx].classList.add('active')
        });
    });

    const arrowRight = document.querySelector('.project-box .navigation .arrow-right')
    const arrowLeft = document.querySelector('.project-box .navigation .arrow-left')

    let index = 0;

    const activePortfolio = () => {
        const imgSlide = document.querySelector('.project-carousel .img-slide');
        const projectDetails = document.querySelectorAll('.project-detail');

        imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

        projectDetails.forEach(detail => {
            detail.classList.remove('active');
        })
        projectDetails[index].classList.add('active');
    }

    arrowRight.addEventListener('click', () => {
        if (index < 1) {
            index++;
            arrowLeft.classList.remove('disabled')
        }
        else {
            index = 2;
            arrowRight.classList.add('disabled')
        }

        activePortfolio();
    });

    arrowLeft.addEventListener('click', () => {
        if (index > 1) {
            index--;
            arrowRight.classList.remove('disabled')
        }
        else {
            index = 0;
            arrowLeft.classList.add('disabled')
        }

        activePortfolio();
    });
})