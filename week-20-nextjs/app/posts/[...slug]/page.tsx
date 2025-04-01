
export default function Post({params}: {
    params: {
        slug: string[]
    }
}) {
    
    console.log(params.slug)
    return <div>
        {JSON.stringify(params.slug)}
    </div>
}