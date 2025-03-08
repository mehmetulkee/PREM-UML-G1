import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, BarChart2, Plus } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();

  const navItems = [
    { href: "/standings", label: "League Table", icon: Trophy },
    { href: "/matches", label: "Matches", icon: Calendar },
    { href: "/stats", label: "Statistics", icon: BarChart2 },
  ];

  if (user?.isAdmin) {
    navItems.push({ href: "/matches/add", label: "Add Match", icon: Plus });
  }

  return (
    <nav className="bg-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-xl font-bold">Football League</a>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors
                    ${location === item.href
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                    }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {user.username}
                </span>
                <Button
                  variant="ghost"
                  onClick={() => logoutMutation.mutate()}
                  disabled={logoutMutation.isPending}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link href="/auth">
                <a>
                  <Button>Login</Button>
                </a>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex overflow-x-auto gap-2 pb-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors whitespace-nowrap
                  ${location === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                  }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
