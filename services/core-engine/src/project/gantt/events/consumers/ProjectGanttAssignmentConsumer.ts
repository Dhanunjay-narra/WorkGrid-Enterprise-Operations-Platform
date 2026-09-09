export class ProjectGanttAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectGanttAssignment created event for entity " + event.entityId + " in project_gantt");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectGanttAssignment updated event for entity " + event.entityId + " in project_gantt");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectGanttAssignment deleted event for entity " + event.entityId + " in project_gantt");
  }
}
