export class IotCommandsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsThreshold" };
  }
}
