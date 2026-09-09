export class IotCommandsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsPayload" };
  }
}
