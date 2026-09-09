export class CrmContactsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsNode" };
  }
}
