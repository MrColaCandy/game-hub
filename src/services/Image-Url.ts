const getCroppedImageUrl=(url:string)=>
{
    const target="media/";
    const index=url.indexOf(target)+target.length;

    const newUrl= url.slice(0,index);

    return newUrl+"crop/600/400/"+url.slice(index);
    
    

}

export default getCroppedImageUrl;