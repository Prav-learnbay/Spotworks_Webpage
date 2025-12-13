#!/usr/bin/env python3
"""
Script to generate appropriate images for features:
- Smart Attendance (attendance checking system)
- PPM Activities (maintenance scheduling)
- Decision Making (alerts and monitoring dashboard)
"""

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("Pillow is required. Install it with: pip install Pillow")
    exit(1)

import os

def create_attendance_image():
    """Create an image for Smart Attendance - attendance checking system"""
    width, height = 800, 600
    img = Image.new('RGB', (width, height), color='#f8fafc')
    draw = ImageDraw.Draw(img)
    
    # Background gradient effect
    for i in range(height):
        r = int(248 - (i / height) * 10)
        g = int(250 - (i / height) * 10)
        b = int(252 - (i / height) * 10)
        draw.rectangle([(0, i), (width, i+1)], fill=(r, g, b))
    
    # Mobile phone frame
    phone_x, phone_y = width // 2 - 150, height // 2 - 200
    phone_w, phone_h = 300, 500
    
    # Phone body
    draw.rounded_rectangle([(phone_x, phone_y), (phone_x + phone_w, phone_y + phone_h)], 
                          radius=20, fill='#1e293b', outline='#334155', width=3)
    
    # Screen
    screen_pad = 15
    screen_x = phone_x + screen_pad
    screen_y = phone_y + screen_pad + 40  # Space for notch
    screen_w = phone_w - (screen_pad * 2)
    screen_h = phone_h - (screen_pad * 2) - 40
    draw.rounded_rectangle([(screen_x, screen_y), (screen_x + screen_w, screen_y + screen_h)], 
                          radius=10, fill='#ffffff')
    
    # Attendance interface elements
    # Header
    draw.rectangle([(screen_x, screen_y), (screen_x + screen_w, screen_y + 60)], fill='#3b82f6')
    draw.text((screen_x + 20, screen_y + 20), "CHECK IN", fill='#ffffff', 
              font=ImageFont.load_default())
    
    # Location badge
    loc_x, loc_y = screen_x + 20, screen_y + 80
    draw.ellipse([(loc_x, loc_y), (loc_x + 40, loc_y + 40)], fill='#10b981')
    draw.text((loc_x + 10, loc_y + 12), "✓", fill='#ffffff', 
              font=ImageFont.load_default())
    
    draw.text((loc_x + 50, loc_y + 10), "Office Location", fill='#1e293b', 
              font=ImageFont.load_default())
    draw.text((loc_x + 50, loc_y + 28), "Verified", fill='#64748b', 
              font=ImageFont.load_default())
    
    # Check-in button
    btn_x, btn_y = screen_x + 40, screen_y + 150
    btn_w, btn_h = screen_w - 80, 60
    draw.rounded_rectangle([(btn_x, btn_y), (btn_x + btn_w, btn_y + btn_h)], 
                          radius=15, fill='#10b981')
    draw.text((btn_x + 70, btn_y + 18), "CHECK IN NOW", fill='#ffffff', 
              font=ImageFont.load_default())
    
    # Time display
    draw.text((screen_x + 20, screen_y + 250), "09:45 AM", fill='#1e293b', 
              font=ImageFont.load_default())
    draw.text((screen_x + 20, screen_y + 280), "December 6, 2024", fill='#64748b', 
              font=ImageFont.load_default())
    
    # Attendance stats
    stats_y = screen_y + 330
    draw.text((screen_x + 20, stats_y), "Today's Attendance: 24/30", fill='#1e293b', 
              font=ImageFont.load_default())
    
    # Progress bar
    bar_x, bar_y = screen_x + 20, stats_y + 30
    bar_w, bar_h = screen_w - 40, 8
    draw.rounded_rectangle([(bar_x, bar_y), (bar_x + bar_w, bar_y + bar_h)], 
                          radius=4, fill='#e2e8f0')
    draw.rounded_rectangle([(bar_x, bar_y), (bar_x + int(bar_w * 0.8), bar_y + bar_h)], 
                          radius=4, fill='#10b981')
    
    return img

