import { observer } from "mobx-react-lite"
import { Counter } from "../counter/Counter"
import counterStore from "../../stores/counter-store";
import postsStore from "../../stores/posts-store";
import { useEffect } from "react";

const counter1 = new counterStore();
const counter2 = new counterStore();


export const Wrapper = observer(() => {
    const {getPostsAction, posts} = postsStore

    useEffect(() => {
        getPostsAction()
    }, [])
    console.log(posts)
    return (
        <>
            <Counter {...counter1} total={counter1.total}/>
            <Counter {...counter2} total={counter2.total}/>
        </>
    )
})