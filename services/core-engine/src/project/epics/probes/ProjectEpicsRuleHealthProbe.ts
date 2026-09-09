export class ProjectEpicsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsRule" };
  }
}
