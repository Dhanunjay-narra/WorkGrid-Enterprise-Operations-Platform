export type EventsOutboxMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxMetricStateMachine {
  private allowedTransitions: Record<EventsOutboxMetricState, EventsOutboxMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxMetricState, to: EventsOutboxMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxMetricState, to: EventsOutboxMetricState): EventsOutboxMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxMetric: " + from + " -> " + to);
    }
    return to;
  }
}
