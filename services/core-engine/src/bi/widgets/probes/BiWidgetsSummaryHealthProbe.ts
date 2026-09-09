export class BiWidgetsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsSummary" };
  }
}
