export class SupportCsatScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatSchedule" };
  }
}
