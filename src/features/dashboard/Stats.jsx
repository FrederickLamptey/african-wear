import { formatCurrency } from '../../utils/helpers';
import Stat from './Stat';
import {
  HiMiniListBullet,
  HiOutlineBanknotes,
  HiOutlineChartBar,
  HiOutlineUser,
  HiOutlineUserCircle,
} from 'react-icons/hi2';



function Stats({ purchases, inventory }) {
  //number of purchases
  const numPurchases = purchases?.length;

  //sales made
  const sales = purchases?.reduce((acc, cur) => acc + cur?.itemPrice, 0);

  //Total number of female items available
  const femaleItems = inventory?.filter(
    (item) => item.department === 'female'
  ).length;

  //Total number of male items available
  const maleItems = inventory?.filter(
    (item) => item.department === 'male'
  ).length;

  //Total number of Items available
  const numInventory = inventory?.length;
  return (
    <>
      <Stat
        title="Purchases"
        color="red"
        icon={<HiOutlineChartBar />}
        value={numPurchases}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />

      <Stat
        title="Inventory"
        color="yellow"
        icon={<HiMiniListBullet />}
        value={numInventory}
      />

      <Stat
        title="Male Items"
        color="blue"
        icon={<HiOutlineUser />}
        value={maleItems}
      />

      <Stat
        title="female Items"
        color="black"
        icon={<HiOutlineUserCircle />}
        value={femaleItems}
      />
    </>
  );
}

export default Stats;
