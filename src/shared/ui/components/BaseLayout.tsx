import { Button } from "@/lib/components/ui/button";
import { Separator } from "@/lib/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/lib/components/ui/sidebar";
import AppSidebar2 from "@/shared/ui/components/AppSidebar";
import { useState } from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const BaseLayout = ({ title = "Test", children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <AppSidebar2 isOpen={open} />
      <div className="flex flex-col w-full px-4">
        <header>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 py-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 !h-4" />
              <h1>{title}</h1>
            </div>
            <div className="flex gap-4">
              <Button variant={"outline"}>Mettre en pause le tri</Button>
              <Button>Validation automatique</Button>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default BaseLayout;
