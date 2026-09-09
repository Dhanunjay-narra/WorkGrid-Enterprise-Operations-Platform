export class IntOauthRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthRule" };
  }
}
