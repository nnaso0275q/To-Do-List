import { EasyCounter } from "@/components/1-easy_counter";
import { InputField } from "@/components/2-input_field";
import { ToggleVisibility } from "@/components/3-toggle_visibility";
import { CharacterCounter } from "@/components/4-character_counter";
import { TodoList } from "@/components/5-todo_list";
import { ColorSwitcher } from "@/components/6-color_switcher";
import { SearchFilter } from "@/components/7-search_filter";
import { DragDropList } from "@/components/8-drag_drop_list";

const Home = () => {
  return (
    <div className="ml-[10] text-2xl">
      {/* 1.counter */}
      <EasyCounter></EasyCounter>
      {/* 2.input */}
      <InputField></InputField>
      {/* 3.toggle */}
      <ToggleVisibility></ToggleVisibility>
      {/* 4.character*/}
      <CharacterCounter></CharacterCounter>
      {/* 5.todo list */}
      <TodoList></TodoList>
      {/* 6.color switcher */}
      <ColorSwitcher></ColorSwitcher>
      {/* 7.search filter*/}
      <SearchFilter></SearchFilter>
      {/* 8.drag, drop list */}
      <DragDropList></DragDropList>
    </div>
  );
};

export default Home;
