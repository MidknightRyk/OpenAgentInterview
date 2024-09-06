# Intro

Hello! This is my submission for the interview exercise for OpenAgent. This app contains a total of four pages:

- Landing page
- Contact Us information and form
- Contacts List
- Thank you page on successful form submission

This was all build using

- React.js for the client end
- Express.js for the server end
- SQLite for the db.
- Tailwind for CSS
- Prettier for code formatting
- Font Awesome for icons

This app was build in VSCode and runs successfully on my Ubuntu 24.04 system. I have not tested it on Windows or Mac, but it should work fine. Please let me know if there are any issues and I'll do my best to fix it ASAP!

I hope you enjoy playing around with the app!

## Run the App

Clone the repo either using the below command in your terminal or your preferred method.

```
cd <directory you want to clone the repo to>
git clone https://github.com/<Your-Github-Username>/OpenAgentInterview.git
```

The ports the App listens to are:

- Client: `3000`
- Server: `8080`

### Running using Docker

The app is fully compatible with Docker Desktop on Linux.

1. Navigate to `root` of the app

2. Run the below command on your terminal to build the images and automatically run the container:

```
docker compose up -d
```

3. if there are no errors, the homepage is now accessible on `http://localhost:3000/`!

### Running manually

Since this app has both a client and server side, you will need 2 terminals to run each instance.

#### Terminal 1 (server)

1. Navigate to the `server` folder
2. Run the below command in the terminal:

```
node src/index.js
```

3. When you see the line below, the server terminal is good to go:

```
server listening on port 8080
```

#### Terminal 2 (client)

1. Navigate to the `client` folder
2. Run the below command

```
npm run start
```

3. When you see the line below (your network ip might be different), the client terminal is good to go:

```
You can now view client. in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.20.10.4:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

On your browser, navigate to `http://localhost:3000/` and you will arrive at the homepage!

## Usage

### Landing Page

This will be the first page you see, you can either use the buttons on the page or on the header to take you to both the `Contact Us` or `Contacts List` page.

### Contact Us Page

This page will have both the required information along with the contact us form.

The form has the below validations and error handling:

- The `Submit` button will be disabled until all required fields are filled in and all validations have passed.
- First Name cannot be blank
- Last Name cannot be blank
- Phone number cannot be blank
- Phone number must be numerical
- Email cannot be blank
- Email must be a correct format with at least one `@` and `.`
  If any of the above fields don't pass validation, red text will appear above the fields alerting the user.

If the API fails to return a `200` success status, a red text informing the user that their form failed to be submitted.

If the form is successfully submitted, the user will be redirected to the `Thank you` page

### Thank you Page

This page is just to inform the user that their form has been successfully submitted. There is also a button that will redirect them back to the `Landing Page`

### Contacts List Page

This page has a table displaying all the information collected in the `Contact Us` form along with the ID and two buttons to `Verify` and `Delete` a row/contact.

The delete button will prompt the user to confirm deletion.

Both the buttons will alert the user if successful.

### Header

The header contains 4 clickable components.

- The OpenAgent logo and `Home` button when clicked will redirect the user to the `Landing Page`
- The `Contact Us` button will redirect the user to the `Contact Us` page
- The `Contact List` button will redirect the user to the `Contact List` page.

### Footer

The footer is a rough replica of the actual footer on the `https://www.openagent.com.au/` and all links and icons are copied from the real footer as well and will lead the users out of the app to actual websites.

## Endnote

Please feel free to contact me if you'd like to have a further chat about the app or anything else! I welcome any feedback and would love to hear back from you!

Thanks for taking a look at my submission and hope you have a great week/weekend ahead!
