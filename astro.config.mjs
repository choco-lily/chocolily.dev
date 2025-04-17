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
                ko: "쵸코릴리",
                en: "chocolily",
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
                twitter: "https://x.com/Choco_Lily__",
                github: "https://github.com/choco-lily/chocolily.dev",
            },
            sidebar: [
                {
                    label: "leadingNavLinks",
                    items: [
                        {
                            label: "문서",
                            translations: { en: "Docs" },
                            link: "/chocolily",
                        },
                    ],
                },
                {
                    label: "쵸코릴리",
                    translations: {
                        en: "chocolily",
                    },
                    items: [
                        {
                            label: "개요",
                            link: "/chocolily",
                        },
                        {
                            label: "메이플스토리",
                            items: [
                                {
                                    label: "보스",
                                    link: "/chocolily/maplestory/boss",
                                },
                            ],
                        },
                        {
                            label: "사운드 볼텍스",
                            items: [
                                {
                                    label: "프로필",
                                    link: "/chocolily/sdvx/info",
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "플라티나 랩",
                    translations: {
                        en: "PLATiNA :: LAB",
                    },
                    autogenerate: {
                        directory: "PLATiNA_LAB",
                    },
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
