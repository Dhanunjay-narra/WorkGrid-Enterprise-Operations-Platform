export type EventsSchemaSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaSnapshotStateMachine {
  private allowedTransitions: Record<EventsSchemaSnapshotState, EventsSchemaSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaSnapshotState, to: EventsSchemaSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaSnapshotState, to: EventsSchemaSnapshotState): EventsSchemaSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
