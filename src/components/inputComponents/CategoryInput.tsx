import axios from "axios";
import React, { useEffect, useState } from "react";
import apiUrl from "../../util/config";
import SelectInputComponent from "./components/SelectInputComponent";
import RadioInputComponent from "./components/RadioInputComponent";

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
        <RadioInputComponent
          data={jobTypes}
          name="jobType"
          label="Categories"
          onChange={onChange}
          myRef={defaultCategoryRef}
        />
      ) : (
        <SelectInputComponent
          data={jobTypes}
          variant="category"
          label="Job Type"
          name="jobType"
          onChange={onChange}
        />
      )}
    </>
  );
};

export default CategoryInput;
