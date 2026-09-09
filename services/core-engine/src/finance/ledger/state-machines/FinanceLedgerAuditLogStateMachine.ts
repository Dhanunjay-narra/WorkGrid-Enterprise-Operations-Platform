export type FinanceLedgerAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerAuditLogStateMachine {
  private allowedTransitions: Record<FinanceLedgerAuditLogState, FinanceLedgerAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerAuditLogState, to: FinanceLedgerAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerAuditLogState, to: FinanceLedgerAuditLogState): FinanceLedgerAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
