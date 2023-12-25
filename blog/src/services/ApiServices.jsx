
//By This api geting all blogs.   // Go to the 📂homeAllCategorys
export const getNews = async() =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs/`);
   
    if(!response.ok){ //This code for error handle
        // eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();
    return data;

}

//By This api doing category_filtering // Go to the BlogcategoryList.jsx
export const getCategory = async(slug) =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/category_filter/?category_slug=${slug}`);
   
    if(!response.ok){ //This code for error handle
        // eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json(); 
    return data;
}


//By This api Geting bloge details when click a card // Go to the DetailsCard.jsx
export const getSingleBloge = async(slug) =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs/${slug}/`);
   
    if(!response.ok){ //This code for error handle
        // eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();
    return data;
    

}


//By This api Geting Navbar Categorys // Go to the Navbar.jsx
export const getSingleCategorys = async() =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/categories/`);
   
    if(!response.ok){ //This code for error handle
        // eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();
    return data;
    

}



//By This api Geting poster // Go to the BusinessPoster.jsx
export const getPoster = async() =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/business_posters/`);
   
    if(!response.ok){ //This code for error handle
        // eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();
    return data;
    

}





