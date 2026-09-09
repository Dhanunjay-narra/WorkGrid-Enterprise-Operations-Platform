export class IotFleetSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetSummary" };
  }
}
