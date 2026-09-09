export class IntSalesforceSessionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntSalesforceSession created event for entity " + event.entityId + " in int_salesforce");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntSalesforceSession updated event for entity " + event.entityId + " in int_salesforce");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntSalesforceSession deleted event for entity " + event.entityId + " in int_salesforce");
  }
}
