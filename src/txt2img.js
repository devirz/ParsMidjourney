import get from 'axios'

const txt2img = async (prompt) => {
    try {
        const url = `https://api.prodia.com/generate?new=true&prompt=${prompt}&model=Realistic_Vision_V5.0.safetensors [614d1063]&negative_prompt=&steps=25&cfg=7&seed=2069545794&sampler=DPM%2B%2B+2M+Karras&aspect_ratio=square`
        const response = await get(url)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const isSuccessful = async (job) => {
    try {
        const url = "https://api.prodia.com/job/" + job
        const response = await get(url)
        console.log(response.data)
        return response.data.status
    } catch (error) {
        console.error(error)
    }
}

export {
    txt2img, isSuccessful
}