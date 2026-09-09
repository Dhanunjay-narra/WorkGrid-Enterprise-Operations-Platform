export type FinanceLedgerNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerNodeStateMachine {
  private allowedTransitions: Record<FinanceLedgerNodeState, FinanceLedgerNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerNodeState, to: FinanceLedgerNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerNodeState, to: FinanceLedgerNodeState): FinanceLedgerNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerNode: " + from + " -> " + to);
    }
    return to;
  }
}
