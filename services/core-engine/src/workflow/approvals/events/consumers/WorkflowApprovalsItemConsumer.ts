export class WorkflowApprovalsItemConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowApprovalsItem created event for entity " + event.entityId + " in workflow_approvals");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowApprovalsItem updated event for entity " + event.entityId + " in workflow_approvals");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowApprovalsItem deleted event for entity " + event.entityId + " in workflow_approvals");
  }
}
