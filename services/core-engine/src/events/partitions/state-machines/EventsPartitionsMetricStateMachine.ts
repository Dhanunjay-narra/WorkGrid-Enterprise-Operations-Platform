export type EventsPartitionsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsMetricStateMachine {
  private allowedTransitions: Record<EventsPartitionsMetricState, EventsPartitionsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsMetricState, to: EventsPartitionsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsMetricState, to: EventsPartitionsMetricState): EventsPartitionsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
