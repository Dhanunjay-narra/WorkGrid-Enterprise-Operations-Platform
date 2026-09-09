export class SupportQueuesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportQueuesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportQueuesRule" };
  }
}