def create_ppm_image():
    """Create an image for PPM Activities - maintenance scheduling"""
    width, height = 800, 600
    img = Image.new('RGB', (width, height), color='#ffffff')
    draw = ImageDraw.Draw(img)
    
    # Header
    draw.rectangle([(0, 0), (width, 80)], fill='#f97316')
    draw.text((30, 30), "PLANNED PREVENTIVE MAINTENANCE", fill='#ffffff', 
              font=ImageFont.load_default())
    
    # Calendar view
    cal_y = 100
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    day_width = width // 7
    
    # Day headers
    for i, day in enumerate(days):
        x = i * day_width
        draw.rectangle([(x, cal_y), (x + day_width, cal_y + 40)], 
                      fill='#f1f5f9', outline='#cbd5e1')
        draw.text((x + 15, cal_y + 12), day, fill='#475569', 
                  font=ImageFont.load_default())
    
    # Calendar cells with tasks
    task_colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
    task_names = ['HVAC Service', 'Electrical', 'Plumbing', 'Safety Check']
    
    for week in range(4):
        week_y = cal_y + 40 + (week * 120)
        for day in range(7):
            day_x = day * day_width
            # Cell
            draw.rectangle([(day_x, week_y), (day_x + day_width, week_y + 120)], 
                          fill='#ffffff', outline='#cbd5e1')
            
            # Add tasks on specific days
            if week == 0 and day == 1:  # Tuesday, week 1
                draw.rectangle([(day_x + 5, week_y + 5), (day_x + day_width - 5, week_y + 35)], 
                              fill=task_colors[0])
                draw.text((day_x + 8, week_y + 12), task_names[0], fill='#ffffff', 
                          font=ImageFont.load_default())
            
            if week == 1 and day == 3:  # Thursday, week 2
                draw.rectangle([(day_x + 5, week_y + 5), (day_x + day_width - 5, week_y + 35)], 
                              fill=task_colors[1])
                draw.text((day_x + 8, week_y + 12), task_names[1], fill='#ffffff', 
                          font=ImageFont.load_default())
            
            if week == 2 and day == 0:  # Monday, week 3
                draw.rectangle([(day_x + 5, week_y + 5), (day_x + day_width - 5, week_y + 35)], 
                              fill=task_colors[2])
                draw.text((day_x + 8, week_y + 12), task_names[2], fill='#ffffff', 
                          font=ImageFont.load_default())
    
    # Summary stats at bottom
    stats_y = height - 100
    stats = [
        ("Scheduled", "12", '#3b82f6'),
        ("Completed", "8", '#10b981'),
        ("Pending", "4", '#f59e0b'),
        ("Overdue", "0", '#ef4444')
    ]
    
    stat_width = width // 4
    for i, (label, value, color) in enumerate(stats):
        stat_x = i * stat_width
        draw.text((stat_x + 30, stats_y), label, fill='#64748b', 
                  font=ImageFont.load_default())
        draw.text((stat_x + 30, stats_y + 25), value, fill=color, 
                  font=ImageFont.load_default())
    
    return img

