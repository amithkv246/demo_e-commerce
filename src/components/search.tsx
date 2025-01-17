import { FC } from 'react';
import CardCom from './card';

interface SearchProps {
    products: Product[];
    searchText: string;
    handleSetCartDetails: (item: Product) => void;
    id: number[];
}

const Search: FC<SearchProps> = ({ products, searchText,handleSetCartDetails, id }) => {

    const matchingProducts = products.filter((item) => item.title?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <>
            {
                matchingProducts.length > 0 ?
                    matchingProducts.map((item: Product, index: number) => <div className='d-flex gap-3'><CardCom item={item} key={index + "homeSearchResult"} handleSetCartDetails={handleSetCartDetails} id={id} /></div>)
                    :
                    <p>No search results found.</p>
            }
        </>
    );
};

export default Search;