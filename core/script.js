            aw = {
                open(e) {
                    if (e.classList.contains('dropdown')) {
                        c = e.querySelector('.content')
                        if (c.style.display == "none") { 
                            c.style.display = "flex"
                            setTimeout(() => {
                                c.style.scale = "1"
                            }, 1)
                            e.querySelector('button').querySelector("i.fa-angle-down").style.rotate = '180deg'
                        } 
                    } else if (e.parentElement.parentElement.classList.contains('dropdown')) {
                        aw.open(e.parentElement.parentElement)
                    } else if (e.tagName == "DIALOG") {
                        e.showModal()
                        e.animate([
                                    { opacity: 0 },
                                    { opacity: 1 },
                                ],
                                { duration: 300, fill: 'forwards', easing: 'ease', pseudoElement: '::backdrop' }
                            )
                            e.animate([
                                    { opacity: 0 },
                                    { opacity: 1 },
                                ],
                                { duration: 150, fill: 'forwards', easing: 'ease' }
                            )    
                        e.animate([
                                { scale: 0.75, opacity: 1 },
                                { scale: 1, opacity: 1 },
                            ],
                            { duration: 150, fill: 'forwards', easing: "ease" }
                        )
                    }
                },
                close(e) {
                    if (e.classList.contains('dropdown')) {
                        c = e.querySelector('.content')
                        c.style.scale = "0.5"
                        setTimeout(() => {
                            c.style.display = "none"
                        }, 150)
                        b.querySelector("i.fa-angle-down").style.rotate = '0deg'
                    } else if (e.parentElement.parentElement.tagName == "DIALOG") {
                        aw.close(e.parentElement.parentElement)
                    } else if (e.tagName == "DIALOG") {
                        e.animate([
                                { scale: 1 },
                                { scale: 0.5 },
                            ],
                            { duration: 150, fill: 'forwards', easing: 'ease' }
                        )
                        e.animate([
                                { opacity: 1 },
                                { opacity: 0 },
                            ],
                            { duration: 150, fill: 'forwards', easing: 'ease' }
                        )
                        e.animate([
                                { opacity: 1 },
                                { opacity: 0 },
                            ],
                            { duration: 150, fill: 'forwards', easing: 'ease', pseudoElement: '::backdrop' }
                        )
                        setTimeout(()=>{
                            e.close()
                        }, 200)
                    }

                },
                isOpen(e) {
                    if (e.classList.contains('dropdown')) {
                        return e.querySelector('.content').style.display == "none"
                    }
                },
                toggle(e) {
                    if (e.classList.contains('dropdown')) {
                        if (aw.isOpen(e)) {
                            aw.open(e)
                        } else {
                            aw.close(e)
                        }
                    }
                }
            }

            tabs = document.querySelectorAll('.tabs, .top-tabs')
            tabs.forEach((t)=>{
                t.querySelectorAll('button').forEach((b) => {
                    $(b).click((e) => {
                        t.querySelector('.tab').style.left = e.target.offsetLeft + 'px';
                    })
                })
                t.querySelector('.tab').style.left = t.querySelectorAll('button')[0].offsetLeft + 'px'
            })
            dropdowns = document.querySelectorAll('.dropdown')
            dropdowns.forEach((d) => {
                b = d.querySelector(".btn, button")
                b.innerHTML += "<i class='fa-solid fa-angle-down ms-2' style='transition: all 0.3s ease-in-out; font-size: 0.8rem'></i>"
                $(b).click((e) => {
                    aw.toggle(d)
                })
                d.querySelector('.content').style.display = "none"
            })
