export class RbacScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacSchedule" };
  }
}
