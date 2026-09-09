export class ProjectWorkspacesPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectWorkspacesPolicy created event for entity " + event.entityId + " in project_workspaces");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectWorkspacesPolicy updated event for entity " + event.entityId + " in project_workspaces");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectWorkspacesPolicy deleted event for entity " + event.entityId + " in project_workspaces");
  }
}
