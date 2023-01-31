import React, { useState } from "react";
import { times, reject } from "lodash";
import styled from "styled-components";
import SidePanel from "./SidePanel";
import GridLayout from "./GridLayout";
import "./styles.css";

interface WidgetConfig {
  w: number;
  h: number;
  icon?: unknown;
}

const Container = styled.div`
  display: flex;
`;

const length = 1;

const cols = 12;
const rowHeight = 56;
const padding: [number, number] = [16, 16];
const layoutConfig = {
  cols,
  rowHeight,
  padding
};

const App = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [count, setCount] = useState(length);

  const [droppingItem, setDroppingItem] = useState<WidgetConfig>({
    h: 4,
    w: 3
  });

  const [items, setItems] = useState(
    times(length).map((i, key, list) => ({
      i: key.toString(),
      type: "text",
      layout: {
        x: Math.floor(Math.random() * 12),
        y: Math.floor(Math.random() * 20),
        w: Math.floor(Math.random() * 4) + 1,
        h: Math.floor(Math.random() * 4) + 1
      },
      children: <div>text</div>
    }))
  );

  const onDragStart = (item: any) => {
    setDroppingItem(item);
  };

  const onEdit = (id: string) => {
    console.log("onEdit: ", id);
    setVisible(!visible);
  };

  const onDrop = (layout: any, layoutItem: any) => {
    console.log("on Drop: ", layout, layoutItem);
    setItems(
      items.concat({
        i: count.toString(),
        type: "text",
        layout: layoutItem,
        children: <span>newItem</span>
      })
    );
    setCount(count + 1);
  };

  const onRemoveItem = (id: string) => {
    console.log("on remove:", id);
    setItems(reject(items, { i: id }));
  };

  console.log("items: ", items);

  return (
    <Container>
      <SidePanel onDragStart={onDragStart} />
      <GridLayout
        droppingItem={droppingItem}
        items={items}
        onEdit={onEdit}
        onDrop={onDrop}
        onRemove={onRemoveItem}
        {...layoutConfig}
      />
    </Container>
  );
};

export default App;
