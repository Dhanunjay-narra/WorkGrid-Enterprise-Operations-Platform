export type EventsSchemaAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaAssignmentStateMachine {
  private allowedTransitions: Record<EventsSchemaAssignmentState, EventsSchemaAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaAssignmentState, to: EventsSchemaAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaAssignmentState, to: EventsSchemaAssignmentState): EventsSchemaAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
