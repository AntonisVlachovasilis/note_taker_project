const textarea = document.querySelector('#textarea');
const add = document.querySelector('#add');
const newWindow = document.querySelector('.newWindows');
const para = document.querySelector('p');

add.addEventListener('click', () => {
    const newNote = textarea.value;

    const view = document.createElement('button');
    view.innerText = 'View Details'
    view.classList.add('details');


    const newTab = document.createElement('div');
    const newText = document.createElement('div');
    newText.innerText = newNote;
    newText.classList.add('newTextStyle');

    newTab.classList.add('note');
    newTab.appendChild(newText)
    newTab.appendChild(view);
    para.style.display = 'none';

    newWindow.appendChild(newTab);
    textarea.value = "";


    view.addEventListener('click', () => {

        const popUp = document.createElement('div');
        popUp.textContent = newText.innerText;
        popUp.classList.add('popUps');


        const exit = document.createElement('button');
        exit.innerText = 'X';
        exit.classList.add('close');
        popUp.appendChild(exit);
        document.querySelector('body').appendChild(popUp);


        document.querySelector('#core').style.opacity = '0.3';
        document.querySelector('body').style.backgroundColor = 'grey';


        exit.addEventListener('click', () => {
            popUp.style.display = 'none'
            document.querySelector('#core').style.opacity = '1';
            document.querySelector('body').style.backgroundColor = 'white';

        })
    })


})

