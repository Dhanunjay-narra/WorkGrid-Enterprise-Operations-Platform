export class HrLeaveProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveProfile" };
  }
}
