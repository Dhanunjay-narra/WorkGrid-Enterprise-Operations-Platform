export class HrEmployeeObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_hr_employee_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
