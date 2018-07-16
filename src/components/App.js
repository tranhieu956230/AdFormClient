import React from "react";
import LandHeader from "./LandingPage/LandHeader";
import LandDashBoard from "./LandingPage/LandDashBoard";
import Footer from "./shared/Footer";

import getItem from "./shared/request.js";
import "./styles/App.css";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pagin: 0,
            active: 1,
            c: 0,
            t: 0,
            p: 0,
            b: 0,
            data: [],
            prev: false,
            next: true,
        };
    }
    componentDidMount() {
        getItem(1, 0, 0, 0, 0).then(data => {
            this.setState({ data: data.data, pagin: data.pagin });
        });
    }
    handleChange = (c, p, t, b) => {
        getItem(1, c, p, t, b).then(data => {
            this.setState({
                data: data.data,
                pagin: data.pagin,
                c: c,
                p: p,
                t: t,
                b: b,
                active: 1,
                prev: false,
                next: (data.pagin !== 1) ? true: false,
            });
        });
    };
    handlePageChange = page => {
        getItem(page, this.state.c, this.state.p, this.state.t, this.state.b).then(
            data => {
                this.setState({
                    data: data.data,
                    pagin: data.pagin,
                    active: page,
                    prev: (page !== "1") ? true : false,
                    next: (parseInt(page, 10) !== data.pagin) ? true: false,
                });
            }
        );
    };
    render() {
        return (
            <div>
                <LandHeader
                    onChange={this.handleChange}
                    c={this.state.c}
                    p={this.state.p}
                    t={this.state.t}
                    b={this.state.b}
                />
                <LandDashBoard
                    data={this.state.data}
                    pagin={this.state.pagin}
                    active={this.state.active}
                    onPageChange={this.handlePageChange}
                    prev={this.state.prev}
                    next={this.state.next}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
