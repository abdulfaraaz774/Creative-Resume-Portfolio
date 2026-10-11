from pathlib import Path
import fitz

source = Path('attached_assets/Faraaz_System_Administrator_networking_1791721434665.pdf')
out = Path('.agents/outputs')
out.mkdir(parents=True, exist_ok=True)
doc = fitz.open(source)
print(f'pages={doc.page_count}')
for index, page in enumerate(doc, start=1):
    pix = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5), alpha=False)
    destination = out / f'faraaz-resume-page-{index}.png'
    pix.save(destination)
    images = page.get_images(full=True)
    print(f'page={index} size={page.rect.width:.0f}x{page.rect.height:.0f} image_count={len(images)} rendered={destination}')
    for image_number, image_info in enumerate(images, start=1):
        xref = image_info[0]
        payload = doc.extract_image(xref)
        image_path = out / f'faraaz-resume-page-{index}-image-{image_number}.{payload["ext"]}'
        image_path.write_bytes(payload['image'])
        print(f' embedded_image={image_path}')
