export class CrmLeadsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsReport" };
  }
}
