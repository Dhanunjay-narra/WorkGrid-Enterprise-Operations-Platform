export class DmsFilesAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFilesAuditLog created event for entity " + event.entityId + " in dms_files");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFilesAuditLog updated event for entity " + event.entityId + " in dms_files");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFilesAuditLog deleted event for entity " + event.entityId + " in dms_files");
  }
}
