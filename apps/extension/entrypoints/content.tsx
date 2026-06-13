import '../assets/tailwind.css';
import { createRoot } from 'react-dom/client';
import { WishlistButton } from '../components/WishlistButton';

export default defineContentScript({
  matches: ['*://steamcommunity.com/market/listings/730/*'],
  cssInjectionMode: 'ui',

  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: 'skins-wishlist-ui',
      position: 'inline',
      anchor: 'body',
      append: 'last',
      onMount: (container) => {
        // Extract skin data from the page
        const itemNameEl = document.getElementById('largeiteminfo_item_name');
        const itemImageEl = document.querySelector('.market_listing_largeimage img');
        
        const name = itemNameEl?.textContent?.trim() || 'Unknown Skin';
        const imageUrl = itemImageEl?.getAttribute('src') || '';
        const url = window.location.href;
        const id = url.split('?')[0]; // Use base URL as unique ID
        
        const itemData = { id, name, imageUrl, url, savedAt: Date.now() };

        const wrapper = document.createElement('div');
        container.append(wrapper);
        const root = createRoot(wrapper);
        
        root.render(<WishlistButton itemData={itemData} />);
        
        return { root, wrapper };
      },
      onRemove: (elements) => {
        elements?.root.unmount();
        elements?.wrapper.remove();
      },
    });

    ui.mount();
  },
});
