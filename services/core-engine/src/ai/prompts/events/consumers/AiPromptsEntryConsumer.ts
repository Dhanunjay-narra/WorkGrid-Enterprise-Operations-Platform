export class AiPromptsEntryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiPromptsEntry created event for entity " + event.entityId + " in ai_prompts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiPromptsEntry updated event for entity " + event.entityId + " in ai_prompts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiPromptsEntry deleted event for entity " + event.entityId + " in ai_prompts");
  }
}
