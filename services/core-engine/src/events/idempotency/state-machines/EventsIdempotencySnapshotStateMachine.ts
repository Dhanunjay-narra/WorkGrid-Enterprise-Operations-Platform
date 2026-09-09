export type EventsIdempotencySnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsIdempotencySnapshotStateMachine {
  private allowedTransitions: Record<EventsIdempotencySnapshotState, EventsIdempotencySnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsIdempotencySnapshotState, to: EventsIdempotencySnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsIdempotencySnapshotState, to: EventsIdempotencySnapshotState): EventsIdempotencySnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsIdempotencySnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
