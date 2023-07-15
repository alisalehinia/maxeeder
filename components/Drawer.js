import { CloseRounded } from "@mui/icons-material";
import { Box, Button, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, MenuItem, Select, Typography, styled, useTheme } from "@mui/material";
import { useUIContext } from "../context/uiContext";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


export const DrawerCloseButton = styled(IconButton)(() => ({
    position: "absolute",
    top: 10,
    right: "140px",
    zIndex: 1999
}));

export const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``; // => can add css between backticks
export default function AppDrawer() {

    const { drawerOpen, setDrawerOpen } = useUIContext();

    return (
        <>

            <Drawer open={drawerOpen} anchor="right" >

                <List sx={{
                    // background: 'linear-gradient(to right, #8B5CF6, #60A5FA)',
                    background: "white",
                    height: "100vh"
                }}>

                    {drawerOpen
                        && <IconButton
                            onClick={() => setDrawerOpen(false)} >
                            {/* <CloseRounded sx={{ fontSize: "2.5rem" }} /> */}
                            <ArrowRightIcon className="w-8 h-8" />
                        </IconButton>}
                    <MiddleDivider />
                    <ListItemButton sx={{ width: 150 }} >
                        <ListItemText sx={{ textAlign: 'right', color: "#0f172a" }}>
                            خانه
                        </ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText sx={{ textAlign: 'right', color: "#0f172a" }}>
                            فروشگاه
                        </ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText sx={{ textAlign: 'right', color: "#0f172a" }}>
                            بلاگ
                        </ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
        </>

    )
}