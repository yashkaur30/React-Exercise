import NavigationItems from "./NavigationItems";


const Navbar = ({navItems}) => {
  return (
        <nav>
          <ul>
            {navItems.map((item, index) => {
              return <NavigationItems items={item} key={index} />;
            })}
          </ul>
        </nav>
      );


};

export default Navbar;