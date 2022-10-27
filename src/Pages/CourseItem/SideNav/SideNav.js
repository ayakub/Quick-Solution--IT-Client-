import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [link, setLink] = useState()
    useEffect(() => {
        fetch(' https://learn-cse-fundamentals-server.vercel.app/course')
            .then(res => res.json())
            .then(data => setLink(data))
            .catch(error => {
                console.error(error)
            })

    }, [])
    return (
        <div className='d-none d-lg-block mt-4'>
            {
                link?.map(linkItem => <Link to={`/course/${linkItem.id}`}><Button className='w-100 mb-2' variant="outline-primary">{linkItem?.title}</Button></Link>)
            }
        </div>
    );
};

export default SideNav;