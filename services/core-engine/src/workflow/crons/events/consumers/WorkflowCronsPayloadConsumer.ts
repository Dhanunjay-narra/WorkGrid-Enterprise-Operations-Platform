export class WorkflowCronsPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowCronsPayload created event for entity " + event.entityId + " in workflow_crons");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowCronsPayload updated event for entity " + event.entityId + " in workflow_crons");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowCronsPayload deleted event for entity " + event.entityId + " in workflow_crons");
  }
}
