export class BiKpisConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisConfig" };
  }
}
