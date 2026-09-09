export type EventsMetricsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsConfigStateMachine {
  private allowedTransitions: Record<EventsMetricsConfigState, EventsMetricsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsConfigState, to: EventsMetricsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsConfigState, to: EventsMetricsConfigState): EventsMetricsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
