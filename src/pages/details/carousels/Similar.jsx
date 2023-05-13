import React from "react";
import SwiperCarousel from "../../../Components/swiperCarousel/SwiperCarousel";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";

const Similar = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);
  return (
    <>
      <ContentWrapper>
        <div className="main-title">Similar Videos</div>
      </ContentWrapper>
      <SwiperCarousel
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </>
  );
};

export default Similar;
