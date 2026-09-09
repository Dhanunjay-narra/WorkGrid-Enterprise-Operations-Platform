export class ProjectSprintsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectSprintsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectSprintsQueue" };
  }
}
