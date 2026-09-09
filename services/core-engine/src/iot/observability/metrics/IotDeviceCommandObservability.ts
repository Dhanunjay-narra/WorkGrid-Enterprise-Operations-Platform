export class IotDeviceCommandObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_iot_devicecommand_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
