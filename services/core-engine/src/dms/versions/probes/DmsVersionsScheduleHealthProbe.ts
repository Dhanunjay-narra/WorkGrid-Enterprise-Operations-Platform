export class DmsVersionsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsSchedule" };
  }
}
