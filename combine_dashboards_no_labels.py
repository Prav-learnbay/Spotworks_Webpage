#!/usr/bin/env python3
"""
Script to combine two dashboard images without labels for a clean, crisp look.
Requires Pillow: pip install Pillow
"""

try:
    from PIL import Image
except ImportError:
    print("Pillow is required. Install it with: pip install Pillow")
    exit(1)

# Paths to the dashboard images
dashboard1_path = "attached_assets/Dashboard_1_1764862596336.png"
dashboard2_path = "attached_assets/Dashboard_2_1764862596340.png"
output_path = "attached_assets/facility_overview_dashboard.png"

# Open both images
img1 = Image.open(dashboard1_path)
img2 = Image.open(dashboard2_path)

print(f"Image 1 size: {img1.size}")
print(f"Image 2 size: {img2.size}")

# Convert images to RGBA for transparency support
img1 = img1.convert('RGBA')
img2 = img2.convert('RGBA')

# Calculate combined dimensions (side by side)
# Use the maximum height and sum the widths
combined_width = img1.width + img2.width
combined_height = max(img1.height, img2.height)

# Create a new image with white background in RGBA mode
combined_img = Image.new('RGBA', (combined_width, combined_height), color=(255, 255, 255, 255))

# Paste the images side by side
combined_img.paste(img1, (0, 0), img1)
combined_img.paste(img2, (img1.width, 0), img2)

# Convert back to RGB for saving (removes alpha channel for smaller file size)
combined_img_rgb = combined_img.convert('RGB')

# Save the combined image with high quality settings
combined_img_rgb.save(output_path, "PNG", quality=100, optimize=False)
print(f"\nCombined dashboard (no labels) saved to: {output_path}")
print(f"Combined image size: {combined_img_rgb.size}")
print("Image is crisp and clear - ready for use!")

