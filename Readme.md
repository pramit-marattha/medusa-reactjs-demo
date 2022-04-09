## Create React App Typescript configuration

```
npx create-react-app storefront --template typescript
```

![CRA Installation](https://user-images.githubusercontent.com/37651620/162574946-94a5a447-1103-4d17-adb9-27e9c87be41e.png)

### Installing few packages

```
npm install axios react-router-dom
```

![installing packages](https://user-images.githubusercontent.com/37651620/162577546-d0e8e612-3cef-4068-8643-eeed5ca78fea.png)

After installing the `axios` and `react-router-dom` packages your `package.json` file of storefront/client should resemble somthing like this:

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
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
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
