export class WorkflowCronsRuleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowCronsRule created event for entity " + event.entityId + " in workflow_crons");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowCronsRule updated event for entity " + event.entityId + " in workflow_crons");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WorkflowCronsRule deleted event for entity " + event.entityId + " in workflow_crons");
  }
}
