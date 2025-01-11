
import FilterPanel from './FilterPanel';
import ProductScreen from './ProductScreen';

export default function HomeComponent() {
    return (
        <div className="w-full flex flex-row" style={{height: '90dvh'}}>
            <button className='w-fit h-fit p-1 text-2xl block lg:hidden'><i className='bi bi-list'></i></button>
            <div className="xl:w-1/5 lg:w-1/5 lg:block sm:hidden hidden p-2 border-r-2 border-gray-500"><FilterPanel /></div>
            <div className="w-full p-2 overflow-x-auto"><ProductScreen /></div>
        </div>
    );
}