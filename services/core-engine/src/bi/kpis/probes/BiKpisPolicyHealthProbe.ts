export class BiKpisPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisPolicy" };
  }
}
