const hide = (elem, answer) => {
    console.log('hide');
    if (!elem.classList.contains('faq__item_show')) return;

    answer.style.height = `${answer.offsetHeight}px`;
    answer.offsetHeight;
    answer.style.display = 'block';
    answer.style.height = 0;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height .15s ease-in-out';
    elem.classList.remove('faq__item_show');

    setTimeout(() => {
        answer.style.display = '';
        answer.style.height = '';
        answer.style.overflow = 'hidden';
        answer.style.transition = '';
    }, 150);
}
const show = (elem, answer) => {
    console.log('show');
    if (elem.classList.contains('faq__item_show')) return;

    answer.style.display = 'block';
    const height = answer.offsetHeight;
    answer.style.height = 0;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height .15s ease-in-out';
    answer.offsetHeight;
    answer.style.height = `${height}px`;
    
    
    setTimeout(() => {
        elem.classList.add('faq__item_show');
        answer.style.display = '';
        answer.style.height = '';
        answer.style.overflow = 'hidden';
        answer.style.transition = '';
    }, 150);

}


export const accordion = () => {
    const list = document.querySelector('.faq__list');
    const faqItems = document.querySelectorAll('.faq__item');

    list.addEventListener('click', e => {
        const button = e.target.closest('.faq__question');

        if (button) {
            const item = button.closest('.faq__item');

            faqItems.forEach((faqItem, i) => {
                const answer = faqItem.querySelector('.faq__answer');
                if (item === faqItem) {
                    item.classList.contains('faq__item_show') ? hide(faqItem, answer) : show(faqItem, answer);
                } else {
                    hide(faqItem, answer);
                }
            })
        }
    })
}