document.querySelectorAll('.favorite-button').forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault()

        if (button.classList.contains('animated')) {
            return
        }
        button.classList.add('animated')

        gsap.to(button, {
            keyframes: [{
                '--star-y': '-36px',
                duration: .3,
                ease: 'power2.out'
            }, {
                '--star-y': '48px',
                '--star-scale': .4,
                duration: .325,
                onStart() {
                    button.classList.add('star-round')
                }
            }, {
                '--star-y': '-64px',
                '--star-scale': 1,
                duration: .45,
                ease: 'power2.out',
                onStart() {
                    button.classList.toggle('active')
                    setTimeout(() => button.classList.remove('star-round'), 100)
                }
            }, {
                '--star-y': '0px',
                duration: .45,
                ease: 'power2.in'
            }, {
                '--button-y': '3px',
                duration: .11
            }, {
                '--button-y': '0px',
                '--star-face-scale': .65,
                duration: .125
            }, {
                '--star-face-scale': 1,
                duration: .15
            }],
            clearProps: true,
            onComplete() {
                button.classList.remove('animated')
            }
        })

        gsap.to(button, {
            keyframes: [{
                '--star-hole-scale': .8,
                duration: .5,
                ease: 'elastic.out(1, .75)'
            }, {
                '--star-hole-scale': 0,
                duration: .2,
                delay: .2
            }]
        })

        gsap.to(button, {
            '--star-rotate': '360deg',
            duration: 1.55,
            clearProps: true
        })
    })
})

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar-open');
}

function submitForm(event) {
    event.preventDefault();
    var searchInput = document.getElementById("searchInput");
    var searchTerm = searchInput.value;
    // Realizar a ação desejada com o termo de pesquisa (por exemplo, enviar para um servidor, processar localmente, etc.)
    console.log("Termo de pesquisa: " + searchTerm);
}