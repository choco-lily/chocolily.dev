// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import starlightUtils from "@lorenzo_lewis/starlight-utils"

import cloudflare from "@astrojs/cloudflare"

import partytown from "@astrojs/partytown"

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
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
                            label: "블로그",
                            translations: { en: "Blog" },
                            link: "https://blog.chocolily.dev",
                        },
                        {
                            label: "문서",
                            translations: { en: "Docs" },
                            link: "/maplestory/boss",
                        },
                    ],
                },
                {
                    label: "쵸코릴리",
                    translations: {
                        en: "chocolily",
                    },
                    autogenerate: {
                        directory: "chocolily",
                    },
                },
                {
                    label: "메이플스토리",
                    translations: {
                        en: "MapleStory",
                    },
                    autogenerate: {
                        directory: "MapleStory",
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
                        type: "text/partytown",
                    },
                },{
                    tag: "script",
                    attrs: {
                        src: "//t1.daumcdn.net/kas/static/ba.min.js",
                        async: true,
                        type: "text/partytown",
                    },
                },
                {
                    tag: "script",
                    attrs: {
                        src: "../../custom.js",
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
        partytown(),
    ],

    output: "server",
    adapter: cloudflare({ imageService: "compile" }),
})
