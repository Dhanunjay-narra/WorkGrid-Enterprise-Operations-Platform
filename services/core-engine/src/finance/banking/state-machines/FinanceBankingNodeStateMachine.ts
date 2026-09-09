export type FinanceBankingNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingNodeStateMachine {
  private allowedTransitions: Record<FinanceBankingNodeState, FinanceBankingNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingNodeState, to: FinanceBankingNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingNodeState, to: FinanceBankingNodeState): FinanceBankingNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingNode: " + from + " -> " + to);
    }
    return to;
  }
}
