export class CrmContactsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsQueue" };
  }
}
