import Leftsearch from './Leftsearch';
import Rightsearch from './Rightsearch';

import './Searchbar.css'

let Searchbar = () => {
    return <div className='searchbar'>
        <Leftsearch />
        <div className='searchBreak'>|</div>
        <Rightsearch />
    </div>
}

export default Searchbar;