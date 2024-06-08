# Volunteers Website

## Overview

The Volunteers Website is a platform designed to facilitate volunteer activities. Users can view a list of activities, sign up for them, and add new activities. The website also includes a section for displaying volunteers where users can leave reviews and ratings. Additionally, there is an organization page where users can submit organizations for approval or deletion by an administrator. Administrators have the ability to add volunteers available for volunteering.

![Showcase](.public/assets/VolunteersMockup.png)

## Technologies Used

- **React**
- **TypeScript**
- **CSS**
- **HTML**
- **JSON Server**
- **Axios** for server communication
- **React Router** for navigation

## Features

- **Activity List**: Users can view a list of available volunteer activities and sign up for them.
- **Add Activities**: Users can add new volunteer activities to the list.
- **Volunteer Reviews**: Users can view volunteers and leave reviews and ratings.
- **Organization Page**: Users can submit organizations for administrator review. Administrators can approve or delete organizations.
- **User and Admin Management**: User and admin roles are managed using `useContext`, allowing role changes via button clicks. Admins have the ability to delete, edit, and approve organizations, as well as add volunteers who are available for volunteering. Regular users can perform all other actions.

## Communication with Server

The application communicates with a JSON Server for data management using Axios, which includes:

- **Adding Data**: Users can add new activities and organizations.
- **Fetching Data**: The website fetches the list of activities, volunteers, and organizations from the server.
- **Deleting Data**: Users and administrators can delete activities and organizations.
- **Editing Data**: Users can edit the details of activities and organizations.

## Hosting

- **Website**: The website is hosted on Netlify at [https://reliable-capybara-596906.netlify.app/](https://reliable-capybara-596906.netlify.app/).
- **JSON Server**: The JSON Server is hosted on Render at [https://volunteers-jsonserver.onrender.com/](https://volunteers-jsonserver.onrender.com/).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
