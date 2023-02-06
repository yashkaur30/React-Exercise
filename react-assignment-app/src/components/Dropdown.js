import NavigationItems from "./NavigationItems";

const Dropdown = ({ children}) => {
    return (
      <ul>
        {children.map((child, index) => (
          <li key={index}>
            <NavigationItems items={child} key={index} />
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;