export class RbacSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacSummary" };
  }
}
