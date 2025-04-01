
export default async function Post({params}: {
    params: {
        slug: string[]
    }
}) {
    
    const data=(await params).slug;
    return <div>
        {JSON.stringify(data)}
    </div>
}