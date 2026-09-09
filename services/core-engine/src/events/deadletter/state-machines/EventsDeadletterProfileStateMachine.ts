export type EventsDeadletterProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterProfileStateMachine {
  private allowedTransitions: Record<EventsDeadletterProfileState, EventsDeadletterProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterProfileState, to: EventsDeadletterProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterProfileState, to: EventsDeadletterProfileState): EventsDeadletterProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterProfile: " + from + " -> " + to);
    }
    return to;
  }
}
