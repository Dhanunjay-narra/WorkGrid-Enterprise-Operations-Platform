export type EventsDeadletterSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterSnapshotStateMachine {
  private allowedTransitions: Record<EventsDeadletterSnapshotState, EventsDeadletterSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterSnapshotState, to: EventsDeadletterSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterSnapshotState, to: EventsDeadletterSnapshotState): EventsDeadletterSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
