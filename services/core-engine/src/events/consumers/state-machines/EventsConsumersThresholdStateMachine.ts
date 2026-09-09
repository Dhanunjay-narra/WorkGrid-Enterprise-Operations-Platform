export type EventsConsumersThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersThresholdStateMachine {
  private allowedTransitions: Record<EventsConsumersThresholdState, EventsConsumersThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersThresholdState, to: EventsConsumersThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersThresholdState, to: EventsConsumersThresholdState): EventsConsumersThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
