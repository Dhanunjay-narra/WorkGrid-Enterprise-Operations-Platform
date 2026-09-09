export type EventsReplayAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayAssignmentStateMachine {
  private allowedTransitions: Record<EventsReplayAssignmentState, EventsReplayAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayAssignmentState, to: EventsReplayAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayAssignmentState, to: EventsReplayAssignmentState): EventsReplayAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
