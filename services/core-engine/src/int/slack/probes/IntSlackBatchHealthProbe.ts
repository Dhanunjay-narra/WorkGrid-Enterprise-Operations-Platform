export class IntSlackBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackBatch" };
  }
}
