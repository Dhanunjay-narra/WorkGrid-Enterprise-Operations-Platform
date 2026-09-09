export type FinanceLedgerItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerItemStateMachine {
  private allowedTransitions: Record<FinanceLedgerItemState, FinanceLedgerItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerItemState, to: FinanceLedgerItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerItemState, to: FinanceLedgerItemState): FinanceLedgerItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerItem: " + from + " -> " + to);
    }
    return to;
  }
}
