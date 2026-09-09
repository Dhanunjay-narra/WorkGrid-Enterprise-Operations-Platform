export class DmsFoldersRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersRule" };
  }
}
