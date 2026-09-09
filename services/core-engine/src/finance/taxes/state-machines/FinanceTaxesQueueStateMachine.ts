export type FinanceTaxesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesQueueStateMachine {
  private allowedTransitions: Record<FinanceTaxesQueueState, FinanceTaxesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesQueueState, to: FinanceTaxesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesQueueState, to: FinanceTaxesQueueState): FinanceTaxesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
