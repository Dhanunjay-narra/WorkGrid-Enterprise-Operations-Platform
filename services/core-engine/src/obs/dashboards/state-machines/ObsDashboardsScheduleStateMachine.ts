export type ObsDashboardsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsScheduleStateMachine {
  private allowedTransitions: Record<ObsDashboardsScheduleState, ObsDashboardsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsScheduleState, to: ObsDashboardsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsScheduleState, to: ObsDashboardsScheduleState): ObsDashboardsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
