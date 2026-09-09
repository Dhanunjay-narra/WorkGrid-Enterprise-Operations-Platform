export class SecuritySummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecuritySummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecuritySummary" };
  }
}
