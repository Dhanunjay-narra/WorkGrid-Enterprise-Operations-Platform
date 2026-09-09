export class CrmLeadsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsSession" };
  }
}
