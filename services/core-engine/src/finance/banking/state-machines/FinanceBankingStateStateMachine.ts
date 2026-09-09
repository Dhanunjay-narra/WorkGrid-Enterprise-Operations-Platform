export type FinanceBankingStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingStateStateMachine {
  private allowedTransitions: Record<FinanceBankingStateState, FinanceBankingStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingStateState, to: FinanceBankingStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingStateState, to: FinanceBankingStateState): FinanceBankingStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingState: " + from + " -> " + to);
    }
    return to;
  }
}