def create_decision_making_image():
    """Create an image for Decision Making - alerts and monitoring dashboard"""
    width, height = 1200, 600
    img = Image.new('RGB', (width, height), color='#0f172a')
    draw = ImageDraw.Draw(img)
    
    # Header
    draw.rectangle([(0, 0), (width, 60)], fill='#1e293b')
    draw.text((30, 20), "FACILITY MONITORING ALERTS", fill='#06b6d4', 
              font=ImageFont.load_default())
    
    # Alert cards
    alerts = [
        {
            "title": "Attendance Alert",
            "message": "Low attendance detected: 15/30",
            "status": "warning",
            "time": "2 mins ago",
            "color": "#f59e0b"
        },
        {
            "title": "Water Quality",
            "message": "TDS level above threshold: 520 PPM",
            "status": "critical",
            "time": "5 mins ago",
            "color": "#ef4444"
        },
        {
            "title": "Power Consumption",
            "message": "Spike detected in Tower A: +15%",
            "status": "warning",
            "time": "10 mins ago",
            "color": "#f59e0b"
        },
        {
            "title": "Maintenance Due",
            "message": "HVAC service scheduled for today",
            "status": "info",
            "time": "1 hour ago",
            "color": "#3b82f6"
        },
        {
            "title": "Asset Status",
            "message": "Elevator maintenance completed",
            "status": "success",
            "time": "2 hours ago",
            "color": "#10b981"
        },
        {
            "title": "Water Level",
            "message": "Tank A at 45% capacity",
            "status": "info",
            "time": "3 hours ago",
            "color": "#3b82f6"
        }
    ]
    
    # Grid layout for alerts
    cols = 3
    card_width = (width - 60) // cols
    card_height = 150
    card_spacing = 20
    
    for i, alert in enumerate(alerts):
        row = i // cols
        col = i % cols
        card_x = 20 + col * (card_width + card_spacing)
        card_y = 80 + row * (card_height + card_spacing)
        
        # Card background
        draw.rounded_rectangle(
            [(card_x, card_y), (card_x + card_width, card_y + card_height)],
            radius=8, fill='#1e293b', outline=alert['color'], width=2
        )
        
        # Status indicator
        draw.ellipse([(card_x + 15, card_y + 15), (card_x + 35, card_y + 35)], 
                     fill=alert['color'])
        
        # Title
        draw.text((card_x + 45, card_y + 15), alert['title'], fill='#ffffff', 
                  font=ImageFont.load_default())
        
        # Message
        draw.text((card_x + 15, card_y + 50), alert['message'], fill='#cbd5e1', 
                  font=ImageFont.load_default())
        
        # Time
        draw.text((card_x + 15, card_y + 120), alert['time'], fill='#64748b', 
                  font=ImageFont.load_default())
    
    return img

