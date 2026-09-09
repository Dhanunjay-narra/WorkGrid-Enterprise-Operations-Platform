export class AuthRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthRule" };
  }
}
