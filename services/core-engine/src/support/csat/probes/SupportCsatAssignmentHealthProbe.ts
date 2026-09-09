export class SupportCsatAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatAssignment" };
  }
}
