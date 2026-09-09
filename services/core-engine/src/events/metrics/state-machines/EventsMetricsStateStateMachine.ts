export type EventsMetricsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsStateStateMachine {
  private allowedTransitions: Record<EventsMetricsStateState, EventsMetricsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsStateState, to: EventsMetricsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsStateState, to: EventsMetricsStateState): EventsMetricsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsState: " + from + " -> " + to);
    }
    return to;
  }
}
