from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.ocr_service import process_ocr

router = APIRouter()

@router.post("/ocr")
async def ocr_endpoint(file: UploadFile = File(...)):
    try:
        result = await process_ocr(file)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
