import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ImageDialogProps {
  imageUrl: string; // URL of the image to display
  title?: string; // Optional title for the dialog
  // trigger: React.ReactNode; // Custom trigger component (e.g., a button)
}

const ImageDialog: React.FC<ImageDialogProps> = ({ imageUrl, title = "Image Preview" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">View</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <div className="mt-4 flex justify-center">
          <img
            src={imageUrl}
            alt="Preview"
            className="max-w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
