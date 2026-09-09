export class DmsFoldersSnapshotConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFoldersSnapshot created event for entity " + event.entityId + " in dms_folders");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFoldersSnapshot updated event for entity " + event.entityId + " in dms_folders");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFoldersSnapshot deleted event for entity " + event.entityId + " in dms_folders");
  }
}
