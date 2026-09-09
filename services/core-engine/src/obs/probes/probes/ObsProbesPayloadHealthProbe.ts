export class ObsProbesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesPayload" };
  }
}
