export class DmsFilesPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFilesPolicy created event for entity " + event.entityId + " in dms_files");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFilesPolicy updated event for entity " + event.entityId + " in dms_files");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFilesPolicy deleted event for entity " + event.entityId + " in dms_files");
  }
}
