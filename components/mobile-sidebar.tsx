import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Sidebar from "@/components/sidebar";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

function MobileSidebar() {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text-white" />
			</SheetTrigger>
			<SheetContent className="p-0 z-100" side="left">
				<VisuallyHidden>
					<SheetTitle>Navegation Menu</SheetTitle>
				</VisuallyHidden>
				<Sidebar />
			</SheetContent>
		</Sheet>
	);
}

export default MobileSidebar;
