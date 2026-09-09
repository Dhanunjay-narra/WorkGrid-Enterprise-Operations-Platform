export class FinInvoiceItemAlertTrigger {
  public static evaluateAlert(condition: boolean, severity: "INFO" | "WARN" | "CRITICAL", message: string): void {
    if (condition) {
      console.warn("[ALERT-RULE] Severity: " + severity + " | Domain: finance | Entity: FinInvoiceItem | " + message);
    }
  }
}
