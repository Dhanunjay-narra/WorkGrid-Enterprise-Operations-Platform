export type EventsMetricsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsMappingStateMachine {
  private allowedTransitions: Record<EventsMetricsMappingState, EventsMetricsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsMappingState, to: EventsMetricsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsMappingState, to: EventsMetricsMappingState): EventsMetricsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
