export class WorkflowDagAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowDagAuditLog created event for entity " + event.entityId + " in workflow_dag");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowDagAuditLog updated event for entity " + event.entityId + " in workflow_dag");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowDagAuditLog deleted event for entity " + event.entityId + " in workflow_dag");
  }
}
