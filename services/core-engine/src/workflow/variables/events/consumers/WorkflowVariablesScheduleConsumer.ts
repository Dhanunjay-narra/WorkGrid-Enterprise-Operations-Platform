export class WorkflowVariablesScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowVariablesSchedule created event for entity " + event.entityId + " in workflow_variables");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowVariablesSchedule updated event for entity " + event.entityId + " in workflow_variables");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowVariablesSchedule deleted event for entity " + event.entityId + " in workflow_variables");
  }
}
