import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// @ts-ignore
import { WidthProvider, Responsive } from "react-grid-layout";
import GridBackground from "./grid";
import { Container, Item, Actions } from "./styles";

interface Props {
  padding: [number, number];
  cols: number;
  rowHeight: number;
  droppingItem: any;
  items: any;
  onEdit: (id: string) => void;
  onDrop: (layout: any, item: any) => void;
  onRemove: (id: string) => void;
}

const resizeHanlder = ["s", "w", "n", "e", "sw", "se", "nw", "ne"];

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const GridLayout = (props: Props) => {
  const {
    padding,
    cols,
    rowHeight,
    droppingItem,
    items,
    onEdit,
    onDrop,
    onRemove
  } = props;
  const [width, setWidth] = useState<number>(0);

  const onWidthChange = (containerWidth: number) => {
    setWidth(containerWidth);
  };

  const onLayoutChange = (layout: unknown, ...rest: any) => {
    console.log("layout change: ", layout, rest);
  };

  const onDragStop = (layouts: any, oldItem: any, newItem: any) => {
    console.log("onDragStop: ", layouts, newItem);
  };

  const renderItem = (item: any) => {
    const { i, layout, children } = item;
    return (
      <Item key={i} data-grid={layout}>
        {children}
        <Actions>
          <EditOutlined onClick={() => onEdit(i)} />
          <DeleteOutlined onClick={() => onRemove(i)} />
        </Actions>
      </Item>
    );
  };

  return (
    <Container>
      <GridBackground
        containerWidth={width}
        cols={cols}
        rowHeight={rowHeight}
        padding={padding}
      />
      <ResponsiveReactGridLayout
        resizeHanlder={resizeHanlder}
        margin={padding}
        containerPadding={[0, 0]}
        cols={{ lg: cols }}
        rowHeight={rowHeight}
        breakpoints={{ lg: 600 }}
        compactType={null}
        resizeHandles={["se", "ne", "sw", "nw"]}
        isDroppable={true}
        droppingItem={droppingItem}
        onDragStop={onDragStop}
        // @ts-ignore
        onDrop={onDrop}
        onWidthChange={onWidthChange}
        onLayoutChange={onLayoutChange}
      >
        {items.map(renderItem)}
      </ResponsiveReactGridLayout>
    </Container>
  );
};

GridLayout.defaultProps = {
  padding: [16, 16],
  cols: 12,
  rowHeight: 36
};

export default GridLayout;
