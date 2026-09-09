export type EventsOutboxTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxTransactionStateMachine {
  private allowedTransitions: Record<EventsOutboxTransactionState, EventsOutboxTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxTransactionState, to: EventsOutboxTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxTransactionState, to: EventsOutboxTransactionState): EventsOutboxTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
