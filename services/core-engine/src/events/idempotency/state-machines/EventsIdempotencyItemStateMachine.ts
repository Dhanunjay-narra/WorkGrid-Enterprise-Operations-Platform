export type EventsIdempotencyItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsIdempotencyItemStateMachine {
  private allowedTransitions: Record<EventsIdempotencyItemState, EventsIdempotencyItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsIdempotencyItemState, to: EventsIdempotencyItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsIdempotencyItemState, to: EventsIdempotencyItemState): EventsIdempotencyItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsIdempotencyItem: " + from + " -> " + to);
    }
    return to;
  }
}
