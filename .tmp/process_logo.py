from PIL import Image
import sys

src = r"H:\Shared drives\WORK\10_SUBTIL_LINGERIE\assets\logo\subtil.png"
out_dir = r"C:\dev\subtil-lingerie\public\images"

img = Image.open(src).convert("RGBA")
print(f"Source: {img.size}")

target_w = 1200
ratio = target_w / img.width
img = img.resize((target_w, int(img.height * ratio)), Image.LANCZOS)
print(f"Resized: {img.size}")

palette = {
    "subtil-aubergine.png": (107, 62, 94),
    "subtil-cream.png":     (245, 239, 231),
    "subtil-gold.png":      (201, 169, 97),
}

src_data = list(img.getdata())

for filename, (cr, cg, cb) in palette.items():
    new_data = []
    for r, g, b, a in src_data:
        lum = (r + g + b) / 3
        if lum > 240:
            new_data.append((cr, cg, cb, 0))
        else:
            alpha = int(a * (1 - lum / 255))
            new_data.append((cr, cg, cb, alpha))
    out_img = Image.new("RGBA", img.size)
    out_img.putdata(new_data)
    out_path = f"{out_dir}\\{filename}"
    out_img.save(out_path, "PNG", optimize=True)
    import os
    print(f"  {filename}: {os.path.getsize(out_path)//1024} KB")

print("Done.")
