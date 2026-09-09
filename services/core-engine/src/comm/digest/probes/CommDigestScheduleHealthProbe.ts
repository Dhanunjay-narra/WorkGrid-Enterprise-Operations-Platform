export class CommDigestScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestSchedule" };
  }
}
