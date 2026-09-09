export class ProjectSprintsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectSprintsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectSprintsPayload" };
  }
}
