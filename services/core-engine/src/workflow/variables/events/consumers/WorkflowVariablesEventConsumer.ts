export class WorkflowVariablesEventConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowVariablesEvent created event for entity " + event.entityId + " in workflow_variables");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowVariablesEvent updated event for entity " + event.entityId + " in workflow_variables");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowVariablesEvent deleted event for entity " + event.entityId + " in workflow_variables");
  }
}
