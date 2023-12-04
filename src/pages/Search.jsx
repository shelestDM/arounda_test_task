import { useParams } from 'react-router-dom/cjs/react-router-dom';
import Main from '../components/Main';

const SearchPage = () => {

    let {id} = useParams();

    return ( 
        <Main query={id}/>
    );
}
 
export default SearchPage;