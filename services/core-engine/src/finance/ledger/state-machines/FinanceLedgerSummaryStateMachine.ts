export type FinanceLedgerSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerSummaryStateMachine {
  private allowedTransitions: Record<FinanceLedgerSummaryState, FinanceLedgerSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerSummaryState, to: FinanceLedgerSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerSummaryState, to: FinanceLedgerSummaryState): FinanceLedgerSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerSummary: " + from + " -> " + to);
    }
    return to;
  }
}
