export type EventsDeadletterPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterPolicyStateMachine {
  private allowedTransitions: Record<EventsDeadletterPolicyState, EventsDeadletterPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterPolicyState, to: EventsDeadletterPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterPolicyState, to: EventsDeadletterPolicyState): EventsDeadletterPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
