export type EventsConsumersPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersPolicyStateMachine {
  private allowedTransitions: Record<EventsConsumersPolicyState, EventsConsumersPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersPolicyState, to: EventsConsumersPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersPolicyState, to: EventsConsumersPolicyState): EventsConsumersPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
