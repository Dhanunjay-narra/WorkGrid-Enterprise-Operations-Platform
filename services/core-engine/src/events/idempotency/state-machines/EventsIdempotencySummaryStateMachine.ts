export type EventsIdempotencySummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsIdempotencySummaryStateMachine {
  private allowedTransitions: Record<EventsIdempotencySummaryState, EventsIdempotencySummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsIdempotencySummaryState, to: EventsIdempotencySummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsIdempotencySummaryState, to: EventsIdempotencySummaryState): EventsIdempotencySummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsIdempotencySummary: " + from + " -> " + to);
    }
    return to;
  }
}
