export type FinanceLedgerConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerConfigStateMachine {
  private allowedTransitions: Record<FinanceLedgerConfigState, FinanceLedgerConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerConfigState, to: FinanceLedgerConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerConfigState, to: FinanceLedgerConfigState): FinanceLedgerConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerConfig: " + from + " -> " + to);
    }
    return to;
  }
}
