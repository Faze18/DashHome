import React, { Component } from "react";
import Container from "../../components/Grid/Container";
import Links from "../../components/links";
import MeBox from "../../components/meBox";
import SmallNote from "../../components/smallNote";
import ItemList from "../../components/itemList";
import { listDisplay } from "../Workspace/display functions";
import Col3 from "../../components/colMd3";
import Col6 from "../../components/Col6";
import Col2 from "../../components/ColMd2";
import Title from "../../components/TitleBar";
import API from "../../utils/API";

class Blog extends Component {
    state = {
        blog: [],
        blogTitles: [],
        email: JSON.parse( sessionStorage.getItem( 'email' ) )

    }
    componentDidMount() {
        this.populateBlog();
        console.log( this.state );
    }
    componentDidUpdate() {
        console.log( this.state )
    }
    populateBlog = () => {
        var blog = [];
        var blogTitles = [];
        API.getUserData( this.state.email )
            .then( res => {
                if ( res.data ) {
                    for ( var n = 0; n < res.data.blogs.length; n++ ) {
                        blogTitles.push( res.data.blogs[n].blogTitle );
                        blog.push( res.data.blogs[n].blogText );
                    }
                    this.setState( { blogTitles: blogTitles } );
                    this.setState( { blog: blog } ), () => {
                        console.log( this.state );

                    };

                }
            } )
    }

    render() {

        { this.emptyMaker }
        { this.daySetter }
        const { pizza } = this.context
        return (
            <div>
                <br></br><br></br><br></br>

                {this.state.blog.map( function ( blog, index ) {
                    return (
                        <div style={{zIndex:-10,width: 50+"%", position: "relative", left: 25+"%", color:"#004080"}}>
                            
                             {blog}
                         



                            <hr />
                        </div>
                    )
                } )}

            </div>
        )
    }
}
export default Blog;