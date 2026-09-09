export type EventsConsumersQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersQueueStateMachine {
  private allowedTransitions: Record<EventsConsumersQueueState, EventsConsumersQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersQueueState, to: EventsConsumersQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersQueueState, to: EventsConsumersQueueState): EventsConsumersQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersQueue: " + from + " -> " + to);
    }
    return to;
  }
}
