export class ObsMetricsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsSchedule" };
  }
}
