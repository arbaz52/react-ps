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
