export type FinanceBillsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsQueueStateMachine {
  private allowedTransitions: Record<FinanceBillsQueueState, FinanceBillsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsQueueState, to: FinanceBillsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsQueueState, to: FinanceBillsQueueState): FinanceBillsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
