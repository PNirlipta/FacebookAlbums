import React from 'react'
class Albums extends React.Component {  
    
    componentDidMount(){
    const FB = window.FB;
    let fbAlbumsPhotosObj = {};
        FB.api('/me?fields=albums.limit(5){name,count,cover_photo{picture}}', response => {
            response.albums.data.forEach(album => {
              album.cover_photo = album.cover_photo.picture; //All we need is picture
            });
          
            fbAlbumsPhotosObj = response.albums; //Remove initial albums layer
            console.log(fbAlbumsPhotosObj);
          });     
        this.props.fetchAlbums(fbAlbumsPhotosObj);
    }    

  render() {
    return <h1>Albums</h1>
  }
}
export default Albums