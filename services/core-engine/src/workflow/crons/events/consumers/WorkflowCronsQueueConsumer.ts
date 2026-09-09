export class WorkflowCronsQueueConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowCronsQueue created event for entity " + event.entityId + " in workflow_crons");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowCronsQueue updated event for entity " + event.entityId + " in workflow_crons");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowCronsQueue deleted event for entity " + event.entityId + " in workflow_crons");
  }
}
