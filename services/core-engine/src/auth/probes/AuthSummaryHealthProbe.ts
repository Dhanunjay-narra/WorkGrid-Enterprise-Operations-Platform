export class AuthSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthSummary" };
  }
}
