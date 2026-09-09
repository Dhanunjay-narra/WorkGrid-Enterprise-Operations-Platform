export type HrShiftsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsScheduleStateMachine {
  private allowedTransitions: Record<HrShiftsScheduleState, HrShiftsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsScheduleState, to: HrShiftsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsScheduleState, to: HrShiftsScheduleState): HrShiftsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
