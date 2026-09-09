export type FinanceExpensesAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesAuditLogStateMachine {
  private allowedTransitions: Record<FinanceExpensesAuditLogState, FinanceExpensesAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesAuditLogState, to: FinanceExpensesAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesAuditLogState, to: FinanceExpensesAuditLogState): FinanceExpensesAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
