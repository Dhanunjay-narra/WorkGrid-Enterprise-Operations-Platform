export type HrLeaveThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveThresholdStateMachine {
  private allowedTransitions: Record<HrLeaveThresholdState, HrLeaveThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveThresholdState, to: HrLeaveThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveThresholdState, to: HrLeaveThresholdState): HrLeaveThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
