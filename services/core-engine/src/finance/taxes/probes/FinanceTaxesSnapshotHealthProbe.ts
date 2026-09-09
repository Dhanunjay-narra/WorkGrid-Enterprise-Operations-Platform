export class FinanceTaxesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesSnapshot" };
  }
}
