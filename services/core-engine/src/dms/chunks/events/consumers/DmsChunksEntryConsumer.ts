export class DmsChunksEntryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsChunksEntry created event for entity " + event.entityId + " in dms_chunks");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsChunksEntry updated event for entity " + event.entityId + " in dms_chunks");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsChunksEntry deleted event for entity " + event.entityId + " in dms_chunks");
  }
}
