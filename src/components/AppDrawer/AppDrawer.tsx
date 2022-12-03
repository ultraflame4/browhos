import {defineComponent} from "@/utils";
import classes from "./AppDrawer.module.css"
import InteractiveWidget from "@/components/Basic/InteractiveWidget";
import {Icon} from "@iconify-icon/react";
import {useContext} from "react";
import {CurrentModal} from "@/core";

const AppDrawerItem = defineComponent(props => {
    return (
        <li>
            <Icon icon={"material-symbols:apps"} className={classes.drawerItem}/>
        </li>
    )
})


const AddItemModal= defineComponent(props => {
    return (<div className={classes.AddItemOverlay}>
        <h2>Add Item</h2>
        <input placeholder={"Name"}/>

        <input placeholder={"Link"}/>

        <button>Add</button>
    </div>)
})

export default defineComponent(props => {
    const modalctx = useContext(CurrentModal)

    function onAddItem() {

        modalctx.setModal(<AddItemModal/>)
    }

    return( <InteractiveWidget className={classes.AppDrawerContainer}>

        <Icon icon={"material-symbols:apps"} className={classes.drawerIcon}/>
        <ul>

            <AppDrawerItem/>
            <li role={"button"} onClick={onAddItem}>
                <Icon icon={"material-symbols:add-box"} className={classes.drawerAddIcon}/>
            </li>
        </ul>


    </InteractiveWidget>)
})
