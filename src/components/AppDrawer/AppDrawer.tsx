import {defineComponent} from "@/utils";
import classes from "./AppDrawer.module.css"
import InteractiveWidget from "@/components/Basic/InteractiveWidget";
import {Icon} from "@iconify-icon/react";


export default defineComponent(props => {
    return( <InteractiveWidget className={classes.AppDrawerContainer}>
        <Icon icon={"material-symbols:apps"} className={classes.drawerIcon}/>
    </InteractiveWidget>)
})
