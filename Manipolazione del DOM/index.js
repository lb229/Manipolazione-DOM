const addProduct = () => {
  //vado a selezionare il primo elemento dell'ul nel documento.
const ul= document.querySelector('ul')

// vado a selezionare il primo elemento dell'input nel documento.
const input= document.querySelector('input')

//creo un elemento li
const li= document.createElement('li');
//creo un elemento input da inserire dentro li
const checkbox= document.createElement('input')

//aggiungo elemento <li></li> appena creato dentro di <ul></ul>
ul.appendChild(li)
// imposto attributo type con un value di checkbox dentro di <input></input>
checkbox.setAttribute('type', 'checkbox')
//aggiungo elemento <input> (checkbox) come figlio di <li></li>
li.appendChild(checkbox)

//riprendo il valore inserito nell'input
const value= input.value
//imposto il testo dell'elemento <li></li> al valore che ho preso dall'input
li.innerText= value

};








