export class ProjectSprintsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectSprintsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectSprintsTask" };
  }
}
