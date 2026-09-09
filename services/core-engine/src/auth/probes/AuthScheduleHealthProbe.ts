export class AuthScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthSchedule" };
  }
}
