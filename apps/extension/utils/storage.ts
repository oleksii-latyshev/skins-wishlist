export interface WishlistItem {
  id: string; // The URL or unique item name
  name: string;
  imageUrl: string;
  url: string;
  price?: string;
  savedAt: number;
}

export async function getWishlist(): Promise<WishlistItem[]> {
  const data = await browser.storage.local.get('wishlist');
  return (data.wishlist as WishlistItem[]) || [];
}

export async function addToWishlist(item: WishlistItem): Promise<void> {
  const wishlist = await getWishlist();
  if (!wishlist.find((i) => i.id === item.id)) {
    wishlist.push(item);
    await browser.storage.local.set({ wishlist });
  }
}

export async function removeFromWishlist(id: string): Promise<void> {
  let wishlist = await getWishlist();
  wishlist = wishlist.filter((i) => i.id !== id);
  await browser.storage.local.set({ wishlist });
}

export async function isInWishlist(id: string): Promise<boolean> {
  const wishlist = await getWishlist();
  return wishlist.some((i) => i.id === id);
}
