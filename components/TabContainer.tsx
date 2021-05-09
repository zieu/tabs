import Tab from "./Tab";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

export const initialTabs = [
  {
    name: "first tab",
    id: "1",
  },
  {
    name: "second tab",
    id: "2",
  },
  {
    name: "third tab",
    id: "3",
  },
  {
    name: "fourth tab",
    id: "4",
  },
];

const TabContainer = () => {
  const [tabs, setTabs] = useState(initialTabs);

  const onDragEnd = (result) => {
    const items = Array.from(tabs);
    const [reorderedItem] = items.splice(result.source?.index, 1);
    items.splice(result.destination?.index, 0, reorderedItem);

    setTabs(items);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tabs" direction="horizontal">
        {(provided) => (
          <div
            className="tab-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tabs.map((tab, index) => (
              <Draggable key={tab.id} draggableId={tab.id} index={index}>
                {(provided) => (
                  <Tab
                    name={tab.name}
                    id={tab.id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TabContainer;
