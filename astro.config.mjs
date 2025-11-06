// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import starlightUtils from "@lorenzo_lewis/starlight-utils"

import cloudflare from "@astrojs/cloudflare"

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
                ko: "메이플 키우기 위키",
                en: "Maplestory Idle Wiki",
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
            sidebar: [
                {
                    label: "leadingNavLinks",
                    items: [
                        {
                            label: "문서",
                            translations: { en: "Docs" },
                            link: "/wiki",
                        },
                    ],
                },
                {
                    label: "문서",
                    translations: {
                        en: "docs",
                    },
                    items: [
                        {
                            label: "개요",
                            link: "/wiki",
                        },
                    ],
                },
            ],
            head: [
                {
                    tag: "script",
                    attrs: {
                        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2420658305303725",
                        crossorigin: "anonymous",
                        async: true,
                        type: "text/javascript",
                    },
                },
                {
                    tag: "script",
                    attrs: {
                        src: "https://t1.daumcdn.net/kas/static/ba.min.js",
                        async: true,
                        type: "text/javascript",
                        charset: "utf-8",
                    },
                },
                {
                    tag: "script",
                    attrs: {
                        src: "/custom.js",
                    },
                },
                {
                    tag: "meta",
                    attrs: {
                        name: "google-adsense-account",
                        content: "ca-pub-2420658305303725",
                    },
                },
            ],
            customCss: ["./src/styles/custom.css"],
        }),
    ],

    output: "server",
    adapter: cloudflare({ imageService: "compile" }),
})
