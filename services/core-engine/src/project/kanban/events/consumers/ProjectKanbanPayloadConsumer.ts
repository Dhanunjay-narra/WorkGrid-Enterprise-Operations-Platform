export class ProjectKanbanPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectKanbanPayload created event for entity " + event.entityId + " in project_kanban");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectKanbanPayload updated event for entity " + event.entityId + " in project_kanban");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectKanbanPayload deleted event for entity " + event.entityId + " in project_kanban");
  }
}
