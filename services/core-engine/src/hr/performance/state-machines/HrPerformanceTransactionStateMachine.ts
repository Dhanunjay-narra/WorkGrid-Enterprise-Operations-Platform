export type HrPerformanceTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceTransactionStateMachine {
  private allowedTransitions: Record<HrPerformanceTransactionState, HrPerformanceTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceTransactionState, to: HrPerformanceTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceTransactionState, to: HrPerformanceTransactionState): HrPerformanceTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
