export class CommCallsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsSchedule" };
  }
}
