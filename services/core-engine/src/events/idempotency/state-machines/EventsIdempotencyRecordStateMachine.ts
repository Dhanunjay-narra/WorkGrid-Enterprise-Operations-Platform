export type EventsIdempotencyRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsIdempotencyRecordStateMachine {
  private allowedTransitions: Record<EventsIdempotencyRecordState, EventsIdempotencyRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsIdempotencyRecordState, to: EventsIdempotencyRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsIdempotencyRecordState, to: EventsIdempotencyRecordState): EventsIdempotencyRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsIdempotencyRecord: " + from + " -> " + to);
    }
    return to;
  }
}
