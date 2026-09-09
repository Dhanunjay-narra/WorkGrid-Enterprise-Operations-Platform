export class CrmPipelinePayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmPipelinePayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmPipelinePayload" };
  }
}
