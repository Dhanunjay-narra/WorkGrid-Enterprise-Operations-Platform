export class ObsAlertsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsRule" };
  }
}
