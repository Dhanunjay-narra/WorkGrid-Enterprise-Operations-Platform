export class IntRateLimitsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsSchedule" };
  }
}
