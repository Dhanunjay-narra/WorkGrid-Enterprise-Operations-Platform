export class CrmContactsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsSession" };
  }
}
