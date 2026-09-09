export type HrShiftsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsQueueStateMachine {
  private allowedTransitions: Record<HrShiftsQueueState, HrShiftsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsQueueState, to: HrShiftsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsQueueState, to: HrShiftsQueueState): HrShiftsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
