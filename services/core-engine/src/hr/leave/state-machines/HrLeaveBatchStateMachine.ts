export type HrLeaveBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveBatchStateMachine {
  private allowedTransitions: Record<HrLeaveBatchState, HrLeaveBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveBatchState, to: HrLeaveBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveBatchState, to: HrLeaveBatchState): HrLeaveBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveBatch: " + from + " -> " + to);
    }
    return to;
  }
}
