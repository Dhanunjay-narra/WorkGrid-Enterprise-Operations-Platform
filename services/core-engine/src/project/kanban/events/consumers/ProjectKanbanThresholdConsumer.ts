export class ProjectKanbanThresholdConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectKanbanThreshold created event for entity " + event.entityId + " in project_kanban");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectKanbanThreshold updated event for entity " + event.entityId + " in project_kanban");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectKanbanThreshold deleted event for entity " + event.entityId + " in project_kanban");
  }
}
