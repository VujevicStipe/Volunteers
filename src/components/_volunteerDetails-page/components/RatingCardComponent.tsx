import React from "react";
import styles from "../styles/RatingCardComponent.module.css";
import RatingInputComponent from "../../inputComponents/components/RatingInputComponent";

interface RatingCardComponentProps {
  data: Rating;
}

const RatingCardComponent: React.FC<RatingCardComponentProps> = ({ data }) => {
  // //getting img for
  // const [volunteerImg, setVolunteerImg] = useState<string>('')

  // const fetchImg = async () => {
  //     const img = await fetchUserImg(data?.gender);
  //     setVolunteerImg(img)
  // };
  // useEffect(() => {
  //     fetchImg()
  // }, [])

  // useEffect(() => {
  //     console.log(volunteerImg)
  // }, [])

  return (
    <div className={styles.ratingCard}>
      <h6>
        {data.name} {data.surname}
      </h6>
      {data && <RatingInputComponent sizeLg={false} readOnly={true} value={data.grade} />}
      <p>{data?.comment}</p>
    </div>
  );
};

export default RatingCardComponent;
