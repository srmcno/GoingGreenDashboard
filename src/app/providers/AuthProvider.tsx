import { PublicClientApplication, Configuration } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

const msalConfig: Configuration = {
  auth: {
    clientId: "34b1cf69-6add-4d0c-a476-2d186f168e35",
    authority: "https://login.microsoftonline.com/47179c27-f1cb-43d2-b074-77f138da7144",
    redirectUri: "http://localhost:5173",
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => (
  <MsalProvider instance={msalInstance}>{children}</MsalProvider>
);
