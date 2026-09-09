export class CrmPipelineWebhookHandler {
  public async processInbound(eventSignature: string, payload: Record<string, any>): Promise<{ status: string; processedAt: string }> {
    console.log("[WEBHOOK-INBOUND] Processing webhook for CrmPipeline with signature " + eventSignature);
    return { status: "ACCEPTED", processedAt: new Date().toISOString() };
  }
}
