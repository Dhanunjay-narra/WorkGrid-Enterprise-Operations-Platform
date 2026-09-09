export type EventsDeadletterSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterSessionStateMachine {
  private allowedTransitions: Record<EventsDeadletterSessionState, EventsDeadletterSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterSessionState, to: EventsDeadletterSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterSessionState, to: EventsDeadletterSessionState): EventsDeadletterSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterSession: " + from + " -> " + to);
    }
    return to;
  }
}
