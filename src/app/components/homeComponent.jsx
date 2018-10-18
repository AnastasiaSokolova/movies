import React, {Component, classNames} from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { push } from "react-router-redux";
import LoginPage from './loginPage.jsx';

import { loadMovies, setUser } from '../store/actions';



class Home extends Component {
    constructor(props) {
        super(props);

        this.renderMoviesList = this.renderMoviesList.bind(this);
    }

    componentDidMount() {
        this.props.loadMovies();
    }

    renderMoviesList() {
       return this.props.movies.map((item, index) => {
           let link = "/movie/" + item.id;
            return (
                <div className="movie-item" key={index}>
                    <Link to={link}>{item.title}</Link>
                    <div>{item.overview}</div>
                </div>
            )
        });
    }


    render() {
        const { user } = this.props;
        if(!user){
            return <LoginPage />
        }

        return (
            <div className="home-component">
                <div>Home component</div>
                <div className="movie-container">
                    {this.props.movies ? this.renderMoviesList() : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   user: state.oidc.user,
   movies: state.moviesData
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
    loadMovies: bindActionCreators((data) => loadMovies(data), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);