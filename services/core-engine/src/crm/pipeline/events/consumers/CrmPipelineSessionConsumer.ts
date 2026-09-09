export class CrmPipelineSessionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmPipelineSession created event for entity " + event.entityId + " in crm_pipeline");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmPipelineSession updated event for entity " + event.entityId + " in crm_pipeline");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmPipelineSession deleted event for entity " + event.entityId + " in crm_pipeline");
  }
}
