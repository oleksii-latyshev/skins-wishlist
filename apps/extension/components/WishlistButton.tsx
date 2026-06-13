import { useState, useEffect } from 'react';
import { Button } from '@repo/ui/button';
import { isInWishlist, addToWishlist, removeFromWishlist, WishlistItem } from '../utils/storage';

interface WishlistButtonProps {
  itemData: WishlistItem;
}

export function WishlistButton({ itemData }: WishlistButtonProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    isInWishlist(itemData.id).then((saved) => {
      setIsSaved(saved);
      setIsLoading(false);
    });
  }, [itemData.id]);

  const toggleWishlist = async () => {
    if (isSaved) {
      await removeFromWishlist(itemData.id);
      setIsSaved(false);
    } else {
      await addToWishlist({
        ...itemData,
        savedAt: Date.now()
      });
      setIsSaved(true);
    }
  };

  if (isLoading) return null;

  return (
    <div className="tw-fixed tw-bottom-4 tw-right-4 tw-z-[9999] tw-flex tw-flex-col tw-gap-2">
      <Button 
        onClick={toggleWishlist}
        variant={isSaved ? "outline" : "default"}
        className={`tw-shadow-lg ${isSaved ? 'tw-border-green-500 tw-text-green-500' : ''}`}
      >
        {isSaved ? 'Saved to Wishlist ✓' : 'Save to Wishlist'}
      </Button>
    </div>
  );
}
