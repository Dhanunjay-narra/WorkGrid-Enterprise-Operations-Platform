export class IotFirmwareVersionObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_iot_firmwareversion_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
