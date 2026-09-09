export type FinanceBillsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsPolicyStateMachine {
  private allowedTransitions: Record<FinanceBillsPolicyState, FinanceBillsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsPolicyState, to: FinanceBillsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsPolicyState, to: FinanceBillsPolicyState): FinanceBillsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
