export class WorkflowRetriesPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowRetriesPolicy created event for entity " + event.entityId + " in workflow_retries");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowRetriesPolicy updated event for entity " + event.entityId + " in workflow_retries");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowRetriesPolicy deleted event for entity " + event.entityId + " in workflow_retries");
  }
}
