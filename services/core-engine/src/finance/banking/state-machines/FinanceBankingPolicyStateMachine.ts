export type FinanceBankingPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingPolicyStateMachine {
  private allowedTransitions: Record<FinanceBankingPolicyState, FinanceBankingPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingPolicyState, to: FinanceBankingPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingPolicyState, to: FinanceBankingPolicyState): FinanceBankingPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
