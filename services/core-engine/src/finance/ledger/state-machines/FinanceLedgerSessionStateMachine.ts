export type FinanceLedgerSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerSessionStateMachine {
  private allowedTransitions: Record<FinanceLedgerSessionState, FinanceLedgerSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerSessionState, to: FinanceLedgerSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerSessionState, to: FinanceLedgerSessionState): FinanceLedgerSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerSession: " + from + " -> " + to);
    }
    return to;
  }
}
