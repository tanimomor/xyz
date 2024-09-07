import React, { useState, useEffect } from 'react';

export default function PageNav({ productsPerPage, totalProducts, paginate, currentPage }) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const [visiblePages, setVisiblePages] = useState([]);

    useEffect(() => {
        updateVisiblePages(currentPage);
    }, [currentPage]);

    const updateVisiblePages = (page) => {
        let pages = [];

        if (totalPages <= 5) {
            // Show all pages if total pages are 5 or less
            pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else if (page <= 3) {
            // Show first 3 pages and the last two with ellipses in the middle
            pages = [1, 2, 3, '...', totalPages];
        } else if (page >= totalPages - 2) {
            // Show last 3 pages and the first two with ellipses in the middle
            pages = [1, '...', totalPages - 2, totalPages - 1, totalPages];
        } else {
            // Show the current page in the middle, with ellipses on both sides
            pages = [1, '...', page - 1, page, page + 1, '...', totalPages];
        }

        setVisiblePages(pages);
    };

    const handlePageClick = (number) => {
        if (typeof number === 'number') {
            paginate(number);
            updateVisiblePages(number);
        } else if (number === '...') {
            // Expand pages depending on the current ellipsis position
            const middlePageIndex = visiblePages.indexOf(currentPage);
            if (middlePageIndex === 2) {
                updateVisiblePages(currentPage + 2);
            } else if (middlePageIndex === visiblePages.length - 3) {
                updateVisiblePages(currentPage - 2);
            }
        }
    };

    return (
        <div className="flex items-center justify-center mt-8">
            <div className="flex items-center gap-x-2 text-center text-sm font-bold leading-5 text-gray-800">
                {/* Left Arrow */}
                {currentPage > 1 && (
                    <div onClick={() => handlePageClick(currentPage - 1)}
                         className="flex h-8 w-8 flex-shrink-0 flex-col justify-center rounded border border-solid border-neutral-950 px-[3px] py-1 cursor-pointer">
                        &lt;
                    </div>
                )}

                {/* Page Numbers */}
                {visiblePages.map((number, index) => (
                    <div key={index}
                         onClick={() => handlePageClick(number)}
                         className={`flex h-8 w-8 flex-shrink-0 flex-col justify-center rounded border border-solid border-neutral-950 px-[3px] py-1 cursor-pointer ${
                             currentPage === number ? 'bg-neutral-950 text-white' : 'bg-white'
                         }`}>
                        <div className="text-center">{number}</div>
                    </div>
                ))}

                {/* Right Arrow */}
                {currentPage < totalPages && (
                    <div onClick={() => handlePageClick(currentPage + 1)}
                         className="flex h-8 w-8 flex-shrink-0 flex-col justify-center rounded border border-solid border-neutral-950 px-[3px] py-1 cursor-pointer">
                        &gt;
                    </div>
                )}
            </div>
        </div>
    );
}
