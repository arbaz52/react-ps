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

## Router

A router is a react component responsible for managing sub-routes and the route itself. Following is the file/folder structure:

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
