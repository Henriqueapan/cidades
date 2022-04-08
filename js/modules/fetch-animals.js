import animateNumbersInit from "./animations/numbers.js";

export default function fetchAnimalsInit() {
    async function fetchAnimals(url = '../animals.json') {
        const numberSection = document.querySelector('.numeros-grid');
        try {
            const response = await fetch(url),
            json = await response.json();
            json.forEach(i => {
                numberSection.appendChild(createAnimal(i))
            })
            animateNumbersInit()
        }
        catch {
            numberSection.appendChild(createAnimal(null, true))
        }
        
    }
    
    function createAnimal(animal, error = false) {
        if (error) {
            const newDiv = document.createElement('div')
            newDiv.innerHTML = `<h3>ERRO</hr><br>
                                <span>Ocorreu um erro ao carregar os dados referentes aos numeros de cada espécie. Por favor, tente recarregar a página.`
            
            return newDiv;
        }
        const newDiv = document.createElement('div');
    
        newDiv.classList.add('numero-animal')
        newDiv.innerHTML = `<h3>${animal.species}</h3>
                            <span data-number>${animal.total}</span>`
    
        return newDiv;
    }
    fetchAnimals()
}