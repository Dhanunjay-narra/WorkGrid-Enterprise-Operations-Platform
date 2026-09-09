export class IotThresholdAlertRuleAlertTrigger {
  public static evaluateAlert(condition: boolean, severity: "INFO" | "WARN" | "CRITICAL", message: string): void {
    if (condition) {
      console.warn("[ALERT-RULE] Severity: " + severity + " | Domain: iot | Entity: IotThresholdAlertRule | " + message);
    }
  }
}
