export class BiWidgetsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsPolicy" };
  }
}
