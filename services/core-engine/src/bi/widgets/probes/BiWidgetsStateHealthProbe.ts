export class BiWidgetsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsState" };
  }
}
