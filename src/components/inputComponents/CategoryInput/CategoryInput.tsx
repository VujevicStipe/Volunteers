import axios from "axios";
import React, { useEffect, useState } from "react";
import apiUrl from "../../../util/config";
import CategoryRadioComponent from "./categoryComponents/CategoryRadioComponent";
import CategorySelectComponent from "./categoryComponents/CategorySelectComponent";

interface CategoryInputProps {
  variant: "filter" | "input";
  onChange: (name: string, value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({ variant, onChange }) => {
  const [jobTypes, setJobTypes] = useState<MyJobType[]>([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/jobTypes`)
      .then((res) => {
        setJobTypes(res.data);
        if (defaultCategoryRef.current) {
          defaultCategoryRef.current.checked = true;
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const defaultCategoryRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      {variant == "filter" ? (
        <CategoryRadioComponent
          data={jobTypes}
          onChange={onChange}
          myRef={defaultCategoryRef}
        />
      ) : (
        <CategorySelectComponent data={jobTypes} onChange={onChange} />
      )}
    </>
  );
};

export default CategoryInput;
