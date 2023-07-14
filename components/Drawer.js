import { CloseRounded } from "@mui/icons-material";
import { Box, Button, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, MenuItem, Select, Typography, styled, useTheme } from "@mui/material";
import { useUIContext } from "../context/uiContext";


export const DrawerCloseButton = styled(IconButton)(() => ({
    position: "absolute",
    top: 10,
    left: "250px",
    zIndex: 1999
}));

export const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``; // => can add css between backticks
export default function AppDrawer() {

    const { drawerOpen, setDrawerOpen } = useUIContext();

    return (
        <>
            {drawerOpen
                && <DrawerCloseButton
                    onClick={() => setDrawerOpen(false)} >
                    <CloseRounded sx={{ fontSize: "2.5rem" }} />
                </DrawerCloseButton>}
            <Drawer open={drawerOpen} anchor="right">
                <List>
                    <ListItemButton>
                        <ListItemText>
                            خانه
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText>
                            فروشگاه
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText>
                            بلاگ
                        </ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
        </>

    )
}