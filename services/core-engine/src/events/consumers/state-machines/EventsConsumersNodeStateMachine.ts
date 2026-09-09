export type EventsConsumersNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersNodeStateMachine {
  private allowedTransitions: Record<EventsConsumersNodeState, EventsConsumersNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersNodeState, to: EventsConsumersNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersNodeState, to: EventsConsumersNodeState): EventsConsumersNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersNode: " + from + " -> " + to);
    }
    return to;
  }
}
