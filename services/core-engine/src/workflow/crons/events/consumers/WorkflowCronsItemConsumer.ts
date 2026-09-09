export class WorkflowCronsItemConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowCronsItem created event for entity " + event.entityId + " in workflow_crons");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowCronsItem updated event for entity " + event.entityId + " in workflow_crons");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowCronsItem deleted event for entity " + event.entityId + " in workflow_crons");
  }
}
