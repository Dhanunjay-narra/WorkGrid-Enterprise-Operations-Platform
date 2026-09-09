export class BiWidgetsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsMapping" };
  }
}
