export type HrPayrollScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollScheduleStateMachine {
  private allowedTransitions: Record<HrPayrollScheduleState, HrPayrollScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollScheduleState, to: HrPayrollScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollScheduleState, to: HrPayrollScheduleState): HrPayrollScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
