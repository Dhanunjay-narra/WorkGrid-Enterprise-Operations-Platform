export class CrmPipelineEntryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmPipelineEntry created event for entity " + event.entityId + " in crm_pipeline");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmPipelineEntry updated event for entity " + event.entityId + " in crm_pipeline");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmPipelineEntry deleted event for entity " + event.entityId + " in crm_pipeline");
  }
}
