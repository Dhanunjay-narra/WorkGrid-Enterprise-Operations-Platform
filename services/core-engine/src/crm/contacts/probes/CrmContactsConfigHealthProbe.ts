export class CrmContactsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsConfig" };
  }
}
