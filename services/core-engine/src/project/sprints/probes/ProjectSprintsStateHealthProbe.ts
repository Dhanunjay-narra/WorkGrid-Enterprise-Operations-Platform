export class ProjectSprintsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectSprintsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectSprintsState" };
  }
}
