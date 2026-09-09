export class DmsFoldersPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersPayload" };
  }
}
