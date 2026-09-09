export type BiDashboardsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsScheduleStateMachine {
  private allowedTransitions: Record<BiDashboardsScheduleState, BiDashboardsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsScheduleState, to: BiDashboardsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsScheduleState, to: BiDashboardsScheduleState): BiDashboardsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
