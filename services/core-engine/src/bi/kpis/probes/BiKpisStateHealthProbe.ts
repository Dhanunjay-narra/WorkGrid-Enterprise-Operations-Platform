export class BiKpisStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisState" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisState" };
  }
}
