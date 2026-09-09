export class FinanceInvoicesPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceInvoicesPayload created event for entity " + event.entityId + " in finance_invoices");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceInvoicesPayload updated event for entity " + event.entityId + " in finance_invoices");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceInvoicesPayload deleted event for entity " + event.entityId + " in finance_invoices");
  }
}
