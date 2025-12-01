// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import starlightUtils from "@lorenzo_lewis/starlight-utils"

import cloudflare from "@astrojs/cloudflare"
import { fileURLToPath } from "node:url"

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            components: {
                Footer: "src/components/Footer.astro",
                ContentPanel: "src/components/ContentPanel.astro",
                Sidebar: "src/components/Sidebar.astro",
            },
            title: {
                ko: "헤비",
                en: "Hebi.",
            },
            locales: {
                root: {
                    label: "한국어",
                    lang: "ko",
                },
                en: {
                    label: "English",
                },
            },
            plugins: [
                starlightUtils({
                    navLinks: {
                        leading: { useSidebarLabelled: "leadingNavLinks" },
                    },
                }),
            ],
            social: {
                github: "https://github.com/choco-lily/chocolily.dev",
            },
            editLink: {
                baseUrl: "https://github.com/choco-lily/chocolily.dev/edit/main/",
            },
            sidebar: [
                {
                    label: "leadingNavLinks",
                    items: [
                        {
                            label: "소개",
                            translations: { en: "About" },
                            link: "about",
                        },
                    ],
                },
                {
                    label: "헤비",
                    translations: { en: "Hebi" },
                    link: "about",
                },
            ],
            head: [],
            customCss: ["./src/styles/custom.css"],
        }),
    ],

    output: "server",
    adapter: cloudflare({ imageService: "compile" }),
    vite: {
        resolve: {
            alias: {
                "@images": fileURLToPath(
                    new URL("./src/images", import.meta.url),
                ),
            },
        },
    },
})
