# Project Ramuh front-end

This repository contains the Single Page Application front-end of Project Ramuh.

This project is a work in progress. For more information about Project Ramuh in general, please refer to the [project prologue post](https://murgeyseb.github.io/project/ramuh/2020/04/23/project-ramuh-prologue.html).

## Features

This application draws a simple graphical representation of a grid model, on a map.

To import a grid model, drag and drop a grid file on the map. Countries which grid is described in the file are then emphasized by an overlay on the map.

![Example of overlay on Nordic32 example file](/doc/images/nordic32-overlay.png)
*Example of overlay on Nordic32 example file*

## Building the app

Start by downloading project sources:

```bash
git clone https://github.com/murgeyseb/ramuh-front.git
```

Create and initialise a **.env** file in main project directory:

```bash
cd ramuh-front
echo "REACT_APP_RAMUH_GRID_OVERLAY_PROVIDER_URL=http://localhost:8080/overlay" >> ".env"
```

For more information about project configuration, see "Configuring the app".

Finally, start the app using **npm**:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

When running locally, do not forget to enable CORS in yout browser, to allow communication between the application and the back-end components.

## Configuring the app

Following environment variables can/must be set in the project **.env** file.

| Variable name | Mandatory | Description |
| --- | --- | --- |
| REACT_APP_RAMUH_GRID_OVERLAY_PROVIDER_URL | Yes | Grid overlay provider URL. See [ramuh-grid-overlay-provider](https://github.com/murgeyseb/ramuh-grid-overlay-provider) |
| REACT_APP_INITIAL_MAP_CENTER_LAT | No | Initial latitude of the center of the map |
| REACT_APP_INITIAL_MAP_CENTER_LNG | No | Initial longitude of the center of the map |
| REACT_APP_INITIAL_MAP_ZOOM | No | Initial zoom of the map |