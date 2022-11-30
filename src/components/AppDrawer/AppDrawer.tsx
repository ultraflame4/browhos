import {defineComponent} from "@/utils";
import classes from "./AppDrawer.module.css"
import InteractiveWidget from "@/components/Basic/InteractiveWidget";
import {Icon} from "@iconify-icon/react";

const AppDrawerItem = defineComponent(props => {
    return (
        <li>
            <Icon icon={"material-symbols:apps"} className={classes.drawerItem}/>
        </li>
    )
})


export default defineComponent(props => {
    return( <InteractiveWidget className={classes.AppDrawerContainer}>

        <Icon icon={"material-symbols:apps"} className={classes.drawerIcon}/>
        <ul>

            <AppDrawerItem/>
            <li>
                <Icon icon={"material-symbols:add-box"} className={classes.drawerAddIcon}/>
            </li>
        </ul>

    </InteractiveWidget>)
})
