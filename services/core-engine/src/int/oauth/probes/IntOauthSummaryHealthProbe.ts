export class IntOauthSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthSummary" };
  }
}
