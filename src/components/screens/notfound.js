import React, {Component} from 'react';
import HeadMeta from "../parts/head";

class Notfound extends Component {
    render() {
        const head = {
            title: '404 Not Found',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow'
        }
        return (
            <>
                <HeadMeta head={head}/>
                <div className="mt-5 mb-5">
                    <h1 className="text-center">404 Not Found</h1>
                </div>
            </>

        );
    }
}

export default Notfound;