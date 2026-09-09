export type EventsMetricsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsTaskStateMachine {
  private allowedTransitions: Record<EventsMetricsTaskState, EventsMetricsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsTaskState, to: EventsMetricsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsTaskState, to: EventsMetricsTaskState): EventsMetricsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsTask: " + from + " -> " + to);
    }
    return to;
  }
}
