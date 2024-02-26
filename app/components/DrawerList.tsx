import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const DrawerList = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* Add additional navigation options here */}
    </DrawerContentScrollView>
  );
};

export default DrawerList;