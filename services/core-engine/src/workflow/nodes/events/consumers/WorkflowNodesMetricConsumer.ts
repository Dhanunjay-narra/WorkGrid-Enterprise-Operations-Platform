export class WorkflowNodesMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowNodesMetric created event for entity " + event.entityId + " in workflow_nodes");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowNodesMetric updated event for entity " + event.entityId + " in workflow_nodes");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowNodesMetric deleted event for entity " + event.entityId + " in workflow_nodes");
  }
}
