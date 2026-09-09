export class ProjectWorkspacesTransactionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectWorkspacesTransaction created event for entity " + event.entityId + " in project_workspaces");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectWorkspacesTransaction updated event for entity " + event.entityId + " in project_workspaces");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectWorkspacesTransaction deleted event for entity " + event.entityId + " in project_workspaces");
  }
}
