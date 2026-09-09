export class FinanceBillsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBillsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBillsNode" };
  }
}
