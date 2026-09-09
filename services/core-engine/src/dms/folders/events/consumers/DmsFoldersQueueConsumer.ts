export class DmsFoldersQueueConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFoldersQueue created event for entity " + event.entityId + " in dms_folders");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFoldersQueue updated event for entity " + event.entityId + " in dms_folders");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFoldersQueue deleted event for entity " + event.entityId + " in dms_folders");
  }
}
