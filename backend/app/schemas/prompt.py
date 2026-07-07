from pydantic import BaseModel, Field
from typing import Optional
from enum import Enum


class PromptRun(BaseModel):
    system_prompt: str
    user_prompt: str
    model: str
    preferences: list[str]
