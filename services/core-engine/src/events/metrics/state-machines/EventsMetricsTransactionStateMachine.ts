export type EventsMetricsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsTransactionStateMachine {
  private allowedTransitions: Record<EventsMetricsTransactionState, EventsMetricsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsTransactionState, to: EventsMetricsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsTransactionState, to: EventsMetricsTransactionState): EventsMetricsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
