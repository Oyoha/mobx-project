import { observer } from "mobx-react-lite"
import { Counter } from "../counter/Counter"
import counterStore from "../../stores/counter-store";
import { useEffect } from "react";
import { useStores } from "../../root-store-context";

const counter1 = new counterStore();
const counter2 = new counterStore();


export const Wrapper = observer(() => {

    const { post } = useStores()

    useEffect(() => {
        post.getPostsAction()
    }, [])
    console.log(post.posts)
    return (
        <>
            <Counter {...counter1} total={counter1.total}/>
            <Counter {...counter2} total={counter2.total}/>
        </>
    )
})