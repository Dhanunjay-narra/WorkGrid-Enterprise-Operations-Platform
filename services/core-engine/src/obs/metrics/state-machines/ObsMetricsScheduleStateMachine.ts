export type ObsMetricsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsScheduleStateMachine {
  private allowedTransitions: Record<ObsMetricsScheduleState, ObsMetricsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsScheduleState, to: ObsMetricsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsScheduleState, to: ObsMetricsScheduleState): ObsMetricsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
