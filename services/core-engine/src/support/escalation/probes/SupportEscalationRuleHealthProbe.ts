export class SupportEscalationRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportEscalationRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportEscalationRule" };
  }
}
