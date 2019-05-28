import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
					items: [],
					categories: [],
					users:[],
          isLoading: false,
        }
      }
    
      componentDidMount(){
        fetch('http://localhost:8080/Blog/api/blog')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoading: true,
            items: json,
          })
				});
				fetch('http://localhost:8080/Blog/api/category')
        .then(res => res.json())
        .then(data => {
          this.setState({
            categories: data,
          })
				});
				fetch('http://localhost:8080/Blog/api/user')
        .then(res => res.json())
        .then(data => {
          this.setState({
            users: data,
          })
				});
      }
    render() {
				var {items} = this.state;
				var {categories} = this.state;
				var {users} = this.state;
  return (
      <div>
<div id="templatemo_top_panel">
	<div id="templatemo_header_section">
    	<div id="search_box">
            <form method="get" action="#">
                <input type="text" name="searchfield" id="search_field" title="searchfield" />
                <input type="submit" name="search" value="" alt="Search" id="search_button" title="Search" />
            </form>
        </div>
    </div> 
		{/* <!-- end of header --> */}
</div>    
    
<div id="templatemo_menu_panel">
    <div id="templatemo_menu_section">
        <ul>
            <li><a href="index.html" class="current">Home</a></li>
            <li><a href="subpage.html">Features</a></li>
            <li><a href="http://www.templatemo.com" target="_parent">Gallery</a></li>
            <li><a href="#">Forum</a></li>  
            <li><a href="#">Company</a></li> 
            <li><a href="#" class="lastmenu">Contact Us</a></li>                     
        </ul> 
    </div>
</div> 
{/* <!-- end of menu --> */}

<div id="templatemo_content_panel">
	<div id="templatemo_content">
    	
        <div id="templatemo_content_left">
        	<div class="templatemo_content_left_section">
            	<div class="left_section_title">Categories</div>
                <div class="left_section_content">
                	<ul>
									{categories.map(category => (
                        <li><a href="#">{category.categoryName}</a></li>
												))}
                    </ul>
                </div>
            </div>
            
            <div class="templatemo_content_left_section">
            	<div class="left_section_title">Authors</div>
                <div class="left_section_content">
                	<ul>
									{users.map(user => (
                        <li><a href="#">{user.name}</a></li>
												))}	
                    </ul>
                </div>
            </div>
            
            <div class="templatemo_content_left_section">
            	<div class="left_section_title">Popular Posts</div>
                <div class="left_section_content">
                	<ul>	
                        {/* <li>Lorem Ipsum on <a href="#">Donec mollis aliquet</a></li>
                        <li>Consectetuer on <a href="#">Suspendisse a nibh</a></li>
                        <li>Sed on <a href="#">Pellentesque vitae magna</a></li>
                        <li>Vitae Neque on <a href="#">Nunc blandit orci sit amet risus</a></li>
                       <li>Donec Mollis on <a href="#">Maecenas adipiscing elementum</a></li> */}
                    </ul>
                </div>
            </div>
            
            <div class="templatemo_content_left_section">
            	<div class="left_section_title">Gallery</div>
                <div class="left_section_content">
           	    <ul class="gallery">
                        {/* <li><img src={"templatemo_thumb_01.jpg".replace("http://localhost:3000","../images/")} alt="image name" /></li>
                        <li><img src="images/templatemo_thumb_02.jpg" alt="image name" /></li>
                        <li><img src="images/templatemo_thumb_03.jpg" alt="image name" /></li>
                        <li><img src="images/templatemo_thumb_04.jpg" alt="Free Template" /></li>
                        <li><img src="images/templatemo_thumb_05.jpg" alt="Flash Resources" /></li>
                		<li><img src="images/templatemo_thumb_06.jpg" alt="Web Design" /></li> */}
                </ul>
                <div class="cleaner">&nbsp;</div>
                <br />
                <a href="#">View All</a>
              </div>
            </div>
         </div> 
				 {/* <!-- end of content left --> */}
         
         <div id="templatemo_content_right">
				 {items.map(item => (
        	<div class="templatemo_post_section">
                <div class="date_section">
                	{item.date.slice(0,2)}<span>{item.date.slice(3,7)}</span>                   
                </div>
            	<div class="post_content">                	
                    <div class="post_title">
                    	<h1>{item.title}</h1>
                        <div class="post_info">
                        	Posted by <a href="http://www.templatemo.com" target="_parent">{item.author}</a> | <a href="#">{item.category}</a> | <span>{item.date.slice(11,21)}</span> </div>
                    </div>
                    
                    <div class="post_body">
                        <img src={item.img.replace("http://localhost:3001","..")} width="400" height="186" alt="image" /><br />
                        <a href="#"><span class="comment">512 comments</span></a> 
                  </div>    
                                 
                </div>
						</div> 
						 ))}
						{/* <!-- end of 1 post --> */}
        </div> 
				{/* <!-- end of content right --> */}
        
		<div class="cleaner_with_height">&nbsp;</div>
    </div>
</div> 
{/* <!-- end of content panel --> */}

<div id="templatemo_bottom_panel">
    <div id="templatemo_bottom_section">
    
    	<div id="templatemo_bottom_section_left">
        	<div class="bottom_section_title">Latest Posts</div>
        	<ul class="popular_post">	
                <li><a href="#">Donec mollis aliquet</a><br />Author name - Oct 26, 2048  <span class="comment">12</span></li>
                <li><a href="#">Aliquam tristique lacust</a><br />Author name - Oct 24, 2048  <span class="comment">8</span></li>
                <li><a href="#">Suspendisse potent</a><br />Author name - Oct 19, 2048  <span class="comment">10</span></li>
                <li><a href="#">Nullam vitae tellus</a><br />Author name - Oct 14, 2048  <span class="comment">30</span></li>
                <li><a href="#">Lorem ipsum dolor</a><br />Author name - Oct 12, 2048  <span class="comment">15</span></li>
            </ul>
        </div>
        
        <div id="templatemo_bottom_section_right">
        	<div class="bottom_section_title">Friends</div>
            <ul class="list_section">
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">Duis mollis</a></li>
                <li><a href="#">Maecenas adipiscing</a></li>
                <li><a href="#">Nunc blandit orci</a></li>
                <li><a href="#">Cum sociis natoque</a></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc quis sem nec tellus blandit tincidunt.</p>
                <a href="http://validator.w3.org/check?uri=referer"><img style={{border:"0",width:"88px",height:"31px"}} src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" width="88" height="31" vspace="8" border="0" /></a>
<a href="http://jigsaw.w3.org/css-validator/check/referer"><img style={{border:"0",width:"88px",height:"31px"}}  src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" vspace="8" border="0" /></a> 
        </div>    
    </div>
</div> 
{/* <!-- end of bottom panel --> */}
<div id="templatemo_footer_panel">
    <div id="templatemo_footer_section">
        Copyright © 2019 <a href="#">Đại học Khoa học huế</a> | 
        <a href="http://www.iwebsitetemplate.com" target="_parent">&nbsp;Đồ án tốt nghiệp</a> by 
        <a href="http://www.templatemo.com" target="_parent">&nbsp;Lê Tiến Hùng</a>
    </div>
</div>
{/* <!--  Free CSS Template is designed by templatemo.com  --> */}
</div>
  );
}}

export default App;
