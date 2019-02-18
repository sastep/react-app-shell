//@flow
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {
    fetchPosts,
    fetchSinglePost,
    createPost,
    updatePost,
    deletePost,
} from 'actions/Posts';

import './Main.scss';

const mapStateToProps = ({posts}) => ({posts});

type IMainProps = {
    posts: ?Array<Object>,
    fetchPosts: () => Promise<Array<Object>>,
}

@connect(mapStateToProps, {
    fetchPosts,
    fetchSinglePost,
    createPost,
    updatePost,
    deletePost,
})
export default class Main extends PureComponent<IMainProps> {
    
    componentDidMount() {
        this.props.fetchPosts();
    }


    render() {
        const {posts} = this.props;


        return (
            <section className="Main">
                {posts && posts.length > 0 && posts.map(item => (
                    <div
                        key={item.id}
                        className="Main_item"
                    >
                        <span>{item.title}</span>
                        <p>{item.body}</p>
                    </div>
                ))}
            </section>
        );
    }
}
