export type EventsMetricsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsEntryStateMachine {
  private allowedTransitions: Record<EventsMetricsEntryState, EventsMetricsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsEntryState, to: EventsMetricsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsEntryState, to: EventsMetricsEntryState): EventsMetricsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
