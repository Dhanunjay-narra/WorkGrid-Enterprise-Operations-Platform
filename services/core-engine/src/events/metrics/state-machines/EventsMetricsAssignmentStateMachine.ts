export type EventsMetricsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsAssignmentStateMachine {
  private allowedTransitions: Record<EventsMetricsAssignmentState, EventsMetricsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsAssignmentState, to: EventsMetricsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsAssignmentState, to: EventsMetricsAssignmentState): EventsMetricsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
