export type EventsOutboxPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxPolicyStateMachine {
  private allowedTransitions: Record<EventsOutboxPolicyState, EventsOutboxPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxPolicyState, to: EventsOutboxPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxPolicyState, to: EventsOutboxPolicyState): EventsOutboxPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
