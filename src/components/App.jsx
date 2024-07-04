import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';
import { getAPI } from '../pixabay-api';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
    isLoading: false,
    isError: false,
    isEnd: false,
  };

  componentDidUpdate = async (_prevProps, prevState) => {
    const { searchQuery, currentPage } = this.state;

    if (
      prevState.searchQuery !== searchQuery ||
      prevState.currentPage !== currentPage
    ) {
      await this.fetchImages(searchQuery, currentPage);
    }
  };

  fetchImages = async (searchQuery, currentPage) => {
    // implement this code
    try {
      this.setState({ isLoading: true });
      // fetch data from API

      const fetchedImages = await getAPI(searchQuery, currentPage);

      const { hits, totalHits } = fetchedImages;

      console.log(hits, totalHits);

      // Display an error message, if there is no match with the searchQuery
      if (hits.length === 0) {
        toast.error(
          'Sorry, there are no images matching your searchQuery query. Please try again.'
        );
        return;
      }

      // Display a success message if it's the first currentPage
      if (currentPage === 1) {
        toast.success(`Hooray! We found ${totalHits} images!`)
          };
      }

      // Display a message if currentPage is already at the end of data (12 = per_page based on API call)
      if (currentPage * 12 >= totalHits) {
        this.setState({ isEnd: true });
        toast(
          "We're sorry, but you've reached the end of searchQuery results."
        );
      }
      // Update the state with the new images
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
      }));
    } catch {
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;
    const newSearch = e.target.searchQuery.value.trim().toLowerCase();

    // if new searchQuery string is different from the current searchQuery string saved in state
    if (newSearch !== searchQuery) {
      this.setState({ searchQuery: newSearch, currentPage: 1, images: [] });
    }
  };

  handleClick = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { images, isLoading, isError, isEnd } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        {/* Render ImageGallery Component when there is atleast one match of images */}
        {images.length >= 1 && <ImageGallery photos={images} />}

        {/* Render Button Component when there is atleast a currentPage or more and it's not the end of currentPage */}
        {images.length >= 1 && !isEnd && <Button onClick={this.handleClick} />}
        {isLoading && <h2>Loading......</h2>}
        {isError &&
          toast.error('Oops, something went wrong! Reload this currentPage!')}

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    );
  }
}
