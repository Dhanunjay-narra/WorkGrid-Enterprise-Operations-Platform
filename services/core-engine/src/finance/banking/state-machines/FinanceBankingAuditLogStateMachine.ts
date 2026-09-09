export type FinanceBankingAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingAuditLogStateMachine {
  private allowedTransitions: Record<FinanceBankingAuditLogState, FinanceBankingAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingAuditLogState, to: FinanceBankingAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingAuditLogState, to: FinanceBankingAuditLogState): FinanceBankingAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
