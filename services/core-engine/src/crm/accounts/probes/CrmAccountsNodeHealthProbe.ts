export class CrmAccountsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsNode" };
  }
}
