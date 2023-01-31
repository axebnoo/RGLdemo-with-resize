import React from "react";
import { Container, AddItem } from "./styles";

interface Props {
  onDragStart: (item: any) => void;
}
const SidePanel = (props: Props) => {
  const { onDragStart } = props;

  return (
    <Container style={{ height: "60px" }}>
      <AddItem
        draggable={true}
        onDragStart={() => onDragStart({ i: "dropping", w: 4, h: 3 })}
      >
        Add chart
      </AddItem>
      <AddItem
        draggable={true}
        onDragStart={() => onDragStart({ i: "dropping", w: 3, h: 1 })}
      >
        Add filter
      </AddItem>
      <AddItem
        draggable={true}
        onDragStart={() => onDragStart({ i: "dropping", w: 2, h: 1 })}
      >
        Add Text
      </AddItem>
    </Container>
  );
};

export default SidePanel;
