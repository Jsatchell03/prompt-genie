# Prompt Genie
A modern tool for iteratively improving AI prompts and comparing model outputs.

## Overview

Prompt Genie helps you craft better system prompts through a structured evolution workflow. You define a goal and a starting prompt, run generations across one or more AI models, then compare the results side-by-side to decide which performs best. Your preferences and feedback feed into the next generation, gradually refining the prompt over time.

## Models

Prompt Genie supports a wide range of models from leading AI providers, selectable from a searchable dropdown:

- **Anthropic** — Claude Opus 4, Claude Sonnet 4, Claude Haiku 4
- **OpenAI** — GPT-5, GPT-5 Mini, GPT-5 Nano, GPT-4.1 series, o3, o4-mini
- **Google** — Gemini 2.5 Pro, Flash, and Flash-Lite
- **Meta** — Llama 4 Maverick & Scout, Llama 3.x series
- **Mistral AI** — Magistral, Mistral Large/Medium/Small, Codestral, Pixtral Large
- **xAI** — Grok 4, Grok 3
- **DeepSeek** — R1, V3
- And more: Qwen, Command, Jamba, Phi, Nova, Granite, Kimi, and others

You can select multiple models at once to run the same prompt across all of them simultaneously.

## Comparing Outputs

The **Prompt Arena** shows two generated outputs side-by-side. Each card displays the model used, the system prompt, token count, output, and generation time. You can:

- **Prefer Left / Tie / Prefer Right** — signal which output better meets your goal
- **Favorite** individual outputs to surface them later
- **Add output preferences** (e.g. "Concise Outputs", "Avoid Jargon") — lock in styles you want to carry forward into future generations
- **Write feedback** to guide the next evolution step

The **Evolution Graph** tracks how your prompt changes across generations, letting you see the full lineage and revisit any prior version.