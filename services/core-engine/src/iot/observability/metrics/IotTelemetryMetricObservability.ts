export class IotTelemetryMetricObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_iot_telemetrymetric_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
