export type FinanceBankingQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingQueueStateMachine {
  private allowedTransitions: Record<FinanceBankingQueueState, FinanceBankingQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingQueueState, to: FinanceBankingQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingQueueState, to: FinanceBankingQueueState): FinanceBankingQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingQueue: " + from + " -> " + to);
    }
    return to;
  }
}
