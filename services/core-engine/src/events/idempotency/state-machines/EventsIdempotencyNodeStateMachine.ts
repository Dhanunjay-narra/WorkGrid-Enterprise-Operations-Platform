export type EventsIdempotencyNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsIdempotencyNodeStateMachine {
  private allowedTransitions: Record<EventsIdempotencyNodeState, EventsIdempotencyNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsIdempotencyNodeState, to: EventsIdempotencyNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsIdempotencyNodeState, to: EventsIdempotencyNodeState): EventsIdempotencyNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsIdempotencyNode: " + from + " -> " + to);
    }
    return to;
  }
}
