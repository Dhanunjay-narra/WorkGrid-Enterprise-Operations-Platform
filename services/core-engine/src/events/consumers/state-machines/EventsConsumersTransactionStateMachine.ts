export type EventsConsumersTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersTransactionStateMachine {
  private allowedTransitions: Record<EventsConsumersTransactionState, EventsConsumersTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersTransactionState, to: EventsConsumersTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersTransactionState, to: EventsConsumersTransactionState): EventsConsumersTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
