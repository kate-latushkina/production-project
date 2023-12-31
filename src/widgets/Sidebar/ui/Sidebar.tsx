import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { memo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { SidebarItemsList } from "../model/items";
import { SidebarItem } from "./SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className = "" }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = (): void => {
    setCollapsed(prev => !prev);
  };

  return (
      <div
          data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button
              data-testid="sidebar-toggle"
              onClick={onToggle}
              className={cls.collapsedBtn}
              square
              size={ButtonSize.L}
              theme={ButtonTheme.BACKGROUND_INVERTED}
              >
              {collapsed ? ">" : "<"}
          </Button>
          <div className={cls.items}>
              {SidebarItemsList.map((item) => (
                  <SidebarItem
                      key={item.path}
                      item={item}
                      collapsed={collapsed}
                  />
              ))}
          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher/>
              <LangSwitcher short={collapsed} className={cls.lang}/>
          </div>
      </div>
  );
});
