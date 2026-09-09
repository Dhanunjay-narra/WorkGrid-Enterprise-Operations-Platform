export class HrDesignationObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_hr_designation_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
