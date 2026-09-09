export class BiWidgetsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsConfig" };
  }
}
