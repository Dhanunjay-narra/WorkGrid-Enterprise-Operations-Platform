export class SecRateLimitCounterAlertTrigger {
  public static evaluateAlert(condition: boolean, severity: "INFO" | "WARN" | "CRITICAL", message: string): void {
    if (condition) {
      console.warn("[ALERT-RULE] Severity: " + severity + " | Domain: security | Entity: SecRateLimitCounter | " + message);
    }
  }
}
