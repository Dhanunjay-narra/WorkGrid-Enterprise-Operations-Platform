export class FinanceInvoicesBatchConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceInvoicesBatch created event for entity " + event.entityId + " in finance_invoices");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceInvoicesBatch updated event for entity " + event.entityId + " in finance_invoices");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceInvoicesBatch deleted event for entity " + event.entityId + " in finance_invoices");
  }
}
