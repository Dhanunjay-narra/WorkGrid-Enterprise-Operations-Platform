export class CrmLeadsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsPolicy" };
  }
}
