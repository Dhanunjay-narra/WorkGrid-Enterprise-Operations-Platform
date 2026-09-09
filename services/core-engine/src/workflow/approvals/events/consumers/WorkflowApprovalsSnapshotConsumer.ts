export class WorkflowApprovalsSnapshotConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowApprovalsSnapshot created event for entity " + event.entityId + " in workflow_approvals");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowApprovalsSnapshot updated event for entity " + event.entityId + " in workflow_approvals");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowApprovalsSnapshot deleted event for entity " + event.entityId + " in workflow_approvals");
  }
}
