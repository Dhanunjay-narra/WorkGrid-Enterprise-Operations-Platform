export class ProjectEpicsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsPayload" };
  }
}
