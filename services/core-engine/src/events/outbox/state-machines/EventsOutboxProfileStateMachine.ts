export type EventsOutboxProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxProfileStateMachine {
  private allowedTransitions: Record<EventsOutboxProfileState, EventsOutboxProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxProfileState, to: EventsOutboxProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxProfileState, to: EventsOutboxProfileState): EventsOutboxProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxProfile: " + from + " -> " + to);
    }
    return to;
  }
}
