export type EventsDeadletterAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterAssignmentStateMachine {
  private allowedTransitions: Record<EventsDeadletterAssignmentState, EventsDeadletterAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterAssignmentState, to: EventsDeadletterAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterAssignmentState, to: EventsDeadletterAssignmentState): EventsDeadletterAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
