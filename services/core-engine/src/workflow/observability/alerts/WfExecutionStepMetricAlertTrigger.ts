export class WfExecutionStepMetricAlertTrigger {
  public static evaluateAlert(condition: boolean, severity: "INFO" | "WARN" | "CRITICAL", message: string): void {
    if (condition) {
      console.warn("[ALERT-RULE] Severity: " + severity + " | Domain: workflow | Entity: WfExecutionStepMetric | " + message);
    }
  }
}
