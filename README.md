# react-ps

`react-ps` is an example react-app for a proposed React.js application's project structure. The document is currently under developement but will be available soon for inspiration.

## Component

A component is a react component responsible for the visuals following the file/folder structure:

```
.
|-- NewsLetter
    |-- index.tsx
    |-- index.styled.ts
    |-- container.tsx
    `-- components/
        |-- UserInformation/ (follows the component's file structure)
```

### What does it contain?

- `index.tsx` contains the component itself. It should be exported as default. The name of the component matches the folder name it is contained in. In the above example, the file will

  ```js
  export default NewsLetter;
  ```

- `index.styled.ts` will contain & export all the `styled-components` to be used by the component.
- `container.tsx` will contain business logic, i.e. sending the user's email to server, accessing context API or redux store. This way the component will not be polluted with business logic making it re-usable. It will export the container component which will be the same name as the component followed by the suffix `Container` i.e.

  ```js
  export default NewsLetterContainer;
  ```

- `components/` will contain components used by the component under discussion.

### How to use a `Component`?

If a component requires another component, it should create a folder (name should be the same as the component that is required) inside its `components/` directory. The folder should now follow the same structure but with a slight twist.

Rather than creating a component from scratch and then exporting it, the already existing component that is required should be imported and then exported as default i.e.

```js
/** inside index.tsx file of UserInformation */
import UserInformation from "components/UserInformation";
export default UserInformation;
```

If we need to add business logic before this component can be used, we need to create a `container.tsx` file which will then use the component and add business logic. It will then export this container as default. i.e.

```js
export default UserInformationContainer;
```

## Route

A route is a react component responsible for managing sub-routes and the route itself. The name will be the **route's name** + `'Route'` (as suffix).

### Naming Convention

| Human Readable  | URL/URI (Kebab Case)             | Route                 | Route's Component |
| --------------- | -------------------------------- | --------------------- | ----------------- |
| User Management | `user-management`                | `UserManagementRoute` | `UserManagement`  |
| Create Account  | `user-management/create-account` | `CreateAccountRoute`  | `CreateAccount`   |

Following is the file/folder structure:

```
.
|-- HomeRoute/
    |-- index.tsx
    |-- component/ (follows the component's file structure)
    |   |-- index.tsx
    |   |-- container.tsx
    |   |-- index.styled.ts
    |   ...
    `-- routes/
        |-- AboutRoute/ (follows the route's file structure)
        |   |-- component/ (follows the component's file structure)
        |   |   |-- index.tsx
        |   |   ...
        |   `-- index.tsx
        `-- ContactRoute/ (follows the route's file structure)
            |-- component/ (follows the component's file structure)
            |   |-- index.tsx
            |   ...
            `-- index.tsx
```

### What does it contain?

- `index.tsx` contains the component that manages routing, this includes accessing route parameters, managing sub-routes and rendering of the route itself. The component name will be the same as the folder name i.e. `AboutRoute` and will be exported as default.

  ```js
  export default AboutRoute;
  ```

- `component/` directory will hold the component that will be rendered on the route/url. It will follow the component's file structure excluding naming of the folder. The component will be named after the route name **(excluding the `Route` suffix)** i.e. the component of `AboutRoute` will be `About`.

  ```js
  export default About;
  ```

- `routes/` directory will hold the Route components of the sub-routes. The Route components will follow the Route's file structure.
