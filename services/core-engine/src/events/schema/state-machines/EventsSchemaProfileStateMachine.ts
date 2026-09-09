export type EventsSchemaProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaProfileStateMachine {
  private allowedTransitions: Record<EventsSchemaProfileState, EventsSchemaProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaProfileState, to: EventsSchemaProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaProfileState, to: EventsSchemaProfileState): EventsSchemaProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaProfile: " + from + " -> " + to);
    }
    return to;
  }
}
