# import pytesseract
# from PIL import Image
# import io
# from app.utils.validators import validate_fields
# from app.services.ai_orchestrator import ai_extract_fields

# async def process_ocr(file):
#     # Convert uploaded image to bytes and open with PIL
#     image_bytes = await file.read()
#     image = Image.open(io.BytesIO(image_bytes))

#     # Run OCR
#     text = pytesseract.image_to_string(image)

#     # Extract fields using AI (or regex fallback)
#     structured_data = await ai_extract_fields(text)

#     # Validate fields
#     validation = validate_fields(structured_data["answers"])

#     if validation["status"] == "incomplete":
#         return {
#             "status": "incomplete_profile",
#             "reason": validation["reason"]
#         }

#     return {
#         "answers": structured_data["answers"],
#         "missing_fields": structured_data["missing_fields"],
#         "confidence": structured_data["confidence"],
#     }
import io
from PIL import Image
import pytesseract
from app.services.ai_orchestrator import ai_extract_fields
from app.utils.validators import validate_fields

async def process_ocr(file):
    # Read image bytes
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes))

    # Run OCR
    text = pytesseract.image_to_string(image)

    # Extract structured answers + risk
    structured_data = await ai_extract_fields(text)

    # Validate
    validation = validate_fields(structured_data["answers"])
    if validation["status"] == "incomplete":
        return {"status": "incomplete_profile", "reason": validation["reason"]}

    return structured_data
