import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import DetailsBanner from "./detailsBanner/DetailsBanner"
import "./style.scss"
import Cast from "./cast/Cast";
import VideoSection from "./videoSection/VideoSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recomandation";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data:credits, loading:creaditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  return (
    <div>
      <DetailsBanner videos={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creaditsLoading}/>
      <VideoSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details