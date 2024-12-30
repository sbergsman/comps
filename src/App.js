import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {

    const handleClick = () => {
        console.log('Clicked');
    };

    return <div>
        <div>
            <Button onClick={handleClick} primary className="mb-5">
                <GoBell />
                ClickMe
            </Button>
        </div>
        <div>
            <Button success><GoCloudDownload />Steve</Button>
        </div>
        <div>
            <Button rounded danger><GoDatabase />asd</Button>
        </div>
        <div>
            <Button warning outline>dfgdfg</Button>
        </div>
        <div>
            <Button secondary>dfgdgfg</Button>
        </div>
    </div>
}

export default App;