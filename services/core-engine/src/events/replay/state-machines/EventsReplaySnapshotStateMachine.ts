export type EventsReplaySnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplaySnapshotStateMachine {
  private allowedTransitions: Record<EventsReplaySnapshotState, EventsReplaySnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplaySnapshotState, to: EventsReplaySnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplaySnapshotState, to: EventsReplaySnapshotState): EventsReplaySnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplaySnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
