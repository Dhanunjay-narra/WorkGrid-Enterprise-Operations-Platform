export class DmsVersionsSessionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsVersionsSession created event for entity " + event.entityId + " in dms_versions");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsVersionsSession updated event for entity " + event.entityId + " in dms_versions");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsVersionsSession deleted event for entity " + event.entityId + " in dms_versions");
  }
}
