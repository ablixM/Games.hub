import PlatformList from "../assets/data/PlatformList"

interface Platforms{
    id: number,
    name: string,
    slug: string
}

const usePlatforms = ()=>({
    data: PlatformList.map(item => item.platform) as Platforms[], 
    isLoading: false,
    error: null
})

export default usePlatforms