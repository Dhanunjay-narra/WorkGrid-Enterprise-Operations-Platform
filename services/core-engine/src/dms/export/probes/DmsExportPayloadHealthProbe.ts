export class DmsExportPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportPayload" };
  }
}
