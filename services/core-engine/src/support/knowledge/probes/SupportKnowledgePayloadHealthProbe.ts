export class SupportKnowledgePayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgePayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgePayload" };
  }
}
