export type HrPerformanceScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceScheduleStateMachine {
  private allowedTransitions: Record<HrPerformanceScheduleState, HrPerformanceScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceScheduleState, to: HrPerformanceScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceScheduleState, to: HrPerformanceScheduleState): HrPerformanceScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
