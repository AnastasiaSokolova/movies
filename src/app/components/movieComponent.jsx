import React, {Component} from 'react';
import {connect} from 'react-redux';


class Movie extends Component {
    constructor(props) {
        super(props);

        this.getMovieById = this.getMovieById.bind(this);
        this.renderMovie = this.renderMovie.bind(this);

        this.state = {
            currentMovie: []
        }
    }

    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.movie_id;
        this.getMovieById(id)
    }

    componentWillReceiveProps(nextProps) {
        let id = nextProps.match.params.movie_id;
        this.getMovieById(id)
    }

    getMovieById(id) {
        let currentMovie = this.props.movies.filter((item) => item.id == id);
        this.setState({
            currentMovie: currentMovie[0]
        })
    }

    renderMovie() {
        let current = this.state.currentMovie;
        return (
            <div>
                <h1>{current.title}</h1>
                <div>{current.overview}</div>
            </div>
        )
    }

    render() {
        return (
            <div className="movie-component">
                <div>Movie component</div>
                {this.renderMovie()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.moviesData
});


export default connect(mapStateToProps, null)(Movie);