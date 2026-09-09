export class IntSalesforceSnapshotConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntSalesforceSnapshot created event for entity " + event.entityId + " in int_salesforce");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntSalesforceSnapshot updated event for entity " + event.entityId + " in int_salesforce");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntSalesforceSnapshot deleted event for entity " + event.entityId + " in int_salesforce");
  }
}
