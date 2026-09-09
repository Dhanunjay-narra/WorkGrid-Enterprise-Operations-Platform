export class BiKpisItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisItem" };
  }
}
