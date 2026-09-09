export class SupportKnowledgeSnapshotConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportKnowledgeSnapshot created event for entity " + event.entityId + " in support_knowledge");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportKnowledgeSnapshot updated event for entity " + event.entityId + " in support_knowledge");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportKnowledgeSnapshot deleted event for entity " + event.entityId + " in support_knowledge");
  }
}
