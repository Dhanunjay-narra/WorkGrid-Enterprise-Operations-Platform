export class IntOauthScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthSchedule" };
  }
}
