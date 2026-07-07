from fastapi import FastAPI
from app.routes.run import router as run_router

app = FastAPI()

app.include_router(run_router)
