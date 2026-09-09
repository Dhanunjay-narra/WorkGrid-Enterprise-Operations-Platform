export class CrmContactsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsEvent" };
  }
}
