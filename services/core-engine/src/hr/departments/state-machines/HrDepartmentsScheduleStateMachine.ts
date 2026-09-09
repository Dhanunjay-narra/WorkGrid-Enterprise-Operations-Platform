export type HrDepartmentsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsScheduleStateMachine {
  private allowedTransitions: Record<HrDepartmentsScheduleState, HrDepartmentsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsScheduleState, to: HrDepartmentsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsScheduleState, to: HrDepartmentsScheduleState): HrDepartmentsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
