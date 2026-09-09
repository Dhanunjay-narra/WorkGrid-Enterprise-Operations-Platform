export class ProjectWorkspacesTaskConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectWorkspacesTask created event for entity " + event.entityId + " in project_workspaces");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectWorkspacesTask updated event for entity " + event.entityId + " in project_workspaces");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectWorkspacesTask deleted event for entity " + event.entityId + " in project_workspaces");
  }
}
