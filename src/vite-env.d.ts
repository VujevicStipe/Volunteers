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

type Rating = {
  grade: number;
  name: string;
  surname: string;
  comment: string;
}

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
  description: string;
  mobile: string;
  jobType: string;
  location: string;
  workExperience: boolean;
  gender: string,
  userImg: string;
};

type VolunteerForJob = {
  name: string;
  surname: string;
  gender: string;
  userImg: string;
}

type Organisations = {
  id: string;
  organisationName: string;
  adress: string;
  city: MyCities;
};
