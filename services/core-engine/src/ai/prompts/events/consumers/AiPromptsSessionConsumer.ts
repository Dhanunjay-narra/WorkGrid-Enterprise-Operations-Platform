export class AiPromptsSessionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiPromptsSession created event for entity " + event.entityId + " in ai_prompts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiPromptsSession updated event for entity " + event.entityId + " in ai_prompts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiPromptsSession deleted event for entity " + event.entityId + " in ai_prompts");
  }
}
