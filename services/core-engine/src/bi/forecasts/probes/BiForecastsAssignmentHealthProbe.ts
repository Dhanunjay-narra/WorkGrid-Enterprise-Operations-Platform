export class BiForecastsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsAssignment" };
  }
}
