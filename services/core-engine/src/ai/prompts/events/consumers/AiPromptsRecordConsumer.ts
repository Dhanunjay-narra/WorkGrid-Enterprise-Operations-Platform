export class AiPromptsRecordConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiPromptsRecord created event for entity " + event.entityId + " in ai_prompts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiPromptsRecord updated event for entity " + event.entityId + " in ai_prompts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiPromptsRecord deleted event for entity " + event.entityId + " in ai_prompts");
  }
}
