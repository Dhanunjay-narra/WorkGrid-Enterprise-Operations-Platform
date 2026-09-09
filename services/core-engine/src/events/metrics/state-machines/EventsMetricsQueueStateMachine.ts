export type EventsMetricsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsQueueStateMachine {
  private allowedTransitions: Record<EventsMetricsQueueState, EventsMetricsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsQueueState, to: EventsMetricsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsQueueState, to: EventsMetricsQueueState): EventsMetricsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
