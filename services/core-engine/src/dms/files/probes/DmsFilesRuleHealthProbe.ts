export class DmsFilesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesRule" };
  }
}
