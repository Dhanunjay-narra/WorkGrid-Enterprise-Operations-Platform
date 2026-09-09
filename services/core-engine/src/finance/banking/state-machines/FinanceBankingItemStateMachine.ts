export type FinanceBankingItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingItemStateMachine {
  private allowedTransitions: Record<FinanceBankingItemState, FinanceBankingItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingItemState, to: FinanceBankingItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingItemState, to: FinanceBankingItemState): FinanceBankingItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingItem: " + from + " -> " + to);
    }
    return to;
  }
}
