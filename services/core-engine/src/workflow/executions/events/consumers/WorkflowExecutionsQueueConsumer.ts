export class WorkflowExecutionsQueueConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowExecutionsQueue created event for entity " + event.entityId + " in workflow_executions");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowExecutionsQueue updated event for entity " + event.entityId + " in workflow_executions");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowExecutionsQueue deleted event for entity " + event.entityId + " in workflow_executions");
  }
}
