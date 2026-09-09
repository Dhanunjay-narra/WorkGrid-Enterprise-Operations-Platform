export class BiQueriesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesSchedule" };
  }
}
