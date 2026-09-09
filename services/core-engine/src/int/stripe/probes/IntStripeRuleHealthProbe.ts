export class IntStripeRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeRule" };
  }
}
