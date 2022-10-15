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
            <ul className='flex-row space-between'>
                {pages.map((Page) => (
                    <li className={`${ currentPage.name === Page.name && 'navActive'}`} key={Page.name}>
                        <span onClick={() => SetCurrent(Page)}>{Page.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;