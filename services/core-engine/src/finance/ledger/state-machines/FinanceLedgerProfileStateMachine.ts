export type FinanceLedgerProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerProfileStateMachine {
  private allowedTransitions: Record<FinanceLedgerProfileState, FinanceLedgerProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerProfileState, to: FinanceLedgerProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerProfileState, to: FinanceLedgerProfileState): FinanceLedgerProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerProfile: " + from + " -> " + to);
    }
    return to;
  }
}
