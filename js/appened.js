const personList = document.getElementById('person-list');
// console.log(personList);
const li = document.createElement('li');
li.innerText = 'new bride'
personlist.appenedChild(li);

const mainContainer = document.getElementById(main-container);
// console.log(mainContainer);

const section = document.createElement('section');
const h1 = document.createElement('h1')
h1.innerText = 'My Food List';
section.appendChild(h1);


const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'akm'

const li1 = document.createElement('li');
li1.innerText = 'abrar-bin-'

const li3 = document.createElement('li');
li3.innerText = 'azhar'

const li4 = document.createElement('li');
li4.innerText = 'ahmed'

section.appendChild('ul');

// mainContainer.appendChild(section);

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> my dress section</h1>
<ul>
<li>Shirt</li>
<li>pent</li>
<li>jama</li>
<li>juto</li>
</ul>
`
mainContainer.appendChild(sectionDress);