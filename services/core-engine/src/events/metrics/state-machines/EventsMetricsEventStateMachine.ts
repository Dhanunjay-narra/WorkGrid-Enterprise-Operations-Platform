export type EventsMetricsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsEventStateMachine {
  private allowedTransitions: Record<EventsMetricsEventState, EventsMetricsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsEventState, to: EventsMetricsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsEventState, to: EventsMetricsEventState): EventsMetricsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
