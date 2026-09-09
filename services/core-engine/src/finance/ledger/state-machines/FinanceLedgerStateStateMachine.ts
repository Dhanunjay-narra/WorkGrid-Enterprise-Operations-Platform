export type FinanceLedgerStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerStateStateMachine {
  private allowedTransitions: Record<FinanceLedgerStateState, FinanceLedgerStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerStateState, to: FinanceLedgerStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerStateState, to: FinanceLedgerStateState): FinanceLedgerStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerState: " + from + " -> " + to);
    }
    return to;
  }
}
