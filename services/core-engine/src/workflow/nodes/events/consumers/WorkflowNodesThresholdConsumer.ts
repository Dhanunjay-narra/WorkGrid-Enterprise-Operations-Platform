export class WorkflowNodesThresholdConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowNodesThreshold created event for entity " + event.entityId + " in workflow_nodes");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowNodesThreshold updated event for entity " + event.entityId + " in workflow_nodes");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowNodesThreshold deleted event for entity " + event.entityId + " in workflow_nodes");
  }
}
