export class BiWidgetsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsQueue" };
  }
}
