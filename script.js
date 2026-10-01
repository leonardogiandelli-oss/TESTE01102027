document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Alternador de Relatos/Depoimentos ---
    const quotes = [
        {
            text: '"No começo eu não entendia nada do que o professor falava. Fiquei muito calado por meses até conseguir fazer meu primeiro amigo."',
            author: '— Mateo, 12 anos (Venezuela)'
        },
        {
            text: '"A maior dificuldade não é só a língua, é entender as gírias, o ritmo das matérias e sentir que a escola se importa com a nossa história."',
            author: '— Amina, 15 anos (Síria)'
        },
        {
            text: '"Quando a professora colocou cartazes com palavras em crioulo haitiano e português na sala, senti que finalmente tinha um lugar ali."',
            author: '— Jean, 10 anos (Haiti)'
        },
        {
            text: '"Precisamos de mais formação. Queremos ajudar, mas muitas vezes não temos o preparo técnico para ensinar português como segunda língua."',
            author: '— Profª Maria, Rede Pública de Ensino'
        }
    ];

    let currentQuoteIndex = 0;
    const quoteTextElem = document.getElementById('quote-text');
    const quoteAuthorElem = document.getElementById('quote-author');
    const nextQuoteBtn = document.getElementById('next-quote-btn');

    nextQuoteBtn.addEventListener('click', () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        
        // Efeito suave de transição
        quoteTextElem.style.opacity = 0;
        quoteAuthorElem.style.opacity = 0;

        setTimeout(() => {
            quoteTextElem.textContent = quotes[currentQuoteIndex].text;
            quoteAuthorElem.textContent = quotes[currentQuoteIndex].author;
            quoteTextElem.style.opacity = 1;
            quoteAuthorElem.style.opacity = 1;
        }, 300);
    });

    // Transição suave CSS para os textos de relatos
    quoteTextElem.style.transition = 'opacity 0.3s ease';
    quoteAuthorElem.style.transition = 'opacity 0.3s ease';


    // --- 2. Validação e Envio do Formulário ---
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const role = document.getElementById('role').value;
        const message = document.getElementById('message').value.trim();

        if (name && email && role && message) {
            // Exemplo de mensagem de sucesso (Simulação)
            formFeedback.textContent = `Obrigado pelo contato, ${name}! Sua mensagem foi enviada com sucesso. Juntos faremos a diferença!`;
            formFeedback.className = 'feedback-message success';

            // Limpa o formulário
            contactForm.reset();

            // Esconde a mensagem após 5 segundos
            setTimeout(() => {
                formFeedback.style.display = 'none';
            }, 5000);
        }
    });


    // --- 3. Rolagem Suave ao clicar nos links de navegação ---
    const navLinks = document.querySelectorAll('.nav-links a, .hero a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

});