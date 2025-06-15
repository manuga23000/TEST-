import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        elements: {
          // Ocultar el logo de Clerk
          headerTitle: "MANUGAX",
          headerSubtitle: "Inicia sesión en tu cuenta",
        },
        layout: {
          logoImageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJrsbtWFP2-wmeUCL8Fs4q77uoUGPMQg9xw&s", // Tu logo personalizado
          logoLinkUrl: "/",
        },
      }}
    />
  );
}
