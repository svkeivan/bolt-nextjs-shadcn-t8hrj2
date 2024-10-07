import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BarChart2, PieChart, Settings, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart2 },
  { name: "Strategy 1", href: "/dashboard/strategy-1", icon: PieChart },
  { name: "Strategy 2", href: "/dashboard/strategy-2", icon: PieChart },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-gray-800 text-white w-64">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Option Trading</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} passHref>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href && "bg-gray-700"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-400"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}