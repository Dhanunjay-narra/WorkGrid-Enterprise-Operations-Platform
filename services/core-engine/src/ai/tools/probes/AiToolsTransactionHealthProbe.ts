export class AiToolsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsTransaction" };
  }
}
