export type EventsConsumersSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersSessionStateMachine {
  private allowedTransitions: Record<EventsConsumersSessionState, EventsConsumersSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersSessionState, to: EventsConsumersSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersSessionState, to: EventsConsumersSessionState): EventsConsumersSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersSession: " + from + " -> " + to);
    }
    return to;
  }
}
