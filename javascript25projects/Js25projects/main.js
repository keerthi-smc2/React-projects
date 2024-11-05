const data = [
    {
        id : '1',
        question:  "what are accordian components?",
        answer: "Accordian components are user interface elements used for They allow users to expand and collapse sections of content, making it easier to navigate through a large amount of information without overwhelming the interface."
    },
    {
        id: '2',
        question: 'What are they used for?',
        answer: 'They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus , setting pazels.'
    },
    {
        id: '3',
        question: 'Accordion as a musical instrument',
        answer: ' The accordian is a musical instrument with a keyboard and The accordion has found a place in various popular genres, from rock to jazz, often adding a distinctive texture to the music.'
    },
    {
        id: '4',
        question: 'Can i create an accordian component with a different framework',
        answer: 'Yes of course, it is very possible to create an accordian component with another framework'
    }
];

const accordianWrapper = document.querySelector(".accordian");


function createAccordianData() {
    accordianWrapper.innerHTML = data.map(dataItem => `
       <div class="accordian_item"> 
          <div class="d-flex accordian_title">
            <h3>${dataItem.question}</h3>
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          <div class="accordian-content">
            <p>${dataItem.answer}</p>
          </div>
       </div>
    `).join(" ");
}

createAccordianData();

const getAccordianTitles = document.querySelectorAll('.accordian_title');

console.log(getAccordianTitles);

getAccordianTitles.forEach(currentItem => {
    currentItem.addEventListener('click', (event) => {
        if(currentItem.classList.contains('active')) {
            currentItem.classList.remove('active')
        } else {
            let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');

            getAlreadyAddedActiveClasses.forEach(currentActiveItem => {
                currentActiveItem.classList.remove('active');
            })

            currentItem.classList.add('active');
        }
    });
});
