import React, { useEffect } from 'react';

function Nav(location) {
    const {
        pages = [],
        SetCurrent,
        currentPage
    } = location

    useEffect(() => {
        document.title = (currentPage.name);
      }, [currentPage]);


    return (
        <nav>
            <ul className='flex flex-row space-x-5 pr-8'>
                {pages.map((Page) => (
                    <li className={`${ currentPage.name === Page.name && 'navActive'} flex-auto cursor-pointer py-8`} key={Page.name}>
                        <span onClick={() => SetCurrent(Page)}>{Page.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;