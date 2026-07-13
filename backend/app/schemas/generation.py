from pydantic import BaseModel, Field
from typing import Optional
from prompt import PromptRanking, PromptResponse
from enum import Enum


class GenerationRun(BaseModel):
    prompt_ranking: list[PromptRanking]
    model: str
    goal: str
    user_prompt: str
    locked_preferences: str
    feedback: list[str]


class GenerationResponse(BaseModel):
    prompts: list[PromptResponse]
