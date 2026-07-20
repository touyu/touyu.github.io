export const siteData = {
    title: "touyu.me",
    subTitle: "Yuto Akiba",
    description: "Software Engineer",
    githubUrl: "https://github.com/touyu",
    xUrl: "https://x.com/akkey0222"
}

export interface Career {
    period: string
    company: string
    position: string
}

export const careers: Career[] = [
    {period: "2025.04 - NOW", company: "Nstock, Inc.", position: "Software Engineer"},
    {period: "2022.04 - 2025.03", company: "BACKSTAGE, Inc.", position: "VPoT / Tech Lead"},
    {period: "2018.04 - 2022.04", company: "RINACITA, Inc.", position: "Co-Founder / CTO"},
]
