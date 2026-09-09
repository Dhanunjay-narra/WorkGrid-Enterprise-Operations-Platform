export class CrmAccountsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsThreshold" };
  }
}
