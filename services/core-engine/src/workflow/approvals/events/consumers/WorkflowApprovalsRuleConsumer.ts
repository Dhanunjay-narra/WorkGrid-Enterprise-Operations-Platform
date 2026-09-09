export class WorkflowApprovalsRuleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowApprovalsRule created event for entity " + event.entityId + " in workflow_approvals");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowApprovalsRule updated event for entity " + event.entityId + " in workflow_approvals");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowApprovalsRule deleted event for entity " + event.entityId + " in workflow_approvals");
  }
}
