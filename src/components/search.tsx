// import { FC } from 'react';
// import CardCom from './card';

// interface SearchProps {
//     products: Product[];
//     searchText: string;
// }

// const Search: FC<SearchProps> = ({ products, searchText }) => {

//     const matchingProducts = products.filter((item) => item.title?.toLowerCase().includes(searchText.toLowerCase()) ||
//         item.description?.toLowerCase().includes(searchText.toLowerCase()))

//     return (
//         <>
//             {
//                 matchingProducts.length > 0 ?
//                     matchingProducts.map((item, index) => <div className='d-flex gap-3'><CardCom item={item} key={"searchResult" + index} /></div>)
//                     :
//                     <p>No search results found.</p>
//             }
//         </>
//     );
// };

// export default Search;