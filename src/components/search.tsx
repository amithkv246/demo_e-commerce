import { FC, useEffect, useState } from 'react';
import CardCom from './card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { updateIsSorted, updateSortColor } from '../redux/slice/slice';

interface SearchProps {
    products: Product[];
    searchText: string;
    handleSetCartDetails: (item: Product) => void;
    id: number[];
}

const Search: FC<SearchProps> = ({ products, searchText, handleSetCartDetails, id }) => {
    const [sortedMatchingProducts, setSortedMatchingProducts] = useState<Product[]>([])
    const [sortColorLth, setSortColorLth] = useState<string>("secondary")
    const [sortColorHtl, setSortColorHtl] = useState<string>("secondary")
    const { isMobile, isSorted, sortColor } = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()

    const matchingProducts = products.filter((item) => item.title?.toLowerCase().includes(searchText.toLowerCase()) || item.description?.toLowerCase().includes(searchText.toLowerCase()))

    const sortMatchingProducts = (e: React.MouseEvent<HTMLParagraphElement>) => {
        dispatch(updateIsSorted(true))
        dispatch(updateSortColor("primary"))
        const id = e.currentTarget.id
        if (id === "lth") {
            setSortColorLth("primary")
            setSortColorHtl("secondary")
            setSortedMatchingProducts(matchingProducts.sort((a, b) => (a.price ?? 0) - (b.price ?? 0)))
        } else if (id === "htl") {
            setSortColorHtl("primary")
            setSortColorLth("secondary")
            setSortedMatchingProducts(matchingProducts.sort((a, b) => (b.price ?? 0) - (a.price ?? 0)))
        }
    }

    useEffect(() => {
        if (sortColor === "secondary") {
            setSortColorLth(sortColor)
            setSortColorHtl(sortColor)
        }
    }, [sortColor])

    return (
        <>
            <div className='d-flex flex-column gap-2'>
                {
                    matchingProducts.length > 0 &&
                    <div className="d-flex flex-row gap-4 fs-4 fw-semibold text-secondary">
                        <p>Sort by</p>
                        <p role='button' id='lth' onClick={sortMatchingProducts} className={`text-${sortColorLth} ${sortColorLth === "primary" ? "border-2 border-bottom border-primary" : "border-2 border-bottom border-white"}`} >Price -- Low to High</p>
                        <p role='button' id='htl' onClick={sortMatchingProducts} className={`text-${sortColorHtl} ${sortColorHtl === "primary" ? "border-2 border-bottom border-primary" : "border-2 border-bottom border-white"}`} >Price -- High to Low</p>
                    </div>
                }
                <div className={isMobile ? "d-flex flex-column gap-3 justify-content-center" : "d-flex flex-row flex-wrap gap-3 justify-content-start"}>
                    {
                        isSorted ?
                            (sortedMatchingProducts.length > 0 ?
                                sortedMatchingProducts.map((item: Product, index: number) => <div className='d-flex gap-3'><CardCom item={item} key={index + "homeSearchResult"} handleSetCartDetails={handleSetCartDetails} id={id} /></div>)
                                :
                                <p>Sorting...</p>)
                            :
                            (matchingProducts.length > 0 ?
                                matchingProducts.map((item: Product, index: number) => <div className='d-flex gap-3'><CardCom item={item} key={index + "homeSearchResult"} handleSetCartDetails={handleSetCartDetails} id={id} /></div>)
                                :
                                <p>No search results found.</p>)
                    }
                </div>
            </div>
        </>
    );
};

export default Search;