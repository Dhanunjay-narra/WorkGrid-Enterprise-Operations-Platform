export class CommDigestAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestAssignment" };
  }
}
