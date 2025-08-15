

interface CategoryProps {
    params: Promise< {
        categories: string[]
    }>;
    searchParams?: Promise<{ [key: string ]: string | string[] }>;
}

export default async function Category(props: CategoryProps) {

    const {categories} = await props.params 
    const search = await props.searchParams;
    console.log(categories);
    console.log(search);
    
    
    return (
        <>
            <h1>Dinamic Category: {categories}</h1>
        </>
    )
}