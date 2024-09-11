"use client";

import { FunctionComponent, useState } from "react";
import styles from "./left-navigation-menu.module.css";
import Image from "next/image";
import SearchDropdown from "../search-dropdown/search-dropdown";
import CategoryDrodown from "../../containers/category-dropdown/category-dropdown";

interface Category {
  _id: string;
  name: string;
  subcategories: SubCategory[];
}

interface SubCategory {
  _id: string;
  name: string;
  parentCategory: string;
}

const LeftNavigationMenu: FunctionComponent<{ categories: Category[], isOffset: boolean, navbarHover:boolean }> = ({
  categories,
  isOffset,
  navbarHover
}) => {

    const [isShowLeftMenu, setIsShowLeftMenu] = useState<boolean>(false);

    const handleLeftMenu = () =>{
        setIsShowLeftMenu(!isShowLeftMenu);
    }

  return (
    <>
      <div className={styles.root}>
        <div className={styles.sideMenuContainer}>
          <Image src={`${(isOffset || navbarHover) ? '/menu-dark.png' : '/menu-light.png'}`} alt="menu icon" width={25} height={25} onClick={handleLeftMenu}/>
          <SearchDropdown isOffset={isOffset} navbarHover={navbarHover}/>
        </div>
        <CategoryDrodown categories={categories} isShowLeftMenu={isShowLeftMenu} isOffset={isOffset} navbarHover={navbarHover} handleLeftMenu={handleLeftMenu} />
      </div>
    </>
  );
};

export default LeftNavigationMenu;