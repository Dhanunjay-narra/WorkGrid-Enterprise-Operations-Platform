export type FinanceBillsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsAuditLogStateMachine {
  private allowedTransitions: Record<FinanceBillsAuditLogState, FinanceBillsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsAuditLogState, to: FinanceBillsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsAuditLogState, to: FinanceBillsAuditLogState): FinanceBillsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
