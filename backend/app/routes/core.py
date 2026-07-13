from fastapi import APIRouter
from app.schemas.prompt import PromptResponse
from app.schemas.generation import Generation

router = APIRouter(prefix="/api/v1")


@router.get("/prompt/{prompt_id}", response_model=PromptResponse)
def get_prompt(prompt_id):
    pass


@router.get("/generation/{generation_id}")
def get_generation(generation_id):
    pass


@router.get("/evolution_tree/{project_id}")
def get_evolution_tree(project_id):
    pass
