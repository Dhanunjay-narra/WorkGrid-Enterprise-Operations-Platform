export class EvtEventPartitionAlertTrigger {
  public static evaluateAlert(condition: boolean, severity: "INFO" | "WARN" | "CRITICAL", message: string): void {
    if (condition) {
      console.warn("[ALERT-RULE] Severity: " + severity + " | Domain: events | Entity: EvtEventPartition | " + message);
    }
  }
}
