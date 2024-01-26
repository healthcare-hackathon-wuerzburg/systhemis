# HealConnect

## Problemstellung

During the COVID-19 pandemic, cancer patients were harshly affected by the lockdown.
Unable to visit doctors on demand and without the option to attend physical checkups,
a modern solution for communication with their preferred practitioner was needed.

## Idea

A conducted study showed that despite the high average age of head and neck cancer 
patients, they are open to a digital solution.

So, we developed an app for the German market. For ease of use, we decided to develop
a progressive web app. This allows for use on both home computers and mobile devices.

The app includes a symptom diary, an information center, and allows a patient to share 
their entered data with their practitioner. This can help both the patient and the
practitioner schedule appointments on demand.

## Getting Started

To allow further development on this project, please follow the steps in the sections
["Requirements"](#Requirements) and ["Installation."](#Installation)

### Requirements

Please make sure that you have already installed the following Programs.

- Node Version Manager

Alternative:
- Node v20.11.0 
- Npm 10.2.4

### Installation

1) Clone the repository:

       `git clone https://github.com/healthcare-hackathon-wuerzburg/systhemis.git`

2) Using the correct npm and Node Version:

   If you are using Node Version Manager, as described in Section ["Requirements"](#Requirements), 
 please run the following command first. This will install the correct Node and
 Npm version. Note that the script will ask you for administrative access to 
 finish the installation.

       `.\.setup\a-EnvVariable.bat`

    If you are using a manual installation of Node and npm, please make sure you are using the versions described in the ["Requirements Section."](#Requirements)

3) Navigate into the project directory (Assuming you cloned it into the default folder):

       `cd systhemis/frontend`

4) Install dependencies:

       `npm install`

5) Start the development server:

       `npm run dev`
6) Open your web browser and visit http://localhost:4200.

## How to use the Project 

Describe, how someone can work with the developed application / library. How can I access basic functionality, ...

## Deployment

Describe, how the project can be deployed (if necessary). How can i spin up a docker container that executes something, how can i move the containers to a server, how can I use the trained ML model, ... (if applicable in your project context).

## Project Overview

Describe how the project is structured. Describe the architecture and the main components (if necessary) and the interaction between these components.

## How to Contribute

Describe, how new team members can contribute to the existing repository, like:

1) clone the repository
2) work on a dedicated branch for your feature `git branch -b feature_name`
3) create a pull request for the feature and document the changes accordingly
4) you have to write tests in order to get your PR merged
5) send changes against `main` branch

## Additional Information

Are there any additional information that are important to understand how this code works?

## Useful links:

- [Most common Git commands](https://rogerdudler.github.io/git-guide/index.de.html)
- [How to create a GitHub Release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)
