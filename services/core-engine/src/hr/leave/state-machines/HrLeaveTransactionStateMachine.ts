export type HrLeaveTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveTransactionStateMachine {
  private allowedTransitions: Record<HrLeaveTransactionState, HrLeaveTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveTransactionState, to: HrLeaveTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveTransactionState, to: HrLeaveTransactionState): HrLeaveTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
