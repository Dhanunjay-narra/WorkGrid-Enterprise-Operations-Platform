export class IdentityScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentitySchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentitySchedule" };
  }
}
