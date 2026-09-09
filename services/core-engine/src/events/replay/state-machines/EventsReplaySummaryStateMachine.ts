export type EventsReplaySummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplaySummaryStateMachine {
  private allowedTransitions: Record<EventsReplaySummaryState, EventsReplaySummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplaySummaryState, to: EventsReplaySummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplaySummaryState, to: EventsReplaySummaryState): EventsReplaySummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplaySummary: " + from + " -> " + to);
    }
    return to;
  }
}
