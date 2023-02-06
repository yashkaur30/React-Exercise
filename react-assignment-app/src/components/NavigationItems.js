import Dropdown from './Dropdown';

const NavigationItems = ({ items }) => {
  return (
    <li>
      {items.children ? (
        <>
            {items.name}{' '}
          <Dropdown children={items.children} />
        </>
      ) : (
        <div>{items.name}</div>
      )}
    </li>
  );
};

export default NavigationItems;