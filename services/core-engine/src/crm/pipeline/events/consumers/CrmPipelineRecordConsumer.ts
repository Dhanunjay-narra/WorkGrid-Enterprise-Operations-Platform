export class CrmPipelineRecordConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmPipelineRecord created event for entity " + event.entityId + " in crm_pipeline");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmPipelineRecord updated event for entity " + event.entityId + " in crm_pipeline");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmPipelineRecord deleted event for entity " + event.entityId + " in crm_pipeline");
  }
}
