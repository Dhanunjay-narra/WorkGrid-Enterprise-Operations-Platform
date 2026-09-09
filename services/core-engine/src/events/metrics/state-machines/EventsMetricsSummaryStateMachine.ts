export type EventsMetricsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsSummaryStateMachine {
  private allowedTransitions: Record<EventsMetricsSummaryState, EventsMetricsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsSummaryState, to: EventsMetricsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsSummaryState, to: EventsMetricsSummaryState): EventsMetricsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
