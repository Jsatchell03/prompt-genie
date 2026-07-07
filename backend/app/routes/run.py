from fastapi import APIRouter

router = APIRouter(prefix="/api/v1")


@router.post("/run")
def run_prompt(config: dict):
    return config
