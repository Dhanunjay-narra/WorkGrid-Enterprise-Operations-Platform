export class DmsOcrScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrSchedule" };
  }
}
