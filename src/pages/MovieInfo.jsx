import { useParams } from "react-router-dom";
import MovieData from "../MovieData.json";

export default function MovieInfo() {
  const { id } = useParams();
  return <div>{MovieData[id - 1].title} 상세정보 페이지입니다</div>;
}
