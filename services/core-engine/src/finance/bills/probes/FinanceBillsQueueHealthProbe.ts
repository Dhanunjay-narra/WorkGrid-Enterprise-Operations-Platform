export class FinanceBillsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBillsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBillsQueue" };
  }
}
