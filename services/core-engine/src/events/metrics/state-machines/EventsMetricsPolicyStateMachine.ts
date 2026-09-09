export type EventsMetricsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsPolicyStateMachine {
  private allowedTransitions: Record<EventsMetricsPolicyState, EventsMetricsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsPolicyState, to: EventsMetricsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsPolicyState, to: EventsMetricsPolicyState): EventsMetricsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
