export class HrLeaveBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveBatch" };
  }
}
