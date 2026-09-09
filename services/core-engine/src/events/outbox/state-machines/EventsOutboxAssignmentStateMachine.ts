export type EventsOutboxAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxAssignmentStateMachine {
  private allowedTransitions: Record<EventsOutboxAssignmentState, EventsOutboxAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxAssignmentState, to: EventsOutboxAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxAssignmentState, to: EventsOutboxAssignmentState): EventsOutboxAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
