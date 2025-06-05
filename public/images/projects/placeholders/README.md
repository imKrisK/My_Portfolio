# Project Image Placeholders

These SVG files serve as placeholders for your project screenshots. When you have actual screenshots of your projects, you should replace these placeholders with real images.

## How to Replace Placeholders

1. Take screenshots or create images of your projects
2. Process them to be consistent in size (recommended: 1200×800 pixels)
3. Save them as `.jpg` or `.png` files
4. Place them in this directory or in the parent directory
5. Update the `imageUrl` paths in `src/components/Projects.tsx`

## Image Optimization Tips

- Compress your images to reduce file size (use tools like TinyPNG or ImageOptim)
- Use consistent aspect ratios for all project images (16:9 or 4:3 recommended)
- Ensure images clearly showcase your project's UI
- Consider adding a subtle branded overlay or device frame for a professional look

## Using Real Images

When replacing placeholders with real images, you may want to adjust the CSS class in the Image component from `object-contain` to `object-cover` for better visual presentation.
