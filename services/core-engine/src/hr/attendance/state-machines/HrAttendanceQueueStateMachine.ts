export type HrAttendanceQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceQueueStateMachine {
  private allowedTransitions: Record<HrAttendanceQueueState, HrAttendanceQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceQueueState, to: HrAttendanceQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceQueueState, to: HrAttendanceQueueState): HrAttendanceQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceQueue: " + from + " -> " + to);
    }
    return to;
  }
}
