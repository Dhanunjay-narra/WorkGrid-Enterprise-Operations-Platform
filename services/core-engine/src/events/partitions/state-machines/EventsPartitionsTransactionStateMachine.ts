export type EventsPartitionsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsTransactionStateMachine {
  private allowedTransitions: Record<EventsPartitionsTransactionState, EventsPartitionsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsTransactionState, to: EventsPartitionsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsTransactionState, to: EventsPartitionsTransactionState): EventsPartitionsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
