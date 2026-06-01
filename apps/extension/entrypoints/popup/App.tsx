import { Button } from '@repo/ui/button'

function App() {
  return (
    <div className='flex w-[360px] flex-col bg-background text-foreground'>
      {/* Header */}
      <header className='flex items-center gap-2 border-b border-border px-4 py-3'>
        <div className='flex h-7 w-7 items-center justify-center rounded-lg bg-primary'>
          <span className='text-xs font-bold text-primary-foreground'>SW</span>
        </div>
        <span className='text-sm font-semibold'>Skins Wishlist</span>
      </header>

      {/* Content */}
      <main className='flex flex-1 flex-col gap-4 overflow-y-auto p-4'>
        {/* Empty state */}
        <div className='flex flex-1 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border py-10 text-center'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-muted'>
            <svg
              className='size-6 text-muted-foreground'
              fill='none'
              stroke='currentColor'
              strokeWidth={1.5}
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
          </div>
          <div>
            <p className='text-sm font-medium'>Wishlist is empty</p>
            <p className='mt-0.5 text-xs text-muted-foreground'>
              Browse skins and add them here
            </p>
          </div>
          <Button size='sm' className='mt-1'>
            Browse skins
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className='flex items-center justify-between border-t border-border px-4 py-2'>
        <span className='text-xs text-muted-foreground'>0 items</span>
        <Button variant='ghost' size='sm'>
          Open full view
        </Button>
      </footer>
    </div>
  )
}

export default App
