export type EventsMetricsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsBatchStateMachine {
  private allowedTransitions: Record<EventsMetricsBatchState, EventsMetricsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsBatchState, to: EventsMetricsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsBatchState, to: EventsMetricsBatchState): EventsMetricsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
