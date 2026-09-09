export class WorkflowVariablesAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowVariablesAssignment created event for entity " + event.entityId + " in workflow_variables");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowVariablesAssignment updated event for entity " + event.entityId + " in workflow_variables");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowVariablesAssignment deleted event for entity " + event.entityId + " in workflow_variables");
  }
}
