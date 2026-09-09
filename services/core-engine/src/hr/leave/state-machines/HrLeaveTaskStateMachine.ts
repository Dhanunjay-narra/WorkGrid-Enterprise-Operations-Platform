export type HrLeaveTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveTaskStateMachine {
  private allowedTransitions: Record<HrLeaveTaskState, HrLeaveTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveTaskState, to: HrLeaveTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveTaskState, to: HrLeaveTaskState): HrLeaveTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveTask: " + from + " -> " + to);
    }
    return to;
  }
}
