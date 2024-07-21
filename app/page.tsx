import {Button as NextButton} from "@nextui-org/react";
import { Button } from "@/components/ui/button"


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


export default function Home() {
  return (
    <main className="flex min-h-screen font-bricolage flex-col items-center justify-between p-24">
      <h1 className="text-7xl font-bricolage font-light">Hello World</h1>
      <h1 className="text-7xl font-lato font-light">Hello World</h1>
      <NextButton color="primary">
        Component using NextUI
      </NextButton>

      <Drawer>
        <DrawerTrigger>Component using Shadcn</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </main>
  );
}
