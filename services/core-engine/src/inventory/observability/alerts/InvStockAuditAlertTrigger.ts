export class InvStockAuditAlertTrigger {
  public static evaluateAlert(condition: boolean, severity: "INFO" | "WARN" | "CRITICAL", message: string): void {
    if (condition) {
      console.warn("[ALERT-RULE] Severity: " + severity + " | Domain: inventory | Entity: InvStockAudit | " + message);
    }
  }
}
