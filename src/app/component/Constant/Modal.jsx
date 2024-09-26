"use client";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function Modal({ openModal, setOpenModal, Component, ...props }) {
  const handleOpen = () => setOpenModal(!openModal);

  return (
    <>
      <Dialog
        open={openModal}
        handler={handleOpen}
        size="xxl"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="w-full h-[100dvh] overflow-x-hidden"
      >
        <DialogBody className="w-full h-[100dvh]">
          {<Component {...props} />}
        </DialogBody>
        <DialogFooter className="fixed bottom-0 right-0">
          <Button
            color="red"
            onClick={handleOpen}
            className="mr-1 border-none outline-none"
          >
            Cancel
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
