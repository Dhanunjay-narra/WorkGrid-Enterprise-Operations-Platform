export type EventsMetricsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsThresholdStateMachine {
  private allowedTransitions: Record<EventsMetricsThresholdState, EventsMetricsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsThresholdState, to: EventsMetricsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsThresholdState, to: EventsMetricsThresholdState): EventsMetricsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
