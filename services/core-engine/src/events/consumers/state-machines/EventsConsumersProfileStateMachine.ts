export type EventsConsumersProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersProfileStateMachine {
  private allowedTransitions: Record<EventsConsumersProfileState, EventsConsumersProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersProfileState, to: EventsConsumersProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersProfileState, to: EventsConsumersProfileState): EventsConsumersProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersProfile: " + from + " -> " + to);
    }
    return to;
  }
}
