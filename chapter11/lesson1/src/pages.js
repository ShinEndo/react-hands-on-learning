import React from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[ Company Website ]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="products">Products</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function Redirect(props) {
    return <Navigate to={props.redirect}/>
}
export function About() {
    return (
        <div>
            <h1>[ About ]</h1>
            <Outlet />
        </div>
    );
}

export function History() {
    return (
        <section>
            <h2>History</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore cupiditate sint culpa quae necessitatibus ducimus accusamus qui tempora molestias, voluptas ex rem hic fuga repellendus error ratione inventore ea.</p>
        </section>
    )
}

export function Services() {
    return (
        <section>
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore cupiditate sint culpa quae necessitatibus ducimus accusamus qui tempora molestias, voluptas ex rem hic fuga repellendus error ratione inventore ea.</p>
        </section>
    )
}

export function Location() {
    return (
        <section>
            <h2>Location</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore cupiditate sint culpa quae necessitatibus ducimus accusamus qui tempora molestias, voluptas ex rem hic fuga repellendus error ratione inventore ea.</p>
        </section>
    )
}

export function Events() {
    return (
        <div>
            <h1>[ Events ]</h1>
        </div>
    );
}
export function Products() {
    return (
        <div>
            <h1>[ Products ]</h1>
        </div>
    );
}
export function Contact() {
    return (
        <div>
            <h1>[ Contact ]</h1>
        </div>
    );
}

export function Whoops404() {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    )
}
