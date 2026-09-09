export class FinInvoiceItemWebhookHandler {
  public async processInbound(eventSignature: string, payload: Record<string, any>): Promise<{ status: string; processedAt: string }> {
    console.log("[WEBHOOK-INBOUND] Processing webhook for FinInvoiceItem with signature " + eventSignature);
    return { status: "ACCEPTED", processedAt: new Date().toISOString() };
  }
}
