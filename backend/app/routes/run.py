from fastapi import APIRouter
from app.schemas.prompt import PromptRun, PromptResponse
from app.schemas.generation import GenerationRun

router = APIRouter(prefix="/api/v1/run")


@router.post("/", response_model=PromptResponse)
def run_prompt(payload: PromptRun):
    return {
        "prompt_id": "P-108",
        "name": "Cheese",
        "system_prompt": payload.system_prompt,
        "user_prompt": payload.user_prompt,
        "model": payload.model,
        "preferences": payload.preferences,
        "output": "Here is a clear and concise explanation of the requested topic. The key concepts are broken down into digestible sections, each building upon the previous. Code examples are annotated inline to aid understanding, and the language is kept accessible without sacrificing technical accuracy.",
        "generation_time": 2.3,
        "input_tokens": 240,
        "output_tokens": 1303,
        "cost": 1.3,
    }


@router.post("/evolution", response_model=list[PromptResponse])
def run_evolution(payload: dict):
    return payload
