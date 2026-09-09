export class ProjectWorkspacesSessionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectWorkspacesSession created event for entity " + event.entityId + " in project_workspaces");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectWorkspacesSession updated event for entity " + event.entityId + " in project_workspaces");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectWorkspacesSession deleted event for entity " + event.entityId + " in project_workspaces");
  }
}
