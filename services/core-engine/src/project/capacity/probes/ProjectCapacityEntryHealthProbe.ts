export class ProjectCapacityEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityEntry" };
  }
}
