export type EventsDeadletterQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterQueueStateMachine {
  private allowedTransitions: Record<EventsDeadletterQueueState, EventsDeadletterQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterQueueState, to: EventsDeadletterQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterQueueState, to: EventsDeadletterQueueState): EventsDeadletterQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterQueue: " + from + " -> " + to);
    }
    return to;
  }
}
