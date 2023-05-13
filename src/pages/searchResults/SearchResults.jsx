import { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import ContentWrapper from "../../Components/contentWrapper/ContentWrapper";
import "./style.scss";
import { fetchMovieApi } from "../../utils/api";
import { useParams } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchResults = () => {
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const { query } = useParams();

  const fetchQueryData = () => {
    setLoading(true);
    fetchMovieApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  const fetchNextPageQueryData = () => {
    fetchMovieApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    setPageNum(1);
    fetchQueryData();
  }, [query]);
  return (
    <div className="search-results">
      {loading && <Spinner initial={true} />}
      <ContentWrapper>
        <h2>Search for '{query}'</h2>
        <InfiniteScroll
            className="cards-row"
            dataLength={data?.results?.length || []}
            next={fetchNextPageQueryData}
            hasMore={pageNum <= data?.total_pages}
            loader={<Spinner initial={true} />}
          >
            {data?.results?.map((item) => (
              <MovieCard key={item.id} data={item} />
            ))}
          </InfiniteScroll>
      </ContentWrapper>
    </div>
  );
};

export default SearchResults;
