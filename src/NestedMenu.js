import React, { useState } from "react";
import { Menu, MenuItem, Typography } from "@material-ui/core";

import NestedMenuItem from "material-ui-nested-menu-item";

const NestedMenu = () => {
  const [menuPosition, setMenuPosition] = useState(null);

  
  const handleRightClick = (event) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX
    });
  };

  const handleItemClick = (event) => {
    setMenuPosition(null);
  };

  return (
    <div onClick={handleRightClick}>
      <Typography>ALL DATA</Typography>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
        <MenuItem onClick={handleItemClick}>Economia</MenuItem>
        <NestedMenuItem
          label="Istruzione"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
        >
          <MenuItem onClick={handleItemClick}>Studenti</MenuItem>
          <MenuItem onClick={handleItemClick}>Struttura scolastica</MenuItem>

          <NestedMenuItem
            label="Test standardizzati"
            parentMenuOpen={!!menuPosition}
            onClick={handleItemClick}
          >
            <MenuItem onClick={handleItemClick}>Pisa</MenuItem>
            <MenuItem onClick={handleItemClick}>Invalsi</MenuItem>
          </NestedMenuItem>
        </NestedMenuItem>
        <NestedMenuItem
          label="Povertà"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
        >
          <MenuItem onClick={handleItemClick}>Infantile</MenuItem>
          <MenuItem onClick={handleItemClick}>Giovanile</MenuItem>
        </NestedMenuItem>
      </Menu>
    </div>
  );
};

export default NestedMenu;
