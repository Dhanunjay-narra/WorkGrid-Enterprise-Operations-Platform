export type EventsIdempotencyMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsIdempotencyMappingStateMachine {
  private allowedTransitions: Record<EventsIdempotencyMappingState, EventsIdempotencyMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsIdempotencyMappingState, to: EventsIdempotencyMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsIdempotencyMappingState, to: EventsIdempotencyMappingState): EventsIdempotencyMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsIdempotencyMapping: " + from + " -> " + to);
    }
    return to;
  }
}
