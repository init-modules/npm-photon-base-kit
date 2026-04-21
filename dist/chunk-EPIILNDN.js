import {
  marketingDemoDesignPresets
} from "./chunk-UMLVE55O.js";

// src/documents.ts
import {
  cloneWebsiteBuilderValue as cloneWebsiteBuilderValue3,
  setValueAtPath
} from "@init-modules/website-builder/server";
import { applyWebsiteBuilderSiteDesignPreset } from "@init-modules/website-builder/shared";

// src/profile-presets/preset-scenarios.ts
import {
  cloneWebsiteBuilderValue as cloneWebsiteBuilderValue2
} from "@init-modules/website-builder/server";

// src/profile-presets/init-landing-content.ts
var initLandingContent = {
  header: {
    brandLabel: "init",
    homeHref: "/",
    navItems: [
      { label: "\u0424\u043E\u0440\u043C\u0430\u0442\u044B", href: "#services" },
      { label: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430", href: "#why-us" },
      { label: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C", href: "#pricing" },
      { label: "\u042D\u0442\u0430\u043F\u044B", href: "#process" }
    ],
    cta: {
      label: "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0441\u0430\u0439\u0442",
      href: "#contact"
    }
  },
  hero: {
    badge: "\u0421\u0430\u0439\u0442\u044B \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0435\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438",
    title: "\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u0441\u0430\u0439\u0442\u044B",
    highlightedTitle: "\u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u0440\u043E\u0441\u0442",
    supportingTexts: [
      "\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u0441\u0430\u0439\u0442\u044B \u0434\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432 \u0442\u0440\u0451\u0445 \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u0445: \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u0441\u0431\u043E\u0440\u043A\u0430 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430.",
      "\u041F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0434 \u0432\u0430\u0448 \u0431\u044E\u0434\u0436\u0435\u0442, \u0441\u0440\u043E\u043A\u0438 \u0438 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043F\u0440\u043E\u0434\u0430\u0436, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0437\u0430 \u043B\u0438\u0448\u043D\u0435\u0435.",
      "\u041E\u0442 \u043B\u0435\u043D\u0434\u0438\u043D\u0433\u043E\u0432 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u0430\u0439\u0442\u043E\u0432 \u0434\u043E \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u043E\u0432 \u0443\u0441\u043B\u0443\u0433, \u0441 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0439 \u0441\u0431\u043E\u0440\u043A\u043E\u0439 \u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u043C."
    ],
    primaryCta: {
      label: "\u041F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442",
      href: "#pricing"
    },
    secondaryCta: {
      label: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438",
      href: "#services"
    },
    leadCapture: {
      placeholder: "+1 555 123 4567",
      buttonLabel: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      helperText: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043D\u043E\u043C\u0435\u0440, \u0438 \u043C\u044B \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0435\u043C, \u043A\u0430\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u0430\u0439\u0442\u0430 \u043F\u043E\u0434\u043E\u0439\u0434\u0451\u0442 \u043F\u043E\u0434 \u0432\u0430\u0448\u0443 \u0437\u0430\u0434\u0430\u0447\u0443."
    },
    featurePills: [
      { icon: "layoutTemplate", label: "\u041B\u0435\u043D\u0434\u0438\u043D\u0433\u0438 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435" },
      { icon: "packageCheck", label: "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F" },
      { icon: "blocks", label: "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u043C\u043E\u0434\u0443\u043B\u0435\u0439" },
      { icon: "wandSparkles", label: "Custom-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430" }
    ],
    stats: [
      { value: 14, suffix: "+", label: "\u041B\u0435\u0442 \u0432 digital-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435" },
      { value: 4, suffix: "", label: "\u0422\u0438\u043F\u0430 \u0441\u0430\u0439\u0442\u043E\u0432 \u0432 \u043B\u0438\u043D\u0435\u0439\u043A\u0435" },
      { value: 3, suffix: "", label: "\u0424\u043E\u0440\u043C\u0430\u0442\u0430 \u0437\u0430\u043F\u0443\u0441\u043A\u0430" },
      { value: 100, suffix: "%", label: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0431\u043E\u0440\u043A\u0438" }
    ]
  },
  services: {
    sectionId: "services",
    eyebrow: "\u0427\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C",
    title: "\u041E\u0434\u0438\u043D \u0432\u0438\u0437\u0443\u0430\u043B, \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0432 \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0441\u0430\u0439\u0442\u0430",
    description: "\u0412\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0433\u043B\u0443\u0431\u0438\u043D\u0443 \u043A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u043E\u0434 \u0441\u0432\u043E\u044E \u0437\u0430\u0434\u0430\u0447\u0443: \u043E\u0442 \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u0434\u043E \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430.",
    items: [
      {
        icon: "packageCheck",
        title: "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0441\u0430\u0439\u0442\u044B",
        description: "\u0411\u0435\u0440\u0451\u043C \u0443\u0436\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443, \u043C\u0435\u043D\u044F\u0435\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u043C \u043F\u043E\u0434 \u0432\u0430\u0448 \u0431\u0440\u0435\u043D\u0434 \u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u0441\u0430\u0439\u0442."
      },
      {
        icon: "blocks",
        title: "\u0421\u0430\u0439\u0442-\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440",
        description: "\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u043D\u0443\u0436\u043D\u044B\u0435 \u043C\u043E\u0434\u0443\u043B\u0438 \u0432\u0440\u0443\u0447\u043D\u0443\u044E, \u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0431\u043B\u043E\u043A\u043E\u0432 \u0432 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0435, \u0430 \u043C\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C, \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043C \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0435\u043C."
      },
      {
        icon: "wandSparkles",
        title: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430",
        description: "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u0443\u0435\u043C \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u043C \u0441\u0430\u0439\u0442 \u0441 \u043D\u0443\u043B\u044F, \u0435\u0441\u043B\u0438 \u043D\u0443\u0436\u0435\u043D \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439, \u0441\u043B\u043E\u0436\u043D\u0430\u044F \u043B\u043E\u0433\u0438\u043A\u0430 \u0438\u043B\u0438 \u043E\u0441\u043E\u0431\u0430\u044F \u043F\u043E\u0434\u0430\u0447\u0430."
      },
      {
        icon: "globe",
        title: "\u0424\u043E\u0440\u043C\u0430\u0442\u044B \u0441\u0430\u0439\u0442\u043E\u0432",
        description: "\u041B\u0435\u043D\u0434\u0438\u043D\u0433, \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u0430\u0439\u0442, \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0443\u0441\u043B\u0443\u0433. \u041F\u043E\u0434 \u043A\u0430\u0436\u0434\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u043C \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043F\u0443\u0441\u043A\u0430."
      }
    ]
  },
  pricing: {
    sectionId: "pricing",
    eyebrow: "\u041A\u0430\u043A \u044D\u0442\u043E \u043F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F",
    title: "\u0422\u0440\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u0430 \u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0443 \u0441\u0430\u0439\u0442\u0430",
    description: "\u0421\u0430\u043C\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0440\u0430\u0437\u043D\u044B\u0435 \u043F\u043E \u0433\u043B\u0443\u0431\u0438\u043D\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438 \u0441\u0440\u043E\u043A\u0430\u043C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0438 \u043F\u0440\u043E\u0434\u0430\u0451\u043C \u0438\u0445 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F\u043C\u0438.",
    plans: [
      {
        name: "\u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u0441\u0430\u0439\u0442",
        description: "\u041A\u043E\u0433\u0434\u0430 \u043D\u0443\u0436\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u0432\u044B\u0439\u0442\u0438 \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u0441 \u0443\u0436\u0435 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0439.",
        price: "\u043E\u0442 190 000 \u20B8",
        period: "\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A",
        features: [
          "\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u043B\u0435\u043D\u0434\u0438\u043D\u0433\u0430, \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430, \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 \u0443\u0441\u043B\u0443\u0433",
          "\u041C\u0435\u043D\u044F\u0435\u043C \u0442\u0435\u043A\u0441\u0442\u044B, \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C",
          "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A \u0431\u0435\u0437 \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
          "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0444\u043E\u0440\u043C \u0438 \u0431\u0430\u0437\u043E\u0432\u044B\u0445 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0439"
        ],
        cta: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442",
        href: "#contact"
      },
      {
        name: "\u0421\u0430\u0439\u0442-\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440",
        description: "\u041A\u043E\u0433\u0434\u0430 \u043D\u0443\u0436\u0435\u043D \u0433\u0438\u0431\u043A\u0438\u0439 \u043D\u0430\u0431\u043E\u0440 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0451\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438.",
        price: "\u043E\u0442 290 000 \u20B8",
        period: "\u043C\u043E\u0434\u0443\u043B\u0438 + \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0446\u0438\u044F",
        highlighted: true,
        features: [
          "\u0420\u0443\u0447\u043D\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 \u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443",
          "\u0412\u0438\u0434\u0438\u043C\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0431\u043B\u043E\u043A\u0430",
          "\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432, \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u043E\u0432 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u0430\u0439\u0442\u043E\u0432",
          "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430 \u043D\u0430\u0448\u0435\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0435"
        ],
        cta: "\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E",
        href: "#contact"
      },
      {
        name: "Custom",
        description: "\u041A\u043E\u0433\u0434\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u0438 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 \u0443\u0436\u0435 \u043C\u0435\u0448\u0430\u044E\u0442 \u0431\u0438\u0437\u043D\u0435\u0441\u0443.",
        price: "\u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E",
        period: "\u043F\u043E\u0441\u043B\u0435 \u0431\u0440\u0438\u0444\u0430 \u0438 \u043E\u0446\u0435\u043D\u043A\u0438",
        features: [
          "\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441 \u043D\u0443\u043B\u044F",
          "\u041D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438, \u0440\u043E\u043B\u0438 \u0438 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u044B",
          "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438",
          "\u041F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u043E\u0433\u0438\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430"
        ],
        cta: "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C custom",
        href: "#contact"
      }
    ],
    note: "\u0415\u0441\u043B\u0438 \u0441\u043E\u043C\u043D\u0435\u0432\u0430\u0435\u0442\u0435\u0441\u044C \u043C\u0435\u0436\u0434\u0443 \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u043C\u0438, \u043D\u0430 \u0431\u0440\u0438\u0444\u0435 \u0440\u0430\u0437\u043B\u043E\u0436\u0438\u043C \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0440\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439.",
    noteCta: {
      label: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441",
      href: "#contact"
    }
  },
  process: {
    sectionId: "process",
    eyebrow: "\u041A\u0430\u043A \u0438\u0434\u0451\u043C \u0432 \u0440\u0430\u0431\u043E\u0442\u0443",
    title: "\u041F\u0443\u0442\u044C \u043E\u0442 \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0435\u0439 \u0431\u044E\u0440\u043E\u043A\u0440\u0430\u0442\u0438\u0438",
    description: "\u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0433\u043B\u0443\u0431\u0438\u043D\u0435, \u043D\u043E \u043B\u043E\u0433\u0438\u043A\u0430 \u043E\u0434\u043D\u0430: \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442, \u043F\u043E\u0442\u043E\u043C \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C.",
    steps: [
      {
        number: "01",
        title: "\u0420\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043C \u0437\u0430\u0434\u0430\u0447\u0443",
        description: "\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u043C, \u0447\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u044B \u043F\u0440\u043E\u0434\u0430\u0451\u0442\u0435, \u043A\u0430\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u0430\u0439\u0442\u0430 \u043D\u0443\u0436\u0435\u043D \u0438 \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0443\u043C\u0435\u0441\u0442\u0435\u043D \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442, \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0438\u043B\u0438 custom."
      },
      {
        number: "02",
        title: "\u0424\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439",
        description: "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u044B\u0432\u0430\u0435\u043C \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443, \u043C\u043E\u0434\u0443\u043B\u0438, \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0435 \u0431\u043B\u043E\u043A\u0438 \u0438 \u043E\u0431\u044A\u0451\u043C \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0439. \u0414\u043B\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u0430 \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C \u0441\u043E\u0441\u0442\u0430\u0432 \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C."
      },
      {
        number: "03",
        title: "\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0438 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C",
        description: "\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0441\u0430\u0439\u0442, \u043D\u0430\u0432\u043E\u0434\u0438\u043C \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A, \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C \u0444\u043E\u0440\u043C\u044B, \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u0438 \u043D\u0443\u0436\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0435\u0442\u0430\u043B\u0438."
      },
      {
        number: "04",
        title: "\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C",
        description: "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E, \u0432\u044B\u043A\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u043C \u0432\u0430\u043C \u0443\u0436\u0435 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0430\u0439\u0442, \u0430 \u043D\u0435 \u043D\u0430\u0431\u043E\u0440 \u043D\u0435\u0434\u043E\u0434\u0435\u043B\u0430\u043D\u043D\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432."
      }
    ]
  },
  whyUs: {
    sectionId: "why-us",
    eyebrow: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0441 \u043D\u0430\u043C\u0438 \u0443\u0434\u043E\u0431\u043D\u043E",
    title: "\u041D\u0435 \u043F\u0440\u043E\u0434\u0430\u0451\u043C \u043B\u0438\u0448\u043D\u044E\u044E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0442\u0430\u043C, \u0433\u0434\u0435 \u043C\u043E\u0436\u043D\u043E \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0449\u0435",
    description: "\u041F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u043C \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443, \u0430 \u043D\u0435 \u043F\u043E\u0434 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0435 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
    body: "\u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043D\u0435 \u0431\u0443\u0434\u0435\u043C \u0442\u044F\u043D\u0443\u0442\u044C \u0432 \u0434\u043E\u0440\u043E\u0433\u043E\u0439 custom. \u0415\u0441\u043B\u0438 \u043D\u0443\u0436\u0435\u043D \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0441 \u043C\u043E\u0434\u0443\u043B\u044F\u043C\u0438 \u0438 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0446\u0438\u0435\u0439, \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u043C \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0430\u043A\u043E\u0439 \u043F\u0443\u0442\u044C. \u0415\u0441\u043B\u0438 \u0437\u0430\u0434\u0430\u0447\u0430 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F, \u0434\u0435\u043B\u0430\u0435\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E \u0438 \u0431\u0435\u0437 \u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0438\u0441\u0441\u043E\u0432 \u043F\u043E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0435.",
    trustItems: [
      "\u041F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442",
      "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
      "\u0421\u0431\u043E\u0440\u043A\u0430 \u0438 \u0437\u0430\u043F\u0443\u0441\u043A \u043F\u043E\u0434 \u043A\u043B\u044E\u0447"
    ],
    items: [
      {
        icon: "award",
        title: "\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u043C \u0440\u0430\u0437\u043D\u0438\u0446\u0443 \u043C\u0435\u0436\u0434\u0443 \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u043C\u0438",
        description: "\u041D\u0435 \u0441\u043C\u0435\u0448\u0438\u0432\u0430\u0435\u043C \u0448\u0430\u0431\u043B\u043E\u043D\u043D\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A, \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u0443\u044E \u0441\u0431\u043E\u0440\u043A\u0443 \u0438 custom \u0432 \u043E\u0434\u043D\u0443 \u0443\u0441\u043B\u0443\u0433\u0443. \u0414\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442 \u043C\u0435\u043D\u044C\u0448\u0435 \u043F\u0443\u0442\u0430\u043D\u0438\u0446\u044B."
      },
      {
        icon: "shield",
        title: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0431\u043E\u0440\u043A\u0438",
        description: "\u0414\u0430\u0436\u0435 \u043A\u043E\u0433\u0434\u0430 \u0441\u0430\u0439\u0442 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0438\u0437 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432, \u0438\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430, \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u0437\u0430\u043F\u0443\u0441\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448\u0443 \u043A\u043E\u043C\u0430\u043D\u0434\u0443."
      },
      {
        icon: "users",
        title: "\u0413\u043E\u0432\u043E\u0440\u0438\u043C \u043F\u0440\u043E\u0441\u0442\u044B\u043C \u044F\u0437\u044B\u043A\u043E\u043C",
        description: "\u041D\u0430 \u043E\u0431\u044B\u0447\u043D\u043E\u0439 \u0432\u0435\u0442\u043A\u0435 \u043F\u0440\u043E\u0434\u0430\u0451\u043C \u0438\u043C\u0435\u043D\u043D\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0430\u0439\u0442\u043E\u0432, \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0435\u0433\u043E enterprise-\u043F\u0430\u0444\u043E\u0441\u0430 \u0438 \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u0439."
      },
      {
        icon: "zap",
        title: "\u041C\u043E\u0436\u043D\u043E \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u0430\u0442\u044C \u0431\u044B\u0441\u0442\u0440\u0435\u0435",
        description: "\u0415\u0441\u043B\u0438 \u0437\u0430\u0434\u0430\u0447\u0430 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043E\u043B\u0433\u043E\u0433\u043E \u0446\u0438\u043A\u043B\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u043C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442, \u0433\u0434\u0435 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C\u0441\u044F \u0437\u0430\u043C\u0435\u0442\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u0435\u0435."
      }
    ]
  },
  testimonials: {
    sectionId: "testimonials",
    eyebrow: "\u0427\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u044B",
    title: "\u041D\u0430\u043C \u0434\u043E\u0432\u0435\u0440\u044F\u044E\u0442 \u0437\u0430\u043F\u0443\u0441\u043A \u0441\u0430\u0439\u0442\u043E\u0432 \u043F\u043E\u0434 \u0440\u0430\u0437\u043D\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438",
    items: [
      {
        quote: "\u041D\u0430\u043C \u043F\u043E\u043C\u043E\u0433\u043B\u0438 \u043D\u0435 \u0443\u0439\u0442\u0438 \u0432 \u0434\u043E\u0440\u043E\u0433\u043E\u0439 custom, \u0445\u043E\u0442\u044F \u0438\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u043C\u044B \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0443\u0434\u0430 \u0438 \u0441\u043C\u043E\u0442\u0440\u0435\u043B\u0438. \u0412 \u0438\u0442\u043E\u0433\u0435 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0438 \u0441\u0430\u0439\u0442 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0438 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u0435\u0435.",
        author: "\u0410\u043B\u0438\u043D\u0430 \u0416.",
        role: "\u0428\u043A\u043E\u043B\u0430 \u0438 \u043A\u0443\u0440\u0441\u044B",
        initials: "\u0410\u0416"
      },
      {
        quote: "\u0424\u043E\u0440\u043C\u0430\u0442 \u0441 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u043E\u043C \u043E\u043A\u0430\u0437\u0430\u043B\u0441\u044F \u043E\u0447\u0435\u043D\u044C \u0443\u0434\u043E\u0431\u043D\u044B\u043C: \u0432\u0438\u0434\u0435\u043B\u0438 \u0441\u043E\u0441\u0442\u0430\u0432 \u043C\u043E\u0434\u0443\u043B\u0435\u0439, \u043F\u043E\u043D\u0438\u043C\u0430\u043B\u0438 \u0446\u0435\u043D\u0443 \u0438 \u043D\u0435 \u0441\u043F\u043E\u0440\u0438\u043B\u0438 \u043E \u0442\u043E\u043C, \u0447\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442.",
        author: "\u0420\u043E\u043C\u0430\u043D \u0422.",
        role: "\u0421\u0435\u0440\u0432\u0438\u0441\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
        initials: "\u0420\u0422"
      },
      {
        quote: "\u041A\u043E\u0433\u0434\u0430 \u0441\u0442\u0430\u043B\u043E \u044F\u0441\u043D\u043E, \u0447\u0442\u043E \u043D\u0443\u0436\u0435\u043D \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0438 \u043E\u0441\u043E\u0431\u0430\u044F \u043B\u043E\u0433\u0438\u043A\u0430, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043F\u0435\u0440\u0435\u0432\u0435\u043B\u0430 \u043F\u0440\u043E\u0435\u043A\u0442 \u0432 custom \u0438 \u0434\u043E\u0442\u044F\u043D\u0443\u043B\u0430 \u0435\u0433\u043E \u0434\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430.",
        author: "\u0414\u0438\u0430\u043D\u0430 \u041A.",
        role: "\u041E\u043D\u043B\u0430\u0439\u043D-\u0441\u0435\u0440\u0432\u0438\u0441",
        initials: "\u0414\u041A"
      }
    ]
  },
  cta: {
    sectionId: "contact",
    title: "\u041D\u0443\u0436\u0435\u043D \u0441\u0430\u0439\u0442, \u043D\u043E \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u043E \u0441 \u043A\u0430\u043A\u043E\u0433\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u0442\u044C?",
    description: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443, \u0430 \u043C\u044B \u0441\u043A\u0430\u0436\u0435\u043C, \u0433\u0434\u0435 \u0445\u0432\u0430\u0442\u0438\u0442 \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u0433\u0434\u0435 \u043B\u0443\u0447\u0448\u0435 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u0439\u0442 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440, \u0430 \u0433\u0434\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0443\u0436\u0435\u043D custom.",
    primaryCta: {
      label: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441",
      href: "mailto:hello@init.dev"
    },
    secondaryCta: {
      label: "hello@init.dev",
      href: "mailto:hello@init.dev"
    },
    note: "\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0440\u0430\u0437\u0431\u043E\u0440 \u0437\u0430\u0434\u0430\u0447\u0438 \u0431\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432"
  },
  footer: {
    brandLabel: "init",
    brandDescription: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u043E\u0432 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u0445: \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 custom.",
    services: [
      { name: "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0441\u0430\u0439\u0442\u044B", href: "#services" },
      { name: "\u0421\u0430\u0439\u0442-\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440", href: "#services" },
      { name: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430", href: "#services" },
      { name: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0438", href: "#services" }
    ],
    company: [
      { name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B", href: "#why-us" },
      { name: "\u042D\u0442\u0430\u043F\u044B", href: "#process" },
      { name: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C", href: "#pricing" },
      { name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", href: "#contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ],
    contact: {
      email: "hello@init.dev",
      phone: "+7 (700) 123-45-67",
      location: "Astana, KZ"
    },
    homeHref: "/"
  }
};

// src/profile-presets/shared.ts
import {
  cloneWebsiteBuilderValue
} from "@init-modules/website-builder/server";
var cloneDocumentBlockById = (document, blockId) => {
  const block = document.blocks.find((item) => item.id === blockId);
  if (!block) {
    throw new Error(`Missing marketing demo block: ${blockId}`);
  }
  return cloneWebsiteBuilderValue(block);
};
var cloneSplitAreaBlock = (document, blockId, areaIndex, blockIndex) => {
  const splitBlock = cloneDocumentBlockById(document, blockId);
  const nestedBlock = splitBlock.areas?.[areaIndex]?.blocks?.[blockIndex];
  if (!nestedBlock) {
    throw new Error(
      `Missing nested marketing demo block: ${blockId}.areas[${areaIndex}].blocks[${blockIndex}]`
    );
  }
  return cloneWebsiteBuilderValue(nestedBlock);
};
var patchBlockProps = (block, props) => ({
  ...block,
  props: {
    ...typeof block.props === "object" && block.props !== null ? block.props : {},
    ...props
  }
});
var patchSplitLayoutAreas = (block, areas) => ({
  ...block,
  areas: (block.areas ?? []).map((area) => ({
    ...area,
    blocks: areas[area.id] ?? area.blocks
  }))
});
var cloneBaseDocument = (baseDocument) => cloneWebsiteBuilderValue(baseDocument);

// src/profile-presets/scenarios/init-landing.ts
var createInitLandingDocument = (_baseDocument, _locale) => ({
  ...cloneBaseDocument(_baseDocument),
  id: "website-builder-home",
  name: "init landing",
  route: "/",
  updatedAt: "2026-04-13T00:00:00.000Z",
  blocks: [
    {
      id: "init-landing-hero",
      module: "marketing-demo",
      type: "init-landing-hero",
      props: initLandingContent.hero
    },
    {
      id: "init-landing-services",
      module: "marketing-demo",
      type: "init-landing-services",
      props: initLandingContent.services
    },
    {
      id: "init-landing-pricing",
      module: "marketing-demo",
      type: "init-landing-pricing",
      props: initLandingContent.pricing
    },
    {
      id: "init-landing-process",
      module: "marketing-demo",
      type: "init-landing-process",
      props: initLandingContent.process
    },
    {
      id: "init-landing-why-us",
      module: "marketing-demo",
      type: "init-landing-why-us",
      props: initLandingContent.whyUs
    },
    {
      id: "init-landing-testimonials",
      module: "marketing-demo",
      type: "init-landing-testimonials",
      props: initLandingContent.testimonials
    },
    {
      id: "init-landing-cta",
      module: "marketing-demo",
      type: "init-landing-cta",
      props: initLandingContent.cta
    }
  ]
});
var createInitLandingHeaderDocument = () => ({
  id: "website-builder-site-header",
  name: "Init Landing Header",
  route: "/_site/header",
  updatedAt: "2026-04-13T00:00:00.000Z",
  blocks: [
    {
      id: "init-landing-header",
      module: "marketing-demo",
      type: "init-landing-header",
      props: initLandingContent.header
    }
  ]
});
var createInitLandingFooterDocument = () => ({
  id: "website-builder-site-footer",
  name: "Init Landing Footer",
  route: "/_site/footer",
  updatedAt: "2026-04-13T00:00:00.000Z",
  blocks: [
    {
      id: "init-landing-footer",
      module: "marketing-demo",
      type: "init-landing-footer",
      props: initLandingContent.footer
    }
  ]
});

// src/profile-presets/scenarios/paper-flow.ts
var createPaperFlowDocument = (baseDocument, locale) => {
  const hero = patchBlockProps(
    cloneDocumentBlockById(baseDocument, "hero-spotlight"),
    locale === "ru" ? {
      eyebrow: "Product narrative system",
      title: "\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u0445\u0438\u0439 product-led \u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0441\u0442\u0443\u0434\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u044B\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E, \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u0438 \u043A\u0435\u0439\u0441\u044B \u0432 \u043E\u0434\u0438\u043D \u043F\u043E\u0442\u043E\u043A",
      body: "Paper Flow \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 builder-demo, \u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C\u044E: \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u044B\u0439 hero, \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u0430\u044F \u0441\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u043C\u0435\u043D\u0430 \u0444\u043E\u043D\u043E\u0432, narrative \u043F\u0440\u043E \u043F\u043E\u0434\u0445\u043E\u0434, \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u0435 \u043B\u0438\u043D\u0438\u0438 \u0438 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442\u044B.",
      primaryLabel: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438",
      primaryMetaLabel: "Flow",
      secondaryLabel: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434",
      spotlightLabel: "\u0424\u043E\u0440\u043C\u0430 \u0441\u0430\u0439\u0442\u0430",
      spotlightValue: "Product strategy studio + service narrative",
      imageAlt: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u0443\u0435\u0442 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u0443\u044E \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u0443\u044E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443"
    } : {
      eyebrow: "Product narrative system",
      title: "Build a quiet product-led site for a studio that packages strategy, services and proof into one flow",
      body: "Paper Flow should stop reading like a builder demo and start behaving like a product surface: restrained hero, gentle section changes and a service narrative that feels editorial without becoming a magazine.",
      primaryLabel: "See services",
      primaryMetaLabel: "Flow",
      secondaryLabel: "Open product approach",
      spotlightLabel: "Site shape",
      spotlightValue: "Product strategy studio + service narrative",
      imageAlt: "Team shaping product strategy and service architecture"
    }
  );
  const split = patchSplitLayoutAreas(
    patchBlockProps(
      cloneDocumentBlockById(baseDocument, "editorial-split-showcase"),
      locale === "ru" ? {
        eyebrow: "Service architecture",
        title: "\u041E\u0434\u0438\u043D sticky rail \u0441 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u043C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C \u0438 \u043E\u0434\u0438\u043D product-story stack \u0441\u043F\u0440\u0430\u0432\u0430",
        body: "\u0412 Paper Flow \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043A\u0430\u043A narrative layout: \u0441\u043B\u0435\u0432\u0430 \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u044F\u043A\u043E\u0440\u044C \u0443\u0441\u043B\u0443\u0433\u0438, \u0441\u043F\u0440\u0430\u0432\u0430 \u0438\u0434\u0435\u0442 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E\u0435 \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0430, deliverables \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.",
        columns: [
          {
            areaId: "primary",
            label: "",
            width: "minmax(18rem,0.92fr)",
            sticky: true
          },
          {
            areaId: "secondary",
            label: "",
            width: "minmax(0,1.08fr)",
            sticky: false
          }
        ]
      } : {
        eyebrow: "Service architecture",
        title: "One sticky rail for the core offer, one product-story stack on the right",
        body: "In Paper Flow the horizontal container becomes a narrative layout: the left side pins the offer anchor, the right side explains method, deliverables and proof at a calmer pace.",
        columns: [
          {
            areaId: "primary",
            label: "",
            width: "minmax(18rem,0.92fr)",
            sticky: true
          },
          {
            areaId: "secondary",
            label: "",
            width: "minmax(0,1.08fr)",
            sticky: false
          }
        ]
      }
    ),
    {
      primary: [
        patchBlockProps(
          cloneSplitAreaBlock(baseDocument, "editorial-split-showcase", 0, 0),
          locale === "ru" ? {
            eyebrow: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u0430\u044F \u0440\u0430\u043C\u043A\u0430",
            title: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432\u0438\u0434\u0438\u0442 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u043F\u043E\u043A\u0430 \u0447\u0438\u0442\u0430\u0435\u0442 \u0432\u0435\u0441\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F",
            caption: "Sticky rail \u0437\u0434\u0435\u0441\u044C \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043A\u0430\u043A \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u044F\u043A\u043E\u0440\u044C: \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 promise, \u043E\u0434\u0438\u043D visual \u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u043E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0431\u0435\u0437 \u0442\u044F\u0436\u0435\u043B\u043E\u0433\u043E dashboard look.",
            imageAlt: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B \u0441 \u043C\u0430\u043A\u0435\u0442\u0430\u043C\u0438"
          } : {
            eyebrow: "Product frame",
            title: "The team keeps the core offer in view while reading the full delivery narrative",
            caption: "The sticky rail acts as a calm product anchor: one promise, one visual and a sense of structure without falling into a dashboard look.",
            imageAlt: "Minimal product workspace with strategy mockups"
          }
        )
      ],
      secondary: [
        patchBlockProps(
          cloneSplitAreaBlock(baseDocument, "editorial-split-showcase", 1, 0),
          locale === "ru" ? {
            eyebrow: "Product operating model",
            title: "\u0421\u0430\u0439\u0442 \u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0442\u044C \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u0432\u044B \u0434\u0435\u043B\u0430\u0435\u0442\u0435, \u043D\u043E \u0438 \u043A\u0430\u043A \u0438\u043C\u0435\u043D\u043D\u043E \u0434\u0432\u0438\u0436\u0435\u0442\u0441\u044F \u0440\u0430\u0431\u043E\u0442\u0430",
            content: "<p>Paper Flow \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0438\u043B\u0438 \u0441\u0442\u0443\u0434\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0435\u0442 \u043D\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0430 \u0445\u043E\u0434 \u0440\u0430\u0431\u043E\u0442\u044B: \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435, framing, \u0437\u0430\u043F\u0443\u0441\u043A, \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435.</p><p>\u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432 narrative stack \u0432\u0430\u0436\u043D\u044B \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0435 \u0430\u0431\u0437\u0430\u0446\u044B \u0438 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043D\u043E\u0441\u0442\u044C:</p><ul><li>\u0447\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 discovery</li><li>\u043A\u0430\u043A \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u044E\u0442\u0441\u044F deliverables</li><li>\u043A\u0430\u043A \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0437\u0430\u043F\u0443\u0441\u043A \u043F\u043E\u0441\u043B\u0435 \u0440\u0435\u043B\u0438\u0437\u0430</li></ul><blockquote>\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 light preset \u0434\u043E\u043B\u0436\u0435\u043D \u043E\u0449\u0443\u0449\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u0430 \u043D\u0435 \u043A\u0430\u043A \u0442\u0430 \u0436\u0435 dark demo \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u0446\u0432\u0435\u0442\u0430\u0445.</blockquote>",
            asideLabel: "Delivery lens",
            asideValue: "Discovery, framing, launch and iteration described in one continuous service story."
          } : {
            eyebrow: "Product operating model",
            title: "The site can explain not just what you do, but how the work actually moves",
            content: "<p>Paper Flow should present a product team or studio that sells the shape of the work, not just isolated pages: discovery, framing, launch and iteration.</p><p>That is why the narrative stack needs calmer paragraphs and a clearer sequence:</p><ul><li>what discovery includes</li><li>how deliverables are packaged</li><li>how the team supports launch after release</li></ul><blockquote>A good light preset should feel like a confident product document, not the same dark demo recolored.</blockquote>",
            asideLabel: "Delivery lens",
            asideValue: "Discovery, framing, launch and iteration described in one continuous service story."
          }
        ),
        patchBlockProps(
          cloneSplitAreaBlock(baseDocument, "editorial-split-showcase", 1, 1),
          locale === "ru" ? {
            tag: "case-note",
            title: "\u041A\u0435\u0439\u0441\u044B \u0438 service notes \u043C\u043E\u0433\u0443\u0442 \u0447\u0438\u0442\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u043E\u0433\u043E narrative, \u0430 \u043D\u0435 \u043A\u0430\u043A \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u0442\u0430\u043B\u043E\u0433",
            excerpt: "\u0412\u043C\u0435\u0441\u0442\u043E \u0433\u0440\u043E\u043C\u043E\u0437\u0434\u043A\u043E\u0439 \u043A\u0435\u0439\u0441\u043E\u0442\u0435\u043A\u0438 Paper Flow \u043C\u043E\u0436\u0435\u0442 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u043C, \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442\u0430\u043C\u0438 \u0438 \u043A\u0440\u0430\u0442\u043A\u0438\u043C\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F\u043C\u0438 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F.",
            author: "Service design team",
            readTime: "4 \u043C\u0438\u043D\u0443\u0442\u044B",
            ctaLabel: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0435\u0439\u0441"
          } : {
            tag: "case-note",
            title: "Case notes can extend the service narrative instead of behaving like a detached portfolio grid",
            excerpt: "Paper Flow can move attention between method, deliverables and short implementation stories without collapsing into a heavy case-study catalog.",
            author: "Service design team",
            readTime: "4 min read",
            ctaLabel: "Open case note"
          }
        )
      ]
    }
  );
  const featureGrid = patchBlockProps(
    cloneDocumentBlockById(baseDocument, "feature-grid"),
    locale === "ru" ? {
      eyebrow: "Service lines",
      title: "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F, \u0434\u0438\u0437\u0430\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u0436\u0438\u0432\u0443\u0442 \u043A\u0430\u043A \u043E\u0434\u0438\u043D \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",
      body: "Paper Flow \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u043E\u0432\u0430\u0442\u044C studio offer, \u0430 \u043D\u0435 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0441\u0435\u043A\u0446\u0438\u0438 \u043D\u0438\u0436\u0435 \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u044E\u0442 service lines \u0438 deliverables, \u0430 \u043D\u0435 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u0438 builder.",
      features: [
        {
          title: "Discovery sprint",
          body: "\u0418\u043D\u0442\u0435\u0440\u0432\u044C\u044E, \u043A\u0430\u0440\u0442\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430, framing \u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u0447\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u043E\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0436\u0438\u0432\u043E\u043C \u0441\u0430\u0439\u0442\u0435."
        },
        {
          title: "Narrative system",
          body: "\u0421\u0435\u043A\u0446\u0438\u0438 \u0441\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0439 flow: promise, method, proof, offer \u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433."
        },
        {
          title: "Launch support",
          body: "\u041F\u043E\u0441\u043B\u0435 \u0440\u0435\u043B\u0438\u0437\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043F\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443, \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435 \u0438 conversion story."
        }
      ]
    } : {
      eyebrow: "Service lines",
      title: "Strategy, systems design and rollout live as one productized offer",
      body: "Paper Flow should present a studio offer, not a framework pitch. The sections below explain service lines and deliverables instead of builder internals.",
      features: [
        {
          title: "Discovery sprint",
          body: "Interviews, product mapping, framing and a decision on what should appear on the live site."
        },
        {
          title: "Narrative system",
          body: "Sections compose into a readable flow: promise, method, proof, offer and the next step."
        },
        {
          title: "Launch support",
          body: "After release the team continues iterating on content, structure and conversion story."
        }
      ]
    }
  );
  const cta = patchBlockProps(
    cloneDocumentBlockById(baseDocument, "command-center-cta"),
    locale === "ru" ? {
      badge: "Studio offer",
      title: "\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0438\u0437 \u043F\u0440\u0435\u0441\u0435\u0442\u0430 \u043D\u0435 \u043E\u0431\u0449\u0443\u044E \u0434\u0435\u043C\u043A\u0443, \u0430 \u0433\u043E\u0442\u043E\u0432\u0443\u044E service-story \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",
      body: "Paper Flow \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u044B\u043C light preset \u0441\u043E \u0441\u0432\u043E\u0438\u043C frontend-\u043B\u0438\u0446\u043E\u043C: \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u0439 narrative, \u0434\u0440\u0443\u0433\u0438\u0435 \u0431\u043B\u043E\u043A\u0438 \u0438 \u0434\u0440\u0443\u0433\u0430\u044F \u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043B\u0435\u043A\u0441\u0438\u043A\u0430.",
      primaryLabel: "\u0421\u043E\u0431\u0440\u0430\u0442\u044C service page",
      secondaryLabel: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C deliverables",
      panelEyebrow: "Offer package",
      panelLabel: "Productized service surface",
      panelItems: [
        "Hero \u043F\u0440\u043E\u0434\u0430\u0435\u0442 promise, \u0430 \u043D\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 builder.",
        "Split layout \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0435\u0442 \u043C\u0435\u0442\u043E\u0434 \u0438 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0445\u043E\u0434 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.",
        "\u041D\u0438\u0436\u043D\u0438\u0435 \u0441\u0435\u043A\u0446\u0438\u0438 \u0441\u043E\u0431\u0438\u0440\u0430\u044E\u0442 offer, proof \u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433."
      ]
    } : {
      badge: "Studio offer",
      title: "Make the preset a real service story, not a generic demo in lighter colors",
      body: "Paper Flow should stand as its own light preset with a different frontend face: calmer service narrative, different block composition and different product language.",
      primaryLabel: "Assemble service page",
      secondaryLabel: "Open deliverables",
      panelEyebrow: "Offer package",
      panelLabel: "Productized service surface",
      panelItems: [
        "The hero sells the promise instead of the builder toolchain.",
        "The split layout explains method and delivery motion.",
        "Lower sections package the offer, proof and the next step."
      ]
    }
  );
  return {
    ...cloneBaseDocument(baseDocument),
    blocks: [hero, split, featureGrid, cta]
  };
};

// src/profile-presets/preset-scenarios.ts
var createPresetScenarioDocument = (presetId, baseDocument, locale) => {
  switch (presetId) {
    case "init-landing":
      return createInitLandingDocument(baseDocument, locale);
    case "paper-flow":
      return createPaperFlowDocument(baseDocument, locale);
    default:
      return cloneWebsiteBuilderValue2(baseDocument);
  }
};

// src/documents.ts
var withoutSiteShellBlocks = (document) => ({
  ...document,
  blocks: document.blocks.filter(
    (block) => block.type !== "site-header-shell" && block.type !== "site-footer-shell"
  )
});
var marketingHomeDocumentBase = {
  id: "website-builder-home",
  name: "Website Builder Showcase",
  route: "/",
  updatedAt: "2026-03-31T00:00:00.000Z",
  blocks: [
    {
      id: "hero-spotlight",
      module: "marketing-demo",
      type: "hero-spotlight",
      props: {
        eyebrow: "Package-first builder system",
        title: "Edit the real website, not a fake admin copy",
        body: "Website Builder turns your actual Next.js surface into the editing canvas. Content mode keeps edits inline, while Builder mode opens a full control room with palette, inspector, profile history and nested layout composition.",
        primaryLabel: "Enter builder mode",
        primaryMetaLabel: "Launch",
        primaryHref: "#builder",
        secondaryLabel: "See package architecture",
        secondaryHref: "#packages",
        spotlightLabel: "Target shape",
        spotlightValue: "Next.js + Laravel + installable block kits",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Creative team controlling digital product surfaces"
      }
    },
    {
      id: "proof-strip",
      module: "marketing-demo",
      type: "proof-strip",
      props: {
        title: "What the current runtime proves",
        items: [
          {
            value: "Live auth",
            label: "Admins unlock the builder on the same public website"
          },
          {
            value: "History",
            label: "Profile revisions capture who changed the live surface and when"
          },
          {
            value: "Split layout",
            label: "A true 50/50 horizontal container now ships in the demo document"
          },
          {
            value: "Installable kits",
            label: "Frontend kits and backend integrations stay coordinated but decoupled"
          }
        ]
      }
    },
    {
      id: "editorial-split-showcase",
      module: "website-builder-system",
      type: "split-layout",
      props: {
        eyebrow: "Horizontal container system",
        title: "A visible 50/50 split with one sticky rail and one editorial stack",
        body: "This is the exact scenario that was missing from the demo. The left side stays sticky with a visual anchor, the right side stacks richer content blocks, and mobile collapses back to a single readable column.",
        gap: 22,
        surface: "glass",
        columns: [
          {
            areaId: "primary",
            label: "Sticky visual",
            width: "minmax(0,1fr)",
            sticky: true
          },
          {
            areaId: "secondary",
            label: "Editorial stack",
            width: "minmax(0,1fr)",
            sticky: false
          }
        ]
      },
      areas: [
        {
          id: "primary",
          label: "Sticky visual",
          blocks: [
            {
              id: "sticky-media-frame",
              module: "marketing-demo",
              type: "media-frame",
              props: {
                eyebrow: "Sticky media rail",
                title: "Horizontal containers finally become obvious in the live demo",
                caption: "The left column can stay pinned while the right column scrolls through richer editorial blocks. On mobile the same structure collapses into a clean single-column stack.",
                imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
                imageAlt: "Laptop workspace showing a design and editing setup"
              }
            }
          ]
        },
        {
          id: "secondary",
          label: "Editorial stack",
          blocks: [
            {
              id: "rich-text",
              module: "marketing-demo",
              type: "rich-text",
              props: {
                content: "<h2>Content mode can now persist richer editorial structure</h2><p>The builder no longer has to flatten everything into plain textareas. This block stores real rich text markup, keeps it in the manifest, survives branch changes and still renders directly on the public website.</p><p>The point is not a detached CMS page. The point is staying on the live surface while editing:</p><ul><li>short narrative paragraphs</li><li>lists for product proof</li><li>quotes or subheads when a section needs rhythm</li></ul><blockquote>The same saved document can feed preview, content mode and profile history.</blockquote>"
              }
            },
            {
              id: "publication-spotlight",
              module: "marketing-demo",
              type: "publication-spotlight",
              props: {
                tag: "publication-website-builder",
                title: "A publication package should bring its own blocks and backend manifest producers",
                excerpt: "This block represents the future integration path: a publication package exposes manifest fragments on Laravel, and the mirrored npm kit renders the same block family in Next.js with zero copy-paste glue.",
                author: "Lead package architecture",
                readTime: "6 min walkthrough",
                imageUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80",
                imageAlt: "Editorial workspace with notebooks and camera",
                ctaLabel: "Open package strategy",
                ctaHref: "#packages"
              }
            },
            {
              id: "media-gallery",
              module: "marketing-demo",
              type: "media-gallery",
              props: {
                eyebrow: "Media workflow",
                title: "Temporary uploads now have a real home inside the builder",
                body: "Upload a few images, reorder them, annotate captions and save a new profile revision when the gallery is ready.",
                emptyTitle: "Build a live media gallery",
                emptyBody: "Upload stills, product frames or editorial images and keep them editable directly on the page.",
                items: [
                  {
                    id: "gallery-1",
                    media: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
                    alt: "Product team aligning on a laptop",
                    caption: "Live edits happen on the actual website surface."
                  },
                  {
                    id: "gallery-2",
                    media: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
                    alt: "Desk setup with laptop and keyboard",
                    caption: "Sticky rails and dark surfaces keep the canvas legible."
                  },
                  {
                    id: "gallery-3",
                    media: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
                    alt: "Hands working in a website editor",
                    caption: "Branch-aware save and finalize flow should feel invisible to the editor."
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: "feature-grid",
      module: "marketing-demo",
      type: "feature-grid",
      props: {
        eyebrow: "Editor capabilities",
        title: "One framework, two editor personalities",
        body: "The same manifest powers public rendering, inline content edits and the full builder chrome. Domain teams can ship their own kits instead of patching a single giant application.",
        features: [
          {
            title: "Inline content controls",
            body: "Text becomes inputs, rich text surfaces and media controls directly in the live page."
          },
          {
            title: "Builder chrome in package",
            body: "The studio shell now lives in the npm foundation package while the app keeps only auth and backend wiring."
          },
          {
            title: "Installable kit contract",
            body: "Apps consume kit-level runtime entries and document maps instead of registering modules and demo data separately."
          }
        ]
      }
    },
    {
      id: "command-center-cta",
      module: "marketing-demo",
      type: "command-center-cta",
      props: {
        badge: "MVP control room",
        title: "Ship the foundation now, then let domain packages plug into it cleanly",
        body: "The pragmatic path is to stabilize the contract, show the experience on the real site and keep enough extension points so future kits register themselves instead of editing core app code every time.",
        primaryLabel: "Publish foundation packages",
        primaryHref: "#publish",
        secondaryLabel: "Read manual",
        secondaryHref: "#manual",
        panelEyebrow: "System mode",
        panelLabel: "Builder chrome online",
        panelItems: [
          "Content editor turns the live site into inputs, uploads and textareas.",
          "Builder mode exposes real layout chrome with drag-and-drop blocks.",
          "Foundation packages define contracts, integrations and renderers."
        ]
      }
    }
  ]
};
var marketingHomeDocumentOverrides = {
  ru: {
    name: "\u0412\u0438\u0442\u0440\u0438\u043D\u0430 Website Builder",
    "blocks.0.props.eyebrow": "Package-first \u0441\u0438\u0441\u0442\u0435\u043C\u0430 builder",
    "blocks.0.props.title": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u0439\u0442, \u0430 \u043D\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0443\u044E \u0430\u0434\u043C\u0438\u043D\u0441\u043A\u0443\u044E \u043A\u043E\u043F\u0438\u044E",
    "blocks.0.props.body": "Website Builder \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0430\u0448\u0443 \u0440\u0435\u0430\u043B\u044C\u043D\u0443\u044E Next.js-\u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u0432 \u0445\u043E\u043B\u0441\u0442 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F. Content mode \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043F\u0440\u0430\u0432\u043A\u0438 \u0438\u043D\u043B\u0430\u0439\u043D\u043E\u0432\u044B\u043C\u0438, \u0430 Builder mode \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u0439 control room \u0441 palette, inspector, \u0438\u0441\u0442\u043E\u0440\u0438\u0435\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0438 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0435\u0439 layout-\u0431\u043B\u043E\u043A\u043E\u0432.",
    "blocks.0.props.primaryLabel": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C builder mode",
    "blocks.0.props.primaryMetaLabel": "\u0417\u0430\u043F\u0443\u0441\u043A",
    "blocks.0.props.secondaryLabel": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443 \u043F\u0430\u043A\u0435\u0442\u043E\u0432",
    "blocks.0.props.spotlightLabel": "\u0426\u0435\u043B\u0435\u0432\u0430\u044F \u0444\u043E\u0440\u043C\u0430",
    "blocks.0.props.imageAlt": "\u041A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u043C\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u043C\u0438 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044F\u043C\u0438",
    "blocks.1.props.title": "\u0427\u0442\u043E \u0434\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0440\u0430\u043D\u0442\u0430\u0439\u043C",
    "blocks.1.props.items.0.value": "Live auth",
    "blocks.1.props.items.0.label": "\u0410\u0434\u043C\u0438\u043D\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 builder \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0442\u043E\u043C \u0436\u0435 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435",
    "blocks.1.props.items.1.value": "\u0418\u0441\u0442\u043E\u0440\u0438\u044F",
    "blocks.1.props.items.1.label": "\u0420\u0435\u0432\u0438\u0437\u0438\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u044E\u0442, \u043A\u0442\u043E \u0438 \u043A\u043E\u0433\u0434\u0430 \u043C\u0435\u043D\u044F\u043B \u0436\u0438\u0432\u0443\u044E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u0441\u0430\u0439\u0442\u0430",
    "blocks.1.props.items.2.value": "Split layout",
    "blocks.1.props.items.2.label": "\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 50/50 \u0442\u0435\u043F\u0435\u0440\u044C \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0434\u0435\u043C\u043E-\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442",
    "blocks.1.props.items.3.value": "Installable kits",
    "blocks.1.props.items.3.label": "\u0424\u0440\u043E\u043D\u0442\u0435\u043D\u0434-\u043A\u0438\u0442\u044B \u0438 backend-\u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438, \u043D\u043E \u0440\u0430\u0437\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u043C\u0438",
    "blocks.2.props.eyebrow": "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432",
    "blocks.2.props.title": "\u041D\u0430\u0433\u043B\u044F\u0434\u043D\u044B\u0439 50/50 split \u0441 \u043E\u0434\u043D\u043E\u0439 sticky-\u043A\u043E\u043B\u043E\u043D\u043A\u043E\u0439 \u0438 \u043E\u0434\u043D\u0438\u043C editorial stack",
    "blocks.2.props.body": "\u0418\u043C\u0435\u043D\u043D\u043E \u044D\u0442\u043E\u0433\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u043B\u043E \u0432 \u0434\u0435\u043C\u043E. \u041B\u0435\u0432\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430 \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F sticky \u0441 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u044F\u043A\u043E\u0440\u0435\u043C, \u043F\u0440\u0430\u0432\u0430\u044F \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0431\u043E\u0433\u0430\u0442\u044B\u0435 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0435 \u0431\u043B\u043E\u043A\u0438, \u0430 \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0432\u0441\u0435 \u0441\u043D\u043E\u0432\u0430 \u0441\u0445\u043B\u043E\u043F\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0447\u0438\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u0443\u044E \u043E\u0434\u043D\u043E\u043A\u043E\u043B\u043E\u043D\u043E\u0447\u043D\u0443\u044E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443.",
    "blocks.2.props.columns.0.label": "Sticky-\u0432\u0438\u0437\u0443\u0430\u043B",
    "blocks.2.props.columns.1.label": "Editorial stack",
    "blocks.2.areas.0.label": "Sticky-\u0432\u0438\u0437\u0443\u0430\u043B",
    "blocks.2.areas.0.blocks.0.props.eyebrow": "Sticky media-\u043A\u043E\u043B\u043E\u043D\u043A\u0430",
    "blocks.2.areas.0.blocks.0.props.title": "\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B \u043D\u0430\u043A\u043E\u043D\u0435\u0446 \u0441\u0442\u0430\u043B\u0438 \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u044B\u043C\u0438 \u0432 \u0436\u0438\u0432\u043E\u043C \u0434\u0435\u043C\u043E",
    "blocks.2.areas.0.blocks.0.props.caption": "\u041B\u0435\u0432\u0430\u044F \u043A\u043E\u043B\u043E\u043D\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u043E\u0441\u0442\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043D\u043E\u0439, \u043F\u043E\u043A\u0430 \u043F\u0440\u0430\u0432\u0430\u044F \u0441\u043A\u0440\u043E\u043B\u043B\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0431\u043E\u043B\u0435\u0435 \u0431\u043E\u0433\u0430\u0442\u044B\u0435 editorial-\u0431\u043B\u043E\u043A\u0438. \u041D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0442\u0430 \u0436\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0441\u0445\u043B\u043E\u043F\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0447\u0438\u0441\u0442\u044B\u0439 \u043E\u0434\u043D\u043E\u043A\u043E\u043B\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0435\u043A.",
    "blocks.2.areas.0.blocks.0.props.imageAlt": "\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043C\u0435\u0441\u0442\u043E \u0441 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u043E\u043C \u0438 \u044D\u043A\u0440\u0430\u043D\u043E\u043C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
    "blocks.2.areas.1.label": "Editorial stack",
    "blocks.2.areas.1.blocks.0.props.eyebrow": "Rich text runtime",
    "blocks.2.areas.1.blocks.0.props.title": "Content mode \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0431\u043E\u0433\u0430\u0442\u0443\u044E editorial-\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443",
    "blocks.2.areas.1.blocks.0.props.content": "<p>Builder \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u043D \u0441\u043F\u043B\u044E\u0449\u0438\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0432 \u043E\u0431\u044B\u0447\u043D\u044B\u0435 textareas. \u042D\u0442\u043E\u0442 \u0431\u043B\u043E\u043A \u0445\u0440\u0430\u043D\u0438\u0442 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 rich text markup, \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u0435\u0433\u043E \u0432 manifest, \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432\u0435\u0442\u043E\u043A \u0438 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u0441\u044F \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435.</p><p>\u0421\u043C\u044B\u0441\u043B \u043D\u0435 \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0439 CMS-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435. \u0421\u043C\u044B\u0441\u043B \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043E\u0441\u0442\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0436\u0438\u0432\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F:</p><ul><li>\u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u043F\u043E\u0432\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0430\u0431\u0437\u0430\u0446\u044B</li><li>\u0441\u043F\u0438\u0441\u043A\u0438 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0445 \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432</li><li>\u0446\u0438\u0442\u0430\u0442\u044B \u0438 \u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438, \u043A\u043E\u0433\u0434\u0430 \u0441\u0435\u043A\u0446\u0438\u0438 \u043D\u0443\u0436\u0435\u043D \u0440\u0438\u0442\u043C</li></ul><blockquote>\u041E\u0434\u0438\u043D \u0438 \u0442\u043E\u0442 \u0436\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043C\u043E\u0436\u0435\u0442 \u043A\u043E\u0440\u043C\u0438\u0442\u044C preview, content mode \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043F\u0440\u043E\u0444\u0438\u043B\u044F.</blockquote>",
    "blocks.2.areas.1.blocks.0.props.asideLabel": "\u0421\u043B\u043E\u0439 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F",
    "blocks.2.areas.1.blocks.0.props.asideValue": "Tiptap HTML \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0432\u043D\u0443\u0442\u0440\u0438 manifest \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0438 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0440\u0435\u0432\u0438\u0437\u0438\u0439.",
    "blocks.2.areas.1.blocks.0.props.imageAlt": "\u0420\u0443\u043A\u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0432 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 \u043D\u0430 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0435",
    "blocks.2.areas.1.blocks.1.props.title": "Publication package \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0431\u043B\u043E\u043A\u0438 \u0438 backend manifest producers",
    "blocks.2.areas.1.blocks.1.props.excerpt": "\u042D\u0442\u043E\u0442 \u0431\u043B\u043E\u043A \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0431\u0443\u0434\u0443\u0449\u0438\u0439 \u043F\u0443\u0442\u044C \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438: publication package \u043E\u0442\u0434\u0430\u0435\u0442 manifest fragments \u043D\u0430 Laravel, \u0430 \u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u044B\u0439 npm kit \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442 \u0442\u0443 \u0436\u0435 \u0441\u0435\u043C\u044C\u044E \u0431\u043B\u043E\u043A\u043E\u0432 \u0432 Next.js \u0431\u0435\u0437 copy-paste glue-\u043A\u043E\u0434\u0430.",
    "blocks.2.areas.1.blocks.1.props.readTime": "6 \u043C\u0438\u043D\u0443\u0442 \u0447\u0442\u0435\u043D\u0438\u044F",
    "blocks.2.areas.1.blocks.1.props.imageAlt": "Editorial-\u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u043C\u0435\u0441\u0442\u043E \u0441 \u0431\u043B\u043E\u043A\u043D\u043E\u0442\u0430\u043C\u0438 \u0438 \u043A\u0430\u043C\u0435\u0440\u043E\u0439",
    "blocks.2.areas.1.blocks.1.props.ctaLabel": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C package strategy",
    "blocks.2.areas.1.blocks.2.props.eyebrow": "\u041C\u0435\u0434\u0438\u0430 workflow",
    "blocks.2.areas.1.blocks.2.props.title": "\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u043E-\u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443 \u0436\u0438\u0432\u0443\u0442 \u0432\u043D\u0443\u0442\u0440\u0438 builder",
    "blocks.2.areas.1.blocks.2.props.body": "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439, \u043F\u043E\u043C\u0435\u043D\u044F\u0439\u0442\u0435 \u0438\u0445 \u043F\u043E\u0440\u044F\u0434\u043E\u043A, \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u043D\u043E\u0432\u0443\u044E \u0440\u0435\u0432\u0438\u0437\u0438\u044E \u043F\u0440\u043E\u0444\u0438\u043B\u044F, \u043A\u043E\u0433\u0434\u0430 \u0433\u0430\u043B\u0435\u0440\u0435\u044F \u0431\u0443\u0434\u0435\u0442 \u0433\u043E\u0442\u043E\u0432\u0430.",
    "blocks.2.areas.1.blocks.2.props.emptyTitle": "\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0438\u0432\u0443\u044E \u043C\u0435\u0434\u0438\u0430-\u0433\u0430\u043B\u0435\u0440\u0435\u044E",
    "blocks.2.areas.1.blocks.2.props.emptyBody": "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0439\u0442\u0435 stills, product frames \u0438 editorial-\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0438\u0445 \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435.",
    "blocks.2.areas.1.blocks.2.props.items.0.alt": "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0437\u0430 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u043E\u043C",
    "blocks.2.areas.1.blocks.2.props.items.0.caption": "\u0416\u0438\u0432\u044B\u0435 \u043F\u0440\u0430\u0432\u043A\u0438 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u044F\u0442 \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0441\u0430\u0439\u0442\u0430.",
    "blocks.2.areas.1.blocks.2.props.items.1.alt": "\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B \u0441 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u043E\u043C \u0438 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u043E\u0439",
    "blocks.2.areas.1.blocks.2.props.items.1.caption": "Sticky-\u043A\u043E\u043B\u043E\u043D\u043A\u0438 \u0438 \u0442\u0435\u043C\u043D\u044B\u0435 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0434\u0435\u043B\u0430\u044E\u0442 \u0445\u043E\u043B\u0441\u0442 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u043C.",
    "blocks.2.areas.1.blocks.2.props.items.2.alt": "\u0420\u0443\u043A\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0435 \u0441\u0430\u0439\u0442\u0430",
    "blocks.2.areas.1.blocks.2.props.items.2.caption": "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u043E \u0432\u0435\u0442\u043A\u0430\u043C \u0438 \u0444\u0438\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043F\u043E\u0447\u0442\u0438 \u043D\u0435\u0437\u0430\u043C\u0435\u0442\u043D\u044B \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430.",
    "blocks.3.props.eyebrow": "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430",
    "blocks.3.props.title": "\u041E\u0434\u0438\u043D \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A, \u0434\u0432\u0430 \u0440\u0435\u0436\u0438\u043C\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430",
    "blocks.3.props.body": "\u041E\u0434\u0438\u043D \u0438 \u0442\u043E\u0442 \u0436\u0435 manifest \u043F\u0438\u0442\u0430\u0435\u0442 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u043D\u0434\u0435\u0440, inline-\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0438 \u043F\u043E\u043B\u043D\u044B\u0439 builder chrome. \u0414\u043E\u043C\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 kit-\u043F\u0430\u043A\u0435\u0442\u044B \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u0430\u0442\u0447\u0435\u0439 \u0432 \u043E\u0434\u043D\u043E \u0433\u0438\u0433\u0430\u043D\u0442\u0441\u043A\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
    "blocks.3.props.features.0.title": "Inline-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044B \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430",
    "blocks.3.props.features.0.body": "\u0422\u0435\u043A\u0441\u0442 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0432 inputs, rich text surfaces \u0438 media controls \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0436\u0438\u0432\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435.",
    "blocks.3.props.features.1.title": "Builder chrome \u0432 \u043F\u0430\u043A\u0435\u0442\u0435",
    "blocks.3.props.features.1.body": "Studio shell \u0442\u0435\u043F\u0435\u0440\u044C \u0436\u0438\u0432\u0435\u0442 \u0432 npm foundation package, \u0430 app \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0435\u0431\u0435 \u0442\u043E\u043B\u044C\u043A\u043E auth \u0438 backend wiring.",
    "blocks.3.props.features.2.title": "\u041A\u043E\u043D\u0442\u0440\u0430\u043A\u0442 installable kit",
    "blocks.3.props.features.2.body": "Apps \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u044E\u0442 runtime entries \u0438 document maps \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 kit, \u0430 \u043D\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u044E\u0442 \u043C\u043E\u0434\u0443\u043B\u0438 \u0438 demo data \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438.",
    "blocks.4.props.badge": "MVP control room",
    "blocks.4.props.title": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u043F\u0443\u0441\u043A\u0430\u0439\u0442\u0435 foundation, \u0430 \u0437\u0430\u0442\u0435\u043C \u0447\u0438\u0441\u0442\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0439\u0442\u0435 \u0434\u043E\u043C\u0435\u043D\u043D\u044B\u0435 \u043F\u0430\u043A\u0435\u0442\u044B",
    "blocks.4.props.body": "\u041F\u0440\u0430\u0433\u043C\u0430\u0442\u0438\u0447\u043D\u044B\u0439 \u043F\u0443\u0442\u044C \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u0441\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442, \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u043D\u0430 \u0436\u0438\u0432\u043E\u043C \u0441\u0430\u0439\u0442\u0435 \u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E extension points, \u0447\u0442\u043E\u0431\u044B \u0431\u0443\u0434\u0443\u0449\u0438\u0435 kit-\u043F\u0430\u043A\u0435\u0442\u044B \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0441\u0435\u0431\u044F \u0441\u0430\u043C\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u043F\u0440\u0430\u0432\u043E\u043A core app.",
    "blocks.4.props.primaryLabel": "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C foundation packages",
    "blocks.4.props.secondaryLabel": "\u0427\u0438\u0442\u0430\u0442\u044C manual",
    "blocks.4.props.panelEyebrow": "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
    "blocks.4.props.panelLabel": "Builder chrome \u0432 \u043E\u043D\u043B\u0430\u0439\u043D\u0435",
    "blocks.4.props.panelItems.0": "Content editor \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0436\u0438\u0432\u043E\u0439 \u0441\u0430\u0439\u0442 \u0432 inputs, uploads \u0438 textareas.",
    "blocks.4.props.panelItems.1": "Builder mode \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 layout chrome \u0441 drag-and-drop \u0431\u043B\u043E\u043A\u0430\u043C\u0438.",
    "blocks.4.props.panelItems.2": "Foundation packages \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u044B, \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u0440\u0435\u043D\u0434\u0435\u0440\u0435\u0440\u044B."
  }
};
var applyDocumentOverrides = (document, overrides) => Object.entries(overrides).reduce(
  (current, [path, value]) => setValueAtPath(
    current,
    path,
    value
  ),
  cloneWebsiteBuilderValue3(document)
);
var applyMarketingDemoVariantMapToBlocks = (blocks, componentVariants) => blocks.map((block) => {
  const nextBlock = cloneWebsiteBuilderValue3(block);
  if (nextBlock.module === "marketing-demo") {
    nextBlock.props = {
      ...typeof nextBlock.props === "object" && nextBlock.props !== null ? nextBlock.props : {},
      variant: componentVariants[nextBlock.type] ?? "default"
    };
  }
  if (Array.isArray(nextBlock.areas)) {
    nextBlock.areas = nextBlock.areas.map((area) => ({
      ...area,
      blocks: applyMarketingDemoVariantMapToBlocks(
        area.blocks,
        componentVariants
      )
    }));
  }
  return nextBlock;
});
var resolveMarketingDemoBaseDocument = (locale) => locale === "ru" ? applyDocumentOverrides(
  marketingHomeDocumentBase,
  marketingHomeDocumentOverrides.ru
) : cloneWebsiteBuilderValue3(marketingHomeDocumentBase);
var marketingDemoProfileStarterPresets = marketingDemoDesignPresets.map((preset) => ({
  id: preset.id,
  label: preset.label,
  appearance: preset.appearance,
  description: `${preset.description} Creates a new profile with the marketing home starter recipe.`,
  starterRecipe: {
    type: "marketing-home-profile"
  }
}));
var createTreeDocumentEntry = (document) => cloneWebsiteBuilderValue3(document);
var createTreePageEntry = (document, locale) => ({
  document: createTreeDocumentEntry(document),
  settings: {
    page: {
      name: document.name,
      path: document.route
    },
    template: {},
    record: {}
  },
  resources: {},
  seo: {
    page: {
      title: document.name
    },
    template: {},
    record: {}
  }
});
var createDefaultSiteRegionEntries = (locale, document) => {
  const updatedAt = document.updatedAt;
  return {
    header: {
      document: createTreeDocumentEntry({
        id: "website-builder-site-header",
        name: locale === "ru" ? "\u0425\u0435\u0434\u0435\u0440" : "Header",
        route: "/_site/header",
        updatedAt,
        blocks: [
          {
            id: "site-header-shell",
            module: "website-builder-system",
            type: "site-header-shell",
            props: {
              variant: "commerce-inline",
              brandLabel: "Website Builder",
              brandHref: "/",
              logoImage: null,
              utilityLinks: locale === "ru" ? [
                { label: "\u0423\u0441\u043B\u0443\u0433\u0438", href: "/services" },
                { label: "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B", href: "/partners" },
                { label: "\u0411\u043B\u043E\u0433", href: "/blog" }
              ] : [
                { label: "Services", href: "/services" },
                { label: "Partners", href: "/partners" },
                { label: "Blog", href: "/blog" }
              ],
              catalogLabel: locale === "ru" ? "\u041A\u0430\u0442\u0430\u043B\u043E\u0433" : "Catalog",
              searchPlaceholder: locale === "ru" ? "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0430\u0439\u0442\u0443" : "Search the website",
              contactValue: "+7 (707) 040-43-43",
              contactCaption: locale === "ru" ? "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u0441 09:00 \u0434\u043E 18:00" : "Daily from 09:00 to 18:00",
              primaryCtaLabel: locale === "ru" ? "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F" : "Contact us",
              primaryCtaHref: "/contacts",
              secondaryCtaLabel: "WhatsApp",
              secondaryCtaHref: "https://wa.me/77070404343",
              showLoginAction: false,
              loginLabel: locale === "ru" ? "\u0412\u0445\u043E\u0434 \u0434\u043B\u044F \u0430\u0434\u043C\u0438\u043D\u0430" : "Admin sign in",
              sticky: true,
              compactOnScroll: true,
              categoryLinks: locale === "ru" ? [
                { label: "\u0418\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430", href: "/infrastructure" },
                { label: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438", href: "/operations" },
                { label: "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F", href: "/research" }
              ] : [
                { label: "Infrastructure", href: "/infrastructure" },
                { label: "Operations", href: "/operations" },
                { label: "Research", href: "/research" }
              ]
            }
          }
        ]
      })
    },
    footer: {
      document: createTreeDocumentEntry({
        id: "website-builder-site-footer",
        name: locale === "ru" ? "\u0424\u0443\u0442\u0435\u0440" : "Footer",
        route: "/_site/footer",
        updatedAt,
        blocks: [
          {
            id: "site-footer-shell",
            module: "website-builder-system",
            type: "site-footer-shell",
            props: {
              variant: "classic-dark",
              brandTitle: "Website Builder",
              brandBody: locale === "ru" ? "Package-first \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u0434\u043B\u044F \u043A\u043E\u043C\u0430\u043D\u0434, \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043D\u0443\u0436\u043D\u044B \u043F\u0435\u0440\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u043F\u0430\u043A\u0435\u0442\u044B, \u0447\u0438\u0441\u0442\u044B\u0435 \u0433\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0430\u043A\u0435\u0442\u043E\u0432 \u0438 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446." : "Package-first live website editing for teams that want reusable packages, clean package boundaries and real page composition.",
              logoImage: null,
              subscriptionTitle: locale === "ru" ? "\u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0435\u043B\u0438\u0437\u043E\u0432" : "Get product notes and release updates",
              subscriptionBody: locale === "ru" ? "\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u043A\u0440\u0443\u043F\u043D\u044B\u0435 \u0440\u0435\u043B\u0438\u0437\u044B builder, \u043D\u043E\u0432\u044B\u0435 integration kits \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u044B\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438." : "Subscribe for major builder releases, new integration kits and architecture notes.",
              subscriptionPlaceholder: locale === "ru" ? "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email" : "Enter your email",
              subscriptionButtonLabel: locale === "ru" ? "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F" : "Subscribe",
              navigationColumns: locale === "ru" ? [
                {
                  title: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442",
                  links: [
                    { label: "\u041E\u0431\u0437\u043E\u0440", href: "/" },
                    { label: "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438", href: "/news" },
                    { label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", href: "/contacts" }
                  ]
                },
                {
                  title: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
                  links: [
                    { label: "\u041E \u043D\u0430\u0441", href: "/about" },
                    { label: "\u0411\u043B\u043E\u0433", href: "/blog" },
                    { label: "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u044C", href: "/privacy" }
                  ]
                }
              ] : [
                {
                  title: "Product",
                  links: [
                    { label: "Overview", href: "/" },
                    { label: "Publication", href: "/news" },
                    { label: "Contacts", href: "/contacts" }
                  ]
                },
                {
                  title: "Company",
                  links: [
                    { label: "About", href: "/about" },
                    { label: "Blog", href: "/blog" },
                    { label: "Privacy", href: "/privacy" }
                  ]
                }
              ],
              contactItems: [
                "+7 (707) 040-43-43",
                "hello@example.test",
                locale === "ru" ? "\u0410\u043B\u043C\u0430\u0442\u044B, \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D" : "Almaty, Kazakhstan"
              ],
              legalLabel: locale === "ru" ? "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" : "Privacy policy",
              legalHref: "/privacy",
              copyrightLabel: "Website Builder 2026",
              developerLabel: locale === "ru" ? "\u0421\u0434\u0435\u043B\u0430\u043D\u043E init" : "Built by init",
              developerHref: "https://init.kz"
            }
          }
        ]
      })
    }
  };
};
var createBaseStarterProfileTree = (locale, source) => {
  if (source.type === "blank") {
    return {
      pages: {
        home: createTreePageEntry(
          {
            ...createMarketingDemoDocument(locale),
            blocks: [],
            name: locale === "ru" ? "\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C" : "New profile"
          },
          locale
        )
      },
      site: {
        regions: createDefaultSiteRegionEntries(
          locale,
          createMarketingDemoDocument(locale)
        ),
        settings: {}
      },
      seo: {
        site: {
          title: locale === "ru" ? "\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C" : "New profile"
        }
      },
      settings: {
        publication: {
          locale
        }
      },
      meta: {
        source: "website-builder-starter"
      }
    };
  }
  const document = source.type === "preset" ? createMarketingDemoProfileDocumentFromPresetSource(
    source.sourceId,
    locale
  ) : createMarketingDemoProfileDocumentFromTemplateSource(
    source.sourceId,
    locale
  );
  const sourcePresetId = source.type === "preset" ? source.sourceId : marketingDemoDesignTemplates.find(
    (template) => template.id === source.sourceId
  )?.sourcePresetId;
  const siteRegions = sourcePresetId === "init-landing" ? {
    header: {
      document: createTreeDocumentEntry(
        createInitLandingHeaderDocument()
      )
    },
    footer: {
      document: createTreeDocumentEntry(
        createInitLandingFooterDocument()
      )
    }
  } : createDefaultSiteRegionEntries(locale, document);
  return {
    pages: {
      home: createTreePageEntry(document, locale)
    },
    site: {
      regions: siteRegions,
      settings: sourcePresetId ? {
        design: applyWebsiteBuilderSiteDesignPreset({}, sourcePresetId)
      } : {}
    },
    seo: {
      site: {
        title: document.name
      }
    },
    settings: {
      publication: {
        locale
      }
    },
    meta: {
      source: "website-builder-starter"
    }
  };
};
var marketingDemoDesignTemplateCatalog = [
  {
    id: "aurora-current-template",
    label: "Aurora Current Template",
    labelRu: "\u0428\u0430\u0431\u043B\u043E\u043D Aurora Current",
    description: "The default aurora showcase blueprint with the current glossy builder presentation.",
    sourcePresetId: "aurora-current",
    snapshotRef: "marketing-demo-template/aurora-current",
    previewRoute: "/template/aurora-current"
  },
  {
    id: "paper-flow-template",
    label: "Paper Flow Template",
    labelRu: "\u0428\u0430\u0431\u043B\u043E\u043D Paper Flow",
    description: "A frameless editorial blueprint tuned for airy storytelling and print-inspired pacing.",
    sourcePresetId: "paper-flow",
    snapshotRef: "marketing-demo-template/paper-flow",
    previewRoute: "/template/paper-flow"
  },
  {
    id: "init-landing-template",
    label: "Init Landing Template",
    labelRu: "\u0428\u0430\u0431\u043B\u043E\u043D Init Landing",
    description: "A warm commercial landing blueprint matching the Init public landing shell and section rhythm.",
    sourcePresetId: "init-landing",
    snapshotRef: "marketing-demo-template/init-landing",
    previewRoute: "/template/init-landing"
  }
];
var resolveMarketingDemoDesignTemplateCatalogItem = (templateId) => {
  const resolvedTemplate = marketingDemoDesignTemplateCatalog.find(
    (template) => template.id === templateId
  );
  if (resolvedTemplate) {
    return resolvedTemplate;
  }
  throw new Error(
    `Unknown marketing demo design template source: ${templateId}`
  );
};
var createMarketingDemoDocumentForPresetScenario = (presetId, locale) => {
  const preset = marketingDemoDesignPresets.find((item) => item.id === presetId) ?? marketingDemoDesignPresets[0];
  const baseDocument = resolveMarketingDemoBaseDocument(locale);
  const scenarioDocument = preset.id === "aurora-current" ? cloneWebsiteBuilderValue3(baseDocument) : createPresetScenarioDocument(preset.id, baseDocument, locale);
  return {
    ...scenarioDocument,
    updatedAt: "2026-04-11T00:00:00.000Z",
    blocks: applyMarketingDemoVariantMapToBlocks(
      scenarioDocument.blocks,
      preset.componentVariants
    )
  };
};
var createMarketingDemoDesignTemplateDocument = (templateId, locale = "en") => {
  const template = resolveMarketingDemoDesignTemplateCatalogItem(templateId);
  const nextDocument = createMarketingDemoDocumentForPresetScenario(
    template.sourcePresetId,
    locale
  );
  return {
    ...withoutSiteShellBlocks(nextDocument),
    id: `website-builder-${template.id}`,
    name: locale === "ru" ? template.labelRu : template.label,
    route: template.previewRoute
  };
};
var createMarketingDemoDocument = (locale = "en") => withoutSiteShellBlocks(
  createMarketingDemoDocumentForPresetScenario("aurora-current", locale)
);
var createMarketingDemoProfileDocumentFromPresetSource = (presetId, locale = "en") => {
  const preset = marketingDemoDesignPresets.find(
    (item) => item.id === presetId
  );
  const homeDocument = createMarketingDemoDocument(locale);
  const presetDocument = preset ? withoutSiteShellBlocks(
    createMarketingDemoDocumentForPresetScenario(preset.id, locale)
  ) : homeDocument;
  return {
    ...presetDocument,
    id: homeDocument.id,
    name: homeDocument.name,
    route: homeDocument.route
  };
};
var createMarketingDemoProfileDocumentFromTemplateSource = (templateId, locale = "en") => {
  const templateDocument = createMarketingDemoDesignTemplateDocument(
    templateId,
    locale
  );
  const homeDocument = createMarketingDemoDocument(locale);
  return {
    ...templateDocument,
    id: homeDocument.id,
    name: homeDocument.name,
    route: homeDocument.route
  };
};
var marketingDemoDesignTemplates = marketingDemoDesignTemplateCatalog.map((template) => ({
  id: template.id,
  label: template.label,
  description: `${template.description} Use this immutable template source when creating a new profile.`,
  sourcePresetId: template.sourcePresetId,
  snapshotRef: template.snapshotRef,
  previewRoute: template.previewRoute
}));
var marketingWebsiteBuilderDocuments = {
  home: createMarketingDemoDocument("en"),
  ...Object.fromEntries(
    marketingDemoDesignTemplates.map((template) => [
      `template-${template.id}`,
      createMarketingDemoDesignTemplateDocument(template.id)
    ])
  )
};
var baseDesignTemplates = marketingDemoDesignTemplates;
var baseProfileStarterPresets = marketingDemoProfileStarterPresets;
var baseWebsiteBuilderDocuments = marketingWebsiteBuilderDocuments;
var createBaseWebsiteBuilderDocument = createMarketingDemoDocument;
var createBaseDesignTemplateDocument = createMarketingDemoDesignTemplateDocument;
var createBaseProfileDocumentFromPresetSource = createMarketingDemoProfileDocumentFromPresetSource;
var createBaseProfileDocumentFromTemplateSource = createMarketingDemoProfileDocumentFromTemplateSource;

export {
  createInitLandingHeaderDocument,
  createInitLandingFooterDocument,
  marketingDemoProfileStarterPresets,
  createBaseStarterProfileTree,
  createMarketingDemoDesignTemplateDocument,
  createMarketingDemoDocument,
  createMarketingDemoProfileDocumentFromPresetSource,
  createMarketingDemoProfileDocumentFromTemplateSource,
  marketingDemoDesignTemplates,
  marketingWebsiteBuilderDocuments,
  baseDesignTemplates,
  baseProfileStarterPresets,
  baseWebsiteBuilderDocuments,
  createBaseWebsiteBuilderDocument,
  createBaseDesignTemplateDocument,
  createBaseProfileDocumentFromPresetSource,
  createBaseProfileDocumentFromTemplateSource
};
