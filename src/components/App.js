import React from 'react';
import LandHeader from './LandingPage/LandHeader';
import LandDashBoard from './LandingPage/LandDashBoard';
import Footer from './shared/Footer';
import './styles/App.css';
class App extends React.Component {
    render() {
        return (
            <div>
                <LandHeader />
                <LandDashBoard />
                <Footer/>

            </div>
        )
    }

}


export default App;