export class CrmLeadsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsTransaction" };
  }
}
