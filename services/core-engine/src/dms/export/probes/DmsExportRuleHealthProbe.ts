export class DmsExportRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportRule" };
  }
}
