from pydantic import BaseModel, Field
from typing import Optional
from enum import Enum


class PromptRun(BaseModel):
    system_prompt: str
    user_prompt: str
    model: str
    preferences: list[str]


class PromptResponse(BaseModel):
    system_prompt: str
    user_prompt: str
    model: str
    preferences: list[str]
    output: str
    generation_time: int
    input_tokens: int
    output_tokens: int
    cost: int
