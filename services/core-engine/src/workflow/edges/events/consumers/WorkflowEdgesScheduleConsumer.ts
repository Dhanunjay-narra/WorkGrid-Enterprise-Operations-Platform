export class WorkflowEdgesScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowEdgesSchedule created event for entity " + event.entityId + " in workflow_edges");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowEdgesSchedule updated event for entity " + event.entityId + " in workflow_edges");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowEdgesSchedule deleted event for entity " + event.entityId + " in workflow_edges");
  }
}
