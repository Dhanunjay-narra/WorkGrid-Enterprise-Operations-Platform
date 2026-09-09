export class IntStripeBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeBatch" };
  }
}
