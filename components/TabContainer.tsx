import Tab from "./Tab";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

export const initialTabs = [
  {
    name: "New tab1",
    id: "1",
    isActive: true,
  },
];

const TabContainer = () => {
  const [tabs, setTabs] = useState(initialTabs);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tabs);
    const [reorderedItem] = items.splice(result.source?.index, 1);
    items.splice(result.destination?.index, 0, reorderedItem);

    setTabs(items);
  };

  const generateNewTab = () => {
    return {
      name: `New tab${tabs.length + 1}`,
      id: (Math.random() * 10000000).toString(),
      isActive: true,
    };
  };

  const addTab = () => {
    const prevTabs = tabs.map((tab) => {
      tab.isActive = false;
      return tab;
    });
    setTabs([...prevTabs, generateNewTab()]);
  };

  const renderClose = tabs.length > 1;

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
                    renderClose={renderClose}
                    tabs={tabs}
                    setTabs={setTabs}
                    ref={provided.innerRef}
                    {...tab}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  />
                )}
              </Draggable>
            ))}
            <div className="add-btn" onClick={addTab}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4V12"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 8H12"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TabContainer;
