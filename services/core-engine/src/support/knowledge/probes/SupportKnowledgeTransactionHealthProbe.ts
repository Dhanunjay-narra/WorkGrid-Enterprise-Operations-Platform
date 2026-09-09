export class SupportKnowledgeTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeTransaction" };
  }
}
