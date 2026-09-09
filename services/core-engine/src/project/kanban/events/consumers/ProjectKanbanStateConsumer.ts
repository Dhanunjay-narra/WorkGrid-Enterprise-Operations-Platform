export class ProjectKanbanStateConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectKanbanState created event for entity " + event.entityId + " in project_kanban");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectKanbanState updated event for entity " + event.entityId + " in project_kanban");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectKanbanState deleted event for entity " + event.entityId + " in project_kanban");
  }
}
