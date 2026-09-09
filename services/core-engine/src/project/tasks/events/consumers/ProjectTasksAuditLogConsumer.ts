export class ProjectTasksAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectTasksAuditLog created event for entity " + event.entityId + " in project_tasks");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectTasksAuditLog updated event for entity " + event.entityId + " in project_tasks");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectTasksAuditLog deleted event for entity " + event.entityId + " in project_tasks");
  }
}
