export class HrInterviewStageWebhookHandler {
  public async processInbound(eventSignature: string, payload: Record<string, any>): Promise<{ status: string; processedAt: string }> {
    console.log("[WEBHOOK-INBOUND] Processing webhook for HrInterviewStage with signature " + eventSignature);
    return { status: "ACCEPTED", processedAt: new Date().toISOString() };
  }
}
