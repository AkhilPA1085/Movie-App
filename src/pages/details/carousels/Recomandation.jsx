import React from "react";
import SwiperCarousel from "../../../Components/swiperCarousel/SwiperCarousel";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);
  return (
    <>
    {data?.results.length > 0 && <>
      <ContentWrapper>
        <div className="main-title">Recommended {mediaType}s</div>
      </ContentWrapper>
      <SwiperCarousel
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </>
    }
    </>
  );
};

export default Recommendation;
