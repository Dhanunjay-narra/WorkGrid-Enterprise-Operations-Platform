export type EventsIdempotencyAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsIdempotencyAssignmentStateMachine {
  private allowedTransitions: Record<EventsIdempotencyAssignmentState, EventsIdempotencyAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsIdempotencyAssignmentState, to: EventsIdempotencyAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsIdempotencyAssignmentState, to: EventsIdempotencyAssignmentState): EventsIdempotencyAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsIdempotencyAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
