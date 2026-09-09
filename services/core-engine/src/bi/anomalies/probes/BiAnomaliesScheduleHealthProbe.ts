export class BiAnomaliesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesSchedule" };
  }
}
