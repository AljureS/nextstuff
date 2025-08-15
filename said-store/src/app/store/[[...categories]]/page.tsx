interface CategoryProps {
    params: {
        categories: string[]
        searchParams?: string | string[]
    }
}

export default function Category(props: CategoryProps) {
    console.log(props);
    
    const {categories} = props.params 
    console.log(categories);
    
    
    return (
        <>
            <h1>Dinamic Category: {categories}</h1>
        </>
    )
}