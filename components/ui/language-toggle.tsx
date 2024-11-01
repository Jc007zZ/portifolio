import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";

export  function LanguageToggle() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">English</DropdownItem>
        <DropdownItem key="copy">Portugues</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}