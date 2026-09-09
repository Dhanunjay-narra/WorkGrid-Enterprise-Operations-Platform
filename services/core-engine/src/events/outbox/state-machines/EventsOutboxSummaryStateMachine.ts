export type EventsOutboxSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxSummaryStateMachine {
  private allowedTransitions: Record<EventsOutboxSummaryState, EventsOutboxSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxSummaryState, to: EventsOutboxSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxSummaryState, to: EventsOutboxSummaryState): EventsOutboxSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxSummary: " + from + " -> " + to);
    }
    return to;
  }
}
