export class ProjectRisksAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectRisksAuditLog created event for entity " + event.entityId + " in project_risks");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectRisksAuditLog updated event for entity " + event.entityId + " in project_risks");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectRisksAuditLog deleted event for entity " + event.entityId + " in project_risks");
  }
}
