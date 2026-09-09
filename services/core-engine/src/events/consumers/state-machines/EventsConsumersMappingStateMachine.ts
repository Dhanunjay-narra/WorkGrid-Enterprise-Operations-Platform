export type EventsConsumersMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersMappingStateMachine {
  private allowedTransitions: Record<EventsConsumersMappingState, EventsConsumersMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersMappingState, to: EventsConsumersMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersMappingState, to: EventsConsumersMappingState): EventsConsumersMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersMapping: " + from + " -> " + to);
    }
    return to;
  }
}
