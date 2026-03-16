import { useQuery } from '@tanstack/react-query';
import { useMsal } from "@azure/msal-react";

export const useDashboardSnapshot = () => {
  const { instance, accounts } = useMsal();

  return useQuery({
    queryKey: ['dashboard-snapshot'],
    queryFn: async () => {
      // Get the silent token (no popup for the user)
      const response = await instance.acquireTokenSilent({
        scopes: ["user.read"], // Ensure this matches the permission you granted in Azure
        account: accounts[0]
      });

      // Fetch with the "Bearer" token
      const res = await fetch(import.meta.env.VITE_DASHBOARD_API_URL, {
        headers: {
          'Authorization': `Bearer ${response.accessToken}`
        }
      });
      
      if (!res.ok) throw new Error('Failed to fetch data');
      return res.json();
    },
    // Only attempt to fetch if the user is actually signed in
    enabled: accounts.length > 0 
  });
};
