export type EventsMetricsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsNodeStateMachine {
  private allowedTransitions: Record<EventsMetricsNodeState, EventsMetricsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsNodeState, to: EventsMetricsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsNodeState, to: EventsMetricsNodeState): EventsMetricsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsNode: " + from + " -> " + to);
    }
    return to;
  }
}
