export default function NavigationBar(props){ 
    let categories = props.data; //gets the names of objects in data

    //changes the the category onclick of the function in App if not null
    const handleCategoryClick = (categoryId) => {
        if (props.onCategoryClick) {
            props.onCategoryClick(categoryId);
        }
    };

    // navbar component
    // split into the sitename and the category buttons
    return(
        <div className='navbar'> 
            <div className='navbuttons' id='siteName'>
                <a href = "#" onClick={() => handleCategoryClick('all')}>Lazado</a>
            </div>
            <div className='tabs'>
                {categories.map(category => (
                    <div key={category.id}>
                        <a href = "#" id={category.id} onClick={() => handleCategoryClick(category.name)}>{category.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
