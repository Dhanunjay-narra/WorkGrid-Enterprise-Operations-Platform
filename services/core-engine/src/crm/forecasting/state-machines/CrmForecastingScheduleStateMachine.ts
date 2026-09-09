export type CrmForecastingScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingScheduleStateMachine {
  private allowedTransitions: Record<CrmForecastingScheduleState, CrmForecastingScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingScheduleState, to: CrmForecastingScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingScheduleState, to: CrmForecastingScheduleState): CrmForecastingScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
