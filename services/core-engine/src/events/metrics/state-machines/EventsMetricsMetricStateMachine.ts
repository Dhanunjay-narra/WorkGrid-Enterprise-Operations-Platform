export type EventsMetricsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsMetricStateMachine {
  private allowedTransitions: Record<EventsMetricsMetricState, EventsMetricsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsMetricState, to: EventsMetricsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsMetricState, to: EventsMetricsMetricState): EventsMetricsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
