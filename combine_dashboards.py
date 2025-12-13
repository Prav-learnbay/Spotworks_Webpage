#!/usr/bin/env python3
"""
Script to combine two dashboard images and add labels.
Requires Pillow: pip install Pillow
"""

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("Pillow is required. Install it with: pip install Pillow")
    exit(1)

import os

# Paths to the dashboard images
dashboard1_path = "attached_assets/Dashboard_1_1764862596336.png"
dashboard2_path = "attached_assets/Dashboard_2_1764862596340.png"
output_path = "attached_assets/combined_dashboard.png"

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

# Create a drawing context
draw = ImageDraw.Draw(combined_img)

# Try to load a nice font, fallback to default if not available
font_size = 56
font = None
try:
    # Try to use a system font (MacOS)
    font_paths = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    for path in font_paths:
        if os.path.exists(path):
            try:
                font = ImageFont.truetype(path, font_size)
                break
            except:
                continue
except:
    pass

if font is None:
    try:
        font = ImageFont.load_default()
    except:
        font = ImageFont.load_default()

# Define label positions and colors
# Based on dashboard layout:
# Image 1: Power Management (top right), Attendance/Hygiene (left/middle) - Service Efficiency covers attendance/hygiene
# Image 2: Water Management (top left), Asset Management (middle), Water Quality (bottom)
labels = [
    {
        "text": "Power Management",
        "position": (img1.width - 400, 60),  # Top-right area of image 1 (where Power Management panel is)
        "bg_color": (59, 130, 246, 220),  # Blue with transparency
        "text_color": (255, 255, 255)
    },
    {
        "text": "Water Management",
        "position": (img1.width + 60, 60),  # Top-left area of image 2 (where Water Management panel is)
        "bg_color": (34, 197, 94, 220),  # Green with transparency
        "text_color": (255, 255, 255)
    },
    {
        "text": "Asset Management",
        "position": (img1.width + img2.width // 2 - 200, img2.height // 2 - 50),  # Middle area of image 2
        "bg_color": (168, 85, 247, 220),  # Purple with transparency
        "text_color": (255, 255, 255)
    },
    {
        "text": "Service Efficiency",
        "position": (60, img1.height // 2 - 50),  # Middle-left area of image 1 (where Attendance/Hygiene are)
        "bg_color": (251, 146, 60, 220),  # Orange with transparency
        "text_color": (255, 255, 255)
    }
]

# Draw labels with background
for label in labels:
    # Get text size
    bbox = draw.textbbox((0, 0), label["text"], font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Calculate padding
    padding = 20
    
    # Draw background rectangle
    rect_x1 = label["position"][0] - padding
    rect_y1 = label["position"][1] - padding
    rect_x2 = label["position"][0] + text_width + padding
    rect_y2 = label["position"][1] + text_height + padding
    
    # Draw background rectangle with transparency
    draw.rectangle(
        [rect_x1, rect_y1, rect_x2, rect_y2],
        fill=label["bg_color"]
    )
    
    # Draw text
    draw.text(
        label["position"],
        label["text"],
        fill=label["text_color"],
        font=font
    )

# Convert back to RGB for saving (removes alpha channel for smaller file size)
combined_img_rgb = combined_img.convert('RGB')

# Save the combined image
combined_img_rgb.save(output_path, "PNG", quality=95, optimize=True)
print(f"\nCombined dashboard saved to: {output_path}")
print(f"Combined image size: {combined_img_rgb.size}")

