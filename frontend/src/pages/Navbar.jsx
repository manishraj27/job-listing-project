
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Find Jobs</span>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-8">
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm">
                  For job seekers
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm">
                  For employers
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm">
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-blue-600">
              Post a job
            </Button>
            <Button variant="default" className="bg-blue-600">
              Sign up
            </Button>
            <Button variant="ghost">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;