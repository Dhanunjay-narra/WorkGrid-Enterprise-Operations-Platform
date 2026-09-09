export type FinanceLedgerEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerEventStateMachine {
  private allowedTransitions: Record<FinanceLedgerEventState, FinanceLedgerEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerEventState, to: FinanceLedgerEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerEventState, to: FinanceLedgerEventState): FinanceLedgerEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerEvent: " + from + " -> " + to);
    }
    return to;
  }
}
