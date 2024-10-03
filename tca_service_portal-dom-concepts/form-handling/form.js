const loginButton = document.querySelector('#root .login-btn');
const enrollButton = document.querySelector('#root .enroll-btn');
const ml = document.querySelector('.model-login');
const em = document.querySelector('.model-enroll');

const lclose = document.querySelector('#l-close');
const eclose = document.querySelector('#e-close');

loginButton.onclick = () => {
    ml.classList.add('active');
    em.classList.remove('active');
}

enrollButton.onclick = () => {
    em.classList.add('active');
    ml.classList.remove('active');
}


lclose.onclick = () => {
    const ml = document.querySelector('.model-login');
    console.log(ml);
    ml.classList.add('close');
    ml.classList.remove('active');
    em.classList.remove('active');
}
eclose.onclick = () => {
    const me = document.querySelector('.model-enroll');
    console.log(me);
    me.classList.add('close');
    ml.classList.remove('active');
    em.classList.remove('active');
}


