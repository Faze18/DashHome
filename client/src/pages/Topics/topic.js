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

class Topic extends Component {
    state = {
        blog: [],
        blogTitles: [],
        blogButtons:[],
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
        var blog = [

        ];
        var blogTitles = [];
        var blogButtons=[];
        API.allTopics()
            .then( res => {
                if ( res.data ) {
                    console.log( res.data )
                    for ( var n = 0; n < res.data.length; n++ ) {
                        blogButtons.push( res.data[n].topic );

                        for ( var i = 0; i < res.data[n].note.length; i++ ) {
                            console.log( res.data[n] )
                            blogTitles.push( res.data[n].topic );

                            blog.push( res.data[n].note[i] );
                        }
                    }
                    console.log( blogTitles )
                    this.setState( { blogButtons: blogButtons } );

                    this.setState( { blogTitles: blogTitles } );
                    this.setState( { blog: blog } ), () => {
                        console.log( this.state );

                    };

                }
            } )
    }
    mapTitles = ( i ) => {
        return this.state.blogTitles[i]
    }
    printPage = () => {

        {
            this.state.blog.map( function ( blog, index ) {
                return (
                    <div style={{ zIndex: -10, width: 50 + "%", position: "relative", left: 25 + "%", color: "#004080" }}>
                        {/* {this.state.blogTitles[index]} */}
                        {blog}
                        <hr />
                    </div>
                )
            } )
        }
    }
    render() {

        return (
            <div>
                <br></br><br></br><br></br>
                {this.printPage}
                {this.state.blogButtons.map( function ( blog, index ) {
                    var href = '/topic/'+blog;
                    return <div><button style={{width:100+"px"}}><a href ={href} >{blog}</a></button><br></br></div>
                })}

                {
            this.state.blog.map( function ( blog, index ) {
                return (
                    <div style={{ zIndex: -10, width: 50 + "%", position: "relative", left: 25 + "%", color: "#004080" }}>
                        {/* {this.state.blogTitles[index]} */}
                        {blog}
                        <hr />
                    </div>
                )
            } )
        }


            </div>
        )
    }
}
export default Topic;