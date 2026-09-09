export type FinanceBankingEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingEntryStateMachine {
  private allowedTransitions: Record<FinanceBankingEntryState, FinanceBankingEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingEntryState, to: FinanceBankingEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingEntryState, to: FinanceBankingEntryState): FinanceBankingEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingEntry: " + from + " -> " + to);
    }
    return to;
  }
}
