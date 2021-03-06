import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store'


//home
import HomePage from "../views/HomePage.vue";

// Devis 
import Devis from "../views/subLayouts/Devis.vue";
import CreateDevis from "./../components/Devis/createDevis.vue";
import listDevis from "./../components/Devis/listDevis.vue";

//clients
import Clients from "@/views/subLayouts/Clients.vue";
import addClient from "../views/ClientContainer.vue";
import cards from "../components/Clients-page/cards.vue";
import Type_client from "@/components/Clients-page/Type_client.vue";
import Information_Compte from "../components/Clients-page/Information_Compte.vue";

//Facture
import factureAcompte from "../components/setings/factureAcompte.vue";

//Avoire
import avoirAcompte from "../components/setings/avoirAcompte.vue";

// Societe 
import AddSociete from '../components/client/AddSociete.vue'

//settings
import homeSeting from "../views/setings/homeSeting.vue";
import preference from "../components/setings/preference.vue";
import TypeArticles from './../components/setings/TypeArticles.vue'
import devisRef from "../components/setings/devisRef.vue";
import factureRef from "../components/setings/factureRef.vue";
import avoirRef from "../components/setings/avoirRef.vue";
import numerotation from "../components/setings/numerotation.vue";
import newArticle from '@/components/setings/newArticle.vue';

//register/login
import GateLayout from "../views/subLayouts/GateLayout.vue";
import Register from "../views/Authentification/Signup.vue";
import Login from "../views/Authentification/Login.vue";

import TheExportDevis from "../components/Devis/TheExportDevis.vue"
import TheCalendarDevis from "../components/Devis/TheCalendarDevis.vue"
import TheRefusDevis from "../components/Devis/TheRefusDevis.vue"

// testing for fixing sideBar

// import Sidebar from "../components/Sidebar.vue";
// import Navbar from "../components/Navbar.vue";



// comments
// import listClient from "../components/client/listClient.vue";
// import signupThree from "../components/Authentification/signupThree.vue";
// import singupFour from "../components/Authentification/singupFour.vue";
// import sigupfive from "../components/Authentification/signupfive.vue";

/**
 * End Of Imports
 */

Vue.use(VueRouter);

const routes = [
  {

    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "devis",
        // name: "Devis",
        component: Devis,
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: "",
            name: "Devis",
            component: listDevis,
            meta: {
              requiresAuth: true
            },
          },
          {
            path: "new",
            name: "NewDevis",
            component: CreateDevis,
            meta: {
              requiresAuth: true
            },

          }
        ]
      },
      {
        path: "client",
        // name: "Client",
        component: Clients,
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: "",
            name: "Client",
            component: cards,
            meta: {
              requiresAuth: true
            },
          },
          {
            path: "Type_client",
            name: "Type_client",
            component: Type_client,
            meta: {
              requiresAuth: true
            },
          },
          {
            path: "Information_Compte",
            name: "Information_Compte",
            component: Information_Compte,
            meta: {
              requiresAuth: true
            },
          },
          {
            path: 'new',
            name: "NewClient",
            component: addClient,
            meta: {
              requiresAuth: true
            },
          },
          {
            path: ":id",
            name: "SingleClient",
            meta: {
              requiresAuth: true
            },
          }
        ]
      },
      {
        path: "facture",
        name: "Facture",
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'facture/new',
        name: "NewFacture",
        meta: {
          requiresAuth: true
        },
      },


      {
        path: "avoire",
        name: "Avoire",
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'avoire/new',
        name: "NewAvoire",
        meta: {
          requiresAuth: true
        },
      },

      {
        path: "societe",
        name: "Societe",
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'Societe/new',
        name: "NewSociete",
        component: AddSociete,
        meta: {
          requiresAuth: true
        },
      },
    ]
  },


  // parameters 
  {
    path: "/settings",
    name: "Settings",
    component: homeSeting,
    redirect: { name: "Preferences" },
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "preferences",
        name: "Preferences",
        component: preference,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "preferences/devis",
        name: "DevisPreferences",
        component: devisRef,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "preferences/facture",
        name: "FacturePreferences",
        component: factureRef,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "preferences/avoire",
        name: "AvoirePreferences",
        component: avoirRef,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "preferences/avoire-acompte",
        name: "AvoireAcomptePreferences",
        component: avoirAcompte,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "preferences/facture-acompte",
        name: "FactureAcomptePreferences",
        component: factureAcompte,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "preferences/numerotation",
        name: "NumerotationPreferences",
        component: numerotation,
        meta: {
          requiresAuth: true
        },
      },
      // articles 
      {
        path: "type-articles",
        name: "TypeArticles",
        component: TypeArticles,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "type-articles/new",
        name: "NewTypeArticles",
        component: newArticle,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "bank-accounts",
        name: "BackAccounts",
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "user-contact",
        name: "UserContact",
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "user",
        name: "User",
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "delete-account",
        name: "DeleteAccount",
        meta: {
          requiresAuth: true
        },
      }
    ]
  },


  {
    path: "/Gate",
    name: "Gate",
    component: GateLayout,
    redirect: "gate/login",
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: "login",
        name: "Login",
        component: Login
      },
      {
        path: "signup",
        name: "Signup",
        component: Register
      }
    ]
  },
  {
    path: "/devis-calandar",
    name: "devisCalandar",
    component: TheCalendarDevis,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "/devis-refus",
    name: "devisCalandar",
    component: TheRefusDevis,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "/devis-export",
    name: "devisExport",
    component: TheExportDevis,
    meta: {
      requiresAuth: true
    },

  },
  {
    path: "*",
    name: "NotFound",
    redirect: { name: "Home" },
    meta: {
      requiresAuth: false
    },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/gate/login')
  } else {
    if (store.getters.isLoggedIn) {
      next('/devis/new');
    }
    next()
  }
})

export default router;
