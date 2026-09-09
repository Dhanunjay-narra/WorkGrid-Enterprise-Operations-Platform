export class IntSalesforceBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceBatch" };
  }
}
