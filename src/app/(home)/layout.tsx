import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <HomeLayout>
      <div>123</div>
      <div>{children}</div>
    </HomeLayout>
  );
};

export default Layout;
