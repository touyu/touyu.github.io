export const siteData = {
    title: "touyu.me",
    subTitle: "Yuto Akiba",
    description: "Software Engineer",
    githubUrl: "https://github.com/touyu",
    twitterUrl: "https://twitter.com/akkey0222"
}

export interface BackgroundImage {
    path: string
    prompt: string
    generated_by: string
}

export const backgroundImages = [
    {
        path: "/touyu_many_computers_piles_miscellaneous_placed_deconstructed_d_59ecf491-e4ad-42be-821f-a19f3537f808.png",
        prompt: `"many computers, piles, miscellaneous placed, deconstructed, deep sea`,
        generatedBy: "Midjourney"
    }
]