export type EventsPartitionsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsAssignmentStateMachine {
  private allowedTransitions: Record<EventsPartitionsAssignmentState, EventsPartitionsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsAssignmentState, to: EventsPartitionsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsAssignmentState, to: EventsPartitionsAssignmentState): EventsPartitionsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
