from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import ocr_routes

app = FastAPI(title="AI Health Risk Profiler")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use ["http://localhost:5173"] to limit
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include OCR router
app.include_router(ocr_routes.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Backend is running!"}
