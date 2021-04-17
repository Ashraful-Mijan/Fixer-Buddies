import React, { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';
import { RiMessage2Fill } from 'react-icons/ri';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Order from "./Order/Order";
import Review from "./Review/Review";
import ServiceList from "./ServiceList/ServiceList";

function UserBoard() {

    const {id} = useParams()

    const routes = [
        {
            path: `/makeOrder/${id}`,
            exact: true,
            sidebar: () => <div>service list!</div>,
            main: () => <Order id={id}  />
        },
        {
            path: "/order",
            exact: true,
            sidebar: () => <div>service list!</div>,
            main: () => <Order/>
        },
        {
            path: "/serviceList",
            exact: true,
            sidebar: () => <div>service list!</div>,
            main: () => <ServiceList/>
        },
        {
            path: "/review",
            sidebar: () => <div>add service!</div>,
            main: () => <Review/>
        }
    ];

    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div className="px-3 py-5 bg-dark"
                    style={{
                        width: "20%",
                        height: '100vh'
                    }}
                >
                    <ul className='fs-5' style={{ listStyleType: "none", padding: '0' }}>
                        <li className='py-1'>
                            <FaShoppingCart className="text-light me-2" />
                            <Link to="/order" className="text-light text-decoration-none">Order</Link>
                        </li>
                        <li className='py-1'>
                            <SiBuymeacoffee className="text-light me-2" />
                            <Link to="/serviceList" className="text-light text-decoration-none">Service List</Link>
                        </li>
                        <li className='py-1'>
                            <RiMessage2Fill className="text-light me-2" />
                            <Link to="/review" className="text-light text-decoration-none">Review</Link>
                        </li>
                    </ul>

                    <Switch>
                        {routes.map((route, index) => (

                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default UserBoard;
