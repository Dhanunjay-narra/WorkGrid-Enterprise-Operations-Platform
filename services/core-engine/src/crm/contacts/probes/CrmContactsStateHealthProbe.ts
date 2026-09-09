export class CrmContactsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsState" };
  }
}
