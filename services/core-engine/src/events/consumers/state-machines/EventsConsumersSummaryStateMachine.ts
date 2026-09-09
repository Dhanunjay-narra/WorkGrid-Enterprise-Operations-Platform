export type EventsConsumersSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersSummaryStateMachine {
  private allowedTransitions: Record<EventsConsumersSummaryState, EventsConsumersSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersSummaryState, to: EventsConsumersSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersSummaryState, to: EventsConsumersSummaryState): EventsConsumersSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersSummary: " + from + " -> " + to);
    }
    return to;
  }
}
