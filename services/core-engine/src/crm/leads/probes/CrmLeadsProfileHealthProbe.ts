export class CrmLeadsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsProfile" };
  }
}
