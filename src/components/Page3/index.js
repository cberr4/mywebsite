import React from 'react';
import logo from '../strawberry.jpg'

function Page2() {
    return (
        <section>
            <p>
            Sed lacinia augue porttitor nisl consectetur maximus. Nullam pellentesque massa vitae massa pharetra volutpat. Ut auctor, purus facilisis iaculis interdum, massa nisi volutpat dolor, ut porta leo massa at urna. Curabitur vulputate rhoncus leo ac lobortis. Pellentesque tempus bibendum nulla. Suspendisse ac elit vitae metus varius lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In maximus tortor ut augue dignissim, at ultricies mauris malesuada. Aliquam erat volutpat. Nunc sit amet velit a dui viverra accumsan ac vel lacus.
            Pellentesque quis auctor justo, eu egestas mauris. Nam interdum massa vel ligula venenatis fringilla.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed tincidunt neque. Vivamus semper libero orci, ut tincidunt nisi viverra non. Nunc ornare leo purus, vel luctus odio pellentesque et. Morbi sit amet turpis sed turpis rutrum ultricies. Nam in tellus nisi. Donec rutrum in metus et pretium. Suspendisse egestas posuere ex, ullamcorper ornare mauris tempus non. Aliquam faucibus ultricies egestas.
            </p>
            <img src={logo} alt='strawberry' className='w-96 l-96 rounded-full'/>
            <ul className='container flex'>
                <li className='px-28 py-10 border-4'>Sample item 1</li>
                <li className='px-28 py-10 border-4'>Sample item 2</li>
            </ul>
        </section>
    );
}

export default Page2;