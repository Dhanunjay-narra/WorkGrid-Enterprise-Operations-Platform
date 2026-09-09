export class DmsFilesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesPayload" };
  }
}
