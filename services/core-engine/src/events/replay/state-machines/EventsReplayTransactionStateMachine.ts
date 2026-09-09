export type EventsReplayTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayTransactionStateMachine {
  private allowedTransitions: Record<EventsReplayTransactionState, EventsReplayTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayTransactionState, to: EventsReplayTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayTransactionState, to: EventsReplayTransactionState): EventsReplayTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
