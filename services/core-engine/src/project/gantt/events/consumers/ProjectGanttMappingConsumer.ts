export class ProjectGanttMappingConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectGanttMapping created event for entity " + event.entityId + " in project_gantt");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectGanttMapping updated event for entity " + event.entityId + " in project_gantt");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectGanttMapping deleted event for entity " + event.entityId + " in project_gantt");
  }
}
