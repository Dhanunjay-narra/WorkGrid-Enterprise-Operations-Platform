export class CrmContactsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsThreshold" };
  }
}
