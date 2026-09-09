export class DmsFoldersMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFoldersMetric created event for entity " + event.entityId + " in dms_folders");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFoldersMetric updated event for entity " + event.entityId + " in dms_folders");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsFoldersMetric deleted event for entity " + event.entityId + " in dms_folders");
  }
}
