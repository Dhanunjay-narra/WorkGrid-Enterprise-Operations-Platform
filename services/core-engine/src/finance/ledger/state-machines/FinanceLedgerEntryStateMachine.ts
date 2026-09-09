export type FinanceLedgerEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerEntryStateMachine {
  private allowedTransitions: Record<FinanceLedgerEntryState, FinanceLedgerEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerEntryState, to: FinanceLedgerEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerEntryState, to: FinanceLedgerEntryState): FinanceLedgerEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerEntry: " + from + " -> " + to);
    }
    return to;
  }
}
