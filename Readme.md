## Create React App Typescript configuration

```
npx create-react-app storefront --template typescript
```

![CRA Installation](https://user-images.githubusercontent.com/37651620/162574946-94a5a447-1103-4d17-adb9-27e9c87be41e.png)

### Installing few packages

```
npm install axios react-router-dom react-bootstrap bootstrap react-icons
```

or

```
yarn add axios react-router-dom react-bootstrap bootstrap react-icons
```

![installing packages](https://user-images.githubusercontent.com/37651620/162577546-d0e8e612-3cef-4068-8643-eeed5ca78fea.png)

![Installing packages](https://user-images.githubusercontent.com/37651620/162605020-4b2a415e-a257-4a96-87e1-6a031043c200.png)

![React Icons](https://user-images.githubusercontent.com/37651620/162605654-e99cb009-09e8-4c7c-9899-5238c63002a7.png)

After installing the `react-icons`, `react-bootstrap`, `bootstrap` ,`axios` and `react-router-dom` packages your `package.json` file of storefront/client should resemble something like this:

```json
{
  "name": "storefront",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.4.1",
    "@types/node": "^16.11.26",
    "@types/react": "^17.0.44",
    "@types/react-dom": "^17.0.15",
    "axios": "^0.26.1",
    "bootstrap": "^5.1.3",
    "react": "^18.0.0",
    "react-bootstrap": "^2.2.3",
    "react-dom": "^18.0.0",
    "react-icons": "^4.3.1",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.0",
    "typescript": "^4.6.3",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

### Cleanup Storefront Boilerplate

![Folder structure](https://user-images.githubusercontent.com/37651620/162579135-abcd875e-e255-40fe-aad5-c9779bda1478.png)

### Starting React application

```
npm start
```

![npm start](https://user-images.githubusercontent.com/37651620/162579081-aca91bd2-a431-480d-87df-7e53f60e2cd3.png)

## Medusa Store initialisation

```
medusa new server --seed
```

![Medusa Server](https://user-images.githubusercontent.com/37651620/162575613-9aedb5db-2209-4e54-97f5-96b9533692ff.png)

### Medusa Develop

```
medusa develop
```

![Medusa Develop](https://user-images.githubusercontent.com/37651620/162577000-e8e1f879-9336-42f4-90ff-b808cc3154c6.png)

### Accessing the products

```
http://localhost:9000/store/products
```

![accessing the products](https://user-images.githubusercontent.com/37651620/162577340-9ec42328-1086-49f7-9e3e-d6320594796d.png)

## Medusa Admin

### Cloning the Medusa Admin

```
git clone https://github.com/medusajs/admin admin
```

![Medusa Admin](https://user-images.githubusercontent.com/37651620/162576125-ab24f26e-058d-4a36-8c1d-297b139a9875.png)

### Installing dependencies required for admin

```
yarn install
```

![Installing packages](https://user-images.githubusercontent.com/37651620/162576701-1559d001-8647-4eb8-bbe9-fd9029740212.png)

### Starting Admin Pannel

![Admin Pannel](https://user-images.githubusercontent.com/37651620/162586690-eab9c8d6-b943-4dfa-b35f-bd999f73648c.png)

---

## Final Demo

![Admin Login](https://user-images.githubusercontent.com/37651620/162609954-6f3b0501-0873-4789-8331-cd559f309a28.png)

![Products Demo](https://user-images.githubusercontent.com/37651620/162609958-004471ae-e865-46c0-b831-c503558e67d7.png)

![Products Dashboard](https://user-images.githubusercontent.com/37651620/162609960-7b3e75c7-103b-496d-ac9b-cf04d6bf6565.png)

![Demo](https://user-images.githubusercontent.com/37651620/162608505-762873f3-e03c-4e02-ab6b-d2021371a147.png)
