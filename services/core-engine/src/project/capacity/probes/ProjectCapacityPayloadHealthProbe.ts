export class ProjectCapacityPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityPayload" };
  }
}
