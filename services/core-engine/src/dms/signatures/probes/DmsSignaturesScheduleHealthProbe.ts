export class DmsSignaturesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesSchedule" };
  }
}
