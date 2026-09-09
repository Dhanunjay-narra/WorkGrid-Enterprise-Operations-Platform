export class BiWidgetsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsEvent" };
  }
}
