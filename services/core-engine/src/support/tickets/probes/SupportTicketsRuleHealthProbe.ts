export class SupportTicketsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportTicketsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportTicketsRule" };
  }
}
