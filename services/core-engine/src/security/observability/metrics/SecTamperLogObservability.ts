export class SecTamperLogObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_security_tamperlog_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
