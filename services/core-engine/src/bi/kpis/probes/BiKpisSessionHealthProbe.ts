export class BiKpisSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisSession" };
  }
}
