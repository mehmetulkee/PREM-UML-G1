import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";
import { Navbar } from "@/components/layout/navbar";
import StandingsPage from "@/pages/standings-page";
import MatchesPage from "@/pages/matches-page";
import StatsPage from "@/pages/stats-page";
import AddMatchPage from "@/pages/add-match-page";
import AuthPage from "@/pages/auth-page";
import NotFound from "@/pages/not-found";
import { ProtectedRoute } from "./lib/protected-route";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={StandingsPage} />
        <Route path="/standings" component={StandingsPage} />
        <Route path="/matches" component={MatchesPage} />
        <Route path="/stats" component={StatsPage} />
        <ProtectedRoute path="/matches/add" adminOnly>
          <AddMatchPage />
        </ProtectedRoute>
        <Route path="/auth" component={AuthPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
