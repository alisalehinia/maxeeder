import React, { useState } from 'react'
import Nav from '../components/navigation/Nav';
import Recommended from "../components/recommended/Recommended";
import Products from "../components/products/Products";
import Sidebar from "../components/sidebar/Sidebar"
import productsJson from "../db/index"
import Card from '../components/Card';
import { FunnelIcon } from '@heroicons/react/24/outline';
import { useMediaQuery } from '@mui/material';
import ReactPaginate from 'react-paginate';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // ----------- Input Filter -----------
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = productsJson.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // ------------ Button Filtering -----------
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };




    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    // !----------pagination
    const [products, setProducts] = useState(productsJson.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);

    const productsPerPage = 10;
    const pagesVisited = pageNumber * productsPerPage;


    const pageCount = Math.ceil(products.length / productsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems;
        }

        // Applying selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }

        return filteredProducts.slice(pagesVisited, pagesVisited + productsPerPage).map(
            ({ img, title, star, reviews, prevPrice, newPrice }) => (
                <Card
                    key={Math.random()}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                />
            )
        );
    }
    const result = filteredData(productsJson, selectedCategory, query);
    return (
        <>
            <Nav query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            {isSmallScreen && <div onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="flex items-center w-10 p-2 bg-violet-200 m-4 rounded-lg ">
                <FunnelIcon className="w-6 h-6" />
            </div>}
            {isSmallScreen && mobileFiltersOpen && <Sidebar isMobile={true} handleChange={handleChange} />}
            <div className='flex'>
                {!isSmallScreen && <Sidebar handleChange={handleChange} isMobile={false} />}
                <Products result={result} />
            </div>
            <div className='flex justify-center p-2 '>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </>
    );
}

export default Shop