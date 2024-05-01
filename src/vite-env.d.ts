/// <reference types="vite/client" />

type MyDate = {
  year: number;
  month: number;
  day: number;
};

type MyJobType = {
  id: string;
  job: string;
};

type MyCities = {
  id: string;
  city: string;
};

type Activity = {
  id: string;
  title: string;
  description: string;
  organisation: string;
  date: string;
  location: string;
  [key: string]: any;
};

type Volunteer = {
  id: string;
  name: string;
  surname: string;
  mobile: string;
  jobType: MyJobType;
  location: MyCities;
  workExperience: boolean;
};

type Organisations = {
  id: string;
  organisationName: string;
  adress: string;
  city: MyCities;
};
