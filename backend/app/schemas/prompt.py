from pydantic import BaseModel, Field
from typing import Optional
from enum import Enum


class PromptRun(BaseModel):
    system_prompt: str
    user_prompt: str
    model: str
    preferences: list[str]


class PromptResponse(BaseModel):
    prompt_id: str
    name: str
    system_prompt: str
    user_prompt: str
    model: str
    preferences: list[str]
    output: str
    generation_time: float
    input_tokens: int
    output_tokens: int
    cost: float


class PromptRanking(PromptResponse):
    ranking: int
