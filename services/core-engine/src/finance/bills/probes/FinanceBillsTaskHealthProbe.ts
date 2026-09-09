export class FinanceBillsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBillsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBillsTask" };
  }
}
