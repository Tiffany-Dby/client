import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/lib/components/ui/sidebar";
import { AppRoutes } from "@/shared/types/Routes";
import { MenuItem } from "@/shared/types/Sidebar";
import { LayoutDashboardIcon, SettingsIcon } from "lucide-react";
import { Link, useLocation } from "react-router";

interface Props {
  isOpen: boolean;
}

const AppSidebar = ({ isOpen }: Props) => {
  const location = useLocation();

  const menuItems: MenuItem[] = [
    {
      title: "Tableau de bord",
      icon: LayoutDashboardIcon,
      subItems: [
        {
          title: "Aperçu",
          url: AppRoutes.home,
        },
        {
          title: "Bloqué",
          url: AppRoutes.emailRemove,
        },
        {
          title: "Historique",
          url: AppRoutes.dashboardLogs,
        },
      ],
    },
    {
      title: "Paramètres",
      url: AppRoutes.settings,
      icon: SettingsIcon,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div
          className={`min-w-8 rounded-md bg-white p-1 ${
            isOpen ? "max-h-16" : "max-h-8 max-w-8"
          }`}
        >
          <img
            src={
              isOpen
                ? "https://www.camarol.com/wp-content/uploads/CAMAROL_fabricant-de-volets-roulant-de-maison-et-volet-de-piscine_logo_blanc.webp"
                : "https://www.camarol.com/wp-content/uploads/cropped-Favicon-32x32.jpg"
            }
            alt="Logo Camarol"
            className="w-full max-w-full h-full max-h-full object-cover rounded-md"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Emails</SidebarGroupLabel>
          <SidebarGroupContent>
            {menuItems.map((item) => (
              <SidebarMenu key={item.title}>
                {!item.subItems ? (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.url}
                    >
                      <Link to={item.url!}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : (
                  <>
                    <SidebarMenuButton
                      className="hover:bg-transparent"
                      isActive={item.subItems.some(
                        (subitem) => location.pathname === subitem.url
                      )}
                    >
                      {item.icon && <item.icon />}
                      {item.title}
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      {item.subItems.map((subitem) => (
                        <SidebarMenuSubItem key={subitem.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={location.pathname === subitem.url}
                          >
                            <Link to={subitem.url}>{subitem.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </>
                )}
              </SidebarMenu>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
