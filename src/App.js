import Accordion from "./components/Accordion";

function App() {

    const items = [
        {
            id: 'wrgeas',
            label: 'Steve',
            content: 'Rules'
        }, 
        {
            id: 'shjdj',
            label: 'Ix',
            content: 'DRules'
        }, 
        {
            id: 'yukf',
            label: 'Sheri',
            content: 'Workout'
        }
    ];
    return <Accordion items={items}/>;

}

export default App;