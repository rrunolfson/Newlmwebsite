import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./pages/HomePage";
import { WhyLastMilePage } from "./pages/WhyLastMilePage";
import { WhatWeDoPage } from "./pages/WhatWeDoPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { PartnersPage } from "./pages/PartnersPage";
import { OEMsPage } from "./pages/OEMsPage";
import { CompanyPage } from "./pages/CompanyPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "what-we-do", Component: WhatWeDoPage },
      { path: "industries", Component: IndustriesPage },
      { path: "partners", Component: PartnersPage },
      { path: "oems", Component: OEMsPage },
      { path: "why-last-mile", Component: WhyLastMilePage },
      { path: "company", Component: CompanyPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFound },
    ],
  },
]);