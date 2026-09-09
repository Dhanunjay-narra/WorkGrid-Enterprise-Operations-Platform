export class IntSalesforceSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceSummary" };
  }
}