def create_gated_community_image():
    """Create an image for Gated Community - residential apartment complex"""
    width, height = 1200, 600
    img = Image.new('RGB', (width, height), color='#f0f9ff')
    draw = ImageDraw.Draw(img)
    
    # Sky gradient
    for i in range(height // 2):
        r = int(135 + (i / (height // 2)) * 20)
        g = int(206 + (i / (height // 2)) * 20)
        b = int(250 - (i / (height // 2)) * 10)
        draw.rectangle([(0, i), (width, i+1)], fill=(r, g, b))
    
    # Ground/grass
    ground_y = height // 2
    draw.rectangle([(0, ground_y), (width, height)], fill='#22c55e')
    
    # Gated entrance archway (center)
    arch_x = width // 2 - 100
    arch_y = ground_y - 150
    arch_w = 200
    arch_h = 150
    
    # Arch pillars
    draw.rectangle([(arch_x, arch_y), (arch_x + 30, ground_y)], fill='#475569')
    draw.rectangle([(arch_x + arch_w - 30, arch_y), (arch_x + arch_w, ground_y)], fill='#475569')
    
    # Arch top (semi-circle)
    draw.ellipse([(arch_x, arch_y - 50), (arch_x + arch_w, arch_y + 50)], 
                fill='#64748b', outline='#334155', width=3)
    
    # Gate (open)
    gate_x = arch_x + 30
    gate_w = arch_w - 60
    draw.rectangle([(gate_x, arch_y + 20), (gate_x + gate_w, ground_y)], 
                  fill='#1e293b', outline='#0f172a', width=2)
    
    # Gate decorative elements
    for i in range(3):
        y_pos = arch_y + 40 + (i * 30)
        draw.rectangle([(gate_x + 10, y_pos), (gate_x + gate_w - 10, y_pos + 2)], fill='#475569')
    
    # Buildings on left
    buildings_left = [
        (50, ground_y - 200, 120, 200),
        (180, ground_y - 250, 120, 250),
        (310, ground_y - 180, 120, 180),
    ]
    
    for x, y, w, h in buildings_left:
        # Building body
        draw.rectangle([(x, y), (x + w, ground_y)], fill='#cbd5e1', outline='#94a3b8', width=2)
        # Windows
        for row in range(4):
            for col in range(3):
                win_x = x + 15 + (col * 35)
                win_y = y + 20 + (row * 40)
                if win_y + 25 < ground_y - 10:
                    draw.rectangle([(win_x, win_y), (win_x + 25, win_y + 25)], 
                                  fill='#3b82f6' if (row + col) % 2 == 0 else '#1e40af')
    
    # Buildings on right
    buildings_right = [
        (width - 370, ground_y - 220, 120, 220),
        (width - 240, ground_y - 280, 120, 280),
        (width - 110, ground_y - 190, 120, 190),
    ]
    
    for x, y, w, h in buildings_right:
        # Building body
        draw.rectangle([(x, y), (x + w, ground_y)], fill='#e2e8f0', outline='#cbd5e1', width=2)
        # Windows
        for row in range(5):
            for col in range(3):
                win_x = x + 15 + (col * 35)
                win_y = y + 20 + (row * 40)
                if win_y + 25 < ground_y - 10:
                    draw.rectangle([(win_x, win_y), (win_x + 25, win_y + 25)], 
                                  fill='#f59e0b' if (row + col) % 2 == 0 else '#d97706')
    
    # Trees/landscaping
    tree_positions = [
        (400, ground_y - 80),
        (450, ground_y - 90),
        (width - 450, ground_y - 85),
        (width - 400, ground_y - 95),
    ]
    
    for x, y in tree_positions:
        # Tree trunk
        draw.rectangle([(x - 5, y), (x + 5, ground_y)], fill='#78350f')
        # Tree foliage
        draw.ellipse([(x - 30, y - 40), (x + 30, y + 10)], fill='#16a34a')
        draw.ellipse([(x - 25, y - 50), (x + 25, y - 10)], fill='#22c55e')
    
    # Road/pathway
    road_y = ground_y - 20
    draw.rectangle([(0, road_y), (width, ground_y)], fill='#64748b')
    # Road markings
    for i in range(0, width, 100):
        draw.rectangle([(i, road_y + 5), (i + 50, road_y + 7)], fill='#fbbf24')
    
    # Security guard booth (small structure near gate)
    booth_x = arch_x - 80
    booth_y = ground_y - 60
    draw.rectangle([(booth_x, booth_y), (booth_x + 50, ground_y)], fill='#475569')
    draw.polygon([(booth_x, booth_y), (booth_x + 25, booth_y - 20), (booth_x + 50, booth_y)], 
                fill='#64748b')
    
    return img

# Generate images
output_dir = "attached_assets/generated_images"
os.makedirs(output_dir, exist_ok=True)

print("Generating feature images...")

attendance_img = create_attendance_image()
attendance_img.save(f"{output_dir}/attendance_checking_system.png", "PNG", quality=95)
print(f"✓ Created attendance_checking_system.png ({attendance_img.size})")

ppm_img = create_ppm_image()
ppm_img.save(f"{output_dir}/ppm_activities.png", "PNG", quality=95)
print(f"✓ Created ppm_activities.png ({ppm_img.size})")

decision_img = create_decision_making_image()
decision_img.save(f"{output_dir}/decision_making_alerts.png", "PNG", quality=95)
print(f"✓ Created decision_making_alerts.png ({decision_img.size})")

gated_community_img = create_gated_community_image()
gated_community_img.save(f"{output_dir}/gated_community.png", "PNG", quality=95)
print(f"✓ Created gated_community.png ({gated_community_img.size})")

print("\nAll feature images generated successfully!")

