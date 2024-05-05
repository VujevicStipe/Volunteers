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
  id: string;
  grade: number;
  name: string;
  surname: string;
  comment: string;
};

type Activity = {
  id: string;
  title: string;
  jobType: string;
  description: string;
  organisation: string;
  date: string;
  location: string;
  [key: string]: any;
  image: string;
  volunteersForActivity: VolunteerForJob[];
};

type Volunteer = {
  id: string;
  name: string;
  surname: string;
  description: string;
  contactNumber: string;
  jobType: string;
  location: string;
  workExperience: boolean;
  gender: string;
  userImg: string;
  volunteerRating: Rating[];
};

type VolunteerForJob = {
  id: string;
  name: string;
  surname: string;
  gender: string;
  userImg: string;
};

type Organisation = {
  id: string;
  organisationName: string;
  adress: string;
  location: string;
};
