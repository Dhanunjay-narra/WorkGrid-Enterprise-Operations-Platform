export type HrLeaveScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveScheduleStateMachine {
  private allowedTransitions: Record<HrLeaveScheduleState, HrLeaveScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveScheduleState, to: HrLeaveScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveScheduleState, to: HrLeaveScheduleState): HrLeaveScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
