import Accordion from "../components/Accordion";

function AccordionPage() {

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

export default AccordionPage;