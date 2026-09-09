export type EventsConsumersAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersAssignmentStateMachine {
  private allowedTransitions: Record<EventsConsumersAssignmentState, EventsConsumersAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersAssignmentState, to: EventsConsumersAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersAssignmentState, to: EventsConsumersAssignmentState): EventsConsumersAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
