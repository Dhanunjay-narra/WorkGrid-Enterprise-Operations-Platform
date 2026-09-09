export type EventsOutboxSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxSnapshotStateMachine {
  private allowedTransitions: Record<EventsOutboxSnapshotState, EventsOutboxSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxSnapshotState, to: EventsOutboxSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxSnapshotState, to: EventsOutboxSnapshotState): EventsOutboxSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
