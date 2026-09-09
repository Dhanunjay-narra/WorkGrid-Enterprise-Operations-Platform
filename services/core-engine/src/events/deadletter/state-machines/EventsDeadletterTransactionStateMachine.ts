export type EventsDeadletterTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterTransactionStateMachine {
  private allowedTransitions: Record<EventsDeadletterTransactionState, EventsDeadletterTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterTransactionState, to: EventsDeadletterTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterTransactionState, to: EventsDeadletterTransactionState): EventsDeadletterTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
