export class CrmContactsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsTask" };
  }
}
