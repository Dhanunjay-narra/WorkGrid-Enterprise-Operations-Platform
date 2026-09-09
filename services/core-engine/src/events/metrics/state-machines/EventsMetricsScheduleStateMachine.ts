export type EventsMetricsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsScheduleStateMachine {
  private allowedTransitions: Record<EventsMetricsScheduleState, EventsMetricsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsScheduleState, to: EventsMetricsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsScheduleState, to: EventsMetricsScheduleState): EventsMetricsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
