export class DmsChunksBatchConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsChunksBatch created event for entity " + event.entityId + " in dms_chunks");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsChunksBatch updated event for entity " + event.entityId + " in dms_chunks");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsChunksBatch deleted event for entity " + event.entityId + " in dms_chunks");
  }
}
