export type EventsPartitionsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsSnapshotStateMachine {
  private allowedTransitions: Record<EventsPartitionsSnapshotState, EventsPartitionsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsSnapshotState, to: EventsPartitionsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsSnapshotState, to: EventsPartitionsSnapshotState): EventsPartitionsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
