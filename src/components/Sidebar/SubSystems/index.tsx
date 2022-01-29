import { Link } from "react-router-dom";
import "./styles.scss";

const SubSystems = () => {
  const subNav = [
    {
      title: "Quản lý vai trò",
      route: "/setting-system/role",
    },
    {
      title: "Quản lý tài khoản",
      route: "/setting-system/account",
    },
    {
      title: "Nhật ký người dùng",
      route: "/setting-system/diary",
    },
  ];
  return (
    <>
      {subNav ? (
        <ul className="navbar">
          {subNav.map((item, index) => {
            return (
              <li className="items" key={index}>
                <Link to={item.route} className="link">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default SubSystems;
