export type BiForecastsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsScheduleStateMachine {
  private allowedTransitions: Record<BiForecastsScheduleState, BiForecastsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsScheduleState, to: BiForecastsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsScheduleState, to: BiForecastsScheduleState): BiForecastsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
